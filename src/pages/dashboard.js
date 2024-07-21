import { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import Head from 'next/head';

// Mock data for saved comparisons
const mockSavedComparisons = [
  { id: 1, type: 'Business Loans', date: '2024-03-15' },
  { id: 2, type: 'Credit Cards', date: '2024-03-10' },
  { id: 3, type: 'HR Software', date: '2024-03-05' },
];

export default function Dashboard() {
  const [savedComparisons, setSavedComparisons] = useState(mockSavedComparisons);

  const handleDelete = (id) => {
    setSavedComparisons(savedComparisons.filter(comparison => comparison.id !== id));
  };

  return (
    <Layout>
      <Head>
        <title>User Dashboard | BusinessCompare</title>
        <meta name="description" content="Manage your saved comparisons and get personalized recommendations." />
      </Head>
      <h1 className="text-3xl font-bold mb-6">Your Dashboard</h1>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Saved Comparisons</h2>
        {savedComparisons.length > 0 ? (
          <ul className="space-y-4">
            {savedComparisons.map((comparison) => (
              <li key={comparison.id} className="flex justify-between items-center bg-card p-4 rounded-lg">
                <div>
                  <p className="font-semibold">{comparison.type}</p>
                  <p className="text-sm text-muted-foreground">Saved on: {comparison.date}</p>
                </div>
                <div>
                  <Button variant="outline" className="mr-2">View</Button>
                  <Button variant="destructive" onClick={() => handleDelete(comparison.id)}>Delete</Button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>You haven't saved any comparisons yet.</p>
        )}
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-4">Recommended Comparisons</h2>
        <p>Based on your activity, you might be interested in:</p>
        <ul className="list-disc pl-6 mt-2">
          <li>Top Project Management Software for Small Businesses</li>
          <li>Best Business Credit Cards for Cash Back</li>
          <li>Comparing Cloud Storage Solutions for Enterprises</li>
        </ul>
      </section>
    </Layout>
  );
}