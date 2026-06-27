"use client";

import { ArrowUpRight, Check, CircleDot, Github, Linkedin, Mail } from "lucide-react";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { MotionSection } from "@/components/MotionSection";
import { SiteHeader } from "@/components/SiteHeader";
import {
  adminModules,
  aiPrompts,
  architecture,
  metrics,
  projects,
  roleHighlights,
  skills,
  timeline
} from "@/data/portfolio";

const ease = [0.22, 1, 0.36, 1] as const;
const repeatedTicker = [
  "React",
  "Next.js",
  ".NET 8",
  "Azure",
  "Supabase",
  "RAG",
  "AI Assistant",
  "Clean Architecture"
];

export default function Home() {
  const mouseX = useMotionValue(680);
  const mouseY = useMotionValue(260);
  const smoothX = useSpring(mouseX, { stiffness: 90, damping: 28 });
  const smoothY = useSpring(mouseY, { stiffness: 90, damping: 28 });
  const { scrollYProgress } = useScroll();
  const progressScale = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });
  const heroTilt = useTransform(smoothX, [0, 1200], [-4, 4]);

  return (
    <main className="relative overflow-hidden">
      <div className="noise" />
      <motion.div
        className="fixed left-0 top-0 z-[60] h-1 origin-left bg-acid"
        style={{ scaleX: progressScale, width: "100%" }}
      />
      <SiteHeader />

      <section
        className="relative min-h-screen overflow-hidden border-b border-line pt-16"
        onMouseMove={(event) => {
          mouseX.set(event.clientX);
          mouseY.set(event.clientY);
        }}
      >
        <div className="scan-field" />
        <motion.div
          className="pointer-events-none absolute h-72 w-72 rounded-full bg-acid/20 blur-3xl"
          style={{ left: smoothX, top: smoothY, x: "-50%", y: "-50%" }}
        />
        <motion.div
          className="pointer-events-none absolute right-[6%] top-28 hidden h-80 w-80 border border-line lg:block"
          style={{ rotate: heroTilt }}
          animate={{ y: [0, -18, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="signal-ring" />
          <span className="signal-ring" />
          <span className="signal-ring" />
        </motion.div>

        <div className="relative mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl grid-cols-1 lg:grid-cols-[1.16fr_0.84fr]">
          <div className="flex flex-col justify-between border-line px-4 py-10 sm:px-6 lg:border-r lg:px-8 lg:py-14">
            <div className="max-w-4xl">
              <motion.p
                className="mb-6 text-xs font-bold uppercase tracking-[0.32em] text-acid"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease }}
              >
                Full stack development / AI engineering path
              </motion.p>
              <motion.h1
                className="text-balance text-[clamp(3.25rem,10vw,9rem)] font-black uppercase leading-[0.82] tracking-normal"
                initial="hidden"
                animate="show"
                variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: 0.06, delayChildren: 0.18 } }
                }}
              >
                {["Adithya", "Portfolio", "Platform"].map((word) => (
                  <motion.span
                    key={word}
                    className="hero-letter mr-[0.18em]"
                    variants={{
                      hidden: { opacity: 0, y: 80, rotateX: -70 },
                      show: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.85, ease } }
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.h1>
              <motion.p
                className="mt-8 max-w-2xl text-lg leading-8 text-cloud/72"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.55, ease }}
              >
                A professional portfolio, admin-managed content system, and future AI assistant
                foundation built with Next.js, ASP.NET Core, Supabase, and cloud deployment in mind.
              </motion.p>
            </div>

            <div className="mt-12 grid gap-3 sm:grid-cols-3">
              {roleHighlights.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    className="magnetic-card border border-line bg-panel/58 p-4"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.72, ease }}
                    whileHover={{ y: -8, rotate: -1, transition: { duration: 0.25 } }}
                  >
                    <Icon className="mb-5 text-aqua" size={22} />
                    <p className="text-sm font-medium leading-6 text-cloud/82">{item.label}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <motion.div
            className="kinetic-grid flex flex-col justify-between bg-cloud text-ink"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            transition={{ duration: 1.1, delay: 0.25, ease }}
          >
            <div className="border-b border-ink/15 p-4 sm:p-6 lg:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-ink/55">Live stack map</p>
              <div className="mt-8 grid grid-cols-2 gap-px bg-ink/12">
                {architecture.map((item, index) => (
                  <motion.div
                    key={item.label}
                    className="bg-cloud/92 p-4"
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.52 + index * 0.06, ease }}
                    whileHover={{ backgroundColor: "#d8ff63", scale: 1.03 }}
                  >
                    <p className="text-lg font-black uppercase">{item.label}</p>
                    <p className="mt-2 text-sm leading-6 text-ink/62">{item.detail}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="p-4 sm:p-6 lg:p-8">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-ink/55">Platform signals</p>
              <div className="mt-8 grid grid-cols-2 border border-ink/15">
                {metrics.map((metric, index) => (
                  <motion.div
                    key={metric.label}
                    className="border-b border-r border-ink/15 p-5 last:border-r-0"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.86 + index * 0.08, ease }}
                  >
                    <p className="text-5xl font-black uppercase leading-none">{metric.value}</p>
                    <p className="mt-3 text-sm leading-5 text-ink/64">{metric.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="ticker border-b border-line bg-acid py-3 text-ink">
        <div className="ticker-track">
          {[...repeatedTicker, ...repeatedTicker].map((item, index) => (
            <span key={`${item}-${index}`} className="mx-5 text-sm font-black uppercase tracking-[0.24em]">
              {item}
            </span>
          ))}
        </div>
      </div>

      <MotionSection id="about" className="border-b border-line">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8 lg:py-28">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-acid">Understanding</p>
            <h2 className="mt-4 text-4xl font-black uppercase leading-none sm:text-6xl">What this platform proves</h2>
          </div>
          <div className="grid gap-px bg-line sm:grid-cols-3">
            {[
              "Clean full stack architecture with public pages, admin CMS, API services, and persistence.",
              "Modern React learning through App Router, components, hooks, forms, SEO, and animation.",
              "AI readiness through a future knowledge base, embeddings, RAG, and Ask Adithya AI."
            ].map((body, index) => (
              <motion.div
                key={body}
                className="magnetic-card bg-ink p-6"
                whileHover={{ y: -10, scale: 1.015 }}
                transition={{ duration: 0.25 }}
              >
                <p className="text-sm font-bold text-aqua">0{index + 1}</p>
                <p className="mt-10 text-lg font-medium leading-8 text-cloud/78">{body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection id="experience" className="border-b border-line bg-cloud text-ink">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-ink/50">How it evolves</p>
          <h2 className="mt-4 max-w-4xl text-4xl font-black uppercase leading-none sm:text-6xl">
            From full stack delivery to AI engineering
          </h2>
          <div className="mt-14 grid gap-px bg-ink/14 lg:grid-cols-3">
            {timeline.map((item, index) => (
              <motion.article
                key={item.phase}
                className="bg-cloud p-6"
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-90px" }}
                transition={{ duration: 0.62, delay: index * 0.12, ease }}
                whileHover={{ y: -12, backgroundColor: "#d8ff63" }}
              >
                <motion.p
                  className="text-7xl font-black leading-none text-ink/12"
                  animate={{ opacity: [0.12, 0.28, 0.12] }}
                  transition={{ duration: 3.2, repeat: Infinity, delay: index * 0.4 }}
                >
                  {item.phase}
                </motion.p>
                <h3 className="mt-8 text-2xl font-black uppercase">{item.title}</h3>
                <p className="mt-5 text-base leading-8 text-ink/66">{item.body}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection id="projects" className="border-b border-line">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-acid">Featured projects</p>
              <h2 className="mt-4 text-4xl font-black uppercase leading-none sm:text-6xl">Work that compounds</h2>
            </div>
            <a href="#contact" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-aqua">
              Discuss roadmap <ArrowUpRight size={18} />
            </a>
          </div>

          <div className="mt-14 grid gap-px bg-line lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.article
                key={project.title}
                className="magnetic-card bg-panel p-6 transition hover:bg-cloud hover:text-ink"
                initial={{ opacity: 0, y: 42, rotateX: -8 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: "-90px" }}
                transition={{ duration: 0.65, delay: index * 0.12, ease }}
                whileHover={{ y: -14, rotate: index === 1 ? 1 : -1 }}
              >
                <div className="flex items-center justify-between gap-4">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-rose">{project.type}</p>
                  {project.featured ? (
                    <motion.span
                      animate={{ scale: [1, 1.35, 1], opacity: [0.6, 1, 0.6] }}
                      transition={{ duration: 1.8, repeat: Infinity, delay: index * 0.25 }}
                    >
                      <CircleDot size={18} />
                    </motion.span>
                  ) : null}
                </div>
                <h3 className="mt-16 text-3xl font-black uppercase leading-none">{project.title}</h3>
                <p className="mt-6 text-base leading-7 opacity-72">{project.description}</p>
                <div className="mt-8 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="border border-current px-3 py-1 text-xs font-bold uppercase tracking-[0.14em]">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection id="skills" className="border-b border-line">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[0.65fr_1.35fr] lg:px-8 lg:py-28">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-acid">Capability index</p>
            <h2 className="mt-4 text-4xl font-black uppercase leading-none sm:text-6xl">Skill cards</h2>
          </div>
          <div className="grid gap-px bg-line sm:grid-cols-2">
            {skills.map((skill) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  className="magnetic-card bg-ink p-5"
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-70px" }}
                  whileHover={{ scale: 1.025 }}
                  transition={{ duration: 0.45 }}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-2xl font-black uppercase">{skill.name}</p>
                      <p className="mt-1 text-sm text-cloud/50">{skill.category}</p>
                    </div>
                    <Icon className="text-aqua" size={22} />
                  </div>
                  <div className="mt-8 h-2 bg-cloud/10">
                    <motion.div
                      className="h-full bg-acid"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </MotionSection>

      <MotionSection id="ai-journey" className="border-b border-line bg-cloud text-ink">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-28">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-ink/50">Ask Adithya AI</p>
            <h2 className="mt-4 text-4xl font-black uppercase leading-none sm:text-6xl">A portfolio that can answer back</h2>
            <p className="mt-7 max-w-xl text-lg leading-8 text-ink/66">
              Phase 3 adds an assistant that responds from verified portfolio data: experience,
              projects, skills, blogs, and resume highlights.
            </p>
          </div>
          <div className="border border-ink/14">
            <div className="border-b border-ink/14 p-5">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-ink/50">Example prompts</p>
            </div>
            {aiPrompts.map((prompt, index) => (
              <motion.div
                key={prompt}
                className="flex items-center gap-4 border-b border-ink/14 p-5 last:border-b-0"
                initial={{ opacity: 0, x: 36 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.1, ease }}
                whileHover={{ x: 8, backgroundColor: "rgba(5,5,6,0.06)" }}
              >
                <motion.span
                  animate={{ rotate: [0, 10, 0], scale: [1, 1.2, 1] }}
                  transition={{ duration: 2.4, repeat: Infinity, delay: index * 0.2 }}
                >
                  <Check size={18} />
                </motion.span>
                <p className="text-base font-semibold">{prompt}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </MotionSection>

      <MotionSection id="admin" className="border-b border-line">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-acid">Admin system</p>
          <h2 className="mt-4 max-w-3xl text-4xl font-black uppercase leading-none sm:text-6xl">
            Built to manage the story, not hard-code it
          </h2>
          <div className="mt-14 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
            {adminModules.map((module, index) => (
              <motion.div
                key={module}
                className="magnetic-card flex min-h-28 items-end justify-between bg-panel p-5"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.48, delay: index * 0.07, ease }}
                whileHover={{ y: -8, backgroundColor: "#f5f2eb", color: "#050506" }}
              >
                <p className="text-xl font-black uppercase">{module}</p>
                <ArrowUpRight className="text-aqua" size={20} />
              </motion.div>
            ))}
          </div>
        </div>
      </MotionSection>

      <footer id="contact" className="bg-cloud text-ink">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_auto] lg:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-ink/50">Contact</p>
            <h2 className="mt-4 text-4xl font-black uppercase leading-none sm:text-6xl">Let&apos;s build the next version</h2>
          </div>
          <div className="flex items-end gap-3">
            <a aria-label="Email Adithya" href="mailto:adithya@example.com" className="grid h-12 w-12 place-items-center border border-ink/20 transition hover:-translate-y-1 hover:bg-acid">
              <Mail size={20} />
            </a>
            <a aria-label="GitHub profile" href="https://github.com/" className="grid h-12 w-12 place-items-center border border-ink/20 transition hover:-translate-y-1 hover:bg-acid">
              <Github size={20} />
            </a>
            <a aria-label="LinkedIn profile" href="https://www.linkedin.com/" className="grid h-12 w-12 place-items-center border border-ink/20 transition hover:-translate-y-1 hover:bg-acid">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
