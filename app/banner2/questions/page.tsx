import React from 'react'
import { FaMinus } from "react-icons/fa6";
function page() {
  return (
      <div>
          <div className="w-296.75 mx-auto h-138 mt-10 flex items-center gap-4 ">
              <div className="w-[899px] h-full rounded-[5px] flex flex-col gap-4 p-3.5">
                  <div className="flex justify-between  ">
                      <FaMinus className="text-[#00000080] text-[16px]" />
                      <div className="text-[20px] text-[#2B1F51]">ما هو المُخدّم الافتراضي المخصص (VPS)؟ </div>
                      <div className="text-[14px] mt-4 text-[#000000] leading-relaxed">
                          المخدم الافتراضي هو مُخدّم مقسم إلى بيئات استضافة منفصلة تمامًا. عندما يكون لديك استضافة VPS ، فإن إحدى تلك البيئات مخصصة لك بالكامل. هذا يعني أنك لست مضطرًا إلى مشاركة
                          الموارد (مثل ذاكرة الوصول العشوائي أو وحدة المعالجة المركزية) مع العملاء الآخرين ومن غير المرجح أن تتأثر بسلوكهم.
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default page