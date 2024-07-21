import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            BusinessCompare
          </Link>
          <nav>
            <ul className="flex space-x-4">
              <li><Link href="/loans" className="hover:underline">Business Loans</Link></li>
              <li><Link href="/credit-cards" className="hover:underline">Credit Cards</Link></li>
              <li><Link href="/hr-software" className="hover:underline">HR Software</Link></li>
              <li><Link href="/software" className="hover:underline">Software</Link></li>
            </ul>
          </nav>
          <Button variant="secondary">Sign In</Button>
        </div>
      </div>
    </header>
  );
}