import React, { useState } from 'react';
import { CheckCircle, XCircle, Award, RefreshCw, BookOpen, ChevronRight, Home } from 'lucide-react';

const QuizApp = () => {
  const [selectedModule, setSelectedModule] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);
  const [started, setStarted] = useState(false);

  const modules = {
    module1: {
      title: "Module 1: Cloud Concepts Overview",
      questions: [
        {
          question: "What is the PRIMARY advantage of treating infrastructure as software rather than hardware?",
          options: [
            "It requires more physical security measures",
            "It enables quick and easy changes without hardware modifications",
            "It demands more dedicated staff",
            "It involves longer procurement cycles"
          ],
          correct: 1,
          explanation: "Infrastructure as software enables flexible solutions with quick, cost-effective changes at the software level, eliminating undifferentiated heavy-lifting tasks and avoiding the need for physical hardware modifications.",
          difficulty: "Basic"
        },
        {
          question: "Which statement BEST describes the pay-as-you-go pricing model in cloud computing?",
          options: [
            "You pay a fixed monthly fee regardless of usage",
            "You pay only for resources you consume with variable costs",
            "You must pay upfront capital expenditure",
            "You pay based on theoretical maximum peaks"
          ],
          correct: 1,
          explanation: "Cloud computing uses pay-as-you-go pricing where you pay only for what you consume. This replaces upfront capital expenditure with variable costs and eliminates provisioning based on theoretical maximum peaks.",
          difficulty: "Basic"
        },
        {
          question: "In the cloud service models hierarchy, which model gives customers the MOST control over IT resources?",
          options: [
            "Software as a Service (SaaS)",
            "Platform as a Service (PaaS)",
            "Infrastructure as a Service (IaaS)",
            "All models provide equal control"
          ],
          correct: 2,
          explanation: "IaaS provides the most control over IT resources, allowing you to manage operating systems, applications, and configurations. PaaS offers moderate control, while SaaS provides the least control.",
          difficulty: "Basic"
        },
        {
          question: "What are the THREE ways to interact with AWS Services?",
          options: [
            "Console, CLI, and API only",
            "Management Console, Command Line Interface (CLI), and Software Development Kits (SDK)",
            "Web browser, mobile app, and desktop application",
            "Console, Email, and Phone support"
          ],
          correct: 1,
          explanation: "AWS services can be accessed through: (1) AWS Management Console (graphical interface), (2) Command Line Interface (CLI) via discrete commands or scripts, and (3) Software Development Kits (SDK) directly from code.",
          difficulty: "Basic"
        },
        {
          question: "According to the AWS Cloud Adoption Framework, which perspective focuses on IT Finance, IT Strategy, and Benefits Realization?",
          options: [
            "People Perspective",
            "Business Perspective",
            "Governance Perspective",
            "Platform Perspective"
          ],
          correct: 1,
          explanation: "The Business Perspective ensures IT is aligned with business needs and includes capabilities like IT Finance, IT Strategy, Benefits Realization, and Business Risk Management.",
          difficulty: "Application"
        },
        {
          question: "Which AWS CAF perspective would handle Identity and Access Management, Infrastructure Security, and Incident Response?",
          options: [
            "Security Perspective",
            "Operations Perspective",
            "Governance Perspective",
            "Platform Perspective"
          ],
          correct: 0,
          explanation: "The Security Perspective focuses on ensuring the organization meets security objectives and includes Identity and Access Management, Detective Control, Infrastructure Security, Data Protection, and Incident Response.",
          difficulty: "Application"
        },
        {
          question: "The Operations Perspective in AWS CAF includes which of the following capabilities?",
          options: [
            "IT Finance and IT Strategy",
            "Compute and Network Provisioning",
            "Service Monitoring and Business Continuity/Disaster Recovery",
            "Career Management and Training Management"
          ],
          correct: 2,
          explanation: "The Operations Perspective defines how daily, quarterly, and yearly business will be conducted. It includes Service Monitoring, Application Performance Monitoring, Release Management, Business Continuity/Disaster Recovery, and IT Service Catalog.",
          difficulty: "Application"
        },
        {
          question: "How many perspectives make up the AWS Cloud Adoption Framework?",
          options: [
            "Four perspectives",
            "Five perspectives",
            "Six perspectives",
            "Eight perspectives"
          ],
          correct: 2,
          explanation: "The AWS CAF is organized into six perspectives: Business, People, Governance (Business Capabilities), and Platform, Security, Operations (Technical Capabilities).",
          difficulty: "Basic"
        },
        {
          question: "Which capability would fall under the People Perspective of AWS CAF?",
          options: [
            "Portfolio Management",
            "Database Provisioning",
            "Organizational Change Management",
            "Data Protection"
          ],
          correct: 2,
          explanation: "The People Perspective focuses on training, staffing, and organizational changes. Its capabilities include Resource Management, Incentive Management, Career Management, Training Management, and Organizational Change Management.",
          difficulty: "Application"
        },
        {
          question: "What is a key advantage of cloud computing related to cost?",
          options: [
            "Higher upfront capital expenditure",
            "Economies of scale from aggregate user base",
            "Fixed monthly costs regardless of usage",
            "Requirement for long-term contracts"
          ],
          correct: 1,
          explanation: "Cloud computing provides economies of scale from the aggregate user base, resulting in lower pay-as-you-go prices. You benefit from AWS's massive scale without needing your own infrastructure investment.",
          difficulty: "Basic"
        },
        {
          question: "In the Platform Perspective of AWS CAF, which type of provisioning would NOT be included?",
          options: [
            "Compute Provisioning",
            "Network Provisioning",
            "Career Management",
            "Database Provisioning"
          ],
          correct: 2,
          explanation: "Career Management belongs to the People Perspective. The Platform Perspective describes the architecture of the target state environment and includes Compute, Network, Storage, and Database Provisioning, plus Systems Architecture and Application Development.",
          difficulty: "Critical Thinking"
        },
        {
          question: "What key benefit does cloud computing provide for global reach?",
          options: [
            "Limited to single geographic locations",
            "Global data center presence enabling worldwide deployment",
            "Requires establishing physical offices in each country",
            "Only available in North America and Europe"
          ],
          correct: 1,
          explanation: "Cloud computing provides a global data center presence, allowing you to deploy applications and services worldwide quickly. You can go global in minutes without building your own international infrastructure.",
          difficulty: "Basic"
        }
      ]
    },
    module3: {
      title: "Module 3: AWS Global Infrastructure",
      questions: [
        {
          question: "An AWS Region typically consists of how many components?",
          options: [
            "One or more data centers",
            "Two or more Availability Zones",
            "Exactly three Availability Zones",
            "One Availability Zone with multiple Edge Locations"
          ],
          correct: 1,
          explanation: "A Region typically consists of two or more Availability Zones. Each Availability Zone contains one or more discrete data centers with redundant power, networking, and connectivity.",
          difficulty: "Basic"
        },
        {
          question: "When selecting an AWS Region for your application, which factors should you consider?",
          options: [
            "Only cost considerations",
            "Only proximity to customers",
            "Laws, proximity to customers, service availability, and cost",
            "Only data governance requirements"
          ],
          correct: 2,
          explanation: "Region selection should consider: (1) Laws - data governance and legal requirements, (2) Proximity - reduce latency to customers, (3) Availability - some services are region-locked, and (4) Cost - varies by region.",
          difficulty: "Application"
        },
        {
          question: "What is the current total number of Availability Zones worldwide according to the course?",
          options: [
            "50 Availability Zones",
            "69 Availability Zones",
            "100 Availability Zones",
            "187 Availability Zones"
          ],
          correct: 1,
          explanation: "There are currently 69 Availability Zones worldwide. Note: AWS also has 187 Points of Presence locations (176 Edge Locations + 11 Regional Edge Caches) for CloudFront.",
          difficulty: "Basic"
        },
        {
          question: "What is the relationship between Availability Zones within a Region?",
          options: [
            "They share the same physical data center",
            "They are interconnected with high-speed private networking",
            "They are completely isolated with no connections",
            "They only connect through public internet"
          ],
          correct: 1,
          explanation: "Availability Zones are fully isolated partitions of AWS infrastructure but are interconnected with other AZs using high-speed private networking. This enables high availability while maintaining fault isolation.",
          difficulty: "Application"
        },
        {
          question: "Why does AWS recommend replicating data across Availability Zones?",
          options: [
            "To reduce costs",
            "To improve network speed",
            "For resiliency and fault tolerance",
            "To comply with regulations"
          ],
          correct: 2,
          explanation: "AWS recommends replicating data and resources across Availability Zones for resiliency. Since each AZ is designed for fault isolation, replication ensures your application continues operating if one AZ experiences issues.",
          difficulty: "Application"
        },
        {
          question: "How many data centers typically exist in an AWS data center facility?",
          options: [
            "10,000 to 20,000 physical servers",
            "30,000 to 40,000 physical servers",
            "50,000 to 80,000 physical servers",
            "100,000 to 150,000 physical servers"
          ],
          correct: 2,
          explanation: "A data center typically has 50,000 to 80,000 physical servers. Data centers are where data resides and data processing occurs, with redundant power, networking, and connectivity.",
          difficulty: "Basic"
        },
        {
          question: "What is Amazon CloudFront primarily used for?",
          options: [
            "Database management and replication",
            "Fast content delivery network (CDN) service",
            "Virtual private cloud networking",
            "Compute capacity provisioning"
          ],
          correct: 1,
          explanation: "Amazon CloudFront is a fast CDN service that securely delivers data, videos, applications, and APIs to customers globally with low latency and high transfer speeds through a network of Edge Locations.",
          difficulty: "Basic"
        },
        {
          question: "How many Points of Presence locations does AWS provide globally?",
          options: [
            "69 locations",
            "150 locations",
            "187 locations",
            "250 locations"
          ],
          correct: 2,
          explanation: "AWS provides 187 Points of Presence locations consisting of 176 Edge Locations (where end users access services) and 11 Regional Edge Caches (which cache infrequent content close to users).",
          difficulty: "Basic"
        },
        {
          question: "Which AWS Global Infrastructure feature ensures 'continued operating properly in the presence of a failure'?",
          options: [
            "Elasticity",
            "Scalability",
            "Fault-tolerance",
            "High Availability"
          ],
          correct: 2,
          explanation: "Fault-tolerance is the built-in redundancy of components that enables a system to continue operating properly in the presence of a failure. This is different from High Availability, which focuses on minimizing downtime.",
          difficulty: "Application"
        },
        {
          question: "What characterizes 'Elasticity' in AWS Global Infrastructure?",
          options: [
            "The ability to recover from failures",
            "The ability to dynamically adapt to capacity and growth needs",
            "The ability to maintain uptime",
            "The ability to distribute workloads"
          ],
          correct: 1,
          explanation: "Elasticity refers to the ability to dynamically adapt to capacity and growth needs. AWS infrastructure can automatically scale resources up or down based on demand without manual intervention.",
          difficulty: "Application"
        },
        {
          question: "Which statement about AWS Regions is TRUE?",
          options: [
            "Regions can span multiple countries",
            "Data replication across Regions is automatic",
            "Regions are logically isolated and you control data replication between them",
            "All AWS services are available in all Regions"
          ],
          correct: 2,
          explanation: "Regions are logically isolated from each other, and data replication across Regions is controlled by you (not automatic). Communication between Regions uses AWS backbone network infrastructure. Not all services are available in all Regions.",
          difficulty: "Critical Thinking"
        },
        {
          question: "What is the purpose of Regional Edge Caches in AWS infrastructure?",
          options: [
            "To provide compute capacity",
            "To cache copies of infrequent content close to users",
            "To store database backups",
            "To host web applications"
          ],
          correct: 1,
          explanation: "Regional Edge Caches cache copies of your infrequent content close to your users. They sit between origin servers and Edge Locations, providing an additional caching layer for CloudFront.",
          difficulty: "Application"
        }
      ]
    },
    module4: {
      title: "Module 4: AWS Cloud Security",
      questions: [
        {
          question: "According to the AWS Shared Responsibility Model, who is responsible for patching the guest operating system on an EC2 instance?",
          options: [
            "AWS is fully responsible",
            "The customer is responsible",
            "It's shared equally between AWS and customer",
            "Neither, it's automated by AWS"
          ],
          correct: 1,
          explanation: "The customer is responsible for security IN the cloud, including EC2 instance OS maintenance and patching. AWS is responsible for security OF the cloud (physical infrastructure, host OS, etc.).",
          difficulty: "Application"
        },
        {
          question: "Which of the following is AWS responsible for in the Shared Responsibility Model?",
          options: [
            "Security group configuration",
            "Application passwords and role-based access",
            "Physical security of data centers",
            "OS or host-based firewalls"
          ],
          correct: 2,
          explanation: "AWS manages security OF the cloud, including physical security of data centers, hardware/software infrastructure, network infrastructure, and virtualization infrastructure. Customers manage security IN the cloud.",
          difficulty: "Basic"
        },
        {
          question: "In which service model does the customer have the MOST security responsibilities?",
          options: [
            "Software as a Service (SaaS)",
            "Platform as a Service (PaaS)",
            "Infrastructure as a Service (IaaS)",
            "All have equal responsibilities"
          ],
          correct: 2,
          explanation: "IaaS gives customers the most flexibility and control, but also the most security responsibilities including OS patching, network configuration, and access controls. PaaS and SaaS reduce customer security responsibilities.",
          difficulty: "Application"
        },
        {
          question: "What can AWS Identity and Access Management (IAM) be used to manage?",
          options: [
            "Only user passwords",
            "Users, security credentials, and permissions",
            "Only AWS service configurations",
            "Physical data center access"
          ],
          correct: 1,
          explanation: "IAM enables you to centrally manage users, security credentials (access keys), and permissions controlling which AWS resources users can access. It's a comprehensive identity and access management service.",
          difficulty: "Basic"
        },
        {
          question: "What is an IAM Role primarily used for?",
          options: [
            "To create permanent user accounts",
            "To grant temporary security credentials for making AWS service requests",
            "To store passwords securely",
            "To encrypt data at rest"
          ],
          correct: 1,
          explanation: "An IAM Role provides temporary security credentials and is intended to be assumable by anyone who needs it (person, application, or service). Unlike users, roles aren't uniquely associated with one person.",
          difficulty: "Application"
        },
        {
          question: "Which IAM policy evaluation rule takes precedence?",
          options: [
            "Explicit allow always wins",
            "Implicit allow takes precedence",
            "All permissions are implicitly denied by default; explicit deny overrides all",
            "The most recent policy change wins"
          ],
          correct: 2,
          explanation: "All permissions are implicitly denied by default. You must explicitly allow permissions. However, if something is explicitly denied, it is NEVER allowed, even if there's an explicit allow elsewhere.",
          difficulty: "Critical Thinking"
        },
        {
          question: "What is the Principle of Least Privilege (POLP)?",
          options: [
            "Giving all users administrator access",
            "Limiting access rights to the bare minimum permissions needed",
            "Denying all permissions by default",
            "Granting temporary access only"
          ],
          correct: 1,
          explanation: "POLP is the practice of limiting access rights for users to the bare minimum permissions they need to perform their work. Users get only the read, write, or execute permissions necessary for their specific jobs.",
          difficulty: "Basic"
        },
        {
          question: "What should you do immediately after creating a new AWS account?",
          options: [
            "Continue using the root user for all tasks",
            "Create an IAM user with admin permissions and stop using root user",
            "Delete the root user account",
            "Share the root credentials with your team"
          ],
          correct: 1,
          explanation: "Best practice: Stop using the account root user as soon as possible. Create an IAM user for yourself with admin permissions, add it to an admin group, enable MFA, and use IAM credentials for daily tasks.",
          difficulty: "Application"
        },
        {
          question: "What does AWS CloudTrail track?",
          options: [
            "Only EC2 instance performance",
            "User activity and API requests to resources",
            "Network bandwidth usage",
            "Storage capacity utilization"
          ],
          correct: 1,
          explanation: "CloudTrail tracks user activity on your account and logs all API requests to resources in all supported services. Basic event history is enabled by default and free, containing 90 days of management event data.",
          difficulty: "Basic"
        },
        {
          question: "How do Service Control Policies (SCPs) in AWS Organizations function?",
          options: [
            "They grant permissions to users directly",
            "They specify maximum permissions for an organization",
            "They replace IAM policies entirely",
            "They only apply to root accounts"
          ],
          correct: 1,
          explanation: "SCPs specify the maximum permissions for an organization and never grant permissions themselves. They limit what's possible in accounts, ensuring compliance with access control guidelines. Actual permissions are the intersection of SCPs and IAM.",
          difficulty: "Critical Thinking"
        },
        {
          question: "What does AWS Key Management Service (KMS) enable you to do?",
          options: [
            "Manage IAM users only",
            "Create and manage encryption keys",
            "Monitor CloudWatch metrics",
            "Configure security groups"
          ],
          correct: 1,
          explanation: "KMS enables you to create and manage encryption keys and control their use across AWS services and applications. It integrates with CloudTrail to log all key usage and uses FIPS 140-2 validated HSMs.",
          difficulty: "Basic"
        },
        {
          question: "How is data encrypted in transit in AWS?",
          options: [
            "Using AWS KMS only",
            "Using Transport Layer Security (TLS) and HTTPS",
            "Using security groups",
            "Using IAM policies"
          ],
          correct: 1,
          explanation: "Data in transit is secured using Transport Layer Security (TLS, formerly SSL) and Secure HTTP (HTTPS), which creates a secure tunnel. AWS Certificate Manager helps manage, deploy, and renew TLS/SSL certificates.",
          difficulty: "Application"
        },
        {
          question: "What is Amazon Cognito used for?",
          options: [
            "Database management",
            "User sign-up, sign-in, and access control for web and mobile apps",
            "Network configuration",
            "Storage encryption"
          ],
          correct: 1,
          explanation: "Amazon Cognito adds user sign-up, sign-in, and access control to web and mobile applications. It scales to millions of users and supports sign-in with social providers (Facebook, Google) and enterprise identity providers (SAML 2.0).",
          difficulty: "Basic"
        },
        {
          question: "What is AWS Shield?",
          options: [
            "A firewall service",
            "A managed DDoS protection service",
            "An encryption service",
            "A backup service"
          ],
          correct: 1,
          explanation: "AWS Shield is a managed distributed denial of service (DDoS) protection service. Shield Standard is enabled at no additional cost with always-on detection. Shield Advanced is optional and helps minimize downtime.",
          difficulty: "Basic"
        },
        {
          question: "What can you access through AWS Artifact?",
          options: [
            "EC2 instance logs",
            "Security and compliance reports and online agreements",
            "CloudWatch metrics",
            "S3 bucket contents"
          ],
          correct: 1,
          explanation: "AWS Artifact is a resource for compliance-related information, providing access to security and compliance reports and select online agreements. You can access it directly from the AWS Management Console.",
          difficulty: "Basic"
        }
      ]
    },
    module5: {
      title: "Module 5: Networking and Content Delivery",
      questions: [
        {
          question: "What does CIDR stand for in networking?",
          options: [
            "Central Internet Domain Routing",
            "Classless Inter-Domain Routing",
            "Centralized IP Distribution Registry",
            "Controlled Internet Data Routing"
          ],
          correct: 1,
          explanation: "CIDR stands for Classless Inter-Domain Routing, a method for allocating IP addresses and IP routing. It uses notation like 192.168.100.0/22 where the number after the slash indicates the subnet mask.",
          difficulty: "Basic"
        },
        {
          question: "In the OSI model, at which layer do routers operate?",
          options: [
            "Layer 2 - Data Link",
            "Layer 3 - Network",
            "Layer 4 - Transport",
            "Layer 7 - Application"
          ],
          correct: 1,
          explanation: "Routers operate at Layer 3 (Network layer) which handles routing and packet forwarding using IP addresses. Layer 2 is for switches/hubs (MAC), Layer 4 is for TCP/UDP, and Layer 7 is for applications like HTTP.",
          difficulty: "Application"
        },
        {
          question: "What can you customize when creating an Amazon VPC?",
          options: [
            "Only the subnet configuration",
            "Only the IP address range",
            "IP address range, subnets, route tables, and network gateways",
            "Only security groups"
          ],
          correct: 2,
          explanation: "Amazon VPC enables you to provision a logically isolated section where you can customize: IP address range selection, subnet creation, route table configuration, and network gateway setup.",
          difficulty: "Basic"
        },
        {
          question: "Can you change the IP address range (CIDR block) of a VPC after creation?",
          options: [
            "Yes, at any time",
            "Yes, but only within the first 24 hours",
            "No, you cannot change it after creation",
            "Yes, but only to expand the range"
          ],
          correct: 2,
          explanation: "You CANNOT change the address range after VPC creation. When you create a VPC, you assign it an IPv4 or IPv6 CIDR block, and this assignment is permanent. Plan carefully before creating your VPC.",
          difficulty: "Application"
        },
        {
          question: "What is the relationship between subnets and Availability Zones?",
          options: [
            "Subnets can span multiple Availability Zones",
            "Each subnet belongs to exactly one Availability Zone",
            "Availability Zones contain multiple VPCs but no subnets",
            "Subnets and Availability Zones are unrelated"
          ],
          correct: 1,
          explanation: "Each subnet belongs to a single Availability Zone and cannot span zones. However, a VPC can span multiple AZs, allowing you to create subnets in different zones for high availability.",
          difficulty: "Application"
        },
        {
          question: "How many IP addresses in each subnet CIDR block are reserved by AWS?",
          options: [
            "2 addresses",
            "3 addresses",
            "5 addresses",
            "10 addresses"
          ],
          correct: 2,
          explanation: "Each subnet CIDR block has 5 reserved addresses for: network address, internal communication (VPC router), DNS resolution, future use, and network broadcast address. Plan your subnet sizes accordingly.",
          difficulty: "Basic"
        },
        {
          question: "What are the TWO purposes of an Internet Gateway?",
          options: [
            "Encrypt data and provide monitoring",
            "Provide a target for internet traffic and perform NAT for public IPv4 addresses",
            "Connect to on-premises networks and provide DNS",
            "Load balance traffic and cache content"
          ],
          correct: 1,
          explanation: "An Internet Gateway serves two purposes: (1) provides a target in VPC route tables for internet-routable traffic, and (2) performs network address translation (NAT) for instances with public IPv4 addresses.",
          difficulty: "Application"
        },
        {
          question: "What is the primary function of a NAT Gateway?",
          options: [
            "Allow inbound connections from the internet to private instances",
            "Enable private subnet instances to connect to the internet while preventing inbound connections",
            "Provide VPN connectivity",
            "Distribute traffic across multiple instances"
          ],
          correct: 1,
          explanation: "A NAT Gateway enables instances in a private subnet to connect to the internet or other AWS services while preventing the internet from initiating connections to those instances. It provides outbound-only internet access.",
          difficulty: "Application"
        },
        {
          question: "What is a critical limitation of VPC Peering?",
          options: [
            "It only works within the same region",
            "Transitive peering is not supported",
            "It requires an Internet Gateway",
            "It's only available for public subnets"
          ],
          correct: 1,
          explanation: "Transitive peering (chaining VPC peering connections) is NOT supported. If VPC A peers with VPC B, and VPC B peers with VPC C, VPC A cannot communicate with VPC C through B. Also, IP spaces cannot overlap.",
          difficulty: "Critical Thinking"
        },
        {
          question: "Which VPC feature provides private connectivity between VPCs and AWS services without using the internet?",
          options: [
            "Internet Gateway",
            "NAT Gateway",
            "VPC Endpoints",
            "VPC Peering"
          ],
          correct: 2,
          explanation: "VPC Endpoints enable you to privately connect a VPC to supported AWS services. There are two types: Gateway Endpoints (for S3 and DynamoDB) and Interface Endpoints (powered by AWS PrivateLink for other services).",
          difficulty: "Application"
        },
        {
          question: "How do Security Groups differ from Network ACLs?",
          options: [
            "Security Groups operate at instance level; Network ACLs at subnet level",
            "Security Groups operate at subnet level; Network ACLs at instance level",
            "Both operate at the same level",
            "Security Groups are stateful; Network ACLs are also stateful"
          ],
          correct: 0,
          explanation: "Security Groups act at the instance level, are stateful (return traffic automatically allowed), and support only allow rules. Network ACLs act at the subnet level, are stateless (return traffic must be explicitly allowed), and support both allow and deny rules.",
          difficulty: "Critical Thinking"
        },
        {
          question: "What is AWS Transit Gateway used for?",
          options: [
            "To translate domain names to IP addresses",
            "To interconnect VPCs and on-premises networks to a single hub",
            "To provide DDoS protection",
            "To cache content at edge locations"
          ],
          correct: 1,
          explanation: "AWS Transit Gateway is a network transit hub used to interconnect VPCs, on-premises networks, Direct Connect gateways, and VPN connections using a hub-and-spoke model. This reduces complexity and the number of connections needed.",
          difficulty: "Application"
        },
        {
          question: "Which Amazon Route 53 routing policy would you use to improve global application performance based on latency?",
          options: [
            "Simple Routing",
            "Weighted Round Robin",
            "Latency Routing",
            "Failover Routing"
          ],
          correct: 2,
          explanation: "Latency Routing helps improve global applications by routing traffic based on the lowest network latency to your resources. This ensures users are directed to the AWS resource that provides the best response time.",
          difficulty: "Application"
        },
        {
          question: "What does Amazon CloudFront charge for? (Select the MOST complete answer)",
          options: [
            "Only data transfer out",
            "Data transfer out, HTTP(S) requests, invalidation requests, and custom SSL certificates",
            "Only storage and bandwidth",
            "A flat monthly fee"
          ],
          correct: 1,
          explanation: "CloudFront charges for: (1) volume of data transferred out, (2) number of HTTP(S) requests, (3) invalidation requests (first 1,000 paths free per month), and (4) custom SSL certificates ($600/month for Dedicated IP version).",
          difficulty: "Application"
        },
        {
          question: "What is the benefit of AWS Direct Connect over standard internet connections?",
          options: [
            "It's always cheaper",
            "It provides more consistent network experience with increased bandwidth",
            "It's easier to set up",
            "It provides built-in encryption"
          ],
          correct: 1,
          explanation: "AWS Direct Connect establishes a dedicated private connection between your network and AWS, providing increased bandwidth, more consistent network experience, and often better performance than internet-based or VPN connections.",
          difficulty: "Application"
        }
      ]
    },
    module6: {
      title: "Module 6: Compute",
      questions: [
        {
          question: "What does an Amazon Machine Image (AMI) contain?",
          options: [
            "Only the operating system",
            "A template with OS and often pre-installed software",
            "Only application software",
            "Network configuration only"
          ],
          correct: 1,
          explanation: "An AMI is a template used to create an EC2 instance that contains a Windows or Linux operating system and often has some software pre-installed. You can choose from Quick Start, My AMIs, AWS Marketplace, or Community AMIs.",
          difficulty: "Basic"
        },
        {
          question: "In the EC2 instance type naming convention 't3.large', what does each component represent?",
          options: [
            "t=type, 3=size, large=generation",
            "t=family, 3=generation, large=size",
            "t=tier, 3=region, large=capacity",
            "t=technology, 3=version, large=performance"
          ],
          correct: 1,
          explanation: "In EC2 naming convention: the letter (t) is the instance family, the number (3) is the generation, and the word (large) is the size. For example, t3.large is family T, generation 3, size large.",
          difficulty: "Basic"
        },
        {
          question: "What happens to data stored on an EC2 Instance Store when you stop the instance?",
          options: [
            "Data persists and is available when you restart",
            "Data is automatically backed up to S3",
            "Data is deleted and cannot be recovered",
            "Data is moved to EBS storage"
          ],
          correct: 2,
          explanation: "Instance Store is ephemeral storage. Data is lost when you stop, hibernate, or terminate the instance. For persistent storage, use Amazon EBS volumes.",
          difficulty: "Application"
        },
        {
          question: "Which EC2 pricing model allows you to bid on spare capacity at significant discounts?",
          options: [
            "On-Demand Instances",
            "Reserved Instances",
            "Spot Instances",
            "Dedicated Hosts"
          ],
          correct: 2,
          explanation: "Spot Instances let you bid on spare EC2 capacity at up to 90% discount. However, instances can be interrupted by AWS with a 2-minute notification when capacity is needed back.",
          difficulty: "Application"
        },
        {
          question: "What are the FOUR pillars of EC2 cost optimization?",
          options: [
            "Speed, Storage, Security, Scalability",
            "Right Size, Increase Elasticity, Optimal Pricing Model, Optimize Storage",
            "Availability, Performance, Cost, Reliability",
            "Compute, Network, Storage, Database"
          ],
          correct: 1,
          explanation: "The four pillars are: (1) Right Size - match capacity to need, (2) Increase Elasticity - stop idle instances and use auto-scaling, (3) Optimal Pricing Model - leverage different purchase types, (4) Optimize Storage Choices - reduce costs while maintaining performance.",
          difficulty: "Application"
        },
        {
          question: "What is the maximum execution time for a single AWS Lambda function?",
          options: [
            "5 minutes",
            "15 minutes",
            "30 minutes",
            "1 hour"
          ],
          correct: 1,
          explanation: "The maximum execution time for a single Lambda function is 15 minutes. Lambda also has a maximum memory allocation of 3,008 MB and a deployment package size of 250 MB unzipped.",
          difficulty: "Basic"
        },
        {
          question: "What is the primary difference between Amazon ECS and AWS Fargate?",
          options: [
            "ECS is for VMs, Fargate is for containers",
            "ECS requires you to manage the cluster infrastructure, Fargate is serverless",
            "Fargate only supports Windows containers",
            "ECS is more expensive than Fargate"
          ],
          correct: 1,
          explanation: "Amazon ECS is a container orchestration service where you can choose to manage the cluster infrastructure yourself (EC2-backed) or use AWS Fargate (serverless) where AWS manages the infrastructure for you.",
          difficulty: "Critical Thinking"
        },
        {
          question: "What does AWS Elastic Beanstalk automatically handle for you?",
          options: [
            "Only code deployment",
            "Infrastructure provisioning, deployment, load balancing, auto scaling, and monitoring",
            "Only database management",
            "Only security configuration"
          ],
          correct: 1,
          explanation: "Elastic Beanstalk automatically handles infrastructure provisioning and configuration, deployment, load balancing, automatic scaling, health monitoring, analysis and debugging, and logging. You only pay for the underlying resources used.",
          difficulty: "Application"
        },
        {
          question: "Which programming languages are supported by AWS Elastic Beanstalk?",
          options: [
            "Only Java and Python",
            "Java, .NET, PHP, Node.js, Python, Ruby, Go, and Docker",
            "Only .NET and Java",
            "All programming languages"
          ],
          correct: 1,
          explanation: "AWS Elastic Beanstalk supports web applications written in: Java, .NET, PHP, Node.js, Python, Ruby, Go, and Docker. This covers most common web application platforms.",
          difficulty: "Basic"
        },
        {
          question: "What is Amazon Elastic Kubernetes Service (EKS) used for?",
          options: [
            "Running serverless functions",
            "Running Kubernetes on AWS with certified Kubernetes conformance",
            "Managing virtual machines",
            "Storing container images"
          ],
          correct: 1,
          explanation: "Amazon EKS enables you to run Kubernetes on AWS. It's certified Kubernetes conformant, supports easy migration, works with both Linux and Windows containers, and is compatible with Kubernetes community tools and popular add-ons.",
          difficulty: "Application"
        },
        {
          question: "What is the relationship between Docker and Kubernetes?",
          options: [
            "They are the same technology",
            "Docker enables multiple containers on a single OS host; Kubernetes orchestrates multiple Docker hosts",
            "Docker replaces Kubernetes",
            "They cannot work together"
          ],
          correct: 1,
          explanation: "Docker and Kubernetes complement each other. Docker enables you to run multiple containers on a single OS host, while Kubernetes orchestrates multiple Docker hosts (nodes), automating container provisioning, networking, load distribution, and scaling.",
          difficulty: "Critical Thinking"
        },
        {
          question: "When should you use Reserved Instances over On-Demand Instances?",
          options: [
            "For unpredictable workloads",
            "For steady-state or predictable workloads with 1-3 year commitments",
            "For short-term testing",
            "When you need maximum flexibility"
          ],
          correct: 1,
          explanation: "Reserved Instances are ideal for steady-state or predictable workloads. You commit to a 1-year or 3-year term and receive up to 72% discount compared to On-Demand pricing. Best practice: Right size first, then reserve.",
          difficulty: "Application"
        }
      ]
    },
    module7: {
      title: "Module 7: Storage",
      questions: [
        {
          question: "What is Amazon Simple Storage Service (S3) primarily used for?",
          options: [
            "Block storage for EC2 instances",
            "Object storage service with industry-leading scalability",
            "File system storage for Linux applications",
            "Database storage for relational data"
          ],
          correct: 1,
          explanation: "Amazon S3 is an object storage service that offers industry-leading scalability, data availability, security, and performance. It's designed to store and retrieve any amount of data from anywhere.",
          difficulty: "Basic"
        },
        {
          question: "What is the key difference between Amazon S3 and Amazon EBS?",
          options: [
            "S3 is for block storage; EBS is for object storage",
            "S3 is for object storage; EBS is for block storage",
            "Both are object storage services",
            "Both are block storage services"
          ],
          correct: 1,
          explanation: "S3 is an object storage service designed for storing files, images, backups, etc. EBS is a high-performance block storage service designed for use with Amazon EC2 instances, providing persistent storage volumes.",
          difficulty: "Application"
        },
        {
          question: "What is Amazon EBS designed for?",
          options: [
            "Storing static website content",
            "High performance block storage for use with Amazon EC2",
            "Long-term data archiving",
            "Content delivery network storage"
          ],
          correct: 1,
          explanation: "Amazon EBS is a high-performance block storage service designed for use with Amazon EC2. It supports both throughput and transaction-intensive workloads at any scale.",
          difficulty: "Basic"
        },
        {
          question: "What is Amazon Elastic File System (EFS) best suited for?",
          options: [
            "Block storage for databases",
            "Object storage for web applications",
            "Simple, scalable, fully managed elastic NFS file system",
            "Cold storage for archives"
          ],
          correct: 2,
          explanation: "Amazon EFS is a simple, scalable, fully managed elastic NFS file system for use with AWS Cloud services and on-premises resources. It provides shared file storage that multiple EC2 instances can access simultaneously.",
          difficulty: "Basic"
        },
        {
          question: "What is Amazon S3 Glacier primarily designed for?",
          options: [
            "Frequently accessed data",
            "Secure, durable, and extremely low-cost storage for data archiving and long-term backup",
            "High-performance database storage",
            "Real-time data processing"
          ],
          correct: 1,
          explanation: "Amazon S3 Glacier is a secure, durable, and extremely low-cost storage service designed for data archiving and long-term backup. It's optimized for data that is infrequently accessed.",
          difficulty: "Basic"
        },
        {
          question: "Which storage service would you use if you need multiple EC2 instances to access the same file system simultaneously?",
          options: [
            "Amazon S3",
            "Amazon EBS",
            "Amazon EFS",
            "Amazon S3 Glacier"
          ],
          correct: 2,
          explanation: "Amazon EFS provides a shared file system that multiple EC2 instances can access simultaneously. S3 is object storage, EBS is block storage attached to a single instance, and Glacier is for archiving.",
          difficulty: "Application"
        },
        {
          question: "What happens to an EBS volume when you terminate an EC2 instance?",
          options: [
            "It is automatically deleted",
            "It persists by default unless you configure deletion on termination",
            "It is automatically moved to S3",
            "It becomes read-only"
          ],
          correct: 1,
          explanation: "By default, EBS volumes persist independently of the instance lifecycle. However, you can configure EBS volumes to be deleted when the instance terminates. Root volumes are deleted by default, but additional volumes persist.",
          difficulty: "Application"
        },
        {
          question: "What is the durability characteristic of Amazon S3?",
          options: [
            "99.9% durability",
            "99.99% durability",
            "99.999999999% (11 9's) durability",
            "100% durability guarantee"
          ],
          correct: 2,
          explanation: "Amazon S3 is designed for 99.999999999% (11 9's) durability, meaning it's built to store data with high durability. Objects are automatically stored across multiple Availability Zones.",
          difficulty: "Basic"
        },
        {
          question: "Which storage service would be most appropriate for storing database backups that need to be retained for 7 years for compliance?",
          options: [
            "Amazon EBS",
            "Amazon EFS",
            "Amazon S3 Glacier",
            "Amazon S3 Standard"
          ],
          correct: 2,
          explanation: "Amazon S3 Glacier is designed for long-term data archiving and backup retention. It provides extremely low-cost storage for data that is infrequently accessed, making it ideal for compliance and archival requirements.",
          difficulty: "Application"
        },
        {
          question: "What is a key advantage of Amazon EFS over Amazon EBS?",
          options: [
            "EFS is cheaper for single-instance use",
            "EFS provides shared file storage accessible by multiple EC2 instances",
            "EFS offers better performance for databases",
            "EFS is block storage"
          ],
          correct: 1,
          explanation: "A key advantage of EFS is that it provides shared file storage that can be accessed by multiple EC2 instances simultaneously, making it ideal for applications that need shared storage. EBS volumes are typically attached to a single instance.",
          difficulty: "Application"
        },
        {
          question: "What type of storage access pattern is Amazon S3 optimized for?",
          options: [
            "Random read/write operations",
            "Sequential read/write operations",
            "Object-based storage with REST API access",
            "Block-level storage access"
          ],
          correct: 2,
          explanation: "Amazon S3 is optimized for object-based storage accessed via REST APIs. It's designed for storing and retrieving objects (files) rather than block-level or file system operations.",
          difficulty: "Application"
        },
        {
          question: "Which storage service provides the lowest cost option for data that is rarely accessed?",
          options: [
            "Amazon S3 Standard",
            "Amazon EBS",
            "Amazon S3 Glacier",
            "Amazon EFS"
          ],
          correct: 2,
          explanation: "Amazon S3 Glacier provides the lowest cost storage option for data that is rarely accessed. It's designed specifically for archival storage where retrieval times of minutes to hours are acceptable.",
          difficulty: "Application"
        },
        {
          question: "What is the primary use case for Amazon EBS volumes?",
          options: [
            "Storing static website assets",
            "Providing persistent block storage for EC2 instances",
            "Sharing files across multiple instances",
            "Long-term data archiving"
          ],
          correct: 1,
          explanation: "Amazon EBS volumes are primarily used to provide persistent block storage for EC2 instances. They're ideal for databases, file systems, and applications that need low-latency, high-performance storage.",
          difficulty: "Basic"
        },{
          question: "What is the PRIMARY difference between block storage and object storage?",
          options: [
            "There is no difference",
            "Block storage splits files into blocks without metadata; object storage stores complete files with metadata",
            "Object storage is always faster",
            "Block storage can only store databases"
          ],
          correct: 1,
          explanation: "Block storage (like EBS) splits files into evenly sized blocks with their own addresses and no metadata, allowing individual block updates. Object storage (like S3) stores entire files as objects with metadata and unique identifiers, requiring full file updates.",
          difficulty: "Critical Thinking"
        },
        {
          question: "What is the designed durability of Amazon S3?",
          options: [
            "99.9% (three nines)",
            "99.99% (four nines)",
            "99.999999999% (eleven nines)",
            "100% guaranteed"
          ],
          correct: 2,
          explanation: "Amazon S3 is designed for 99.999999999% (11 nines) durability. This means if you store 10,000 objects, you can expect to lose a single object once every 10 million years on average.",
          difficulty: "Basic"
        },
        {
          question: "What is the maximum size of a single object in Amazon S3?",
          options: [
            "1 TB",
            "5 TB",
            "10 TB",
            "Unlimited"
          ],
          correct: 1,
          explanation: "A single object in Amazon S3 is limited to 5 TB in size. While S3 provides virtually unlimited total storage capacity, individual objects cannot exceed this limit.",
          difficulty: "Basic"
        },
        {
          question: "What is Amazon EBS primarily designed for?",
          options: [
            "Storing static website content",
            "High-performance block storage for EC2 instances",
            "Data archiving and long-term backup",
            "Content delivery network storage"
          ],
          correct: 1,
          explanation: "Amazon EBS provides high-performance block storage designed specifically for use with Amazon EC2. It supports both throughput and transaction-intensive workloads at any scale, making it ideal for databases and file systems.",
          difficulty: "Basic"
        },
        {
          question: "What is the Annual Failure Rate (AFR) range for Amazon EBS volumes?",
          options: [
            "Between 0.1% and 1%",
            "Between 1% and 5%",
            "Between 5% and 10%",
            "Less than 0.01%"
          ],
          correct: 0,
          explanation: "Amazon EBS is designed for resiliency with an Annual Failure Rate (AFR) between 0.1% and 1%. Volumes are automatically replicated within their Availability Zone to protect from component failure.",
          difficulty: "Application"
        },
        {
          question: "What file system protocol does Amazon EFS support?",
          options: [
            "SMB (Server Message Block)",
            "CIFS (Common Internet File System)",
            "NFS versions 4.0 and 4.1 (Network File System)",
            "FTP (File Transfer Protocol)"
          ],
          correct: 2,
          explanation: "Amazon EFS supports Network File System (NFS) versions 4.0 and 4.1 (NFSv4). It's compatible with all Linux-based AMIs for Amazon EC2 and provides petabyte-scale, low-latency file storage.",
          difficulty: "Basic"
        },
        {
          question: "Which AWS storage service is best for big data analytics, media processing, and shared storage needs?",
          options: [
            "Amazon EBS",
            "Amazon S3",
            "Amazon EFS",
            "Amazon S3 Glacier"
          ],
          correct: 2,
          explanation: "Amazon EFS works well for big data and analytics, media processing workflows, content management, web serving, and home directories. Its shared storage capability allows multiple EC2 instances to access the same file system simultaneously.",
          difficulty: "Application"
        },
        {
          question: "What are the retrieval time options for Amazon S3 Glacier?",
          options: [
            "Instant, Fast, and Slow",
            "Expedited (1-5 min), Standard (3-5 hrs), Bulk (5-12 hrs)",
            "Real-time, Same-day, Next-day",
            "Only Standard (24 hours)"
          ],
          correct: 1,
          explanation: "S3 Glacier offers three retrieval options: Expedited (1-5 minutes for urgent requests), Standard (3-5 hours for regular retrievals), and Bulk (5-12 hours for large amounts of data at lowest cost).",
          difficulty: "Application"
        },
        {
          question: "Which data transfers to Amazon S3 are FREE?",
          options: [
            "Transfers OUT to other Regions",
            "Transfers IN to Amazon S3",
            "International transfers",
            "All transfers have charges"
          ],
          correct: 1,
          explanation: "Transfers IN to Amazon S3 are free. You also don't pay for transfers OUT to CloudFront or EC2 in the same Region. However, transfers OUT to other Regions or to the internet incur charges.",
          difficulty: "Basic"
        },
        {
          question: "What happens to an EBS volume when you terminate the EC2 instance it's attached to?",
          options: [
            "Volume is always automatically deleted",
            "Volume is always preserved",
            "It depends on the DeleteOnTermination attribute setting",
            "Volume is automatically moved to S3"
          ],
          correct: 2,
          explanation: "Whether an EBS volume is deleted depends on the DeleteOnTermination attribute. By default, root volumes are deleted on termination, but additional EBS volumes persist. You can configure this behavior when launching or modifying instances.",
          difficulty: "Application"
        },
        {
          question: "What is the designed availability of Amazon S3 Standard storage class?",
          options: [
            "99% (two nines)",
            "99.9% (three nines)",
            "99.99% (four nines)",
            "99.999% (five nines)"
          ],
          correct: 2,
          explanation: "Amazon S3 Standard storage is designed for 99.99% (four nines) availability and 99.999999999% (eleven nines) durability. S3 Standard-IA has slightly lower availability at 99.9% (three nines).",
          difficulty: "Basic"
        },
        {
          question: "Which storage service automatically scales as you add and remove files?",
          options: [
            "Amazon EBS",
            "Amazon S3",
            "Amazon EFS",
            "Amazon S3 Glacier"
          ],
          correct: 2,
          explanation: "Amazon EFS automatically scales elastically as you add and remove files. You don't need to provision capacity in advance; it grows and shrinks automatically, and you pay only for the storage you use.",
          difficulty: "Application"
        },
        {
          question: "How does Amazon EFS scale?",
          options: [
            "Manually by provisioning capacity",
            "Automatically and elastically as you add and remove files",
            "By adding more EBS volumes",
            "It doesn't scale"
          ],
          correct: 1,
          explanation: "Amazon EFS scales automatically and elastically as you add and remove files. You don't need to provision capacity in advance, and it grows and shrinks automatically as your files change.",
          difficulty: "Application"
        }
      ]
    },
    module8: {
      title: "Module 8&9 : Database Services & Cloud Architecture",
      questions: [
        {
          question: "What is Amazon Relational Database Service (RDS) used for?",
          options: [
            "NoSQL database management",
            "Easy setup, operation, and scaling of relational databases in the cloud",
            "Data warehousing",
            "Key-value database storage"
          ],
          correct: 1,
          explanation: "Amazon RDS makes it easy to set up, operate, and scale relational databases in the cloud. It provides cost-efficient, resizable capacity while automating time-consuming administration tasks.",
          difficulty: "Basic"
        },
        {
          question: "Which database engines does Amazon RDS support?",
          options: [
            "Only MySQL and PostgreSQL",
            "MySQL, PostgreSQL, MariaDB, Oracle, SQL Server, and Amazon Aurora",
            "Only Microsoft SQL Server",
            "Only Amazon Aurora"
          ],
          correct: 1,
          explanation: "Amazon RDS supports six database engines: MySQL, PostgreSQL, MariaDB, Oracle Database, Microsoft SQL Server, and Amazon Aurora. This gives you flexibility to choose the database engine you're most familiar with.",
          difficulty: "Basic"
        },
        {
          question: "What does Amazon RDS automate as a managed service?",
          options: [
            "Only database backups",
            "OS patches, database patches, backups, high availability, and scaling",
            "Only the database engine installation",
            "Only monitoring"
          ],
          correct: 1,
          explanation: "As a managed service, Amazon RDS automates: OS installation and patches, database software installation and patches, database backups, high availability configuration, scaling, and hardware/infrastructure maintenance.",
          difficulty: "Basic"
        },
        {
          question: "What is the purpose of Multi-AZ deployment in Amazon RDS?",
          options: [
            "To increase read performance",
            "To provide high availability with automatic failover",
            "To reduce costs",
            "To improve write speed"
          ],
          correct: 1,
          explanation: "Multi-AZ deployment provides high availability by automatically creating a standby copy of the database in another Availability Zone. Transactions are synchronously replicated, and RDS automatically fails over to the standby if the primary fails.",
          difficulty: "Application"
        },
        {
          question: "What is the difference between RDS Multi-AZ and Read Replicas?",
          options: [
            "They are the same feature",
            "Multi-AZ is for HA with synchronous replication; Read Replicas are for read scaling with asynchronous replication",
            "Read Replicas provide automatic failover",
            "Multi-AZ is only for backups"
          ],
          correct: 1,
          explanation: "Multi-AZ uses synchronous replication for high availability and automatic failover. Read Replicas use asynchronous replication to reduce load on the primary database by routing read queries to replica instances. They serve different purposes.",
          difficulty: "Critical Thinking"
        },
        {
          question: "What type of database is Amazon DynamoDB?",
          options: [
            "Relational database",
            "NoSQL database (key-value and document)",
            "Data warehouse",
            "Graph database"
          ],
          correct: 1,
          explanation: "Amazon DynamoDB is a NoSQL database service that supports both key-value and document data models. It provides single-digit millisecond performance at any scale and is fully managed.",
          difficulty: "Basic"
        },
        {
          question: "What is Amazon Aurora?",
          options: [
            "A NoSQL database service",
            "A MySQL and PostgreSQL compatible relational database built for the cloud",
            "A data warehouse service",
            "A caching service"
          ],
          correct: 1,
          explanation: "Amazon Aurora is a MySQL and PostgreSQL compatible relational database built for the cloud. It combines the performance and availability of enterprise databases with the simplicity and cost-effectiveness of open source databases.",
          difficulty: "Basic"
        },
        {
          question: "What is Amazon Redshift designed for?",
          options: [
            "Transactional OLTP workloads",
            "Petabyte-scale data warehousing and analytics",
            "Real-time gaming applications",
            "Key-value storage"
          ],
          correct: 1,
          explanation: "Amazon Redshift is a fully managed, petabyte-scale data warehouse service designed for analytics and business intelligence workloads. It uses columnar storage and parallel processing architectures for complex analytical queries.",
          difficulty: "Basic"
        },
        {
          question: "What performance does Amazon DynamoDB provide?",
          options: [
            "Single-digit second response time",
            "Single-digit millisecond performance at any scale",
            "Sub-second performance for small datasets only",
            "Performance varies based on load"
          ],
          correct: 1,
          explanation: "Amazon DynamoDB provides consistent, single-digit millisecond performance at any scale. This makes it ideal for applications requiring low latency and high throughput, such as mobile, web, gaming, and IoT applications.",
          difficulty: "Basic"
        },
        {
          question: "How does Amazon Aurora achieve high availability?",
          options: [
            "Through manual replication only",
            "By replicating data across three Availability Zones automatically",
            "By using only one Availability Zone",
            "Through manual backups only"
          ],
          correct: 1,
          explanation: "Amazon Aurora automatically replicates data across three Availability Zones. Its storage system is distributed, fault-tolerant, and self-healing, capable of surviving the loss of up to two copies of data without affecting write availability.",
          difficulty: "Application"
        },
        {
          question: "When should you use Amazon RDS instead of managing your own database on EC2?",
          options: [
            "When you need complete control over the database engine",
            "When you want AWS to handle patching, backups, and maintenance",
            "When you need to customize the OS extensively",
            "When you want to avoid managed services"
          ],
          correct: 1,
          explanation: "Use RDS when you want AWS to handle routine database tasks like patching, backups, recovery, and scaling. Use self-managed databases on EC2 only when you require deep customization of the database engine or OS that RDS doesn't support.",
          difficulty: "Application"
        },
        {
          question: "What is a key difference between Amazon RDS and Amazon DynamoDB?",
          options: [
            "RDS is NoSQL; DynamoDB is relational",
            "RDS is relational SQL; DynamoDB is NoSQL with automatic scaling",
            "Both are relational databases",
            "Both require manual scaling"
          ],
          correct: 1,
          explanation: "Amazon RDS is a managed relational database service (SQL) that requires capacity planning and scaling configuration. Amazon DynamoDB is a fully managed NoSQL service with automatic scaling, requiring no capacity planning.",
          difficulty: "Critical Thinking"
        },
        {
          question: "What makes Amazon Aurora different from standard MySQL or PostgreSQL?",
          options: [
            "It's cheaper but slower",
            "Up to 5x better performance than MySQL and 3x better than PostgreSQL with cloud-native architecture",
            "It only supports Windows",
            "It doesn't support SQL"
          ],
          correct: 1,
          explanation: "Amazon Aurora provides up to 5x the performance of MySQL and 3x the performance of PostgreSQL. It's built for the cloud with a distributed, fault-tolerant storage system, providing up to 15 low-latency read replicas and continuous backup to S3.",
          difficulty: "Application"
        },
        {
          question: "What database engines does Amazon RDS support?",
          options: [
            "Only MySQL",
            "Only PostgreSQL",
            "MySQL, PostgreSQL, MariaDB, Oracle, SQL Server, and Amazon Aurora",
            "Only DynamoDB"
          ],
          correct: 2,
          explanation: "Amazon RDS supports six database engines: MySQL, PostgreSQL, MariaDB, Oracle Database, SQL Server, and Amazon Aurora. This gives you flexibility to use the database engine you're familiar with.",
          difficulty: "Basic"
        },
        {
          question: "What is Amazon Aurora?",
          options: [
            "A NoSQL database service",
            "A MySQL and PostgreSQL compatible relational database built for the cloud",
            "A data warehouse service",
            "A key-value database"
          ],
          correct: 1,
          explanation: "Amazon Aurora is a MySQL and PostgreSQL compatible relational database built for the cloud. It combines the performance and availability of enterprise databases with the simplicity and cost-effectiveness of open source databases.",
          difficulty: "Basic"
        },
        {
          question: "What is Amazon Redshift primarily designed for?",
          options: [
            "Transactional database workloads",
            "Fully managed, petabyte-scale data warehouse service",
            "Key-value storage",
            "Document database storage"
          ],
          correct: 1,
          explanation: "Amazon Redshift is a fully managed, petabyte-scale data warehouse service. It's designed for analytics and business intelligence workloads that require querying large datasets.",
          difficulty: "Basic"
        },
        {
          question: "What is Amazon DynamoDB?",
          options: [
            "A relational database service",
            "A key-value and document database with single-digit millisecond performance at any scale",
            "A data warehouse service",
            "A file storage service"
          ],
          correct: 1,
          explanation: "Amazon DynamoDB is a key-value and document database that delivers single-digit millisecond performance at any scale. It's a fully managed NoSQL database service.",
          difficulty: "Basic"
        },
        {
          question: "Which database service would be best for a high-traffic web application that needs millisecond latency and automatic scaling?",
          options: [
            "Amazon RDS",
            "Amazon Redshift",
            "Amazon DynamoDB",
            "Amazon Aurora"
          ],
          correct: 2,
          explanation: "Amazon DynamoDB is designed for applications that need single-digit millisecond latency and automatic scaling. It's a fully managed NoSQL service that handles traffic spikes automatically.",
          difficulty: "Application"
        },
        {
          question: "What is a key advantage of Amazon Aurora over traditional RDS databases?",
          options: [
            "Lower cost",
            "Better performance and availability, built for the cloud",
            "Only supports MySQL",
            "No automatic backups"
          ],
          correct: 1,
          explanation: "Amazon Aurora combines the performance and availability of enterprise databases with the simplicity and cost-effectiveness of open source. It's built for the cloud and provides up to 5x better performance than MySQL and 3x better than PostgreSQL.",
          difficulty: "Application"
        },
        {
          question: "Which database service would you use for running complex analytical queries on large datasets?",
          options: [
            "Amazon DynamoDB",
            "Amazon RDS",
            "Amazon Redshift",
            "Amazon Aurora"
          ],
          correct: 2,
          explanation: "Amazon Redshift is a data warehouse service designed for running complex analytical queries on large datasets. It's optimized for analytics and business intelligence workloads.",
          difficulty: "Application"
        },
        {
          question: "What type of database is Amazon DynamoDB?",
          options: [
            "Relational database",
            "NoSQL database (key-value and document)",
            "Data warehouse",
            "Graph database"
          ],
          correct: 1,
          explanation: "Amazon DynamoDB is a NoSQL database service that supports both key-value and document data models. It's designed for applications that need consistent, single-digit millisecond latency.",
          difficulty: "Basic"
        },
        {
          question: "What does Amazon RDS automate for you?",
          options: [
            "Application code deployment",
            "Time-consuming database administration tasks like backups, patching, and monitoring",
            "Network configuration",
            "Security group management"
          ],
          correct: 1,
          explanation: "Amazon RDS automates time-consuming administration tasks including backups, software patching, monitoring, scaling, and replication. This allows you to focus on your applications rather than database management.",
          difficulty: "Application"
        },
        {
          question: "Which database service provides automatic scaling without manual intervention?",
          options: [
            "Amazon RDS only",
            "Amazon DynamoDB",
            "Amazon Redshift only",
            "All RDS databases"
          ],
          correct: 1,
          explanation: "Amazon DynamoDB provides automatic scaling without manual intervention. It can handle traffic spikes automatically, scaling up and down based on demand. RDS requires manual scaling or Auto Scaling configuration.",
          difficulty: "Application"
        },
        {
          question: "What is the primary use case for Amazon Redshift?",
          options: [
            "Transactional applications",
            "Online transaction processing (OLTP)",
            "Data warehousing and analytics",
            "Real-time gaming applications"
          ],
          correct: 2,
          explanation: "Amazon Redshift is designed for data warehousing and analytics workloads. It's optimized for complex analytical queries on large datasets, making it ideal for business intelligence and data analytics.",
          difficulty: "Application"
        },
        {
          question: "How does Amazon Aurora achieve high availability?",
          options: [
            "Through manual replication",
            "By automatically replicating data across multiple Availability Zones",
            "By using only one Availability Zone",
            "Through manual backups only"
          ],
          correct: 1,
          explanation: "Amazon Aurora automatically replicates data across multiple Availability Zones for high availability and durability. It can survive the loss of up to two data copies without affecting write availability.",
          difficulty: "Application"
        },
        {
          question: "What is a key difference between Amazon RDS and Amazon DynamoDB?",
          options: [
            "RDS is NoSQL; DynamoDB is relational",
            "RDS is relational; DynamoDB is NoSQL",
            "Both are relational databases",
            "Both are NoSQL databases"
          ],
          correct: 1,
          explanation: "Amazon RDS is a managed relational database service supporting SQL databases. Amazon DynamoDB is a fully managed NoSQL database service (key-value and document) with automatic scaling.",
          difficulty: "Critical Thinking"
        },
        {
          question: "Which database service would be best for storing user session data that needs to be accessed quickly with predictable performance?",
          options: [
            "Amazon Redshift",
            "Amazon RDS",
            "Amazon DynamoDB",
            "Amazon Aurora"
          ],
          correct: 2,
          explanation: "Amazon DynamoDB is ideal for use cases like session storage because it provides single-digit millisecond latency and automatic scaling. It's designed for applications that need fast, predictable performance.",
          difficulty: "Application"
        },
        {
          question: "How many pillars does the AWS Well-Architected Framework consist of?",
          options: [
            "Three pillars",
            "Four pillars",
            "Five pillars",
            "Six pillars"
          ],
          correct: 2,
          explanation: "The AWS Well-Architected Framework consists of five pillars: (1) Operational Excellence, (2) Security, (3) Reliability, (4) Performance Efficiency, and (5) Cost Optimization. Each pillar provides best practices for designing cloud architectures.",
          difficulty: "Basic"
        },
        {
          question: "Which pillar of the Well-Architected Framework focuses on running and monitoring systems to deliver business value?",
          options: [
            "Security",
            "Operational Excellence",
            "Reliability",
            "Performance Efficiency"
          ],
          correct: 1,
          explanation: "Operational Excellence focuses on running and monitoring systems to deliver business value and continually improving processes. Key practices include performing operations as code, making frequent small changes, and learning from operational events.",
          difficulty: "Application"
        },
        {
          question: "What does the Security pillar of the Well-Architected Framework emphasize?",
          options: [
            "Only encryption",
            "Protecting information, systems, and assets through risk assessments and mitigation strategies",
            "Only firewall configuration",
            "Only IAM policies"
          ],
          correct: 1,
          explanation: "The Security pillar focuses on protecting information, systems, and assets while delivering business value through risk assessments and mitigation strategies. This includes identity management, detective controls, infrastructure protection, data protection, and incident response.",
          difficulty: "Application"
        },
        {
          question: "What is the focus of the Reliability pillar?",
          options: [
            "Reducing costs",
            "Preventing and quickly recovering from failures to meet business demand",
            "Improving performance",
            "Automating deployments"
          ],
          correct: 1,
          explanation: "The Reliability pillar focuses on the ability to prevent and quickly recover from failures to meet business and customer demand. Key practices include testing recovery procedures, automatically recovering from failure, and scaling horizontally.",
          difficulty: "Application"
        },
        {
          question: "What does 'Mean Time Between Failures (MTBF)' measure?",
          options: [
            "Average time to repair a failure",
            "Total time in service divided by number of failures",
            "Percentage of uptime",
            "Number of failures per year"
          ],
          correct: 1,
          explanation: "Mean Time Between Failures (MTBF) is calculated as: total time in service / number of failures. It's related to reliability and is the sum of Mean Time To Failure (MTTF) + Mean Time To Repair (MTTR).",
          difficulty: "Application"
        },
        {
          question: "What does 'five nines' (99.999%) availability mean in terms of downtime per year?",
          options: [
            "About 5 minutes per year",
            "About 50 minutes per year",
            "About 5 hours per year",
            "About 8 hours per year"
          ],
          correct: 0,
          explanation: "Five nines (99.999%) availability means approximately 5.26 minutes of downtime per year. This is calculated as: (1 - 0.99999) × 365 days × 24 hours × 60 minutes = ~5.26 minutes.",
          difficulty: "Application"
        },
        {
          question: "What is the difference between fault tolerance and high availability?",
          options: [
            "They are the same thing",
            "Fault tolerance continues operating during failures through redundancy; high availability minimizes downtime",
            "High availability is more expensive",
            "Fault tolerance requires manual intervention"
          ],
          correct: 1,
          explanation: "Fault tolerance is the built-in redundancy that allows a system to continue operating properly during component failures. High availability focuses on minimizing downtime and ensuring systems remain operational with minimal human intervention. Both are related but distinct concepts.",
          difficulty: "Critical Thinking"
        },
        {
          question: "Which design principle is part of the Performance Efficiency pillar?",
          options: [
            "Apply security at all layers",
            "Democratize advanced technologies and go global in minutes",
            "Test recovery procedures",
            "Implement a strong identity foundation"
          ],
          correct: 1,
          explanation: "The Performance Efficiency pillar includes design principles like: democratize advanced technologies, go global in minutes, use serverless architectures, experiment more often, and have mechanical sympathy (understand how technologies work).",
          difficulty: "Application"
        },
        {
          question: "What does the Cost Optimization pillar focus on?",
          options: [
            "Spending the least money possible",
            "Running systems to deliver business value at the lowest price point",
            "Only using free tier services",
            "Avoiding all cloud costs"
          ],
          correct: 1,
          explanation: "Cost Optimization focuses on running systems to deliver business value at the lowest price point. It's about understanding spending, selecting appropriate resources, analyzing over time, and scaling to meet needs without overspending.",
          difficulty: "Application"
        },
        {
          question: "What does AWS Trusted Advisor provide?",
          options: [
            "Only security recommendations",
            "Real-time guidance across five categories: cost optimization, performance, security, fault tolerance, and service limits",
            "Only cost optimization tips",
            "Database optimization only"
          ],
          correct: 1,
          explanation: "AWS Trusted Advisor provides real-time guidance to help provision resources following AWS best practices across five categories: Cost Optimization, Performance, Security, Fault Tolerance, and Service Limits. It looks at your entire AWS environment.",
          difficulty: "Basic"
        },
        {
          question: "Which pillar includes the practice of 'performing operations as code'?",
          options: [
            "Security",
            "Operational Excellence",
            "Cost Optimization",
            "Reliability"
          ],
          correct: 1,
          explanation: "Operational Excellence includes the practice of performing operations as code, meaning you define your entire workload (applications and infrastructure) as code and update it with code. This enables consistency and reduces manual errors.",
          difficulty: "Application"
        },
        {
          question: "What is 'scalability' in the context of cloud architecture?",
          options: [
            "The ability to recover from failures",
            "The ability to accommodate increases in capacity needs without changing design",
            "The ability to reduce costs",
            "The ability to secure applications"
          ],
          correct: 1,
          explanation: "Scalability is the ability of an application to accommodate increases in capacity needs without changing the design. It allows systems to handle growth in users, data, or transaction volume by adding resources.",
          difficulty: "Application"
        }
      ]
    },
    
    module10: {
      title: "Module 10: Automatic Scaling and Monitoring",
      questions: [
        {
          question: "What does Elastic Load Balancing do?",
          options: [
            "Stores data across multiple regions",
            "Distributes incoming application or network traffic across multiple targets",
            "Monitors EC2 instance performance",
            "Manages database connections"
          ],
          correct: 1,
          explanation: "Elastic Load Balancing distributes incoming application or network traffic across multiple targets, such as EC2 instances, containers, and IP addresses, in single or multiple Availability Zones.",
          difficulty: "Basic"
        },
        {
          question: "What does Elastic Load Balancing distribute?",
          options: [
            "Only database queries",
            "Incoming application or network traffic across multiple targets",
            "Only storage requests",
            "Only monitoring data"
          ],
          correct: 1,
          explanation: "Elastic Load Balancing automatically distributes incoming application or network traffic across multiple targets, such as EC2 instances, containers, IP addresses, and Lambda functions, in single or multiple Availability Zones.",
          difficulty: "Basic"
        },
        {
          question: "At which OSI layer does an Application Load Balancer operate?",
          options: [
            "Layer 3 (Network)",
            "Layer 4 (Transport)",
            "Layer 7 (Application)",
            "Layer 2 (Data Link)"
          ],
          correct: 2,
          explanation: "Application Load Balancers operate at Layer 7 (Application layer), which enables them to inspect HTTP/HTTPS content and make intelligent routing decisions based on URL paths, hostnames, HTTP headers, and more.",
          difficulty: "Application"
        },
        {
          question: "What is an Application Load Balancer best suited for?",
          options: [
            "TCP and UDP traffic requiring extreme performance",
            "HTTP and HTTPS traffic with advanced routing capabilities for microservices",
            "Database connection pooling",
            "Network layer load balancing only"
          ],
          correct: 1,
          explanation: "Application Load Balancers are best for HTTP and HTTPS traffic. They provide advanced routing capabilities ideal for microservices and container-based architectures, allowing content-based routing and host-based routing.",
          difficulty: "Application"
        },
        {
          question: "At which OSI layer does a Network Load Balancer operate?",
          options: [
            "Layer 3 (Network)",
            "Layer 4 (Transport)",
            "Layer 7 (Application)",
            "Layer 5 (Session)"
          ],
          correct: 1,
          explanation: "Network Load Balancers operate at Layer 4 (Transport layer), routing traffic based on IP protocol data (TCP, UDP, TLS). They can handle millions of requests per second while maintaining ultra-low latencies.",
          difficulty: "Application"
        },
        {
          question: "When should you use a Network Load Balancer instead of an Application Load Balancer?",
          options: [
            "When you need HTTP routing",
            "When you need extreme performance for TCP/UDP traffic with ultra-low latency",
            "When you need content-based routing",
            "When you need to route based on HTTP headers"
          ],
          correct: 1,
          explanation: "Use Network Load Balancers when you need extreme performance, ultra-low latency, and are working with TCP, UDP, or TLS traffic. Use Application Load Balancers for HTTP/HTTPS traffic requiring advanced routing features.",
          difficulty: "Critical Thinking"
        },
        {
          question: "What does Amazon CloudWatch monitor?",
          options: [
            "Only EC2 instances",
            "AWS resources and applications running on AWS",
            "Only network traffic",
            "Only billing information"
          ],
          correct: 1,
          explanation: "Amazon CloudWatch monitors AWS resources and applications running on AWS. It collects and tracks metrics, logs, and events, providing data and actionable insights to monitor applications, respond to performance changes, and optimize resource utilization.",
          difficulty: "Basic"
        },
        {
          question: "What can CloudWatch alarms trigger?",
          options: [
            "Only email notifications",
            "SNS notifications and EC2 Auto Scaling or EC2 actions",
            "Only instance termination",
            "Only log file creation"
          ],
          correct: 1,
          explanation: "CloudWatch alarms can send notifications to Amazon SNS topics and perform EC2 Auto Scaling actions or EC2 actions (such as stop, terminate, reboot, or recover instances) automatically based on defined thresholds.",
          difficulty: "Application"
        },
        {
          question: "What types of alarms can you create in CloudWatch?",
          options: [
            "Only static threshold alarms",
            "Static threshold, anomaly detection, and metric math expression alarms",
            "Only anomaly detection alarms",
            "Only billing alarms"
          ],
          correct: 1,
          explanation: "CloudWatch supports three types of alarms: (1) Static threshold - based on a fixed value, (2) Anomaly detection - uses machine learning to detect unusual patterns, and (3) Metric math expression - combines multiple metrics with mathematical expressions.",
          difficulty: "Application"
        },
        {
          question: "What is Amazon EC2 Auto Scaling used for?",
          options: [
            "To manually add instances only",
            "To automatically add or remove EC2 instances based on defined conditions",
            "To monitor instance performance only",
            "To create AMIs automatically"
          ],
          correct: 1,
          explanation: "Amazon EC2 Auto Scaling automatically adds or removes EC2 instances according to conditions you define, helping maintain application availability and ensuring you have the right number of instances to handle your application load.",
          difficulty: "Basic"
        },
        {
          question: "What does an Auto Scaling Group contain?",
          options: [
            "Only a single EC2 instance",
            "A collection of EC2 instances treated as a logical grouping for automatic scaling",
            "Only load balancers",
            "Only CloudWatch alarms"
            ],
            correct: 1,
            explanation: "An Auto Scaling Group is a collection of EC2 instances treated as a logical grouping for automatic scaling and management. You specify minimum, maximum, and desired capacity, and Auto Scaling ensures the group maintains the right number of instances.",
            difficulty: "Basic"
            },
            {
            question: "What scaling options does EC2 Auto Scaling provide?",
            options: [
            "Only manual scaling",
            "Manual, scheduled, dynamic (on-demand), and predictive scaling",
            "Only dynamic scaling",
            "Only scheduled scaling"
            ],
            correct: 1,
            explanation: "EC2 Auto Scaling provides four scaling options: (1) Manual - adjust capacity manually, (2) Scheduled - scale based on schedule, (3) Dynamic/On-demand - scale based on real-time CloudWatch metrics, (4) Predictive - use ML to forecast and scale ahead of demand.",
            difficulty: "Application"
            },
            {
            question: "What happens when EC2 Auto Scaling detects an unhealthy instance?",
            options: [
            "It sends an email notification only",
            "It automatically replaces the instance without intervention",
            "It stops monitoring that instance",
            "It requires manual replacement"
            ],
            correct: 1,
            explanation: "EC2 Auto Scaling automatically detects impaired EC2 instances and unhealthy applications, then replaces those instances without your intervention. This helps maintain your desired capacity and application availability.",
            difficulty: "Application"
            },
            {
            question: "What is the difference between EC2 Auto Scaling and AWS Auto Scaling?",
            options: [
            "They are identical services",
            "EC2 Auto Scaling is for EC2 only; AWS Auto Scaling works across multiple AWS services",
            "AWS Auto Scaling is only for databases",
            "EC2 Auto Scaling is deprecated"
            ],
            correct: 1,
            explanation: "EC2 Auto Scaling focuses specifically on EC2 instances. AWS Auto Scaling is a broader service that monitors applications and automatically adjusts capacity for multiple AWS resources (EC2, ECS, DynamoDB, Aurora) through a unified interface.",
            difficulty: "Critical Thinking"
            },
            {
            question: "How can you monitor Elastic Load Balancing?",
            options: [
            "Only through CloudWatch metrics",
            "Through CloudWatch metrics, access logs, and CloudTrail logs",
            "Only through access logs",
            "Monitoring is not available"
            ],
            correct: 1,
            explanation: "You can monitor Elastic Load Balancing through: (1) Amazon CloudWatch metrics for performance data, (2) Access logs that capture detailed request information, and (3) AWS CloudTrail logs that track API calls made to the load balancer.",
            difficulty: "Application"
            },
            {
            question: "What actions can an Auto Scaling Group perform?",
            options: [
            "Only launch instances (scale out)",
            "Launch instances (scale out) and terminate instances (scale in)",
            "Only terminate instances (scale in)",
            "Only monitor instances"
            ],
            correct: 1,
            explanation: "An Auto Scaling Group can perform both scale out actions (launch new instances to handle increased load) and scale in actions (terminate instances when demand decreases) based on your defined conditions, maintaining optimal capacity.",
            difficulty: "Application"
            },
            {
            question: "What is the relationship between CloudWatch and Auto Scaling?",
            options: [
            "They are unrelated services",
            "CloudWatch provides metrics that Auto Scaling uses to make scaling decisions",
            "Auto Scaling monitors CloudWatch",
            "They cannot work together"
            ],
            correct: 1,
            explanation: "CloudWatch and Auto Scaling work together: CloudWatch collects and tracks metrics (like CPU utilization, network traffic, custom metrics), and Auto Scaling uses these CloudWatch metrics to make intelligent decisions about when to scale your resources in or out.",
            difficulty: "Critical Thinking"
            },
        {
          question: "At which OSI layer does an Application Load Balancer operate?",
          options: [
            "Layer 3 - Network",
            "Layer 4 - Transport",
            "Layer 7 - Application",
            "Layer 2 - Data Link"
          ],
          correct: 2,
          explanation: "Application Load Balancers operate at the application layer (OSI model layer 7), which allows them to make routing decisions based on HTTP/HTTPS content, such as URL path or host headers.",
          difficulty: "Application"
        },
        {
          question: "What is an Application Load Balancer best suited for?",
          options: [
            "TCP and UDP traffic only",
            "Load balancing of HTTP and HTTPS traffic with advanced routing capabilities",
            "Database load balancing",
            "Storage load balancing"
          ],
          correct: 1,
          explanation: "Application Load Balancers are best for load balancing HTTP and HTTPS traffic. They provide advanced routing capabilities and are ideal for microservices and container-based architectures.",
          difficulty: "Application"
        },
        {
          question: "At which OSI layer does a Network Load Balancer operate?",
          options: [
            "Layer 3 - Network",
            "Layer 4 - Transport",
            "Layer 7 - Application",
            "Layer 2 - Data Link"
          ],
          correct: 1,
          explanation: "Network Load Balancers operate at the transport layer (OSI model layer 4), routing traffic to targets based on IP protocol data. They can handle millions of requests per second with ultra-low latencies.",
          difficulty: "Application"
        },
        {
          question: "What is a Network Load Balancer best suited for?",
          options: [
            "HTTP and HTTPS traffic only",
            "Load balancing of TCP, UDP, and TLS traffic where extreme performance is required",
            "Application-level routing",
            "Content-based routing"
          ],
          correct: 1,
          explanation: "Network Load Balancers are best for load balancing TCP, UDP, and TLS traffic where extreme performance is required. They can handle millions of requests per second while maintaining ultra-low latencies.",
          difficulty: "Application"
        },
        {
          question: "What does Amazon CloudWatch monitor?",
          options: [
            "Only EC2 instances",
            "AWS resources and applications that run on AWS",
            "Only database performance",
            "Only network traffic"
          ],
          correct: 1,
          explanation: "Amazon CloudWatch monitors AWS resources and applications that run on AWS. It collects and tracks metrics, collects and monitors log files, and sets alarms.",
          difficulty: "Basic"
        },
        {
          question: "What can CloudWatch alarms do?",
          options: [
            "Only send email notifications",
            "Send notifications to Amazon SNS topics and perform EC2 Auto Scaling or EC2 actions",
            "Only restart EC2 instances",
            "Only log events"
          ],
          correct: 1,
          explanation: "CloudWatch alarms can send notifications to Amazon SNS topics and automatically perform EC2 Auto Scaling actions or EC2 actions (like stop, terminate, or reboot instances) based on metric thresholds.",
          difficulty: "Application"
        },
        {
          question: "What types of alarms can you create in CloudWatch?",
          options: [
            "Only static threshold alarms",
            "Static threshold, anomaly detection, and metric math expression alarms",
            "Only anomaly detection alarms",
            "Only metric math alarms"
          ],
          correct: 1,
          explanation: "You can create CloudWatch alarms based on: (1) static thresholds, (2) anomaly detection, and (3) metric math expressions. This provides flexibility in monitoring different types of metrics and conditions.",
          difficulty: "Application"
        },
        {
          question: "What is Amazon EC2 Auto Scaling used for?",
          options: [
            "Manually adding EC2 instances",
            "Automatically adding or removing EC2 instances according to conditions you define",
            "Only removing EC2 instances",
            "Only monitoring EC2 instances"
          ],
          correct: 1,
          explanation: "Amazon EC2 Auto Scaling enables you to automatically add or remove EC2 instances according to conditions that you define. This helps maintain application availability and scale capacity as needed.",
          difficulty: "Basic"
        },
        {
          question: "What does an Auto Scaling Group contain?",
          options: [
            "A single EC2 instance",
            "A collection of EC2 instances treated as a logical grouping for automatic scaling and management",
            "Only load balancers",
            "Only CloudWatch alarms"
          ],
          correct: 1,
          explanation: "An Auto Scaling Group is a collection of EC2 instances that are treated as a logical grouping for the purposes of automatic scaling and management. You can specify minimum, maximum, and desired capacity.",
          difficulty: "Basic"
        },
        {
          question: "What scaling options does EC2 Auto Scaling provide?",
          options: [
            "Only manual scaling",
            "Manual, scheduled, dynamic (on-demand), and predictive scaling",
            "Only scheduled scaling",
            "Only dynamic scaling"
          ],
          correct: 1,
          explanation: "EC2 Auto Scaling provides several scaling options: (1) Manual - you manually adjust capacity, (2) Scheduled - scale based on time, (3) Dynamic/On-demand - scale based on CloudWatch metrics, (4) Predictive - use machine learning to forecast demand.",
          difficulty: "Application"
        },
        {
          question: "What does EC2 Auto Scaling do when it detects an impaired or unhealthy EC2 instance?",
          options: [
            "Nothing, it only monitors",
            "Replaces the instance without your intervention",
            "Sends an email notification only",
            "Stops monitoring that instance"
          ],
          correct: 1,
          explanation: "EC2 Auto Scaling detects impaired EC2 instances and unhealthy applications, and automatically replaces those instances without your intervention. This helps maintain application availability.",
          difficulty: "Application"
        },
        {
          question: "What is AWS Auto Scaling?",
          options: [
            "The same as EC2 Auto Scaling",
            "A service that monitors applications and automatically adjusts capacity for multiple AWS resources",
            "Only for EC2 instances",
            "A monitoring service only"
          ],
          correct: 1,
          explanation: "AWS Auto Scaling monitors your applications and automatically adjusts capacity to maintain steady, predictable performance at the lowest possible cost. It can scale multiple AWS resources, not just EC2.",
          difficulty: "Application"
        },
        {
          question: "How does Elastic Load Balancing help with scaling?",
          options: [
            "It doesn't help with scaling",
            "It scales your load balancer as traffic to your application changes over time",
            "It only distributes traffic",
            "It only monitors traffic"
          ],
          correct: 1,
          explanation: "Elastic Load Balancing automatically scales your load balancer as traffic to your application changes over time. It can handle the varying load of your application traffic.",
          difficulty: "Application"
        },
        {
          question: "What can you monitor with CloudWatch?",
          options: [
            "Only standard metrics",
            "Standard metrics, custom metrics, and log files",
            "Only custom metrics",
            "Only log files"
          ],
          correct: 1,
          explanation: "CloudWatch can collect and track standard metrics (provided by AWS services), custom metrics (that you define), and log files. It provides a comprehensive monitoring solution for your AWS resources and applications.",
          difficulty: "Application"
        },
        {
          question: "What is the relationship between CloudWatch and EC2 Auto Scaling?",
          options: [
            "They are unrelated services",
            "CloudWatch provides metrics that Auto Scaling uses to make scaling decisions",
            "Auto Scaling provides metrics to CloudWatch",
            "They are the same service"
          ],
          correct: 1,
          explanation: "CloudWatch collects metrics from your EC2 instances and other AWS resources. EC2 Auto Scaling uses these CloudWatch metrics (like CPU utilization) to make decisions about when to scale in or scale out.",
          difficulty: "Critical Thinking"
        },
        {
          question: "What actions can an Auto Scaling Group perform?",
          options: [
            "Only scale out (launch instances)",
            "Scale out (launch instances) and scale in (terminate instances)",
            "Only scale in (terminate instances)",
            "Only monitor instances"
          ],
          correct: 1,
          explanation: "An Auto Scaling Group can perform both scale out actions (launch new instances) and scale in actions (terminate instances) based on the conditions you define, such as CloudWatch metrics or schedules.",
          difficulty: "Application"
        },
        {
          question: "How can you monitor Elastic Load Balancing?",
          options: [
            "Only through CloudWatch",
            "Through Amazon CloudWatch, access logs, and AWS CloudTrail logs",
            "Only through access logs",
            "Only through CloudTrail"
          ],
          correct: 1,
          explanation: "You can monitor Elastic Load Balancing through: (1) Amazon CloudWatch metrics, (2) access logs that capture detailed information about requests, and (3) AWS CloudTrail logs that track API calls.",
          difficulty: "Application"
        }
      ]
    }
  };

  const handleModuleSelect = (moduleKey) => {
    setSelectedModule(moduleKey);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setQuizComplete(false);
    setStarted(false);
  };

  const handleStart = () => {
    setStarted(true);
  };

  const handleAnswerSelect = (index) => {
    if (showExplanation || quizComplete) return;
    setSelectedAnswer(index);
  };

  const handleSubmit = () => {
    if (selectedAnswer === null) return;
    
    const currentQ = modules[selectedModule].questions[currentQuestion];
    if (selectedAnswer === currentQ.correct) {
      setScore(score + 1);
    }
    setShowExplanation(true);
  };

  const handleNext = () => {
    if (currentQuestion < modules[selectedModule].questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setQuizComplete(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setQuizComplete(false);
    setStarted(false);
  };

  const handleBackToModules = () => {
    setSelectedModule(null);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setQuizComplete(false);
    setStarted(false);
  };

  if (!selectedModule) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">AWS Cloud Practitioner Quiz</h1>
            <p className="text-gray-600">Test your knowledge across different modules</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(modules).map(([key, module]) => (
              <div
                key={key}
                onClick={() => handleModuleSelect(key)}
                className="bg-white rounded-lg shadow-lg p-6 cursor-pointer hover:shadow-xl transition-shadow border-l-4 border-indigo-500"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <BookOpen className="text-indigo-500 w-8 h-8" />
                    <div>
                      <h2 className="text-xl font-semibold text-gray-800">{module.title}</h2>
                      <p className="text-gray-500 text-sm mt-1">
                        {module.questions.length} questions
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="text-gray-400 w-6 h-6" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const currentModule = modules[selectedModule];
  const currentQ = currentModule.questions[currentQuestion];
  const totalQuestions = currentModule.questions.length;
  const progress = ((currentQuestion + 1) / totalQuestions) * 100;

  if (!started) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
        <div className="max-w-3xl mx-auto">
          <button
            onClick={handleBackToModules}
            className="mb-6 flex items-center text-indigo-600 hover:text-indigo-800 transition-colors"
          >
            <Home className="w-5 h-5 mr-2" />
            Back to Modules
          </button>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{currentModule.title}</h1>
            <div className="space-y-4 mb-8">
              <p className="text-gray-600">
                <strong>Total Questions:</strong> {totalQuestions}
              </p>
              <p className="text-gray-600">
                <strong>Difficulty Levels:</strong> Basic, Application, Critical Thinking
              </p>
            </div>
            <button
              onClick={handleStart}
              className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
            >
              Start Quiz
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (quizComplete) {
    const percentage = Math.round((score / totalQuestions) * 100);
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="mb-6">
              {percentage >= 80 ? (
                <Award className="w-20 h-20 text-yellow-500 mx-auto mb-4" />
              ) : percentage >= 60 ? (
                <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-4" />
              ) : (
                <XCircle className="w-20 h-20 text-red-500 mx-auto mb-4" />
              )}
            </div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Quiz Complete!</h1>
            <div className="text-4xl font-bold text-indigo-600 mb-2">
              {score} / {totalQuestions}
            </div>
            <div className="text-2xl text-gray-600 mb-8">
              {percentage}%
            </div>
            <div className="flex space-x-4 justify-center">
              <button
                onClick={handleRestart}
                className="bg-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-indigo-700 transition-colors flex items-center"
              >
                <RefreshCw className="w-5 h-5 mr-2" />
                Restart Quiz
              </button>
              <button
                onClick={handleBackToModules}
                className="bg-gray-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-gray-700 transition-colors flex items-center"
              >
                <Home className="w-5 h-5 mr-2" />
                Back to Modules
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-3xl mx-auto">
        <button
          onClick={handleBackToModules}
          className="mb-6 flex items-center text-indigo-600 hover:text-indigo-800 transition-colors"
        >
          <Home className="w-5 h-5 mr-2" />
          Back to Modules
        </button>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-600">
                Question {currentQuestion + 1} of {totalQuestions}
              </span>
              <span className="text-sm font-medium text-gray-600">
                Score: {score} / {currentQuestion + (showExplanation ? 1 : 0)}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-gray-800">{currentQ.question}</h2>
              <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                currentQ.difficulty === 'Basic' ? 'bg-green-100 text-green-800' :
                currentQ.difficulty === 'Application' ? 'bg-yellow-100 text-yellow-800' :
                'bg-red-100 text-red-800'
              }`}>
                {currentQ.difficulty}
              </span>
            </div>

            <div className="space-y-3 mb-6">
              {currentQ.options.map((option, index) => {
                let buttonClass = "w-full text-left p-4 rounded-lg border-2 transition-all ";
                
                if (showExplanation) {
                  if (index === currentQ.correct) {
                    buttonClass += "bg-green-100 border-green-500 text-green-800";
                  } else if (index === selectedAnswer && index !== currentQ.correct) {
                    buttonClass += "bg-red-100 border-red-500 text-red-800";
                  } else {
                    buttonClass += "bg-gray-50 border-gray-300 text-gray-600";
                  }
                } else {
                  if (selectedAnswer === index) {
                    buttonClass += "bg-indigo-100 border-indigo-500 text-indigo-800";
                  } else {
                    buttonClass += "bg-white border-gray-300 text-gray-700 hover:border-indigo-300 hover:bg-indigo-50";
                  }
                }

                return (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(index)}
                    disabled={showExplanation}
                    className={buttonClass}
                  >
                    <div className="flex items-center">
                      {showExplanation && index === currentQ.correct && (
                        <CheckCircle className="w-5 h-5 mr-3 text-green-600" />
                      )}
                      {showExplanation && index === selectedAnswer && index !== currentQ.correct && (
                        <XCircle className="w-5 h-5 mr-3 text-red-600" />
                      )}
                      <span>{option}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {showExplanation && (
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded mb-6">
                <p className="text-gray-700">
                  <strong>Explanation:</strong> {currentQ.explanation}
                </p>
              </div>
            )}

            <div className="flex justify-end">
              {!showExplanation ? (
                <button
                  onClick={handleSubmit}
                  disabled={selectedAnswer === null}
                  className="bg-indigo-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-indigo-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                >
                  Submit Answer
                </button>
              ) : (
                <button
                  onClick={handleNext}
                  className="bg-indigo-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
                >
                  {currentQuestion < totalQuestions - 1 ? 'Next Question' : 'Finish Quiz'}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizApp;