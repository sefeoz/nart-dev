'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Siparis() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-blue-900 to-black flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center mt-32">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full">
          <h1 className="text-white text-3xl font-bold mb-4 text-center">Bize İsteğinizi Anlatın</h1>
          <form>
            <label htmlFor="email" className="block mb-2 font-semibold text-white">E-posta:</label>
            <input type="email" id="email" name="email" required className="border border-gray-300 p-2 mb-4 w-full rounded" />
            
            <label htmlFor="message" className="block mb-2 font-semibold text-white">Mesajınız:</label>
            <textarea id="message" name="message" required className="border border-gray-300 p-2 mb-4 w-full rounded h-24"></textarea>
            
            <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200 w-full">Gönder</button>
          </form>
        </div>
      </div>
      <Footer />
    </main>
  );
} 