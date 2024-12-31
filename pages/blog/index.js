import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // AOS'un CSS dosyasını dahil edin

function Blog() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true }); // AOS'u başlat
    }, []);

    return (
        <div className="relative overflow-hidden">
            {/* Başlık ve Açıklama */}
            <section className="site-6xl-container mt-8 mb-16">
                <h1
                    className="text-nav-green text-4xl font-extrabold text-center"
                    data-aos="fade-up"
                >
                    Blog
                </h1>
                <p
                    className="text-gray-200 text-center text-2xl font-light mt-4"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    Güncel gelişmeleri, ilham veren fikirleri ve sektörel yenilikleri paylaşıyoruz.
                </p>

                {/* Blog Kartları */}
                <div
                    className="lg:grid grid-cols-3 gap-10 mx-4 mt-8"
                    data-aos="fade-up"
                    data-aos-delay="400"
                >
                    {[
                        {
                            title: "Teknolojinin Geleceği: Yapay Zeka",
                            content:
                                "Yapay zeka, hayatımızın her alanına dokunuyor. Bu yazımızda, yapay zekanın gelecekteki etkileri üzerine önemli başlıkları ele alıyoruz.",
                            img: "/index-3.jpg",
                            link: "/blog/post/1",
                        },
                        {
                            title: "Dijital Pazarlamanın Yükselişi",
                            content:
                                "Dijital pazarlama stratejileri, markaların hedef kitlelerine daha hızlı ulaşmasına yardımcı oluyor. Bu yazımızda dijital pazarlamanın en etkili yollarını keşfedin.",
                            img: "/index-3.jpg",
                            link: "/blog/post/2",
                        },
                        {
                            title: "Veri Analitiği ve İş Dünyası",
                            content:
                                "Veri analitiği, iş dünyasında önemli bir yere sahiptir. Şirketlerin nasıl veri analitiği kullanarak daha verimli çalıştığını bu yazımızda inceliyoruz.",
                            img: "/index-3.jpg",
                            link: "/blog/post/3",
                        },
                        {
                            title: "Web Tasarımında Yeni Trendler",
                            content:
                                "Web tasarımı, her yıl yeni trendlerle değişiyor. 2024 yılında öne çıkan web tasarım trendlerine göz atın.",
                            img: "/index-3.jpg",
                            link: "/blog/post/4",
                        },
                        {
                            title: "Sosyal Medyanın Gücü",
                            content:
                                "Sosyal medya, markaların kimliklerini yaratmalarına yardımcı olur. Sosyal medyada başarılı olmak için neler yapmanız gerektiğini bu yazımızda bulabilirsiniz.",
                            img: "/index-3.jpg",
                            link: "/blog/post/5",
                        },
                        {
                            title: "Girişimcilik: Yeni Başlayanlar İçin Rehber",
                            content:
                                "Girişimcilik dünyasına adım atmak isteyenler için temel bilgiler ve ipuçları. İlk girişiminizi kurarken karşılaşabileceğiniz zorluklar ve çözüm yolları hakkında bilgiler.",
                            img: "/index-3.jpg",
                            link: "/blog/post/6",
                        },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="relative bg-white rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 hover:shadow-2xl"
                            data-aos="fade-up"
                            data-aos-delay={`${400 + index * 200}`}
                        >
                            {/* Görsel */}
                            <img
                                className="max-h-44 mx-auto rounded-xl w-full object-cover"
                                src={item.img}
                                alt={item.title}
                            />
                            {/* İçerik */}
                            <div className="p-6">
                                <Link href={item.link}>
                                    <h2 className="font-bold text-center text-2xl text-gray-800 hover:text-blue-500 transition-colors duration-300">
                                        {item.title}
                                    </h2>
                                </Link>
                                <p className="text-center text-gray-600 mt-4">
                                    {item.content}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Blog;






