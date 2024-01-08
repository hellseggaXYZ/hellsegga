'use client'

import Zero55Logo from '@/svg/055';
import Image from 'next/image';
import { useState } from 'react';

export default function Zero55() {
 const [showGif, setShowGif] = useState(false);

 return (
   <div onMouseEnter={() => setShowGif(true)} onMouseLeave={() => setShowGif(false)}>
     <div>
       {showGif ? null : <Zero55Logo />}
     </div>
     <div>
       {showGif && <Image
         src={"/055.gif?" + Date.now()} 
         alt="Description of GIF"
         width={70} // Adjust as needed
         height={34} // Adjust as needed
       />}
     </div>
   </div>
 )
}
