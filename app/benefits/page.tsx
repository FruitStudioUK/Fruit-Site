import { Services } from '@/components/ServicesBrand';
import { ArrowRight, Clock, Shield, Award, Zap } from 'lucide-react';

export default function ServicesPage() {
  const processSteps = [
    {
      step: '01',
      title: 'Discovery Call',
      description: 'We learn about your brand, campaign goals, and target audience to define success metrics.',
      icon: Clock
    },
    {
      step: '02',
      title: 'Campaign Planning',
      description: 'We design a tailored campaign strategy, timeline, and deliverables aligned with your objectives.',
      icon: Shield
    },
    {
      step: '03',
      title: 'Activation',
      description: 'Our creators and production team bring your campaign to life, with full transparency and updates.',
      icon: Zap
    },
    {
      step: '04',
      title: 'Reporting & ROI',
      description: 'We deliver daily analytics, refine based on performance, and provide a final ROI‑focused report.',
      icon: Award
    }
  ];

  const guarantees = [
    {
      title: 'Low Fees on First Campaign',
      description: 'No hidden costs on your first activation.',
      icon: Clock
    },
    {
      title: '24/7 Support',
      description: 'Our team is available around the clock to answer questions and adjust campaigns.',
      icon: Shield
    },
    {
      title: 'ROI-Driven Results',
      description: 'Daily analytical reports and proven strategies to maximize your return on investment.',
      icon: Award
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-hero-gradient">
        <div className="container-max">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-baloo2 font-bold text-text-white mb-6">
              Strategic Services for 
              <span className="text-secondary-green"> Ambitious Brands</span>
            </h1>
            <p className="text-xl text-text-gray mb-8 leading-relaxed">
              From campaign strategy to creator activations, we provide end‑to‑end solutions that help brands 
              reach new audiences, drive conversions, and achieve measurable ROI.
            </p>
            <a href="/support" className="btn-secondary inline-flex items-center space-x-2">
              <span>Launch Your Campaign</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <Services />

      {/* Process Section */}
      <section className="section-padding bg-primary-dark">
        <div className="container-max">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-baloo2 font-bold text-text-white mb-4">
              Our Process
            </h2>
            <p className="text-xl text-text-gray max-w-3xl mx-auto">
              A proven 4‑step framework that ensures every campaign is efficient, transparent, and ROI‑focused.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center animate-slide-up" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-secondary-green rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-10 h-10 text-text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary-orange rounded-full flex items-center justify-center">
                    <span className="text-text-white font-bold text-sm">{step.step}</span>
                  </div>
                </div>
                <h3 className="text-xl font-baloo2 font-bold text-text-white mb-3">{step.title}</h3>
                <p className="text-text-gray leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees Section */}
      <section className="section-padding bg-primary-dark">
        <div className="container-max">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-baloo2 font-bold text-text-white mb-4">
              Our Guarantees
            </h2>
            <p className="text-xl text-text-gray max-w-3xl mx-auto">
              We back every campaign with clear guarantees so your brand can invest with confidence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {guarantees.map((guarantee, index) => (
              <div key={index} className="card text-center hover:scale-105 transition-all duration-300 animate-slide-up" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="w-16 h-16 bg-secondary-green rounded-xl flex items-center justify-center mx-auto mb-6">
                  <guarantee.icon className="w-8 h-8 text-text-white" />
                </div>
                <h3 className="text-xl font-baloo2 font-bold text-text-white mb-3">{guarantee.title}</h3>
                <p className="text-text-gray leading-relaxed">{guarantee.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-dark">
        <div className="container-max">
          <div className="bg-card-gradient rounded-2xl p-8 md:p-12 text-center animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-baloo2 font-bold text-text-white mb-4">
              Ready to Maximize Your ROI?
            </h2>
            <p className="text-xl text-text-gray mb-8 max-w-2xl mx-auto">
              Join leading brands who trust Fruit to deliver campaigns with measurable impact. 
              Let’s design your next activation together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/support" className="btn-secondary inline-flex items-center space-x-2">
                <span>Start Your Campaign</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              {/* <a href="/case-studies" className="btn-outline inline-flex items-center space-x-2">
                <span>View Case Studies</span>
              </a> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
