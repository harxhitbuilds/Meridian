import {
  IconBrandDiscord,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconDatabase,
  IconMail,
  IconSparkles,
  IconTerminal,
} from "@tabler/icons-react";

export const heroConfig = {
  badgeContent: "✨ #1 in Gen AI category F6S",
  heroHeading: "Auditable context layer for your AI agents.",
  heroPara:
    "Memory, data, intent, and everything in between.Launch production-ready AI agents 20x faster.",
  ctaButton: {
    icon1: IconTerminal,
    icon2: IconSparkles,
    label: "Try Meridian",
  },
  supportedPara: "Supported in Python, JavaScript, Java, and more",
};

export const companiesConfig = [
  {
    logo: "/assets/companies/aft.webp",
  },
  {
    logo: "/assets/companies/entrepreneurfirst.webp",
  },
  {
    logo: "/assets/companies/hyundai.webp",
  },
  {
    logo: "/assets/companies/microsoft.webp",
  },
  {
    logo: "/assets/companies/texasinstruments.webp",
  },
  {
    logo: "/assets/companies/toyota.webp",
  },
];

export const howtouseconfig = {
  leftSection: [
    {
      heading: "Context API",
      para: "Manage context data with user and organization-level access control.",
    },
    {
      heading: "Audit Trails",
      para: "Record and query actions across workflows to maintain compliance and traceability.",
    },
    {
      heading: "Integrations",
      para: "Connect with your existing tools and data sources through secure connectors and SDKs.",
    },
  ],
  rightSection: [
    {
      code: `import { Client } from '@meridian/sdk';
const client = new Client({ apiKey: process.env.MERIDIAN_API_KEY });

await client.context.upsert({
  userId: 'user_123',
  orgId: 'org_456',
  data: { cart: ['item1'], prefs: { theme: 'dark' } },
  merge: true,
});

await client.context.patch({
  userId: 'user_123',
  orgId: 'org_456',
  ops: [{ op: 'push', path: 'cart', value: 'sku-057' }],
});

const ctx = await client.context.get({ userId: 'user_123' });
console.log('context:', JSON.stringify(ctx, null, 2));`,
    },
    {
      code: `await client.audits.record({
  actor: 'user_123',
  action: 'cart.add',
  resource: 'cart:user_123',
  meta: { sku: 'sku-057' },
});

await client.audits.record({
  actor: 'system',
  action: 'cart.recalculate',
  resource: 'cart:user_123',
});

const events = await client.audits.query({ resource: 'cart:user_123', limit: 10 });
console.log('recent audits:', events.items?.length);`,
    },
    {
      code: `await client.integrations.connect('s3', {
  bucket: 'my-bucket',
  region: 'us-east-1',
  credentials: { accessKeyId: process.env.AWS_KEY, secretAccessKey: process.env.AWS_SECRET },
});

await client.integrations.push('s3', {
  path: '/backups/2026-02-18.json',
  payload: { snapshot: 'example', ts: Date.now() },
  onProgress: (p) => console.debug('upload', Math.round(p.percent * 100) + '%'),
});

console.log('Integration push started');`,
    },
  ],
};

export const statisticsConfig = [
  {
    number: "5K+",
    label: "Developers",
  },
  {
    number: "500+",
    label: "Companies",
  },
  {
    number: "100+",
    label: "Integrations",
  },
  {
    number: "99.99%",
    label: "Uptime",
  },
];

export const featuresConfig = [
  {
    icon: IconDatabase,
    heading: "Context API",
    para: "Manage context data with user and organization-level access control.",
    label: "Learn More",
  },
  {
    icon: IconTerminal,
    heading: "Integrations",
    para: "Prebuilt connectors and SDKs to sync your data with external systems securely.",
    label: "Learn More",
  },
  {
    icon: IconDatabase,
    heading: "Observability",
    para: "Built-in metrics to monitor agent behavior and performance in production.",
    label: "Learn More",
  },
];

export const faqConfig = [
  {
    question: "What is Meridian AI",
    answer:
      "Meridian AI is a context engine that provides AI applications with persistent memory, business data, and operational context so agents remain accurate, reliable, and production-ready. It is a standalone context layer that can be integrated into your stack through our APIs, SDKs and MCPs.",
  },
  {
    question: "How do I get started with Meridian?",
    answer:
      "Sign up for an account, create an API key, and follow the quickstart in our docs. We provide SDKs and examples to get a minimal integration running in minutes.",
  },
  {
    question: "Which languages and frameworks are supported?",
    answer:
      "Official SDKs and examples are available for JavaScript/TypeScript and Python, with community and enterprise SDKs for Java and other languages. REST and gRPC endpoints work with any platform.",
  },
  {
    question: "How is my data stored and secured?",
    answer:
      "Data is encrypted in transit (TLS) and at rest. Access is role-based with org/user scoping, audit logs, and optional customer-managed keys for additional control.",
  },
  {
    question: "What is the pricing and billing model?",
    answer:
      "We offer a usage-based model with free tier limits and paid plans for production usage. Enterprise plans include SLA, custom integrations, and volume discounts — contact sales for details.",
  },
];

export type Testimonial = {
  profile: string;
  name: string;
  username: string;
  tweet: string;
  variant?: "short" | "medium" | "long";
  media?: string;
};

export const testimonialsConfig: { para: string; tweets: Testimonial[] } = {
  para: "A sneak peek from the community - what they think about Meridian",
  tweets: [
    {
      profile:
        "https://images.unsplash.com/photo-1654110455429-cf322b40a906?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D",
      name: "Krish Jaiswal",
      username: "@venky1701",
      tweet:
        "Meridian improved our context handling across sessions — it remembers uploads, chat state and metadata reliably. Integration was straightforward and reduced debugging time in production by a lot.",
      variant: "medium",
    },
    {
      profile:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&auto=format&fit=crop&q=60",
      name: "Lina Park",
      username: "@linap",
      tweet:
        "Excellent ergonomics and clear SDKs. We integrated the context API in under a day and saw immediate improvements in agent consistency and fewer false-retries.",
      variant: "medium",
    },
    {
      profile:
        "https://images.unsplash.com/photo-1545996124-1b4b4d26d4c1?w=600&auto=format&fit=crop&q=60",
      name: "Marco Silva",
      username: "@marcos",
      tweet:
        "Plugged Meridian into our pipeline to sync ETL snapshots and audit events. Connectors worked first try and the audit trails made incident investigatons far simpler.",
      variant: "medium",
      media:
        "https://images.unsplash.com/photo-1503602642458-232111445657?w=1200&auto=format&fit=crop&q=60",
    },
    {
      profile:
        "https://images.unsplash.com/photo-1628157588553-3d3f4abf0d2a?w=600&auto=format&fit=crop&q=60",
      name: "Aisha Rahman",
      username: "@aishatech",
      tweet:
        "We migrated our agents and the dialog consistency improved noticeably. The SDKs and clear audit logs helped us debug flows quickly and ship with confidence.",
      variant: "medium",
    },
    {
      profile:
        "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=600&auto=format&fit=crop&q=60",
      name: "DevBot",
      username: "@devbot",
      tweet:
        "Small footprint and fast setup. Meridian gives consistent context lookup and reliable observability — great for rapid prototyping and production rollouts.",
      variant: "medium",
      media:
        "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1200&auto=format&fit=crop&q=60",
    },
    {
      profile:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&auto=format&fit=crop&q=60",
      name: "Santiago Cruz",
      username: "@santi_dev",
      tweet:
        "Meridian made reproducing tricky stateful bugs effortless — session snapshots + audit trails gave us the context we needed to fix regressions fast. Deployment confidence is way up.",
      variant: "medium",
    },
  ],
};

export const ctaConfig = {
  heading: "We'd love to hear from you!",
  description:
    "Share your feedback with us - tell us what you think about Meridian Leave a review, suggest a feature, or tweet us your thoughts.",
  para: "We read every message, keep it coming!",
  button: "Tweet @meridian",
};

export const footerConfig = {
  description:
    "Meridian — auditable context & memory layer for production AI agents.",
  email: "hello@getmeridian.ai",
  socials: [
    {
      icon: IconBrandGithub,
      href: "https://github.com/your-org",
    },
    {
      icon: IconBrandTwitter,
      href: "https://twitter.com/yourhandle",
    },
    {
      icon: IconBrandLinkedin,
      href: "https://www.linkedin.com/company/your-company",
    },
    {
      icon: IconMail,
      href: "mailto:hello@getmeridian.ai",
    },
    {
      icon: IconBrandDiscord,
      href: "https://discord.gg/your-invite",
    },
  ],
  links: {
    product: {
      heading: "PRODUCT",
      links: [
        { label: "Overview", href: "/product" },
        { label: "Pricing", href: "/pricing" },
        { label: "Security", href: "/security" },
        { label: "Docs", href: "/docs" },
      ],
    },
    usecases: {
      heading: "USE CASES",
      links: [
        { label: "Conversational AI", href: "/use-cases/conversational" },
        { label: "RAG / Retrieval", href: "/use-cases/rag" },
        { label: "Agent Orchestration", href: "/use-cases/agents" },
      ],
    },
    resources: {
      heading: "RESOURCES",
      links: [
        { label: "Blog", href: "/blog" },
        { label: "Guides", href: "/guides" },
        { label: "API Reference", href: "/docs/api" },
      ],
    },
    company: {
      heading: "COMPANY",
      links: [
        { label: "About", href: "/about" },
        { label: "Careers", href: "/careers" },
        { label: "Contact", href: "/contact" },
      ],
    },
  },

  rights: "© 2026 XAlchemyst Technologies Pvt. Ltd. All rights reserved.",

  love: "Design and Developed by @harxhitbuilds ❤️",
};
