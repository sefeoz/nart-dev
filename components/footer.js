import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { motion } from "framer-motion";

export default function Footer() {
    const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

    return (
        <div className="bg-gradient-to-r from-indigo-700 to-blue-600 py-6">
            <div className="site-6xl-container text-center text-white">
                {/* Logo and Info */}
                <motion.div
                    className="mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <a href="/" className="text-3xl font-bold hover:text-gray-300 transition">
                        Nart Developer
                    </a>
                    <p className="text-sm mt-2 font-thin">Yenilikçi çözümler ve kaliteli hizmet.</p>
                </motion.div>

                {/* Navigation Links */}
                <motion.div
                    className="text-sm mt-4 space-x-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    <a href="/" className="hover:text-gray-300 transition">Ana Sayfa</a>
                    <a href="/about" className="hover:text-gray-300 transition">Hakkımızda</a>
                    <a href="/blog" className="hover:text-gray-300 transition">Blog</a>
                </motion.div>

                {/* Login / Logout */}
                <motion.div
                    className="mt-5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    {isAuthenticated ? (
                        <div className="flex flex-col items-center">
                            <img src={user.picture} className="rounded-full" width="40" />
                            <span className="font-semibold text-sm text-gray-100">{user.name}</span>
                            <motion.button
                                whileHover={{
                                    scale: 1.1,
                                    backgroundColor: "#ef4444",
                                    boxShadow: "0px 4px 20px rgba(239, 68, 68, 0.3)",
                                }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-red-500 text-white px-5 py-2 mt-2 rounded-lg"
                                onClick={() => logout({ returnTo: window.location.origin })}
                            >
                                Çıkış
                            </motion.button>
                        </div>
                    ) : (
                        <motion.button
                            whileHover={{
                                scale: 1.1,
                                backgroundColor: "#10b981",
                                boxShadow: "0px 4px 20px rgba(16, 185, 129, 0.3)",
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-green-500 text-white px-5 py-2 mt-2 rounded-lg"
                            onClick={() => loginWithRedirect()}
                        >
                            Giriş Yap / Kayıt Ol
                        </motion.button>
                    )}
                </motion.div>

                {/* Footer Bottom */}
                <motion.div
                    className="mt-6 text-sm font-thin"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.5 }}
                >
                    <p>&copy; 2022 Nart Developer. Tüm Hakları Saklıdır.</p>
                </motion.div>
            </div>
        </div>
    );
}
