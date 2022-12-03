import {useAuth0} from "@auth0/auth0-react";
import React from "react";
export default function Order(){
    const { loginWithRedirect,logout,isAuthenticated,user} = useAuth0();
    const onSubmit = (e)=>{
        e.preventDefault();

    }
    return (
        <div className={"bg-gray-200 bg-opacity-70"}>
            <div className="site-6xl-container p-10">
                <h1 className="text-5xl font-bold text-center text-gray-800">Özel Sipariş</h1>
                    <h1 className="text-3xl text-center text-gray-600 mt-6 font-extralight">Bize açık ve net bir şekilde hayallerinizden bahsedin. Bizde sizin için bunu sanal ortama taşıyalım.</h1>
                <div>
                    <form onSubmit={onSubmit}>
            <textarea rows="4"
                      className="border border-dark-blue w-full bg-zinc-900 bg-opacity-60 rounded-lg text-zinc-200 text-lg"
            />
                        {isAuthenticated ? <div className="flex flex-col lg:flex-row  items-center space-x-3 space-y-3 lg:space-y-0">
                            <img src={user.picture} className="rounded-full" width="40" />
                            <span className="font-bold kanto text-[0.95rem] text-gray-100">{user.name}</span>
                            <button typeof="button"
                                    className="flex rounded lato bg-red-500 px-5 py-2 font-semibold text-inherit
                                hover:bg-inherit hover:text-red-500 text-[1rem] ease-in-out duration-200"
                                    onClick={() => logout({returnTo: process.env.NEXT_PUBLIC_URL})}>
                                Çıkış
                            </button>
                        </div>:<div className="mx-auto">
                            <button typeof="button"
                                    className="rounded bg-nav-green px-5 py-2 font-semibold lato text-back-blue
                                hover:bg-inherit hover:text-nav-green text-lg md:text-[1rem] ease-in-out duration-200"
                                    onClick={() => loginWithRedirect()}>
                                Kayıt Ol
                            </button>
                        </div>}
                    </form>
                </div>
            </div>
        </div>

    )
}