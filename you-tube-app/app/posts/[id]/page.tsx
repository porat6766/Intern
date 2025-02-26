"use client"

import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

interface Post {
    id: number;
    title: string;
    body: string;
    tags: string[];
    reactions: {
        likes: number;
        dislikes: number;
    };
    views: number;
    userId: number;
}

const PostPage = () => {
    const { id } = useParams(); // מקבל את ה-ID מה-URL
    const [post, setPost] = useState<Post | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!id) return;

        const fetchPost = async () => {
            try {
                const response = await fetch(`/api/posts/${id}`);
                if (!response.ok) throw new Error("Post not found");
                const data = await response.json();
                setPost(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, [id]);

    if (loading) return <p className="text-center mt-10">Loading...</p>;
    if (!post) return <p className="text-center text-red-500 mt-10">Post not found</p>;

    return (
        <div className="mt-10 max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">{post.title}</h1>
            <p className="text-gray-700 mb-4">{post.body}</p>

            <div className="flex gap-2 mb-4">
                {post.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 text-sm bg-blue-200 text-blue-800 rounded-full">
                        #{tag}
                    </span>
                ))}
            </div>

            <div className="flex justify-between text-gray-600 text-sm">
                <span>👀 {post.views} Views</span>
                <span>👍 {post.reactions.likes} | 👎 {post.reactions.dislikes}</span>
            </div>
        </div>
    );
};

export default PostPage;
