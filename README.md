# kioni-platform

# Users (Web / Mobile / API Consumers)
        │
        ▼
## Vercel (Next.js Frontend + Edge Middleware)
        │
        ▼
# API Gateway (Cloudflare Workers / Fastly)  ←→ Rate limiting / WAF
        │
        ▼
# Auth & Identity (Clerk/Auth0) ──> Role-based access
        │
        ▼
# Supabase (Postgres + pgvector + Auth + Storage + Realtime)
        │
        ├─ Edge Functions (low-latency serverless)
        ├─ Postgres (data) + pgvector (embeddings)
        └─ Storage (reports, logs)
        │
        ▼
## Orchestrator / Message Bus (Redis Streams / RabbitMQ / Kafka / BullMQ)
        │
        ├─ Worker Pools (Render / AWS ECS / GCP Cloud Run)
        │     ├─ Scanner Workers (Python: nmap, nuclei, zap)
        │     ├─ Fixer Workers (automation scripts, infra SDKs)
        │     └─ AI Workers (KIONI BRAIN: LLM calls + orchestration)
        │
        ▼
AI Providers:
  - OpenAI / Anthropic / Proprietary LLM (API)
  - Vector DB (pgvector on Supabase or Pinecone) for embeddings
        │
        ▼
External integrations:
  - Flutterwave (payments & webhooks)
  - Email / SMS / WhatsApp providers (Twilio / Africa-specific)
  - Domain & certificate APIs
  - Threat Feeds & Dark Web APIs
  - Third-party SIEMs (optional)
###
###
kioni/
│
├── apps/
│   ├── web/                # Next.js (Vercel)
│   └── admin/              # (Optional) Admin dashboard
│
├── services/
│   ├── scanner/            # Python scanner worker
│   ├── brain/              # AI orchestrator worker (Node.js)
│   └── api/                # API gateway (Edge + Node mix)
│
├── packages/
│   ├── ui/                 # Shared React UI components
│   ├── utils/              # Shared TypeScript utilities
│   └── config/             # Shared configs/env loaders
│
├── infra/
│   ├── docker/             # Dockerfiles and compose
│   ├── terraform/          # optional IaC
│   └── scripts/            # deployment/help scripts
│
├── .github/workflows/      # CI/CD pipelines
├── package.json
├── pnpm-workspace.yaml
└── README.md
