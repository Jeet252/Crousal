import React, { useEffect, useState } from 'react';
import data from "./imagedata";

export default function Crousal() {
    const[style,setstyle] = useState(0)
    const handleclickright = ()=>{
        style===data.length-1?setstyle(0):setstyle(style+1);
    }
    const handleclickleft = ()=>{
        style===0?setstyle(data.length-1):setstyle(style-1);
    }
    useEffect(()=>{
        const timer = setTimeout(()=>{
            style===data.length-1?setstyle(0):setstyle(style+1);
        },2000)
        return ()=> clearTimeout(timer);
    })
  return (
    <div>
      <div className='container'>
        <button onClick={handleclickleft}>left</button>
        <div className='image'>
            {
                data.map((elem,index)=>(
                    <img key={index} src={elem} alt="" style={{display:style===index?"block":"none"}} />
                ))
            }
        </div>
        <button onClick={handleclickright}>right</button>
      </div>
    </div>
  )
}
