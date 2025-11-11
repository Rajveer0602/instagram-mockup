import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsBookmark, BsBookmarkFill } from 'react-icons/bs';
import { FaHeart, FaRegComment, FaRegPaperPlane } from 'react-icons/fa';


export default function Post({ post, onToggleLike, onToggleSave }) {
    return (
        <article className="mb-6 last:mb-0 bg-white rounded-md overflow-hidden border border-gray-100 shadow-sm">
            <div className="flex items-center p-3">
                <img src={post.avatar} alt={`${post.user} avatar`} className="w-10 h-10 rounded-full mr-3 object-cover" loading="lazy" />
                <div className="flex-1">
                    <div className="text-sm font-semibold">{post.user}</div>
                    <div className="text-xs text-gray-500">Location • 2h</div>
                </div>
                <button aria-label="more" className="p-1">⋯</button>
            </div>


            <img src={post.image} alt={`${post.user} post`} className="w-full h-[420px] object-cover" loading="lazy" />


            <div className="p-3 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <button aria-label={`like ${post.user} post`} className="p-1" onClick={() => onToggleLike(post.id)}>
                        {post.liked ? <FaHeart size={24} className="text-red-500" /> : <AiOutlineHeart size={24} className="text-black" />}
                    </button>


                    <button aria-label="comment" className="p-1"><FaRegComment size={21} /></button>


                    <button aria-label="share" className="p-1"><FaRegPaperPlane size={21} /></button>
                </div>


                <button aria-label={`save ${post.user} post`} className="p-1" onClick={() => onToggleSave(post.id)}>
                    {post.saved ? <BsBookmarkFill className="text-2xl text-black" /> : <BsBookmark className="text-2xl text-gray-400" />}
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
    );
}
