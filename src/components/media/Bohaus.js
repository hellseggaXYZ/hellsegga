'use client'

import LourLogo from '@/svg/lour';
import Image from 'next/image';
import { useState } from 'react';

export default function Bohaus() {
 const [showGif, setShowGif] = useState(false);

 return (
   <div style={{position: 'relative'}} onMouseEnter={() => setShowGif(true)} onMouseLeave={() => setShowGif(false)}>
     <div>
      <LourLogo />
     </div>
     <div style={{position: 'absolute', top: 0, left: 0}}>
       {showGif && <Image
         src={"/lour.gif?" + Date.now()} 
         alt="Description of GIF"
         width={70} // Adjust as needed
         height={70} // Adjust as needed
       />}
     </div>
   </div>
 )
}
