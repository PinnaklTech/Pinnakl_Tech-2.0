export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  category: string;
  year: string;
  client: string;
  duration: string;
  budget: string;
  technologies: string[];
  results: string[];
  color: string;
  featured: boolean;
  
  // Detailed page content
  overview: string;
  challenge: string;
  solution: string;
  implementation: string[];
  outcomes: {
    title: string;
    value: string;
    description: string;
  }[];
  testimonial?: {
    quote: string;
    author: string;
    position: string;
    company: string;
  };
  gallery: string[];
  relatedProjects: string[];
}

export const projects: Project[] = [
  {
    id: "advanced-manufacturing-solutions",
    title: "Advanced Manufacturing Solutions",
    subtitle: "Smart Factory Implementation",
    description: "Comprehensive ERP implementation for a leading manufacturing company, streamlining operations and increasing efficiency by 40%.",
    image: "/Manufacturing.jpg",
    category: "Manufacturing",
    year: "2024",
    client: "Industrial Corp",
    duration: "8 months",
    budget: "$2.5M",
    technologies: ["ERP", "IoT", "Analytics", "Automation"],
    results: ["40% efficiency increase", "30% cost reduction", "Real-time monitoring", "Predictive maintenance"],
    color: "blue",
    featured: true,
    
    overview: "Industrial Corp approached us with a critical need to modernize their manufacturing operations. Their legacy systems were causing bottlenecks, inefficiencies, and lack of real-time visibility across their production lines. We implemented a comprehensive smart factory solution that transformed their operations.",
    
    challenge: "The client faced multiple challenges including disconnected legacy systems, manual data collection processes, lack of real-time production visibility, high operational costs, and difficulty in meeting increasing customer demands. Their existing infrastructure couldn't scale with their growth ambitions.",
    
    solution: "We designed and implemented a comprehensive smart factory solution featuring integrated ERP systems, IoT sensor networks for real-time monitoring, advanced analytics for predictive maintenance, automated workflow systems, and a centralized dashboard for complete operational visibility.",
    
    implementation: [
      "Phase 1: Legacy system assessment and integration planning",
      "Phase 2: IoT sensor deployment across production lines",
      "Phase 3: ERP system implementation and data migration",
      "Phase 4: Analytics platform setup and dashboard creation",
      "Phase 5: Staff training and system optimization"
    ],
    
    outcomes: [
      {
        title: "Efficiency Increase",
        value: "40%",
        description: "Overall production efficiency improvement through optimized workflows"
      },
      {
        title: "Cost Reduction",
        value: "30%",
        description: "Operational cost savings through automation and waste reduction"
      },
      {
        title: "Downtime Reduction",
        value: "60%",
        description: "Unplanned downtime eliminated through predictive maintenance"
      },
      {
        title: "Quality Improvement",
        value: "25%",
        description: "Product quality enhancement through real-time monitoring"
      }
    ],
    
    testimonial: {
      quote: "Pinnakl Technologies transformed our manufacturing operations beyond our expectations. The smart factory implementation has given us unprecedented visibility and control over our production processes.",
      author: "Sarah Johnson",
      position: "VP of Operations",
      company: "Industrial Corp"
    },
    
    gallery: ["/Manufacturing.jpg", "/Product_development.jpg", "/ERP.jpg"],
    relatedProjects: ["supply-chain-optimization", "metallurgy-process-control"]
  },
  
  {
    id: "supply-chain-optimization",
    title: "Supply Chain Optimization",
    subtitle: "End-to-end logistics transformation",
    description: "AI-powered supply chain management system with real-time tracking and predictive analytics for global operations.",
    image: "/supply-chain.jpg",
    category: "Logistics",
    year: "2023",
    client: "Global Logistics Ltd",
    duration: "12 months",
    budget: "$3.2M",
    technologies: ["AI/ML", "Blockchain", "Cloud", "Analytics"],
    results: ["25% faster delivery", "15% cost savings", "99.9% accuracy", "Global visibility"],
    color: "emerald",
    featured: true,
    
    overview: "Global Logistics Ltd needed to revolutionize their supply chain operations to meet growing customer demands and improve efficiency. We implemented an AI-powered supply chain optimization system that provided end-to-end visibility and intelligent automation.",
    
    challenge: "The client struggled with fragmented supply chain visibility, manual planning processes, unpredictable delivery times, high logistics costs, and difficulty in managing global operations across multiple time zones and regulatory environments.",
    
    solution: "We developed a comprehensive AI-powered supply chain platform featuring machine learning algorithms for demand forecasting, blockchain technology for transparency, real-time tracking systems, automated route optimization, and predictive analytics for proactive decision making.",
    
    implementation: [
      "Phase 1: Supply chain mapping and data integration",
      "Phase 2: AI/ML model development and training",
      "Phase 3: Blockchain network setup for transparency",
      "Phase 4: Real-time tracking system deployment",
      "Phase 5: Analytics dashboard and reporting tools"
    ],
    
    outcomes: [
      {
        title: "Delivery Speed",
        value: "25%",
        description: "Faster delivery times through optimized routing and planning"
      },
      {
        title: "Cost Savings",
        value: "15%",
        description: "Reduced logistics costs through efficiency improvements"
      },
      {
        title: "Accuracy Rate",
        value: "99.9%",
        description: "Delivery accuracy improvement through better tracking"
      },
      {
        title: "Visibility",
        value: "100%",
        description: "Complete end-to-end supply chain visibility"
      }
    ],
    
    testimonial: {
      quote: "The AI-powered supply chain solution has revolutionized our operations. We now have complete visibility and control over our global logistics network.",
      author: "Michael Chen",
      position: "Chief Supply Chain Officer",
      company: "Global Logistics Ltd"
    },
    
    gallery: ["/supply-chain.jpg", "/Manufacturing.jpg", "/ERP.jpg"],
    relatedProjects: ["advanced-manufacturing-solutions", "erp-integration-suite"]
  },
  
  {
    id: "metallurgy-process-control",
    title: "Metallurgy Process Control",
    subtitle: "Automated quality assurance",
    description: "Advanced sensor-based quality control system for metallurgical processes with machine learning integration.",
    image: "/Metallurgy.jpg",
    category: "Metallurgy",
    year: "2023",
    client: "Steel Industries Inc",
    duration: "6 months",
    budget: "$1.8M",
    technologies: ["Sensors", "Automation", "ML", "Quality Control"],
    results: ["50% defect reduction", "20% productivity gain", "Automated reporting", "Zero downtime"],
    color: "purple",
    featured: true,
    
    overview: "Steel Industries Inc required a sophisticated quality control system to maintain consistent product quality while increasing production efficiency. We implemented an advanced metallurgy process control system with real-time monitoring and automated quality assurance.",
    
    challenge: "The client faced inconsistent product quality, manual inspection processes, high defect rates, production bottlenecks, and difficulty in maintaining quality standards across different production shifts and conditions.",
    
    solution: "We designed an integrated process control system featuring advanced sensor networks for real-time monitoring, machine learning algorithms for quality prediction, automated inspection systems, predictive analytics for process optimization, and comprehensive reporting dashboards.",
    
    implementation: [
      "Phase 1: Process analysis and sensor placement planning",
      "Phase 2: Sensor network installation and calibration",
      "Phase 3: Machine learning model development",
      "Phase 4: Automation system integration",
      "Phase 5: Quality control dashboard and reporting setup"
    ],
    
    outcomes: [
      {
        title: "Defect Reduction",
        value: "50%",
        description: "Significant reduction in product defects through real-time monitoring"
      },
      {
        title: "Productivity Gain",
        value: "20%",
        description: "Increased production efficiency through process optimization"
      },
      {
        title: "Quality Consistency",
        value: "95%",
        description: "Consistent quality standards maintained across all shifts"
      },
      {
        title: "Cost Savings",
        value: "$500K",
        description: "Annual savings from reduced waste and rework"
      }
    ],
    
    testimonial: {
      quote: "The metallurgy process control system has transformed our quality assurance. We now have unprecedented control over our production quality.",
      author: "David Rodriguez",
      position: "Plant Manager",
      company: "Steel Industries Inc"
    },
    
    gallery: ["/Metallurgy.jpg", "/Manufacturing.jpg", "/specifications.jpg"],
    relatedProjects: ["advanced-manufacturing-solutions", "power-transmission-systems"]
  },
  
  {
    id: "power-transmission-systems",
    title: "Power Transmission Systems",
    subtitle: "Smart grid modernization",
    description: "Next-generation smart grid management solution with predictive maintenance and energy optimization capabilities.",
    image: "/PowerTransmission.webp",
    category: "Energy",
    year: "2024",
    client: "Power Grid Solutions",
    duration: "10 months",
    budget: "$4.1M",
    technologies: ["Smart Grid", "Predictive Analytics", "IoT", "Energy Management"],
    results: ["30% energy savings", "Reduced downtime", "Predictive maintenance", "Grid stability"],
    color: "amber",
    featured: true,
    
    overview: "Power Grid Solutions needed to modernize their aging power transmission infrastructure to improve efficiency, reliability, and sustainability. We implemented a comprehensive smart grid solution that revolutionized their energy management capabilities.",
    
    challenge: "The client's aging infrastructure suffered from frequent outages, inefficient energy distribution, high maintenance costs, lack of real-time monitoring, and difficulty in integrating renewable energy sources into their grid system.",
    
    solution: "We developed a next-generation smart grid platform featuring IoT sensors for real-time monitoring, predictive analytics for maintenance planning, automated load balancing systems, renewable energy integration capabilities, and advanced grid management software.",
    
    implementation: [
      "Phase 1: Infrastructure assessment and modernization planning",
      "Phase 2: Smart sensor deployment across transmission lines",
      "Phase 3: Predictive analytics platform development",
      "Phase 4: Grid management system integration",
      "Phase 5: Renewable energy integration and testing"
    ],
    
    outcomes: [
      {
        title: "Energy Savings",
        value: "30%",
        description: "Reduced energy losses through optimized transmission"
      },
      {
        title: "Downtime Reduction",
        value: "70%",
        description: "Minimized outages through predictive maintenance"
      },
      {
        title: "Grid Stability",
        value: "99.8%",
        description: "Improved grid reliability and stability"
      },
      {
        title: "Renewable Integration",
        value: "40%",
        description: "Increased renewable energy capacity integration"
      }
    ],
    
    testimonial: {
      quote: "The smart grid solution has transformed our power transmission capabilities. We now have a modern, efficient, and sustainable energy infrastructure.",
      author: "Jennifer Liu",
      position: "Chief Technology Officer",
      company: "Power Grid Solutions"
    },
    
    gallery: ["/PowerTransmission.webp", "/Manufacturing.jpg", "/ERP.jpg"],
    relatedProjects: ["advanced-manufacturing-solutions", "product-development-platform"]
  },
  
  {
    id: "product-development-platform",
    title: "Product Development Platform",
    subtitle: "Innovation acceleration framework",
    description: "Comprehensive product development platform with integrated design tools, testing protocols, and compliance management.",
    image: "/Product_development.jpg",
    category: "Product Development",
    year: "2024",
    client: "Innovation Labs",
    duration: "14 months",
    budget: "$2.9M",
    technologies: ["CAD Integration", "Testing Automation", "Compliance", "Collaboration"],
    results: ["60% faster development", "Reduced time-to-market", "Automated testing", "Regulatory compliance"],
    color: "indigo",
    featured: true,
    
    overview: "Innovation Labs required a comprehensive platform to accelerate their product development processes while ensuring compliance and quality. We created an integrated development environment that streamlined their entire innovation pipeline.",
    
    challenge: "The client faced lengthy development cycles, disconnected design tools, manual testing processes, compliance bottlenecks, and difficulty in managing complex product portfolios across multiple teams and locations.",
    
    solution: "We built a comprehensive product development platform featuring integrated CAD tools, automated testing protocols, compliance management systems, collaborative workspaces, and project management capabilities all unified in a single platform.",
    
    implementation: [
      "Phase 1: Requirements analysis and platform architecture design",
      "Phase 2: CAD integration and design tool setup",
      "Phase 3: Testing automation and compliance modules",
      "Phase 4: Collaboration and project management features",
      "Phase 5: Training and platform optimization"
    ],
    
    outcomes: [
      {
        title: "Development Speed",
        value: "60%",
        description: "Faster product development cycles through automation"
      },
      {
        title: "Time-to-Market",
        value: "45%",
        description: "Reduced time from concept to market launch"
      },
      {
        title: "Testing Efficiency",
        value: "80%",
        description: "Automated testing processes reducing manual effort"
      },
      {
        title: "Compliance Rate",
        value: "100%",
        description: "Automated compliance checking and documentation"
      }
    ],
    
    testimonial: {
      quote: "The product development platform has revolutionized our innovation process. We can now bring products to market faster while maintaining the highest quality standards.",
      author: "Robert Kim",
      position: "VP of Product Development",
      company: "Innovation Labs"
    },
    
    gallery: ["/Product_development.jpg", "/specifications.jpg", "/Manufacturing.jpg"],
    relatedProjects: ["erp-integration-suite", "advanced-manufacturing-solutions"]
  },
  
  {
    id: "erp-integration-suite",
    title: "ERP Integration Suite",
    subtitle: "Enterprise-wide digital transformation",
    description: "Complete Odoo ERP implementation with custom modules, integrations, and advanced analytics for multi-location operations.",
    image: "/ERP.jpg",
    category: "ERP Solutions",
    year: "2023",
    client: "Enterprise Solutions Inc",
    duration: "16 months",
    budget: "$3.7M",
    technologies: ["Odoo", "Custom Modules", "API Integration", "Business Intelligence"],
    results: ["Unified operations", "Real-time insights", "Process automation", "Scalable architecture"],
    color: "red",
    featured: true,
    
    overview: "Enterprise Solutions Inc needed a comprehensive ERP system to unify their multi-location operations and provide real-time business insights. We implemented a complete Odoo ERP solution with custom modules and advanced analytics.",
    
    challenge: "The client operated with disparate systems across multiple locations, lacked real-time business visibility, had manual processes causing inefficiencies, and struggled with data consistency and reporting across their organization.",
    
    solution: "We implemented a comprehensive Odoo ERP suite featuring custom modules for specific business needs, API integrations with existing systems, advanced business intelligence dashboards, automated workflows, and scalable architecture for future growth.",
    
    implementation: [
      "Phase 1: Business process analysis and ERP planning",
      "Phase 2: Odoo core modules setup and customization",
      "Phase 3: Custom module development and integration",
      "Phase 4: Data migration and system testing",
      "Phase 5: Training, go-live, and optimization"
    ],
    
    outcomes: [
      {
        title: "Process Efficiency",
        value: "50%",
        description: "Improved operational efficiency through automation"
      },
      {
        title: "Data Accuracy",
        value: "99%",
        description: "Unified data management with real-time accuracy"
      },
      {
        title: "Reporting Speed",
        value: "90%",
        description: "Faster business reporting and decision making"
      },
      {
        title: "Cost Reduction",
        value: "35%",
        description: "Reduced operational costs through process optimization"
      }
    ],
    
    testimonial: {
      quote: "The ERP integration has unified our operations across all locations. We now have complete visibility and control over our business processes.",
      author: "Maria Gonzalez",
      position: "Chief Operating Officer",
      company: "Enterprise Solutions Inc"
    },
    
    gallery: ["/ERP.jpg", "/Manufacturing.jpg", "/Product_development.jpg"],
    relatedProjects: ["advanced-manufacturing-solutions", "supply-chain-optimization"]
  }
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};

export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured);
};

export const getRelatedProjects = (currentProjectId: string, relatedIds: string[]): Project[] => {
  return projects.filter(project => 
    relatedIds.includes(project.id) && project.id !== currentProjectId
  );
};