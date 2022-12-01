import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Slider from 'react-slick';
function Homepage(){
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        autoplay:true,
        autoplaySpeed: 3000,
        slidesToScroll: 1,
        responsive:[
            {
                breakpoint: 1024,
                settings:{
                    slidesToShow: 1,
                    centerMode: false,
                    arrows:false,

                }
            }
        ]
    };
    return <>
    <section className="max-w-4xl mx-auto my-16">
            <div className="lg:grid lg:grid-cols-2 items-center lg:py-8">
                <img className="img-fluid lg:hidden mx-auto max-h-44 my-12" src="/nart.png" alt=""/>
                <div className=" text-center lg:text-start space-y-3 mx-4 lg:mx-auto">
                    <h1 className="text-white text-5xl font-bold">Nart Developer İle Geleceğinize Işık Tutalım</h1>
                    <p className="text-white font-light lg:py-5 py-2">Sizlere Özel Hizmet ile Nart Developer Her Zaman
                        Yanınzda!</p>
                    <div>
                        <Link href={"/"}>
                            <button className="w-4/5 text-black font-bold bg-nav-green py-5 shadow-xl rounded-full hover:bg-white hover:text-nav-green transition">Özel Sipariş</button>
                    </Link>
                    </div>
                </div>
                <div className="mx-auto hidden lg:block">
                    <img className="img-fluid" src="/nart.png" alt=""/>
                </div>
            </div>
        </section>
        {/*<----------------------------SECTION END------------------------------------------------------>*/}
        <section>
            <p className="text-center text-4xl font-bold text-gray-200">Paketlerimiz</p>
            <p className="text-center text-3xl font-light mt-4 text-gray-300">Nart Yazılım İle Uygun Fiyatlı Sabit Proje Paketlerimiz</p>
            <div className="lg:grid grid-cols-3 mt-10 site-6xl-container">
                <div className={"mx-5 my-4"}>
                    <img src="/index-4.webp" className="mx-auto rounded-xl" alt=""/>
                    <h2 className="text-center text-white text-2xl mt-4 font-bold">Web Sitesi</h2>
                    <p className="text-xl text-gray-200 text-center mt-4">Sizin isteklerinize yönelik klasik web sitesi.</p>
                    <div className="text-center mt-5">
                    <button className="text-center bg-white hover:bg-nav-green transition py-2 px-5 rounded-full text-center">Devam Et <FontAwesomeIcon className="my-auto" icon={faArrowRight}/></button>
                </div>
                </div>
                <div className={"mx-5 my-4"}>
                    <img src="/index-2.jpg" className=" mx-auto rounded-xl" alt=""/>
                    <h2 className="text-center text-white text-2xl mt-4 font-bold">Web Sitesi</h2>
                    <p className="text-xl text-gray-200 text-center mt-4">Sizin isteklerinize yönelik klasik web sitesi.</p>
                    <div className="text-center mt-5">
                        <button className="text-center bg-white hover:bg-nav-green transition py-2 px-5 rounded-full text-center">Devam Et <FontAwesomeIcon className="my-auto" icon={faArrowRight}/></button>
                    </div>
                </div>
                <div className={"mx-5 my-4"}>
                    <img src="/index-3.jpg" className=" mx-auto rounded-xl" alt=""/>
                    <h2 className="text-center text-white text-2xl mt-4 font-bold">Web Sitesi</h2>
                    <p className="text-xl text-gray-200 text-center mt-4">Sizin isteklerinize yönelik klasik web sitesi.</p>
                    <div className="text-center mt-5">
                        <button className="text-center bg-white hover:bg-nav-green transition py-2 px-5 rounded-full text-center">Devam Et <FontAwesomeIcon className="my-auto" icon={faArrowRight}/></button>
                    </div>
                </div>
            </div>
        </section>
        {/*<----------------------------SECTION END------------------------------------------------------>*/}
        <section className="mt-10">
            <div className="max-w-6xl lg:mx-auto lg:grid items-center mx-5 grid-cols-2 ">
                <div className=" mx-auto">
                    <img className="rounded-xl" src="/index-1.jpg" alt=""/>
                </div>
                <div className="mx-8 lg:text-start text-center ">
                    <h1 className="text-3xl font-bold mb-5 text-white">Destek Ekibimiz İle Her Zaman Yanınızdayız.</h1>
                    <ul className="space-y-10 font-thin">
                    <li className="text-xl text-white my-4 align-items-center">Özel istekleriniz ile paralel çalışma.
                    </li>
                    <li className="text-xl text-white my-4 align-items-center">Özel Logo ve Tasarım.</li>
                    <li className="text-xl text-white my-4 align-items-center">Çalışma planı ile rehberlik.
                    </li>
                    </ul>
                    <button className="bg-white text-xl py-2 px-5 rounded-full text-black transition font-thin mt-8 hover:bg-nav-green">Devam Et</button>
                </div>
            </div>
        </section>
        {/*<----------------------------SECTION END------------------------------------------------------>*/}

        <section className="mt-10">
            <div className="max-w-6xl lg:mx-auto lg:grid mx-5 items-center grid-cols-2 ">
                <div className="mx-8 lg:text-start text-center">
                    <h1 className="text-3xl font-bold mb-5 text-white">Nart Yazılım İle Gelecek Size Daha Yakın.</h1>
                    <ul className="space-y-10 font-thin">
                    <li className="text-xl text-white my-4 align-items-center">Yenilikçi ve Güncel Çalışmalar.
                    </li>
                    <li className="text-xl text-white my-4 align-items-center">Kişiye Özel Yazılım Projeleri.</li>
                    <li className="text-xl text-white my-4 align-items-center">Ömür Doyu Destek ve Hizmet.
                    </li>
                    </ul>
                </div>
                <div className=" mx-auto mt-5">
                    <img className="rounded-xl mx-auto" src="/index-5.jpg" alt=""/>
                </div>
            </div>
        </section>
        {/*<----------------------------SECTION END------------------------------------------------------>*/}
        <section className="mt-10 mx-4">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-white text-center text-4xl font-extrabold mb-6">Proje Ekibimiz</h1>

                <div className="">
                <Slider {...settings}>
                    <div className="text-white text-center rounded-xl py-6 mt-5  ">
                        <img className="mx-auto rounded-xl mb-5" src="https://picsum.photos/id/60/300/300/" alt=""/>
                        <p className="text-3xl font-bold mb-5">Baha Nart Şenel</p>
                        <p className={"text-xl"}>Nart CEO</p>
                        <a className={"text-xl"} href="">@bahanart1</a>
                    </div>
                    <div className="text-white text-center rounded-xl py-6 mt-5  ">
                        <img className="mx-auto rounded-xl mb-5" src="https://picsum.photos/id/60/300/300/" alt=""/>
                        <p className="text-3xl font-bold mb-5">Şadan Efe Öz</p>
                        <p className={"text-xl"}>Team Leader</p>
                        <a className={"text-xl"} href="">@sefeoz</a>
                    </div>
                    <div className="text-white text-center rounded-xl py-6 mt-5  ">
                        <img className="mx-auto rounded-xl mb-5" src="https://picsum.photos/id/60/300/300/" alt=""/>
                        <p className="text-3xl font-bold mb-5">Emirhan Şen</p>
                        <p className={"text-xl"}>Marketing Manager</p>
                        <a className={"text-xl"} href="">@emirhansn</a>
                    </div>
                    <div className="text-white text-center rounded-xl py-6 mt-5 ">
                        <img className="mx-auto rounded-xl mb-5" src="https://picsum.photos/id/48/300/300/" alt=""/>
                        <p className="text-3xl font-bold mb-5">Eren Ulaş Özcan</p>
                        <p className={"text-xl"}>Web Design</p>
                        <a className={"text-xl"} href="">@erenulasozcan</a>
                    </div>
                    <div className="text-white text-center rounded-xl py-6 mt-5  ">
                        <img className="mx-auto rounded-xl mb-5" src="https://picsum.photos/id/119/300/300/" alt=""/>
                        <p className="text-3xl font-bold mb-5">Oğuzhan Kavuncuoğlu</p>
                        <p className={"text-xl"}>Marketing Manager</p>
                        <a className={"text-xl"} href="">@oguzhan.kavuncuoglu</a>
                    </div>
                    <div className="text-white text-center rounded-xl py-6 mt-5  ">
                        <img className="mx-auto rounded-xl mb-5" src="https://picsum.photos/id/149/300/300/" alt=""/>
                        <p className="text-3xl font-bold mb-5">Bedirhan Pilatin</p>
                        <p className={"text-xl"}>Lawyer</p>
                        <a className={"text-xl"} href="">@bedirhanpilatinn</a>
                    </div>
</Slider>
                </div>
            </div>
        </section>
        {/*<----------------------------SECTION END------------------------------------------------------>*/}
        <section className="mt-16 hidden lg:block">
            <div className="site-6xl-container">
            <p className="text-white text-center text-4xl font-extrabold">Müşterilerimiz</p>
            <p className="text-white text-center text-2xl mt-4 font-thin">Müşterilerimizin Değerlendirmesi ve Yorumları</p>
                <div className="lg:grid grid-cols-2">
                    <div className={"flex justify-center items-center bg-white p-5 rounded-xl m-4"}>
                        <img className="max-h-32 rounded-full mr-5" src="https://picsum.photos/id/149/300/300/" alt=""/>
                        <div>
                            <p className="text-xl font-bold">User Name</p>
                            <p className={"font-light"}>Comments Comments Comments Comments Comments Comments Comments Comments Comments Comments Comments Comments </p>
                        </div>
                    </div> <div className={"flex justify-center items-center bg-white p-5 rounded-xl m-4"}>
                        <img className="max-h-32 rounded-full mr-5" src="https://picsum.photos/id/149/300/300/" alt=""/>
                        <div>
                            <p className="text-xl font-bold">User Name</p>
                            <p className={"font-light"}>CommentsComments Comments Comments Comments Comments Comments Comments Comments Comments Comments Comments </p>
                        </div>
                    </div> <div className={"flex justify-center items-center bg-white p-5 rounded-xl m-4"}>
                        <img className="max-h-32 rounded-full mr-5" src="https://picsum.photos/id/149/300/300/" alt=""/>
                        <div>
                            <p className="text-xl font-bold">User Name</p>
                            <p className={"font-light"}>Comments Comments Comments Comments Comments Comments Comments Comments Comments Comments Comments Comments </p>
                        </div>
                    </div> <div className={"flex justify-center items-center bg-white p-5 rounded-xl m-4"}>
                        <img className="max-h-32 rounded-full mr-5" src="https://picsum.photos/id/149/300/300/" alt=""/>
                        <div>
                            <p className="text-xl font-bold">User Name</p>
                            <p className={"font-light"}>Comments Comments Comments Comments Comments Comments Comments Comments Comments Comments Comments Comments </p>
                        </div>
                    </div>
                    </div>
            </div>
        </section>
    </>

}

export default Homepage