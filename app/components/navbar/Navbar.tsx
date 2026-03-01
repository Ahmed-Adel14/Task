"use client";
import { useState } from "react";
import Image from "next/image";

function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <div className="max-w-360 mx-auto px-4 pt-4 flex items-center justify-between">
                <div className="flex items-center gap-6">
                    <h1 className="cursor-pointer text-2xl md:text-[40px] font-semibold">Logo</h1>

                    <div className="hidden sm:flex items-center gap-2">
                        <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                        <span className="text-sm md:text-base">EN</span>
                    </div>
                </div>

                <div className="hidden md:flex items-center gap-6">
                    <span className="cursor-pointer">Demos</span>
                    <span className="cursor-pointer">Hosting</span>
                    <span className="cursor-pointer">ProHosting</span>
                    <span className="cursor-pointer">Domains</span>
                    <span className="cursor-pointer">Need Help?</span>
                    <span className="cursor-pointer">Pages</span>
                    <span className="cursor-pointer">Contact Us</span>

                    <div className="px-5 h-10 bg-[#2B1F51] hover:bg-[#1a1233] cursor-pointer text-white rounded-md flex items-center gap-2">
                        <span>Client Login</span>
                    </div>
                </div>

                <button onClick={() => setOpen(!open)} className="md:hidden text-2xl">
                    ☰
                </button>
            </div>

            {open && (
                <div className="md:hidden flex flex-col gap-4 px-4 mt-4">
                    <span>Demos</span>
                    <span>Hosting</span>
                    <span>ProHosting</span>
                    <span>Domains</span>
                    <span>Need Help?</span>
                    <span>Pages</span>
                    <span>Contact Us</span>

                    <div className="w-full h-10 bg-[#2B1F51] text-white rounded-md flex items-center justify-center">Client Login</div>
                </div>
            )}

            <div className="relative w-full min-h-screen mt-10">
                <Image src="/image/1.png" alt="hero" fill className="object-cover" priority />

                <div className="relative z-10 flex flex-col items-center text-center px-4 py-20">
                    <h2 className="text-2xl sm:text-3xl md:text-[40px] font-semibold text-white">استضافة WordPress المُدارة</h2>

                    <p className="text-sm sm:text-base text-gray-200 mt-4 max-w-150">
                        انتقل بموقعك الالكتروني إلى مستوى أعلى من السرعة والأداء بسرعة تتجاوز الــ 5 أضعاف. بحلول مصممة خصيصاً لمضاعفة السرعة وتقديم أفضل سرعة أداء لموقعك
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
                        <button className="w-32 h-10 bg-white cursor-pointer text-[#2B1F51] hover:bg-[#1a1233] hover:text-white rounded-md">انشاء حساب</button>

                        <button className="w-32 h-10 border cursor-pointer border-gray-200 text-white rounded-md hover:bg-[#1a1233]">عرض الاسعار</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
