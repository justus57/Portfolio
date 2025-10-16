import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { User, FolderOpen, Mail, Server, Monitor, Smartphone, CreditCard, BookOpen, TrendingUp, Cloud } from 'lucide-react';
import TimelineItem from './components/TimelineItem';
import SkillsProgress from './components/SkillsProgress';
import CertificationBadge from './components/CertificationBadge';
import TechnologyRadar from './components/TechnologyRadar';
import AchievementGallery from './components/AchievementGallery';
import DownloadResume from './components/DownloadResume';

const About = () => {
  const [currentLanguage, setCurrentLanguage] = useState('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || 'en';
    setCurrentLanguage(savedLanguage);
  }, []);

  // Professional Timeline Data - Joseph K Justus
  const timelineData = [
    {
      id: 1,
      position: "Software Developer",
      company: "Ed Partners Africa Limited",
      duration: "Jun 2024 — Present",
      location: "Nairobi, Kenya",
      icon: "Code2",
      isCurrentRole: true,
      summary: "Leading software development initiatives with focus on API development, automation, and system optimization.",
      companyLogo: "https://images.unsplash.com/photo-1563013544-824ae1b704d3",
      companyLogoAlt: "Modern technology company building representing Ed Partners Africa Limited headquarters",
      keyAchievements: ["RESTful API Development", "CI/CD Pipeline Implementation", "System Performance Optimization"],
      responsibilities: [
        "Created a RESTful API that allowed for easy integration with third-party services",
        "Developed an API that automated data collection and analysis, resulting in a 25% increase in productivity",
        "Implemented automated testing that increased code coverage to 48%, reducing the number of production issues by 70%",
        "Developed a CI/CD pipeline that reduced deployment time from 3 days to 2 hours",
        "Optimized database queries to improve system performance by 80%",
        "Created a Continuous Integration/Continuous Deployment (CI/CD) pipeline that reduced time-to-deployment from 2 days to less 30 minutes",
        "Developed a chatbot that reduced customer support inquiries by 60%",
        "Developed a secure authentication system that reduced user account hacking attempts by 98%",
        "Developed a mobile application with a user-friendly interface that improved customer engagement by 75%",
        "Collaborated with designers to create a visually appealing user interface"
      ],
      technologies: ["C#", ".NET Core", "Visual Studio", "Visual Studio Code", "Entity Framework", "HTML5", "React", "JavaScript", "CSS", "SQL Server", "Bootstrap", "Web API", "IIS", "jQuery", "GitHub", "Python", "Node.js", "Flutter", "JSON", "XML", "AJAX"],
      majorProjects: [
        {
          name: "RESTful API Integration Platform",
          description: "Comprehensive API system enabling seamless third-party service integration",
          impact: "Facilitated easy integration with multiple external services"
        },
        {
          name: "Automated Data Collection System",
          description: "Intelligent automation system for data collection and analysis",
          impact: "Achieved 25% increase in productivity through automation"
        },
        {
          name: "CI/CD Pipeline Implementation",
          description: "Complete DevOps pipeline reducing deployment time significantly",
          impact: "Reduced deployment time from 3 days to 2 hours, then to 30 minutes"
        },
        {
          name: "Customer Support Chatbot",
          description: "AI-powered chatbot for automated customer service",
          impact: "Reduced customer support inquiries by 60%"
        },
        {
          name: "Secure Authentication System",
          description: "Advanced security system protecting user accounts",
          impact: "Reduced user account hacking attempts by 98%"
        }
      ],
      teamSize: "5+ developers",
      reportingTo: "Technical Lead"
    },
    {
      id: 2,
      position: "Software Developer",
      company: "Fintech Group Kenya",
      duration: "Mar 2023 — Jun 2024",
      location: "Nairobi, Kenya",
      icon: "Banknote",
      summary: "Specialized in payment systems integration and T24 core banking solutions with expertise in financial technologies.",
      companyLogo: "https://images.unsplash.com/photo-1559136555-9303baea8ebd",
      companyLogoAlt: "Financial technology office representing Fintech Group Kenya modern workspace",
      keyAchievements: ["T24 Payment Integration", "Payment Systems Development", "SaaS Solutions"],
      responsibilities: [
        "Lead seamless integration efforts between payment systems and T24, ensuring robust communication and data exchange",
        "Apply expertise in XML to efficiently structure and manage data, optimizing processing and transmission in the payment systems environment",
        "Design, develop, and maintain high-performance web applications for an enhanced user experience within the payment systems landscape",
        "Leverage ADO.NET for efficient data access and manipulation, contributing to the stability and performance of critical payment-related applications",
        "Play a key role in developing and deploying scalable Software as a Service solutions for payment systems",
        "Utilize the .NET Framework to architect and optimize payment system components, ensuring adherence to industry standards",
        "Seamlessly integrate React.js into web applications, enhancing the user interface and overall experience for payment-related platforms",
        "Engage in advanced C# development to create and maintain critical features, modules, and functionalities within the dynamic payment systems ecosystem",
        "Develop and oversee the maintenance of RESTful web services, fostering efficient communication and interoperability across payment system components"
      ],
      technologies: ["C#", ".NET Core", "Visual Studio", "Visual Studio Code", "Entity Framework", "HTML5", "React", "JavaScript", "CSS", "SQL Server", "Bootstrap", "Web API", "IIS", "jQuery", "Azure DevOps", "GitHub", "T24", "XML", "ADO.NET"],
      majorProjects: [
        {
          name: "T24 Payment System Integration",
          description: "Comprehensive integration between payment systems and T24 core banking platform",
          impact: "Enabled seamless payment processing and data exchange"
        },
        {
          name: "Cheque Payment System",
          description: "Digital cheque processing system with automated validation",
          impact: "Streamlined cheque processing operations"
        },
        {
          name: "Payment Mandates System",
          description: "Automated mandate management for recurring payments",
          impact: "Improved mandate processing efficiency and compliance"
        },
        {
          name: "SaaS Payment Platform",
          description: "Scalable Software as a Service solution for payment processing",
          impact: "Provided flexible payment solutions for multiple clients"
        }
      ],
      teamSize: "8+ developers",
      reportingTo: "Senior Technical Lead"
    },
    {
      id: 3,
      position: "Software Developer",
      company: "Bright soft Technologies Ltd",
      duration: "Aug 2021 — Mar 2023",
      location: "Nairobi, Kenya",
      icon: "Settings",
      summary: "Focused on Microsoft Dynamics integration and enterprise web application development with emphasis on business process automation.",
      companyLogo: "https://images.unsplash.com/photo-1497366216548-37526070297c",
      companyLogoAlt: "Professional technology office representing Bright soft Technologies development environment",
      keyAchievements: ["Microsoft Dynamics Integration", "Enterprise Web Development", "Database Optimization"],
      responsibilities: [
        "Integrating Microsoft Dynamics Business Central/NAV & CRM with external interfaces through REST and SOAP APIs using C# class libraries",
        "Developed classes in Business Layer and in Data Access Layer in C#",
        "Developed Business Logic classes for Transaction Module using Business Services",
        "Used Web Forms controls and Custom User Controls to provide a standard interactive user interface and used LINQ for web-page development",
        "Created database objects using SQL Server, including complex stored procedures, DTS packages, triggers, cursors, tables, and views, and other SQL joins and statements for applications",
        "UI Designing, Development and Testing of Web Forms using ASP.NET, C#, XML ADO.NET and .NET Framework",
        "Deployment of Web services for online transactions using C# and exposing them through SOAP and HTTP implemented Exception Handling, Logging, and Validation of incoming requests",
        "Used Asynchronous JavaScript and XML (AJAX) techniques to improve the performance of the portal",
        "Web Application Development using UI Tools (HTML, CSS, JavaScript, Ajax, JSON, jQuery)"
      ],
      technologies: ["C#", ".NET Core", "Visual Studio", "Entity Framework", "ASP.NET", "HTML5", "CSS", "JavaScript", "Angular", "SQL Server", "Bootstrap", "Web API", "IIS", "jQuery", "Jira", "GitHub", "Jenkins", "XML", "AJAX", "JSON", "LINQ", "SOAP", "REST"],
      majorProjects: [
        {
          name: "Microsoft Dynamics Integration Platform",
          description: "Comprehensive integration solution for Dynamics Business Central/NAV & CRM",
          impact: "Seamless data flow between enterprise systems and external interfaces"
        },
        {
          name: "Transaction Module System",
          description: "Business logic implementation for complex transaction processing",
          impact: "Streamlined transaction management and processing"
        },
        {
          name: "Web Services Deployment Platform",
          description: "Robust web services infrastructure for online transactions",
          impact: "Reliable and secure online transaction processing"
        },
        {
          name: "Database Optimization Initiative",
          description: "Complex stored procedures and database performance optimization",
          impact: "Improved database performance and application responsiveness"
        }
      ],
      teamSize: "6 developers",
      reportingTo: "Senior Developer"
    },
    {
      id: 4,
      position: "Junior Developer",
      company: "Intermass Technologies EA ltd",
      duration: "May 2020 — Oct 2020",
      location: "Nairobi, Kenya",
      icon: "Rocket",
      summary: "Started professional journey focusing on application efficiency, data quality, and modern development practices with emphasis on distributed computing and real-time data processing.",
      companyLogo: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      companyLogoAlt: "Technology startup office representing Intermass Technologies EA ltd innovative workspace",
      keyAchievements: ["Application Optimization", "API Integration", "Database Management"],
      responsibilities: [
        "Maximizing applications' efficiency, data quality, scope, interoperability, and flexibility",
        "Used various ideas from distributed computing, large-scale design, real-time data processing, and data storage to solve challenging dataset problems",
        "Managed, optimized, and updated PHP databases as necessary",
        "Developed app integration with REST/SOAP and other APIs for Google Maps, social media logins, payment processors, and other services",
        "Utilized the latest software development tools, techniques, and approaches"
      ],
      technologies: ["Java", "PHP", "ASP.NET MVC", ".NET Framework", "C#", "Git", "Android Development", "REST", "SOAP", "APIs"],
      majorProjects: [
        {
          name: "API Integration Platform",
          description: "Multi-service integration platform for Google Maps, social media, and payment systems",
          impact: "Enhanced application functionality through seamless third-party integrations"
        },
        {
          name: "Database Optimization Project",
          description: "PHP database management and optimization initiative",
          impact: "Improved data quality and application performance"
        },
        {
          name: "Real-time Data Processing System",
          description: "Implementation of distributed computing concepts for data processing",
          impact: "Efficient handling of large-scale datasets and real-time processing"
        }
      ],
      teamSize: "4 developers",
      reportingTo: "Senior Developer"
    }
  ];

  // Skills Progress Data - Joseph K Justus
  const skillsData = [
    {
      category: "Backend Development",
      icon: "Server",
      items: [
        { name: "C# / .NET Core", level: 95, yearsExperience: 7, recentProjects: ["DahabshiilWalletApp", "Clean Architecture"] },
        { name: "ASP.NET Core", level: 93, yearsExperience: 6, recentProjects: ["Payment APIs", "MicroServices"] },
        { name: "SQL Server", level: 90, yearsExperience: 7, recentProjects: ["Financial DB", "Transaction Systems"] },
        { name: "Node.js", level: 78, yearsExperience: 3, recentProjects: ["API Gateway", "Real-time Services"] }
      ]
    },
    {
      category: "Frontend Development",
      icon: "Monitor", 
      items: [
        { name: "React.js", level: 85, yearsExperience: 4, recentProjects: ["Portfolio", "Financial Dashboard"] },
        { name: "JavaScript", level: 92, yearsExperience: 6, recentProjects: ["All Web Projects"] },
        { name: "HTML5 / CSS3", level: 89, yearsExperience: 7, recentProjects: ["Responsive Design", "UI Components"] },
        { name: "TypeScript", level: 75, yearsExperience: 2, recentProjects: ["Enterprise Apps", "Type Safety"] }
      ]
    },
    {
      category: "Mobile Development",
      icon: "Smartphone",
      items: [
        { name: "Flutter", level: 88, yearsExperience: 4, recentProjects: ["DahabshiilWalletApp", "Mobile Banking"] },
        { name: "Dart", level: 85, yearsExperience: 4, recentProjects: ["Flutter Applications", "Mobile Solutions"] }
      ]
    },
    {
      category: "FinTech & Cloud",
      icon: "CreditCard",
      items: [
        { name: "Payment Systems", level: 92, yearsExperience: 5, recentProjects: ["Wallet App", "Gateway Integration"] },
        { name: "Microsoft Azure", level: 80, yearsExperience: 3, recentProjects: ["Cloud Deployment", "DevOps"] },
        { name: "Firebase", level: 75, yearsExperience: 2, recentProjects: ["Mobile Backend", "Real-time DB"] },
        { name: "Financial Technologies", level: 88, yearsExperience: 5, recentProjects: ["Loan Processing", "Transaction Systems"] }
      ]
    }
  ];

  // Certifications Data - Joseph K Justus
  const certificationsData = [
    {
      name: "Microsoft Certified: Azure Fundamentals",
      issuer: "Microsoft",
      status: "active",
      issueDate: "Jan 2024",
      expiryDate: "Jan 2027",
      credentialId: "AZ-900-2024-JKJ",
      logo: "https://images.unsplash.com/photo-1662052955282-da15376f3919",
      logoAlt: "Microsoft Azure certification badge representing cloud computing expertise",
      skillsCovered: ["Azure Services", "Cloud Concepts", "Security", "Pricing"],
      description: "Foundational knowledge of cloud services and Microsoft Azure platform capabilities for modern application development.",
      verificationUrl: "https://learn.microsoft.com/verify/AZ-900-2024-JKJ"
    },
    {
      name: "Flutter Development Certification",
      issuer: "Google Developers",
      status: "active", 
      issueDate: "Mar 2023",
      expiryDate: "Mar 2026",
      credentialId: "FLUTTER-2023-JKJ",
      logo: "https://images.unsplash.com/photo-1633356122544-f134324a6cee",
      logoAlt: "Flutter certification badge representing mobile app development expertise",
      skillsCovered: ["Dart", "Widget Development", "State Management", "Mobile UI"],
      description: "Expertise in developing cross-platform mobile applications using Flutter framework and Dart programming language.",
      verificationUrl: "https://developers.google.com/verify/FLUTTER-2023-JKJ"
    },
    {
      name: "SQL Server Database Administration",
      issuer: "Microsoft",
      status: "active",
      issueDate: "Jun 2022",
      expiryDate: "Jun 2025",
      credentialId: "MSSQL-2022-JKJ",
      logo: "https://images.unsplash.com/photo-1553781247-05094c2c56c6",
      logoAlt: "SQL Server certification representing database management expertise",
      skillsCovered: ["Database Design", "Performance Tuning", "Security", "Backup & Recovery"],
      description: "Advanced skills in SQL Server administration, optimization, and maintenance for enterprise applications.",
      verificationUrl: "https://learn.microsoft.com/verify/MSSQL-2022-JKJ"
    }
  ];

  // Technology Radar Data - Joseph K Justus
  const technologyRadarData = [
    {
      category: "Learning & Exploring",
      icon: "BookOpen",
      items: [
        {
          name: "Blazor WebAssembly",
          status: "learning",
          startDate: "Oct 2025",
          estimatedCompletion: "Jan 2026",
          currentProject: "Interactive Web Components",
          learningResources: ["Microsoft Docs", "Blazor University"],
          interestLevel: 5
        },
        {
          name: "Docker & Kubernetes",
          status: "exploring",
          startDate: "Sep 2025", 
          estimatedCompletion: "Dec 2025",
          currentProject: "Containerized Microservices",
          learningResources: ["Docker Docs", "Kubernetes Tutorial"],
          interestLevel: 4
        },
        {
          name: "GraphQL",
          status: "learning",
          startDate: "Aug 2025",
          estimatedCompletion: "Nov 2025",
          currentProject: "API Gateway Enhancement",
          learningResources: ["GraphQL Docs", "Apollo Server"],
          interestLevel: 4
        }
      ]
    },
    {
      category: "FinTech Innovations",
      icon: "TrendingUp",
      items: [
        {
          name: "Blockchain Development",
          status: "exploring",
          startDate: "Jul 2025",
          estimatedCompletion: "Feb 2026",
          currentProject: "Payment Security Research",
          learningResources: ["Solidity Docs", "Web3 Course"],
          interestLevel: 5
        },
        {
          name: "Machine Learning for Fraud Detection",
          status: "learning",
          startDate: "Sep 2025",
          estimatedCompletion: "Mar 2026",
          currentProject: "Transaction Analysis System",
          learningResources: ["Python ML", "TensorFlow"],
          interestLevel: 4
        }
      ]
    },
    {
      category: "Cloud & DevOps",
      icon: "Cloud",
      items: [
        {
          name: "Azure DevOps Pipelines",
          status: "mastering",
          startDate: "Jun 2025",
          estimatedCompletion: "Nov 2025",
          currentProject: "CI/CD Automation",
          learningResources: ["Azure DevOps Docs"],
          interestLevel: 4
        },
        {
          name: "Terraform",
          status: "exploring",
          startDate: "Oct 2025",
          estimatedCompletion: "Jan 2026",
          currentProject: "Infrastructure as Code",
          learningResources: ["HashiCorp Learn"],
          interestLevel: 3
        }
      ]
    }
  ];

  // Achievements Data - Joseph K Justus
  const achievementsData = [
    {
      title: "DahabshiilWalletApp - Mobile Payment Innovation",
      organization: "Dahabshiil Group",
      date: "2024",
      type: "project",
      category: "Mobile Development",
      level: "Company",
      description: "Successfully developed and deployed Flutter-based mobile wallet application serving thousands of users for secure financial transactions.",
      impact: "Streamlined mobile payment processing and enhanced user experience",
      relatedSkills: ["Flutter", "Dart", "Payment Systems", "Mobile UI/UX"],
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3",
      imageAlt: "Mobile phone displaying wallet application interface with payment features",
      verificationUrl: "https://github.com/justus57/DahabshiilWalletApp"
    },
    {
      title: "Clean Architecture Implementation",
      organization: "Personal Project",
      date: "2024",
      type: "achievement",
      category: "Software Architecture",
      level: "Professional",
      description: "Implemented comprehensive Clean Architecture pattern in .NET Core, demonstrating advanced software design principles and best practices.",
      impact: "Improved code maintainability and system scalability",
      relatedSkills: ["C#", ".NET Core", "Software Architecture", "Design Patterns"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
      imageAlt: "Code architecture diagram showing clean separation of concerns",
      verificationUrl: "https://github.com/justus57/Clean-Architecture-Dotnet-Core"
    },
    {
      title: "MicroServices Platform Development",
      organization: "Dahabshiil Group",
      date: "2023",
      type: "milestone",
      category: "System Architecture", 
      level: "Enterprise",
      description: "Designed and implemented distributed microservices architecture for payment processing with improved scalability and reliability.",
      impact: "Enhanced system performance and fault tolerance",
      relatedSkills: ["Microservices", "C#", "API Design", "Distributed Systems"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
      imageAlt: "Network diagram showing interconnected microservices architecture",
      verificationUrl: "https://github.com/justus57/MicroServices"
    },
    {
      title: "84+ GitHub Repositories",
      organization: "GitHub Community",
      date: "Ongoing",
      type: "milestone",
      category: "Open Source",
      level: "Community",
      description: "Maintained active GitHub profile with 84+ repositories showcasing diverse projects in FinTech, mobile development, and enterprise solutions.",
      impact: "Contributed to developer community and demonstrated technical expertise",
      relatedSkills: ["Version Control", "Open Source", "Community Building"],
      image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498",
      imageAlt: "GitHub profile showing multiple repositories and contributions",
      verificationUrl: "https://github.com/justus57"
    },
    {
      title: "Payment Systems Specialization",
      organization: "FinTech Industry",
      date: "2020-2025",
      type: "specialization",
      category: "Domain Expertise",
      level: "Industry",
      description: "Developed deep expertise in payment systems, loan processing automation, and financial technologies through hands-on project experience.",
      impact: "Became subject matter expert in FinTech development",
      relatedSkills: ["Payment Processing", "Financial Systems", "Regulatory Compliance"],
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43",
      imageAlt: "Digital payment interface showing secure transaction processing",
      verificationUrl: "https://linkedin.com/in/joseph-justus-68232037b"
    }
  ];

  return (
    <>
      <Helmet>
        <title>About - Joseph K Justus | Software Developer Portfolio</title>
        <meta name="description" content="Discover Joseph K Justus's professional journey as a software developer specializing in Payment Systems Development, FinTech, and .NET Framework Technologies. Interactive timeline showcasing career progression and technical expertise." />
        <meta name="keywords" content="Joseph K Justus, software developer, payment systems, fintech, .NET developer, Flutter developer, professional timeline, career journey" />
      </Helmet>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"></div>
          
          {/* Animated Background Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="particle-float absolute top-20 left-1/4 w-2 h-2 bg-primary/20 rounded-full"></div>
            <div className="particle-float absolute top-32 right-1/3 w-1 h-1 bg-accent/30 rounded-full animation-delay-200"></div>
            <div className="particle-float absolute top-40 left-2/3 w-1.5 h-1.5 bg-conversion-accent/25 rounded-full animation-delay-100"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center">

              <div className="flex items-center justify-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center">
                  <User size={24} color="white" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Professional Journey
                </h1>
              </div>
              
              <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                Discover my evolution as a software developer specializing in Payment Systems Development, 
                FinTech solutions, and .NET Framework Technologies through interactive career progression.
              </p>

              {/* Quick Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 max-w-4xl mx-auto">

                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">7+</div>
                  <div className="text-sm text-slate-400">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400">84+</div>
                  <div className="text-sm text-slate-400">GitHub Repositories</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-400">15+</div>
                  <div className="text-sm text-slate-400">Technologies Mastered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400">6+</div>
                  <div className="text-sm text-slate-400">GitHub Followers</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Professional Timeline Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16">

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Career Timeline</h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                Interactive journey through my professional growth in Payment Systems Development, 
                FinTech solutions, and enterprise software development.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              {timelineData?.map((item, index) => (
                <TimelineItem
                  key={item?.id}
                  item={item}
                  index={index}
                  isLast={index === timelineData?.length - 1}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Skills Evolution Section */}
        <section className="py-16 bg-slate-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16">

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Skills Evolution</h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                Technical proficiency progression across Payment Systems, FinTech, and 
                enterprise technologies with real-world project applications.
              </p>
            </motion.div>

            <SkillsProgress skills={skillsData} />
          </div>
        </section>

        {/* Certifications Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16">

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Professional Certifications</h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                Industry-recognized certifications validating expertise in cloud platforms, 
                mobile development, and database management.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certificationsData?.map((certification, index) => (
                <CertificationBadge
                  key={index}
                  certification={certification}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Technology Radar Section */}
        <section className="py-16 bg-slate-900/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16">

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technology Radar</h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                Current learning focus and emerging technology interests with progress tracking 
                and hands-on project applications in FinTech and enterprise development.
              </p>
            </motion.div>

            <TechnologyRadar technologies={technologyRadarData} />
          </div>
        </section>

        {/* Achievement Gallery Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16">

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Achievement Gallery</h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                Professional milestones showcasing impact and contributions in Payment Systems, 
                FinTech development, and open-source community.
              </p>
            </motion.div>

            <AchievementGallery achievements={achievementsData} />
          </div>
        </section>

        {/* Download Resume Section */}
        <section className="py-16 bg-slate-900/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16">

              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Download Resume</h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                Get the latest version of my resume showcasing expertise in Payment Systems Development, 
                FinTech solutions, and .NET Framework Technologies.
              </p>
            </motion.div>

            <DownloadResume />
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 md:p-12 text-white">

              <h2 className="text-3xl font-bold mb-4">Ready to Collaborate?</h2>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Let's discuss how my experience in Payment Systems Development and FinTech can contribute to your next project's success.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/projects"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">

                  <FolderOpen size={20} className="mr-2" />
                  View Projects
                </motion.a>
                
                <motion.a
                  href="mailto:justuskasyoki57@gmail.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors">

                  <Mail size={20} className="mr-2" />
                  Get In Touch
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;