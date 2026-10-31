import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "PROD-01",
    slug: "temple-finance-tracker",
    name: "Temple Finance Tracker",
    category: "Business & Financial",
    tagline: "Purpose-built financial recordkeeping and audit ledger for administrative bodies.",
    intendedUsers: "Temple administrative committees, trusts, and community finance stewards.",
    problemSolved:
      "Eliminates handwritten ledger ambiguities, missing receipts, and cumbersome manual balance reconciliation.",
    confirmedCapabilities: [
      "Categorized income and donation logging.",
      "Administrative expense tracking by purpose.",
      "Real-time balance and net ledger calculations.",
      "Printable, auditor-ready financial report generation.",
    ],
    availability: "Delivered Solution",
    projectSlug: "temple-finance-tracker",
  },
  {
    id: "PROD-02",
    slug: "customer-relationship-payment-tracking",
    name: "Customer Relationship & Payment Tracking System",
    category: "Business & Financial",
    tagline: "Centralized client ledger and pending receivables management.",
    intendedUsers: "Small to mid-sized businesses tracking customer accounts and receivables.",
    problemSolved:
      "Prevents unmonitored receivables and lost revenue from delayed payment follow-ups.",
    confirmedCapabilities: [
      "Customer contact directory and ledger attribution.",
      "Outstanding payment tracking and age analysis.",
      "Fast transaction record retrieval.",
      "Exportable payment summaries for operational review.",
    ],
    availability: "In Active Development",
    projectSlug: "customer-relationship-payment-tracking",
  },
  {
    id: "PROD-03",
    slug: "aurev-ai-payment-recovery",
    name: "AUREV AI: Payment Failure Recovery Engine",
    category: "AI-Powered Systems",
    tagline: "Autonomous backend payment verification before user retry.",
    intendedUsers: "E-commerce platforms, payment gateways, and high-frequency digital checkout systems.",
    problemSolved:
      "Stops accidental duplicate transactions and customer distress caused by ambiguous network payment drops.",
    confirmedCapabilities: [
      "Instant classification of gateway timeouts vs. explicit rejections.",
      "Ledger interrogation preventing duplicate debits.",
      "Order idempotency enforcement.",
      "Safe recovery decision state machine.",
    ],
    plannedCapabilities: [
      "Self-healing webhook listener microservice.",
      "Predictive gateway failure rerouting.",
    ],
    availability: "Functional Prototype",
    projectSlug: "aurev-ai-payment-recovery",
  },
  {
    id: "PROD-04",
    slug: "aurev-ai-personal-assistant",
    name: "AUREV AI: Personal Assistant Concept",
    category: "AI-Powered Systems",
    tagline: "Permission-governed assistant for autonomous device workflows.",
    intendedUsers: "Individuals and professionals needing secure cross-device task automation.",
    problemSolved:
      "Bridges the gap between passive conversational AI and secure, authorized OS-level action execution.",
    confirmedCapabilities: [
      "Permission verification boundary architecture.",
      "Action dispatch and ledger audit schemas.",
    ],
    plannedCapabilities: [
      "Voice natural-language workflow dispatcher.",
      "Verification Ring for sensitive multi-step actions.",
      "Automated meeting transcription and task extraction.",
    ],
    availability: "Concept & Architecture",
    projectSlug: "aurev-ai-personal-assistant",
  },
  {
    id: "PROD-05",
    slug: "nivora",
    name: "NIVORA Digital Grocery Platform",
    category: "Digital Platforms",
    tagline: "High-resilience grocery ordering platform with intelligent checkout protection.",
    intendedUsers: "Retail consumers and local grocery vendors seeking dependable ordering.",
    problemSolved:
      "Provides rapid, intuitive grocery ordering with zero risk of double-charging during network drops.",
    confirmedCapabilities: [
      "Dynamic catalog browsing and category filters.",
      "Real-time basket management.",
      "Sandboxed gateway checkout simulation.",
      "Server-Sent Event order status notifications.",
    ],
    availability: "Functional Prototype",
    projectSlug: "nivora",
  },
];
