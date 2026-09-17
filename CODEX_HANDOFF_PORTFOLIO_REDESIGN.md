# Codex handoff — portfolio redesign

Created: 2026-09-17

Use this file to continue the portfolio-redesign work from a new Codex task or
another computer. It is a decision and research handoff, not a verbatim chat
transcript.

## Prompt for the next Codex task

> Read `CODEX_HANDOFF_PORTFOLIO_REDESIGN.md` and `PORTFOLIO_CONTEXT.md` before
> making changes. Continue the portfolio redesign for Jeferson Amorim. Preserve
> the agreed positioning, accessible content-forward design, three-language
> static-site requirement, and the current evidence-first case-study strategy.

## Project state

- Repository: `programadorsemfronteira/programadorsemfronteira.github.io`
- Current website: legacy Jekyll static site published from `docs/`; editable
  source is in `src/`.
- Current branch state before this handoff: no implementation changes; only two
  new uncommitted Markdown documents:
  - `PORTFOLIO_CONTEXT.md`
  - `CODEX_HANDOFF_PORTFOLIO_REDESIGN.md`
- The existing site is a 2023-era Bootstrap/Jekyll personal site with a blog,
  biography, experience cards, travel statistics, quote carousel, videos, and
  blog cards. It is visually dated and should be substantially redesigned.
- Do not make destructive changes. The user requested planning and visual
  direction before implementation.

## User objective

Modernize the static GitHub Pages site into a professional portfolio for job
hunting. The blog remains, but is secondary. The portfolio should sell Jeferson
as a senior engineer who owns software end to end.

Primary languages: English, Brazilian Portuguese, and Spanish. Every published
portfolio page and interface must be available at a direct, shareable,
language-specific URL.

The user wants scripts and structured translation data to make the static site
easy to maintain. A Jekyll-based implementation remains acceptable; no framework
migration has been approved yet.

## LinkedIn research completed

The user signed in to LinkedIn in the Codex in-app browser. The profile was
reviewed directly on 2026-09-17. Do not needlessly ask the user to sign in again
or repeat the review unless the portfolio needs newly changed information.

### Verified headline and positioning evidence

- Headline: Senior Software Engineer | Agentic & AI-Assisted Development |
  Full-Stack: TypeScript, React, Node.js, AWS | Technical Leadership.
- 20 years of experience building software, shaping architecture, and leading
  engineering teams.
- Top LinkedIn skills: TypeScript, Node.js, Amazon Web Services (AWS), LLM
  Engineering, System Design.

### Relevant roles

| Period | Role | Evidence |
| --- | --- | --- |
| Jan 2026–present | Senior Software Engineer, G2i | Builds RL environments for a frontier AI lab; owns full-stack work, performance, production incidents, verification, delivery quality, and agent-directed workstreams. |
| May 2023–Jan 2026 | Senior Full-Stack Developer & AI Engineer, JDJ | SaaS/AI product delivery; AWS, ECS Fargate, CDK, DynamoDB, RDS, SQS, Cognito, TypeScript migration, autoscaling, and mentoring. |
| Jul 2019–Apr 2023 | Senior Full Stack Developer / Senior Software Engineer, Ceros | API architecture, NestJS, React migration, accessibility, testing, Docker/Jenkins, Terraform, and Cloudflare migration. |
| Feb 2016–Jun 2019 | Front End Developer / Software Architect, Crossover | Modernization, CI/CD, Docker, cloud infrastructure, architecture, and an AI tutoring application. |
| Feb 2008–Feb 2016 | Lead Developer, Level Up | Led a six-person team; web, e-commerce, billing, caching, monitoring, CI, blue-green delivery, and mentoring. |

## Key strategic decision: lead with AI-native engineering

The current G2i role must receive prominent attention. The useful story is not
"uses AI to code." It is:

> Jeferson uses coding agents to deliver complete software under real delivery
> pressure, while retaining responsibility for architecture, correctness,
> security, quality, and production readiness.

The user said that this role involved high-paced delivery of full applications
in a few weeks. He progressed from autocomplete to full agentic development:
delegating implementation to agents while owning quality, security, correctness,
and final delivery.

Recommended section title and copy:

> **AI-native engineering with accountable delivery**
>
> I direct coding agents to accelerate full-stack delivery across parallel
> workstreams. I provide the architecture, constraints, verification, and final
> engineering judgment required to ship reliable software.

Avoid "vibe coding" and "prompt engineer" terminology. Do not imply that agents
replace engineering judgment.

## Main portfolio structure

1. Hero: senior positioning, availability, direct links to selected work,
   LinkedIn, and GitHub.
2. AI-native engineering with accountable delivery: current G2i narrative.
3. Selected outcomes: fast, measurable evidence.
4. Selected work: Aiah, Wolf Pro Link, Ceros, Rocketicons.
5. Career snapshot: concise five-role timeline with LinkedIn as the complete
   history.
6. Capabilities: concise, grouped tags backed by proof, never percentages.
7. Writing and community: latest blog posts and external channels; secondary.
8. Contact.

### Case studies

- **Aiah**: flagship end-to-end AI product. LLM tool calling, workflow
  orchestration, validation/recovery, human handoff, RAG, pgvector, GraphQL,
  async message processing, AWS.
- **Wolf Pro Link**: strongest measurable modernization. 60% fewer runtime
  errors after TypeScript migration; 3× more concurrent users without higher AWS
  costs through Nginx/CloudFront caching; AWS account migration with no downtime;
  CDK, GitHub Actions, ECS Fargate, autoscaling, CloudWatch, GraphQL.
- **Ceros**: enterprise platform modernization: API architecture, NestJS,
  Backbone-to-React migration, accessibility, tests, Docker/Jenkins, Terraform,
  Cloudflare, mentoring.
- **Rocketicons**: public/open-source credibility.
- **G2i**: non-client-identifying evidence of AI training environments,
  high-pace delivery, agent delegation, verification, quality gates, and final
  accountable delivery.

## Tag strategy

Primary public tags:

- Senior Software Engineering
- Technical Leadership
- AI-Native Engineering
- Agentic Software Development
- Full-Stack Engineering
- System Design
- Cloud Architecture
- AWS
- DevOps & CI/CD
- TypeScript
- React
- Node.js

Use supporting tools only when tied to a case study: AWS CDK, Terraform, Docker,
ECS Fargate, GraphQL, GitHub Actions, RAG, Tool Calling, pgvector,
Accessibility, Automated Testing, Performance Engineering, Production Incident
Response.

## Multilingual static-site decision

- Publish direct routes: `/en/`, `/pt-br/`, `/es/`.
- English is the default source language.
- Use structured Jekyll data for translations and shared content facts.
- Localized copy includes interface labels, portfolio pages, and case studies.
- Shared facts include dates, technology tags, links, and other invariant data.
- Add a build-time validation script that fails when a required translation key
  or case-study language is missing.
- The language selector should preserve the equivalent page where a translation
  exists and fall back to the selected language home page otherwise.

## Design direction

The user rejected earlier references that hid content behind controls. They like
the case-study structure at https://www.ajbarnett.tech/work and want a simple,
modern design that looks more sophisticated than a generic developer portfolio.

### Agreed behavior

- Normal vertical reading flow. All major content is visible directly in the
  document; navigation jumps to sections.
- No carousels, modal-only content, tabs, accordions, hover-only content,
  click-to-reveal cards, typing hero, or auto-rotating content.
- On desktop: fixed left rail or slim sticky section index is appropriate.
- On mobile: conventional accessible menu, linear content flow.
- Semantic landmarks, skip link, logical heading hierarchy, keyboard support,
  visible focus states, meaningful image alternatives, and WCAG AA contrast are
  non-negotiable.
- Keep substantive content in HTML. Do not require JavaScript for navigation or
  translations.

### Visual treatment

- Dark mode is the primary identity: deep charcoal background, warm off-white
  text, muted gray secondary copy, restrained electric-blue accent, thin borders,
  and generous whitespace.
- Create hierarchy through typography and grid. Avoid circular skill icons,
  progress bars, stock programming imagery, heavy shadows, 3D effects, and
  excessive gradients.
- Show real approved artifacts in the final site: product screenshots, sanitized
  architecture diagrams, repository views, or outcome figures.
- Case-study rows should visibly include title, role, date, problem, outcomes,
  technologies, and a direct case-study link.

### References

- AJ Barnett: https://www.ajbarnett.tech/work — case-study structure the user
  explicitly liked.
- Brittany Chiang: https://brittanychiang.com/ — content-first persistent
  navigation and visible experience/projects; borrow information behavior, not
  the familiar visual style.
- Bitralab: https://bitralab.com/ — recruiter-oriented evidence and outcomes.
- Lidia Ochoa: https://uxbylidiaochoa.com/portfolio-site/ — accessibility-first
  navigation/component-system thinking.

## Generated visual mockup

A dark desktop mockup was generated during this task. It shows the recommended
left rail, AI-native hero, selected outcomes, visible case studies, project
artifacts, outcome tags, and modest system diagrams.

It is currently stored only on the originating machine at:

`/Users/amorimjj/.codex/generated_images/01a08710-6be8-7873-b603-a1be0227d216/exec-60b4360a-f839-42b6-b035-b2a03a54f8ee.png`

It is a visual concept, not production artwork. Generated product previews and
diagrams must be replaced with accurate, approved artifacts before use.

## No implementation started

There are no site, build, deployment, or GitHub Actions changes yet. The next
task should decide whether to:

1. approve the proposed content/design direction;
2. design the Jekyll multilingual content model and build pipeline; and then
3. implement the redesign incrementally with local visual and accessibility
verification.
