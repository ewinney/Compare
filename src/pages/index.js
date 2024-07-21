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
          <h2 className="text-3xl font-bold mb-4">Featured Comparisons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-accent text-accent-foreground rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-semibold mb-2">Top Business Credit Cards for Travel</h3>
              <p className="mb-4">Discover cards that offer the best travel rewards and perks for your business.</p>
              <Link href="/credit-cards">
                <Button variant="secondary">View Comparison</Button>
              </Link>
            </div>
            <div className="bg-accent text-accent-foreground rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-semibold mb-2">Best Small Business Loans</h3>
              <p className="mb-4">Compare flexible financing options tailored for small businesses.</p>
              <Link href="/loans">
                <Button variant="secondary">View Comparison</Button>
              </Link>
            </div>
          </div>
        </section>
        
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
        
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-card text-card-foreground rounded-lg shadow-md p-6">
              <p className="italic mb-4">"BusinessCompare helped us find the perfect CRM software for our startup. The comparison tools are incredibly useful!"</p>
              <p className="font-semibold">- Sarah J., Tech Entrepreneur</p>
            </div>
            <div className="bg-card text-card-foreground rounded-lg shadow-md p-6">
              <p className="italic mb-4">"Thanks to BusinessCompare, we secured a great business loan with favorable terms. Highly recommended!"</p>
              <p className="font-semibold">- Michael T., Small Business Owner</p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}