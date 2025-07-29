import { Award, Users, Target, Heart, ArrowRight } from 'lucide-react';

export default function AboutPage() {
  const stats = [
    { number: '500+', label: 'Happy Creators', icon: Users },
    { number: '10M+', label: 'Views Generated', icon: Target },
    { number: '98%', label: 'Satisfaction Rate', icon: Award },
    { number: '3', label: 'Years Experience', icon: Heart }
  ];

  const values = [
    {
      title: 'Creativity First',
      description: 'We believe every creator has a unique voice that deserves to be heard and amplified.',
      icon: Heart
    },
    {
      title: 'Quality Excellence',
      description: 'We never compromise on quality, ensuring every project meets the highest standards.',
      icon: Award
    },
    {
      title: 'Authentic Partnerships',
      description: 'We focus on building genuine relationships between creators and brands that align with their values.',
      icon: Users
    },
    {
      title: 'Growth-Focused',
      description: 'Our strategies are designed to help creators build sustainable, long-term success.',
      icon: Target
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-hero-gradient">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h1 className="text-4xl md:text-6xl font-baloo2 font-bold text-white mb-6">
                Empowering Creators to 
                <span className="text-primary-orange"> Reach New Heights</span>
              </h1>
              <p className="text-xl text-text-gray mb-8 leading-relaxed">
                We're passionate about helping content creators transform their vision into compelling content 
                that resonates with audiences and builds meaningful connections with brands.
              </p>
              <a href="/contact" className="btn-primary inline-flex items-center space-x-2">
                <span>Work With Us</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
            <div className="animate-slide-in-right">
              <img 
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Creative team working on content"
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-primary-dark">
        <div className="container-max">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-slide-up" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="w-16 h-16 bg-primary-orange rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-baloo2 font-bold text-white mb-2">{stat.number}</div>
                <div className="text-text-gray">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding bg-primary-dark">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <img 
                src="https://images.pexels.com/photos/3184358/pexels-photo-3184358.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Mission and values"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
            <div className="animate-slide-in-right">
              <h2 className="text-4xl md:text-5xl font-baloo2 font-bold text-white mb-6">
                Our Mission
              </h2>
              <p className="text-xl text-text-gray mb-6 leading-relaxed">
                To democratize content creation by providing professional-grade editing services and strategic 
                brand partnerships that enable creators of all sizes to compete at the highest level.
              </p>
              <p className="text-lg text-text-gray leading-relaxed">
                We believe that great content should be accessible to everyone, regardless of budget or technical expertise. 
                That's why we've built a platform that combines cutting-edge technology with human creativity to deliver 
                results that exceed expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-primary-dark">
        <div className="container-max">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-baloo2 font-bold text-white mb-4">
              Our Values
            </h2>
            <p className="text-xl text-text-gray max-w-3xl mx-auto">
              The principles that guide everything we do and shape how we work with creators and brands.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card hover:scale-105 transition-all duration-300 animate-slide-up" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="w-16 h-16 bg-primary-orange rounded-xl flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-baloo2 font-bold text-white mb-4">{value.title}</h3>
                <p className="text-text-gray leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-primary-dark">
        <div className="container-max">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-baloo2 font-bold text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-text-gray max-w-3xl mx-auto">
              A passionate group of creators, editors, and strategists dedicated to your success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Chen',
                role: 'Creative Director',
                image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
                bio: 'Former Netflix editor with 8+ years of experience in storytelling and visual effects.'
              },
              {
                name: 'Marcus Rodriguez',
                role: 'Brand Partnerships Lead',
                image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400',
                bio: 'Ex-Instagram partnerships manager who has facilitated $50M+ in brand collaborations.'
              },
              {
                name: 'Emily Taylor',
                role: 'Senior Video Editor',
                image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400',
                bio: 'Award-winning editor specializing in viral content and social media optimization.'
              }
            ].map((member, index) => (
              <div key={index} className="card text-center hover:scale-105 transition-all duration-300 animate-slide-up" style={{animationDelay: `${index * 0.2}s`}}>
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-baloo2 font-bold text-white mb-2">{member.name}</h3>
                <p className="text-primary-orange font-medium mb-3">{member.role}</p>
                <p className="text-text-gray text-sm leading-relaxed">{member.bio}</p>
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
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-text-gray mb-8 max-w-2xl mx-auto">
              Join our community of successful creators and let's build something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary inline-flex items-center space-x-2">
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="/portfolio" className="btn-outline inline-flex items-center space-x-2">
                <span>View Portfolio</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}