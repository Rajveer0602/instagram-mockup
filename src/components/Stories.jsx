import React from 'react';


export default function Stories() {
    return (
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
                    <div className="mt-1 text-[11px] text-gray-600 truncate w-16 text-center">Your Story</div>
                </div>


                {/* Other Stories */}
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
                        <div className="mt-1 text-[11px] text-gray-600 truncate w-16 text-center">user{i + 1}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}