import { Award, Users, Target, Heart, ArrowRight } from 'lucide-react';

export default function AboutPage() {
  const stats = [
    { number: '100+', label: 'Brands Supported', icon: Users },
    { number: '2M+', label: 'Campaign Views Delivered', icon: Target },
    { number: '97%', label: 'Client Satisfaction Rate', icon: Award },
    { number: '3', label: 'Years Driving ROI', icon: Heart }
  ];

  const values = [
    {
      title: 'Brand-Centric Creativity',
      description: 'We design campaigns that amplify your brand’s message and connect authentically with audiences.',
      icon: Heart
    },
    {
      title: 'Excellence in Delivery',
      description: 'We never compromise on quality, ensuring every campaign meets the highest standards and delivers measurable ROI.',
      icon: Award
    },
    {
      title: 'Trusted Partnerships',
      description: 'We build long-term, transparent relationships with brands, aligning with your goals and values.',
      icon: Users
    },
    {
      title: 'Growth-Focused Strategy',
      description: 'Our approach is designed to maximize brand impact, drive conversions, and scale your success.',
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
                Empowering Brands to 
                <span className="text-secondary-green"> Achieve More</span>
              </h1>
              <p className="text-xl text-text-gray mb-8 leading-relaxed">
                We help brands unlock new opportunities through creator-led campaigns, 
                data-driven insights, and strategies that deliver measurable results.
              </p>
              <a href="/support" className="btn-secondary inline-flex items-center space-x-2">
                <span>Partner With Us</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
            <div className="animate-slide-in-right">
              <img 
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Brand collaboration strategy session"
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
                <div className="w-16 h-16 bg-secondary-green rounded-xl flex items-center justify-center mx-auto mb-4">
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
                To empower brands with creator-driven campaigns that cut through the noise, 
                deliver measurable ROI, and build lasting connections with audiences.
              </p>
              <p className="text-lg text-text-gray leading-relaxed">
                We combine cutting-edge analytics with authentic storytelling to ensure every campaign 
                not only meets but exceeds expectations — with transparency, efficiency, and impact at the core.
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
              The principles that guide how we collaborate with brands and deliver campaigns that drive results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card hover:scale-105 transition-all duration-300 animate-slide-up" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="w-16 h-16 bg-secondary-green rounded-xl flex items-center justify-center mb-6">
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
              A dedicated team of strategists, partnership managers, and creatives focused on delivering brand success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Daniel Rose',
                role: 'Brand Strategy & Client Success Lead',
                image: 'https://i.postimg.cc/kGTvt3tY/Untitled-design-4.png',
                bio: 'Former Marketing & Sales Director with 8+ years of experience in brand growth and campaign management.'
              },
              {
                name: 'Dev Buchiti',
                role: 'Partnerships Director',
                image: 'https://i.postimg.cc/J4wkPhR3/image-2025-08-15-143606477.png',
                bio: 'Ex-Social Media partnerships manager who has facilitated $1M+ in brand collaborations.'
              },
              {
                name: 'Emily Taylor',
                role: 'Senior Campaign Producer',
                image: 'https://i.postimg.cc/KzMYMnk6/image-2024-08-19-181207250.png',
                bio: 'Award-winning producer specializing in high-impact brand campaigns and social media optimization.'
              }
            ].map((member, index) => (
              <div key={index} className="card text-center hover:scale-105 transition-all duration-300 animate-slide-up" style={{animationDelay: `${index * 0.2}s`}}>
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-baloo2 font-bold text-white mb-2">{member.name}</h3>
                <p className="text-secondary-green font-medium mb-3">{member.role}</p>
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
              Ready to Elevate Your Brand?
            </h2>
            <p className="text-xl text-text-gray mb-8 max-w-2xl mx-auto">
              Join the growing list of brands achieving measurable ROI with Fruit. 
              From 0% management fees on your first campaign to daily analytical reports 
              and 24/7 support, we’re here to make your next campaign your most impactful yet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/support" className="btn-secondary inline-flex items-center space-x-2">
                <span>Get Started</span>
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
