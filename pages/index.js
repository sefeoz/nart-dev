import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Slider from "react-slick";
import TypingEffect from '../components/TypingEffect';



function Homepage() {
    var settings = {
        dots: true,
        infinite: true,
        onPause: true,
        speed: 500,
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                    arrows: false,
                },
            },
        ],
    };

    return (
        <>
            {/* Hero Section */}
            <section className="max-w-4xl mx-auto my-16 fade-in">
                <div className="lg:grid lg:grid-cols-2 items-center lg:py-8">
                    <img
                        className="img-fluid lg:hidden mx-auto max-h-44 my-12 animate-pulse"
                        src="/nart.png"
                        alt=""
                    />
                    <div className="text-center lg:text-start space-y-3 mx-4 lg:mx-auto">
                        <h1 className="text-white text-5xl font-bold glow-text">
                            Nart Developer Olarak Geleceğinize Işık Tutalım
                        </h1>
                        <p className="text-white font-light lg:py-5 py-2 text-2xl animate-grow-fade">
                            Sizlere Özel Hizmet ile Nart Developer Her Zaman Yanınızda!
                        </p>
                        <div>
                            <Link href={"/order"}>
                                <button
                                    className="w-4/5 text-black font-bold bg-nav-green py-5 shadow-xl rounded-full hover:bg-white hover:text-nav-green transition transform hover:scale-105">
                                    Özel Sipariş
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="mx-auto hidden lg:block">
                        <img
                            className="img-fluid animate-slide-right"
                            src="/nart.png"
                            alt=""
                        />
                    </div>
                </div>
            </section>

            <section>
                <p className="text-center text-4xl font-bold text-gray-200 fade-in">
                    Paketlerimiz
                </p>
                <p className="text-center text-3xl font-light mt-4 text-gray-300 fade-in delay-1">
                    Nart Developer İle Uygun Fiyatlı Sabit Proje Paketlerimiz
                </p>
                <div className="lg:grid grid-cols-3 mt-10 site-6xl-container">
                    {[
                        {title: "Web Sitesi", image: "/index-4.webp"},
                        {title: "Tasarım", image: "/index-2.jpg"},
                        {title: "Hosting", image: "/index-3.jpg"},
                    ].map((packageItem, index) => (
                        <div
                            key={index}
                            className={`mx-5 my-4 ${
                                index % 2 === 0 ? "animate-slide-left" : "animate-slide-right"
                            }`}
                        >
                            <img
                                src={packageItem.image} // Her paket için farklı resim
                                className="mx-auto rounded-xl transform hover:scale-105 transition"
                                alt={packageItem.title} // Alt metin, paket başlığına göre
                            />
                            <h2 className="text-center text-white text-2xl mt-4 font-bold">
                                {packageItem.title}
                            </h2>
                            <p className="text-xl text-gray-200 text-center mt-4">
                                Sizin isteklerinize yönelik klasik web sitesi.
                            </p>
                            <div className="text-center mt-5">
                                <Link href={"/website"}>
                                    <button
                                        className="text-center bg-white hover:bg-nav-green transition py-2 px-5 rounded-full text-center transform hover:scale-110">
                                        Devam Et{" "}
                                        <FontAwesomeIcon className="my-auto" icon={faArrowRight}/>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>


            {/* Support Section */}
            <section className="mt-10">
                <div className="max-w-6xl lg:mx-auto lg:grid items-center mx-5 grid-cols-2">
                    <div className="mx-auto">
                        <img className="rounded-xl" src="/index-1.jpg" alt="Destek Ekibi Görseli"/>
                    </div>
                    <div className="mx-8 lg:text-start text-center">
                        <h1 className="text-3xl font-bold mb-5 text-nav-green">
                            Destek Ekibimiz İle Her Zaman Yanınızdayız
                        </h1>
                        <ul className="space-y-10 font-thin text-xl text-white">
                            <li className="my-4">
                                <TypingEffect
                                    text="Projelerinizin ihtiyaçlarını tam olarak anlamak ve özel isteklerinize göre şekillendirmek için sizinle yakın bir iş birliği içinde çalışıyoruz. İsteklerinizi gerçekleştirmek için detaylı analiz ve uygulama süreçleri sunuyoruz."
                                    speed={50}
                                />
                            </li>
                            <li className="my-4">
                                <TypingEffect
                                    text="Markanızı ön plana çıkaran, profesyonelce tasarlanmış logolar ve kreatif tasarımlar sunuyoruz. Görsel tasarım çözümlerimizle, markanızın kimliğini en iyi şekilde yansıtmayı hedefliyoruz."
                                    speed={50}
                                />
                            </li>
                            <li className="my-4">
                                <TypingEffect
                                    text="Planlı ve organize bir yaklaşımla, projenizin her aşamasında rehberlik sağlıyoruz. Stratejik planlama ve iş akış yönetimiyle, projenizin hedeflerine ulaşması için destek oluyoruz."
                                    speed={50}
                                />
                            </li>
                        </ul>
                    </div>
                </div>
            </section>


            {/* Future Section */}
            <section className="mt-10">
                <div className="max-w-6xl lg:mx-auto lg:grid mx-5 items-center grid-cols-2">
                    <div className="mx-8 lg:text-start text-center">
                        {/* Başlık kısmında daktilo efekti yok */}
                        <h1 className="text-3xl font-bold mb-5 text-nav-green">
                            Nart Developer İle Gelecek Size Daha Yakın
                        </h1>
                        <ul className="space-y-10 font-thin text-xl text-white">
                            {/* Detaylı ve profesyonel metinler */}
                            <li className="my-4">
                                <TypingEffect
                                    text="Teknoloji dünyasındaki en son trendleri yakından takip ederek, müşterilerimize yenilikçi ve güncel çözümler sunuyoruz. Nart Developer ile her projeniz, modern teknolojilerle güçlendirilmiş, kullanıcı dostu ve estetik açıdan mükemmel bir yapıya kavuşur."
                                    speed={50}
                                />
                            </li>
                            <li className="my-4">
                                <TypingEffect
                                    text="Her müşteri, kendine özgü hedeflere ve ihtiyaçlara sahiptir. Biz, kişisel ve kurumsal gereksinimlerinizi anlayarak tamamen size özel, ölçeklenebilir ve uzun vadeli yazılım çözümleri geliştiriyoruz. Projeleriniz, sizin vizyonunuz doğrultusunda tasarlanır ve hayata geçirilir."
                                    speed={50}
                                />
                            </li>
                            <li className="my-4">
                                <TypingEffect
                                    text="Müşterilerimizin projelerine sadece bir başlangıç noktası olarak değil, uzun soluklu bir ortaklık olarak bakıyoruz. Nart Developer olarak, ihtiyaçlarınıza hızlı yanıt veren, teknik sorunlarınızı çözen ve sürekli gelişim için sizinle birlikte çalışan bir ekip sunuyoruz."
                                    speed={50}
                                />
                            </li>
                        </ul>
                    </div>
                    <div className="mx-auto mt-5">
                    <img className="rounded-xl mx-auto" src="/index-5.jpg" alt=""/>
                    </div>
                </div>
            </section>


            {/* Team Section */}
            <section className="mt-16 mx-4 fade-in delay-3">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-white text-center text-4xl font-extrabold mb-6">
                        Proje Ekibimiz
                    </h1>
                    <Slider {...settings}>
                        {[
                            {name: "Baha Nart Şenel", role: "Nart CEO"},
                            {name: "Şadan Efe Öz", role: "Team Leader"},
                            {name: "Emirhan Şen", role: "Marketing Manager"},
                            {name: "Eren Ulaş Özcan", role: "Web Design"},
                        ].map((member, index) => (
                            <div
                                key={index}
                                className="text-white text-center rounded-xl py-6 mt-5 card-hover"
                            >
                                <img
                                    className="mx-auto rounded-xl mb-5"
                                    src={`https://picsum.photos/id/${index + 60}/300/300/`}
                                    alt=""
                                />
                                <p className="text-3xl font-bold mb-5">{member.name}</p>
                                <p className={"text-xl"}>{member.role}</p>
                            </div>
                        ))}
                    </Slider>
                </div>
            </section>

            {/* Customers Section */}
            <section className="mt-16 hidden lg:block">
                <div className="site-6xl-container">
                    <p className="text-white text-center text-4xl font-extrabold">
                        Müşterilerimiz
                    </p>
                    <p className="text-white text-center text-2xl mt-4 font-thin">
                        Müşterilerimizin Değerlendirmesi ve Yorumları
                    </p>
                    <div className="lg:grid grid-cols-2">
                        <div className="flex justify-center items-center bg-white p-5 rounded-xl m-4 transform transition-all hover:scale-105 hover:shadow-xl hover:bg-gray-100 group">
                            <img className="max-h-32 rounded-full mr-5" src="https://picsum.photos/id/101/300/300/" alt=""/>
                            <div>
                                <p className="text-xl font-bold">Ahmet Yılmaz</p>
                                <p className="font-light text-gray-600 text-ellipsis line-clamp-1 group-hover:line-clamp-none transition-all">
                                    "Nart Developer ile çalışmak gerçekten harika bir deneyimdi. Projemiz her aşamada hızlı ve kaliteli bir şekilde ilerledi. Çok memnun kaldım!"
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-center items-center bg-white p-5 rounded-xl m-4 transform transition-all hover:scale-105 hover:shadow-xl hover:bg-gray-100 group">
                            <img className="max-h-32 rounded-full mr-5" src="https://picsum.photos/id/102/300/300/" alt=""/>
                            <div>
                                <p className="text-xl font-bold">Elif Demir</p>
                                <p className="font-light text-gray-600 text-ellipsis line-clamp-1 group-hover:line-clamp-none transition-all">
                                    "Ekip çok profesyoneldi. Web tasarımım tam istediğim gibi oldu. İletişim sürekli açık ve her şey zamanında teslim edildi. Kesinlikle tekrar çalışırım."
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-center items-center bg-white p-5 rounded-xl m-4 transform transition-all hover:scale-105 hover:shadow-xl hover:bg-gray-100 group">
                            <img className="max-h-32 rounded-full mr-5" src="https://picsum.photos/id/103/300/300/" alt=""/>
                            <div>
                                <p className="text-xl font-bold">Murat Kılıç</p>
                                <p className="font-light text-gray-600 text-ellipsis line-clamp-1 group-hover:line-clamp-none transition-all">
                                    "Gerçekten harika bir ekip! Süreç boyunca her adımda çok yardımcı oldular ve projeyi mükemmel şekilde tamamladılar. Sonuçtan çok memnun kaldım!"
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-center items-center bg-white p-5 rounded-xl m-4 transform transition-all hover:scale-105 hover:shadow-xl hover:bg-gray-100 group">
                            <img className="max-h-32 rounded-full mr-5" src="https://picsum.photos/id/104/300/300/" alt=""/>
                            <div>
                                <p className="text-xl font-bold">Zeynep Şahin</p>
                                <p className="font-light text-gray-600 text-ellipsis line-clamp-1 group-hover:line-clamp-none transition-all">
                                    "Projemin her aşamasında bana rehberlik ettiler ve istediğim sonuçları tam olarak aldım. Çok memnun kaldım, kesinlikle tavsiye ederim!"
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <style jsx>{`
                .fade-in {
                    opacity: 0;
                    transform: translateY(20px);
                    animation: fadeIn 1s forwards;
                }

                .fade-in.delay-1 {
                    animation-delay: 0.5s;
                }

                .fade-in.delay-3 {
                    animation-delay: 1.5s;
                }

                .animate-slide-right {
                    animation: slideRight 1s forwards;
                }

                .animate-slide-left {
                    animation: slideLeft 1s forwards;
                }

                .glow-text {
                    text-shadow: 0 0 10px #00ffcc, 0 0 20px #00ffcc;
                }

                .card-hover:hover {
                    transform: translateY(-10px);
                    transition: transform 0.3s;
                }

                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes slideRight {
                    from {
                        opacity: 0;
                        transform: translateX(-100%);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }

                @keyframes slideLeft {
                    from {
                        opacity: 0;
                        transform: translateX(100%);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
            `}</style>
        </>
    );
}

export default Homepage;
