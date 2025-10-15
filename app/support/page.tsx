import { Contact } from '@/components/ContactBrand';
import { MessageCircle, Calendar } from 'lucide-react';

export default function ContactPage() {
  const contactOptions = [
    {
      title: 'Quick Quote',
      description: 'Get a tailored campaign quote within 24 hours — with 0% management fees on your first campaign.',
      icon: MessageCircle,
      action: 'Get Quote',
      color: 'secondary-green'
    },
    {
      title: 'Schedule Call',
      description: 'Book a free 30‑minute consultation to explore how Fruit can deliver ROI for your brand.',
      icon: Calendar,
      action: 'Book Call',
      color: 'primary-orange'
    },
    // Live Chat option can be re‑enabled later if needed
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-hero-gradient">
        <div className="container-max">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-baloo2 font-bold text-white mb-6">
              Dedicated <span className="text-secondary-green">Support for Brands</span>
            </h1>
            <p className="text-xl text-text-gray mb-8 leading-relaxed">
              Partner with Fruit and unlock campaigns designed for measurable impact. 
              Enjoy 0% management fees on your first campaign, 24/7 communication, and daily analytical reports 
              — all backed by our creators and proven ROI‑driven strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options */}
      {/*  <section className="section-padding bg-primary-dark">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactOptions.map((option, index) => (
              <div key={index} className="card text-center hover:scale-105 transition-all duration-300 animate-slide-up" style={{animationDelay: `${index * 0.2}s`}}>
                <div className={`w-16 h-16 bg-${option.color} rounded-xl flex items-center justify-center mx-auto mb-6`}>
                  <option.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-baloo2 font-bold text-white mb-3">{option.title}</h3>
                <p className="text-text-gray mb-6 leading-relaxed">{option.description}</p>
                <button className={`btn-${option.color === 'primary-orange' ? 'primary' : option.color === 'secondary-green' ? 'secondary' : 'outline'} w-full`}>
                  {option.action}
                </button>
              </div>
            ))}
          </div>
        </div> 
      </section> */}

      {/* Contact Form */}
      <Contact />

      {/* FAQ Section */}
      <section className="section-padding bg-primary-dark">
        <div className="container-max">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-baloo2 font-bold text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-text-gray max-w-3xl mx-auto">
              Everything brands need to know about working with Fruit and running successful campaigns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: 'What makes Fruit different for brands?',
                answer: 'We offer 0% management fees on your first campaign and 0% fees on your first deal. You also get daily analytical reports, 24/7 communication, and guaranteed ROI‑driven deliverables like a free pinned YouTube comment.'
              },
              {
                question: 'How quickly can a campaign go live?',
                answer: 'Most campaigns can be launched within 1–2 weeks depending on scope. Our streamlined process and dedicated support ensure fast turnaround without compromising quality.'
              },
              {
                question: 'What kind of creators do you provide?',
                answer: 'We match you with vetted creators who align with your brand. For example, your first campaign includes 1 Tech Creator and 1 high‑quality video as part of our USP.'
              },
              {
                question: 'How do you measure ROI?',
                answer: 'We provide daily analytical reports covering reach, engagement, and conversions. Our pinned YouTube comment strategy further boosts ROI by driving traffic and visibility.'
              },
              {
                question: 'What’s included in your pricing?',
                answer: 'Transparent pricing covers campaign management, creator deliverables, and reporting. With no hidden fees, you only pay for results — and your first campaign has 0% management fees.'
              },
              {
                question: 'Do you offer ongoing support?',
                answer: 'Yes. Our team is available 24/7 to answer questions, adjust campaigns, and ensure your brand gets maximum value from every partnership.'
              }
            ].map((faq, index) => (
              <div key={index} className="card animate-slide-up" style={{animationDelay: `${index * 0.1}s`}}>
                <h3 className="text-xl font-baloo2 font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-text-gray leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
