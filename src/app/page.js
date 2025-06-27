// src/app/page.js

import HomeContent from '@/components/pages/home/Home';
import Navbar from '@/components/pages/hf/Navbar';
import Footer from '@/components/pages/hf/Footer';

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HomeContent />
      <Footer />
    </main>
  );
}
