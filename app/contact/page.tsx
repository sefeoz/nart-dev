'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-blue-900 to-black flex flex-col">
      <Navbar />

      <section className="py-20 text-center text-white">
        <h1 className="text-6xl font-extrabold">Bize Ulaşın</h1>
        <p className="text-lg mt-4">Sorularınız veya geri bildirimleriniz için bizimle iletişime geçin.</p>
      </section>

      <section className="py-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-gray-800 shadow-lg rounded-lg p-8 transition-transform transform hover:scale-105">
            <h2 className="text-3xl font-semibold text-white">İletişim Bilgileri</h2>
            <p className="mt-4"><strong>Adres:</strong> Tekstilkent Mah. Ticaret Cad. No:123 İstanbul/Türkiye</p>
            <p className="mt-2"><strong>Telefon:</strong> +90 542 224 13 26</p>
            <p className="mt-2"><strong>E-posta:</strong> bahanart@gmail.com</p>
            <p className="mt-2"><strong>Çalışma Saatleri:</strong> Pazartesi - Cumartesi: 09:00 - 00:00</p>
          </div>

          <div className="flex flex-col items-center">
            <h2 className="text-3xl font-semibold text-white mb-4">Sosyal Medya</h2>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                <FaFacebook size={30} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
                <FaTwitter size={30} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800">
                <FaInstagram size={30} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900">
                <FaLinkedin size={30} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 