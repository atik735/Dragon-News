import React from 'react';
import Marquee from 'react-fast-marquee';

const Latest = () => {
    return (
        <div className='flex items-center gap-5 bg-base-200 p-3'>
            <p className='text-base-100 px-3 py-2 bg-[#D72050]'>Latest</p>
            <Marquee className='space-x-4' pauseOnHover={true} speed={60}>
             <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quasi quas  officiis facere omnis nulla? Nemo, numquam.</p>
            <p className='font-bold'>at Lorem ipsum dolor  ad  facilis, aspernatur officiis facere omnis nulla? Nemo, numquam.</p>
            <p className='font-bold'>asfs Lorem ipsum dolor sit  omnis nulla? Nemo, numquam.</p> 
            </Marquee>
        </div>
    );
};

export default Latest;