import { Services } from '@/components/Services';
import { ArrowRight, Clock, Shield, Award, Zap } from 'lucide-react';

export default function ServicesPage() {
  const processSteps = [
    {
      step: '01',
      title: 'Discovery Call',
      description: 'We learn about your channel, audience, and sponsorship goals to define success metrics.',
      icon: Clock
    },
    {
      step: '02',
      title: 'Strategy & Planning',
      description: 'We design a tailored sponsorship and growth strategy aligned with your brand and audience.',
      icon: Shield
    },
    {
      step: '03',
      title: 'Partnership Activation',
      description: 'We handle outreach, negotiations, and campaign management while keeping you updated.',
      icon: Zap
    },
    {
      step: '04',
      title: 'Reporting & Growth',
      description: 'We deliver performance reports, insights, and next steps to maximize ROI and long-term growth.',
      icon: Award
    }
  ];

  const guarantees = [
    {
      title: 'Consistent Opportunities',
      description: 'A reliable pipeline of brand partnerships tailored to your niche.',
      icon: Clock
    },
    {
      title: 'Creator-First Approach',
      description: 'You always have the final say on deals — we protect your reputation and audience trust.',
      icon: Shield
    },
    {
      title: 'Proven Results',
      description: 'Daily analytics, strategic consulting, and measurable ROI from every campaign.',
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
              <span className="text-primary-orange"> Creators</span>
            </h1>
            <p className="text-xl text-text-gray mb-8 leading-relaxed">
              From sponsorship outreach and deal management to growth strategy and community support, 
              we provide everything you need to secure partnerships, save time, and scale your channel with confidence.
            </p>
            <a href="/contact" className="btn-primary inline-flex items-center space-x-2">
              <span>Get Started Today</span>
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
              A clear 4‑step framework that ensures every sponsorship and partnership is efficient, transparent, and ROI‑focused.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center animate-slide-up" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-primary-orange rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-10 h-10 text-text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary-green rounded-full flex items-center justify-center">
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
              We stand behind our work with creator‑first guarantees that give you peace of mind and protect your growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {guarantees.map((guarantee, index) => (
              <div key={index} className="card text-center hover:scale-105 transition-all duration-300 animate-slide-up" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="w-16 h-16 bg-primary-orange rounded-xl flex items-center justify-center mx-auto mb-6">
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
              Ready to Unlock Sponsorships?
            </h2>
            <p className="text-xl text-text-gray mb-8 max-w-2xl mx-auto">
              Join creators who are landing brand deals, saving time, and building sustainable growth with Fruit. 
              Let’s design your sponsorship strategy together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary inline-flex items-center space-x-2">
                <span>Start Your Journey</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              {/* <a href="/portfolio" className="btn-outline inline-flex items-center space-x-2">
                <span>See Success Stories</span>
              </a> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
