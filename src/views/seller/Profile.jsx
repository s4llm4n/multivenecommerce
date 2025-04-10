import React from 'react';

const Profile = () => {
    const image = true

    return (
        <div className='px-2 lg:px-7 py-5'>
            <div className='w-full flex flex-wrap'>
                <div className='w-full md:w-6/12'>
                    <div className='w-full p-4 bg-[#6a5fdf] rounded-md text-[#d0d2d6]'>
                        <div className='flex justify-center items-center py-3'>
                            {
                                image ? <label className='flex justify-center items-center flex-col h-[210px] w-[300px] 
                                cursor-pointer border border-dashed hover:border-red-500 border-[#d0d2d6] relative' htmlFor='img'>
                                    <span></span>
                                </label> : ''
                            }
                        </div>
                    </div>
                </div>
                <div className='w-full md:w-6/12'>

                </div>
            </div>
        </div>
    );
};

export default Profile;