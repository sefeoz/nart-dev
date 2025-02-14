'use client';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-t from-gray-950 via-gray-900 to-black py-16">
      <div className="container-custom">
        {/* Üst Kısım */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
          {/* Logo ve Açıklama */}
          <div className="max-w-sm">
            <h2 className="text-2xl font-bold text-white mb-4">Nart Developer</h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              2021 yılından beri hayallerinizdeki işletmenizi geleceğe taşıyoruz.
            </p>
          </div>

          {/* Hızlı Erişim */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {/* Kurumsal */}
            <div>
              <h3 className="text-white font-semibold mb-4">Kurumsal</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/about" className="text-gray-400 hover:text-white transition-colors">Hakkımızda</a>
                </li>
                <li>
                  <a href="/products" className="text-gray-400 hover:text-white transition-colors">Projelerimiz</a>
                </li>
                <li>
                  <a href="/contact" className="text-gray-400 hover:text-white transition-colors">İletişim</a>
                </li>
              </ul>
            </div>

            {/* Ürünler */}
            <div>
              <h3 className="text-white font-semibold mb-4">Projelerimiz</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/products#cotton" className="text-gray-400 hover:text-white transition-colors">FK Tekstil</a>
                </li>
                <li>
                  <a href="/products#polyester" className="text-gray-400 hover:text-white transition-colors">Vellichor Games</a>
                </li>
                <li>
                  <a href="/products#linen" className="text-gray-400 hover:text-white transition-colors">Moda Dora</a>
                </li>
              </ul>
            </div>

            
          </div>
        </div>

        {/* Alt Kısım */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 Nart Developer. Tüm hakları saklıdır.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="text-2xl">📱</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="text-2xl">📧</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <span className="text-2xl">📍</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 