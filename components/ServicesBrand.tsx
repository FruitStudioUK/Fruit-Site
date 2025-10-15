import {
  Video,
  Palette,
  Volume2,
  Handshake,
  TrendingUp,
  Target,
} from "lucide-react";

export function Services() {
  const campaignServices = [
    {
      icon: Handshake,
      title: "Campaign Partnerships",
      description:
        "Seamless brand–creator collaborations designed to deliver measurable ROI and authentic engagement.",
      features: [
        "Creator Matching",
        "Contract & Compliance",
        "Campaign Management",
        "Performance Tracking",
      ],
    },
    {
      icon: TrendingUp,
      title: "Growth Strategy",
      description:
        "Data‑driven strategies that expand your reach, boost conversions, and strengthen brand positioning.",
      features: [
        "Market & Audience Insights",
        "Campaign Planning",
        "Optimization Frameworks",
        "Scalable Activations",
      ],
    },
    {
      icon: Target,
      title: "ROI & Monetization",
      description:
        "Maximize returns with transparent reporting, daily analytics, and proven monetization tactics.",
      features: [
        "Revenue Optimization",
        "Sponsorship Deals",
        "Affiliate Integrations",
        "Conversion Tracking",
      ],
    },
  ];

  const creativeSupport = [
    {
      icon: Video,
      title: "Video Production",
      description:
        "High‑impact video content tailored to your brand’s objectives and audience expectations.",
      features: [
        "4K/8K Production",
        "Branded Motion Graphics",
        "Storyboarding",
        "Fast Turnaround",
      ],
    },
    {
      icon: Volume2,
      title: "Audio & Voice",
      description:
        "Crystal‑clear audio design and voice integration to ensure your campaigns sound as good as they look.",
      features: [
        "Noise Reduction",
        "Audio Mixing",
        "Voiceover Integration",
        "Sound Design",
      ],
    },
    {
      icon: Palette,
      title: "Visual Identity",
      description:
        "Consistent, on‑brand visuals that reinforce recognition and elevate campaign impact.",
      features: [
        "Color Grading",
        "Brand Consistency",
        "Cinematic Look",
        "Mood Enhancement",
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
            From campaign strategy to creative production, we provide everything
            your brand needs to launch impactful activations and achieve
            measurable growth.
          </p>
        </div>

        {/* Campaign Services */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-baloo2 font-bold text-white mb-4">
              Campaign & Growth Services
            </h3>
            <p className="text-lg text-text-gray">
              End‑to‑end campaign management and growth strategies designed to
              maximize ROI and brand impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {campaignServices.map((service, index) => (
              <div
                key={index}
                className="card group hover:scale-105 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-16 h-16 bg-secondary-green rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-2xl font-baloo2 font-bold text-text-dark mb-4">
                  {service.title}
                </h4>
                <p className="font-nunito font-bold text-text-lightdark mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-text-lightdark rounded-full"></div>
                      <span className="font-nunito font-bold text-text-lightdark">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Creative Support */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-baloo2 font-bold text-white mb-4">
              Creative Production Support
            </h3>
            <p className="text-lg text-text-gray">
              High‑quality creative assets that bring your campaigns to life and
              keep your brand top‑of‑mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {creativeSupport.map((service, index) => (
              <div
                key={index}
                className="card group hover:scale-105 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-16 h-16 bg-primary-orange rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-dark" />
                </div>
                <h4 className="text-2xl font-baloo2 font-bold text-text-dark mb-4">
                  {service.title}
                </h4>
                <p className="font-nunito font-bold text-text-lightdark mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-text-lightdark rounded-full"></div>
                      <span className="font-nunito font-bold text-text-lightdark">
                        {feature}
                      </span>
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
