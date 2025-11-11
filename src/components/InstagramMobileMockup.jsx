import React, { useState } from 'react';
import Header from './Header';
import Stories from './Stories';
import Post from './Posts';
import BottomNav from './BottomNav';

export default function InstagramMobileMockup() {
  const [posts, setPosts] = useState([
    { id: 1, user: 'alex_99', avatar: 'https://randomuser.me/api/portraits/men/32.jpg', image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60', imageCaption: 'Sunset vibes — chasing light.', liked: false, saved: false },
    { id: 2, user: 'lina.art', avatar: 'https://randomuser.me/api/portraits/women/44.jpg', image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=60', imageCaption: 'Coffee and sketches ☕️✏️', liked: false, saved: false },
  ]);

  const toggleLike = (id) => setPosts(prev => prev.map(p => p.id === id ? { ...p, liked: !p.liked } : p));
  const toggleSave = (id) => setPosts(prev => prev.map(p => p.id === id ? { ...p, saved: !p.saved } : p));

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Center the phone mockup horizontally; allow document to scroll */}
      <div className="w-full flex justify-center">
        <div className="relative w-full max-w-[430px] bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-visible">
          {/* FIXED header — sticks to viewport top, centered to mockup */}
          <div
            className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] z-50"
            style={{ pointerEvents: 'none' }} // allow clicks to pass to header child if needed we can toggle
          >
            <div style={{ pointerEvents: 'auto' }}>
              <Header />
            </div>
          </div>

          {/* Page content flows in the document — this is the part that scrolls (so Chrome hides its bars) */}
          <main className="pt-12 sm:pt-14 md:pt-16 lg:pt-20 pb-16 sm:pb-18 md:pb-20">
            <Stories />
            <section className="px-1">
              {posts.map(post => (
                <Post key={post.id} post={post} onToggleLike={toggleLike} onToggleSave={toggleSave} />
              ))}
            </section>
          </main>

          {/* FIXED bottom nav — sticks to viewport bottom, centered to mockup */}
          <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[430px] z-50">
            <BottomNav />
          </div>
        </div>
      </div>
    </div>
  );
}
