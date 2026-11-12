import React from 'react';
import { motion } from 'motion/react';
import {
  Code,
  Github,
  Linkedin,
  Terminal,
  ExternalLink,
} from 'lucide-react';
import { CODING_PROFILES } from '../data/portfolioData';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Github,
  Linkedin,
  Terminal,
  Code,
};

export const CodingProfilesSection: React.FC = () => {
  return (
    <section
      id="coding-profiles"
      className="py-24 relative bg-slate-900/40"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold">
            <Terminal className="w-4 h-4" />
            <span>Developer Ecosystem</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Coding <span className="text-gradient">Profiles</span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Connect with me across GitHub, LinkedIn, HackerRank,
            to explore my repositories and competitive
            programming journey.
          </p>
        </div>

        {/* Profile Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {CODING_PROFILES.map((profile, index) => {
            const Icon = iconMap[profile.iconName] || Code;

            return (
              <motion.div
                key={profile.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12,
                  ease: 'easeOut',
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="
                  glass-card
                  relative
                  overflow-hidden
                  rounded-2xl
                  p-8
                  min-h-[300px]
                  w-full
                  border border-slate-700/60
                  shadow-xl
                  flex flex-col
                  justify-between
                  hover:border-purple-500/50
                  hover:shadow-purple-500/10
                  transition-all
                  duration-300
                  group
                "
              >
                {/* Decorative Glow */}
                <div className="absolute -top-16 -right-16 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative space-y-6">

                  {/* Icon and Badge */}
                  <div className="flex items-center justify-between">
                    <div className="p-4 rounded-2xl bg-slate-800 text-white border border-slate-700 group-hover:border-purple-500/40 group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-7 h-7" />
                    </div>

                    <span className="px-3 py-1.5 rounded-full text-[10px] font-semibold bg-purple-500/10 text-purple-400 border border-purple-500/20">
                      {profile.badgeText}
                    </span>
                  </div>

                  {/* Platform Information */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                      {profile.platform}
                    </h3>

                    <p className="text-sm font-mono text-cyan-400">
                      {profile.handle}
                    </p>
                  </div>

                  {/* Statistics */}
                  <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2 group-hover:border-purple-500/20 transition-colors">
                    <span className="text-xs font-semibold text-slate-400 block">
                      {profile.statTitle}
                    </span>

                    <span className="text-sm font-bold text-white block">
                      {profile.statValue}
                    </span>
                  </div>
                </div>

                {/* Visit Profile Button */}
                <div className="relative pt-7">
                  <a
                    href={profile.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${profile.platform} profile`}
                    className="
                      w-full
                      py-3
                      px-5
                      rounded-xl
                      text-sm
                      font-semibold
                      text-white
                      bg-slate-800
                      hover:bg-purple-600/20
                      border border-slate-700
                      hover:border-purple-500/50
                      flex items-center
                      justify-center
                      gap-3
                      transition-all
                      duration-300
                    "
                  >
                    <span>Visit {profile.platform}</span>

                    <ExternalLink className="w-4 h-4 text-purple-400" />
                  </a>
                </div>

              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
};
