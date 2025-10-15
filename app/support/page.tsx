import { Contact } from '@/components/Support';
import { MessageCircle, Calendar, Headphones } from 'lucide-react';

export default function ContactPage() {
  const contactOptions = [
    {
      title: 'Quick Quote',
      description: 'Get a personalized quote for your project within 24 hours.',
      icon: MessageCircle,
      action: 'Get Quote',
      color: 'primary-orange'
    },
    {
      title: 'Schedule Call',
      description: 'Book a free 30-minute consultation to discuss your needs.',
      icon: Calendar,
      action: 'Book Call',
      color: 'secondary-green'
    },
    {/* {
      title: 'Live Chat',
      description: 'Chat with our team instantly for immediate assistance.',
      icon: Headphones,
      action: 'Start Chat',
      color: 'sub-background'
    } */}
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-hero-gradient">
        <div className="container-max">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-baloo2 font-bold text-white mb-6">
              Let's Create Something 
              <span className="text-primary-orange"> Amazing Together</span>
            </h1>
            <p className="text-xl text-text-gray mb-8 leading-relaxed">
              Ready to transform your content and unlock new opportunities? We're here to help you every step of the way. 
              Choose the best way to connect with our team.
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
              Get quick answers to common questions about our services and process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: 'How long does a typical project take?',
                answer: 'Most editing projects are completed within 24-48 hours. Brand partnerships can take 1-2 weeks depending on complexity.'
              },
              {
                question: 'What formats do you work with?',
                answer: 'We work with all major video formats including 4K, 8K, and support all social media platforms and their specific requirements.'
              },
              {
                question: 'Do you offer revisions?',
                answer: 'Yes! We offer unlimited revisions until you\'re completely satisfied with the final result.'
              },
              {
                question: 'How do brand partnerships work?',
                answer: 'We connect you with brands that align with your content and audience, handle negotiations, and ensure fair compensation.'
              },
              {
                question: 'What\'s included in your pricing?',
                answer: 'Our pricing includes all editing work, revisions, and project management. Brand partnerships are commission-based.'
              },
              {
                question: 'Can you help with content strategy?',
                answer: 'Absolutely! We provide strategic advice on content planning, audience growth, and platform optimization.'
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
