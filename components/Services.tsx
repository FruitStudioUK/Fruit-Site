import {
  Video,
  Palette,
  Volume2,
  Handshake,
  TrendingUp,
  Target,
  Search,
} from "lucide-react";

export function Services() {
  const creativeSupport = [
    {
      icon: Video,
      title: "Video Editing",
      description:
        "Professional edits that keep your content sharp, engaging, and ready for brand campaigns.",
      features: [
        "4K/8K Support",
        "Cinematic Storytelling",
        "Motion Graphics",
        "Fast Turnaround",
      ],
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description:
        "Boost discoverability with tailored SEO strategies that help your videos rank and attract sponsors.",
      features: [
        "Channel‑wide SEO Setup",
        "Video Titles & Descriptions",
        "Keyword & Tag Optimization",
        "Ongoing SEO Maintenance",
      ],
    },
    {
      icon: Palette,
      title: "Thumbnails & Branding",
      description:
        "Consistent visuals that strengthen your identity and make you stand out to sponsors.",
      features: [
        "Color Grading",
        "Brand Consistency",
        "Custom Thumbnails",
        "Personal Branding Assets",
      ],
    },
  ];

  const sponsorshipServices = [
    {
      icon: Handshake,
      title: "Sponsorship Management",
      description:
        "We handle outreach, negotiations, and deal management so you can focus on creating.",
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
        "Data‑driven insights and consulting to help you scale your channel and attract higher‑value sponsors.",
      features: [
        "Monthly Reports",
        "Content Planning",
        "Audience Insights",
        "Consultation Calls",
      ],
    },
    {
      icon: Target,
      title: "Monetization Support",
      description:
        "Unlock new revenue streams and maximize your earning potential with our strategic guidance.",
      features: [
        "Paid Community Management",
        "Affiliate Setup",
        "Merchandise Support",
        "Revenue Optimization",
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
            From securing sponsorships to polishing your content, Fruit gives
            creators the tools, support, and partnerships they need to grow with
            confidence.
          </p>
        </div>

        {/* Creative Support */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-baloo2 font-bold text-white mb-4">
              Creative Support
            </h3>
            <p className="text-lg text-text-gray">
              High‑quality edits, audio, and branding that make your content
              shine and keep sponsors coming back.
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
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-2xl font-baloo2 font-bold text-white mb-4">
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

        {/* Sponsorship & Growth */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-baloo2 font-bold text-white mb-4">
              Sponsorship & Growth
            </h3>
            <p className="text-lg text-text-gray">
              Build lasting brand partnerships, scale your income, and protect
              your reputation with our strategic support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sponsorshipServices.map((service, index) => (
              <div
                key={index}
                className="card group hover:scale-105 transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-16 h-16 bg-secondary-green rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-dark" />
                </div>
                <h4 className="text-2xl font-baloo2 font-bold text-white mb-4">
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
