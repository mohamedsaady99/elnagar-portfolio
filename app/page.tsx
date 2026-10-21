"use client";

import { useState } from "react";
import Image from "next/image";

const projects = [
  {
    name: "FORUS FINANCIAL",
    category: "Fintech",
    tech: "React · Chakra UI · Next.js · React Query · TypeScript",
    url: "https://www.forusinvest.com/",
    image: "/forus.PNG",
    initials: "FF",
    style: "finance",
    en: "Financial platform",
  },
  {
    name: "T7T AMRK",
    category: "Digital Product",
    tech: "Next.js · React · Tailwind CSS · TypeScript",
    url: "https://t7tamrk.com/",
    image: "/t7t.PNG",
    initials: "TA",
    style: "purple",
    en: "Web experience",
  },
  {
    name: "National Labor Observatory",
    category: "Government",
    tech: "Wagtail CMS · JavaScript · Tailwind CSS",
    url: "https://nlo.gov.sa/en/",
    image: "/nlo.PNG",
    initials: "NLO",
    style: "government",
    en: "Saudi government project",
  },
  {
    name: "TWASSAM",
    category: "Government",
    tech: "React · Chakra UI · Zustand · React Query · TypeScript",
    url: "https://twassam.dgda.gov.sa/",
    image: "/tawassam.PNG",
    initials: "TW",
    style: "twassam",
    en: "Digital government service",
  },
  {
    name: "Knawat",
    category: "E-commerce",
    tech: "React · TypeScript · Apollo GraphQL",
    url: "https://knawat.sahlsolution.com/",
    image: "/kanawat.PNG",
    initials: "KN",
    style: "knawat",
    en: "Catalog & commerce",
  },
  {
    name: "CATSU",
    category: "Web App",
    tech: "React · Ant Design · Google Login",
    url: "https://mohamedsaady99.github.io/Catsu/",
    image: "/catsu.PNG",
    initials: "CA",
    style: "catsu",
    en: "Web application",
  },
];

const t = {
  nav: ["Home", "About", "Projects", "Experience", "Contact"],
  eyebrow: "FRONTEND SOFTWARE ENGINEER",
  firstName: "Mohamed",
  lastName: "Elnagar",
  heroLine1: "Engineering",
  heroLine2: "Digital Experiences.",
  intro:
    "I build modern, scalable web applications with React and Next.js, helping teams turn complex requirements into high-quality digital products.",
  view: "Explore projects",
  contact: "Get in touch",
  scroll: "SCROLL TO EXPLORE",
  aboutKicker: "01 / ABOUT ME",
  aboutTitle1: "More than just code.",
  aboutTitle2: "I build real products.",
  aboutP1:
    "I’m Mohamed Elnagar, a Frontend Software Engineer with 4+ years of experience building web applications using React, Next.js, TypeScript, and modern frontend technologies.",
  aboutP2:
    "I’ve contributed to products across e-commerce, fintech, e-learning, and Saudi government projects, collaborating with software houses, development teams, and clients across Egypt, Saudi Arabia, and Turkey.",
  skillsKicker: "02 / TOOLKIT",
  skillsTitle: "Technical skills",
  languages: "Languages",
  frameworks: "Frameworks & libraries",
  styling: "Styling",
  data: "Data fetching",
  tools: "Tools & platforms",
  projectKicker: "03 / SELECTED WORK",
  projectTitle: "Projects built for the real world.",
  projectDesc:
    "A selection of products and platforms I’ve contributed to across different industries.",
  openProject: "Visit project",
  noLink: "Project URL not listed in CV",
  allProjects: "PROJECTS",
  expKicker: "04 / EXPERIENCE",
  expTitle: "Where I’ve made an impact.",
  role1: "Senior Frontend Developer",
  company1: "Innosoft",
  date1: "Jan 2024 — Feb 2026",
  role2: "Mid-Level Frontend Developer",
  company2: "Forus",
  date2: "Mar 2023 — Nov 2023",
  role3: "Frontend Developer",
  company3: "Knawat",
  date3: "Mar 2022 — Jan 2023",
  role4: "Frontend Developer",
  company4: "IDA",
  date4: "Jun 2021 — Nov 2021",
  exp1: [
    "Led development of a new SaaS platform using React, TypeScript, and Redux Toolkit.",
    "Architected reusable component libraries for consistency across projects.",
    "Integrated REST APIs with backend teams and optimized data fetching.",
    "Conducted code reviews and mentored junior developers.",
  ],
  exp2: [
    "Developed the company website, investor portal, borrower dashboard, and admin panel.",
    "Improved loading performance using code splitting and lazy loading.",
    "Implemented responsive interfaces and contributed to peer reviews.",
  ],
  exp3: [
    "Contributed to a catalog builder for supply chain and marketing.",
    "Built and maintained catalog website, dashboard, and store frontend.",
    "Implemented features, fixed bugs, tested pull requests, and managed releases.",
  ],
  exp4: [
    "Built an e-learning platform from scratch using React.",
    "Developed reusable components and responsive interfaces.",
    "Collaborated with designers and backend developers to deliver the product.",
  ],
  education: "EDUCATION",
  degree: "BSc, Computer Science",
  uni: "Assiut University · Faculty of Computers and Information · 2019",
  languagesTitle: "LANGUAGES",
  langDetails: "Arabic — Native · English — Professional",
  strengths: "CORE STRENGTHS",
  strengthsDetails:
    "Problem-solving · Teamwork · Communication · Attention to detail · Continuous learning",
  contactKicker: "05 / LET’S WORK TOGETHER",
  contactTitle: "Have a good project in mind?",
  contactDesc:
    "I’m open to new opportunities, challenging projects, and collaborations with ambitious teams and clients.",
  email: "Email me",
  contact_me: "LET’S CONNECT",
  footer: "Engineering digital experiences with care.",
  location: "Cairo, Egypt",
};

function BrandLogo() {
  return (
    <img
      className="brand-logo"
      src="/elnagar-logo.png"
      alt="ELNAGAR — Software Engineering"
    />
  );
}
function Arrow() {
  return (
    <span aria-hidden="true" className="arrow">
      ↗
    </span>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navIds = ["home", "about", "projects", "experience", "contact"];
  const skillGroups = [
    {
      title: t.languages,
      items: "JavaScript (ES6+) · TypeScript · HTML5 · CSS3 · DOM",
    },
    {
      title: t.frameworks,
      items: "React.js · Next.js · Redux Toolkit · Zustand · jQuery",
    },
    {
      title: t.styling,
      items:
        "Tailwind CSS · Sass · Material UI · Ant Design · Chakra UI · Styled Components · Bootstrap · Shopify Polaris",
    },
    {
      title: t.data,
      items:
        "React Query · Redux Toolkit Query · Axios · GraphQL · Apollo Client",
    },
    {
      title: t.tools,
      items:
        "Git · GitHub/GitLab · Jira · Trello · Asana · Slack · Shortcut · Workplace",
    },
  ];
  const experiences = [
    { role: t.role1, company: t.company1, date: t.date1, items: t.exp1 },
    { role: t.role2, company: t.company2, date: t.date2, items: t.exp2 },
    { role: t.role3, company: t.company3, date: t.date3, items: t.exp3 },
    { role: t.role4, company: t.company4, date: t.date4, items: t.exp4 },
  ];

  return (
    <main dir="ltr">
      <section
        className="hero dark-section bg-elnagar-ink text-elnagar-cream"
        id="home"
      >
        <nav
          className="nav wrap flex items-center justify-between"
          aria-label="Main navigation"
        >
          <a href="#home" className="wordmark" aria-label="ELNAGAR home">
            <BrandLogo />
          </a>
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            ☰
          </button>
          <div className={`nav-links ${menuOpen ? "is-open" : ""}`}>
            {t.nav.map((label, i) => (
              <a
                key={navIds[i]}
                href={`#${navIds[i]}`}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
          </div>
        </nav>
        <div className="hero-grid wrap">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="eyebrow-dot" />
              {t.eyebrow}
            </p>
            <h1>
              {t.firstName}
              <br className="desktop-break" /> {t.lastName}
              <span className="name-dot">.</span>
              <span className="hero-title-gold">
                {t.heroLine1}
                <br />
                {t.heroLine2}
              </span>
            </h1>
            <p className="hero-intro">{t.intro}</p>
            <div className="hero-actions">
              <a className="button button-gold" href="#projects">
                {t.view}
                <Arrow />
              </a>
              <a className="button button-outline" href="#contact">
                {t.contact}
              </a>
            </div>
            <div className="hero-meta">
              <span className="scroll-symbol">↓</span>
              {t.scroll}
            </div>
          </div>
          <div
            className="portrait-area"
            aria-label="Portrait of Mohamed Elnagar"
          >
            <div className="portrait-glow" />
            <div className="portrait-frame">
              <img
                className="portrait-photo"
                src="/mohamed-elnagar.jpg"
                alt="Mohamed Elnagar, Frontend Software Engineer"
              />
            </div>
            <div className="portrait-caption">
              <span className="caption-line" />{" "}
              <span>REACT / NEXT.JS / DIGITAL PRODUCTS</span>
            </div>
          </div>
          <aside className="hero-contact">
            <span className="contact-index">{t.contact_me}</span>
            <a href="mailto:mohamedsaadyelnagar@gmail.com">
              mohamedsaadyelnagar@gmail.com <Arrow />
            </a>
            <a href="tel:+201026454879">
              +201026454879 <Arrow />
            </a>
            <a
              href="https://www.linkedin.com/in/mohamed-elnagar-b2aab72a9"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <Arrow />
            </a>
            <a
              href="https://www.github.com/mohamedsaady99"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <Arrow />
            </a>
            <span className="hero-location">⌖ &nbsp;{t.location}</span>
          </aside>
        </div>
        <div className="hero-bottom wrap">
          <span>REACT.JS</span>
          <i /> <span>NEXT.JS</span>
          <i /> <span>TYPESCRIPT</span>
          <i /> <span>PRODUCT ENGINEERING</span>
          <span className="hero-bottom-note">01 — 05</span>
        </div>
      </section>

      <section
        className="about light-section section-pad bg-elnagar-cream text-elnagar-ink"
        id="about"
      >
        <div className="wrap about-grid">
          <div className="about-copy">
            <p className="section-kicker">{t.aboutKicker}</p>
            <h2>
              {t.aboutTitle1}
              <br />
              <span>{t.aboutTitle2}</span>
            </h2>
            <p>{t.aboutP1}</p>
            <p>{t.aboutP2}</p>
            <div className="values">
              <span>✳ &nbsp; Problem-solving</span>
              <span>✳ &nbsp; Teamwork</span>
              <span>✳ &nbsp; Clean code</span>
            </div>
          </div>
          <div className="skills">
            <p className="section-kicker">{t.skillsKicker}</p>
            <h3>{t.skillsTitle}</h3>
            <div className="skill-list">
              {skillGroups.map((g, i) => (
                <div className="skill-row" key={g.title}>
                  <div className="skill-number">0{i + 1}</div>
                  <div>
                    <h4>{g.title}</h4>
                    <p>{g.items}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        className="projects dark-section section-pad bg-elnagar-ink text-elnagar-cream"
        id="projects"
      >
        <div className="wrap">
          <div className="section-heading">
            <div>
              <p className="section-kicker">{t.projectKicker}</p>
              <h2>{t.projectTitle}</h2>
              <p className="section-description">{t.projectDesc}</p>
            </div>
            <span className="section-index">{t.allProjects} </span>
          </div>
          <div className="project-grid">
            {projects.map((p, i) => (
              <article className="project-card" key={p.name}>
                <div className={`project-art art-${p.style}`}>
                  <Image
                    src={`${p.image}`}
                    alt="project image"
                    className="project-image"
                    width="300"
                    height="300"
                  />
                  <span className="art-label">{p.category.toUpperCase()}</span>
                </div>
                <div className="project-info">
                  <div className="project-title-row">
                    <h3>{p.name}</h3>
                    <p className="project-subtitle">{p.en}</p>
                  </div>

                  <p className="project-tech">{p.tech}</p>
                  {p.url ? (
                    <a
                      className="project-link"
                      href={p.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {t.openProject}
                      <Arrow />
                    </a>
                  ) : (
                    <span className="project-unavailable">{t.noLink}</span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="experience light-section section-pad bg-elnagar-paper text-elnagar-ink"
        id="experience"
      >
        <div className="wrap">
          <div className="section-heading exp-heading">
            <div>
              <p className="section-kicker">{t.expKicker}</p>
              <h2>{t.expTitle}</h2>
            </div>
            <span className="section-index">2021 — 2026</span>
          </div>
          <div className="timeline">
            {experiences.map((e, i) => (
              <article className="timeline-item" key={e.company}>
                <div className="timeline-marker">0{i + 1}</div>
                <div className="timeline-content">
                  <div className="timeline-top">
                    <div>
                      <h3>{e.role}</h3>
                      <p className="company-name">{e.company}</p>
                    </div>
                    <span className="timeline-date">{e.date}</span>
                  </div>
                  <ul>
                    {e.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
          <div className="bottom-details">
            <div>
              <p className="section-kicker">{t.education}</p>
              <h3>{t.degree}</h3>
              <p>{t.uni}</p>
            </div>
            <div>
              <p className="section-kicker">{t.languagesTitle}</p>
              <p>{t.langDetails}</p>
              <p className="section-kicker strength-kicker">{t.strengths}</p>
              <p>{t.strengthsDetails}</p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="contact-section dark-section section-pad bg-elnagar-ink text-elnagar-cream"
        id="contact"
      >
        <div className="wrap contact-grid">
          <div>
            <p className="section-kicker">{t.contactKicker}</p>
            <h2>{t.contactTitle}</h2>
            <p className="section-description">{t.contactDesc}</p>
            <a
              className="button button-gold"
              href="mailto:mohamedsaadyelnagar@gmail.com"
            >
              {t.email}
              <Arrow />
            </a>
          </div>
          <div className="contact-links">
            <a href="mailto:mohamedsaadyelnagar@gmail.com">
              <span>01</span> mohamedsaadyelnagar@gmail.com <Arrow />
            </a>
            <a href="tel:+201026454879">
              <span>02</span> +201026454879 <Arrow />
            </a>
            <a
              href="https://www.linkedin.com/in/mohamed-elnagar-b2aab72a9"
              target="_blank"
              rel="noreferrer"
            >
              <span>03</span> LinkedIn <Arrow />
            </a>
            <a
              href="https://www.github.com/mohamedsaady99"
              target="_blank"
              rel="noreferrer"
            >
              <span>04</span> GitHub <Arrow />
            </a>
          </div>
          <div className="footer-brand">
            <BrandLogo />
          </div>
        </div>
        <footer className="wrap footer">
          <span>
            © {new Date().getFullYear()} ELNAGAR. {t.footer}
          </span>
        </footer>
      </section>
    </main>
  );
}
