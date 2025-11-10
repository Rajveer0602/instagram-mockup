import React, { useState, useEffect } from "react";
import { FaHeart, FaRegComment, FaRegPaperPlane, FaFacebookMessenger } from "react-icons/fa";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { Home, Search, PlusSquare, Clapperboard, User } from "lucide-react";

/**
 * Responsive Instagram mockup
 * - Header and Bottom Nav are always visible (fixed inside the card)
 * - Header/Nav heights scale with the viewport using a --vh CSS variable
 * - Feed (main) is the only scrollable area between header & nav
 */

export default function InstagramMobileMockup() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: "alex_99",
      avatar: `https://randomuser.me/api/portraits/men/32.jpg`,
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60",
      imageCaption: "Sunset vibes — chasing light.",
      liked: false,
      saved: false,
    },
    {
      id: 2,
      user: "lina.art",
      avatar: `https://randomuser.me/api/portraits/women/44.jpg`,
      image:
        "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=60",
      imageCaption: "Coffee and sketches ☕️✏️",
      liked: false,
      saved: false,
    },
  ]);

  // Set --vh CSS variable so mobile viewport units work reliably across browsers
  useEffect(() => {
    const setVh = () => {
      // --vh will represent 1% of the viewport height in pixels
      document.documentElement.style.setProperty("--vh", `${window.innerHeight / 100}px`);
    };

    setVh();
    window.addEventListener("resize", setVh);
    window.addEventListener("orientationchange", setVh);

    return () => {
      window.removeEventListener("resize", setVh);
      window.removeEventListener("orientationchange", setVh);
    };
  }, []);

  return (
    // lock the page height so header & nav can't be scrolled out of view
    <div className="h-screen overflow-hidden bg-gray-100 flex items-center justify-center">
      {/* Card container:
          - mobile: full width & height
          - md+: fixed width (430px) and full viewport height
      */}
      <div
        className="
          relative
          bg-white
          rounded-3xl
          shadow-2xl
          border border-gray-200
          w-full
          max-w-[430px]
          h-screen
          md:w-[430px]
          md:h-screen
          overflow-hidden
        "
      >
        {/*
          Responsive heights:
          - header uses: calc(var(--vh) * 8)  => ~8vh (adjust multiplier to taste)
          - nav uses:    calc(var(--vh) * 9)  => ~9vh
          These multipliers can be tuned (smaller -> thinner header/nav).
        */}

        {/* Header: fixed inside card and visible always */}
        <header
          className="absolute top-0 left-0 right-0 px-4 flex items-center justify-between border-b border-gray-100 bg-white z-50"
          style={{
            height: "calc(var(--vh) * 8)", // scales with viewport (8 * 1vh)
            minHeight: "48px", // safety minimum so it doesn't get too small on tiny viewports
            maxHeight: "96px", // safety maximum
          }}
        >
          <h1 className="font-mono text-xl font-semibold tracking-wide">
            <img
              src="logo.jpeg"
              alt="Instagram Logo"
              className="h-10 md:h-14 w-auto object-contain"
              loading="lazy"
            />
          </h1>

          <div className="flex items-center gap-3">
            <button aria-label="like" className="p-1">
              <AiOutlineHeart size={24} />
            </button>
            <button aria-label="messages" className="p-1">
              <FaFacebookMessenger size={24} />
            </button>
          </div>
        </header>

        {/* Main scrollable feed — only this area scrolls.
            top/bottom are tied to the same responsive CSS multipliers so layout is consistent.
        */}
        <main
          className="absolute left-0 right-0 overflow-y-auto scrollbar-none"
          style={{
            top: "calc(var(--vh) * 8)", // same multiplier as header height
            bottom: "calc(var(--vh) * 9)", // same multiplier as nav height
          }}
        >
          {/* Stories */}
          <section className="px-3 mb-3 pt-3">
            <div className="flex gap-3 overflow-x-auto scrollbar-none py-2 px-1">
              {/* Your Story */}
              <div className="flex flex-col items-center min-w-[68px]">
                <div className="relative w-16 h-16 rounded-full bg-gray-200 p-[1px] flex items-center justify-center">
                  <img
                    src={`https://randomuser.me/api/portraits/men/45.jpg`}
                    alt="Your Story"
                    className="w-14 h-14 rounded-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 right-0 w-5 h-5 bg-blue-500 border-2 border-white rounded-full flex items-center justify-center text-white text-[10px] font-bold">
                    +
                  </div>
                </div>
                <div className="mt-1 text-[11px] text-gray-600 truncate w-16 text-center">
                  Your Story
                </div>
              </div>

              {/* Other Stories (thin ring via small padding) */}
              {Array.from({ length: 7 }).map((_, i) => (
                <div key={i} className="flex flex-col items-center min-w-[68px]">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 p-[0.5px] flex items-center justify-center">
                    <img
                      src={`https://randomuser.me/api/portraits/men/${i + 10}.jpg`}
                      alt={`user${i + 1}`}
                      className="w-[61px] h-[61px] rounded-full object-cover bg-white"
                      loading="lazy"
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
              <article
                key={post.id}
                className="mb-6 last:mb-0 bg-white rounded-md overflow-hidden border border-gray-100 shadow-sm"
              >
                <div className="flex items-center p-3">
                  <img
                    src={post.avatar}
                    alt={`${post.user} avatar`}
                    className="w-10 h-10 rounded-full mr-3 object-cover"
                    loading="lazy"
                  />
                  <div className="flex-1">
                    <div className="text-sm font-semibold">{post.user}</div>
                    <div className="text-xs text-gray-500">Location • 2h</div>
                  </div>
                  <button aria-label="more" className="p-1">
                    ⋯
                  </button>
                </div>

                <img
                  src={post.image}
                  alt={`${post.user} post`}
                  className="w-full h-[420px] object-cover"
                  loading="lazy"
                />

                <div className="p-3 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <button
                      aria-label={`like ${post.user} post`}
                      className="p-1"
                      onClick={() =>
                        setPosts((prev) =>
                          prev.map((p) => (p.id === post.id ? { ...p, liked: !p.liked } : p))
                        )
                      }
                    >
                      {post.liked ? (
                        <FaHeart size={24} className="text-red-500" />
                      ) : (
                        <AiOutlineHeart size={24} className="text-black" />
                      )}
                    </button>

                    <button aria-label="comment" className="p-1">
                      <FaRegComment size={24} />
                    </button>

                    <button aria-label="share" className="p-1">
                      <FaRegPaperPlane size={24} />
                    </button>
                  </div>

                  <button
                    aria-label={`save ${post.user} post`}
                    className="p-1"
                    onClick={() =>
                      setPosts((prev) =>
                        prev.map((p) => (p.id === post.id ? { ...p, saved: !p.saved } : p))
                      )
                    }
                  >
                    {post.saved ? (
                      <BsBookmarkFill className="text-2xl text-black" />
                    ) : (
                      <BsBookmark className="text-2xl text-gray-400" />
                    )}
                  </button>
                </div>

                <div className="px-3 pb-3 text-sm text-gray-700">
                  <div className="font-semibold mb-1">1,234 likes</div>
                  <div className="mb-2">
                    <span className="font-semibold mr-2">{post.user}</span>
                    {post.imageCaption}
                  </div>
                  <div className="text-xs text-gray-500 mb-2">View all 12 comments</div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gray-200" />
                    <input
                      className="flex-1 bg-transparent outline-none text-sm"
                      placeholder="Add a comment..."
                    />
                    <button className="text-xs font-semibold text-blue-500">Post</button>
                  </div>
                </div>
              </article>
            ))}
          </section>
        </main>

        {/* Bottom nav — fixed and always visible */}
        <nav
          className="absolute bottom-0 left-0 right-0 border-t border-gray-100 bg-white flex items-center justify-between px-8 z-50"
          style={{
            height: "calc(var(--vh) * 9)", // nav = ~9vh
            minHeight: "48px",
            maxHeight: "96px",
          }}
        >
          <div className="flex items-center justify-between w-full">
            <button className="p-1">
              <Home className="w-7 h-7" strokeWidth={1.7} />
            </button>
            <button className="p-1 opacity-70">
              <Search className="w-7 h-7" strokeWidth={1.7} />
            </button>
            <button className="p-1">
              <PlusSquare className="w-8 h-8" strokeWidth={1.7} />
            </button>
            <button className="p-1">
              <Clapperboard className="w-7 h-7" strokeWidth={1.7} />
            </button>
            <button className="p-1">
              <User className="w-7 h-7" strokeWidth={1.7} />
            </button>
          </div>
        </nav>

        <style>
          {`
            .scrollbar-none::-webkit-scrollbar { display: none; }
            .scrollbar-none { -ms-overflow-style: none; scrollbar-width: none; }
          `}
        </style>
      </div>
    </div>
  );
}
