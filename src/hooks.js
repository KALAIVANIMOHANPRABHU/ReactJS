
import React,{useState} from 'react' ;
import './hooks.css';
import { Menu } from './menu';
 export function Hook()
{
    const[count,setcount]=useState(0);
    return(
        <div>
            <Menu/>
        <div className='hook'>
        <h1>{count}</h1>
        <button className='btn' onClick={()=>setcount(count+1)}>ADD</button>
        {/* <button onClick={()=>setcount(count-1)}>SUB</button> */}
        </div>
        </div>
    );
}