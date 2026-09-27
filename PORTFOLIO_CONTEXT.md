# Portfolio context

Last reviewed: 2026-09-17

This document is the working source of truth for the portfolio redesign. It is
based on Jeferson Amorim's authenticated LinkedIn profile, reviewed on the date
above. Revisit it when the portfolio needs new work, copy, case studies, or
technology tags; do not needlessly re-read LinkedIn for unchanged history.

## Positioning

**Senior Software Engineer with 20 years of experience building software,
shaping architecture, and leading engineering teams.**

Jeferson owns delivery across product architecture, frontend, backend, APIs,
data, cloud infrastructure, CI/CD, incident response, and production quality.
His current focus joins full-stack engineering, cloud-native delivery, technical
leadership, and **AI-native engineering**: directing coding agents to accelerate
delivery while retaining accountability for architecture, security, correctness,
quality, and production readiness.

Suggested hero copy:

> I lead the design, delivery, and operation of reliable software - from product
> architecture and AI-native development to cloud infrastructure and production
> systems.

Supporting copy:

> 20 years building and modernizing web products with TypeScript, React,
> Node.js, AWS, agentic development, and hands-on technical leadership.

## Evidence to highlight

- Leads end-to-end work across unfamiliar codebases, including feature delivery,
  defects, database and application performance, production incidents, and
  release validation.
- Provides technical leadership through architecture, documented trade-offs,
  engineering standards, code review, mentoring, and quality gates.
- Builds and operates cloud-native systems with AWS, Infrastructure as Code,
  containerization, automated delivery, caching, autoscaling, and monitoring.
- Uses AI coding agents as part of an accountable engineering workflow:
  provides task definition, context, architectural constraints, and review;
  delegates implementation across parallel workstreams; and retains final
  responsibility for security, correctness, automated testing, manual
  validation, CI, performance, and customer delivery.
- Has applied agentic development under high delivery pressure to build complete
  applications in weeks, moving beyond autocomplete to scoped agent delegation,
  quality governance, and accountable shipping.
- Has delivered full-stack products, SaaS platforms, AI applications,
  open-source tools, enterprise platform modernization, and operational
  improvements.

## Career snapshot

Use a concise timeline on the site. Full history belongs on LinkedIn.

| Period | Role | Portfolio-relevant evidence |
| --- | --- | --- |
| Jan 2026–present | Senior Software Engineer, G2i | RL training environments for a frontier AI lab; full application delivery with AI-agent code creation, personal accountability for the final result, performance work, incident response, security/accuracy verification, and delivery quality. |
| May 2023–Jan 2026 | Senior Full-Stack Developer & AI Engineer, JDJ | SaaS and AI products; AWS architecture, ECS Fargate, CDK, DynamoDB, RDS, SQS, Cognito, TypeScript modernization, migrations, autoscaling, mentoring. |
| Jul 2019–Apr 2023 | Senior Full Stack Developer / Senior Software Engineer, Ceros | API architecture, NestJS, React migration, accessibility, testing, Docker/Jenkins, Terraform, Cloudflare migration, scalable collaboration. |
| Feb 2016–Jun 2019 | Front End Developer / Software Architect, Crossover | Application modernization, CI/CD, Docker, cloud infrastructure, architecture, and AI-assisted tutoring. |
| Feb 2008–Feb 2016 | Lead Developer, Level Up | Led a six-person team; web, e-commerce, billing, caching, monitoring, CI, blue-green delivery, mentorship. |

## Case studies to build first

### Aiah  -  AI customer service and workflow automation

The flagship end-to-end product case study. Show the journey from MVP to
production, including LLM tool calling, workflow orchestration, validation and
recovery, human handoff, RAG, pgvector search, GraphQL, asynchronous message
processing, and AWS infrastructure.

### Wolf Pro Link  -  platform modernization and cloud migration

The strongest measurable modernization case study.

- Reduced runtime errors by 60% through JavaScript-to-TypeScript migration.
- Supported 3× more concurrent users without increased AWS costs through Nginx
  and CloudFront caching.
- Migrated between AWS accounts without downtime.
- Made infrastructure and releases repeatable with CDK and GitHub Actions.
- Deployed Docker workloads to ECS Fargate with autoscaling and CloudWatch
  metrics; maintained GraphQL APIs.

### Ceros  -  enterprise platform modernization

An enterprise credibility case study. Emphasize API architecture and
trade-offs, migration from Backbone to React, accessibility, testing standards,
Docker/Jenkins improvements, Terraform, Cloudflare migration, and mentoring.

### Rocketicons  -  open-source product

Show product ownership, React/React Native tooling, architecture, open-source
work, and the move to static hosting for sustainable operation.

### G2i  -  current role

This is a featured career narrative, not a footnote. Keep it
non-client-identifying while showing the modern senior-engineering advantage:

- Delivered complete applications in weeks in a high-pace environment.
- Evolved from autocomplete to delegating scoped implementation work to coding
  agents across parallel workstreams.
- Supplied context, constraints, architecture, and acceptance criteria; reviewed
  outcomes and made the final engineering decisions.
- Retained responsibility for security, correctness, tests, performance,
  production incidents, release validation, and customer delivery.
- Built reusable agent instructions, engineering guidance, and CI practices to
  make subsequent delivery faster and more reliable.

Suggested section copy:

> **AI-native engineering with accountable delivery**
>
> I direct coding agents to accelerate full-stack delivery across parallel
> workstreams. I provide the architecture, constraints, verification, and final
> engineering judgment required to ship reliable software.

## Public-facing portfolio tags

Use these as the primary tag vocabulary. They describe outcomes and strengths
before individual tools.

1. Senior Software Engineering
2. Technical Leadership
3. AI-Native Engineering
4. Agentic Software Development
5. Full-Stack Engineering
6. System Design
7. Cloud Architecture
8. AWS
9. DevOps & CI/CD
10. TypeScript
11. React
12. Node.js

Do not use proficiency percentages or a dense, undifferentiated tag cloud.
Each tag should lead to a concrete proof point in a case study or career entry.

## Supporting technology tags

Expose these only in relevant case studies or a compact capabilities section.

| Area | Tags |
| --- | --- |
| Product engineering | TypeScript, React, Node.js, GraphQL, tRPC, APIs, PostgreSQL |
| Cloud and platform | AWS, ECS Fargate, AWS CDK, Terraform, Docker, CloudFront, Cloudflare, Nginx, IAM, VPC, Autoscaling, CloudWatch |
| Delivery and quality | GitHub Actions, Jenkins, CI/CD, Blue-Green Deployments, Vitest, Playwright, Storybook, Testing, Performance Engineering, Production Incident Response |
| AI systems | LLM Engineering, AI-Native Engineering, Agentic Software Development, Coding Agents, Tool Calling, Workflow Orchestration, RAG, Vector Databases, pgvector |
| Engineering practice | System Design, Event-Driven Architecture, Accessibility, Technical Leadership, Mentoring, Architecture Decision Records |

## LinkedIn skills confirmed

LinkedIn's current five top skills are: **TypeScript, Node.js, Amazon Web
Services (AWS), LLM Engineering, and System Design.** They should stay near the
top of the portfolio's technology and search vocabulary.

## Information architecture decision

The portfolio is the primary product; the blog is secondary.

```text
Home: positioning, AI-native delivery proof, selected work, career snapshot, capabilities, contact
Work: all case studies and individual case-study pages
About: short professional narrative and timeline
Writing: blog archive and individual articles
```

### Homepage section order

1. **Hero**  -  senior positioning, availability, and direct calls to view work,
   LinkedIn, and GitHub.
2. **AI-native engineering with accountable delivery**  -  current G2i experience
   and the operating model: agents accelerate implementation; Jeferson owns the
   architecture, security, correctness, and release decision.
3. **Selected outcomes**  -  short evidence cards, beginning with Wolf Pro Link's
   measurable modernization results and the end-to-end delivery of Aiah.
4. **Selected work**  -  Aiah, Wolf Pro Link, Ceros, Rocketicons; each card links
   to a case study with role, problem, approach, stack, and outcome.
5. **Career snapshot**  -  compact five-role timeline; link to LinkedIn for the
   complete history.
6. **Capabilities**  -  focused grouped tags with concrete evidence, not
   percentage scores.
7. **Writing and community**  -  latest posts plus links to YouTube, Instagram,
   and other public work. This is deliberately secondary.
8. **Contact**  -  LinkedIn, GitHub, and email.

### G2i narrative requirements

This section must make agentic delivery credible. It should describe a concrete
project or representative workflow without exposing client-sensitive details:

- delivery scope and pace;
- what was delegated to agents;
- the architecture, context, or constraints supplied to agents;
- the verification path: tests, review, CI, security checks, performance checks,
  or release validation;
- the resulting product or engineering outcome.

Never describe the work as "vibe coding" or imply that agents replace
engineering judgment.

External profiles - LinkedIn, GitHub, Rocketicons, YouTube, and Instagram - belong
in the header contact action or footer, rather than competing with selected work
on the homepage.

## Visual direction

The visual goal is a **modern, content-forward engineering portfolio**. It must
feel more intentional and visually accomplished than a résumé page while
remaining immediately readable to recruiters, ATS-assisted review workflows,
keyboard users, and screen-reader users.

### Interaction principles

- Preserve a linear, vertical reading flow. Every important claim, job, project,
  outcome, and contact path must be available directly in the document; do not
  hide the substance behind carousels, modals, tabs, hover states, or
  click-to-reveal cards.
- Use navigation as a visible table of contents that jumps to page sections. On
  wide screens it may be a persistent side rail or a slim sticky header; on
  small screens it becomes a conventional accessible menu. The content itself
  always remains a normal scrollable page.
- The first screen must communicate role, seniority, focus, availability, and
  direct proof paths without a typing effect, loader, or full-screen transition.
- Design for skimming: clear headings, concise evidence, visible dates, role,
  outcome metrics, and descriptive links.
- Use motion only to support orientation or feedback. Respect
  `prefers-reduced-motion`; no scroll-jacking, auto-rotating content, or
  animation required to access information.

### Visual system

- Retain a dark foundation, but replace the old template styling with a calmer
  deep-charcoal surface, warm off-white text, restrained blue accent, subtle
  borders, and stronger spacing.
- Use typography and grid rather than icon circles, heavy shadows, stock
  illustrations, or decorative effects to create hierarchy. A precise sans-serif
  for interface/body text plus a restrained display face for major statements is
  appropriate.
- Show real artifacts: product screenshots, architecture excerpts, diagrams,
  repository views, or outcome figures. Avoid generic programming imagery and
  cartoon thumbnails.
- Make selected-work rows large and visually distinct, with project title, role,
  time period, problem, outcomes, relevant tags, and a direct case-study link.
- Use one shared component system across home, work, about, and writing, so the
  portfolio looks like one carefully engineered product.

### Accessibility and recruiter requirements

- Semantic landmarks, a skip link, one logical heading hierarchy, keyboard
  operation, visible focus states, descriptive link labels, and meaningful image
  alternatives are required.
- Maintain WCAG AA color contrast and a readable base text size. Never place
  essential copy over photography or low-contrast gradients.
- Keep page content in the HTML and avoid JavaScript-dependent navigation or
  client-only translation. This supports search, ATS extraction, sharing, and
  assistive technology.
- Case-study pages should use predictable sections: context, role, challenge,
  approach, outcome, and technology. Readers should not have to operate custom
  interactions to understand the work.

### References to study

- Brittany Chiang: content-first long-form portfolio with persistent section
  navigation, visible experience, projects, and writing. Borrow the information
  behavior, not the recognizable visual treatment.
- Santosh Bitra / Bitralab: recruiter-oriented evidence, explicit outcomes, and
  technical depth without unnecessary interaction.
- AJ Barnett: disciplined case-study structure - challenge, role, approach,
  impact, lessons - that makes senior judgment visible.
- Lidia Ochoa: accessible sticky navigation and a component system designed from
  semantic structure and tokens rather than retrofitted accessibility.

The new site should not imitate any single reference. It should combine their
clarity with a distinct visual identity grounded in Jeferson's dark, technical,
high-craft brand.

## Multilingual direction

Publish language-specific static routes so every translated page is directly
shareable and indexable:

```text
/en/
/pt-br/
/es/
```

Use English as the default source language. Every interface string and every
published portfolio case study must exist in English, Brazilian Portuguese, and
Spanish. Store localized copy in structured Jekyll data files; store shared
facts, dates, links, and technology tags once. A build-time validation script
should fail if a required language key or case-study translation is missing.

## Content that should not lead the portfolio

- Skill percentages.
- Generic service cards with decorative icons.
- Travel statistics.
- Large quote carousel.
- Old blog content or videos described as current updates.

They may be retired, moved to a personal page, or linked externally after the
portfolio’s first release.
