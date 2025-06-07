import Header from "@/components/layout/Header";
import { useState, useEffect } from 'react';
import PostCard from '@/components/common/PostCard';
import {  ApiProps, PostProps } from '@/interfaces';

export default function PostsPage({ posts }: { posts: PostProps[] }) {
 
  return (
    <div>
      <Header />
      <h1 className="text-2xl text-center font-bold mb-6">Posts</h1>
      <div className="space-y-4 p-8">
        {posts.map((post) => (
          <PostCard
            key={post.id}
            userId={post.userId}
            id={post.id}
            title={post.title}
            content={post.content}
          />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10"
  );
  const data = await res.json();

  const posts: PostProps[] = data.map((post: ApiProps) => ({
    userId: post.userId,
    id: post.id,
    title: post.title,
    content: post.body,
  }));

  return {
    props: { posts },
  };
}