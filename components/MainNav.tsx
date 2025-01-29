import Image from 'next/image';
import React from 'react';

const MainNav = () => {
  return (
    <div
      className="bg-[#262E3A] min-h-[130px] text-white flex items-center w-full"
      dir="rtl"
    >
      <div className="flex justify-evenly flex-wrap gap-4 py-4 items-center container">
        <Image src="/assets/logo.png" alt="logo" width={80} height={90} />

        <div className="flex items-center flex-wrap justify-between gap-6 ">
          <div className="flex items-center justify-between bg-white rounded-full px-2 py-2 max-w-[475px] h-[60px]">
            <input
              type="text"
              placeholder="ابحث هنا.."
              className="bg-transparent outline-none w-full text-right text-black px-4"
            />
            <button className="text-white flex items-center justify-center bg-[#FF6600] w-[50px] h-[50px] rounded-full shrink-0">
              <Image
                src="/assets/search.png"
                alt="search"
                width={28}
                height={28}
              />
            </button>
          </div>

          <div className="flex items-center gap-2 bg-[#4B515B] text-white px-3 py-2 h-[60px] min-w-[181px] rounded-full">
            <Image src="/assets/call.png" alt="phone" width={28} height={28} />
            <div className="flex flex-col gap-1">
              <span className="text-[14px] leading-[19.6px] font-normal">
                دعم على مدار 24/7
              </span>
              <span className="text-[16px] leading-[22.4px] font-extrabold">
                +01078787878
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center bg-[#4B515B] rounded-full w-[60px] h-[60px] cursor-pointer hover:bg-[#5a616b] transition-colors">
            <Image src="/assets/cart.png" alt="cart" width={28} height={28} />
          </div>
          <div className="flex items-center justify-center bg-[#4B515B] rounded-full w-[60px] h-[60px] cursor-pointer hover:bg-[#5a616b] transition-colors">
            <Image src="/assets/bars.png" alt="user" width={28} height={28} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNav;
