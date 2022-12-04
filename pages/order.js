import {useAuth0} from "@auth0/auth0-react";
import React, {useEffect, useState} from "react";
import Link from "next/link";
export default function Order(){
    const { loginWithRedirect,logout,isAuthenticated,user,getAccessTokenSilently} = useAuth0();
    const [text,textSet] = useState("");
    const [url,urlSet] = useState("null");
    const [email,emailSet] = useState("");
    useEffect(()=>{
        const url = window.location.href;
        console.log(url);
        urlSet(url);
        console.log(window)
    },[])
    const onSubmit = async (e)=>{
        e.preventDefault();
        alert("Siparişinizi Aldık \n" +
            "En yakın zamanda sizinle iletişime geçeceğiz.");
        window.location.replace("https://nartdeveloper.com")
        const usertoken = await getAccessTokenSilently();
        const response = await fetch("/api/comment",{
            method :"POST",
            body: JSON.stringify({text,usertoken,url,email}),
            headers:{
                "Content-Type":"application/json",
            }
        })
        const data = await response.json();
    }
    return (
        <div className={"bg-gray-200 bg-opacity-70"}>
            <div className="site-6xl-container p-10">
                <h1 className="text-5xl font-bold text-center text-gray-800">Özel Sipariş</h1>
                    <h1 className="text-3xl text-center text-gray-600 mt-6 font-extralight">Bize açık ve net bir şekilde hayallerinizden bahsedin. Bizde sizin için bunu sanal ortama taşıyalım.</h1>
                <div>
                    <form onSubmit={onSubmit} className="mt-6">
                        <div className={"flex flex-col"}>
                            <h1 className="text-center text-gray-600 text-xl mb-4">Size ulaşabilmemiz için Email Adresinizi giriniz.</h1>
                        <input type="email" className={"text-zinc-200 text-lg p-4 h-12 bg-zinc-900 bg-opacity-60 rounded-lg border border-nav-green"} onChange={(e)=>emailSet(e.target.value)}/>
                        </div>
                        <div className={"flex flex-col items-center mt-10"}>
                            <h1 className={"text-xl text-gray-600 mb-4"}>Bize Hayallerinizden açık ve anlaşılır bir şekilde bahsedin.</h1>
            <textarea rows="4"
                      className="border border-nav-green w-full p-4 bg-zinc-900 bg-opacity-60 rounded-lg text-zinc-200 text-lg"
                      onChange={(e)=>textSet(e.target.value)}
                      value={text}
            />
                        </div>
                        {isAuthenticated ? <div className="flex justify-between items-center mt-4">
                            <button typeof="button"
                             className="bg-blue-600 text-white px-5 py-2 text-lg rounded
                hover:bg-inherit hover:text-blue-600 ease-in-out duration-200">
                                Send
                            </button>
                            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
                                <img src={user.picture} width={30} className="rounded-full"  />
                                <span className="font-semibold text-lg text-gray-200">{user.name}</span>
                                <button typeof="button"
                                        className="flex rounded bg-red-500 lato px-5 py-2 font-semibold
                                hover:bg-inherit hover:text-red-500 text-lg ease-in-out duration-200"
                                        onClick={() => logout({returnTo:"http://localhost:3000/"})}>
                                    Log Out
                                </button>
                            </div>
                        </div>:<div className="flex justify-end my-4">

                            <button typeof="button"
                                    className="rounded bg-green-500 px-5 lato py-2 font-semibold
                                hover:bg-inherit hover:text-green-500 text-lg ease-in-out duration-200"
                                    onClick={() => loginWithRedirect()}>
                                Log In
                            </button>
                        </div>
                        }
                    </form>
                </div>
            </div>
        </div>

    )
}