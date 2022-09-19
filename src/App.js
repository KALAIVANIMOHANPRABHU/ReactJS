import logo from './logo.svg';
import './App.css';
import './super.css';
import './tech.css';
import './fruitscounter.css';
 import './ex1.css';
 import './hooks.css';
 

 import { BrowserRouter,Routes,Route } from 'react-router-dom';
    import { Menu } from './menu';
    import  {Home } from './home'; 
    import { About } from './about';
    import {Hello} from './hello';
    import { Congrats} from './congrats';
    import { Super } from './super';
    import { Tech } from './tech';
    import { Hook } from './hooks';
    import {Fruit} from './fruitscounter';
import { Feed } from './feedback';
import { Feed1 } from './feedback1';

function App() {
 return(
    <div>
{/* <Feed/> 
<Feed1/>   */}
  <BrowserRouter>
  <Routes>
  <Route path='/' element={<Menu/>}/>
  <Route path='/hello' element={<Hello/>}/>
  <Route path='/congrats'element={<Congrats/>}/>
  <Route path='/super' element={<Super/>}/>
  <Route path='/tech' element={<Tech/>}/>
  <Route path='/hooks' element={<Hook/>}/>
  <Route path='/fruitscounter' element={<Fruit/>}/> 
  <Route path='/feedback' element={<Feed/>}/>
  <Route path='/feedback1' element={<Feed1/>}/> 
  </Routes>
  </BrowserRouter>  
     {/* <Menu/>   */}
    {/* {/* {/* <Home/>
    <About/>  */}
    {/* <Hook/> */}
  {/* <Fruit/>  */}
   
   
        
  </div> 
  

 );
}
export default App;
