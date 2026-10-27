export interface ExperienceItem {
  company: string;
  role: string;
  team?: string;
  location: string;
  period: string;
  summary: string;
  highlights: string[];
  technologies: string[];
  featured?: boolean;
}

export interface EducationItem {
  institution: string;
  degree: string;
  field?: string;
  period?: string;
  location: string;
  highlights?: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle?: string;
  period: string;
  description?: string;
  bullets: string[];
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface PortfolioData {
  personal: {
    name: string;
    role: string;
    institution: string;
    location: string;
    status: string;
    headline: string;
    bio: string;
    email: string;
    github: string;
    linkedin: string;
    codeforces?: string;
    codeforcesBadge?: string;
    resumeUrl: string;
    avatarUrl?: string;
  };
  experience: ExperienceItem[];
  education: EducationItem[];
  skills: SkillCategory[];
  projects: ProjectItem[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Rithish Reddy",
    role: "Software Engineering & Systems Developer",
    institution: "IIT Ropar",
    location: "India",
    status: "Ex-Software Engineering Intern @ Google",
    codeforcesBadge: "Codeforces Expert",
    headline: `I’m driven by curiosity and a love for solving problems that push me to think deeper. From system design to AI agents, I enjoy understanding complex systems from first principles and turning ideas into elegant solutions. I’m always exploring unfamiliar concepts, challenging assumptions, and looking for problems that teach me something new.`,
    bio: "Computer Science undergraduate at Indian Institute of Technology, Ropar. Passionate about distributed systems, backend infrastructure, concurrency, and building production-grade software that scales gracefully.",
    email: "vrithishreddychamala06@gmail.com",
    github: "https://github.com/vrithish06",
    linkedin: "https://www.linkedin.com/in/venkata-rithish-reddy-chamala/",
    codeforces: "https://codeforces.com/profile/vrithish06",
    resumeUrl: "/resume.pdf",
    avatarUrl: "/profile.png",
  },
  experience: [
    {
      company: "Google",
      role: "Software Engineering Intern",
      team: "Google Ads",
      location: "Bangalore, India",
      period: "May 2026 – Aug 2026",
      summary: "Working with cross-product infrastructure spanning YouTube, Google Ads, and Google Merchant Center.",
      highlights: [
        "Designed and engineered a distributed batch pipeline to automatically expire and revoke fine-grained account permissions between YouTube and Google Ads, enforcing least privilege and data security protocols at scale.",
        "Developed event-driven asynchronous processors to establish automatic, implicit account linking between YouTube and Google Ads whenever a product from Google Merchant Center (GMC) is tagged in a YouTube video.",
        "Identified and resolved a critical concurrency bug in production asynchronous processors, improving throughput and reliability across distributed workflows.",
      ],
      technologies: ["Distributed Systems", "Concurrency", "Protocol Buffers", "Asynchronous Pipelines", "Google Cloud", "C++ / Java"],
      featured: true,
    },
  ],
  education: [
    {
      institution: "Indian Institute of Technology, Ropar (IIT Ropar)",
      degree: "Bachelor of Technology (B.Tech)",
      location: "Ropar, Punjab, India",
      period: "2023 – 2027",
      highlights: [
        "Core Coursework: Data Structures & Algorithms, Operating Systems, Computer Architecture, Database Management, Computer Networks.",
        "Active member of coding and robotics societies.",
      ],
    },
  ],
  skills: [
    {
      title: "Languages",
      skills: ["C++", "Java", "Python", "SQL", "C", "JavaScript", "HTML", "CSS", "Prolog", "Scheme"],
    },
    {
      title: "Frameworks & Backend",
      skills: ["React", "Node.js", "Express", "Next.js", "Prisma ORM", "Nginx", "Keycloak SSO", "LTI 1.3"],
    },
    {
      title: "Databases & Storage",
      skills: ["PostgreSQL", "MongoDB", "SQL"],
    },
    {
      title: "Systems & Infrastructure",
      skills: ["Docker", "Protocol Buffers", "Git", "RISC-V", "Google Colab", "Distributed Systems", "Concurrency"],
    },
  ],
  projects: [
    {
      id: "leave-travel-system",
      title: "Leave and Travel Management System",
      period: "Jan 2026 – May 2026",
      subtitle: "Deployed at IIT Ropar",
      bullets: [
        "Built and deployed at IIT Ropar, enabling institute staff to submit, track, and approve leave and travel requests through a centralized, role-based digital workflow, replacing manual paper processes.",
        "Engineered an extensible framework enabling code-free workflow creation, with configurable multi-level approvals, acting-role delegation, OTP + Google OAuth authentication, and automated PDF generation.",
        "Enabled admins to monitor real-time analytics, security events, audit logs, and per-workflow comment visibility, ensuring full operational transparency across every approval stage.",
      ],
      technologies: ["Next.js", "Express.js", "Prisma ORM", "PostgreSQL", "Nginx", "Keycloak SSO"],
      githubUrl: "https://github.com/kumarnaidudadi/DEP26-Z02-LTMS/tree/New_Workflow",
      featured: true,
    },
    {
      id: "optimal-route-system",
      title: "Optimal Route Managing System",
      period: "Jan 2026 – May 2026",
      subtitle: "Data Structures & Algorithms Course Project under Dr. Anil Shukla",
      bullets: [
        "Used A* Search and Red-Black Trees to find optimal paths in strongly connected graphs using real-time traffic data.",
        "Simulated live traffic conditions via random weight updates for route cost.",
        "Added collaborative features like 'Avoided Route' for improved user configurability.",
      ],
      technologies: ["A* Search", "Red-Black Trees", "Graph Algorithms", "C++", "Data Structures"],
      githubUrl: "https://github.com/PolisettyTharunSai/project---optimal-route-managing-system",
      featured: true,
    },
    {
      id: "coursexp-lti-tool",
      title: "CourseXP - Gamified LTI Learning Tool",
      period: "Jan 2026 – May 2026",
      subtitle: "LMS Gamification & Peer-Help Marketplace",
      bullets: [
        "Built a full-stack gamification platform that integrates into any LMS (Canvas, Moodle) via LTI 1.3, allowing students to earn Brownie Points for on-time submissions, course milestones, and peer help sessions without requiring a separate login.",
        "Engineered an automated point system using cron jobs and webhooks to track deadlines and course progress, updating balances atomically with idempotency guards to prevent duplicate awards.",
        "Built a Brownie point based peer-help marketplace for 1-on-1 doubt sessions, secured the LTI launch flow using RS256 JWT verification, and a dynamic registry supporting new LMS platforms without code changes.",
      ],
      technologies: ["React", "Express.js", "MongoDB", "Node.js", "TypeScript", "LTI 1.3"],
      githubUrl: "https://github.com/vrithish06/LTI_System",
      featured: true,
    },
  ],
};
