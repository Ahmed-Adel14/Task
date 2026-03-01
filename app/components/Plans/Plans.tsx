import React from "react";

function Plans() {
    const topColors = ["#FBE06B", "#C6CDE0", "#69A0E0"];
    return (
        <div>
            <div className=" mb-3 text-center text-[64px] font-bold text-[#2B1F51] mt-15">اختار الخطط</div>
            <div className="flex justify-between w-262.5 mx-auto h-[789.181640625px]">
                {topColors.map((color, index) => (
                    <div key={index} className="w-77.5 h-full shadow-[0_4px_16px_0_rgba(0,0,0,0.1)] rounded-lg flex flex-col  gap-3">
                        <div className="h-[19.99386215209961] rounded-tl-[10px] rounded-tr-[10px]" style={{ backgroundColor: color }}></div>

                        <div className="my-3 text-[28px] font-semibold text-[#092346] text-center">P2-HOST</div>
                        <div className="text-[80px]  text-[#092346] text-center">91.30</div>

                        <div className="flex items-center gap-3 text-center justify-center">
                            <div className="text-[24px] text-[#00000080]">د.ل120</div>
                            <div className="w-24.25 h-7 bg-[#FEE9DF] text-[#F67A3C] text-center text-[14px] rounded-[10px]">تخفيض 30%</div>
                        </div>

                        <div className="mx-auto flex items-center justify-center w-29 h-9.75 rounded-[5px] bg-[#2B1F51] hover:bg-[#1a1233] cursor-pointer text-white text-center py-2.5 ">اطلب الان</div>

                        <div className="border border-gray-200 w-62.5 mx-auto mb-2"></div>

                        <div className="text-[16px] font-bold ml-8.75">
                            60GB <span className="font-normal">NVMe Storage</span>
                        </div>

                        <div className="text-[16px] font-bold ml-8.75">
                            15 <span className="font-normal"> Website (s)</span>
                        </div>

                        <div className="text-[16px] font-bold ml-8.75">
                            4<span className="font-normal">RAM</span>
                        </div>

                        <div className="text-[16px] font-bold ml-8.75">
                            cPanel <span className="font-normal">Control Panel</span>
                        </div>

                        <div className="text-[16px] font-bold ml-8.75">
                            Unlimited <span className="font-normal"> Subdomains</span>
                        </div>

                        <div className="text-[16px] font-bold ml-8.75">
                            Unlimited <span className="font-normal"> MySQL & SQL Databases</span>
                        </div>

                        <div className="text-[16px] font-bold ml-8.75">
                            Unlimited <span className="font-normal"> Email Account</span>
                        </div>

                        <div className="text-[16px] font-bold ml-8.75">
                            Unlimited <span className="font-normal"> FTP Accounts</span>
                        </div>

                        <div className="mt-5 text-[16px] text-[#000000] text-center">Dedicated Name Server(ns1,ns2)</div>

                        <div className="mt-5 text-[16px] text-[#2B1F51] text-center">compare package</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Plans;
