import Link from "next/link";
import {useRouter} from "next/router";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import {faX,faBars} from "@fortawesome/free-solid-svg-icons";
import {useEffect} from "react";
import {useAuth0} from "@auth0/auth0-react";

export default function Header(){
    const { loginWithRedirect,logout,isAuthenticated,user} = useAuth0();
    const router = useRouter();
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    useEffect(()=> {
        const toggle = document.getElementById("toggle");
        const x = document.getElementById("x");
        toggle.addEventListener("click",()=>{
            toggle.classList.add("hidden");
            x.classList.remove("hidden");
        });
        x.addEventListener("click",()=>{
            toggle.classList.remove("hidden");
            x.classList.add("hidden")
        })
    })
    return <nav className="relative flex flex-wrap site-6xl-container items-center justify-center  lg:py-0 mt-12 lg:my-9">
        <div className="container  mx-auto flex flex-wrap items-center justify-center">
            <div className="w-full relative flex justify-center  lg:w-auto lg:static lg:block lg:justify-center">
                <Link href={"/"}>
                    <p className="text-nav-green text-3xl font-extrabold hover:text-white transition mr-5">
                        Nart Developer <span className="font-extralight text-xl"> +Beta</span>
                    </p>
                </Link>
                <button className="cursor-pointer text-2xl leading-none border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none p-0 mt-1.5" type="button" onClick={() => setNavbarOpen(!navbarOpen)}>
                    <div id="toggle">
                        <FontAwesomeIcon className="text-white" icon={faBars}/>
                    </div>
                    <div id="x" className="hidden">
                        <FontAwesomeIcon className="text-white"  icon={faX} />
                    </div>

                </button>
            </div>
            <div className={"lg:flex flex-grow justify-center items-center" + (navbarOpen ? " flex" : " hidden")} id="example-navbar-danger">
                <ul className="font-bold flex text-md flex-col items-center my-3 lg:flex-row list-none lg:ml-auto lg:space-y-0 lg:space-x-2 space-y-3">
                    <li className={`${router.pathname === "/" ? "text-nav-green" : "text-white"}   nav-item hover:text-nav-green text-white py-2 px-5 transition`}>
                        <Link href={"/"}>
                            <p >Ana Sayfa</p>
                        </Link>
                    </li>
                    <li className={`${router.pathname === "/proje" ? "text-nav-green" : "text-white"}   nav-item hover:text-nav-green text-white py-2 px-5 transition`}>
                        <Link href={"/proje"}>
                            <p>Projelerimiz</p>
                        </Link>
                    </li>
                    <li className={`${router.pathname === "/about" ? "text-nav-green" : "text-white"}   nav-item hover:text-nav-green text-white py-2 px-5 transition`}>
                        <Link href={"/about"}>
                            <p>Hakkımızda</p>
                        </Link>
                    </li>
                    <li className={`${router.pathname === "/blog" ? "text-nav-green" : "text-white"}   nav-item hover:text-nav-green text-white py-2 px-5 transition`}>
                        <Link href={"/blog"}>
                            <p>Blog</p>
                        </Link>
                    </li>
                    <div>
                        {isAuthenticated ? <div className="flex flex-col lg:flex-row  items-center space-x-3 space-y-3 lg:space-y-0">
                            <img src={user.picture} className="rounded-full" width="40" />
                            <span className="font-bold kanto text-[0.95rem] text-gray-100">{user.name}</span>
                            <button typeof="button"
                                    className="flex rounded lato bg-red-500 px-5 py-2 font-semibold text-inherit
                                hover:bg-inherit hover:text-red-500 text-[1rem] ease-in-out duration-200"
                                    onClick={() => logout({returnTo: process.env.NEXT_PUBLIC_URL})}>
                                Çıkış
                            </button>
                        </div>:<div className="">
                            <button typeof="button"
                                    className="flex rounded bg-nav-green px-5 py-2 font-semibold lato text-back-blue
                                hover:bg-inherit hover:text-nav-green text-lg md:text-[1rem] ease-in-out duration-200"
                                    onClick={() => loginWithRedirect()}>
                                Kayıt Ol
                            </button>


                        </div>}
                    </div>
                </ul>
            </div>
        </div>
    </nav>
}
