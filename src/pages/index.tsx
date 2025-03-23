import { useState, useEffect } from "react";
import PostForm from "../components/PostForm";
import PostList from "../components/PostList";

interface Post {
    id: number;
    content: string;
    createdAt: string;
}

export default function Home() {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        fetch("/api/posts")
            .then((res) => res.json())
            .then((data) => setPosts(data));
    }, []);

    const handleNewPost = (newPost: Post) => {
        setPosts([newPost, ...posts]);
    };

    return (
        <div className="container mx-auto p-6 max-w-3xl bg-white shadow-lg rounded-lg">
            <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">Simple Blog</h1>

            <PostForm onNewPost={handleNewPost} />
            <PostList posts={posts} />
        </div>
    );
}
