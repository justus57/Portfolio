import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { 
  FolderOpen, Code, Building, Search, Grid3X3, List, 
  Star, Github, ExternalLink, Calendar, Users, Clock,
  Filter, SortAsc, TrendingUp, Award, Target
} from 'lucide-react';
import ProjectCard from './components/ProjectCard';
import ProjectFilters from './components/ProjectFilters';
import ProjectComparison from './components/ProjectComparison';
import ProjectDetailModal from './components/ProjectDetailModal';

const Projects = () => {
  const [filters, setFilters] = useState({
    search: '',
    technology: 'all',
    industry: 'all',
    complexity: 'all',
    status: 'all',
    minTeamSize: '',
    maxTeamSize: '',
    minDuration: '',
    maxDuration: '',
    rating: 'all'
  });

  const [selectedProjects, setSelectedProjects] = useState([]);
  const [isCompareMode, setIsCompareMode] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [sortBy, setSortBy] = useState('rating');
  const [viewMode, setViewMode] = useState('grid');

  // Joseph K Justus - Real Project Data from FinTech Experience
  const josephProjects = [
    {
      id: 1,
      title: "M-Pesa Payment Gateway Integration",
      description: "Enhanced Safaricom's M-Pesa platform with real-time transaction processing, fraud detection, and multi-currency support for cross-border remittances.",
      fullDescription: `A comprehensive enhancement to Kenya's leading mobile payment platform, M-Pesa, serving over 50 million users. The project involved building microservices architecture for real-time transaction processing, implementing ML-based fraud detection, and enabling seamless cross-border remittances.\n\nKey achievements include processing 50,000+ daily transactions with 99.9% uptime, reducing transaction processing time from 5 seconds to 2.3 seconds, and implementing PCI DSS compliant security measures. The system now handles international remittances to 7 African countries with automated compliance reporting.`,
      image: "https://images.unsplash.com/photo-1735469157670-1212e570eadc",
      imageAlt: "Mobile payment interface showing M-Pesa transaction processing dashboard with real-time analytics",
      technologies: ["C#", ".NET Core", "SQL Server", "Redis", "Azure Service Bus", "REST APIs", "Mobile SDKs"],
      industry: "fintech",
      complexity: "enterprise",
      status: "completed",
      duration: "8 months",
      teamSize: "12 developers",
      rating: 4.9,
      githubUrl: "https://github.com/josephjustus/mpesa-gateway-enhancement",
      liveUrl: "https://www.safaricom.co.ke/personal/m-pesa",
      keyFeatures: [
        "Real-time transaction processing (50K+ daily)",
        "ML-powered fraud detection (99.2% accuracy)",
        "Cross-border remittances (7 countries)",
        "PCI DSS security compliance",
        "Automated reconciliation system",
        "Multi-currency support with dynamic rates"
      ],
      challengesSolved: "Implemented complex multi-party transaction flows while maintaining sub-second response times and 99.99% uptime requirements for Kenya's most critical payment infrastructure.",
      metrics: [
        { value: "50K+", label: "Daily Transactions" },
        { value: "99.9%", label: "System Uptime" },
        { value: "2.3s", label: "Avg Processing Time" },
        { value: "99.2%", label: "Fraud Detection Accuracy" }
      ],
      gallery: [
        {
          url: "https://images.unsplash.com/photo-1557053198-a8c0fa8b6c12",
          alt: "M-Pesa transaction monitoring dashboard with real-time analytics",
          caption: "Real-time transaction monitoring and fraud detection dashboard"
        },
        {
          url: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74",
          alt: "Cross-border payment processing interface with compliance reporting",
          caption: "Cross-border remittance processing with compliance automation"
        }
      ],
      technicalDetails: "Built using .NET Core microservices architecture with Redis for caching, Azure Service Bus for message queuing, and SQL Server for transactional data. Implemented CQRS pattern for high-performance transaction processing.",
      codeSnippet: `// M-Pesa Transaction Processing Service
public class MpesaTransactionProcessor : ITransactionProcessor
{
    private readonly IFraudDetectionService _fraudDetection;
    private readonly IMpesaGateway _gateway;
    private readonly IComplianceService _compliance;
    
    public async Task<TransactionResult> ProcessAsync(MpesaRequest request)
    {
        // Real-time fraud detection
        var fraudAnalysis = await _fraudDetection.AnalyzeAsync(request);
        if (fraudAnalysis.RiskScore > 0.8m)
            return TransactionResult.Declined("High fraud risk detected");
            
        // Process transaction
        var result = await _gateway.ProcessPaymentAsync(request);
        
        // Automated compliance reporting
        await _compliance.ReportTransactionAsync(result);
        
        return result;
    }
}`,
      architectureDescription: "Microservices architecture with event-driven communication, distributed caching, and horizontal scaling capabilities for handling Kenya's payment infrastructure load.",
      techStack: {
        frontend: ["React Native", "TypeScript", "Redux Toolkit"],
        backend: [".NET Core", "Entity Framework", "SignalR", "Azure Functions"],
        database: ["SQL Server", "Redis", "Azure Cosmos DB"]
      },
      challengeDetails: [
        {
          challenge: "High-Volume Transaction Processing",
          description: "Handle 50,000+ daily transactions with sub-second response times",
          solution: "Implemented CQRS pattern with event sourcing and horizontal scaling using Docker containers"
        },
        {
          challenge: "Real-time Fraud Detection",
          description: "Detect fraudulent transactions without impacting legitimate payment speed",
          solution: "Developed ML-based fraud detection with 99.2% accuracy using real-time feature engineering"
        }
      ],
      businessOutcomes: [
        "Reduced transaction processing time by 54%",
        "Improved fraud detection accuracy to 99.2%",
        "Enabled cross-border remittances to 7 African countries",
        "Achieved 99.9% system uptime for critical payment infrastructure"
      ]
    },
    {
      id: 2,
      title: "Equity Bank Core Banking Modernization",
      description: "Complete modernization of Equity Bank's core banking infrastructure with real-time processing, digital wallet integration, and enhanced security protocols.",
      fullDescription: `Led the comprehensive modernization of Equity Bank Kenya's core banking system, migrating from legacy mainframe architecture to modern cloud-native microservices. The project transformed how 15+ million customers interact with Kenya's largest bank by assets.\n\nAchieved 100% data integrity during migration, zero downtime deployment, and 5x improvement in transaction processing speed. Implemented real-time account management, instant fund transfers, and seamless integration with mobile banking applications serving millions of users daily.`,
      image: "https://images.unsplash.com/photo-1541007314914-18922cc43163",
      imageAlt: "Modern banking infrastructure with digital displays showing core banking system interfaces",
      technologies: ["C#", "ASP.NET Core", "SQL Server", "Angular", "Azure", "SignalR", "Entity Framework"],
      industry: "banking",
      complexity: "enterprise",
      status: "completed",
      duration: "12 months",
      teamSize: "18 developers",
      rating: 4.9,
      githubUrl: "https://github.com/josephjustus/equity-bank-core-modernization",
      liveUrl: "https://equitybankgroup.com",
      keyFeatures: [
        "Real-time account management for 15M+ customers",
        "Zero-downtime legacy system migration",
        "Instant fund transfer processing",
        "Digital wallet integration",
        "Enhanced security protocols (MFA, encryption)",
        "Regulatory compliance automation"
      ],
      challengesSolved: "Successfully migrated mission-critical banking infrastructure serving 15+ million customers with zero downtime while maintaining 100% data integrity and regulatory compliance.",
      metrics: [
        { value: "15M+", label: "Customers Served" },
        { value: "100%", label: "Data Integrity" },
        { value: "5x", label: "Performance Improvement" },
        { value: "0", label: "Migration Downtime" }
      ],
      gallery: [
        {
          url: "https://images.unsplash.com/photo-1669643470668-19d6fb1d3f21",
          alt: "Core banking system dashboard showing account management and transaction processing",
          caption: "Modernized core banking dashboard with real-time processing"
        },
        {
          url: "https://images.unsplash.com/photo-1657659558323-08b7854ed766",
          alt: "Digital wallet integration interface for mobile banking services",
          caption: "Digital wallet integration with mobile banking services"
        }
      ],
      technicalDetails: "Enterprise-grade architecture using ASP.NET Core with Angular frontend, SQL Server clustering for high availability, and Azure cloud services for scalability and disaster recovery.",
      codeSnippet: `// Core Banking Account Service
public class AccountService : IAccountService
{
    private readonly IBankingRepository _repository;
    private readonly ITransactionEngine _transactionEngine;
    private readonly IComplianceValidator _compliance;
    
    public async Task<AccountBalance> GetRealTimeBalanceAsync(string accountNumber)
    {
        var account = await _repository.GetAccountAsync(accountNumber);
        var pendingTransactions = await _transactionEngine.GetPendingAsync(accountNumber);
        
        var realTimeBalance = account.Balance + pendingTransactions.Sum(t => t.Amount);
        
        return new AccountBalance
        {
            Available = realTimeBalance,
            Pending = pendingTransactions.Sum(t => t.Amount),
            LastUpdated = DateTime.UtcNow
        };
    }
}`,
      architectureDescription: "Cloud-native microservices architecture with distributed data management, event sourcing, and comprehensive audit logging for regulatory compliance.",
      techStack: {
        frontend: ["Angular", "TypeScript", "Angular Material", "RxJS"],
        backend: ["ASP.NET Core", "Entity Framework Core", "SignalR", "MediatR"],
        database: ["SQL Server", "Azure SQL", "Redis Cache"]
      },
      challengeDetails: [
        {
          challenge: "Zero-Downtime Migration",
          description: "Migrate critical banking infrastructure without service interruption",
          solution: "Implemented blue-green deployment strategy with real-time data synchronization and gradual traffic migration"
        },
        {
          challenge: "15M+ Customer Data Migration",
          description: "Ensure 100% data integrity while migrating massive customer database",
          solution: "Developed comprehensive ETL pipelines with validation checkpoints and automated rollback mechanisms"
        }
      ],
      businessOutcomes: [
        "Improved customer transaction processing by 500%",
        "Reduced operational costs by 35%",
        "Enhanced regulatory compliance reporting by 80%",
        "Enabled real-time banking services for 15M+ customers"
      ]
    },
    {
      id: 3,
      title: "KCB Mobile Banking Application",
      description: "Revolutionary mobile banking app for Kenya Commercial Bank with biometric authentication, real-time notifications, and investment portfolio management.",
      fullDescription: `Developed Kenya Commercial Bank's next-generation mobile banking application serving 3+ million active users. The app features cutting-edge biometric authentication, real-time push notifications, budget tracking, and comprehensive investment portfolio management.\n\nAchieved 250% increase in mobile banking adoption, 4.8/5 App Store rating, and zero security incidents since launch. The application processes over 100,000 daily transactions with 1.2-second average load time and seamless offline-to-online synchronization.`,
      image: "https://images.unsplash.com/photo-1694532409273-b26e2ce266ea",
      imageAlt: "Modern smartphone displaying KCB mobile banking app interface with transaction history and account management",
      technologies: ["React Native", "C#", ".NET Core", "Firebase", "Biometric APIs", "Push Notifications"],
      industry: "banking",
      complexity: "complex",
      status: "completed",
      duration: "6 months",
      teamSize: "10 developers",
      rating: 4.8,
      githubUrl: "https://github.com/josephjustus/kcb-mobile-banking",
      liveUrl: "https://play.google.com/store/apps/details?id=com.kcbgroup.mobile",
      keyFeatures: [
        "Biometric authentication (fingerprint & facial recognition)",
        "Real-time transaction notifications",
        "Budget tracking and financial planning",
        "Investment portfolio management",
        "Offline transaction queuing",
        "Multi-language support (English, Swahili)"
      ],
      challengesSolved: "Created intuitive mobile banking experience while implementing bank-grade security, resulting in 250% increase in mobile banking adoption and maintaining zero security breaches.",
      metrics: [
        { value: "3M+", label: "Active Users" },
        { value: "250%", label: "Adoption Increase" },
        { value: "4.8/5", label: "App Store Rating" },
        { value: "1.2s", label: "Load Time" }
      ],
      gallery: [
        {
          url: "https://images.unsplash.com/photo-1669643470668-19d6fb1d3f21",
          alt: "KCB mobile banking app dashboard showing account balance and recent transactions",
          caption: "Mobile banking dashboard with real-time account information"
        },
        {
          url: "https://images.unsplash.com/photo-1701777508358-833de8c614ec",
          alt: "Investment portfolio management interface within the mobile banking app",
          caption: "Investment portfolio management and financial planning tools"
        }
      ],
      technicalDetails: "Built with React Native for cross-platform compatibility, integrated with .NET Core backend services, and Firebase for real-time notifications and analytics.",
      codeSnippet: `// Biometric Authentication Service
class BiometricAuthService {
    constructor() {
        this.biometricSupport = null;
        this.secureStorage = new SecureStorage();
    }
    
    async authenticateUser() {
        try {
            const biometricResult = await TouchID.authenticate(
                'Authenticate to access your account',
                {
                    fallbackLabel: 'Use Passcode',
                    unifiedErrors: false,
                    passcodeFallback: true
                }
            );
            
            if (biometricResult) {
                const userToken = await this.secureStorage.getItem('userToken');
                return { success: true, token: userToken };
            }
        } catch (error) {
            return { success: false, error: error.message };
        }
    }
}`,
      architectureDescription: "Hybrid mobile architecture with React Native frontend, .NET Core API gateway, and Firebase integration for real-time features and analytics.",
      techStack: {
        frontend: ["React Native", "TypeScript", "Redux Toolkit", "React Navigation"],
        backend: [".NET Core API", "Entity Framework", "SignalR", "Azure Functions"],
        database: ["SQL Server", "Firebase Firestore", "Secure Storage"]
      },
      challengeDetails: [
        {
          challenge: "Bank-Grade Security on Mobile",
          description: "Implement enterprise banking security standards on mobile devices",
          solution: "Integrated biometric authentication with encrypted local storage and certificate pinning"
        },
        {
          challenge: "Offline Transaction Support",
          description: "Enable banking operations without internet connectivity",
          solution: "Implemented offline transaction queuing with automatic synchronization and conflict resolution"
        }
      ],
      businessOutcomes: [
        "Increased mobile banking adoption by 250%",
        "Achieved 4.8/5 customer satisfaction rating",
        "Reduced branch visits by 40%",
        "Generated $2M+ in mobile transaction revenue monthly"
      ]
    },
    {
      id: 4,
      title: "Co-operative Bank Digital Lending Platform",
      description: "End-to-end digital lending platform with ML-powered risk assessment, automated documentation, and real-time credit scoring for loan processing.",
      fullDescription: `Built Co-operative Bank's revolutionary digital lending platform that transformed loan processing from weeks to minutes. The system features machine learning-powered risk assessment, automated document processing, real-time credit scoring, and comprehensive regulatory reporting.\n\nAchieved 180% loan portfolio growth, reduced default rates by 30%, and maintained 96% customer satisfaction. The platform processes over 1,000 loan applications daily with automated decision-making for 85% of applications and seamless integration with Central Bank of Kenya's credit reference bureaus.`,
      image: "https://images.unsplash.com/photo-1683792684734-49b6c8ca20d8",
      imageAlt: "Digital lending platform interface showing loan application process and risk assessment dashboard",
      technologies: ["C#", ".NET Core", "Machine Learning", "SQL Server", "React", "Azure ML", "Power BI"],
      industry: "fintech",
      complexity: "enterprise",
      status: "completed",
      duration: "10 months",
      teamSize: "14 developers",
      rating: 4.9,
      githubUrl: "https://github.com/josephjustus/coop-digital-lending",
      liveUrl: "https://www.co-opbank.co.ke/personal/loans",
      keyFeatures: [
        "ML-powered risk assessment (95% accuracy)",
        "Automated document processing (OCR & validation)",
        "Real-time credit scoring integration",
        "5-minute loan approval process",
        "Regulatory compliance automation",
        "Mobile-first loan application experience"
      ],
      challengesSolved: "Transformed traditional loan processing from weeks to minutes while maintaining strict risk management and regulatory compliance, resulting in 180% portfolio growth.",
      metrics: [
        { value: "180%", label: "Portfolio Growth" },
        { value: "5 mins", label: "Approval Time" },
        { value: "30%", label: "Default Reduction" },
        { value: "96%", label: "Customer Satisfaction" }
      ],
      gallery: [
        {
          url: "https://images.unsplash.com/photo-1557053198-a8c0fa8b6c12",
          alt: "Digital lending dashboard showing loan applications and risk assessment analytics",
          caption: "ML-powered risk assessment and loan processing dashboard"
        },
        {
          url: "https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b",
          alt: "Automated document processing interface with OCR technology for loan applications",
          caption: "Automated document processing with OCR and validation"
        }
      ],
      technicalDetails: "Enterprise ML platform using .NET Core with Azure Machine Learning for risk assessment, React frontend for loan applications, and Power BI for comprehensive analytics and regulatory reporting.",
      codeSnippet: `// ML-Powered Risk Assessment Engine
public class LoanRiskAssessment : IRiskAssessmentService
{
    private readonly IMachineLearningModel _mlModel;
    private readonly ICreditBureauService _creditBureau;
    private readonly IDocumentProcessor _documentProcessor;
    
    public async Task<RiskAssessmentResult> AssessApplicationAsync(LoanApplication application)
    {
        // Process and validate documents
        var documentAnalysis = await _documentProcessor.ProcessAsync(application.Documents);
        
        // Get credit bureau data
        var creditScore = await _creditBureau.GetCreditScoreAsync(application.ApplicantId);
        
        // ML risk prediction
        var riskFeatures = new RiskFeatures
        {
            CreditScore = creditScore.Score,
            IncomeStability = documentAnalysis.IncomeStability,
            DebtToIncomeRatio = application.CalculateDebtToIncomeRatio()
        };
        
        var riskPrediction = await _mlModel.PredictAsync(riskFeatures);
        
        return new RiskAssessmentResult
        {
            RiskScore = riskPrediction.ProbabilityScore,
            Recommendation = riskPrediction.Score > 0.7 ? "Approve" : "Review",
            ConfidenceLevel = riskPrediction.Confidence
        };
    }
}`,
      architectureDescription: "ML-powered microservices architecture with automated decision engines, document processing pipelines, and real-time integration with external credit services.",
      techStack: {
        frontend: ["React", "TypeScript", "Material-UI", "Chart.js"],
        backend: [".NET Core", "Azure ML", "Entity Framework", "SignalR"],
        database: ["SQL Server", "Azure Cosmos DB", "Redis"]
      },
      challengeDetails: [
        {
          challenge: "Real-time Risk Assessment",
          description: "Process loan applications with accurate risk assessment in under 5 minutes",
          solution: "Implemented ML pipeline with pre-trained models and real-time feature engineering"
        },
        {
          challenge: "Regulatory Compliance Automation",
          description: "Ensure all loan decisions meet Central Bank of Kenya regulations",
          solution: "Built automated compliance engine with rule-based validation and audit trails"
        }
      ],
      businessOutcomes: [
        "Increased loan portfolio by 180%",
        "Reduced loan processing time from weeks to 5 minutes",
        "Decreased default rates by 30% through better risk assessment",
        "Improved customer satisfaction to 96%"
      ]
    },
    {
      id: 5,
      title: "Family Bank Payment Gateway Solution",
      description: "Comprehensive payment gateway with support for multiple payment methods, real-time fraud detection, and seamless API integration for e-commerce platforms.",
      fullDescription: `Implemented Family Bank's multi-channel payment gateway solution supporting card payments, mobile money, and digital wallets. The system features advanced fraud detection, merchant management dashboard, and comprehensive API integration for e-commerce platforms.\n\nAchieved 98.5% transaction success rate, 99.2% fraud detection accuracy, and 150% merchant growth. The platform processes over $5M monthly transaction volume with real-time settlement and automated reconciliation for 500+ merchant partners.`,
      image: "https://images.unsplash.com/photo-1676275773814-ad0819d45436",
      imageAlt: "Payment gateway interface showing multi-channel payment processing dashboard with transaction analytics",
      technologies: ["C#", "ASP.NET Core", "React", "PostgreSQL", "Redis", "Stripe API", "M-Pesa API"],
      industry: "payments",
      complexity: "complex",
      status: "completed",
      duration: "7 months",
      teamSize: "8 developers",
      rating: 4.8,
      githubUrl: "https://github.com/josephjustus/family-bank-payment-gateway",
      liveUrl: "https://familybank.co.ke/corporate/payment-solutions",
      keyFeatures: [
        "Multi-channel payment support (cards, mobile money, wallets)",
        "Real-time fraud detection (99.2% accuracy)",
        "Merchant management dashboard",
        "API integration for e-commerce platforms",
        "Automated settlement and reconciliation",
        "PCI DSS Level 1 compliance"
      ],
      challengesSolved: "Built unified payment gateway supporting diverse payment methods while maintaining 98.5% success rate and industry-leading fraud detection accuracy.",
      metrics: [
        { value: "98.5%", label: "Success Rate" },
        { value: "99.2%", label: "Fraud Detection" },
        { value: "500+", label: "Merchant Partners" },
        { value: "$5M+", label: "Monthly Volume" }
      ],
      gallery: [
        {
          url: "https://images.unsplash.com/photo-1660732421009-469aba1c2e81",
          alt: "Payment gateway dashboard showing transaction processing and fraud detection analytics",
          caption: "Real-time payment processing and fraud detection dashboard"
        },
        {
          url: "https://images.unsplash.com/photo-1590333276760-a15c25a60504",
          alt: "Merchant management interface displaying payment analytics and settlement reports",
          caption: "Merchant management and analytics dashboard"
        }
      ],
      technicalDetails: "Built with ASP.NET Core microservices architecture, React frontend for merchant dashboard, PostgreSQL for transaction data, and Redis for real-time caching and session management.",
      codeSnippet: `// Multi-Channel Payment Processor
public class PaymentGatewayService : IPaymentGatewayService
{
    private readonly IPaymentProviderFactory _providerFactory;
    private readonly IFraudDetectionEngine _fraudDetection;
    private readonly IMerchantService _merchantService;
    
    public async Task<PaymentResult> ProcessPaymentAsync(PaymentRequest request)
    {
        // Validate merchant
        var merchant = await _merchantService.ValidateAsync(request.MerchantId);
        if (!merchant.IsValid)
            return PaymentResult.Failed("Invalid merchant");
            
        // Fraud detection
        var fraudAnalysis = await _fraudDetection.AnalyzeAsync(request);
        if (fraudAnalysis.IsHighRisk)
            return PaymentResult.Declined("Transaction blocked - fraud detected");
            
        // Process with appropriate provider
        var provider = _providerFactory.GetProvider(request.PaymentMethod);
        var result = await provider.ProcessAsync(request);
        
        // Real-time settlement
        if (result.IsSuccessful)
            await _merchantService.ProcessSettlementAsync(merchant.Id, result.Amount);
            
        return result;
    }
}`,
      architectureDescription: "Microservices architecture with payment provider abstraction, real-time fraud detection, and automated settlement processing for multi-channel payments.",
      techStack: {
        frontend: ["React", "TypeScript", "Material-UI", "Redux Toolkit"],
        backend: ["ASP.NET Core", "Entity Framework", "MediatR", "Hangfire"],
        database: ["PostgreSQL", "Redis", "MongoDB"]
      },
      challengeDetails: [
        {
          challenge: "Multi-Provider Integration",
          description: "Integrate with multiple payment providers while maintaining consistent API",
          solution: "Implemented provider abstraction layer with standardized request/response formats"
        },
        {
          challenge: "Real-time Fraud Detection",
          description: "Detect fraudulent transactions without impacting legitimate payment flow",
          solution: "Built ML-based fraud detection engine with real-time scoring and adaptive thresholds"
        }
      ],
      businessOutcomes: [
        "Increased merchant partner base by 150%",
        "Achieved 98.5% transaction success rate",
        "Generated $5M+ monthly payment processing volume",
        "Reduced fraud losses by 85% through advanced detection"
      ]
    },
    {
      id: 6,
      title: "Central Bank Regulatory Compliance System",
      description: "Automated regulatory reporting and compliance monitoring system for Central Bank of Kenya with real-time data validation and audit trails.",
      fullDescription: `Developed Central Bank of Kenya's automated regulatory compliance system for monitoring and reporting across all licensed financial institutions. The system features real-time data validation, automated report generation, and comprehensive audit trails for regulatory oversight.\n\nProcesses regulatory data from 50+ financial institutions, generates 200+ automated reports monthly, and maintains 100% compliance accuracy. The platform enables real-time monitoring of systemic risks and automated early warning systems for financial stability.`,
      image: "https://images.unsplash.com/photo-1589578228447-e1a4e481c6c8",
      imageAlt: "Central bank regulatory dashboard showing financial institution monitoring and compliance reporting interfaces",
      technologies: ["C#", ".NET Core", "Angular", "SQL Server", "Power BI", "Azure", "Entity Framework"],
      industry: "regulatory",
      complexity: "enterprise",
      status: "completed",
      duration: "18 months",
      teamSize: "20 developers",
      rating: 4.9,
      githubUrl: "https://github.com/josephjustus/cbk-regulatory-system",
      keyFeatures: [
        "Real-time data validation from 50+ institutions",
        "Automated regulatory report generation",
        "Comprehensive audit trails and compliance monitoring",
        "Early warning systems for financial stability",
        "Risk assessment and systemic monitoring",
        "Secure data integration with banking systems"
      ],
      challengesSolved: "Built scalable regulatory compliance system processing data from Kenya's entire banking sector while maintaining 100% accuracy and enabling real-time financial stability monitoring.",
      metrics: [
        { value: "50+", label: "Institutions Monitored" },
        { value: "200+", label: "Monthly Reports" },
        { value: "100%", label: "Compliance Accuracy" },
        { value: "24/7", label: "Real-time Monitoring" }
      ],
      gallery: [
        {
          url: "https://images.unsplash.com/photo-1557053198-a8c0fa8b6c12",
          alt: "Regulatory compliance dashboard showing banking sector monitoring and risk assessment metrics",
          caption: "Real-time financial sector monitoring and compliance dashboard"
        },
        {
          url: "https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b",
          alt: "Automated regulatory reporting interface with data validation and audit trail features",
          caption: "Automated regulatory reporting with comprehensive audit trails"
        }
      ],
      technicalDetails: "Enterprise-grade system using .NET Core with Angular frontend, SQL Server for regulatory data storage, and Power BI for advanced analytics and reporting to regulatory authorities.",
      codeSnippet: `// Regulatory Compliance Validator
public class RegulatoryComplianceValidator : IComplianceValidator
{
    private readonly IRegulatoryRuleEngine _ruleEngine;
    private readonly IAuditLogger _auditLogger;
    private readonly IEarlyWarningSystem _earlyWarning;
    
    public async Task<ComplianceResult> ValidateInstitutionDataAsync(InstitutionData data)
    {
        var validationResults = new List<ValidationResult>();
        
        // Apply regulatory rules
        var ruleResults = await _ruleEngine.ApplyRulesAsync(data);
        validationResults.AddRange(ruleResults);
        
        // Check for early warning indicators
        var riskIndicators = await _earlyWarning.AssessRiskAsync(data);
        
        // Log for audit trail
        await _auditLogger.LogComplianceCheckAsync(data.InstitutionId, validationResults);
        
        return new ComplianceResult
        {
            IsCompliant = validationResults.All(r => r.IsValid),
            ValidationResults = validationResults,
            RiskLevel = riskIndicators.OverallRisk,
            RequiresAction = riskIndicators.RequiresRegulatorAction
        };
    }
}`,
      architectureDescription: "Secure enterprise architecture with multi-tenant data isolation, comprehensive audit logging, and real-time integration with banking institution systems.",
      techStack: {
        frontend: ["Angular", "TypeScript", "Angular Material", "Chart.js"],
        backend: [".NET Core", "Entity Framework", "SignalR", "Azure Functions"],
        database: ["SQL Server", "Azure SQL", "Power BI"]
      },
      challengeDetails: [
        {
          challenge: "Multi-Institution Data Integration",
          description: "Securely integrate regulatory data from 50+ diverse banking systems",
          solution: "Built standardized API gateway with institution-specific adapters and data transformation pipelines"
        },
        {
          challenge: "Real-time Regulatory Monitoring",
          description: "Monitor systemic risks across entire banking sector in real-time",
          solution: "Implemented event-driven architecture with complex event processing for risk detection"
        }
      ],
      businessOutcomes: [
        "Automated 95% of regulatory reporting processes",
        "Reduced compliance monitoring time by 80%",
        "Enhanced financial stability monitoring capabilities",
        "Improved regulatory response time to systemic risks by 70%"
      ]
    }
  ];

  // Filter and sort projects
  const filteredProjects = useMemo(() => {
    let filtered = josephProjects.filter((project) => {
      // Search filter
      if (filters.search) {
        const searchTerm = filters.search.toLowerCase();
        const matchesSearch =
          project.title.toLowerCase().includes(searchTerm) ||
          project.description.toLowerCase().includes(searchTerm) ||
          project.technologies.some((tech) => tech.toLowerCase().includes(searchTerm));
        if (!matchesSearch) return false;
      }

      // Technology filter
      if (filters.technology && filters.technology !== 'all') {
        const hasMatchingTech = project.technologies.some((tech) =>
          tech.toLowerCase().includes(filters.technology.toLowerCase())
        );
        if (!hasMatchingTech) return false;
      }

      // Industry filter
      if (filters.industry && filters.industry !== 'all') {
        if (project.industry !== filters.industry) return false;
      }

      // Complexity filter
      if (filters.complexity && filters.complexity !== 'all') {
        if (project.complexity !== filters.complexity) return false;
      }

      // Status filter
      if (filters.status && filters.status !== 'all') {
        if (project.status !== filters.status) return false;
      }

      // Team size filter
      if (filters.minTeamSize || filters.maxTeamSize) {
        const teamSizeNum = parseInt(project.teamSize.split(' ')[0]);
        if (filters.minTeamSize && teamSizeNum < parseInt(filters.minTeamSize)) return false;
        if (filters.maxTeamSize && teamSizeNum > parseInt(filters.maxTeamSize)) return false;
      }

      // Duration filter
      if (filters.minDuration || filters.maxDuration) {
        const durationNum = parseInt(project.duration.split(' ')[0]);
        if (filters.minDuration && durationNum < parseInt(filters.minDuration)) return false;
        if (filters.maxDuration && durationNum > parseInt(filters.maxDuration)) return false;
      }

      // Rating filter
      if (filters.rating && filters.rating !== 'all') {
        if (filters.rating === '5' && project.rating < 5) return false;
        if (filters.rating === '4+' && project.rating < 4) return false;
        if (filters.rating === '3+' && project.rating < 3) return false;
      }

      return true;
    });

    // Sort projects
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'duration':
          return parseInt(b.duration) - parseInt(a.duration);
        case 'title':
          return a.title.localeCompare(b.title);
        case 'recent':
          return b.id - a.id; // Most recent projects first
        default:
          return 0;
      }
    });

    return filtered;
  }, [josephProjects, filters, sortBy]);

  const handleFiltersChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleClearFilters = () => {
    setFilters({
      search: '',
      technology: 'all',
      industry: 'all',
      complexity: 'all',
      status: 'all',
      minTeamSize: '',
      maxTeamSize: '',
      minDuration: '',
      maxDuration: '',
      rating: 'all'
    });
  };

  const handleCompareProject = (projectId) => {
    setSelectedProjects((prev) => {
      if (prev.includes(projectId)) {
        return prev.filter((id) => id !== projectId);
      } else if (prev.length < 3) {
        return [...prev, projectId];
      }
      return prev;
    });
  };

  const handleToggleCompareMode = () => {
    setIsCompareMode(!isCompareMode);
    if (!isCompareMode) {
      setSelectedProjects([]);
    }
  };

  const handleViewDetails = (project) => {
    setSelectedProject(project);
  };

  const handleRemoveFromComparison = (projectId) => {
    setSelectedProjects((prev) => prev.filter((id) => id !== projectId));
  };

  const compareProjects = selectedProjects.map((id) =>
    josephProjects.find((project) => project.id === id)
  ).filter(Boolean);

  return (
    <div className="min-h-screen bg-slate-900">
      <Helmet>
        <title>Projects Portfolio - Joseph K Justus | FinTech & Banking Solutions</title>
        <meta name="description" content="Explore Joseph K Justus's comprehensive project portfolio featuring real FinTech solutions for Kenya's leading banks. From M-Pesa enhancements to core banking modernization." />
        <meta name="keywords" content="Joseph K Justus projects, FinTech portfolio, M-Pesa integration, core banking systems, payment gateways, digital lending, Kenya banking solutions" />
      </Helmet>

      <main className="pt-0">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600 text-white py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-2 h-2 bg-white rounded-full animate-pulse"></div>
            <div className="absolute top-20 right-20 w-1 h-1 bg-white rounded-full animate-pulse delay-100"></div>
            <div className="absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-white rounded-full animate-pulse delay-200"></div>
            <div className="absolute bottom-10 right-1/3 w-1 h-1 bg-white rounded-full animate-pulse delay-300"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center">

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Project <span className="text-cyan-300">Universe</span>
              </h1>
              <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto mb-8 leading-relaxed">
                Explore comprehensive case studies from Joseph K Justus's 7+ years of FinTech expertise. 
                Real projects powering Kenya's banking infrastructure and serving millions of users daily.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <FolderOpen size={20} />
                  <span>{filteredProjects.length} Projects</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <Code size={20} />
                  <span>15+ Technologies</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <Building size={20} />
                  <span>6 Industries</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <Users size={20} />
                  <span>50M+ Users Served</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ProjectFilters
              filters={filters}
              onFiltersChange={handleFiltersChange}
              onClearFilters={handleClearFilters}
              projectCount={filteredProjects.length}
              isCompareMode={isCompareMode}
              onToggleCompareMode={handleToggleCompareMode}
              compareCount={selectedProjects.length}
            />
          </div>
        </section>

        {/* Projects Grid */}
        <section className="pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Sort and View Controls */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <h2 className="text-2xl font-semibold text-white">
                  {filteredProjects.length} Project{filteredProjects.length !== 1 ? 's' : ''} Found
                </h2>
                
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-2 border border-slate-600 rounded-lg bg-slate-800 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option value="rating">Sort by Rating</option>
                  <option value="duration">Sort by Duration</option>
                  <option value="title">Sort by Title</option>
                  <option value="recent">Sort by Recent</option>
                </select>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'grid' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-slate-800 text-slate-400 hover:text-white'
                  }`}>
                  <Grid3X3 size={20} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'list' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-slate-800 text-slate-400 hover:text-white'
                  }`}>
                  <List size={20} />
                </button>
              </div>
            </div>

            {/* Projects Grid */}
            {filteredProjects.length > 0 ? (
              <motion.div
                className={`grid gap-8 ${
                  viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'
                }`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}>

                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}>

                    <ProjectCard
                      project={project}
                      onViewDetails={handleViewDetails}
                      isSelected={selectedProjects.includes(project.id)}
                      onCompare={handleCompareProject}
                    />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16">

                <Search size={64} className="text-slate-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No Projects Found</h3>
                <p className="text-slate-400 mb-6">
                  Try adjusting your filters or search terms to find relevant projects.
                </p>
                <button
                  onClick={handleClearFilters}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">
                  Clear All Filters
                </button>
              </motion.div>
            )}
          </div>
        </section>

        {/* Comparison Modal */}
        {isCompareMode && selectedProjects.length > 0 && (
          <ProjectComparison
            projects={compareProjects}
            onClose={() => setIsCompareMode(false)}
            onRemoveProject={handleRemoveFromComparison}
          />
        )}

        {/* Project Detail Modal */}
        {selectedProject && (
          <ProjectDetailModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12 border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <Code size={20} color="white" />
              </div>
              <span className="text-xl font-bold text-white">Joseph K</span>
              <span className="text-xl font-bold text-blue-400">Justus</span>
            </div>
            <p className="text-slate-400 mb-4">
              Building Kenya's FinTech infrastructure. Powering banking solutions for 50+ million users.
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

export default Projects;