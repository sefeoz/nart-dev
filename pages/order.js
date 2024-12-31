import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Order() {
    const {
        loginWithRedirect,
        logout,
        isAuthenticated,
        user,
        getAccessTokenSilently,
    } = useAuth0();

    const [text, setText] = useState("");
    const [url, setUrl] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        const currentUrl = window.location.href;
        setUrl(currentUrl);
    }, []);

    const orderSuccess = () => {
        const order = document.getElementById("order");
        if (order) {
            order.innerHTML = `
                <div class="text-center text-white my-64 bg-transparent">
                    <h1 class="text-7xl font-bold">Siparişinizi Aldık</h1>
                    <p class="text-5xl font-thin mt-6">En kısa sürede sizinle iletişime geçeceğiz</p>
                </div>
            `;
        }
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        if (!isAuthenticated) {
            alert("Lütfen giriş yapınız.");
            return;
        }

        if (!url || !text || !email) {
            alert("Hatalı veya eksik bilgi. Lütfen tekrar deneyiniz.");
            return;
        }

        orderSuccess();

        try {
            const userToken = await getAccessTokenSilently();
            await fetch("/api/comment", {
                method: "POST",
                body: JSON.stringify({ text, userToken, url, email }),
                headers: {
                    "Content-Type": "application/json",
                },
            });
        } catch (error) {
            console.error("Sipariş gönderilirken hata oluştu:", error);
        }
    };

    return (
        <motion.div
            id="order"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative overflow-hidden min-h-screen"
        >
            {/* Background Animation */}
            <motion.div
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 3, ease: "easeInOut" }}
            >
                <svg
                    className="w-full h-full"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 800 600"
                    preserveAspectRatio="none"
                >
                    <defs>
                        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style={{ stopColor: "#0f2027", stopOpacity: 1 }} />
                            <stop offset="100%" style={{ stopColor: "#22c55e", stopOpacity: 1 }} />
                        </linearGradient>
                    </defs>
                    <motion.path
                        fill="url(#grad1)"
                        d="M0,600 C200,300 600,300 800,600 L800,600 L0,600 Z"
                        animate={{
                            d: [
                                "M0,600 C200,300 600,300 800,600 L800,600 L0,600 Z",
                                "M0,600 C300,400 500,200 800,500 L800,600 L0,600 Z",
                                "M0,600 C200,300 600,300 800,600 L800,600 L0,600 Z",
                            ],
                        }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    />
                </svg>
            </motion.div>

            {/* Content Section */}
            <div className="relative z-10 bg-gray-200 bg-opacity-70 min-h-screen flex flex-col justify-center items-center">
                <motion.div
                    className="site-6xl-container p-10"
                    initial={{y: -50}}
                    animate={{y: 0}}
                    transition={{duration: 0.8, ease: "easeOut"}}
                >
                    <h1 className="text-5xl font-bold text-center text-blue-900">
                        Özel Sipariş
                    </h1>
                    <h1 className="text-3xl text-center text-gray-600 mt-6 font-extralight">
                        Hayalleriniz bizim için önemli.
                        <br/>
                        Sizden gelen her detay, özgün tasarımlarımız için bir ilham
                        kaynağıdır.
                        <br/>
                        Bizimle açık ve net bir şekilde hayallerinizi, beklentilerinizi ve ihtiyaçlarınızı paylaşın.
                        <br/>
                        Deneyimli ekibimiz, fikirlerinizi özenle analiz ederek, dijital dünyada hayat bulacak şekilde
                        tasarlayıp gerçeğe dönüştürsün.
                    </h1>

                    <form
                        onSubmit={onSubmit}
                        className="mt-6 bg-white shadow-xl rounded-2xl p-8 space-y-8"
                    >
                        <div className="flex flex-col space-y-4">
                            <h1 className="text-center text-blue-900 text-2xl font-semibold mb-4">
                                Bize Ulaşabilmemiz İçin Email Adresinizi Paylaşın
                            </h1>
                            <input
                                type="email"
                                className="text-zinc-200 text-lg p-4 h-14 bg-zinc-900 bg-opacity-70 rounded-xl border border-transparent focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-300 ease-in-out"
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email adresinizi giriniz"
                            />
                        </div>

                        <div className="flex flex-col items-center mt-8 space-y-4">
                            <h1 className="text-center text-blue-900 text-2xl font-semibold mb-4">
                                Hayallerinizi Açık ve Net Bir Şekilde Paylaşın
                            </h1>
                            <textarea
                                rows="6"
                                className="border border-transparent focus:ring-2 focus:ring-blue-500 w-full p-4 bg-zinc-900 bg-opacity-70 rounded-xl text-zinc-200 text-lg focus:outline-none transition-all duration-300 ease-in-out"
                                onChange={(e) => setText(e.target.value)}
                                value={text}
                                placeholder="Hayallerinizden, projelerinizden ya da ihtiyaçlarınızdan bahsedin..."
                            />
                        </div>

                        <div className="flex justify-center">
                            <motion.button
                                whileHover={{
                                    scale: 1.05,
                                    backgroundColor: "#0332b6",
                                    boxShadow: "0px 4px 30px rgba(29, 78, 216, 0.4)",
                                }}
                                whileTap={{scale: 0.95}}
                                type="submit"
                                className="bg-blue-600 text-white px-6 py-3 text-lg rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition ease-in-out duration-200"
                            >
                                Gönder
                            </motion.button>
                        </div>
                    </form>


                    {/* Authentication Buttons */}
                    <div className="flex justify-center">
                        {isAuthenticated ? (
                            <div className="flex justify-between items-center mt-4">
                                <div
                                    className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">
                                    <img
                                        src={user.picture}
                                        width={30}
                                        className="rounded-full"
                                        alt="User"
                                    />
                                    <span className="font-semibold text-lg text-gray-200">
                                        {user.name}
                                    </span>
                                    <motion.button
                                        whileHover={{
                                            scale: 1.1,
                                            backgroundColor: "#ef4444",
                                            boxShadow: "0px 4px 20px rgba(239, 68, 68, 0.3)",
                                        }}
                                        whileTap={{scale: 0.95}}
                                        className="flex rounded-lg bg-red-500 text-white px-5 py-2 font-semibold hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 ease-in-out duration-200"
                                        onClick={() =>
                                            logout({returnTo: "http://localhost:3000/"})
                                        }
                                    >
                                        Çıkış Yap
                                    </motion.button>
                                </div>
                            </div>
                        ) : (
                            <motion.button
                                whileHover={{
                                    scale: 1.1,
                                    backgroundColor: "#22c55e",
                                    boxShadow: "0px 4px 20px rgba(34, 197, 94, 0.3)",
                                }}
                                whileTap={{scale: 0.95}}
                                className="rounded-lg bg-green-500 text-white px-5 py-2 font-semibold hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 ease-in-out duration-200"
                                onClick={() => loginWithRedirect()}
                            >
                                Giriş Yap
                            </motion.button>
                        )}
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}
