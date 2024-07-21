import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-6">Compare Business Services and Software</h1>
        <p className="text-xl mb-8">Find the best solutions for your business needs</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {['Business Loans', 'Credit Cards', 'HR Software', 'Business Software'].map((category) => (
            <div key={category} className="bg-card text-card-foreground rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold mb-4">{category}</h2>
              <p className="mb-4">Compare top {category.toLowerCase()} options</p>
              <Link href={`/${category.toLowerCase().replace(' ', '-')}`}>
                <Button>Compare Now</Button>
              </Link>
            </div>
          ))}
        </div>
        
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose BusinessCompare?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Comprehensive Comparisons</h3>
              <p>We provide detailed comparisons of various business services and software options.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Unbiased Reviews</h3>
              <p>Our expert team offers impartial reviews to help you make informed decisions.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Time and Money Savings</h3>
              <p>Save valuable time and resources by finding the best solutions quickly.</p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}