import React from "react";
import Image from "next/image";
function page() {
    return (
        <div>
            <div className=" mb-3 text-center text-[40px] font-bold text-[#2B1F51] mt-15">يمكنك بناء موقعك فى 2 خطوات</div>
            <div className="mt-10 w-284.75 h-188.25 mx-auto">
                <Image src="/image/4.png" alt="banner4" width={1139} height={753} className="h-full w-full" />
            </div>
            <div className="w-292 mx-auto mt-20 flex justify-between">
                <div className="w-92.5 h-60 bg-[#FFFFFF] flex flex-col hover:shadow-xl hover:-translate-y-2 transition-all duration-300 gap-5 items-end text-right shadow-[0_4px_16px_0_rgba(0,0,0,0.1)] rounded-2xl px-6 py-6">
                    <div className="w-11.25 h-11.25 rounded-full border-2 border-blue-500 flex justify-center items-center shadow-md">
                        <div className="w-8.75 h-8.75 rounded-full bg-blue-500 flex justify-center items-center">
                            <span className="text-white text-[20px] font-bold">5</span>
                        </div>
                    </div>

                    <div className="text-[16px] font-semibold text-black">قم بنشر أو حفظ الموقع – بنقرة واحدة</div>

                    <div className="text-[14px] text-black leading-relaxed">يمكنك نشر موقعك على الإنترنت، أو حفظ مسودة لموقعك دون نشره.</div>
                </div>

                <div className="w-92.5 h-60 bg-[#FFFFFF] flex flex-col hover:shadow-xl hover:-translate-y-2 transition-all duration-300 gap-5 items-end text-right shadow-[0_4px_16px_0_rgba(0,0,0,0.1)] rounded-2xl px-6 py-6">
                    <div className="w-11.25 h-11.25 rounded-full border-2 border-blue-500 flex justify-center items-center shadow-md">
                        <div className="w-8.75 h-8.75 rounded-full bg-blue-500 flex justify-center items-center">
                            <span className="text-white text-[20px] font-bold">4</span>
                        </div>
                    </div>

                    <div className="text-[16px] font-semibold text-black">قم بمعاينة الموقع</div>

                    <div className="text-[14px] text-black leading-relaxed">ألق نظرة على موقع الويب الخاص بك بالقالب المحدد، قبل أن تقوم بنشره للعلن.</div>
                </div>

                <div className="w-92.5 h-60 bg-[#FFFFFF] flex flex-col hover:shadow-xl hover:-translate-y-2 transition-all duration-300 gap-5 items-end text-right shadow-[0_4px_16px_0_rgba(0,0,0,0.1)] rounded-2xl px-6 py-6">
                    <div className="w-11.25 h-11.25 rounded-full border-2 border-blue-500 flex justify-center items-center shadow-md">
                        <div className="w-11.25 h-11.25 rounded-full border-2 border-blue-500 flex justify-center items-center shadow-md">
                            <div className="w-8.75 h-8.75 rounded-full bg-blue-500 flex justify-center items-center">
                                <span className="text-white text-[20px] font-bold">3</span>
                            </div>
                        </div>
                    </div>

                    <div className="text-[16px] font-semibold text-black">عزز وظائف موقعك</div>

                    <div className="text-[14px] text-black leading-relaxed">
                        احصل على العديد من المكونات الإضافية والأدوات والوظائف التي تحتاجها لتحسين موقعك. بما في ذلك الأساسيات مثل معرض الصور والوسائط ومنصات التواصل الاجتماعي والمزيد..
                    </div>
                </div>
            </div>
        </div>
    );
}

export default page;
