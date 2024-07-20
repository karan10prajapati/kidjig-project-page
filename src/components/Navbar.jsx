import React from 'react'

function Navbar() {
  return (
    <div className='w-full h-[80px] bg-gradient-to-r from-[#000000] from-20%  to-[#101C5C] to-64% fixed top-0 z-10 '> 
         <div className='w-10/12 mx-auto flex justify-between items-center h-full'> 
             <div className='h-[54px]'> 
                <img src="/fe72bd43def70cb321dc93b14a3b55fe.png" alt="" className='w-full h-full' />
             </div>
             <div className='flex gap-6 text-[#E4E6F2] font-Outfit font-normal '> 
                 <div className='h-[18px]'>About</div>
                 <div>Services</div>
                 <div>Process</div>
                 <div>Work</div>
                 <div>Pricing</div>
                 <div>FAQs</div>
             </div> 
             <div> 
                 <button className='pl-8 pr-8 pt-2 pb-2 max-md:p-4 text-white  rounded-xl border-[#6881FF] border-2'> 
                    Book a call
                 </button>
             </div>
         </div>
    </div>
  )
}

export default Navbar