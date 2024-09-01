'use client';


{/*boo tsx */}
const FAQItem = ({ question, answer }) => {


  return (
    <div className="mb-4">
      <p className="font-bold text-2xl font-playfair py-4">{question}</p>
      <p className = "mb-4 ">{answer}</p>
    </div>
  );
};

export default function FAQ() {
  return (
    <div className="space-y-4">
      <FAQItem 
        question="What is the time commitment?" 
        answer="Executive members have a larger time commitment. Otherwise, general members are encouraged to attend events and meetings, which is an estimate of 1-3 hours per week."
      />
      <FAQItem 
        question="What is the mentorship program?" 
        answer="The mentorship program is a key program in VAPS. Mentees will be matched up with mentors based on the industry they are interested in and will attend a 10-week program learning all about breaking through the industry. Learn more about it here!"
      />
      <FAQItem 
        question="What industries does VAPS specialize in?" 
        answer="With VAPS, there are no limits. Whether it be consulting, tech, finance, the list goes on. We welcome everyone!"
      />
       <FAQItem 
        question="Do I have to be Asian to join?" 
        answer="Not at all! We welcome everyone, regardless of their background!"
      />
    </div>
  );
}