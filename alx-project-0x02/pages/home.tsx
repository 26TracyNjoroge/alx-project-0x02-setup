import React, { useState } from "react";
import PostModal from "@/components/common/PostModal";
import Card from "@/components/common/Card";
import Header from "@/components/layout/Header";
import { Post } from "@/interfaces";

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);

  const handleAddPost = (newPost: Post) => {
    setPosts((prev) => [newPost, ...prev]);
  };

  return (
    <div className="">
      <Header />
      <div className="p-6 flex justify-center flex-wrap">
        <Card title="Title 1" content="Post Content" />
        <Card title="Title 2" content="Post Content 2" />
      </div>

      <div className="p-3 flex justify-center items-center mb-6">
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex justify-center items-center px-3 py-1 bg-green-600 text-white rounded-md hover:bg-green-700"
        >
          New Post
        </button>
      </div>

      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)} 
        onSubmit={handleAddPost}
      />

      <div className="space-y-4">
        {posts.length === 0 ? (
          <p className="text-gray-500 pl-5">No posts yet.</p>
        ) : (
          posts.map((post, idx) => (
            <div key={idx} className="border rounded-md p-4 shadow-sm bg-white">
              <h2 className="font-semibold text-lg">{post.title}</h2>
              <p className="text-gray-700 mt-2">{post.content}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}