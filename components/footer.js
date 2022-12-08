import React from "react";
import {useAuth0} from "@auth0/auth0-react";

export default function Footer(){
    const { loginWithRedirect,logout,isAuthenticated,user} = useAuth0();
    return(<div className="bg-gray-600 py-10">
        <div className={"site-6xl-container text-center lg:text-start lg:grid grid-cols-2"}>
            <div className="mb-10">
                <div>
                <a href="/" className="text-white text-2xl hover:text-gray-300 font-bold transition">Nart Developer</a>
                <p className={"text-gray-400 text-lg mt-6 font-thin" }>Nart Developer 2022</p>
                </div>
                <div>
                    <p className={"text-white text-xl mt-10"}>Gelecek Sizlerle</p>
                </div>
            </div>
            <div className="grid grid-cols-2 text-center">
                <div>
                    <p className="text-white font-bold text-2xl">Sayfalar</p>
                    <div className="mt-5">
                        <ul className="text-gray-300 space-y-3 text-xl">
                            <li><a className="hover:text-gray-500 transition font-thin" href="/">Ana Sayfa</a></li>
                            <li><a className="hover:text-gray-500 transition font-thin" href="/about">Hakkımızda</a></li>
                            <li><a className="hover:text-gray-500 transition font-thin" href="/blog">Blog</a></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <p className="text-2xl text-white font-bold text-center">Giriş Yap</p>
                    <div>


                    {isAuthenticated ? <div className="flex flex-col  items-center mt-5 space-y-3 ">
                        <img src={user.picture} className="rounded-full" width="40" />
                        <span className="font-bold kanto text-[0.95rem] text-gray-100">{user.name}</span>
                        <button typeof="button"
                                className="flex rounded lato bg-red-500 px-5 py-2 font-semibold text-inherit
                                hover:bg-inherit hover:text-red-500 text-[1rem] ease-in-out duration-200"
                                onClick={() => logout({returnTo: process.env.NEXT_PUBLIC_URL})}>
                            Çıkış
                        </button>
                    </div>:<div className="mt-5 text-center">
                        <button typeof="button"
                                className="text-gray-300 text-xl font-thin hover:bg-nav-green px-5 py-2 rounded-full hover:text-back-blue transition "
                                onClick={() => loginWithRedirect()}>
                            Kayıt Ol
                        </button>
                    </div>}
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}