import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Custom404() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-xl mb-8">Oops! The page you're looking for doesn't exist.</p>
        <Link href="/">
          <Button>Return to Home</Button>
        </Link>
      </div>
    </Layout>
  );
}