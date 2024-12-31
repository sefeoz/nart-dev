import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Proje() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    const projects = [
        {
            title: "JavaScript ile Örnek Projelerimiz",
            href: "/javascrip",
            image: "/images/javascript.jpg",
        },
        {
            title: "C ile Örnek Projelerimiz",
            href: "/c",
            image: "/images/c.jpg",
        },
        {
            title: "C++ ile Örnek Projelerimiz",
            href: "/c++",
            image: "/images/cplusplus.jpg",
        },
        {
            title: "HTML ile Örnek Projelerimiz",
            href: "/html",
            image: "/images/html.jpg",
        },
        {
            title: "CSS ile Örnek Projelerimiz",
            href: "/css",
            image: "/images/css.jpg",
        },
    ];

    return (
        <>
            <div className="animated-bg min-h-screen flex flex-col items-center">
                {/* Başlık ve Açıklama */}
                <section className="mt-16 text-center">
                    <h1
                        className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600"
                        data-aos="fade-up"
                    >
                        Projelerimiz
                    </h1>
                    <p
                        className="text-gray-200 text-center text-2xl font-light mt-5"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        Çeşitli dillerde gerçekleştirdiğimiz projelerimizi keşfedin!
                    </p>
                </section>

                {/* Proje Kartları */}
                <section className="py-16">
                    <div
                        className="site-6xl-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                        data-aos="fade-up"
                        data-aos-delay="400"
                    >
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                className="relative group bg-gray-800 p-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-300"
                                data-aos="fade-up"
                                data-aos-delay={`${index * 200}`}
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover rounded-xl mb-4 transform group-hover:scale-105 transition duration-300"
                                />
                                <h2 className="text-white text-2xl font-bold">{project.title}</h2>
                                <Link href={project.href}>
                                    <button className="mt-4 inline-flex items-center bg-green-500 text-white px-4 py-2 rounded-full text-lg shadow hover:bg-green-600 transition duration-300">
                                        Devam Et
                                        <FontAwesomeIcon
                                            className="ml-2"
                                            icon={faArrowRight}
                                        />
                                    </button>
                                </Link>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            {/* AOS CSS ve Animasyon Ayarları */}
            <style jsx global>{`
                @keyframes gradientAnimation {
                    0% {
                        background-position: 0% 50%;
                    }
                    50% {
                        background-position: 100% 50%;
                    }
                    100% {
                        background-position: 0% 50%;
                    }
                }

                html,
                body {
                    height: 100%;
                    margin: 0;
                    padding: 0;
                }

                .animated-bg {
                    background: linear-gradient(270deg, #0f2027, #203a43, #2c5364, #1c92d2, #00c6ff, #005bea, #7630ea);
                    background-size: 800% 800%;
                    animation: gradientAnimation 20s ease infinite;
                    color: white;
                }

                .min-h-screen {
                    min-height: 100vh;
                }

                .text-gray-200 {
                    color: #e0e0e0;
                }

                .bg-gray-800 {
                    background-color: #2d2d2d;
                }
            `}</style>
        </>
    );
}

export default Proje;

