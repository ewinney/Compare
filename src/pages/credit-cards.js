import Layout from '@/components/Layout';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';

const creditCardOptions = [
  { name: 'BusinessBoost Rewards', annualFee: '$0', rewardsRate: '2% cash back', introAPR: '0% for 12 months', regularAPR: '14.99% - 22.99%' },
  { name: 'TravelPro Business Card', annualFee: '$95', rewardsRate: '3x points on travel', introAPR: 'N/A', regularAPR: '16.99% - 24.99%' },
  { name: 'CashFlow Master Card', annualFee: '$0 intro, then $95', rewardsRate: '1.5% cash back', introAPR: '0% for 15 months', regularAPR: '13.99% - 21.99%' },
  { name: 'StartUp Saver Card', annualFee: '$0', rewardsRate: '1% cash back', introAPR: '0% for 9 months', regularAPR: '12.99% - 20.99%' },
];

export default function CreditCards() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Compare Business Credit Cards</h1>
      <p className="mb-8">Find the best business credit card for your company's spending needs and rewards preferences.</p>
      
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Card Name</TableHead>
            <TableHead>Annual Fee</TableHead>
            <TableHead>Rewards Rate</TableHead>
            <TableHead>Intro APR</TableHead>
            <TableHead>Regular APR</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {creditCardOptions.map((card) => (
            <TableRow key={card.name}>
              <TableCell className="font-medium">{card.name}</TableCell>
              <TableCell>{card.annualFee}</TableCell>
              <TableCell>{card.rewardsRate}</TableCell>
              <TableCell>{card.introAPR}</TableCell>
              <TableCell>{card.regularAPR}</TableCell>
              <TableCell>
                <Button variant="outline">Apply Now</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">How to Choose the Right Business Credit Card</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Assess your business spending patterns</li>
          <li>Consider the rewards structure and how it aligns with your expenses</li>
          <li>Evaluate annual fees against potential rewards and benefits</li>
          <li>Look for cards with intro APR offers if you need to finance large purchases</li>
          <li>Compare additional perks like travel insurance, purchase protection, and account management tools</li>
        </ul>
      </div>
    </Layout>
  );
}