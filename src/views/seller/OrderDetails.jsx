import React from 'react';

const OrderDetails = () => {
    return (
        <div className='px-2 lg:px-7 pt-5'>
            <div className='w-full p-4 bg-[#6a5fdf] rounded-md'>
                <div className='flex justify-between items-center p-4'>
                    <h2 className='text-xl text-[#d0d2d6]'>Order Details</h2>
                    <select name='' id='' className='px-4 py-2 focus:border-indigo-500 outline-none bg-[#475569] border border-slate-700 rounded-md text-[#d0d2d6]'>
                    <option value=''>pending</option>
                    <option value=''>processing</option>
                    <option value=''>warehouse</option>
                    <option value=''>placed</option>
                    <option value=''>cancelled</option>
                    </select>
                </div>

                <div className='p-4'>
                    <div className='flex gap-4 text-lg text-[#d0d2d6]'>
                        <h2>#343434</h2>
                        <span>3 Jan 2025</span>
                    </div>

                    <div className='flex flex-wrap'>
                        <div className='w-[30%]'>
                            <div className='pr-3 text-[#d0d2d6] text-lg'>
                                <div className='flex flex-col gap-1'>
                                    <h2>Deliver To : WareHouse</h2>
                                    <p><span className='text-sm'>Cecilia ChapmanNulla St. Mankato Mississippi</span></p>
                                </div>
                                <div className='flex justify-start items-center gap-3'>
                                    <h2>Payment Status: </h2>
                                    <span className='text-base'>Paid</span>
                                </div>
                                <span>Price : $232</span>

                                <div className='mt-4 flex flex-col gap-4 bg-[#8288ed] rounded-md'>
                                    <div className='text-[#d0d2d6]'>
                                        <div className='flex gap-3 text-md'>
                                            <img className='w-[50px] h-[50px]' src='http://localhost:3000/images/category/1.jpg' alt=''/>

                                            <div>
                                                <h2>Product Name Here </h2>
                                                <p>
                                                    <span>Brand :</span>
                                                    <span>Easy</span>
                                                    <span className='text-lg'>Quantity: 3</span>
                                                </p>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div className='mt-4 flex flex-col gap-4 bg-[#8288ed] rounded-md'>
                                    <div className='text-[#d0d2d6]'>
                                        <div className='flex gap-3 text-md'>
                                            <img className='w-[50px] h-[50px]' src='http://localhost:3000/images/category/1.jpg' alt=''/>

                                            <div>
                                                <h2>Product Name Here </h2>
                                                <p>
                                                    <span>Brand :</span>
                                                    <span>Easy</span>
                                                    <span className='text-lg'>Quantity: 3</span>
                                                </p>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div className='mt-4 flex flex-col gap-4 bg-[#8288ed] rounded-md'>
                                    <div className='text-[#d0d2d6]'>
                                        <div className='flex gap-3 text-md'>
                                            <img className='w-[50px] h-[50px]' src='http://localhost:3000/images/category/1.jpg' alt=''/>

                                            <div>
                                                <h2>Product Name Here </h2>
                                                <p>
                                                    <span>Brand :</span>
                                                    <span>Easy</span>
                                                    <span className='text-lg'>Quantity: 3</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderDetails;