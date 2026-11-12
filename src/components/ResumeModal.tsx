
import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  FileDown,
  X,
  Check,
  Copy,
  GraduationCap,
  Code2,
  Award,
  ExternalLink,
  BookOpen,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const projects = [
  {
    id: 1,
    name: 'NEXA AI',
    subtitle: 'AI-Powered Intelligent Assistant',
    description:
      'An AI-powered platform featuring intelligent conversations, research with citations, and dataset analysis with CSV/JSON support.',
    technologies: 'React, TypeScript, Gemini AI, OpenAI, Data Analysis',
    url: 'https://nexa-ai-f1y0.onrender.com',
  },
  {
    id: 2,
    name: 'CVForge',
    subtitle: 'Professional Resume Building Platform',
    description:
      'A web-based CV creation platform designed to help users build and generate professional resumes.',
    technologies: 'Web Development, Resume Generation',
    url: 'https://cvforge-2.onrender.com/',
  },
  {
    id: 3,
    name: 'Online Scholarship Management System',
    subtitle: 'Full-Stack Scholarship Portal',
    description:
      'Full-stack scholarship portal with student/admin authentication, document uploads, and REST APIs.',
    technologies: 'React, Node.js, Express, MongoDB, Firebase',
  },
  {
    id: 4,
    name: 'DevConnect',
    subtitle: 'Real-Time Developer Collaboration Platform',
    description:
      'A developer collaboration platform with JWT authentication, real-time messaging, and project Kanban boards.',
    technologies: 'React, TypeScript, Node.js, Express, MongoDB, Socket.IO',
  },
  
];

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [copied, setCopied] = useState(false);

  const handleDownload = () => {
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.6 },
    });

    window.location.href = '/api/resume/download';
  };

  const handleCopyText = async () => {
    const resumeText = `SOUMIK CHAKRABORTY
Computer Science & Business Systems Undergraduate

Email: ${PERSONAL_INFO.email}
Phone: ${PERSONAL_INFO.phone}
Location: ${PERSONAL_INFO.location}
GitHub: ${PERSONAL_INFO.socials.github}
LinkedIn: ${PERSONAL_INFO.socials.linkedin}

EDUCATION
Techno Main Salt Lake, Kolkata
B.Tech in Computer Science & Business Systems (2023-2027)
CGPA: 7.5

Bankura Christian Collegiate School
Higher Secondary: 77.5%
Secondary: 90%

TECHNICAL SKILLS
Languages: Python, Java, C, C++, JavaScript, TypeScript, SQL
Frontend: React, Next.js, Tailwind CSS, HTML5, CSS3
Backend: Node.js, Express.js, REST APIs, Socket.IO, Firebase
Databases: MongoDB, MySQL
Tools: Git, GitHub, VS Code, Wireshark, Postman
Core CS: DSA, DBMS, Operating Systems, Computer Networks, Software Engineering

KEY PROJECTS

${projects
  .map(
    (project) =>
      `${project.id}. ${project.name} - ${project.subtitle}
${project.description}
Technologies: ${project.technologies}
${project.url ? `Live Demo: ${project.url}` : ''}`
  )
  .join('\n\n')}

ACHIEVEMENTS & CERTIFICATIONS
- 2nd Place Runner-Up in Innovation Coding Competition
- 4-Star Problem Solving Badge on HackerRank
- 4-Star SQL Badge on HackerRank
- 200+ Coding Problems Solved
- NPTEL Certified in DBMS (Elite)
`;

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(resumeText);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = resumeText;
        textarea.style.position = 'fixed';
        textarea.style.left = '-9999px';

        document.body.appendChild(textarea);
        textarea.select();

        const success = document.execCommand('copy');
        document.body.removeChild(textarea);

        if (!success) throw new Error('Copy failed');
      }

      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Copy failed:', error);
      alert('Unable to copy resume. Please try again.');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 bg-slate-950/85 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="glass-card w-full max-w-3xl rounded-2xl border border-slate-700 shadow-2xl flex flex-col max-h-[92vh]"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 sm:p-6 border-b border-slate-800 shrink-0">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  <FileDown className="w-5 h-5" />
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">
                    Soumik Chakraborty
                  </h3>
                  <p className="text-xs text-slate-400">
                    Resume & Professional Portfolio
                  </p>
                </div>
              </div>

              <button
                onClick={onClose}
                aria-label="Close resume"
                className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Resume Preview */}
            <div className="overflow-y-auto flex-1 min-h-0 p-4 sm:p-6">
              <div className="p-5 sm:p-7 rounded-xl bg-slate-900 border border-slate-800 space-y-7 text-xs text-slate-300 font-sans">

                {/* Personal Information */}
                <div className="border-b border-slate-700 pb-5">
                  <div className="flex flex-col sm:flex-row sm:justify-between gap-3">
                    <div>
                      <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                        SOUMIK CHAKRABORTY
                      </h1>

                      <p className="text-blue-400 font-semibold mt-1">
                        Computer Science & Business Systems Undergraduate
                      </p>

                      <div className="mt-3 space-y-2 text-[11px] text-slate-400">
                        <p className="flex items-center gap-2">
                          <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                          {PERSONAL_INFO.location}
                        </p>

                        <p className="flex items-center gap-2">
                          <Mail className="w-3.5 h-3.5 text-cyan-400" />
                          {PERSONAL_INFO.email}
                        </p>

                        <p className="flex items-center gap-2">
                          <Phone className="w-3.5 h-3.5 text-cyan-400" />
                          {PERSONAL_INFO.phone}
                        </p>

                        <p className="flex flex-wrap items-center gap-2">
                          <Github className="w-3.5 h-3.5 text-cyan-400" />
                          {PERSONAL_INFO.socials.github}
                        </p>

                        <p className="flex flex-wrap items-center gap-2">
                          <Linkedin className="w-3.5 h-3.5 text-cyan-400" />
                          {PERSONAL_INFO.socials.linkedin}
                        </p>
                      </div>
                    </div>

                    <div className="shrink-0">
                      <span className="inline-block px-3 py-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono font-bold">
                        CGPA: 7.5
                      </span>
                    </div>
                  </div>
                </div>

                {/* Education */}
                <section className="space-y-3">
                  <h3 className="font-bold uppercase tracking-wider text-blue-400 flex items-center gap-2 border-b border-slate-800 pb-2">
                    <GraduationCap className="w-4 h-4" />
                    Education
                  </h3>

                  <div className="space-y-4 pl-2">
                    <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                      <div>
                        <p className="font-bold text-white">
                          Techno Main Salt Lake, Kolkata
                        </p>
                        <p className="text-slate-400 mt-1">
                          B.Tech in Computer Science & Business Systems
                        </p>
                      </div>

                      <span className="text-slate-400 font-mono">
                        2023 – 2027 | CGPA: 7.5
                      </span>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:justify-between gap-1">
                      <div>
                        <p className="font-bold text-white">
                          Bankura Christian Collegiate School
                        </p>
                        <p className="text-slate-400 mt-1">
                          Higher Secondary (WBCHSE): 77.5%
                        </p>
                        <p className="text-slate-400">
                          Secondary (WBBSE): 90%
                        </p>
                      </div>

                      <span className="text-slate-400 font-mono">
                        2021 – 2023
                      </span>
                    </div>
                  </div>
                </section>

                {/* Technical Skills */}
                <section className="space-y-3">
                  <h3 className="font-bold uppercase tracking-wider text-blue-400 flex items-center gap-2 border-b border-slate-800 pb-2">
                    <Code2 className="w-4 h-4" />
                    Technical Skills
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-2">
                    <p><strong className="text-white">Languages:</strong> Python, Java, C, C++, JavaScript, TypeScript, SQL</p>
                    <p><strong className="text-white">Frontend:</strong> React, Next.js, Tailwind CSS, HTML5, CSS3</p>
                    <p><strong className="text-white">Backend:</strong> Node.js, Express.js, REST APIs, Socket.IO, Firebase</p>
                    <p><strong className="text-white">Databases:</strong> MongoDB, MySQL</p>
                    <p><strong className="text-white">Tools:</strong> Git, GitHub, VS Code, Wireshark, Postman</p>
                    <p><strong className="text-white">Core CS:</strong> DSA, DBMS, Operating Systems, Computer Networks, Software Engineering</p>
                  </div>
                </section>

                {/* Projects */}
                <section className="space-y-4">
                  <h3 className="font-bold uppercase tracking-wider text-blue-400 flex items-center gap-2 border-b border-slate-800 pb-2">
                    <BookOpen className="w-4 h-4" />
                    Key Projects
                    <span className="ml-auto text-[10px] text-cyan-400 normal-case tracking-normal">
                      5 Featured Projects
                    </span>
                  </h3>

                  <div className="space-y-4">
                    {projects.map((project) => (
                      <div
                        key={project.id}
                        className="p-4 rounded-xl bg-slate-800/50 border border-slate-700/70 hover:border-purple-500/40 transition-colors"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                          <div>
                            <p className="font-bold text-white text-sm">
                              {project.id}. {project.name}
                            </p>
                            <p className="text-cyan-400 text-[11px] mt-1">
                              {project.subtitle}
                            </p>
                          </div>

                          {project.url && (
                            <a
                              href={project.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 text-[11px] font-semibold shrink-0"
                            >
                              Live Demo
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          )}
                        </div>

                        <p className="text-slate-300 mt-2 leading-relaxed">
                          {project.description}
                        </p>

                        <p className="text-slate-500 mt-2">
                          <span className="text-slate-400 font-semibold">
                            Technologies:
                          </span>{' '}
                          {project.technologies}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Achievements */}
                <section className="space-y-3">
                  <h3 className="font-bold uppercase tracking-wider text-blue-400 flex items-center gap-2 border-b border-slate-800 pb-2">
                    <Award className="w-4 h-4" />
                    Achievements & Certifications
                  </h3>

                  <ul className="list-disc list-inside space-y-2 pl-2 text-slate-300">
                    <li>
                      2nd Place Runner-Up in Innovation Coding Competition
                    </li>
                    <li>
                      4-Star Problem Solving Badge on HackerRank
                    </li>
                    <li>
                      4-Star SQL Badge on HackerRank
                    </li>
                    <li>
                      200+ Coding Problems Solved across HackerRank
                    </li>
                    <li>
                      NPTEL Certified in DBMS (Elite)
                    </li>
                  </ul>
                </section>

              </div>
            </div>

            {/* Footer Actions */}
            <div className="shrink-0 p-4 sm:p-5 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
              <button
                onClick={handleCopyText}
                className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-800 text-slate-200 text-xs font-semibold hover:bg-slate-700 flex items-center justify-center gap-2 border border-slate-700 transition-colors"
              >
                {copied ? (
                  <Check className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}

                {copied ? 'Copied Successfully!' : 'Copy Text Resume'}
              </button>

              <button
                onClick={handleDownload}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 transition-colors"
              >
                <FileDown className="w-4 h-4" />
                Download Official Resume
              </button>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
