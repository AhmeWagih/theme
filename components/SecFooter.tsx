import Image from 'next/image';
import React from 'react';

const SecFooter = () => {
  return (
    <div
      className="bg-white min-h-[54px] w-full px-8 flex items-center justify-between"
      dir="rtl"
    >
      <div className="flex items-center gap-2">
        <Image src="/assets/footerlogo.png" alt="logo" width={38} height={22} />
        <p className="text-[16px] font-normal leading-[22.4px]">
          مشغل بواسطة قمرة
        </p>
      </div>
      <div className="flex items-center gap-3">
        <Image src="/assets/visa.png" alt="logo" width={40} height={28} />
        <Image src="/assets/amex.png" alt="logo" width={40} height={28} />
        <Image src="/assets/master.png" alt="logo" width={40} height={28} />
        <Image src="/assets/paypal.png" alt="logo" width={40} height={28} />
      </div>
    </div>
  );
};

export default SecFooter;
