import React, { useState } from 'react';
import Header from './Header';
import Stories from './Stories';
import Post from './Posts'; // corrected import (was './Posts' before)
import BottomNav from './BottomNav';

export default function InstagramMobileMockup() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: 'alex_99',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60',
      imageCaption: 'Sunset vibes — chasing light.',
      liked: false,
      saved: false,
    },
    {
      id: 2,
      user: 'lina.art',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=60',
      imageCaption: 'Coffee and sketches ☕️✏️',
      liked: false,
      saved: false,
    },
  ]);

  const toggleLike = (id) => {
    setPosts((prev) => prev.map((p) => (p.id === id ? { ...p, liked: !p.liked } : p)));
  };

  const toggleSave = (id) => {
    setPosts((prev) => prev.map((p) => (p.id === id ? { ...p, saved: !p.saved } : p)));
  };

  return (
    <div className="h-screen overflow-hidden bg-gray-100 flex items-center justify-center">
      <div
        className="relative bg-white rounded-3xl shadow-2xl border border-gray-200 w-full max-w-[430px] 
                   h-[100dvh] md:w-[430px] md:h-[100dvh] overflow-hidden"
      >
        <Header />

        <main
          className="absolute top-12 sm:top-14 md:top-16 lg:top-20
                     left-0 right-0
                     bottom-12 sm:bottom-14 md:bottom-16 lg:bottom-20
                     overflow-y-auto scrollbar-none"
        >
          <Stories />

          <section className="px-1">
            {posts.map((post) => (
              <Post key={post.id} post={post} onToggleLike={toggleLike} onToggleSave={toggleSave} />
            ))}
          </section>
        </main>

        <BottomNav />
      </div>
    </div>
  );
}
