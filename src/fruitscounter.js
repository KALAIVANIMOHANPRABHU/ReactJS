import React,{useState} from 'react';
import './fruitscounter.css';
import img1 from './mango img.jpeg';
import img2 from './banana img.jpeg';
import { Menu } from './menu';
 export function Fruit()
{
    const[add,setAdd]=useState(0);
    const[count,setCount]=useState(0);
    return(
        <div>
            <Menu/>
        <div className='fruit'>
            <div className='fruit1'>
            <h1 className='he'>Bob ate<span id='id1'> {add}</span> mangoes <span id='id1'>{count}</span> bananas</h1>
            <div className='div5'>
            <img src={img1} className='ige1'/>
            <img src={img2} className='ige2'/></div>
            <div>
            <button className='bt1'  onClick={()=>setAdd(add+1)}>Eat Mango</button>
            <button className='bt2' onClick={()=>setCount(count+1)}>Eat banana</button>
                
        </div>
                
                
        </div></div></div>
    );
}
