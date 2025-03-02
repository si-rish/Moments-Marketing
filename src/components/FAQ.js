import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  { 
    question: "What services does Moments Marketing offer?", 
    answer: "Moments Marketing offers a range of services including social media marketing, SEO, content creation, paid advertising, and brand strategy to help businesses grow online." 
  },
  { 
    question: "How long does it take to see results from marketing campaigns?", 
    answer: "The timeline depends on the type of campaign. While paid ads can show results quickly, organic strategies like SEO and content marketing take time but offer long-term benefits." 
  },
  { 
    question: "Can I customize my marketing package?", 
    answer: "Yes! We offer flexible marketing plans that can be tailored to fit your business needs, goals, and budget." 
  },
  { 
    question: "Do you provide ongoing support after campaign launch?", 
    answer: "Absolutely! We continuously monitor and optimize campaigns, provide insights, and adapt strategies to maximize your marketing performance." 
  },
  { 
    question: "What makes Moments Marketing different from other agencies?", 
    answer: "We focus on data-driven strategies, personalized marketing plans, and measurable results. Our team is committed to helping your brand stand out in a competitive digital landscape." 
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-black text-white py-16 px-6 md:px-20">
      <div className="max-w-3xl mx-auto text-center">
        <div className="flex justify-center items-center gap-4 mb-4">
          <span className="bg-gray-800 text-white px-4 py-1 rounded-full text-sm flex items-center gap-2">
            <span className="w-2 h-2 bg-green-400 rounded-full"></span> FAQs
          </span>
        </div>
        <h2 className="text-3xl font-bold">Answers to Your Questions</h2>
        <p className="text-gray-400 mt-2">
          Find answers to common questions about our services, processes, and pricing. If you need further information, feel free to reach out.
        </p>
      </div>

      <div className="max-w-3xl mx-auto mt-8 space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-gray-900 p-4 rounded-lg cursor-pointer" onClick={() => toggleFAQ(index)}>
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium">{faq.question}</h3>
              {openIndex === index ? <Minus className="text-white" /> : <Plus className="text-white" />}
            </div>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: openIndex === index ? "auto" : 0, opacity: openIndex === index ? 1 : 0 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              {openIndex === index && <p className="text-gray-400 mt-2">{faq.answer}</p>}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
