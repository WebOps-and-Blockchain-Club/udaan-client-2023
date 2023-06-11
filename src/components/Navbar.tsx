import Link from 'next/link';
import React from 'react';
import { useState } from 'react';

const Navbar = () => {
  const [response, setresponse] = useState(false);
   const myFunction=() =>{
    if(response==false){
      setresponse(true)
    }
    else{
      setresponse(false);
    }
    return undefined;
  }
    return (
        <div>
            <div className={`topnav ${response?"responsive":""}`} id="myTopnav">
                <Link href={'/'} passHref legacyBehavior><a href="#home" className="active">HOME</a></Link>
                <Link href={'/'} passHref legacyBehavior><a href="#news">ABOUT</a></Link>
                <Link href={'/'} passHref legacyBehavior><a href="#news">NEWS</a></Link>
                <Link href={'/'} passHref legacyBehavior><a href="#contact">CONTACTT</a></Link>
                <Link href={'/'} passHref legacyBehavior><a href="#contact">REGISTER</a></Link>
                <Link href={'/'} passHref legacyBehavior><a href="#contact">DONATE</a></Link>
                <Link href={'/'} passHref legacyBehavior><a href="#contact">FIRST RESPONDER</a></Link>
                <div className="dropdown">
                    <button className="dropbtn">DROPDOWN
                        <i className="fa fa-caret-down"></i>
                         {/* try to use side bar insted of mobile menue */}
                    </button>
                    <div className="dropdown-content">
                        <Link href={'/'} passHref legacyBehavior><a href="#">Link 1</a></Link>
                        <Link href={'/'} passHref legacyBehavior><a href="#">Link 2</a></Link>
                        <Link href={'/'} passHref legacyBehavior><a href="#">Link 3 dalaf</a></Link>
                    </div>
                </div>
                <a className="icon" onClick={myFunction}>&#9776;</a>
            </div>
        </div>
    );
}

export default Navbar;
