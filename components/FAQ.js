import Accordion from "./Accordion";

export default function FAQ() {
    const faqs = [
        {
            question: "What services does your dental studio offer?",
            answer:
              "We provide a range of services, including general dentistry, cosmetic procedures, teeth whitening, orthodontics, and more.",
          },
          {
            question: "How can I book an appointment?",
            answer:
              "You can book an appointment online through our website or by calling our office directly. We’ll help you find a time that works for you.",
          },
          {
            question: "Do you accept dental insurance?",
            answer:
              "Yes, we accept most major dental insurance plans. Please contact our office for details about your specific plan.",
          },
          {
            question: "What should I do in case of a dental emergency?",
            answer:
              "If you’re experiencing a dental emergency, call our office immediately. We’ll prioritize your care and provide urgent assistance.",
          },
          {
            question: "How often should I see the dentist?",
            answer:"You should visit the dentist at least twice a year, or more often if your dentist recommends it."

          },
          {
            question: "What are early signs of dental trouble?",
            answer:"Look out for mouth sores, jaw pain, redness, or a swollen face or gums."
          },
          {
            question: "Why do I have bad breath?", 
            answer:"Bad breath is usually caused by poor oral hygiene, such as food particles left in your mouth. Brushing and flossing regularly can help."
          }
    ];
  
    return (
      <div className="max-w-7xl mx-auto sm:px-8 px-4 font-sans">
        <div className="mb-12 max-w-4xl">
        <div className="max-w-6xl mx-auto mt-10 flex flex-col">
            <h2 className="hidden sm:block text-4xl pb-2">Frequently Asked Questions</h2>
            <h2 className="sm:hidden text-4xl pb-2">FAQs</h2>
            <img src="/divider.png" width="200" alt="" className="pt-2" />
        </div>
          
        </div>
        <div className="grid lg:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <Accordion key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    );
  }