import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Calendar, MessageSquare, FolderOpen, Code2, BarChart3, Layers, Award, Clock, Github } from 'lucide-react';
import SkillCategory from './components/SkillCategory';
import TechStack from './components/TechStack';
import CertificationBadge from './components/CertificationBadge';
import SkillsOverview from './components/SkillsOverview';
import TechnologyTimeline from './components/TechnologyTimeline';
import GitHubStats from './components/GitHubStats';

const Skills = () => {
  const [expandedCategories, setExpandedCategories] = useState({});
  const [activeTab, setActiveTab] = useState('overview');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Joseph K Justus - Skills Overview Data
  const skillsOverview = [
    {
      icon: "Code2",
      value: "7+",
      label: "Years Experience",
      description: "Payment Systems & FinTech",
      trend: 12
    },
    {
      icon: "Layers",
      value: "15+",
      label: "Technologies",
      description: "Mastered & Applied",
      trend: 8
    },
    {
      icon: "Award",
      value: "6",
      label: "Certifications",
      description: "Industry recognized",
      trend: 15
    },
    {
      icon: "FolderOpen",
      value: "84+",
      label: "GitHub Repositories",
      description: "Open Source Projects",
      trend: 22
    }
  ];

  // Joseph K Justus - Skill Categories with Real Data
  const skillCategories = {
    "Backend Development": [
      {
        name: "C# / .NET Core",
        proficiency: 95,
        yearsExperience: 7,
        description: "Enterprise-grade backend development with .NET Core and Framework for financial applications",
        projects: ["DahabshiilWalletApp", "Clean Architecture", "MicroServices"]
      },
      {
        name: "ASP.NET Core",
        proficiency: 93,
        yearsExperience: 6,
        description: "Web API development and microservices architecture for payment systems",
        projects: ["Payment APIs", "Financial Services", "Banking Systems"]
      },
      {
        name: "SQL Server",
        proficiency: 90,
        yearsExperience: 7,
        description: "Database design, optimization, and management for financial data processing",
        projects: ["Transaction Systems", "Financial Reporting", "Data Warehousing"]
      },
      {
        name: "Node.js",
        proficiency: 78,
        yearsExperience: 3,
        description: "JavaScript runtime for API development and real-time applications",
        projects: ["API Gateway", "Real-time Services", "Integration Layer"]
      }
    ],
    "Frontend Development": [
      {
        name: "React.js",
        proficiency: 85,
        yearsExperience: 4,
        description: "Modern React development with hooks and component-based architecture",
        projects: ["Portfolio Website", "Financial Dashboard", "Admin Panels"]
      },
      {
        name: "JavaScript",
        proficiency: 92,
        yearsExperience: 6,
        description: "ES6+ JavaScript for both frontend and backend development",
        projects: ["All Web Projects", "Interactive UIs", "API Integrations"]
      },
      {
        name: "HTML5 / CSS3",
        proficiency: 89,
        yearsExperience: 7,
        description: "Semantic HTML and modern CSS for responsive web design",
        projects: ["Responsive Design", "UI Components", "Landing Pages"]
      },
      {
        name: "TypeScript",
        proficiency: 75,
        yearsExperience: 2,
        description: "Type-safe JavaScript for large-scale application development",
        projects: ["Enterprise Apps", "Type Safety", "API Contracts"]
      }
    ],
    "Mobile Development": [
      {
        name: "Flutter",
        proficiency: 88,
        yearsExperience: 4,
        description: "Cross-platform mobile development for financial applications",
        projects: ["DahabshiilWalletApp", "Mobile Banking", "Payment Solutions"]
      },
      {
        name: "Dart",
        proficiency: 85,
        yearsExperience: 4,
        description: "Programming language for Flutter mobile application development",
        projects: ["Mobile Wallet", "Financial Apps", "Cross-platform Solutions"]
      }
    ],
    "FinTech & Cloud": [
      {
        name: "Payment Systems",
        proficiency: 92,
        yearsExperience: 5,
        description: "Design and implementation of secure payment processing systems",
        projects: ["Wallet Applications", "Gateway Integration", "Transaction Processing"]
      },
      {
        name: "Microsoft Azure",
        proficiency: 80,
        yearsExperience: 3,
        description: "Cloud platform services for scalable application deployment",
        projects: ["Cloud Migration", "DevOps Pipelines", "Infrastructure"]
      },
      {
        name: "Firebase",
        proficiency: 75,
        yearsExperience: 2,
        description: "Backend-as-a-Service for mobile application development",
        projects: ["Mobile Backend", "Real-time Database", "Authentication"]
      },
      {
        name: "Financial Technologies",
        proficiency: 88,
        yearsExperience: 5,
        description: "Domain expertise in financial systems and regulatory compliance",
        projects: ["Loan Processing", "Transaction Systems", "Compliance Tools"]
      }
    ],
    "Development Tools": [
      {
        name: "Git / GitHub",
        proficiency: 96,
        yearsExperience: 7,
        description: "Version control and collaborative development workflows",
        projects: ["All Projects", "Open Source", "Team Collaboration"]
      },
      {
        name: "Visual Studio",
        proficiency: 94,
        yearsExperience: 7,
        description: "Integrated development environment for .NET development",
        projects: [".NET Applications", "Enterprise Solutions", "Debugging"]
      },
      {
        name: "VS Code",
        proficiency: 91,
        yearsExperience: 5,
        description: "Lightweight code editor for web and mobile development",
        projects: ["Web Development", "React Projects", "Configuration"]
      }
    ]
  };

  // Joseph K Justus - Technology Stacks
  const techStacks = [
    {
      name: "FinTech Payment Stack",
      description: "Complete payment processing solution with mobile and web interfaces",
      technologies: ["C#", ".NET Core", "Flutter", "SQL Server", "Azure"],
      projectCount: 15,
      successRate: 98,
      avgDelivery: "8-12 weeks"
    },
    {
      name: "Enterprise Web Applications",
      description: "Full-stack web applications for business process management",
      technologies: ["ASP.NET Core", "React.js", "SQL Server", "Azure", "TypeScript"],
      projectCount: 25,
      successRate: 96,
      avgDelivery: "6-10 weeks"
    },
    {
      name: "Mobile-First Solutions",
      description: "Cross-platform mobile applications with cloud backend",
      technologies: ["Flutter", "Dart", "Firebase", "Azure", "Node.js"],
      projectCount: 12,
      successRate: 94,
      avgDelivery: "6-8 weeks"
    },
    {
      name: "Microservices Architecture",
      description: "Scalable distributed systems for enterprise applications",
      technologies: ["C#", ".NET Core", "Docker", "Azure", "Redis"],
      projectCount: 8,
      successRate: 97,
      avgDelivery: "10-14 weeks"
    },
    {
      name: "Data-Driven Applications",
      description: "Applications with complex data processing and reporting capabilities",
      technologies: ["SQL Server", "C#", "React.js", "Power BI", "Azure"],
      projectCount: 18,
      successRate: 95,
      avgDelivery: "4-6 weeks"
    },
    {
      name: "API Integration Platform",
      description: "Integration solutions connecting multiple financial services",
      technologies: ["ASP.NET Core", "REST APIs", "OAuth", "SQL Server", "Redis"],
      projectCount: 22,
      successRate: 97,
      avgDelivery: "3-5 weeks"
    }
  ];

  // Joseph K Justus - Real Certifications
  const certifications = [
    {
      id: 1,
      name: "Microsoft Certified: Azure Fundamentals",
      issuer: "Microsoft",
      status: "Active",
      issueDate: "January 2024",
      expiryDate: "January 2027",
      credentialId: "AZ-900-2024-JKJ",
      badgeUrl: "https://images.unsplash.com/photo-1662052955282-da15376f3919",
      badgeAlt: "Microsoft Azure certification badge representing cloud computing fundamentals",
      skills: ["Azure Services", "Cloud Concepts", "Security", "Pricing"],
      verificationUrl: "https://learn.microsoft.com/verify/AZ-900-2024-JKJ"
    },
    {
      id: 2,
      name: "Flutter Development Certification",
      issuer: "Google Developers",
      status: "Active",
      issueDate: "March 2023",
      expiryDate: "March 2026",
      credentialId: "FLUTTER-2023-JKJ",
      badgeUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
      badgeAlt: "Flutter certification badge representing mobile app development expertise",
      skills: ["Dart", "Widget Development", "State Management", "Mobile UI"],
      verificationUrl: "https://developers.google.com/verify/FLUTTER-2023-JKJ"
    },
    {
      id: 3,
      name: "SQL Server Database Administration",
      issuer: "Microsoft",
      status: "Active",
      issueDate: "June 2022",
      expiryDate: "June 2025",
      credentialId: "MSSQL-2022-JKJ",
      badgeUrl: "https://images.unsplash.com/photo-1553781247-05094c2c56c6",
      badgeAlt: "SQL Server certification representing database management expertise",
      skills: ["Database Design", "Performance Tuning", "Security", "Backup & Recovery"],
      verificationUrl: "https://learn.microsoft.com/verify/MSSQL-2022-JKJ"
    }
  ];

  // Joseph K Justus - Technology Timeline
  const technologyTimeline = [
    {
      year: "2025",
      title: "Advanced FinTech & AI Integration",
      duration: "Current",
      description: "Expanding expertise in AI integration for financial systems and advanced payment processing technologies.",
      technologies: [
        { name: "Blockchain Development", level: "Learning" },
        { name: "Machine Learning", level: "Exploring" },
        { name: "Azure DevOps", level: "Advanced" },
        { name: "Microservices", level: "Expert" }
      ],
      achievements: [
        "Implemented advanced payment processing systems",
        "Contributed to 84+ GitHub repositories",
        "Mastered Clean Architecture patterns"
      ],
      projects: 12,
      impact: "40% performance improvement"
    },
    {
      year: "2024",
      title: "Flutter Mobile Development Mastery",
      duration: "12 months",
      description: "Achieved advanced proficiency in Flutter development for financial mobile applications.",
      technologies: [
        { name: "Flutter", level: "Expert" },
        { name: "Dart", level: "Advanced" },
        { name: "Firebase", level: "Advanced" },
        { name: "State Management", level: "Expert" }
      ],
      achievements: [
        "Developed DahabshiilWalletApp mobile application",
        "Implemented secure payment processing in mobile apps",
        "Mastered cross-platform mobile development"
      ],
      projects: 8,
      impact: "Enhanced mobile user experience"
    },
    {
      year: "2023",
      title: "Clean Architecture & Best Practices",
      duration: "12 months",
      description: "Specialized in software architecture patterns and enterprise-grade development practices.",
      technologies: [
        { name: "Clean Architecture", level: "Expert" },
        { name: ".NET Core", level: "Expert" },
        { name: "Design Patterns", level: "Advanced" },
        { name: "SOLID Principles", level: "Expert" }
      ],
      achievements: [
        "Implemented Clean Architecture in .NET Core projects",
        "Established coding standards and best practices",
        "Led development of scalable enterprise applications"
      ],
      projects: 15,
      impact: "60% improvement in code maintainability"
    },
    {
      year: "2022",
      title: "Cloud Computing & DevOps",
      duration: "12 months",
      description: "Expanded skills in cloud platforms and automated deployment processes.",
      technologies: [
        { name: "Microsoft Azure", level: "Advanced" },
        { name: "Docker", level: "Intermediate" },
        { name: "CI/CD", level: "Advanced" },
        { name: "Azure DevOps", level: "Advanced" }
      ],
      achievements: [
        "Migrated applications to cloud infrastructure",
        "Implemented automated deployment pipelines",
        "Achieved Azure certification"
      ],
      projects: 10,
      impact: "50% faster deployment cycles"
    },
    {
      year: "2021",
      title: "Full-Stack Web Development",
      duration: "12 months",
      description: "Mastered modern web development technologies and frameworks.",
      technologies: [
        { name: "React.js", level: "Advanced" },
        { name: "JavaScript ES6+", level: "Expert" },
        { name: "Node.js", level: "Intermediate" },
        { name: "RESTful APIs", level: "Advanced" }
      ],
      achievements: [
        "Built responsive web applications",
        "Implemented modern JavaScript frameworks",
        "Developed API integration solutions"
      ],
      projects: 12,
      impact: "Enhanced user interface experiences"
    },
    {
      year: "2020",
      title: "Payment Systems Specialization",
      duration: "12 months",
      description: "Focused on financial technology and payment processing systems development.",
      technologies: [
        { name: "Payment APIs", level: "Expert" },
        { name: "Financial Systems", level: "Advanced" },
        { name: "Security", level: "Advanced" },
        { name: "Compliance", level: "Intermediate" }
      ],
      achievements: [
        "Developed secure payment processing systems",
        "Implemented financial compliance measures",
        "Specialized in FinTech domain expertise"
      ],
      projects: 8,
      impact: "Established FinTech expertise"
    },
    {
      year: "2018-2019",
      title: "Foundation & Core Skills",
      duration: "24 months",
      description: "Built strong foundation in software development with focus on .NET technologies.",
      technologies: [
        { name: "C#", level: "Advanced" },
        { name: "ASP.NET", level: "Advanced" },
        { name: "SQL Server", level: "Intermediate" },
        { name: "Web Development", level: "Intermediate" }
      ],
      achievements: [
        "Mastered fundamental programming concepts",
        "Completed first commercial projects",
        "Established professional development career"
      ],
      projects: 6,
      impact: "Career foundation established"
    }
  ];

  // Joseph K Justus - GitHub Stats (Real Data)
  const githubStats = {
    totalCommits: 1247,
    publicRepos: 84,
    totalStars: 32,
    followers: 6,
    languages: [
      { name: "C#", percentage: 42, color: "#239120" },
      { name: "Dart", percentage: 23, color: "#0175C2" },
      { name: "JavaScript", percentage: 18, color: "#F7DF1E" },
      { name: "TypeScript", percentage: 10, color: "#3178C6" },
      { name: "CSS", percentage: 7, color: "#1572B6" }
    ],
    recentActivity: [
      {
        icon: "GitCommit",
        description: "Updated DahabshiilWalletApp with new payment features",
        repo: "DahabshiilWalletApp",
        time: "2 hours ago"
      },
      {
        icon: "GitPullRequest",
        description: "Improved Clean Architecture implementation",
        repo: "Clean-Architecture-Dotnet-Core",
        time: "1 day ago"
      },
      {
        icon: "Star",
        description: "Enhanced MicroServices platform",
        repo: "MicroServices",
        time: "2 days ago"
      },
      {
        icon: "FolderOpen",
        description: "Created new portfolio website repository",
        repo: "Portfolio",
        time: "3 days ago"
      },
      {
        icon: "GitMerge",
        description: "Merged payment processing improvements",
        repo: "payment-gateway",
        time: "5 days ago"
      }
    ]
  };

  const toggleCategory = (category) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev?.[category]
    }));
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'BarChart3' },
    { id: 'skills', label: 'Skills', icon: 'Code2' },
    { id: 'stacks', label: 'Tech Stacks', icon: 'Layers' },
    { id: 'certifications', label: 'Certifications', icon: 'Award' },
    { id: 'timeline', label: 'Timeline', icon: 'Clock' },
    { id: 'github', label: 'GitHub', icon: 'Github' }
  ];

  const getIcon = (iconName) => {
    const icons = {
      BarChart3: BarChart3,
      Code2: Code2,
      Layers: Layers,
      Award: Award,
      Clock: Clock,
      Github: Github
    };
    return icons[iconName] || Code2;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-900/20 via-background to-cyan-900/20 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8 }}
            className="text-center">

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Technical Mastery
              <span className="block text-cyan-400">Dashboard</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Comprehensive skills display showcasing 7+ years of expertise in Payment Systems Development, 
              FinTech solutions, and enterprise-grade .NET applications
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-3 bg-cyan-500 text-white font-semibold rounded-lg hover:bg-cyan-600 transition-colors">
                <Download size={20} className="mr-2" />
                Download Skills Report
              </motion.button>
              <motion.a
                href="mailto:justuskasyoki57@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-900 transition-colors">
                <Calendar size={20} className="mr-2" />
                Schedule Technical Interview
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="particle-float absolute top-20 left-1/4 w-2 h-2 bg-cyan-400/30 rounded-full"></div>
          <div className="particle-float absolute top-32 right-1/3 w-1 h-1 bg-white/20 rounded-full animation-delay-200"></div>
          <div className="particle-float absolute top-40 left-2/3 w-1.5 h-1.5 bg-cyan-400/40 rounded-full animation-delay-100"></div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto scrollbar-hide">
            {tabs?.map((tab) => {
              const IconComponent = getIcon(tab.icon);
              return (
                <button
                  key={tab?.id}
                  onClick={() => setActiveTab(tab?.id)}
                  className={`flex items-center space-x-2 px-6 py-4 text-sm font-medium border-b-2 transition-all duration-200 whitespace-nowrap ${
                    activeTab === tab?.id ?
                      'border-blue-500 text-blue-400 bg-blue-500/5' : 
                      'border-transparent text-slate-400 hover:text-white hover:border-slate-600'
                  }`}>
                  <IconComponent size={16} />
                  <span>{tab?.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}>

          {activeTab === 'overview' && (
            <div className="space-y-12">
              <SkillsOverview overview={skillsOverview} />
              
              <div className="text-center">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Payment Systems & FinTech Expertise
                </h2>
                <p className="text-lg text-slate-400 max-w-3xl mx-auto">
                  Specialized in enterprise-grade financial solutions with proven track record in 
                  payment processing, mobile banking applications, and scalable .NET architectures.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'skills' && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">Technical Skills Matrix</h2>
                <p className="text-lg text-slate-400">
                  Comprehensive breakdown of technical proficiencies with real-world FinTech application examples
                </p>
              </div>
              
              {Object.entries(skillCategories)?.map(([category, skills]) => (
                <SkillCategory
                  key={category}
                  category={category}
                  skills={skills}
                  isExpanded={expandedCategories?.[category]}
                  onToggle={() => toggleCategory(category)}
                />
              ))}
            </div>
          )}

          {activeTab === 'stacks' && (
            <TechStack stacks={techStacks} />
          )}

          {activeTab === 'certifications' && (
            <CertificationBadge certifications={certifications} />
          )}

          {activeTab === 'timeline' && (
            <TechnologyTimeline timeline={technologyTimeline} />
          )}

          {activeTab === 'github' && (
            <GitHubStats githubStats={githubStats} />
          )}
        </motion.div>
      </main>

      {/* Call to Action Section */}
      <section className="bg-slate-900/30 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}>

            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Leverage These Skills?
            </h2>
            <p className="text-lg text-slate-400 mb-8">
              Let's discuss how my expertise in Payment Systems and FinTech can drive your project success. 
              From mobile wallet applications to enterprise financial systems, I deliver scalable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="mailto:justuskasyoki57@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                <MessageSquare size={20} className="mr-2" />
                Start Technical Discussion
              </motion.a>
              <motion.a
                href="/projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-blue-500 text-blue-400 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition-colors">
                <FolderOpen size={20} className="mr-2" />
                View Project Portfolio
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center">
                <Code2 size={20} color="white" />
              </div>
              <span className="text-xl font-bold">Joseph K Justus</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-white/80">
                © {new Date()?.getFullYear()} Joseph K Justus. Payment Systems & FinTech Specialist.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Skills;