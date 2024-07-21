import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Custom500() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <h1 className="text-4xl font-bold mb-4">500 - Server Error</h1>
        <p className="text-xl mb-8">Oops! Something went wrong on our end. We're working to fix it.</p>
        <Link href="/">
          <Button>Return to Home</Button>
        </Link>
      </div>
    </Layout>
  );
}