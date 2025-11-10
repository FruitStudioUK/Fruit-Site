import Link from "next/link";
import { ArrowRight, Play, Star, Users, Award } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen bg-primary-dark flex items-center overflow-hidden">
      <div className="container-max section-padding relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-primary-orange">
                <Star className="w-5 h-5 fill-current" />
                <span className="text-sm font-medium uppercase tracking-wide">
                  Trusted by 50+ Creators
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-baloo2 font-bold text-text-white leading-tight">
                Land Sponsorships,
                <span className="text-primary-orange"> Grow Without Limits</span>
              </h1>
              <p className="text-xl text-text-gray leading-relaxed max-w-2xl">
                We connect creators with the right brands, manage negotiations,
                and build lasting partnerships — while you focus on creating.
                From guaranteed brand pipelines to strategic consulting and
                community support, Fruit helps you unlock new revenue and
                long‑term growth.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center space-x-2"
              >
                <span>Join Us Today</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/services"
                className="btn-outline inline-flex items-center space-x-2"
              >
                <Play className="w-5 h-5" />
                <span>See What We Do</span>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-baloo2 font-bold text-primary-orange">
                  50+
                </div>
                <div className="text-text-gray text-sm">Creators Supported</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-baloo2 font-bold text-secondary-green">
                  1M+
                </div>
                <div className="text-text-gray text-sm">Campaign Views</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-baloo2 font-bold text-text-white">
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
                src="https://cdn.pixabay.com/photo/2017/06/22/08/59/editing-2430030_1280.jpg"
                alt="Creator collaborating with brand partners"
                className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-2xl"
              />

              {/* Floating Cards */}
              <div className="absolute -top-6 -left-6 bg-sub-background/90 backdrop-blur-sm rounded-xl p-4 shadow-lg animate-float">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary-orange rounded-lg flex items-center justify-center">
                    <Award className="w-5 h-5 text-text-white" />
                  </div>
                  <div>
                    <div className="text-text-white font-semibold">
                      Strategic Support
                    </div>
                    <div className="text-text-gray text-sm">
                      Consulting & Reports
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
                    <Users className="w-5 h-5 text-text-white" />
                  </div>
                  <div>
                    <div className="text-text-white font-semibold">
                      Brand Partnerships
                    </div>
                    <div className="text-text-gray text-sm">
                      Unlock New Revenue
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
