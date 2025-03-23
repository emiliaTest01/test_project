import { useState } from "react";

interface PostFormProps {
    onNewPost: (newPost: Post) => void;
}

interface Post {
    id: number;
    content: string;
    createdAt: string;
}

const PostForm = ({ onNewPost }: PostFormProps) => {
    const [newPost, setNewPost] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const res = await fetch("/api/posts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ content: newPost }),
        });
        const data = await res.json();
        onNewPost(data); // Pass the new post back to the parent
        setNewPost("");
    };

    return (
        <form onSubmit={handleSubmit} className="mt-6">
            <input
                type="text"
                className="border-2 border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                placeholder="Write a post..."
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
                required
            />
            <button
                className="bg-blue-600 text-white px-6 py-3 mt-4 w-full rounded-lg hover:bg-blue-700 transition"
                type="submit"
            >
                Submit
            </button>
        </form>
    );
};

export default PostForm;
