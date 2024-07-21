import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Search from './Search';

export default function Header() {
  return (
    <header className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <Link href="/" className="text-2xl font-bold mb-4 md:mb-0">
            BusinessCompare
          </Link>
          <Search />
          <nav className="mt-4 md:mt-0">
            <ul className="flex flex-wrap justify-center md:justify-end space-x-4">
              <li><Link href="/loans" className="hover:underline">Business Loans</Link></li>
              <li><Link href="/credit-cards" className="hover:underline">Credit Cards</Link></li>
              <li><Link href="/hr-software" className="hover:underline">HR Software</Link></li>
              <li><Link href="/software" className="hover:underline">Software</Link></li>
              <li><Button variant="secondary" className="mt-2 md:mt-0">Sign In</Button></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}