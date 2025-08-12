import {
  Video,
  Palette,
  Volume2,
  Handshake,
  TrendingUp,
  Target,
} from "lucide-react";

export function Services() {
  const editingServices = [
    {
      icon: Video,
      title: "Video Editing",
      description:
        "Professional video editing with cutting-edge techniques, seamless transitions, and engaging storytelling.",
      features: [
        "4K/8K Support",
        "Color Grading",
        "Motion Graphics",
        "Fast Turnaround",
      ],
    },
    {
      icon: Volume2,
      title: "Audio Enhancement",
      description:
        "Crystal-clear audio processing, noise reduction, and professional sound design.",
      features: [
        "Noise Reduction",
        "Audio Mixing",
        "Voice Enhancement",
        "Sound Effects",
      ],
    },
    {
      icon: Palette,
      title: "Color Correction",
      description:
        "Professional color grading and correction to make your content visually stunning.",
      features: [
        "Color Matching",
        "Cinematic Look",
        "Mood Enhancement",
        "Brand Consistency",
      ],
    },
  ];

  const brandServices = [
    {
      icon: Handshake,
      title: "Brand Partnerships",
      description:
        "Connect with brands that align with your content and audience for authentic collaborations.",
      features: [
        "Brand Matching",
        "Contract Support",
        "Campaign Management",
        "Performance Tracking",
      ],
    },
    {
      icon: TrendingUp,
      title: "Growth Strategy",
      description:
        "Data-driven strategies to grow your audience and increase engagement across platforms.",
      features: [
        "Analytics Review",
        "Content Planning",
        "Audience Insights",
        "Optimization Tips",
      ],
    },
    {
      icon: Target,
      title: "Monetization",
      description:
        "Maximize your earning potential through strategic partnerships and content optimization.",
      features: [
        "Revenue Optimization",
        "Sponsorship Deals",
        "Affiliate Programs",
        "Merchandise Support",
      ],
    },
  ];

  return (
    <section className="section-padding bg-primary-dark">
      <div className="container-max">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-baloo2 font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-xl text-text-gray max-w-3xl mx-auto">
            From professional creative to strategic brand partnerships, we
            provide everything you need to succeed as a content creator.
          </p>
        </div>

        {/* Editing Services */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-baloo2 font-bold text-white mb-4">
              Professional Creative Services
            </h3>
            <p className="text-lg text-text-gray">
              Transform your raw footage into captivating content that keeps
              your audience engaged.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {editingServices.map((service, index) => (
              <div
                key={index}
                className="card group hover:scale-105 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-16 h-16 bg-primary-orange rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-2xl font-baloo2 font-bold text-dark mb-4">
                  {service.title}
                </h4>
                <p className="text-text-dark mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary-orange rounded-full"></div>
                      <span className="text-text-dark">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Brand Partnership Services */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-baloo2 font-bold text-white mb-4">
              Brand Partnership & Growth
            </h3>
            <p className="text-lg text-text-gray">
              Unlock new revenue streams and grow your audience through
              strategic brand collaborations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brandServices.map((service, index) => (
              <div
                key={index}
                className="card group hover:scale-105 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-16 h-16 bg-secondary-green rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-2xl font-baloo2 font-bold text-white mb-4">
                  {service.title}
                </h4>
                <p className="text-text-gray mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-secondary-green rounded-full"></div>
                      <span className="text-text-gray">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
