import Layout from '@/components/Layout';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Head from 'next/head';

const faqItems = [
  {
    question: "How does BusinessCompare work?",
    answer: "BusinessCompare collects and analyzes data from various business service providers and software companies. We present this information in an easy-to-compare format, allowing you to make informed decisions about which solutions best fit your business needs."
  },
  {
    question: "Is BusinessCompare free to use?",
    answer: "Yes, BusinessCompare is completely free for users. We may receive a commission from some providers if you choose to sign up through our links, but this doesn't affect our comparisons or recommendations."
  },
  {
    question: "How often is the information updated?",
    answer: "We strive to keep our information as up-to-date as possible. Our team regularly reviews and updates the data, typically on a monthly basis or whenever significant changes occur in the market."
  },
  {
    question: "Can I trust the comparisons on BusinessCompare?",
    answer: "We pride ourselves on providing unbiased, accurate comparisons. Our team of experts thoroughly researches each option and uses a consistent methodology for evaluations. However, we always recommend that you do your own research as well before making a final decision."
  },
  {
    question: "How can I save my comparisons?",
    answer: "To save your comparisons, you need to create a free account on BusinessCompare. Once logged in, you'll have the option to save any comparison for future reference in your personal dashboard."
  },
  {
    question: "What if I need more help choosing a service or software?",
    answer: "If you need additional assistance, you can reach out to our support team through the Contact Us page. We'll be happy to provide more detailed guidance based on your specific business needs."
  }
];

export default function FAQ() {
  return (
    <Layout>
      <Head>
        <title>FAQ | BusinessCompare</title>
        <meta name="description" content="Find answers to frequently asked questions about using BusinessCompare for comparing business services and software." />
      </Head>
      <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
      <Accordion type="single" collapsible className="w-full">
        {faqItems.map((item, index) => (
          <AccordionItem value={`item-${index}`} key={index}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Layout>
  );
}