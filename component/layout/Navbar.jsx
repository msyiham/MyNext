import React, { useEffect, useState, useRef } from "react";
import Link from 'next/link';
import useOnclickOutside from "react-cool-onclickoutside";
import Image from 'next/image';
import { useRouter } from 'next/router';
import logoImg from '../../public/img/logo.png';
import logoImgmbl from '../../public/img/logo-mobile.png';



const Navbar= function() {
  const router = useRouter();
  const useDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
      setIsOpen((prevIsOpen) => !prevIsOpen);
    };

    const closeDropdown = () => {
      setIsOpen(false);
    };

    const ref = useRef(null);
    useOnclickOutside(() => {
      closeDropdown();
    }, ref);

    return {
      isOpen,
      toggleDropdown,
      closeDropdown,
      ref,
    };
  };

const { isOpen: openMenu, toggleDropdown: handleBtnClick, closeDropdown: closeMenu, ref } = useDropdown();
const { isOpen: openMenu1, toggleDropdown: handleBtnClick1, closeDropdown: closeMenu1, ref: ref1 } = useDropdown();
const { isOpen: openMenu2, toggleDropdown: handleBtnClick2, closeDropdown: closeMenu2, ref: ref2 } = useDropdown();
const { isOpen: openMenu3, toggleDropdown: handleBtnClick3, closeDropdown: closeMenu3, ref: ref3 } = useDropdown();
const { isOpen: openMenu4, toggleDropdown: handleBtnClick4, closeDropdown: closeMenu4, ref: ref4 } = useDropdown();

  const [showmenu, setBtnIcon] = useState(false);

  useEffect(() => {
    const header = document.getElementById("header-wrap");
    const totop = document.getElementById("scroll-to-top");
    const sticky = header.offsetTop;

    const scrollCallBack = () => {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        totop.classList.add("show");
      } else {
        header.classList.remove("sticky");
        totop.classList.remove("show");
      }
    };

    window.addEventListener("scroll", scrollCallBack);

    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, []);

    return(
         <nav className="navbar transition">
        <div className="container">

          {/********* Logo *********/}
          <Link  className="navbar-brand" href="/">
            <Image src={logoImg} className="img-fluid d-md-block d-none imginit" alt="logo"/>
            <Image src={logoImg} className="img-fluid d-md-none d-sms-none imginit" alt="logo"/>
          </Link>
          {/********* Logo *********/}

              {/********* Mobile Menu *********/}
              <div className="mobile">
                {showmenu && 
                <div className='menu'>
                   <div className='navbar-item counter'>
                      <Link href="/" onClick={() => setBtnIcon(!showmenu)}>
                      Beranda
                      </Link>
                    </div>
                   <div className='navbar-item counter'>
                      <Link href="/outgiving" onClick={() => setBtnIcon(!showmenu)}>
                      Ucapan
                      </Link>
                    </div>
                   <div className='navbar-item counter'>
                      <Link href="/about-you" onClick={() => setBtnIcon(!showmenu)}>
                      Tentag Kamu
                      </Link>
                    </div>
                   <div className='navbar-item counter'>
                      <Link href="/about" onClick={() => setBtnIcon(!showmenu)}>
                      Tentang Website
                      </Link>
                    </div>

                </div>
                }
          </div>
          {/********* Mobile Menu *********/}

          {/********* Dekstop Menu *********/}
          <div className="dekstop">
          <div className='menu'>


            <div className='navbar-item counter'>
              <Link href="/" className={"${router.pathname === '/' ? 'active' : ''}"}>
              Beranda
              </Link>
            </div>
            <div className='navbar-item counter'>
              <Link href="/outgiving">
              Ucapan
              </Link>
            </div>
            <div className='navbar-item counter'>
              <Link href="/about-you">
              Tentang Kamu
              </Link>
            </div>
            <div className='navbar-item counter'>
              <Link href="/about">
              Tentang Website
              </Link>
            </div>

            </div>
          </div>
          {/********* Dekstop Menu *********/}

          {/********* Side Button *********/}
          <div className="menu_side_area">
              
              {/********* Burger Button *********/}
              <button className="burgermenu" type="button" 
                onClick={() => {
                  setBtnIcon(!showmenu);
                  closeMenu1();
                  closeMenu2();
                  closeMenu3();
                  closeMenu4();
                }}>
                <i className="fa fa-bars" aria-hidden="true"></i>
              </button>
              {/********* Burger Button *********/}
          </div>
          {/********* Side Button *********/}

          

        </div>
      </nav>
    )
}

export default Navbar;