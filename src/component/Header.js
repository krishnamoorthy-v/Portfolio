import '../App.css';
import { Bars3Icon} from '@heroicons/react/24/solid'
import { useState } from 'react';

export default function Header() {
    const [toggleMenu, setToggleMenu] = useState(false);

    return(
    <header className='flex flex-row justify-between px-5 py-5 bg-primary'>

        <div>
            <a href="#" className='font-bold text-white'>Krishnamoorthy v</a>
        </div>

        <nav className='hidden md:block'>
            <ul className='flex flex-row text-white'>
                <li> <a href='/'>HOME</a></li>
                <li><a href='#about'>ABOUT</a></li>
                <li><a href='#project'>Project</a></li>
                <li><a href="#resume">Resume</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>
        </nav>

        {toggleMenu && <nav className='block md:hidden '>
            <ul onClick={()=>{setToggleMenu(!toggleMenu)}} className='flex flex-col text-white mobile-nav'>
            <li> <a href='/'>HOME</a></li>
                <li><a href='#about'>ABOUT</a></li>
                <li><a href='#project'>Project</a></li>
                <li><a href="#resume">Resume</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>
        </nav> }

        <button onClick={()=> setToggleMenu(!toggleMenu)} className='md:hidden' ><Bars3Icon className='text-white h-5'/></button>

    </header>
    );

}