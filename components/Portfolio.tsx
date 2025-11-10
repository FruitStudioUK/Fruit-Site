"use client";

import { useState } from "react";
import { Play, ExternalLink, Users, Eye, Heart } from "lucide-react";

export function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "youtube", label: "YouTube" },
    { id: "tiktok", label: "TikTok" },
    { id: "instagram", label: "Instagram" },
    { id: "brand", label: "Brand Partnerships" },
  ];

  const projects = [
    {
      id: 1,
      title: "Travel Vlogger Series",
      category: "youtube",
      image:
        "https://images.pexels.com/photos/3617500/pexels-photo-3617500.jpeg?auto=compress&cs=tinysrgb&w=800",
      views: "2.3M",
      likes: "45K",
      description:
        "Epic travel documentary series with cinematic creative and stunning visuals.",
      creator: "AdventureSeeker",
      tags: ["Travel", "Documentary", "Cinematic"],
    },
    {
      id: 2,
      title: "Cooking Tutorial Campaign",
      category: "brand",
      image:
        "https://images.pexels.com/photos/4253302/pexels-photo-4253302.jpeg?auto=compress&cs=tinysrgb&w=800",
      views: "1.8M",
      likes: "32K",
      description:
        "Brand partnership campaign for kitchen appliances with engaging recipe content.",
      creator: "FoodieChef",
      tags: ["Cooking", "Brand Partnership", "Tutorial"],
    },
    {
      id: 3,
      title: "Fashion Lookbook",
      category: "instagram",
      image:
        "https://images.pexels.com/photos/5698857/pexels-photo-5698857.jpeg?auto=compress&cs=tinysrgb&w=800",
      views: "890K",
      likes: "28K",
      description:
        "Stylish fashion content with dynamic transitions and color-matched aesthetics.",
      creator: "StyleGuru",
      tags: ["Fashion", "Lifestyle", "Aesthetic"],
    },
    {
      id: 4,
      title: "Tech Review Series",
      category: "youtube",
      image:
        "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
      views: "3.1M",
      likes: "67K",
      description:
        "Comprehensive tech reviews with detailed graphics and professional presentation.",
      creator: "TechExpert",
      tags: ["Technology", "Review", "Educational"],
    },
    {
      id: 5,
      title: "Dance Challenge Compilation",
      category: "tiktok",
      image:
        "https://images.pexels.com/photos/3737094/pexels-photo-3737094.jpeg?auto=compress&cs=tinysrgb&w=800",
      views: "5.2M",
      likes: "120K",
      description:
        "Viral dance content with perfect beat synchronization and creative effects.",
      creator: "DanceStar",
      tags: ["Dance", "Viral", "Entertainment"],
    },
    {
      id: 6,
      title: "Fitness Brand Campaign",
      category: "brand",
      image:
        "https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=800",
      views: "1.4M",
      likes: "35K",
      description:
        "Motivational fitness content created for major sportswear brand partnership.",
      creator: "FitnessInfluencer",
      tags: ["Fitness", "Brand Partnership", "Motivation"],
    },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section className="section-padding bg-primary-dark">
      <div className="container-max">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-baloo2 font-bold text-text-white mb-4">
            Our Portfolio
          </h2>
          <p className="text-xl text-text-gray max-w-3xl mx-auto">
            Showcasing our best work - from viral content to successful brand
            partnerships that have helped creators reach millions.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? "bg-primary-orange text-text-white shadow-lg"
                  : "bg-sub-background/20 text-text-gray hover:bg-sub-background/40 hover:text-text-white"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="card group cursor-pointer hover:scale-105 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-xl mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Play className="w-12 h-12 text-text-white" />
                </div>
                <div className="absolute top-3 right-3 bg-black/70 rounded-full p-2">
                  <ExternalLink className="w-4 h-4 text-text-white" />
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-baloo2 font-bold text-text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-text-gray text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Eye className="w-4 h-4 text-text-gray" />
                      <span className="text-text-gray text-sm">
                        {project.views}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Heart className="w-4 h-4 text-text-gray" />
                      <span className="text-text-gray text-sm">
                        {project.likes}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4 text-text-gray" />
                    <span className="text-text-gray text-sm">
                      {project.creator}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-sub-background/30 text-text-gray text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-card-gradient rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-baloo2 font-bold text-text-white mb-4">
              Ready to Create Your Next Hit?
            </h3>
            <p className="text-text-gray mb-8 max-w-2xl mx-auto">
              Join hundreds of successful creators who trust us with their
              content. Let's make your next project go viral.
            </p>
            <a
              href="/contact"
              className="btn-primary inline-flex items-center space-x-2"
            >
              <span>Start Your Project</span>
              <Play className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
