import { useState } from 'react';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { Flow } from './pages/Flow';
import { Recruit } from './pages/Recruit';
import type { PageType } from './types';

const pageComponents = {
  home: Home,
  menu: Menu,
  flow: Flow,
  recruit: Recruit
} as const;

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  const PageComponent = pageComponents[currentPage];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main>
        <PageComponent />
      </main>
      <Footer />
    </div>
  );
}
