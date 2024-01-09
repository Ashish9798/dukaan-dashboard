import { ChevronDown } from 'lucide-react'
import Paylouts from '@/Components/Paylouts'
import { navList } from './navList'

export default function Home() {
  return (
    <main className="h-[100vh] w-full flex justify-between">
      <aside className='w-[224px] bg-[#1E2640] py-[16px] px-[10px] h-full relative'>
        <div className=' flex flex-col justify-between gap-[24px]'>
          <div className='flex justify-between items-center w-[192px]'>
            <div className='flex flex-row gap-[12px]'>
              <img loading='lazy' src='/images/profile-pic.png' width='39px' className='rounded-[4px]' alt='profile-pic' />
              <div className='flex flex-col gap-[4px]'>
                <h1 className='font-[500] text-[15px] leading-[22px]'>Nishyan</h1>
                <a className='font-[400] text-[13px] leading-[16px] underline' href='/'>Visit store</a>
              </div>
            </div>
            <ChevronDown className='cursor-pointer' size={20} />
          </div>
          <div className='flex'>
            <ul className='flex flex-col gap-[4px]'>
              {navList?.map((item, index) => {
                return <li className={`h-[36px] w-[208px] ${item?.isActive && 'bg-[#FFFFFF1A]'} flex flex-row gap-[12px] py-[8px] px-[16px]  hover:bg-[#FFFFFF1A] cursor-pointer rounded-[4px] transition-all duration-300`} key={index}>
                  {item?.icon}
                  <p className='font-[500] text-[14px] leading-[20px]'>
                    {item?.label}
                  </p>
                </li>
              })}
            </ul>
          </div>
          <div className='absolute bottom-4 w-[192px] py-[6px] px-[12px] rounded-[4px] bg-[#353C53] flex flex-row gap-[10px] items-center'>
            <div className='bg-[#1E2640] p-[6px] rounded-[4px]'>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.99995 3.79745C2.42319 3.79745 1.79995 4.35545 1.79995 5.24745V18.7474C1.79995 19.6394 2.42319 20.1974 2.99995 20.1974H21C21.5767 20.1974 22.2 19.6394 22.2 18.7474V15.8475H17C14.8737 15.8475 13.15 14.1237 13.15 11.9975C13.15 9.87116 14.8737 8.14745 17 8.14745H22.2V5.24745C22.2 4.35545 21.5767 3.79745 21 3.79745H2.99995ZM23.7999 8.14745V5.24745C23.7999 3.65417 22.6323 2.19745 21 2.19745H2.99995C1.36758 2.19745 0.199951 3.65417 0.199951 5.24745V18.7474C0.199951 20.3407 1.36758 21.7974 2.99995 21.7974H21C22.6323 21.7974 23.7999 20.3407 23.7999 18.7474V15.8475H23.85V8.14745H23.7999ZM16 11.9475C16 11.478 16.3806 11.0975 16.85 11.0975H18.15C18.6194 11.0975 19 11.478 19 11.9475C19 12.4169 18.6194 12.7975 18.15 12.7975H16.85C16.3806 12.7975 16 12.4169 16 11.9475ZM14.85 11.9975C14.85 10.81 15.8126 9.84745 17 9.84745H22.15V14.1475H17C15.8126 14.1475 14.85 13.1849 14.85 11.9975Z" fill="#ffffff" />
              </svg>
            </div>
            <div className='flex flex-col gap-[2px]'>
              <p className='text-[13px] leading-[16px] font-[400]'>Available credits</p>
              <p className='text-[16px] leading-[24px] font-[500]'>220.10</p>
            </div>
          </div>
        </div>

      </aside>
      <section className='w-full bg-white'>
        <div className='flex flex-row justify-between py-[12px] px-[32px]'>
          <div className='flex flex-row items-center gap-[16px] '>
            <h1 className='font-[500] text-[20px] leading-[28px] text-[#1A181E]'>Payouts</h1>
            <div className='font-[400] text-[12px] leading-[16px] text-[#4D4D4D] flex flex-row gap-[6px]'>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.78076 10.1799C7.78076 10.6093 7.43261 10.9575 7.00315 10.9575C6.57369 10.9575 6.22554 10.6093 6.22554 10.1799C6.22554 9.75039 6.57369 9.40225 7.00315 9.40225C7.43261 9.40225 7.78076 9.75039 7.78076 10.1799Z" fill="#4D4D4D" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.13017 3.40673C6.54699 3.23408 7.00564 3.18891 7.44813 3.27692C7.89062 3.36494 8.29707 3.58219 8.61608 3.90121C8.9351 4.22023 9.15235 4.62668 9.24037 5.06917C9.32839 5.51165 9.28321 5.97031 9.11056 6.38712C8.93791 6.80394 8.64554 7.16019 8.27042 7.41084C8.02632 7.57394 7.75432 7.68756 7.46978 7.74703V7.84702C7.46978 8.10475 7.26084 8.31368 7.00311 8.31368C6.74538 8.31368 6.53644 8.10475 6.53644 7.84702V7.32861C6.53644 7.20484 6.58561 7.08614 6.67313 6.99863C6.76064 6.91111 6.87934 6.86194 7.00311 6.86194C7.26967 6.86194 7.53025 6.7829 7.75188 6.63481C7.97352 6.48671 8.14627 6.27622 8.24828 6.02995C8.35028 5.78368 8.37697 5.51269 8.32497 5.25125C8.27297 4.98981 8.14461 4.74966 7.95612 4.56117C7.76763 4.37269 7.52748 4.24433 7.26604 4.19232C7.0046 4.14032 6.73361 4.16701 6.48734 4.26902C6.24107 4.37103 6.03058 4.54377 5.88249 4.76541C5.73439 4.98705 5.65535 5.24762 5.65535 5.51418C5.65535 5.77192 5.44641 5.98085 5.18868 5.98085C4.93095 5.98085 4.72202 5.77192 4.72202 5.51418C4.72202 5.06303 4.8558 4.622 5.10645 4.24688C5.3571 3.87175 5.71336 3.57938 6.13017 3.40673Z" fill="#4D4D4D" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.00313 1.63255C4.0392 1.63255 1.63646 4.03529 1.63646 6.99922C1.63646 9.96315 4.0392 12.3659 7.00313 12.3659C9.96705 12.3659 12.3698 9.96315 12.3698 6.99922C12.3698 4.03529 9.96705 1.63255 7.00313 1.63255ZM0.703125 6.99922C0.703125 3.51982 3.52373 0.699219 7.00313 0.699219C10.4825 0.699219 13.3031 3.51982 13.3031 6.99922C13.3031 10.4786 10.4825 13.2992 7.00313 13.2992C3.52373 13.2992 0.703125 10.4786 0.703125 6.99922Z" fill="#4D4D4D" />
              </svg>
              How it works
            </div>
          </div>
          <div className='flex flex-row bg-[#F2F2F2] rounded-[6px] py-[9px] px-[16px] w-[400px] items-center gap-[8px]'>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_92081_4430)">
                <path d="M6.8 12.0301C3.9328 12.0301 1.6 9.69143 1.6 6.81704C1.6 3.94266 3.9328 1.60401 6.8 1.60401C9.6672 1.60401 12 3.94266 12 6.81704C12 9.69143 9.6672 12.0301 6.8 12.0301ZM12.2792 10.8375C13.1056 9.70827 13.6 8.3216 13.6 6.81704C13.6 3.05805 10.5496 0 6.8 0C3.0504 0 0 3.05805 0 6.81704C0 10.576 3.0504 13.6341 6.8 13.6341C8.4728 13.6341 10.0048 13.0222 11.1896 12.0132L14.0032 14.8339C14.1592 14.9903 14.364 15.0689 14.5688 15.0689C14.7736 15.0689 14.9784 14.9903 15.1344 14.8339C15.4472 14.5203 15.4472 14.0134 15.1344 13.6999L12.2792 10.8375Z" fill="#808080" />
              </g>
              <defs>
                <clipPath id="clip0_92081_4430">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <input type='search' placeholder='Search features, tutorials, etc' className='font-[400] text-[15px] leading-[22px] text-[#808080] bg-[#F2F2F2] flex-1  focus:outline-none'>
            </input>
          </div>
          <div className='flex flex-row justify-end gap-[12px]'>
            <button className='flex justify-center items-center rounded-full w-[40px] h-[40px] bg-[#E6E6E6]'>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.4211 0.0237288L1.11579 3.38234C0.463158 3.49896 0 4.1287 0 4.85174V12.5019C0 13.225 0.463158 13.8547 1.11579 13.9713L2.88421 14.3212C3.6 15.6273 4.94737 17.8897 6.75789 19.7323C7.36842 20.362 8.37895 19.8022 8.25263 18.8693C8.08421 17.6331 8.12632 16.3037 8.18947 15.3707L18.4211 17.3766C19.2421 17.5398 20 16.8401 20 15.9072V1.49312C20 0.560174 19.2421 -0.139537 18.4211 0.0237288ZM6.46316 9.6331C6.46316 9.88966 6.27368 10.0996 6.04211 10.0996H4.31579C4.08421 10.0996 3.89474 9.88966 3.89474 9.6331V7.72056C3.89474 7.464 4.08421 7.25408 4.31579 7.25408H6.04211C6.27368 7.25408 6.46316 7.464 6.46316 7.72056V9.6331ZM11.2842 9.6331C11.2842 9.88966 11.0947 10.0996 10.8632 10.0996H9.13684C8.90526 10.0996 8.71579 9.88966 8.71579 9.6331V7.72056C8.71579 7.464 8.90526 7.25408 9.13684 7.25408H10.8632C11.0947 7.25408 11.2842 7.464 11.2842 7.72056V9.6331ZM16.1263 9.6331C16.1263 9.88966 15.9368 10.0996 15.7053 10.0996H13.9789C13.7474 10.0996 13.5579 9.88966 13.5579 9.6331V7.72056C13.5579 7.464 13.7474 7.25408 13.9789 7.25408H15.6842C15.9158 7.25408 16.1053 7.464 16.1053 7.72056V9.6331H16.1263Z" fill="#4D4D4D" />
              </svg>
            </button>
            <button className='rounded-full w-[40px] h-[40px] bg-[#E6E6E6] flex justify-center items-center'>
              <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.11092 8.50209C7.51563 9.15823 6.48437 9.15823 5.88908 8.50209L0.615075 2.68901C-0.259446 1.7251 0.424491 0.181107 1.72599 0.181107L12.274 0.181108C13.5755 0.181108 14.2594 1.7251 13.3849 2.68901L8.11092 8.50209Z" fill="#4D4D4D" />
              </svg>

            </button>
          </div>
        </div>
        <Paylouts />
      </section>
    </main>
  )
}
