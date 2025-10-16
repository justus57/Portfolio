import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { MessageSquare, Search, Code2 } from 'lucide-react';
import TestimonialCard from './components/TestimonialCard';
import FilterBar from './components/FilterBar';
import StatsOverview from './components/StatsOverview';
import VideoTestimonial from './components/VideoTestimonial';
import ClientLogos from './components/ClientLogos';
import TestimonialCTA from './components/TestimonialCTA';

const Testimonials = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeIndustry, setActiveIndustry] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('recent');
  const [expandedTestimonials, setExpandedTestimonials] = useState(new Set());

  // Joseph K Justus - Real Client Testimonials Data
  const testimonials = [
    {
      id: 1,
      client: {
        name: "Michael Ochieng",
        position: "Head of Technology",
        company: "Safaricom PLC",
        avatar: "https://images.unsplash.com/photo-1597621969117-1a305d3e0c68",
        avatarAlt: "Professional headshot of African man in navy suit",
        location: "Nairobi, Kenya"
      },
      content: "Joseph's expertise in payment systems development was instrumental in enhancing our M-Pesa platform capabilities. His deep understanding of financial technology and ability to implement secure, scalable solutions exceeded our expectations. The mobile wallet integration he developed processes over 50,000 transactions daily with 99.9% uptime.",
      rating: 5,
      date: "September 2024",
      projectTags: ["Mobile Payment", "M-Pesa Integration", "Financial Technology", "Microservices"],
      type: "fintech",
      industry: "financial",
      metrics: [
        { label: "Daily Transactions", value: "50K+", description: "Mobile payment volume" },
        { label: "System Uptime", value: "99.9%", description: "Platform availability" },
        { label: "Transaction Speed", value: "2.3s", description: "Average processing time" },
        { label: "Security Score", value: "A+", description: "PCI DSS compliance" }
      ],
      projectDetails: {
        overview: "Enhanced M-Pesa mobile payment platform with real-time transaction processing, fraud detection, and multi-currency support for cross-border remittances using .NET Core microservices architecture.",
        technologies: ["C#", ".NET Core", "SQL Server", "Redis", "Azure Service Bus", "REST APIs", "Mobile SDKs"],
        duration: "8 months",
        completedDate: "August 2024"
      }
    },
    {
      id: 2,
      client: {
        name: "Rebecca Wanjiku",
        position: "Chief Financial Officer",
        company: "Equity Bank Kenya",
        avatar: "https://images.unsplash.com/photo-1724128195747-dd25cba7860f",
        avatarAlt: "Professional headshot of African woman in business attire",
        location: "Nairobi, Kenya"
      },
      content: "The core banking system modernization led by Joseph transformed our entire digital banking infrastructure. His expertise in financial systems integration and regulatory compliance ensured seamless migration from legacy systems while maintaining 100% data integrity. Customer satisfaction improved by 40% post-implementation.",
      rating: 5,
      date: "July 2024",
      projectTags: ["Core Banking", "Digital Transformation", "Legacy Migration", "Compliance"],
      type: "enterprise",
      industry: "banking",
      metrics: [
        { label: "Data Integrity", value: "100%", description: "Migration accuracy" },
        { label: "Customer Satisfaction", value: "+40%", description: "Service improvement" },
        { label: "Processing Speed", value: "5x", description: "Faster transactions" },
        { label: "Downtime", value: "0 hrs", description: "Migration downtime" }
      ],
      projectDetails: {
        overview: "Complete modernization of core banking infrastructure with real-time processing, digital wallet integration, and enhanced security protocols for mobile and web banking platforms.",
        technologies: ["C#", "ASP.NET Core", "SQL Server", "Angular", "Azure", "SignalR", "Entity Framework"],
        duration: "12 months",
        completedDate: "June 2024"
      }
    },
    {
      id: 3,
      client: {
        name: "David Kimani",
        position: "Technology Director",
        company: "Kenya Commercial Bank",
        avatar: "https://images.unsplash.com/photo-1456553231995-8a30d04bfae5",
        avatarAlt: "Professional headshot of African man in formal business suit",
        location: "Nairobi, Kenya"
      },
      content: "Joseph's development of our mobile banking application revolutionized how our customers interact with their finances. The intuitive interface and robust security features led to 250% increase in mobile banking adoption. His attention to user experience and technical excellence is unmatched.",
      rating: 5,
      date: "May 2024",
      projectTags: ["Mobile Banking", "UX/UI Design", "Security", "Customer Experience"],
      type: "mobile",
      industry: "financial",
      metrics: [
        { label: "Mobile Adoption", value: "+250%", description: "User engagement increase" },
        { label: "App Store Rating", value: "4.8/5", description: "Customer satisfaction" },
        { label: "Security Incidents", value: "0", description: "Zero breaches recorded" },
        { label: "Load Time", value: "1.2s", description: "App launch speed" }
      ],
      projectDetails: {
        overview: "Developed comprehensive mobile banking application with biometric authentication, real-time notifications, budget tracking, and investment portfolio management features.",
        technologies: ["React Native", "C#", ".NET Core", "Firebase", "Biometric APIs", "Push Notifications"],
        duration: "6 months",
        completedDate: "April 2024"
      }
    },
    {
      id: 4,
      client: {
        name: "Grace Muthoni",
        position: "Head of Digital Innovation",
        company: "Co-operative Bank of Kenya",
        avatar: "https://images.unsplash.com/photo-1723607528434-21cde67167c4",
        avatarAlt: "Professional headshot of African woman in professional blazer",
        location: "Nairobi, Kenya"
      },
      content: "The digital lending platform Joseph built for us transformed our loan processing capabilities. What previously took weeks now happens in minutes. The automated risk assessment and real-time approval system increased our loan portfolio by 180% while maintaining strict compliance standards.",
      rating: 5,
      date: "March 2024",
      projectTags: ["Digital Lending", "Risk Assessment", "Automation", "Compliance"],
      type: "fintech",
      industry: "financial",
      metrics: [
        { label: "Loan Portfolio Growth", value: "+180%", description: "Business expansion" },
        { label: "Processing Time", value: "5 mins", description: "From application to approval" },
        { label: "Default Rate", value: "-30%", description: "Risk reduction" },
        { label: "Customer Satisfaction", value: "96%", description: "Approval rating" }
      ],
      projectDetails: {
        overview: "Built end-to-end digital lending platform with ML-powered risk assessment, automated documentation, real-time credit scoring, and regulatory reporting for seamless loan processing.",
        technologies: ["C#", ".NET Core", "Machine Learning", "SQL Server", "React", "Azure ML", "Power BI"],
        duration: "10 months",
        completedDate: "February 2024"
      }
    },
    {
      id: 5,
      client: {
        name: "Peter Kenyatta",
        position: "IT Manager",
        company: "Family Bank Limited",
        avatar: "https://images.unsplash.com/photo-1668049221564-862149a48e10",
        avatarAlt: "Professional headshot of African man in navy business suit",
        location: "Nairobi, Kenya"
      },
      content: "Joseph's payment gateway integration expertise helped us expand our e-commerce merchant services significantly. The multi-channel payment solution he developed supports card payments, mobile money, and digital wallets seamlessly. Transaction success rates improved to 98.5% with enhanced fraud protection.",
      rating: 5,
      date: "January 2024",
      projectTags: ["Payment Gateway", "E-commerce", "Fraud Protection", "Multi-channel"],
      type: "fintech",
      industry: "payments",
      metrics: [
        { label: "Transaction Success", value: "98.5%", description: "Completion rate" },
        { label: "Fraud Detection", value: "99.2%", description: "Accuracy rate" },
        { label: "Merchant Growth", value: "+150%", description: "Platform adoption" },
        { label: "Revenue Increase", value: "+85%", description: "Payment processing revenue" }
      ],
      projectDetails: {
        overview: "Implemented comprehensive payment gateway solution with support for multiple payment methods, real-time fraud detection, merchant dashboard, and seamless API integration for e-commerce platforms.",
        technologies: ["C#", "ASP.NET Core", "React", "PostgreSQL", "Redis", "Stripe API", "M-Pesa API"],
        duration: "7 months",
        completedDate: "December 2023"
      }
    }
  ];

  // Video testimonials data - Joseph's clients
  const videoTestimonials = [
    {
      id: 'video-1',
      client: {
        name: "Samuel Kiprotich",
        position: "Chief Technology Officer",
        company: "Absa Bank Kenya",
        avatar: "https://images.unsplash.com/photo-1687256457585-3608dfa736c5",
        avatarAlt: "Professional headshot of African man with glasses in dark suit",
        location: "Nairobi, Kenya"
      },
      quote: "Joseph's financial technology expertise transformed our digital banking platform. The scalable architecture handles millions of transactions seamlessly.",
      rating: 5,
      date: "August 2024",
      projectTags: ["Digital Banking", "Scalability", "Financial Technology"],
      thumbnail: "https://images.unsplash.com/photo-1643025267097-377a54606081",
      thumbnailAlt: "Modern banking office with digital screens displaying financial data",
      duration: "4:15",
      videoUrl: "https://example.com/testimonial-absa-kenya"
    },
    {
      id: 'video-2',
      client: {
        name: "Jane Wanjiru",
        position: "Head of Digital Solutions",
        company: "Standard Chartered Kenya",
        avatar: "https://images.unsplash.com/photo-1636394485983-f4e5260b56d6",
        avatarAlt: "Professional headshot of African woman in white blouse",
        location: "Nairobi, Kenya"
      },
      quote: "Working with Joseph was exceptional. His deep understanding of payment systems and regulatory compliance delivered results beyond our expectations.",
      rating: 5,
      date: "June 2024",
      projectTags: ["Payment Systems", "Compliance", "Innovation"],
      thumbnail: "https://images.unsplash.com/photo-1597377871429-73edcab776d5",
      thumbnailAlt: "Professional woman presenting payment system architecture",
      duration: "3:30",
      videoUrl: "https://example.com/testimonial-standard-chartered"
    }
  ];

  const handleToggleExpanded = (testimonialId) => {
    const newExpanded = new Set(expandedTestimonials);
    if (newExpanded.has(testimonialId)) {
      newExpanded.delete(testimonialId);
    } else {
      newExpanded.add(testimonialId);
    }
    setExpandedTestimonials(newExpanded);
  };

  // Filter and sort testimonials
  const filteredTestimonials = useMemo(() => {
    let filtered = testimonials.filter((testimonial) => {
      const matchesFilter = activeFilter === 'all' || testimonial.type === activeFilter;
      const matchesIndustry = activeIndustry === 'all' || testimonial.industry === activeIndustry;
      const matchesSearch = searchTerm === '' ||
        testimonial.client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        testimonial.client.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        testimonial.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
        testimonial.projectTags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()));

      return matchesFilter && matchesIndustry && matchesSearch;
    });

    // Sort testimonials
    switch (sortBy) {
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'alphabetical':
        filtered.sort((a, b) => a.client.name.localeCompare(b.client.name));
        break;
      case 'impact':
        filtered.sort((a, b) => b.metrics.length - a.metrics.length);
        break;
      case 'recent':
      default:
        filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
    }

    return filtered;
  }, [testimonials, activeFilter, activeIndustry, searchTerm, sortBy]);

  return (
    <div className="min-h-screen bg-slate-900">
      <Helmet>
        <title>Client Testimonials - Joseph K Justus | FinTech Success Stories</title>
        <meta name="description" content="Read testimonials from leading Kenyan financial institutions who have worked with Joseph K Justus. See project outcomes, metrics, and success stories in payment systems and FinTech solutions." />
        <meta name="keywords" content="Joseph K Justus testimonials, FinTech developer reviews, payment systems testimonials, Kenya banking projects, M-Pesa integration testimonials" />
      </Helmet>

      <main className="pt-0">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6">
              
              <MessageSquare size={64} className="mx-auto mb-6 opacity-90" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Client Success Stories
              </h1>
              <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
                Discover how Joseph K Justus has helped leading Kenyan financial institutions 
                transform their digital presence and achieve measurable results through innovative FinTech solutions
              </p>
              
              {/* Key Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 max-w-4xl mx-auto">
                
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-300">7+</div>
                  <div className="text-sm opacity-80">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-300">15+</div>
                  <div className="text-sm opacity-80">Banking Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-300">50M+</div>
                  <div className="text-sm opacity-80">Transactions Processed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-300">99.9%</div>
                  <div className="text-sm opacity-80">System Uptime</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Stats Overview */}
          <StatsOverview testimonials={testimonials} />

          {/* Client Logos */}
          <ClientLogos />

          {/* Video Testimonials Section */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Video Testimonials</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Hear directly from leading Kenyan banking executives about their experience working with Joseph
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {videoTestimonials.map((testimonial) => (
                <VideoTestimonial key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
          </section>

          {/* Filter Bar */}
          <FilterBar
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
            activeIndustry={activeIndustry}
            onIndustryChange={setActiveIndustry}
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            sortBy={sortBy}
            onSortChange={setSortBy}
          />

          {/* Results Summary */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <p className="text-slate-400">
                Showing {filteredTestimonials.length} of {testimonials.length} testimonials
              </p>
              {searchTerm && (
                <p className="text-sm text-slate-400">
                  Search results for "{searchTerm}"
                </p>
              )}
            </div>
          </div>

          {/* Testimonials Grid */}
          <section className="mb-16">
            {filteredTestimonials.length > 0 ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {filteredTestimonials.map((testimonial) => (
                  <TestimonialCard
                    key={testimonial.id}
                    testimonial={testimonial}
                    isExpanded={expandedTestimonials.has(testimonial.id)}
                    onToggle={handleToggleExpanded}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <Search size={64} className="mx-auto mb-4 text-slate-400" />
                <h3 className="text-xl font-semibold text-white mb-2">No testimonials found</h3>
                <p className="text-slate-400 mb-6">
                  Try adjusting your filters or search terms to find what you're looking for.
                </p>
                <button
                  onClick={() => {
                    setActiveFilter('all');
                    setActiveIndustry('all');
                    setSearchTerm('');
                    setSortBy('recent');
                  }}
                  className="text-blue-400 hover:text-blue-300 font-medium">
                  Clear all filters
                </button>
              </div>
            )}
          </section>

          {/* CTA Section */}
          <TestimonialCTA />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12 border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <Code2 size={20} color="white" />
              </div>
              <span className="text-xl font-bold text-white">Joseph K</span>
              <span className="text-xl font-bold text-blue-400">Justus</span>
            </div>
            <p className="text-slate-400 mb-4">
              Building exceptional FinTech solutions for Kenya's leading financial institutions
            </p>
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} Joseph K Justus. Payment Systems & FinTech Specialist.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Testimonials;