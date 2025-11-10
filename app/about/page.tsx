import { Award, Users, Target, Heart, ArrowRight } from 'lucide-react';

export default function AboutPage() {
  const stats = [
    { number: '50+', label: 'Creators Supported', icon: Users },
    { number: '1M+', label: 'Campaign Views Delivered', icon: Target },
    { number: '97%', label: 'Satisfaction Rate', icon: Award },
    { number: '0.7', label: 'Years Building Partnerships', icon: Heart }
  ];

  const values = [
    {
      title: 'Creator-First',
      description: 'Every creator deserves fair opportunities, strong partnerships, and the freedom to grow on their own terms.',
      icon: Heart
    },
    {
      title: 'Excellence Always',
      description: 'From negotiations to reporting, we hold ourselves to the highest standards to protect your reputation and results.',
      icon: Award
    },
    {
      title: 'Authentic Partnerships',
      description: 'We connect creators with brands that align with their values, ensuring collaborations feel natural and impactful.',
      icon: Users
    },
    {
      title: 'Growth-Focused',
      description: 'Our strategies are designed to unlock new revenue, scale your influence, and build long-term sustainability.',
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
              <h1 className="text-4xl md:text-6xl font-baloo2 font-bold text-text-white mb-6">
                Empowering Creators to 
                <span className="text-primary-orange"> Build Lasting Partnerships</span>
              </h1>
              <p className="text-xl text-text-gray mb-8 leading-relaxed">
                We help creators secure sponsorships, manage brand deals, and grow their channels with confidence. 
                From outreach and negotiations to strategic consulting and community support, Fruit is your partner in long-term success.
              </p>
              <a href="/contact" className="btn-primary inline-flex items-center space-x-2">
                <span>Join Us</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
            <div className="animate-slide-in-right">
              <img 
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Creators collaborating with brands"
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
                  <stat.icon className="w-8 h-8 text-text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-baloo2 font-bold text-text-white mb-2">{stat.number}</div>
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
              <h2 className="text-4xl md:text-5xl font-baloo2 font-bold text-text-white mb-6">
                Our Mission
              </h2>
              <p className="text-xl text-text-gray mb-6 leading-relaxed">
                To level the playing field for creators by giving them access to sponsorships, strategic guidance, and a supportive community — so they can focus on creating while we handle the business side.
              </p>
              <p className="text-lg text-text-gray leading-relaxed">
                We believe creators should spend less time chasing emails and more time doing what they love. That’s why we provide outreach, deal management, consulting, and growth tools that save time and unlock new opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-primary-dark">
        <div className="container-max">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-baloo2 font-bold text-text-white mb-4">
              Our Values
            </h2>
            <p className="text-xl text-text-gray max-w-3xl mx-auto">
              The principles that guide how we support creators and build partnerships that last.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card hover:scale-105 transition-all duration-300 animate-slide-up" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="w-16 h-16 bg-primary-orange rounded-xl flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8 text-text-white" />
                </div>
                <h3 className="text-2xl font-baloo2 font-bold text-text-white mb-4">{value.title}</h3>
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
            <h2 className="text-4xl md:text-5xl font-baloo2 font-bold text-text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-text-gray max-w-3xl mx-auto">
              A dedicated group of strategists, partnership managers, and growth specialists 
              committed to helping creators secure sponsorships and build sustainable careers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Daniel Rose',
                role: 'Creator Manager & Community Lead',
                image: 'https://i.postimg.cc/kGTvt3tY/Untitled-design-4.png',
                bio: 'Experienced in guiding creators through sponsorship outreach, negotiations, and community building.'
              },
              {
                name: 'Dev Buchiti',
                role: 'Brand Partnerships Lead',
                image: 'https://i.postimg.cc/J4wkPhR3/image-2025-08-15-143606477.png',
                bio: 'Specialist in connecting creators with aligned brands and managing high‑value collaborations.'
              },
              {
                name: 'Emily Taylor',
                role: 'Creator Growth Strategist',
                image: 'https://i.postimg.cc/KzMYMnk6/image-2024-08-19-181207250.png',
                bio: 'Focused on creator growth, campaign strategy, and ensuring long‑term brand fit for partnerships.'
              }
            ].map((member, index) => (
              <div
                key={index}
                className="card text-center hover:scale-105 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-baloo2 font-bold text-text-white mb-2">{member.name}</h3>
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
            <h2 className="text-3xl md:text-4xl font-baloo2 font-bold text-text-white mb-4">
              Ready to Grow With Us?
            </h2>
            <p className="text-xl text-text-gray mb-8 max-w-2xl mx-auto">
              Join a community of creators who are landing sponsorships, saving time, 
              and building long‑term partnerships with the support of Fruit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary inline-flex items-center space-x-2">
                <span>Get Started</span>
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
