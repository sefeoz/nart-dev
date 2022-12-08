import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import React from "react";
export default function Website(){
    return <>
        <section className="site-6xl-container mt-16">
            <h1 className="text-white text-4xl font-extrabold text-center">Web Sitesi</h1>
            <p className="text-gray-200 text-center text-3xl font-thin mt-5">Nart Developer olarak istekleriniz ve hayallerinizi web sitesine dönüştürüyoruz.</p>
            <div className="bg-white my-10 rounded-xl p-5 mx-2 grid grid-cols-5 items-center">
                <img src="/website2.jpeg" className="mx-auto rounded-xl col-span-4" alt=""/>
                <div className=" font-thin ml-4">
                <h1 className="font-bold text-center text-2xl my-6">Blog Sitesi</h1>
                <p className="text-center">Klasik bir blog sitesini sizin isteğinize göre inşaat ediyoruz. Detaylı bilgi almak ve Sipariş oluşturmak için devam ediniz.</p>
                    <div className={"font-bold text-center mt-10 "}>
                        <Link href={"/website"}>
                            <button className="text-center bg-blue-400 hover:bg-nav-green transition py-2 px-5 rounded-full text-center">Devam Et <FontAwesomeIcon className="my-auto" icon={faArrowRight}/></button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="bg-white my-10 rounded-xl p-7 mx-2 grid grid-cols-5 items-center">
                <img src="/website3.jpeg" className="mx-auto rounded-xl col-span-4" alt=""/>
                <div className=" font-thin ml-4">
                <h1 className="font-bold text-center text-2xl my-6">E-ticaret Sitesi</h1>
                <p className="text-center">Klasik bir E-ticaret sitesini sizin isteğinize göre inşaat ediyoruz. Detaylı bilgi almak ve Sipariş oluşturmak için devam ediniz.</p>
                    <div className={"font-bold text-center mt-10 "}>
                        <Link href={"/website"}>
                            <button className="text-center bg-blue-400 hover:bg-nav-green transition py-2 px-5 rounded-full text-center">Devam Et <FontAwesomeIcon className="my-auto" icon={faArrowRight}/></button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="bg-white my-10 rounded-xl p-7 mx-2 grid grid-cols-5 items-center ">
                <img src="/website1.jpeg" className="mx-auto rounded-xl col-span-4" alt=""/>
                <div className=" font-thin ml-4">
                <h1 className="font-bold text-center text-2xl my-6">Statik Site</h1>
                <p className="text-center">Klasik bir Statik sitesini sizin isteğinize göre inşaat ediyoruz. Detaylı bilgi almak ve Sipariş oluşturmak için devam ediniz.</p>
                    <div className={"font-bold text-center mt-10 "}>
                        <Link href={"/website"}>
                            <button className="text-center bg-blue-400 hover:bg-nav-green transition py-2 px-5 rounded-full text-center">Devam Et <FontAwesomeIcon className="my-auto" icon={faArrowRight}/></button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    </>
}
//<div class="bg-contain bg-center ..." style="background-image: url(...)"></div>