import { useRole } from '@/context/RoleContext';
import Link from "next/link";
import { ArrowRight, Play, Star, Users, Award } from "lucide-react";

export function Hero() {
  const { role } = useRole();
  return (
    <section className="relative min-h-screen bg-primary-dark flex items-center overflow-hidden">
      {/* Background Elements */}
      {/*{<div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-orange rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-secondary-green rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>
        */}

      <div className="container-max section-padding relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-secondary-green">
                <Star className="w-5 h-5 fill-current" />
                <span className="text-sm font-medium uppercase tracking-wide">
                  Trusted by 50+ Creators
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-baloo2 font-bold text-white leading-tight">
                Transform Your Content,
                <span className="text-secondary-green"> Amplify Your Reach</span>
              </h1>
              <p className="text-xl text-text-gray leading-relaxed max-w-2xl">
                Professional creative services and strategic brand partnerships
                that help content creators build their audience, enhance their
                content, and monetize their passion.
              </p>
            </div>

            {/* CTA Buttons */}
<div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
  <Link
    href="/support"
    className="btn-primary inline-flex items-center space-x-2 bg-secondary-green hover:bg-secondary-green/90"
  >
    <span>Book a call</span>
    <ArrowRight className="w-5 h-5" />
  </Link>

  <Link
    href="/portfolio"
    className="btn-outline inline-flex items-center space-x-2 border-secondary-green text-secondary-green hover:bg-secondary-green/10"
  >
    <Play className="w-5 h-5" />
    <span>View Our Work</span>
  </Link>
</div>




            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-baloo2 font-bold text-secondary-green">
                  50+
                </div>
                <div className="text-text-gray text-sm">Happy Creators</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-baloo2 font-bold text-primary-orange">
                  2M+
                </div>
                <div className="text-text-gray text-sm">Views Generated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-baloo2 font-bold text-white">
                  97%
                </div>
                <div className="text-text-gray text-sm">Satisfaction Rate</div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative animate-slide-in-right">
            <div className="relative z-10">
              <img
                src="https://i.postimg.cc/Gm1hpM6J/Whats-App-Image-2025-10-15-at-17-48-05-c7563f16.jpg"
                alt="Content creator working with professional editing setup"
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
              />

              {/* Floating Cards */}
              <div className="absolute -top-6 -left-6 bg-sub-background/90 backdrop-blur-sm rounded-xl p-4 shadow-lg animate-float">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary-orange rounded-lg flex items-center justify-center">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">
                      Premium Quality
                    </div>
                    <div className="text-text-gray text-sm">
                      Professional Results
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="absolute -bottom-6 -right-6 bg-sub-background/90 backdrop-blur-sm rounded-xl p-4 shadow-lg animate-float"
                style={{ animationDelay: "1s" }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-secondary-green rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">
                      Brand Partnerships
                    </div>
                    <div className="text-text-gray text-sm">
                      Grow Your Revenue
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Background decoration */}
          </div>
        </div>
      </div>
    </section>
  );
}
