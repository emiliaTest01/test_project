interface Post {
    id: number;
    content: string;
    createdAt: string;
}

interface PostListProps {
    posts: Post[];
}

const PostList = ({ posts }: PostListProps) => {
    return (
        <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Posts</h2>
            <div className="overflow-y-auto" style={{ maxHeight: '400px' }}>
                <table className="min-w-full table-auto bg-white border border-gray-200 shadow-md rounded-lg overflow-hidden">
                    <thead className="bg-gray-200">
                    <tr>
                        <th className="px-4 py-2 text-left text-gray-700">Post Content</th>
                        <th className="px-4 py-2 text-left text-gray-700">Date Created</th>
                    </tr>
                    </thead>
                    <tbody>
                    {posts.map((post) => (
                        <tr key={post.id} className="border-t">
                            <td className="px-4 py-3 text-gray-700">{post.content}</td>
                            <td className="px-4 py-3 text-gray-500">{new Date(post.createdAt).toLocaleString()}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PostList;
