import Image from 'next/image';
import React from 'react';

const FirstNav = () => {
  return (
    <div
      className="bg-[#FF6600] text-white flex justify-center items-center min-h-[40px]"
      dir="rtl"
    >
      <div className="flex justify-between flex-wrap gap-4 items-center container py-4">
        <div className="flex flex-wrap gap-6">
          <div className="flex items-center gap-2">
            <Image src="/assets/car.png" alt="logo" width={20} height={20} />
            <p className="text-[14px] font-bold">
              احصل على توصيل مجاني للمنزل (عند الطلب بأكثر من 1000 جنية مصرى)
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Image src="/assets/mail.png" alt="logo" width={20} height={20} />
            <p className="text-[14px] font-bold">Majarah@gmail.com</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-6">
          <div className="flex items-center gap-2">
            <Image src="/assets/user.png" alt="logo" width={20} height={20} />
            <p className="text-[14px] font-bold">تسجيل الدخول</p>
          </div>
          <div className="flex items-center gap-2">
            <Image src="/assets/info.png" alt="logo" width={20} height={20} />
            <p className="text-[14px] font-bold">مساعدة</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstNav;
