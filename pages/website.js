import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect } from "react";

export default function Website() {
    useEffect(() => {
        const colors = [
            [41, 121, 255], // Teknoloji mavi
            [0, 230, 118], // Teknoloji turkuaz
            [126, 87, 194], // Mor
            [96, 125, 139], // Gri tonları
        ];

        let step = 0;
        const gradientSpeed = 0.004; // Geçiş hızını yavaşlattık
        const gradient = document.getElementById("gradient");

        let colorIndices = [0, 1, 2, 3];

        const updateGradient = () => {
            if (!gradient) return;

            const c0_0 = colors[colorIndices[0]];
            const c0_1 = colors[colorIndices[1]];
            const c1_0 = colors[colorIndices[2]];
            const c1_1 = colors[colorIndices[3]];

            const istep = 1 - step;
            const r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
            const g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
            const b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
            const r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
            const g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
            const b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);

            const color1 = `rgb(${r1}, ${g1}, ${b1})`;
            const color2 = `rgb(${r2}, ${g2}, ${b2})`;

            gradient.style.background = `linear-gradient(to right, ${color1}, ${color2})`;

            step += gradientSpeed;
            if (step >= 1) {
                step %= 1;
                colorIndices = [
                    colorIndices[1],
                    (colorIndices[1] + 1) % colors.length,
                    colorIndices[3],
                    (colorIndices[3] + 1) % colors.length,
                ];
            }

            requestAnimationFrame(updateGradient);
        };

        updateGradient();
    }, []);

    return (
        <div className="relative overflow-hidden">
            {/* Gradient Animasyonlu Arka Plan */}
            <div
                id="gradient"
                className="absolute inset-0 -z-10 transition-all duration-500"
                style={{ background: "linear-gradient(to right, rgb(41, 121, 255), rgb(0, 230, 118))" }}
            ></div>

            <section className="site-6xl-container mt-16 relative">
                <h1 className="text-white text-5xl font-extrabold text-center mb-5 tracking-tight">
                    Web Sitesi
                </h1>
                <p className="text-gray-200 text-center text-2xl font-light mt-5">
                    Nart Developer olarak isteklerinizi ve hayallerinizi web sitesine dönüştürüyoruz.
                </p>
                {[
                    {
                        img: "/website2.jpeg",
                        title: "Blog Sitesi",
                        description:
                            "Klasik bir blog sitesini sizin isteğinize göre inşa ediyoruz. Detaylı bilgi almak ve sipariş oluşturmak için devam ediniz.",
                        link: "/website",
                    },
                    {
                        img: "/website3.jpeg",
                        title: "E-ticaret Sitesi",
                        description:
                            "Klasik bir E-ticaret sitesini sizin isteğinize göre inşa ediyoruz. Detaylı bilgi almak ve sipariş oluşturmak için devam ediniz.",
                        link: "/website",
                    },
                    {
                        img: "/website1.jpeg",
                        title: "Statik Site",
                        description:
                            "Klasik bir statik siteyi sizin isteğinize göre inşa ediyoruz. Detaylı bilgi almak ve sipariş oluşturmak için devam ediniz.",
                        link: "/website",
                    },
                ].map((item, index) => (
                    <div
                        key={index}
                        className="bg-white my-10 rounded-xl p-7 mx-2 grid grid-cols-5 items-center transform hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-2xl"
                        data-aos="fade-up"
                        data-aos-delay={index * 100}
                    >
                        <img
                            src={item.img}
                            className="mx-auto rounded-xl col-span-4 object-cover"
                            alt={item.title}
                        />
                        <div className="font-light ml-4">
                            <h1 className="font-bold text-center text-2xl my-6">{item.title}</h1>
                            <p className="text-center">{item.description}</p>
                            <div className="font-bold text-center mt-10">
                                <Link href={item.link}>
                                    <button className="text-center bg-blue-400 hover:bg-blue-500 transition-colors duration-300 py-2 px-5 rounded-full inline-flex items-center gap-2">
                                        Devam Et <FontAwesomeIcon className="my-auto" icon={faArrowRight} />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
}

//<div class="bg-contain bg-center ..." style="background-image: url(...)"></div>