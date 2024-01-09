import React from 'react'
const orderList = [
    {
        orderId: '#281212',
        status: 'sucessfully',
        Transactionid: '131634495750',
        RefundAmount: '700',
        OrderAmount: '1500',
        TransitionFees: '1500',
        orderDate: '01/04/2024',
        refundDate: 'Yesterday, 10:30 AM',
    },
    {
        orderId: '#281213',
        status: 'sucessfully',
        Transactionid: '131634495751',
        RefundAmount: '200',
        OrderAmount: '900',
        TransitionFees: '900',
        orderDate: '01/05/2024',
        refundDate: 'Today, 12:15 PM',
    },
    {
        orderId: '#281215',
        status: 'processing',
        Transactionid: '131634495753',
        RefundAmount: '300',
        OrderAmount: '500',
        TransitionFees: '500',
        orderDate: '01/07/2024',
        refundDate: 'Yesterday, 03:45 PM',
    },
    {
        orderId: '#281217',
        status: 'sucessfully',
        Transactionid: '131634495755',
        RefundAmount: '150',
        OrderAmount: '600',
        TransitionFees: '600',
        orderDate: '01/09/2024',
        refundDate: 'Today, 09:30 AM',
    },
    {
        orderId: '#281219',
        status: 'sucessfully',
        Transactionid: '131634495757',
        RefundAmount: '450',
        OrderAmount: '1200',
        TransitionFees: '1200',
        orderDate: '01/11/2024',
        refundDate: 'Today, 02:00 PM',
    },
];

const Payouts = () => {
    // console.log("hi")
    return (
        <div className='w-full bg-white px-[32px] text-[#1E2640] border-t-[1px] border-[#D9D9D9]'>
            <div className='flex justify-between py-[24px]'
            >
                <h1 className='text-[20px] leading-[28px] font-[500] text-[#1A181E]'>Overview</h1>
                <select className='border-[1px] rounded-[4px] border-[#D9D9D9] w-[137px]' name="time">
                    <option value="month">This Month</option>
                    <option value="week">This Week</option>
                    <option value="year">This Year</option>
                </select>
            </div>
            <div className='flex flex-row gap-[20px]'>
                <div className=' bg-[#146EB4] text-white w-full rounded-[8px]'>
                    <div className='flex flex-col p-[20px]'>
                        <div className='flex flex-row'>
                            <div className='flex flex-row gap-[8px] items-center'>
                                <h1 className='text-[16px] leading-[24px] font-[500]'>Next Payout</h1>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_39208_34111)">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.8856 11.6358C8.8856 12.1266 8.48772 12.5245 7.9969 12.5245C7.50609 12.5245 7.1082 12.1266 7.1082 11.6358C7.1082 11.145 7.50609 10.7471 7.9969 10.7471C8.48772 10.7471 8.8856 11.145 8.8856 11.6358Z" fill="white" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.99921 3.89508C7.47557 3.69776 7.99975 3.64614 8.50545 3.74673C9.01115 3.84732 9.47567 4.09561 9.84026 4.4602C10.2048 4.82479 10.4531 5.2893 10.5537 5.79501C10.6543 6.30071 10.6027 6.82488 10.4054 7.30124C10.2081 7.7776 9.87392 8.18475 9.44521 8.47121C9.16624 8.65761 8.85538 8.78746 8.53019 8.85542V8.96969C8.53019 9.26425 8.29141 9.50303 7.99685 9.50303C7.7023 9.50303 7.46352 9.26425 7.46352 8.96969V8.37723C7.46352 8.23578 7.51971 8.10012 7.61973 8.0001C7.71975 7.90008 7.85541 7.84389 7.99685 7.84389C8.3015 7.84389 8.5993 7.75356 8.8526 7.58431C9.1059 7.41506 9.30332 7.1745 9.4199 6.89304C9.53648 6.61159 9.56699 6.30189 9.50756 6.0031C9.44812 5.70431 9.30142 5.42986 9.08601 5.21444C8.87059 4.99903 8.59614 4.85233 8.29735 4.7929C7.99856 4.73347 7.68886 4.76397 7.40741 4.88055C7.12596 4.99713 6.8854 5.19456 6.71615 5.44786C6.5469 5.70116 6.45656 5.99896 6.45656 6.3036C6.45656 6.59815 6.21778 6.83693 5.92323 6.83693C5.62867 6.83693 5.38989 6.59815 5.38989 6.3036C5.38989 5.78799 5.54279 5.28396 5.82924 4.85525C6.1157 4.42653 6.52285 4.09239 6.99921 3.89508Z" fill="white" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.99687 1.86745C4.60953 1.86745 1.86354 4.61343 1.86354 8.00078C1.86354 11.3881 4.60953 14.1341 7.99687 14.1341C11.3842 14.1341 14.1302 11.3881 14.1302 8.00078C14.1302 4.61343 11.3842 1.86745 7.99687 1.86745ZM0.796875 8.00078C0.796875 4.02433 4.02042 0.800781 7.99687 0.800781C11.9733 0.800781 15.1969 4.02433 15.1969 8.00078C15.1969 11.9772 11.9733 15.2008 7.99687 15.2008C4.02042 15.2008 0.796875 11.9772 0.796875 8.00078Z" fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_39208_34111">
                                            <rect width="16" height="16" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>


                            </div>
                        </div>
                        <div className='flex flex-row justify-between pt-[24px]'>
                            <h1 className='font-[500] text-[32px] leading-[38px]'>₹2,312.23</h1>
                            <div className='flex flex-row cursor-pointer items-center gap-[8px]'>
                                <p className='text-[16px] leading-[32px] font-[500] underline'>23 orders</p>
                                <svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.956956 0.292893C1.34748 -0.0976311 1.98064 -0.0976311 2.37117 0.292893L8.37117 6.29289C8.55871 6.48043 8.66406 6.73478 8.66406 7C8.66406 7.26522 8.55871 7.51957 8.37117 7.70711L2.37117 13.7071C1.98065 14.0976 1.34748 14.0976 0.956956 13.7071C0.566432 13.3166 0.566432 12.6834 0.956956 12.2929L6.24985 7L0.956956 1.70711C0.566431 1.31658 0.566431 0.683418 0.956956 0.292893Z" fill="white" />
                                </svg>

                            </div>
                        </div>
                    </div>
                    <div className='rounded-[8px] bg-[#0E4F82] py-[8px] px-[24px] flex flex-row justify-between items-center'>
                        <p className='text-[14px] leading-[20px] font-[400] text-[#F2F2F2]'>
                            Next payout date:
                        </p>
                        <p className='text-[14px] leading-[20px] font-[500] text-[#F2F2F2]'>
                            Today, 04:00PM
                        </p>
                    </div>
                </div>

                <div className='w-full'>
                    <div className=' shadow-[0_2px_6px_0px_rgba(0,0,0,0.1)] p-[20px] '>
                        <div className='flex flex-row '>
                            <div className='flex flex-row gap-[8px] items-center'>
                                <h1 className='text-[16px] leading-[24px] font-[500]'>Amount Pending</h1>
                                <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.54966 11.6358C8.54966 12.1266 8.15178 12.5245 7.66096 12.5245C7.17015 12.5245 6.77227 12.1266 6.77227 11.6358C6.77227 11.145 7.17015 10.7471 7.66096 10.7471C8.15178 10.7471 8.54966 11.145 8.54966 11.6358Z" fill="#4D4D4D" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.66328 3.89508C7.13964 3.69776 7.66381 3.64614 8.16951 3.74673C8.67521 3.84732 9.13973 4.09561 9.50432 4.4602C9.86891 4.82479 10.1172 5.2893 10.2178 5.79501C10.3184 6.30071 10.2668 6.82488 10.0694 7.30124C9.87212 7.7776 9.53798 8.18475 9.10927 8.47121C8.8303 8.65761 8.51944 8.78746 8.19425 8.85542V8.96969C8.19425 9.26425 7.95547 9.50303 7.66092 9.50303C7.36637 9.50303 7.12758 9.26425 7.12758 8.96969V8.37723C7.12758 8.23578 7.18377 8.10012 7.28379 8.0001C7.38381 7.90008 7.51947 7.84389 7.66092 7.84389C7.96556 7.84389 8.26336 7.75356 8.51666 7.58431C8.76996 7.41506 8.96738 7.1745 9.08397 6.89304C9.20055 6.61159 9.23105 6.30189 9.17162 6.0031C9.11218 5.70431 8.96549 5.42986 8.75007 5.21444C8.53466 4.99903 8.2602 4.85233 7.96141 4.7929C7.66263 4.73347 7.35292 4.76397 7.07147 4.88055C6.79002 4.99713 6.54946 5.19456 6.38021 5.44786C6.21096 5.70116 6.12062 5.99896 6.12062 6.3036C6.12062 6.59815 5.88184 6.83693 5.58729 6.83693C5.29274 6.83693 5.05395 6.59815 5.05395 6.3036C5.05395 5.78799 5.20685 5.28396 5.49331 4.85525C5.77976 4.42653 6.18692 4.09239 6.66328 3.89508Z" fill="#4D4D4D" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.66094 1.86745C4.27359 1.86745 1.5276 4.61343 1.5276 8.00078C1.5276 11.3881 4.27359 14.1341 7.66094 14.1341C11.0483 14.1341 13.7943 11.3881 13.7943 8.00078C13.7943 4.61343 11.0483 1.86745 7.66094 1.86745ZM0.460938 8.00078C0.460938 4.02433 3.68449 0.800781 7.66094 0.800781C11.6374 0.800781 14.8609 4.02433 14.8609 8.00078C14.8609 11.9772 11.6374 15.2008 7.66094 15.2008C3.68449 15.2008 0.460938 11.9772 0.460938 8.00078Z" fill="#4D4D4D" />
                                </svg>

                            </div>
                        </div>
                        <div className='flex flex-row justify-between pt-[24px]'>
                            <h1 className='font-[500] text-[32px] leading-[38px]'>₹92,312.20</h1>
                            <div className='flex flex-row cursor-pointer items-center gap-[8px]'>
                                <p className='text-[16px] leading-[32px] font-[500] underline text-[#146EB4]'>13 orders</p>
                                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.62102 5.29289C9.01154 4.90237 9.64471 4.90237 10.0352 5.29289L16.0352 11.2929C16.2228 11.4804 16.3281 11.7348 16.3281 12C16.3281 12.2652 16.2228 12.5196 16.0352 12.7071L10.0352 18.7071C9.64471 19.0976 9.01154 19.0976 8.62102 18.7071C8.23049 18.3166 8.23049 17.6834 8.62102 17.2929L13.9139 12L8.62102 6.70711C8.23049 6.31658 8.23049 5.68342 8.62102 5.29289Z" fill="#146EB4" />
                                </svg>


                            </div>
                        </div>
                    </div>

                </div>
                <div className='w-full'>
                    <div className='shadow-[0_2px_6px_0px_rgba(0,0,0,0.1)] p-[20px] '>
                        <div className='flex flex-row'>
                            <div className='flex flex-row gap-[8px] items-center'>
                                <h1 className='text-[16px] leading-[24px] font-[500]'>Amount Processed</h1>
                                <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.54966 11.6358C8.54966 12.1266 8.15178 12.5245 7.66096 12.5245C7.17015 12.5245 6.77227 12.1266 6.77227 11.6358C6.77227 11.145 7.17015 10.7471 7.66096 10.7471C8.15178 10.7471 8.54966 11.145 8.54966 11.6358Z" fill="#4D4D4D" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.66328 3.89508C7.13964 3.69776 7.66381 3.64614 8.16951 3.74673C8.67521 3.84732 9.13973 4.09561 9.50432 4.4602C9.86891 4.82479 10.1172 5.2893 10.2178 5.79501C10.3184 6.30071 10.2668 6.82488 10.0694 7.30124C9.87212 7.7776 9.53798 8.18475 9.10927 8.47121C8.8303 8.65761 8.51944 8.78746 8.19425 8.85542V8.96969C8.19425 9.26425 7.95547 9.50303 7.66092 9.50303C7.36637 9.50303 7.12758 9.26425 7.12758 8.96969V8.37723C7.12758 8.23578 7.18377 8.10012 7.28379 8.0001C7.38381 7.90008 7.51947 7.84389 7.66092 7.84389C7.96556 7.84389 8.26336 7.75356 8.51666 7.58431C8.76996 7.41506 8.96738 7.1745 9.08397 6.89304C9.20055 6.61159 9.23105 6.30189 9.17162 6.0031C9.11218 5.70431 8.96549 5.42986 8.75007 5.21444C8.53466 4.99903 8.2602 4.85233 7.96141 4.7929C7.66263 4.73347 7.35292 4.76397 7.07147 4.88055C6.79002 4.99713 6.54946 5.19456 6.38021 5.44786C6.21096 5.70116 6.12062 5.99896 6.12062 6.3036C6.12062 6.59815 5.88184 6.83693 5.58729 6.83693C5.29274 6.83693 5.05395 6.59815 5.05395 6.3036C5.05395 5.78799 5.20685 5.28396 5.49331 4.85525C5.77976 4.42653 6.18692 4.09239 6.66328 3.89508Z" fill="#4D4D4D" />
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.66094 1.86745C4.27359 1.86745 1.5276 4.61343 1.5276 8.00078C1.5276 11.3881 4.27359 14.1341 7.66094 14.1341C11.0483 14.1341 13.7943 11.3881 13.7943 8.00078C13.7943 4.61343 11.0483 1.86745 7.66094 1.86745ZM0.460938 8.00078C0.460938 4.02433 3.68449 0.800781 7.66094 0.800781C11.6374 0.800781 14.8609 4.02433 14.8609 8.00078C14.8609 11.9772 11.6374 15.2008 7.66094 15.2008C3.68449 15.2008 0.460938 11.9772 0.460938 8.00078Z" fill="#4D4D4D" />
                                </svg>

                            </div>
                        </div>
                        <div className='flex flex-row justify-between pt-[24px]'>
                            <h1 className='font-[500] text-[32px] leading-[38px]'>₹23,92,312.19</h1>

                        </div>
                    </div>

                </div>
            </div>
            <div className='py-[24px] flex flex-col gap-[24px]'>
                <h1 className='text-[20px] leading-[28px] font-[500] text-[#1A181E]'>Transactions | This Month</h1>
                <div className='flex flex-row gap-[12px]'>
                    <button className={`flex flex-row gap-[10px] py-[6px] px-[16px]  rounded-full bg-[#E6E6E6] text-[#808080]`}>
                        <p className='text-[14px] leading-[20px] font-[500]'>
                            Payouts (22)
                        </p>
                    </button>
                    <button className='flex flex-row gap-[10px] py-[6px] px-[16px]  rounded-full bg-[#146EB4] text-white'>
                        <p className='text-[14px] leading-[20px] font-[500]'>
                            Refund (6)
                        </p>
                    </button>
                </div>
            </div>
            <div className='flex flex-row justify-between pb-[24px]'>
                <div className='flex flex-row bg-white rounded-[6px] py-[9px] px-[16px] w-[400px] items-center gap-[8px] border-[1px] border-[#D9D9D9]'>
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
                    <input type='search' placeholder='Order ID or transaction ID' className='font-[400] text-[15px] leading-[22px] text-[#808080] bg-white flex-1  focus:outline-none'>
                    </input>
                </div>
                <div className='flex flex-row gap-[12px]'>
                    <button className='border-[1px] border-[#D9D9D9] flex flex-row gap-[6px] py-[6px] px-[12px] rounded-[4px] items-center'>
                        Sort
                        <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.624959 7.93424C0.833239 7.72596 1.17093 7.72596 1.37921 7.93424L3.64295 10.198L5.90669 7.93424C6.11497 7.72596 6.45266 7.72596 6.66094 7.93424C6.86922 8.14252 6.86922 8.48021 6.66094 8.68849L4.02007 11.3294C3.81179 11.5376 3.47411 11.5376 3.26583 11.3294L0.624959 8.68849C0.41668 8.48021 0.41668 8.14252 0.624959 7.93424Z" fill="#4D4D4D" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.6429 0.515641C3.93746 0.515641 4.17624 0.754422 4.17624 1.04897L4.17624 10.9522C4.17624 11.2468 3.93746 11.4856 3.6429 11.4856C3.34835 11.4856 3.10957 11.2468 3.10957 10.9522L3.10957 1.04897C3.10957 0.754422 3.34835 0.515641 3.6429 0.515641Z" fill="#4D4D4D" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.3792 4.06695C13.1709 4.27523 12.8332 4.27523 12.6249 4.06695L10.3612 1.8032L8.09745 4.06695C7.88917 4.27523 7.55149 4.27523 7.34321 4.06695C7.13493 3.85867 7.13493 3.52098 7.34321 3.3127L9.98408 0.671834C10.1924 0.463555 10.53 0.463555 10.7383 0.671835L13.3792 3.3127C13.5875 3.52098 13.5875 3.85867 13.3792 4.06695Z" fill="#4D4D4D" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.3612 11.4855C10.0667 11.4855 9.82791 11.2468 9.82791 10.9522L9.82791 1.04896C9.82791 0.75441 10.0667 0.51563 10.3612 0.51563C10.6558 0.51563 10.8946 0.75441 10.8946 1.04896L10.8946 10.9522C10.8946 11.2468 10.6558 11.4855 10.3612 11.4855Z" fill="#4D4D4D" />
                        </svg>

                    </button>
                    <button className='border-[1px] border-[#D9D9D9] flex flex-row gap-[6px] py-[6px] px-[12px] rounded-[4px] items-center'>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.9993 11.9414C18.371 11.9414 18.6811 12.2102 18.7435 12.5968L18.75 12.7L18.7495 16.2321C18.7495 17.5585 17.7164 18.655 16.3813 18.7448L16.2153 18.75L3.77794 18.7499C2.44615 18.7499 1.34529 17.7208 1.25525 16.391L1.25 16.2258V12.6863C1.25 12.2749 1.58596 11.9414 2.00027 11.9414C2.37194 11.9414 2.68197 12.2102 2.74442 12.5968L2.75092 12.7L2.75044 16.2321C2.75044 16.7555 3.14596 17.2013 3.65248 17.2534L3.76695 17.2599L16.2217 17.2602C16.7449 17.2602 17.1902 16.8642 17.2423 16.3577L17.2489 16.2429L17.2492 12.6863C17.2492 12.2749 17.585 11.9414 17.9993 11.9414ZM10.0121 1.25C10.3715 1.25038 10.6815 1.51921 10.744 1.90576L10.7505 2.00892L10.7512 10.8297L13.9124 7.67494C14.1433 7.44469 14.4923 7.39342 14.7961 7.54761L14.9083 7.61495L14.9846 7.68297C15.2334 7.92976 15.2646 8.33058 15.0409 8.65049L14.9652 8.73721L10.5142 13.1745L10.4327 13.2409L10.3271 13.3035L10.2368 13.3399L10.155 13.3617L10.0754 13.374L10.0133 13.3765L9.89007 13.3697L9.78548 13.3471L9.70291 13.3166L9.6007 13.2643L9.54241 13.2224L9.4569 13.1479L5.02399 8.726C4.73169 8.43447 4.73275 7.96287 5.02636 7.67264C5.28648 7.41551 5.69029 7.38633 6.01149 7.60986L6.09848 7.68534L9.25064 10.8296L9.24964 1.9952C9.24964 1.61868 9.53272 1.30251 9.90546 1.25619L10.0121 1.25Z" fill="#4D4D4D" />
                        </svg>


                    </button>
                </div>
            </div>
            <div className='flex flex-row gap-[4px] justify-between bg-[#F2F2F2] py-[10px] px-[12px] rounded-[4px] w-full text-black border-b'>
                <div className=' w-[151px]'>Order Id</div>
                <div className=' w-[151px]'>Status</div>
                <div className=' w-[151px]'>Transaction ID</div>
                <div className=' w-[151px]' >Refund date</div>
                <div className='w-[151px]' >Order amount</div>
            </div>
            <div className=''>
                {orderList?.map((item, index) => {
                    return <>
                        <div key={index} className='text-[12px] border-b flex flex-row gap-[4px] justify-between bg-white py-[10px] px-[12px] rounded-[4px] w-full text-black'>
                            <div key={index} className='w-[151px]  text-blue-600 cursor-pointer '>
                                <a href='/'>
                                    {item?.orderId}
                                </a> </div>
                            <div key={index} className='w-[151px]'>{item?.status === 'sucessfully' ?
                                <div className='flex flex-row gap-2 items-center'>
                                    <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="5.66406" cy="5" r="5" fill="#17B31B" />
                                    </svg>
                                    {item?.status}
                                </div>
                                :
                                <div className='flex flex-row gap-2 items-center'>
                                    <svg width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="5.66406" cy="5" r="5" fill="#999999" />
                                    </svg>

                                    {item?.status}
                                </div>
                            } </div>
                            <div key={index} className='w-[151px]'>{item?.Transactionid} </div>
                            <div key={index} className='w-[151px]'>{item?.refundDate} </div>
                            <div key={index} className='w-[151px] self-end'>{item?.OrderAmount} </div>
                        </div>



                    </>
                })}
            </div>
        </div>
    )
}


export default Payouts
