import { useState } from 'react';
import Layout from '@/components/Layout';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const loanOptions = [
  { name: 'QuickFund Capital', interestRate: 5.99, term: '1-5 years', maxAmount: 500000 },
  { name: 'GrowthBoost Financing', interestRate: 6.25, term: '2-7 years', maxAmount: 1000000 },
  { name: 'FlexiLoan Solutions', interestRate: 7.50, term: '6 months - 3 years', maxAmount: 250000 },
  { name: 'ExpansionPro Lending', interestRate: 6.75, term: '3-10 years', maxAmount: 2000000 },
];

export default function Loans() {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

  const sortedLoans = [...loanOptions].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? 1 : -1;
    }
    return 0;
  });

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">Compare Business Loans</h1>
      <p className="mb-8">Find the best business loan options for your company's needs.</p>
      
      <div className="mb-4">
        <Select onValueChange={(value) => requestSort(value)}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="name">Lender Name</SelectItem>
            <SelectItem value="interestRate">Interest Rate</SelectItem>
            <SelectItem value="maxAmount">Max Amount</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Lender</TableHead>
            <TableHead>Interest Rate</TableHead>
            <TableHead>Term</TableHead>
            <TableHead>Max Amount</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedLoans.map((loan) => (
            <TableRow key={loan.name}>
              <TableCell className="font-medium">{loan.name}</TableCell>
              <TableCell>{loan.interestRate}%</TableCell>
              <TableCell>{loan.term}</TableCell>
              <TableCell>${loan.maxAmount.toLocaleString()}</TableCell>
              <TableCell>
                <Button variant="outline">Apply Now</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">How to Choose the Right Business Loan</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Determine your funding needs and purpose</li>
          <li>Consider your credit score and business history</li>
          <li>Compare interest rates and terms</li>
          <li>Evaluate repayment options</li>
          <li>Read the fine print and understand all fees</li>
        </ul>
      </div>
    </Layout>
  );
}