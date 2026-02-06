export const personalData = {
    profile: {
        name: "Panshul Dixit",
        title: "Software Development Engineer - 2",
        image: "/images/profile.jpg",
    },

    contact: {
        company: "Groww",
        companyUrl: "https://www.linkedin.com/company/groww.in/",
        location: "Bengaluru, India",
        locationUrl: "https://www.google.com/maps/place/Bengaluru,+Karnataka",
        email: "contact@panshul.dev",
    },

    social: {
        github: "https://github.com/panshuldixit",
        linkedin: "https://www.linkedin.com/in/panshuldixit",
        leetcode: "https://leetcode.com/u/panshuldixit",
    },

    about: "I’m a backend Software Development Engineer (SDE-2) at Groww, building high-scale fintech systems across payments and Futures & Options. I work on solutioning, execution, and production monitoring, with a strong focus on scalable and reliable backend design.",

    experience: [
        {
            role: "Software Development Engineer - 2",
            shortRole: "SDE-2",
            company: "Groww",
            fromDate: "01/04/2025",
            toDate: null,
            description: "Building FnO\n• Contributing in FnO Discovery Pod – responsible for solutionising, execution, and monitoring.\n• Designed and built the FnO Screener, a scalable system powering all key discovery features for FnO traders.\n• Consolidated many services into a unified discovery platform, reducing tech debt and infra cost.\n• Driving architectural discussions.",
        },
        {
            role: "Software Development Engineer - 1",
            shortRole: "SDE-1",
            company: "Groww",
            fromDate: "05/06/2023",
            toDate: "31/03/2025",
            description: "• Built and launched core systems for Groww's Bill Payments platform – including Billers V2, Subscription & Management system, and Auto-fetch.\n• Developed JSONata-based param transformers and built MR V2 system.\n• Engaged in collaboration with third-party vendors and internal teams to ensure seamless service delivery.\n• Shifted to the FnO team, where I migrated aggregation logic to Cloudflare Workers, reducing latency by 67%.\n• Built real-time Gainers/Losers and Top Traded Contracts services using Redis ZSets.",
        },
        {
            role: "Software Development Intern",
            shortRole: "SDE Intern",
            company: "Groww",
            fromDate: "02/01/2023",
            toDate: "02/06/2023",
            description: "• Implemented secure encryption/decryption for UPI PII data across account management flows.\n• Built the Complaint Management System for BBPS, along with reusable SOP flows for Ops.\n• Developed the core Biller Service and My Plans module, powering plan discovery for prepaid recharges.",
        },
        {
            role: "Software Development Intern",
            shortRole: "SDE Intern",
            company: "Groww",
            fromDate: "11/05/2022",
            toDate: "29/07/2022",
            description: "• Migrated all async messaging flows from RabbitMQ to Kafka in mandate systems.\n• Built UPI Mandate service from scratch using gRPC – first of its kind at Groww.\n• Gained hands-on experience in real-world production systems and scalable backend design.",
        },
    ],

    technologies: [
        "GraphQL",
        "Redis",
        "Spring Boot",
        "Kafka",
        "Cloudflare Workers",
        "MySQL",
        "Caffeine",
        "Cloudflare",
    ],

    education: {
        degree: "B.Tech",
        institution: "Shri G S Institute of Technology & Science",
        period: "2019 - 2023",
        description: "Specialized in Electronics and Telecommunications Engineering.",
    },
};
