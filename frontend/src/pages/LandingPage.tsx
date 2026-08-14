import { useState, type ReactNode } from "react"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Cloud,
  File,
  HardDrive,
  Lock,
  Menu,
  Play,
  Server,
  ShieldCheck,
  X,
  Zap,
} from "lucide-react"

const navItems = [
  { label: "How it works", id: "how-it-works" },
  { label: "Architecture", id: "architecture" },
  { label: "Features", id: "features" },
  { label: "Pricing", id: "pricing" },
  { label: "FAQ", id: "faq" },
]

const features = [
  {
    icon: Server,
    title: "Distributed by design",
    description:
      "Files are intelligently distributed across independent storage nodes instead of relying on a single machine.",
  },
  {
    icon: ShieldCheck,
    title: "Built for failure",
    description:
      "Replicated chunks keep your files available even when individual storage nodes go offline.",
  },
  {
    icon: Zap,
    title: "Fast transfers",
    description:
      "Parallelized file processing and optimized storage paths keep uploads and downloads responsive.",
  },
  {
    icon: Lock,
    title: "Private by default",
    description:
      "Your files remain protected through authenticated access and controlled sharing permissions.",
  },
]

const nodes = [
  { name: "Node 01", usage: 72, status: "Online" },
  { name: "Node 02", usage: 61, status: "Online" },
  { name: "Node 03", usage: 48, status: "Online" },
  { name: "Node 04", usage: 84, status: "Online" },
]

const faqs = [
  {
    question: "What is ShardFS?",
    answer:
      "ShardFS is a distributed file storage system designed to split, replicate and manage files across multiple storage nodes.",
  },
  {
    question: "What happens when a storage node fails?",
    answer:
      "The system detects unavailable nodes and retrieves replicated chunks from healthy nodes. The storage layer can then restore the desired replication level.",
  },
  {
    question: "Can I add more storage nodes?",
    answer:
      "Yes. The architecture is designed around independently managed storage nodes, allowing additional capacity to be introduced without changing the client experience.",
  },
  {
    question: "Are my files stored on a single server?",
    answer:
      "No. Files can be divided into chunks and replicated across multiple nodes depending on the configured replication strategy.",
  },
]

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

export default function LandingPage() {
    const navigate = useNavigate()
  const [mobileMenu, setMobileMenu] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    })

    setMobileMenu(false)
  }

  return (
    <div className="min-h-screen overflow-hidden bg-[#050505] text-white selection:bg-white selection:text-black">
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute left-[-15%] top-[-10%] h-[500px] w-[500px] rounded-full bg-white/[0.035] blur-[120px]" />

        <div className="absolute right-[-15%] top-[25%] h-[500px] w-[500px] rounded-full bg-white/[0.025] blur-[120px]" />

        <div className="absolute bottom-[-10%] left-[30%] h-[450px] w-[450px] rounded-full bg-white/[0.02] blur-[120px]" />
      </div>

      {/* Navbar */}
      <nav className="fixed left-1/2 top-5 z-50 w-[calc(100%-32px)] max-w-6xl -translate-x-1/2">
        <div className="rounded-2xl border border-white/10 bg-white/[0.055] px-4 py-3 shadow-2xl shadow-black/30 backdrop-blur-2xl">
          <div className="flex items-center justify-between">
            <button
              onClick={() => scrollTo("hero")}
              className="flex items-center gap-3"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-white text-black">
                <HardDrive size={18} strokeWidth={2.5} />
              </div>

              <span className="text-lg font-semibold tracking-tight">
                ShardFS
              </span>
            </button>

            <div className="hidden items-center gap-8 md:flex">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="text-sm text-white/55 transition-colors duration-300 hover:text-white"
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="hidden items-center gap-2 md:flex">
              <button
                onClick={() => {
                  navigate("/login")
                }}
                className="rounded-xl px-4 py-2.5 text-sm text-white/70 transition hover:text-white"
              >
                Sign in
              </button>

              <button
                onClick={() => navigate("/login")}
                className="group flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-medium text-black transition duration-300 hover:bg-white/90"
              >
                Get started

                <ArrowUpRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </button>
            </div>

            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="rounded-xl border border-white/10 p-2 md:hidden"
            >
              {mobileMenu ? <X size={19} /> : <Menu size={19} />}
            </button>
          </div>

          {mobileMenu && (
            <motion.div
              initial={{
                opacity: 0,
                height: 0,
              }}
              animate={{
                opacity: 1,
                height: "auto",
              }}
              className="mt-4 border-t border-white/10 pt-4 md:hidden"
            >
              <div className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollTo(item.id)}
                    className="rounded-xl px-3 py-3 text-left text-sm text-white/60 transition hover:bg-white/5 hover:text-white"
                  >
                    {item.label}
                  </button>
                ))}

                <button
                  onClick={() => scrollTo("login")}
                  className="mt-2 rounded-xl border border-white/10 px-3 py-3 text-left text-sm text-white/70"
                >
                  Sign in
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </nav>

      <main className="relative z-10">
        {/* HERO */}
        <section
          id="hero"
          className="relative flex min-h-screen items-center px-5 pb-20 pt-36 sm:px-8"
        >
          <div className="mx-auto w-full max-w-7xl">
            <motion.div
              variants={stagger}
              initial="hidden"
              animate="visible"
              className="grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]"
            >
              <div className="max-w-2xl">
                <motion.div
                  variants={fadeUp}
                  className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.045] px-3.5 py-2 text-xs text-white/60 backdrop-blur-xl"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />

                  Distributed storage, engineered for reliability
                </motion.div>

                <motion.h1
                  variants={fadeUp}
                  className="text-5xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-[78px]"
                >
                  Your files.
                  <br />

                  <span className="text-white/35">Everywhere.</span>

                  <br />

                  <span className="text-white">Always available.</span>
                </motion.h1>

                <motion.p
                  variants={fadeUp}
                  className="mt-7 max-w-xl text-base leading-7 text-white/45 sm:text-lg"
                >
                  ShardFS distributes your files across multiple storage
                  nodes, providing resilience, intelligent replication and
                  reliable access without putting everything on a single
                  machine.
                </motion.p>

                <motion.div
                  variants={fadeUp}
                  className="mt-9 flex flex-wrap gap-3"
                >
                  <button
                    onClick={() => scrollTo("login")}
                    className="group flex items-center gap-3 rounded-xl bg-white px-6 py-3.5 text-sm font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/90 hover:shadow-xl hover:shadow-white/10"
                  >
                    Start building

                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </button>

                  <button
                    onClick={() => scrollTo("how-it-works")}
                    className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.035] px-6 py-3.5 text-sm text-white/75 backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/[0.07]"
                  >
                    <Play size={14} fill="currentColor" />

                    See how it works
                  </button>
                </motion.div>

                <motion.div
                  variants={fadeUp}
                  className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-xs text-white/35"
                >
                  <span className="flex items-center gap-2">
                    <Check size={13} />
                    No credit card
                  </span>

                  <span className="flex items-center gap-2">
                    <Check size={13} />
                    Open architecture
                  </span>

                  <span className="flex items-center gap-2">
                    <Check size={13} />
                    Built with Docker
                  </span>
                </motion.div>
              </div>

              <HeroStorageVisual />
            </motion.div>
          </div>
        </section>

        {/* METRICS */}
        <section className="px-5 pb-24 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-2 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] backdrop-blur-xl sm:grid-cols-4">
              <Metric value="99.9%" label="Target availability" />
              <Metric value="3×" label="Default replication" />
              <Metric value="24/7" label="Node monitoring" />
              <Metric value="SHA-256" label="Integrity checks" />
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how-it-works" className="px-5 py-28 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="How it works"
              title="One interface. Multiple storage nodes."
              description="ShardFS hides the complexity of distributed storage behind a simple file management experience."
            />

            <div className="mt-16 grid gap-5 md:grid-cols-3">
              <ArchitectureCard
                number="01"
                icon={<File size={21} />}
                title="Upload"
                description="Files enter through a single API endpoint and are prepared for distributed storage."
              />

              <ArchitectureCard
                number="02"
                icon={<Server size={21} />}
                title="Distribute"
                description="Files are split into manageable chunks and placed across healthy storage nodes."
              />

              <ArchitectureCard
                number="03"
                icon={<ShieldCheck size={21} />}
                title="Replicate"
                description="Important data is replicated so individual node failures don't make your files unavailable."
              />
            </div>
          </div>
        </section>

        {/* ARCHITECTURE */}
        <section id="architecture" className="px-5 py-28 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] backdrop-blur-2xl">
              <div className="grid lg:grid-cols-[0.8fr_1.2fr]">
                <div className="p-8 sm:p-12 lg:p-16">
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/35">
                    Architecture
                  </p>

                  <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
                    Built to keep working when things break.
                  </h2>

                  <p className="mt-5 max-w-lg leading-7 text-white/45">
                    A coordinator manages metadata and placement while
                    independent storage nodes handle the actual file data.
                    Failure becomes a recoverable event instead of a complete
                    outage.
                  </p>

                  <div className="mt-8 space-y-3">
                    {[
                      "Node health monitoring",
                      "Chunk-level replication",
                      "Automatic integrity verification",
                      "Horizontal storage expansion",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 text-sm text-white/65"
                      >
                        <div className="flex h-6 w-6 items-center justify-center rounded-full border border-white/10 bg-white/5">
                          <Check size={13} />
                        </div>

                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <ArchitectureDiagram />
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section id="features" className="px-5 py-28 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeader
              eyebrow="Features"
              title="Storage infrastructure without the complexity."
              description="Everything you need to experiment with and operate a fault-tolerant distributed storage system."
            />

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2,
              }}
              variants={stagger}
              className="mt-16 grid gap-4 sm:grid-cols-2"
            >
              {features.map((feature) => (
                <motion.div
                  key={feature.title}
                  variants={fadeUp}
                  whileHover={{
                    y: -4,
                  }}
                  className="group rounded-2xl border border-white/10 bg-white/[0.025] p-7 backdrop-blur-xl transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.045]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                    <feature.icon size={19} />
                  </div>

                  <h3 className="mt-6 text-lg font-medium">
                    {feature.title}
                  </h3>

                  <p className="mt-3 max-w-md text-sm leading-6 text-white/40">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* NODE MONITOR */}
        <section className="px-5 py-28 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-8 backdrop-blur-xl sm:p-10">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-white/30">
                      Live infrastructure
                    </p>

                    <h3 className="mt-2 text-2xl font-semibold">
                      Storage nodes
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/50">
                    <span className="h-1.5 w-1.5 rounded-full bg-white" />

                    4 online
                  </div>
                </div>

                <div className="mt-8 space-y-3">
                  {nodes.map((node, index) => (
                    <motion.div
                      key={node.name}
                      initial={{
                        opacity: 0,
                        x: -12,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        delay: index * 0.08,
                      }}
                      className="rounded-xl border border-white/8 bg-black/20 p-4"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5">
                            <Server size={14} />
                          </div>

                          <div>
                            <p className="text-sm font-medium">
                              {node.name}
                            </p>

                            <p className="mt-0.5 text-xs text-white/30">
                              {node.status}
                            </p>
                          </div>
                        </div>

                        <span className="text-sm text-white/50">
                          {node.usage}%
                        </span>
                      </div>

                      <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/5">
                        <motion.div
                          initial={{
                            width: 0,
                          }}
                          whileInView={{
                            width: `${node.usage}%`,
                          }}
                          viewport={{
                            once: true,
                          }}
                          transition={{
                            duration: 1,
                            delay: 0.2 + index * 0.08,
                            ease: "easeOut",
                          }}
                          className="h-full rounded-full bg-white/70"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-8 backdrop-blur-xl sm:p-10">
                <div className="absolute right-[-50px] top-[-50px] h-48 w-48 rounded-full border border-white/10" />

                <div className="absolute right-[-20px] top-[-20px] h-32 w-32 rounded-full border border-white/10" />

                <div className="relative">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                    <Cloud size={19} />
                  </div>

                  <h3 className="mt-7 text-2xl font-semibold">
                    One file.
                    <br />
                    Multiple homes.
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-white/40">
                    Every uploaded file can be represented as chunks distributed
                    across independent nodes.
                  </p>

                  <div className="mt-10 flex items-center justify-center">
                    <FileDistribution />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PRICING / CTA */}
        <section id="pricing" className="px-5 py-28 sm:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-8 text-center backdrop-blur-2xl sm:p-14">
              <div className="absolute left-1/2 top-0 h-40 w-96 -translate-x-1/2 rounded-full bg-white/[0.05] blur-3xl" />

              <div className="relative">
                <p className="text-xs uppercase tracking-[0.2em] text-white/35">
                  Free to build
                </p>

                <h2 className="mx-auto mt-5 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
                  Start building your own distributed storage system.
                </h2>

                <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-white/40">
                  Run the complete ShardFS stack locally with Docker and
                  experiment with distributed storage without paying for
                  infrastructure.
                </p>

                <div className="mt-8 flex justify-center">
                  <button
                    onClick={() => scrollTo("login")}
                    className="group flex items-center gap-3 rounded-xl bg-white px-6 py-3.5 text-sm font-medium text-black transition hover:-translate-y-0.5"
                  >
                    Get started

                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="px-5 py-28 sm:px-8">
          <div className="mx-auto max-w-3xl">
            <SectionHeader
              eyebrow="FAQ"
              title="Questions, answered."
              description="A few things worth knowing before you start."
            />

            <div className="mt-12 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/[0.025] px-6 backdrop-blur-xl">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index

                return (
                  <div key={faq.question}>
                    <button
                      onClick={() =>
                        setOpenFaq(isOpen ? null : index)
                      }
                      className="flex w-full items-center justify-between gap-5 py-6 text-left"
                    >
                      <span className="text-sm font-medium sm:text-base">
                        {faq.question}
                      </span>

                      <ChevronDown
                        size={18}
                        className={`shrink-0 text-white/40 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <motion.div
                      initial={false}
                      animate={{
                        height: isOpen ? "auto" : 0,
                        opacity: isOpen ? 1 : 0,
                      }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pr-10 text-sm leading-6 text-white/40">
                        {faq.answer}
                      </p>
                    </motion.div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section id="login" className="px-5 pb-28 pt-10 sm:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-white/10 bg-white/[0.025] px-6 py-8 backdrop-blur-xl sm:flex-row sm:px-8">
              <div>
                <p className="text-lg font-medium">
                  Ready to build?
                </p>

                <p className="mt-1 text-sm text-white/35">
                  Start with a local distributed storage cluster.
                </p>
              </div>

              <button className="group flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-white/90"
              onClick={()=>{
                navigate("/register")
              }}>
                Create your account

                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-white/10 px-5 py-10 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white text-black">
              <HardDrive size={15} />
            </div>

            <span className="text-sm font-medium">
              ShardFS
            </span>
          </div>

          <div className="flex items-center gap-5 text-white/35">
            <button className="text-xs transition hover:text-white">
              Documentation
            </button>

            <button className="text-xs transition hover:text-white">
              GitHub
            </button>

            <button className="text-xs transition hover:text-white">
              Privacy
            </button>

            <button className="text-xs transition hover:text-white">
              Terms
            </button>
          </div>

          <p className="text-xs text-white/25">
            © 2026 ShardFS. Built for reliability.
          </p>
        </div>
      </footer>
    </div>
  )
}

function HeroStorageVisual() {
  return (
    <div className="relative mx-auto h-[520px] w-full max-w-[620px]">
      <div className="absolute left-1/2 top-1/2 h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.07]" />

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-1/2 top-1/2 h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/[0.08]"
      />

      <FloatingNode
        className="left-[4%] top-[20%]"
        delay={0}
        icon={<Server size={17} />}
        title="Node 01"
        subtitle="Online · 72%"
      />

      <FloatingNode
        className="right-[2%] top-[12%]"
        delay={0.2}
        icon={<Server size={17} />}
        title="Node 04"
        subtitle="Online · 84%"
      />

      <FloatingNode
        className="right-[8%] bottom-[19%]"
        delay={0.4}
        icon={<ShieldCheck size={17} />}
        title="Protected"
        subtitle="2× replicated"
      />

      <motion.div
        initial={{
          opacity: 0,
          y: 20,
          scale: 0.96,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 0.8,
          delay: 0.4,
        }}
        className="absolute left-1/2 top-1/2 w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-white/15 bg-[#111]/80 p-5 shadow-2xl shadow-black/50 backdrop-blur-2xl sm:w-[380px]"
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium">
              Storage overview
            </p>

            <p className="mt-1 text-xs text-white/35">
              All systems operational
            </p>
          </div>

          <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5">
            <ActivityPulse />
          </div>
        </div>

        <div className="mt-7 rounded-2xl border border-white/8 bg-black/20 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-black">
                <File size={18} />
              </div>

              <div>
                <p className="text-sm font-medium">
                  quarterly-report.pdf
                </p>

                <p className="mt-1 text-xs text-white/30">
                  2.4 MB
                </p>
              </div>
            </div>

            <Check size={16} className="text-white/60" />
          </div>

          <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-white/5">
            <motion.div
              initial={{
                width: 0,
              }}
              animate={{
                width: "100%",
              }}
              transition={{
                duration: 1.5,
                delay: 1,
              }}
              className="h-full rounded-full bg-white"
            />
          </div>

          <div className="mt-2 flex justify-between text-[10px] text-white/25">
            <span>4 chunks</span>
            <span>2× replicated</span>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-2">
          {["Node 01", "Node 02", "Node 03"].map((node) => (
            <div
              key={node}
              className="rounded-xl border border-white/8 bg-white/[0.025] p-3"
            >
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-white" />

                <span className="text-[10px] text-white/40">
                  Online
                </span>
              </div>

              <p className="mt-2 text-xs text-white/65">
                {node}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[8%] left-[3%] rounded-2xl border border-white/10 bg-white/[0.055] px-4 py-3 shadow-xl backdrop-blur-xl"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5">
            <Lock size={15} />
          </div>

          <div>
            <p className="text-xs font-medium">
              Integrity verified
            </p>

            <p className="mt-0.5 text-[10px] text-white/30">
              SHA-256 checksum
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

function FloatingNode({
  className,
  delay,
  icon,
  title,
  subtitle,
}: {
  className: string
  delay: number
  icon: ReactNode
  title: string
  subtitle: string
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.9,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -7, 0],
      }}
      transition={{
        opacity: {
          duration: 0.6,
          delay,
        },
        scale: {
          duration: 0.6,
          delay,
        },
        y: {
          duration: 4 + delay,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      className={`absolute ${className} rounded-2xl border border-white/10 bg-white/[0.055] p-3 shadow-xl backdrop-blur-2xl`}
    >
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5">
          {icon}
        </div>

        <div>
          <p className="text-xs font-medium">
            {title}
          </p>

          <p className="mt-1 text-[10px] text-white/30">
            {subtitle}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

function ActivityPulse() {
  return (
    <div className="relative flex h-3 w-3 items-center justify-center">
      <motion.span
        animate={{
          scale: [1, 1.8, 1],
          opacity: [0.7, 0, 0.7],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute h-2 w-2 rounded-full bg-white"
      />

      <span className="h-1.5 w-1.5 rounded-full bg-white" />
    </div>
  )
}

function Metric({
  value,
  label,
}: {
  value: string
  label: string
}) {
  return (
    <div className="border-white/10 px-6 py-7 text-center first:border-0 sm:border-l">
      <p className="text-2xl font-semibold tracking-tight">
        {value}
      </p>

      <p className="mt-1 text-xs text-white/30">
        {label}
      </p>
    </div>
  )
}

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description: string
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.4,
      }}
      variants={fadeUp}
      className="max-w-2xl"
    >
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/30">
        {eyebrow}
      </p>

      <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>

      <p className="mt-4 text-sm leading-6 text-white/40 sm:text-base">
        {description}
      </p>
    </motion.div>
  )
}

function ArchitectureCard({
  number,
  icon,
  title,
  description,
}: {
  number: string
  icon: ReactNode
  title: string
  description: string
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      variants={fadeUp}
      whileHover={{
        y: -5,
      }}
      className="group rounded-2xl border border-white/10 bg-white/[0.025] p-7 backdrop-blur-xl transition-colors hover:border-white/20 hover:bg-white/[0.045]"
    >
      <div className="flex items-start justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5">
          {icon}
        </div>

        <span className="font-mono text-xs text-white/20">
          {number}
        </span>
      </div>

      <h3 className="mt-8 text-lg font-medium">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-white/40">
        {description}
      </p>
    </motion.div>
  )
}

function ArchitectureDiagram() {
  return (
    <div className="relative min-h-[500px] overflow-hidden border-t border-white/10 bg-black/20 lg:border-l lg:border-t-0">
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] [background-size:45px_45px]" />

      <div className="relative flex min-h-[500px] items-center justify-center p-8">
        <div className="relative w-full max-w-xl">
          <div className="flex justify-center">
            <div className="rounded-2xl border border-white/15 bg-white/[0.07] px-7 py-5 text-center shadow-xl backdrop-blur-xl">
              <Cloud size={22} className="mx-auto text-white/70" />

              <p className="mt-3 text-sm font-medium">
                ShardFS API
              </p>

              <p className="mt-1 text-xs text-white/30">
                Coordinator
              </p>
            </div>
          </div>

          <div className="mx-auto h-16 w-px bg-gradient-to-b from-white/30 to-white/5" />

          <div className="mx-auto h-px w-[72%] bg-white/10" />

          <div className="grid grid-cols-3 gap-3 pt-0">
            {[1, 2, 3].map((node, index) => (
              <motion.div
                key={node}
                initial={{
                  opacity: 0,
                  y: 12,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.15,
                }}
                className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl"
              >
                <div className="absolute -top-0.5 left-1/2 h-5 w-px -translate-y-full bg-white/10" />

                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                  <Server size={17} />
                </div>

                <p className="mt-4 text-xs font-medium">
                  Node 0{node}
                </p>

                <div className="mt-3 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />

                  <span className="text-[10px] text-white/30">
                    Healthy
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <div className="rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-[10px] text-white/30 backdrop-blur-xl">
              Replication factor: 2
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function FileDistribution() {
  return (
    <div className="relative h-48 w-full">
      <div className="absolute left-1/2 top-0 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-2xl border border-white/15 bg-white text-black shadow-lg">
        <File size={20} />
      </div>

      <div className="absolute left-1/2 top-[60px] h-[50px] w-px -translate-x-1/2 bg-white/15" />

      <div className="absolute left-[18%] top-[108px] h-px w-[64%] bg-white/15" />

      {[18, 50, 82].map((position, index) => (
        <div
          key={index}
          style={{
            left: `${position}%`,
          }}
          className="absolute top-[108px] -translate-x-1/2"
        >
          <div className="h-10 w-px bg-white/15" />

          <div className="mt-0 w-20 rounded-xl border border-white/10 bg-white/[0.04] p-2 text-center">
            <Server size={13} className="mx-auto text-white/60" />

            <p className="mt-1 text-[9px] text-white/30">
              Node {index + 1}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}