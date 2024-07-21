import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Search from './Search';
import { useState } from 'react';
import { Menu } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex justify-between w-full md:w-auto">
            <Link href="/" className="text-2xl font-bold">
              BusinessCompare
            </Link>
            <Button
              variant="ghost"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu />
            </Button>
          </div>
          <div className={`w-full md:w-auto mt-4 md:mt-0 ${isMenuOpen ? 'block' : 'hidden md:block'}`}>
            <Search />
            <nav className="mt-4 md:mt-0">
              <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
                <li><Link href="/loans" className="hover:underline">Business Loans</Link></li>
                <li><Link href="/credit-cards" className="hover:underline">Credit Cards</Link></li>
                <li><Link href="/hr-software" className="hover:underline">HR Software</Link></li>
                <li><Link href="/software" className="hover:underline">Software</Link></li>
                <li><Button variant="secondary" className="w-full md:w-auto">Sign In</Button></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}