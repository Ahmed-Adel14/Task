
import Image from "next/image";
function Navbar() {
    return (
        <div>
            <div className=" w-[1440px] h-[85px] mx-auto flex justify-between mt-2.5">
                <div className="flex items-center gap-6">
                    <h1 className="cursor-pointer text-[40px] font-semibold pl-2.5">Logo</h1>
                    <div className="flex items-center gap-2 mt-2">
                        <div className="w-4 h-4 bg-gray-400 rounded-full"></div>
                        <span className="text-[16px]">EN</span>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <span className="cursor-pointer text-[16px] text-[#000000]">Demos</span>
                    <span className="cursor-pointer text-[16px] text-[#000000]">Hosting</span>
                    <span className="cursor-pointer text-[16px] text-[#000000]">ProHosting</span>
                    <span className="cursor-pointer text-[16px] text-[#000000]">Domains</span>
                    <span className="cursor-pointer text-[16px] text-[#000000]">Need Help?</span>
                    <span className="cursor-pointer text-[16px] text-[#000000]">Pages</span>
                    <span className="cursor-pointer text-[16px] text-[#000000]">Contact Us</span>
                    <div className="w-34 h-10 gap-1.5 bg-[#2B1F51] hover:bg-[#1a1233] cursor-pointer text-white rounded-md  flex items-center justify-center">
                        <div className="text-[16px]">client login</div>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M9 18V16H16V2H9V0H16C16.55 0 17.021 0.196 17.413 0.588C17.805 0.98 18.0007 1.45067 18 2V16C18 16.55 17.8043 17.021 17.413 17.413C17.0217 17.805 16.5507 18.0007 16 18H9ZM7 14L5.625 12.55L8.175 10H0V8H8.175L5.625 5.45L7 4L12 9L7 14Z"
                                fill="white"
                            />
                        </svg>
                    </div>
                </div>
            </div>

            <div className="w-full h-[969.8905639648438px] flex flex-col  items-center text-center mt-12 bg-cover bg-center" style={{ backgroundImage: "url('/image/1.png')" }}>
                <div className="flex flex-col mt-10 text-center">
                    <div className="text-[40px] font-semibold text-white">استضافة WordPress المُدارة</div>
                    <div className="text-[16px] text-gray-200 mt-2 max-w-150">
                        انتقل بموقعك الالكتروني إلى مستوى أعلى من السرعة والأداء بسرعة تتجاوز الــ 5 أضعاف. بحلول مصممة خصيصاً لمضاعفة السرعة وتقديم أفضل سرعة أداء لموقعك
                    </div>
                    <div className="flex items-center gap-5 mt-5 justify-center">
                        <div className="w-32 h-10  hover:bg-[#1a1233] cursor-pointer text-white rounded-md flex items-center justify-center">انشاء حساب</div>
                        <div className="w-32 h-10 bg-transparent hover:bg-[#1a1233] cursor-pointer border border-gray-200 text-white rounded-md flex items-center justify-center">عرض الاسعار</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
