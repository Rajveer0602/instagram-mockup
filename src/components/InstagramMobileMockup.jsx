import React, { useState, useRef, useEffect } from "react";
import { FaHeart, FaRegComment, FaRegPaperPlane, FaHome, FaSearch, FaFilm, FaFacebookMessenger } from "react-icons/fa";
import { FiPlusSquare } from "react-icons/fi";
import { BsBookmark } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";

export default function InstagramMobileMockup() {
  const maxHeaderHeight = 56;
  const [headerOffset, setHeaderOffset] = useState(0);
  const targetOffset = useRef(0);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  const posts = [
    {
      id: 1,
      user: "alex_99",
      avatar: `https://randomuser.me/api/portraits/men/32.jpg`,
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60",
      imageCaption: "Sunset vibes — chasing light.",
    },
    {
      id: 2,
      user: "lina.art",
      avatar: `https://randomuser.me/api/portraits/women/44.jpg`,
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=60",
      imageCaption: "Coffee and sketches ☕️✏️",
    },
  ];

  const handleScroll = (e) => {
    const currentScrollY = e.target.scrollTop;
    const diff = currentScrollY - lastScrollY.current;

    targetOffset.current = Math.min(0, Math.max(-maxHeaderHeight, targetOffset.current - diff));
    lastScrollY.current = currentScrollY;

    if (!ticking.current) {
      ticking.current = true;
      requestAnimationFrame(smoothHeader);
    }
  };

  const smoothHeader = () => {
    setHeaderOffset((prev) => {
      const delta = (targetOffset.current - prev) * 0.2; // easing factor
      if (Math.abs(delta) < 0.5) return targetOffset.current; // snap when close enough
      requestAnimationFrame(smoothHeader);
      return prev + delta;
    });
    ticking.current = false;
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="relative w-[520px] h-[1020px] rounded-3xl shadow-2xl bg-white overflow-hidden border border-gray-200">

        {/* Header */}
        <header
          className="absolute top-0 left-0 right-0 h-14 px-4 flex items-center justify-between border-b border-gray-100 bg-white z-10"
          style={{ transform: `translateY(${headerOffset}px)` }}
        >
          <h1 className="font-mono text-2xl font-semibold tracking-wide">Instagram</h1>
          <div className="flex items-center gap-3">
            <button aria-label="like" className="p-1"><AiOutlineHeart className="text-2xl" /></button>
            <button aria-label="messages" className="p-1"><FaFacebookMessenger className="text-2xl" /></button>
          </div>
        </header>

        {/* Main content */}
        <main
          className="pb-16 overflow-y-auto h-[1020px] scrollbar-none"
          onScroll={handleScroll}
          style={{ paddingTop: `${maxHeaderHeight}px` }}
        >
          {/* Stories */}
          <section className="px-3 mb-3">
            <div className="flex gap-3 overflow-x-auto scrollbar-none py-2 px-1">

              {/* First story: Your Story */}
              <div className="flex flex-col items-center min-w-[68px] relative">
                <div className="relative w-16 h-16 rounded-full bg-gray-200 p-[2px] flex items-center justify-center">
                  <img
                    src={`https://randomuser.me/api/portraits/men/45.jpg`} // your avatar
                    alt="Your Story"
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  {/* + icon */}
                  <div className="absolute bottom-0 right-0 w-5 h-5 bg-blue-500 border-2 border-white rounded-full flex items-center justify-center text-white text-[10px] font-bold">
                    +
                  </div>
                </div>
                <div className="mt-1 text-[11px] text-gray-600 truncate w-16 text-center">Your Story</div>
              </div>

              {/* Other stories */}
              {Array.from({ length: 7 }).map((_, i) => (
                <div key={i} className="flex flex-col items-center min-w-[68px]">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 p-[2px] flex items-center justify-center">
                    <img
                      src={`https://randomuser.me/api/portraits/men/${i + 10}.jpg`}
                      alt={`user${i + 1}`}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                  </div>
                  <div className="mt-1 text-[11px] text-gray-600 truncate w-16 text-center">
                    user{i + 1}
                  </div>
                </div>
              ))}

            </div>
          </section>

          {/* Posts */}
          <section className="px-1">
            {posts.map((post) => (
              <article key={post.id} className="mb-6 bg-white rounded-md overflow-hidden border border-gray-100 shadow-sm">
                <div className="flex items-center p-3">
                  <img src={post.avatar} alt={post.user} className="w-10 h-10 rounded-full mr-3 object-cover" />
                  <div className="flex-1">
                    <div className="text-sm font-semibold">{post.user}</div>
                    <div className="text-xs text-gray-500">Location • 2h</div>
                  </div>
                  <button aria-label="more" className="p-1">⋯</button>
                </div>
                <img src={post.image} alt="post" className="w-full h-[420px] object-cover" />
                <div className="p-3 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <button aria-label="like" className="p-1"><FaHeart color="red" className="text-2xl" /></button>
                    <button aria-label="comment" className="p-1"><FaRegComment className="text-2xl" /></button>
                    <button aria-label="share" className="p-1"><FaRegPaperPlane className="text-2xl" /></button>
                  </div>

                  <button aria-label="save" className="p-1">
                    <BsBookmark className="text-2xl" />
                  </button>
                </div>
                <div className="px-3 pb-3 text-sm text-gray-700">
                  <div className="font-semibold mb-1">1,234 likes</div>
                  <div className="mb-2"><span className="font-semibold mr-2">{post.user}</span>{post.imageCaption}</div>
                  <div className="text-xs text-gray-500 mb-2">View all 12 comments</div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gray-200" />
                    <input className="flex-1 bg-transparent outline-none text-sm" placeholder="Add a comment..." />
                    <button className="text-xs font-semibold text-blue-500">Post</button>
                  </div>
                </div>
              </article>
            ))}
          </section>
        </main>

        {/* Bottom nav stays static */}
        <nav className="absolute bottom-0 left-0 right-0 h-20 border-t border-gray-100 bg-white flex items-center justify-between px-10">
          <div className="flex items-center justify-between w-full ">
            <button className="p-1 "><FaHome className="text-2xl" /></button>
            <button className="p-1  opacity-70"><FaSearch className="text-2xl" /></button>
            <button className="p-1 ">
              <div className="w-8 h-8 rounded-lg border-2 border-black flex items-center justify-center">
                <span className="text-black font-bold text-3xl pb-1.5">+</span>
              </div>
            </button>
            <button className="p-1"><FaFilm className="text-2xl text-black stroke-[2]" /></button>
            <button className="p-1">
              <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="profile" className="w-9 h-9 rounded-full object-cover" />
            </button>
          </div>
        </nav>

      </div>

      <style>
        {`
          .scrollbar-none::-webkit-scrollbar { display: none; }
          .scrollbar-none { -ms-overflow-style: none; scrollbar-width: none; }
        `}
      </style>
    </div>
  );
}
