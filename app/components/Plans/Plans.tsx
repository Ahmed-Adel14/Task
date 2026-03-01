import React from "react";

function Plans() {
    const topColors = ["#FBE06B", "#C6CDE0", "#69A0E0"];

    return (
        <div className="py-16 px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-[#2B1F51] text-center mb-12">اختار الخطط</h2>
            <div className="max-w-300 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {topColors.map((color, index) => (
                    <div key={index} className="shadow-lg rounded-lg flex flex-col overflow-hidden bg-white">
                        <div className="h-2" style={{ backgroundColor: color }}></div>

                        <div className="p-6 flex flex-col gap-4">
                            <h3 className="text-2xl font-semibold text-[#092346] text-center">P2-HOST</h3>

                            <div className="text-5xl md:text-6xl font-bold text-[#092346] text-center">91.30</div>

                            <div className="flex items-center justify-center gap-3">
                                <span className="text-lg text-gray-400 ">د.ل120</span>
                                <span className="px-3 py-1 bg-[#FEE9DF] text-[#F67A3C] text-sm rounded-md">تخفيض 30%</span>
                            </div>

                            <button className="mx-auto px-6 py-2 bg-[#2B1F51] hover:bg-[#1a1233] text-white rounded-md transition">اطلب الان</button>

                            <hr className="my-4" />

                            <div className="space-y-2 text-sm md:text-base">
                                <p>
                                    <strong>60GB</strong> NVMe Storage
                                </p>
                                <p>
                                    <strong>15</strong> Website(s)
                                </p>
                                <p>
                                    <strong>4GB</strong> RAM
                                </p>
                                <p>
                                    <strong>cPanel</strong> Control Panel
                                </p>
                                <p>
                                    <strong>Unlimited</strong> Subdomains
                                </p>
                                <p>
                                    <strong>Unlimited</strong> MySQL & SQL Databases
                                </p>
                                <p>
                                    <strong>Unlimited</strong> Email Account
                                </p>
                                <p>
                                    <strong>Unlimited</strong> FTP Accounts
                                </p>
                            </div>

                            <div className="mt-6 text-center text-sm">Dedicated Name Server (ns1, ns2)</div>

                            <div className="text-center text-[#2B1F51] text-sm cursor-pointer hover:underline">compare package</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Plans;
