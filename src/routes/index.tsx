import { createFileRoute } from "@tanstack/react-router";
import heroImage from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  component: Portfolio,
});

const experience = [
  {
    period: "Sep 2020 — Present",
    role: "Business Analyst",
    company: "MSR IT Solution",
    location: "Kolkata, India",
    bullets: [
      "Gather system and business requirements directly from clients, translating complex needs into technical specifications and detailed implementation documentation.",
      "Lead client-facing feature discovery sessions, mapping product workflows and validating UI/UX features with stakeholders to maximize engagement.",
      "Conduct market research and system-architecture analysis to identify core areas for technological efficiency.",
      "Ensure seamless cross-functional alignment between engineering, product, and digital media teams.",
    ],
  },
  {
    period: "May 2019 — Sep 2020",
    role: "Data Analyst",
    company: "MSR IT Solution",
    location: "Kolkata, India",
    bullets: [
      "Designed and maintained interactive Power BI and Excel dashboards automating daily, weekly, and monthly performance tracking.",
      "Extracted, cleaned, and modeled large-scale transactional data from platform databases and Smart BMC.",
      "Owned reporting for ticket volumes, response times, resolution rates, and agent utilization capacity.",
      "Compiled daily Quality Reports, surfacing bottlenecks and risk-mitigation solutions to leadership.",
    ],
  },
  {
    period: "Sep 2018 — Nov 2018",
    role: "Junior Analyst — Intern",
    company: "Nandan Saha Steel (TECHadda)",
    location: "Kolkata, India",
    bullets: [
      "Supported data integrity audits and process mapping for client software integrations.",
      "Monitored online client interactions and social media queries to optimize resolution tracking.",
    ],
  },
  {
    period: "Nov 2016 — May 2019",
    role: "Executive — Operations & Client Support",
    company: "Concentrix Daksh Services India",
    location: "Kolkata, India",
    bullets: [
      "Coordinated cross-functional teams to maintain service delivery quality and SLA adherence.",
      "Analyzed historical agent data and ticket queues to isolate performance deficiencies and recommend corrective workflows.",
      "Designed operational documentation and training material to optimize client onboarding.",
    ],
  },
];

const skills = [
  {
    label: "Data & Visualization",
    items: ["Power BI", "Advanced Excel", "VLOOKUP & Pivots", "KPI Dashboards", "Smart BMC", "Data Extraction"],
  },
  {
    label: "Business & Product",
    items: ["Requirement Gathering", "UI/UX Mapping", "Process Optimization", "System Documentation"],
  },
  {
    label: "Client Operations",
    items: ["End-to-End Client Handling", "Social Media Analytics", "Vendor Coordination", "Team Alignment"],
  },
  {
    label: "Metrics & SLA",
    items: ["SLA Management", "Agent Performance", "Ticket Analytics", "Response Time Tracking"],
  },
];

const achievements = [
  {
    year: "2017",
    title: "Back-to-Back Star Performer",
    body: "Awarded twice at Concentrix Daksh for elite performance, client satisfaction, and operational metric delivery.",
  },
  {
    title: "International Client Commendations",
    body: "Formal appreciation from international clients, Process Managers, and BSI Directors for driving UI/UX feature updates and process visibility.",
  },
];

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
        <a href="#top" className="font-display text-xl tracking-tight">
          Ankita <span className="text-ember">Sarkar</span>
        </a>
        <nav className="hidden md:flex gap-8 text-sm text-muted-foreground">
          {[
            ["About", "about"],
            ["Experience", "experience"],
            ["Skills", "skills"],
            ["Contact", "contact"],
          ].map(([label, id]) => (
            <a key={id} href={`#${id}`} className="hover:text-foreground transition-colors">
              {label}
            </a>
          ))}
        </nav>
        <a
          href="mailto:ankita13sarkar@gmail.com"
          className="text-xs font-mono uppercase tracking-widest text-ember hover:text-ember-glow transition-colors"
        >
          Let's talk →
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-24 lg:pt-44 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-12 items-end">
        <div className="lg:col-span-7 space-y-8">
          <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground">
            <span className="w-8 h-px bg-ember" />
            <span>Portfolio · 2016 — Present</span>
          </div>
          <h1 className="font-display text-6xl md:text-7xl lg:text-[8rem] leading-[0.9] tracking-tight">
            Business &<br />
            <span className="italic text-ember">Data Analyst</span>
            <br />
            crafting clarity.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
            I'm <span className="text-foreground">Ankita Sarkar</span> — 7+ years turning stakeholder
            noise into Power BI dashboards, UI/UX decisions, and process automation that moves the
            business forward.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#experience"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-ember text-primary-foreground rounded-sm font-medium text-sm uppercase tracking-wider hover:opacity-90 transition-opacity"
            >
              View experience
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-sm font-medium text-sm uppercase tracking-wider hover:border-ember hover:text-ember transition-colors"
            >
              Get in touch
            </a>
          </div>
        </div>
        <div className="lg:col-span-5 relative">
          <div className="relative aspect-[3/4] overflow-hidden rounded-sm grain-overlay">
            <img
              src={heroImage}
              alt="Editorial portrait"
              width={1200}
              height={1600}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-card border border-border p-5 max-w-[220px] shadow-[var(--shadow-deep)]">
            <div className="text-4xl font-display text-ember leading-none">7+</div>
            <div className="text-xs text-muted-foreground mt-2 uppercase tracking-widest">
              Years across IT solutions & client operations
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-24 lg:mt-32">
        <div className="hairline" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10">
          {[
            ["7+", "Years experience"],
            ["4", "Companies"],
            ["2×", "Star Performer '17"],
            ["∞", "Dashboards shipped"],
          ].map(([n, l]) => (
            <div key={l}>
              <div className="font-display text-4xl md:text-5xl text-foreground">{n}</div>
              <div className="text-xs text-muted-foreground mt-2 uppercase tracking-widest">{l}</div>
            </div>
          ))}
        </div>
        <div className="hairline" />
      </div>
    </section>
  );
}

function SectionLabel({ n, label }: { n: string; label: string }) {
  return (
    <div className="flex items-center gap-4 text-xs font-mono uppercase tracking-[0.25em] text-muted-foreground mb-12">
      <span className="text-ember">{n}</span>
      <span className="w-8 h-px bg-border" />
      <span>{label}</span>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionLabel n="01" label="About" />
        <div className="grid lg:grid-cols-12 gap-12">
          <h2 className="lg:col-span-5 font-display text-4xl md:text-5xl leading-tight">
            Data-driven and <span className="italic text-ember">user-focused</span> — bridging business
            intent and product reality.
          </h2>
          <div className="lg:col-span-6 lg:col-start-7 space-y-6 text-muted-foreground leading-relaxed text-lg">
            <p>
              Based in Kolkata, I work across the seam where stakeholders describe what they want and
              engineering asks what to build. Over the last seven years I've translated that gap into
              clean documentation, mapped UI/UX flows, and Power BI dashboards leadership actually
              opens on Monday morning.
            </p>
            <p>
              My background spans client operations, data analysis, and business analysis — so I read
              a ticket queue the same way I read a product spec: for the bottleneck, the missing
              signal, and the smallest change that unblocks the next mile.
            </p>
            <div className="flex flex-wrap gap-x-8 gap-y-3 pt-4 text-sm">
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground/60">Based</div>
                <div className="text-foreground mt-1">Kolkata, India</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground/60">Languages</div>
                <div className="text-foreground mt-1">English · Bengali · Hindi</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground/60">Currently</div>
                <div className="text-foreground mt-1">MSR IT Solution</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="py-24 lg:py-32 bg-card/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionLabel n="02" label="Experience" />
        <h2 className="font-display text-4xl md:text-5xl leading-tight mb-16 max-w-3xl">
          A seven-year arc from <span className="italic text-ember">operations floor</span> to product
          conversations.
        </h2>
        <div className="space-y-px">
          {experience.map((job, i) => (
            <article
              key={i}
              className="group grid md:grid-cols-12 gap-6 md:gap-8 py-10 border-t border-border hover:bg-background/40 transition-colors px-2 -mx-2"
            >
              <div className="md:col-span-3 text-xs font-mono uppercase tracking-widest text-muted-foreground pt-2">
                {job.period}
              </div>
              <div className="md:col-span-4">
                <h3 className="font-display text-2xl md:text-3xl text-foreground group-hover:text-ember transition-colors">
                  {job.role}
                </h3>
                <div className="text-sm text-muted-foreground mt-2">
                  {job.company} · {job.location}
                </div>
              </div>
              <ul className="md:col-span-5 space-y-3 text-muted-foreground leading-relaxed">
                {job.bullets.map((b, j) => (
                  <li key={j} className="flex gap-3">
                    <span className="text-ember mt-2 shrink-0">·</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionLabel n="03" label="Toolkit" />
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          <h2 className="lg:col-span-6 font-display text-4xl md:text-5xl leading-tight">
            Skills at the <span className="italic text-ember">intersection</span> of data, product,
            and operations.
          </h2>
          <p className="lg:col-span-5 lg:col-start-8 text-muted-foreground text-lg leading-relaxed">
            The tools change; the loop doesn't — listen closely, model honestly, ship the insight in a
            format the team will actually use.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {skills.map((group) => (
            <div key={group.label} className="bg-background p-8 hover:bg-card transition-colors">
              <div className="text-xs font-mono uppercase tracking-widest text-ember mb-6">
                {group.label}
              </div>
              <ul className="space-y-3">
                {group.items.map((s) => (
                  <li key={s} className="font-display text-xl leading-tight">
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Achievements() {
  return (
    <section className="py-24 lg:py-32 bg-card/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionLabel n="04" label="Recognition" />
        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((a, i) => (
            <div
              key={i}
              className="relative p-10 border border-border bg-background hover:border-ember transition-colors"
            >
              {a.year && (
                <div className="absolute top-6 right-6 font-display text-5xl text-ember/30">
                  {a.year}
                </div>
              )}
              <h3 className="font-display text-3xl leading-tight max-w-md">{a.title}</h3>
              <p className="text-muted-foreground mt-4 leading-relaxed">{a.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-32 lg:py-44 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{ background: "var(--gradient-glow)" }}
      />
      <div className="max-w-5xl mx-auto px-6 lg:px-12 relative text-center">
        <SectionLabel n="05" label="Contact" />
        <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight">
          Have a dataset,<br />
          a dashboard, or a<br />
          <span className="italic text-ember">product question?</span>
        </h2>
        <p className="mt-8 text-lg text-muted-foreground max-w-xl mx-auto">
          I'm open to business analyst, product analyst, and data analyst roles — remote or Kolkata
          based.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="mailto:ankita13sarkar@gmail.com"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-ember text-primary-foreground rounded-sm font-medium uppercase tracking-wider text-sm hover:opacity-90 transition-opacity"
          >
            ankita13sarkar@gmail.com
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a
            href="tel:+918240233145"
            className="inline-flex items-center gap-3 px-8 py-4 border border-border rounded-sm font-medium uppercase tracking-wider text-sm hover:border-ember hover:text-ember transition-colors"
          >
            +91 82402 33145
          </a>
          <a
            href="https://www.linkedin.com/in/ankita-sarkar-4b1631226/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 border border-border rounded-sm font-medium uppercase tracking-wider text-sm hover:border-ember hover:text-ember transition-colors"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10 flex flex-col md:flex-row justify-between gap-4 text-sm text-muted-foreground">
        <div>© {new Date().getFullYear()} Ankita Sarkar. Kolkata, India.</div>
        <div className="flex gap-6 items-center">
          <a
            href="https://www.linkedin.com/in/ankita-sarkar-4b1631226/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ember transition-colors"
          >
            LinkedIn
          </a>
          <a href="mailto:ankita13sarkar@gmail.com" className="hover:text-ember transition-colors">
            Email
          </a>
          <span className="font-mono text-xs uppercase tracking-widest">
            Business · Data · Product
          </span>
        </div>
      </div>
    </footer>
  );
}
