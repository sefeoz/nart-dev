import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // AOS animasyonları için gerekli stil dosyası

const About = () => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);

    // Sayıları artırma işlevi
    useEffect(() => {
        AOS.init({ duration: 1000, easing: "ease-in-out", once: true });

        const interval1 = setInterval(() => {
            setCount1((prev) => (prev < 37000 ? prev + 250 : prev));
        }, 50);

        const interval2 = setInterval(() => {
            setCount2((prev) => (prev < 6 ? prev + 1 : prev));
        }, 500);

        const interval3 = setInterval(() => {
            setCount3((prev) => (prev < 7 ? prev + 1 : prev));
        }, 1000);

        // Temizleme işlevi
        return () => {
            clearInterval(interval1);
            clearInterval(interval2);
            clearInterval(interval3);
        };
    }, []);

    return (
        <>
            <section className="site-6xl-container mt-16">
                <h1 className="text-nav-green text-4xl font-extrabold text-center" data-aos="fade-up">
                    Hakkımızda
                </h1>
                <p className="text-gray-200 text-center text-3xl font-thin mt-5" data-aos="fade-up" data-aos-delay="300">
                    Nart Developer Olarak Gelecek İçin Çalışmaktan Gurur Duyuyoruz.
                </p>
                <div className="bg-white p-10 my-10 rounded-xl shadow-lg" data-aos="fade-up" data-aos-delay="500">
                    <p className="text-3xl font-extrabold text-gray-800">
                        Nart Developer, 2022 yılında Nart tarafından kurulmuş bağımsız bir yazılım şirketidir.
                    </p>
                    <p className="text-xl mt-5 font-light text-gray-700">
                        Vizyonumuz, geleceği herkes için erişilebilir ve hazır hale getirmektir. Bunun için yazılımın gücünü kullanarak, dünya genelindeki insanları bilgilendirmeyi ve teknoloji dünyasında herkesin yer bulmasını sağlamayı hedefliyoruz.

                        Nart Developer, bireylerin yazılım ve diğer teknolojik alanlarda gelişmesine olanak tanırken, bu süreçte onların yanında olacak bir rehberlik ve destek platformu sunmaktadır. Amacımız, teknolojinin sunduğu fırsatları herkes için erişilebilir hale getirerek, daha kapsayıcı bir gelecek inşa etmektir.
                    </p>
                </div>
            </section>
            <section className="site-6xl-container pb-20">
                <h1 className="text-nav-green text-4xl text-center font-extrabold" data-aos="fade-up">
                    Verilerimiz
                </h1>
                <p className="text-white font-thin text-center text-3xl mt-5" data-aos="fade-up" data-aos-delay="300">
                    Kurulduğumuz andan beri gelişmekte olup bu gelişmeleri sizlerle paylaşıyoruz.
                </p>
                <div className="lg:grid grid-cols-3 mt-10 gap-10">
                    <div className="mt-10" data-aos="fade-up" data-aos-delay="500">
                        <h1 className="text-nav-green text-8xl text-center">{count1}+</h1>
                        <p className="text-white text-3xl text-center mt-10 font-bold">Kod Satırı</p>
                    </div>
                    <div className="mt-10" data-aos="fade-up" data-aos-delay="700">
                        <h1 className="text-nav-green text-8xl text-center">{count2}</h1>
                        <p className="text-white text-3xl text-center mt-10 font-bold">Ekibimiz</p>
                    </div>
                    <div className="mt-10" data-aos="fade-up" data-aos-delay="900">
                        <h1 className="text-nav-green text-8xl text-center">{count3}</h1>
                        <p className="text-white text-3xl text-center mt-10 font-bold">Proje</p>
                    </div>
                </div>
            </section>
            <section className=" mt-10 py-10">
                <div className="site-6xl-container">
                    <div className="lg:grid grid-cols-3 gap-10">
                        {[
                            {
                                name: "Baha Nart Şenel",
                                position: "Nart CEO",
                                img: "https://picsum.photos/id/60/300/300/",
                            },
                            {
                                name: "Şadan Efe Öz",
                                position: "Team Leader",
                                img: "https://picsum.photos/id/60/300/300/",
                            },
                            {
                                name: "Emirhan Şen",
                                position: "Marketing Manager",
                                img: "https://picsum.photos/id/60/300/300/",
                            },
                            {
                                name: "Eren Ulaş Özcan",
                                position: "Web Design",
                                img: "https://picsum.photos/id/48/300/300/",
                            },
                            {
                                name: "Oğuzhan Kavuncuoğlu",
                                position: "Marketing Manager",
                                img: "https://picsum.photos/id/119/300/300/",
                            },
                        ].map((member, index) => (
                            <div
                                key={index}
                                className="relative group bg-gray-800 p-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-300"
                                data-aos="zoom-in-up"
                                data-aos-delay={`${index * 100}`}
                            >
                                <img
                                    className="mx-auto rounded-xl group-hover:scale-110 transform transition duration-300"
                                    src={member.img}
                                    alt={member.name}
                                />
                                <p className="text-center text-2xl font-bold mt-5 text-white group-hover:text-gray-300">{member.name}</p>
                                <p className="text-center text-xl mt-6 font-light text-white group-hover:text-gray-400">{member.position}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;

