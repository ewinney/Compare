import Layout from '@/components/Layout';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';

const hrSoftwareOptions = [
  { name: 'HRPro Suite', pricing: 'From $8/employee/month', features: 'Payroll, Time Tracking, Benefits', deployment: 'Cloud-based', support: '24/7 Phone & Email' },
  { name: 'StaffMaster', pricing: 'From $5/employee/month', features: 'Recruitment, Onboarding, Performance', deployment: 'Cloud & On-premise', support: 'Business Hours Email' },
  { name: 'TalentForge', pricing: 'Custom Pricing', features: 'Talent Management, Learning, Analytics', deployment: 'Cloud-based', support: '24/7 Phone, Email & Chat' },
  { name: 'HR Simplify', pricing: 'From $4/employee/month', features: 'Core HR, Time Off, Document Management', deployment: 'Cloud-based', support: 'Business Hours Phone & Email' },
];

export default function HRSoftware() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Compare HR Software Solutions</h1>
      <p className="mb-8">Find the best HR software to streamline your human resources processes and improve employee management.</p>
      
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Software Name</TableHead>
            <TableHead>Pricing</TableHead>
            <TableHead>Key Features</TableHead>
            <TableHead>Deployment</TableHead>
            <TableHead>Support</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {hrSoftwareOptions.map((software) => (
            <TableRow key={software.name}>
              <TableCell className="font-medium">{software.name}</TableCell>
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
        <h2 className="text-2xl font-semibold mb-4">How to Choose the Right HR Software</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Assess your company's specific HR needs and pain points</li>
          <li>Consider the size of your organization and scalability requirements</li>
          <li>Evaluate the user interface and ease of use for both HR staff and employees</li>
          <li>Check for integration capabilities with your existing systems</li>
          <li>Compare pricing models and ensure they align with your budget</li>
          <li>Review customer support options and availability</li>
          <li>Look for mobile accessibility and self-service features</li>
        </ul>
      </div>
    </Layout>
  );
}