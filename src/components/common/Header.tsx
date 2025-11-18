import { Scissors } from 'lucide-react';
import { SITE_NAME, NAV_ITEMS } from '../../constants';
import type { PageType } from '../../types';

type HeaderProps = {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
};

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const handleLogoClick = () => {
    onNavigate('home');
  };

  const handleNavClick = (pageId: PageType) => {
    onNavigate(pageId);
  };

  return (
    <header className="bg-slate-900 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={handleLogoClick}
            className="flex items-center space-x-2 hover:opacity-80 transition"
            aria-label="ホームに戻る"
          >
            <Scissors className="w-8 h-8 text-amber-500" />
            <h1 className="text-2xl font-bold">{SITE_NAME}</h1>
          </button>

          <nav className="hidden md:flex space-x-8" aria-label="メインナビゲーション">
            {NAV_ITEMS.map(item => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`hover:text-amber-500 transition ${
                    isActive ? 'text-amber-500' : ''
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
