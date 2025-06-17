import React from 'react'
import SubNav from './SubNav'
import Lang from './Lang'
import Small from './Small'

export default function NavBar() {
  return (
    <>
    <div className='bg-[url(/NavBg.png)] bg-no-repeat bg-contain bg-left min-h-screen w-[460px] flex flex-col m-0 p-0 position: absolute'>
       <div>
        <img src="/iCon/Main.png" alt="Logo" className='w-20 h-20 mx-auto mt-[37px] ml-[30px]' />
        
       </div>


       <div className="flex flex-col ... mt-[30px] ml-[49px] gap-[20px] ">
  <div>
    <img src="/iCon/home-2.png" alt="Logo" className='w-20 h-20 mx-auto  ' />
  </div>
  <div>
     <img src="/iCon/magic-star.png" alt="Logo" className='w-20 h-20 mx-auto ' />
  </div>
  <div>
     <img src="/iCon/Vector.png" alt="Logo" className='w-20 h-20 mx-auto  ' />
  </div>
  <div>
     <img src="/iCon/briefcase.png" alt="Logo" className='w-20 h-20 mx-auto  ' />
  </div>
  <div>
  
  </div>

 
</div>
<div>
  <div className='flex flex-row'>
    <div className='flex flex-col'>
      <div className='mt-[10px]' >
  <SubNav></SubNav>
  </div >
<Lang></Lang>
    </div>


<div>
  
<Small></Small>
</div>
  </div>

</div>


    </div>
    


   </>


  )
}
