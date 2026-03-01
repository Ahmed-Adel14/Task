import React from "react";
import Image from "next/image";
import { CiCircleCheck } from "react-icons/ci";

function Steps() {
    return (
        <div>
            <div className="w-297 h-86.25 mx-auto flex items-center mt-15">
                <Image src="/image/banner2.png" alt="banner" width={613} height={345} className="h-full" />
                <div className="flex flex-col gap-3 ml-auto text-right ">
                    <div className="text-[24px] font-semibold text-[#2B1F51]">منصة ووردبريس محسّنة وبسرعة فائقة</div>
                    <div className="text-[16px] text-[#00000080] leading-relaxed">
                        نقدم لكم خطط استضافة ووردبريس ممتازة قابلة للتطوير وجاهزة لتلبية احتياجاتك المتزايدة مع نمو عملك. لن تضطر لدفع ثمن الخدمات والأجهزة الافتراضية التي لا تحتاجها، لأننا قمنا
                        بتخصيص الخطط لتكون مناسبة لجميع الأعمال، من نقطة البداية المثالية لمعظم الشركات إلى الخطط المتقدمة التي تتعامل مع حركة زيارات العالية.{" "}
                    </div>
                    <div className="flex flex-wrap mt-4">
                        <div className="w-1/2 flex items-center justify-end gap-2 mb-4">
                            <span className="text-[20px] font-normal text-[#000000]">تخزين SSD & NVMe</span>
                            <CiCircleCheck className="text-[#345BE4] text-[24px]" />
                        </div>

                        <div className="w-1/2 flex items-center justify-end gap-2 mb-4">
                            <span className="text-[20px] font-normal text-[#000000]">نسخ احتياطي يومي</span>
                            <CiCircleCheck className="text-[#345BE4] text-[24px]" />
                        </div>

                        <div className="w-1/2 flex items-center justify-end gap-2">
                            <span className="text-[20px] font-normal text-[#000000]">شهادة SSL مجانية</span>
                            <CiCircleCheck className="text-[#345BE4] text-[24px]" />
                        </div>

                        <div className="w-1/2 flex items-center justify-end gap-2">
                            <span className="text-[20px] font-normal text-[#000000]">دعم فني 24/7</span>
                            <CiCircleCheck className="text-[#345BE4] text-[24px]" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-222.5 h-35 mx-auto mt-20">
                <Image src="/image/1000.png" alt="banner" width={890} height={140} className="" />
            </div>
          <div className="px-4">

    <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center text-[#2B1F51] font-bold">
        اكثر من مليون قالب جاهز للتصميم
    </div>

    <div className="text-center max-w-3xl mx-auto mt-4 text-sm sm:text-base text-gray-600">
        احصل على لوحة تحكم ووردبريس مزوّدة بقوالب وثيمات قابلة للتخصيص بالكامل وإضافات سهلة التثبيت، مما يمنحك الحرية الكاملة للتحكم في مظهر موقعك ووظائفه.
    </div>

    <div className="max-w-6xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="h-44 rounded-[10px] bg-[#D9D9D9]"></div>
        <div className="h-44 rounded-[10px] bg-[#D9D9D9]"></div>
        <div className="h-44 rounded-[10px] bg-[#D9D9D9]"></div>
        <div className="h-44 rounded-[10px] bg-[#D9D9D9]"></div>
    </div>

    <div className="w-fit px-6 mx-auto cursor-pointer hover:bg-[#2B1F51] hover:text-white mt-10 flex justify-center items-center h-[40px] rounded-[10px] text-[#2B1F51] border border-[#2B1F51] transition">
        عرض المزيد
    </div>

    <div className="relative max-w-6xl h-[250px] sm:h-[350px] md:h-[400px] mx-auto my-20">
        <Image
            src="/image/3.png"
            alt="banner"
            fill
            className="rounded-[10px] object-cover"
        />

        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
            <div className="text-lg sm:text-2xl md:text-3xl font-semibold text-white mt-8">
                هل لديك موقع ووردبريس فى شركة اخرى ؟
            </div>

            <div className="text-lg sm:text-2xl md:text-3xl text-white">
                نقدم خدمة النقل مجانا
            </div>

            <div className="w-fit px-6 cursor-pointer hover:bg-[#2B1F51] hover:text-white bg-white text-[#333C5E] flex justify-center items-center h-[43px] rounded-[10px] mt-4 transition">
                اطلب الان
            </div>
        </div>
    </div>

</div>
        </div>
    );
}

export default Steps;
