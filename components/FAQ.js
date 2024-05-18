import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import Head from "next/head";
import { useState } from "react";

export default function FAQ() {
  const [expandedIndices, setExpandedIndices] = useState([]);

  const handleToggle = (index) => {
    setExpandedIndices((prevIndices) => {
      if (prevIndices.includes(index)) {
        return prevIndices.filter((i) => i !== index);
      } else {
        return [...prevIndices, index];
      }
    });
  };

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
        />
      </Head>
      <section className="h-[670px] py-12">
        <div className="container mx-auto text-center">
          <div className="flex flex-col items-center gap-1 mb-10">
            <h2
              className="text-black text-center text-3xl font-medium mb-2"
              style={{ fontFamily: "Raleway, sans-serif" }}
            >
              GET TO KNOW US
            </h2>
            <div className="w-24 h-1 rounded-full bg-gradient-to-r from-blue-500 to-blue-300"></div>
          </div>
          <p
            className="text-center w-85 text-black text-7xl font-normal mx-auto"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Frequently Asked Questions
          </p>
        </div>
        <div className="container mx-auto mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {faqItems.map((item, index) => (
              <div key={index} className="">
                <Accordion
                  allowToggle
                  index={expandedIndices.includes(index) ? [index] : []}
                  onChange={() => handleToggle(index)}
                >
                  <AccordionItem className="border border-black rounded-lg overflow-hidden">
                    <h2>
                      <AccordionButton className="w-full">
                        <Box
                          as="span"
                          flex="1"
                          textAlign="left"
                          className="p-4"
                          style={{ fontFamily: "Raleway, sans-serif" }}
                        >
                          {item.question}
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                  </AccordionItem>
                </Accordion>
                {expandedIndices.includes(index) && (
                  <div
                    className="p-4"
                    style={{ fontFamily: "Poppins, sans-serif" }}
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

const faqItems = [
  {
    question: "Do I need to sign a contract?",
    answer:
      "We will first work with you to comprehend your requirements in detail. Thereafter, we would draft an agreement with proposed solutions. After assessing possible challenges and pitfalls and identifying ways to overcome them, we will jointly sign an agreement, not a binding contract.",
  },
  {
    question: "How do we ensure quality of deliverables?",
    answer:
      "We are researchers, first. We thoroughly benchmark our proposed solutions against internal and public datasets and baselines after each development sprint. After final delivery, we will continuously enhance our delivery based on your feedbacks.",
  },
  {
    question: "What is your approach to problem-solving?",
    answer:
      "Our approach to problem-solving is iterative and collaborative. We believe in involving our clients at every step, from initial consultation to final implementation. We use a combination of industry best practices, innovative techniques, and thorough testing to ensure the solutions we provide are effective and sustainable.",
  },
  {
    question: "What is the timeline for project completion?",
    answer:
      "The timeline for project completion varies depending on the complexity and scope of the project. We typically provide a detailed timeline after understanding your requirements and conducting an initial assessment. Our goal is to deliver high-quality solutions within a reasonable timeframe.",
  },
  {
    question: "How do we handle data privacy and security?",
    answer:
      "We take data privacy and security very seriously. We implement robust security measures to protect your data, including encryption, access controls, and regular security audits. We also comply with all relevant data protection regulations to ensure your information is secure.",
  },
  {
    question: "What is the cost structure for your services?",
    answer:
      "Our cost structure is based on the complexity and scope of the project. We offer competitive pricing and flexible payment options to suit your budget. After an initial consultation, we provide a detailed proposal outlining the costs involved.",
  },
];
