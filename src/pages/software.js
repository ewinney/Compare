import Layout from '@/components/Layout';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import Head from 'next/head';

const softwareOptions = [
  { name: 'CRM Pro', category: 'CRM', pricing: 'From $25/user/month', features: 'Contact Management, Sales Automation, Reporting', deployment: 'Cloud-based', support: '24/7 Phone & Email' },
  { name: 'FinanceWiz', category: 'Accounting', pricing: 'From $30/month', features: 'Bookkeeping, Invoicing, Financial Reporting', deployment: 'Cloud & On-premise', support: 'Business Hours Email' },
  { name: 'ProjectMaster', category: 'Project Management', pricing: 'From $15/user/month', features: 'Task Management, Gantt Charts, Time Tracking', deployment: 'Cloud-based', support: '24/7 Chat' },
  { name: 'MarketBoost', category: 'Marketing', pricing: 'From $50/month', features: 'Email Campaigns, Social Media Management, Analytics', deployment: 'Cloud-based', support: 'Business Hours Phone & Email' },
];

export default function Software() {
  return (
    <Layout>
      <Head>
        <title>Compare Business Software | BusinessCompare</title>
        <meta name="description" content="Compare top business software solutions including CRM, accounting, project management, and marketing tools to find the best fit for your company." />
      </Head>
      <h1 className="text-3xl font-bold mb-6">Compare Business Software Solutions</h1>
      <p className="mb-8">Find the best software to improve productivity and streamline your business operations.</p>
      
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Software Name</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Pricing</TableHead>
            <TableHead>Key Features</TableHead>
            <TableHead>Deployment</TableHead>
            <TableHead>Support</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {softwareOptions.map((software) => (
            <TableRow key={software.name}>
              <TableCell className="font-medium">{software.name}</TableCell>
              <TableCell>{software.category}</TableCell>
              <TableCell>{software.pricing}</TableCell>
              <TableCell>{software.features}</TableCell>
              <TableCell>{software.deployment}</TableCell>
              <TableCell>{software.support}</TableCell>
              <TableCell>
                <Button variant="outline">Get Quote</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">How to Choose the Right Business Software</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Identify your specific business needs and pain points</li>
          <li>Consider the size of your company and potential for growth</li>
          <li>Evaluate the user interface and ease of use</li>
          <li>Check for integration capabilities with your existing systems</li>
          <li>Compare pricing models and ensure they fit within your budget</li>
          <li>Read user reviews and testimonials</li>
          <li>Test the software with a free trial if available</li>
          <li>Assess the quality and availability of customer support</li>
        </ul>
      </div>
    </Layout>
  );
}