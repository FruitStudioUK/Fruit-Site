import { Services } from '@/components/ServicesBrand';
import { ArrowRight, Clock, Shield, Award, Zap } from 'lucide-react';

export default function ServicesPage() {
  const processSteps = [
    {
      step: '01',
      title: 'Initial Consultation',
      description: 'We discuss your goals, brand, and vision to understand your unique needs.',
      icon: Clock
    },
    {
      step: '02',
      title: 'Project Planning',
      description: 'We create a detailed plan and timeline tailored to your project requirements.',
      icon: Shield
    },
    {
      step: '03',
      title: 'Content Creation',
      description: 'Our experts work their magic, keeping you updated throughout the process.',
      icon: Zap
    },
    {
      step: '04',
      title: 'Review & Deliver',
      description: 'We refine based on your feedback and deliver the final polished content.',
      icon: Award
    }
  ];

  const guarantees = [
    {
      title: '48-Hour Turnaround',
      description: 'Quick delivery without compromising quality',
      icon: Clock
    },
    {
      title: 'Satisfaction Guarantee',
      description: 'Unlimited revisions until you\'re 100% happy',
      icon: Shield
    },
    {
      title: 'Professional Quality',
      description: 'Industry-standard tools and techniques',
      icon: Award
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-hero-gradient">
        <div className="container-max">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-baloo2 font-bold text-white mb-6">
              Professional Services for 
              <span className="text-primary-orange"> Content Creators</span>
            </h1>
            <p className="text-xl text-text-gray mb-8 leading-relaxed">
              From cutting-edge video editing to strategic brand partnerships, we provide comprehensive solutions 
              that help you create outstanding content and grow your audience.
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
            <h2 className="text-4xl md:text-5xl font-baloo2 font-bold text-white mb-4">
              Our Process
            </h2>
            <p className="text-xl text-text-gray max-w-3xl mx-auto">
              We follow a proven 4-step process to ensure your project exceeds expectations every time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center animate-slide-up" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-primary-orange rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary-green rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{step.step}</span>
                  </div>
                </div>
                <h3 className="text-xl font-baloo2 font-bold text-white mb-3">{step.title}</h3>
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
            <h2 className="text-4xl md:text-5xl font-baloo2 font-bold text-white mb-4">
              Our Guarantees
            </h2>
            <p className="text-xl text-text-gray max-w-3xl mx-auto">
              We stand behind our work with industry-leading guarantees that give you peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {guarantees.map((guarantee, index) => (
              <div key={index} className="card text-center hover:scale-105 transition-all duration-300 animate-slide-up" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="w-16 h-16 bg-primary-orange rounded-xl flex items-center justify-center mx-auto mb-6">
                  <guarantee.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-baloo2 font-bold text-white mb-3">{guarantee.title}</h3>
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
            <h2 className="text-3xl md:text-4xl font-baloo2 font-bold text-white mb-4">
              Ready to Transform Your Content?
            </h2>
            <p className="text-xl text-text-gray mb-8 max-w-2xl mx-auto">
              Join hundreds of successful creators who trust us with their content. Let's discuss your project today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary inline-flex items-center space-x-2">
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              {/* <a href="/portfolio" className="btn-outline inline-flex items-center space-x-2">
                <span>View Our Work</span>
              </a> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
