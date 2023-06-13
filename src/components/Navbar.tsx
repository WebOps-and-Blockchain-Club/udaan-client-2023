import Link from 'next/link';
import Image from 'next/image';
import React, { MutableRefObject } from 'react';
import { useState,useRef } from 'react';
import UdaanLogo from '#/UdaanLogo.png'
import { CaretDown, CaretUp } from "@phosphor-icons/react";

const Navbar = () => {
  const refsidenav = useRef() as MutableRefObject<HTMLDivElement>;
  const openSidenav=()=>{
    refsidenav.current.style.maxWidth="190px"
  }
  const closeSidenav=()=>{
    refsidenav.current.style.maxWidth="0px"
  }

  return (
    <div className="nav">
      <div className="menubutton" onClick={openSidenav}>&#9776;</div>
      <div className="navimage">
        <Link href={'#'} passHref legacyBehavior>
          <a><Image alt="Ncc Udaan Logo" src={UdaanLogo}></Image></a>
        </Link>
      </div>
      <div ref={refsidenav} className="sideNavigation">
      <div className="closebutton" onClick={closeSidenav}>&times;
      </div>
        <div className='pagelinks'>
        <ul>
          <li>
            <Link href={'#'} passHref legacyBehavior>
              <a>HOME</a>
            </Link>
          </li>
          <div className='dropdown'>
            <li>
              <Link href={'#'} passHref legacyBehavior>
                <a>ABOUT US <CaretDown className='caretdown'/><CaretUp className='caretup'/></a>
              </Link>
              <div className="submenu">
                <ul>
                  <li>
                    <Link href={'#'} passHref legacyBehavior>
                      <a>OBJECTIVES</a>
                    </Link>
                  </li>
                  <li>
                    <Link href={'#'} passHref legacyBehavior>
                      <a>ALUMINI</a>
                    </Link>
                  </li>
                  <li>
                    <Link href={'#'} passHref legacyBehavior>
                      <a>
                        CHAPTERS
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
          </div>
          <li>
            <Link href={'#'} passHref legacyBehavior>
              <a>EVENTS</a>
            </Link></li>
          <li>
            <Link href={'#'} passHref legacyBehavior>
              <a>REGISTER</a>
            </Link></li>
          <li>
            <Link href={'#'} passHref legacyBehavior><a>DONATE</a>
            </Link></li>
          <li>
            <Link href={'#'} passHref legacyBehavior><a>CONTACTS</a>
            </Link></li>
          <li>
            <Link href={'#'} passHref legacyBehavior><a>FIRST RESPONDER</a>
            </Link>
          </li>
        </ul>
        </div>
        
      </div>
    </div>

  );
}

export default Navbar;





