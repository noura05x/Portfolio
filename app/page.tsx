import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Mail, MapPin, ExternalLink, Award, GraduationCap, Briefcase, Code2, Database, Cpu, Brain, Download, Sparkles, Trophy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navbar"
import { ScrollIndicator } from "@/components/scroll-indicator"
import { SmoothScroll } from "@/components/smooth-scroll"
import { AnimatedSection, AnimatedCard, ParticleBackground, AnimatedGradientBackground } from "@/components/client-animations"

const projects = [
  {
    title: "Minhaj – AI-Powered Curriculum Builder",
    description: "Agent-based AI system that generates structured curricula including syllabi, slides, labs, and exams from instructor input.",
    image: "/images/projects/minhaj.png",
    tags: ["Python", "LLMs", "Prompt Engineering", "Agent-based AI"],
    github: "https://github.com/FaiOnayq/minhaj.git",
  },
  {
    title: "SEEN – Smart Emergency Necklace System",
    description: "IoT wearable safety system with GPS tracking, emergency alerts, multimedia evidence capture, and secure cloud accessibility.",
    image: "/images/projects/seen.jpg",
    tags: ["IoT", "Embedded Systems", "Cloud", "Flutter"],
    github: "https://github.com/noura05x/Seen7.git",
  },
  {
    title: "WadiText – NLP Tool",
    description: "Arabic/English NLP app with emotion analysis, TF-IDF vectorization, model comparison, EDA charts, and Streamlit interface.",
    image: "/images/projects/waditext.png",
    tags: ["Python", "Streamlit", "scikit-learn", "NLP"],
    github: "https://github.com/noura05x/WadiText-NLP-ToolKit.git",
  },
  {
    title: "FindCourses – Course Search Platform",
    description: "Database-driven web application for searching and enrolling in courses using a user-friendly interface.",
    image: "/images/projects/findcourses.jpeg",
    tags: ["HTML", "CSS", "JavaScript", "PHP", "SQL"],
    github: "https://github.com/noura05x/FindCourses-course_Search_Platform.git",
  },
  {
    title: "Smartie – Smart Campus Service App",
    description: "Android application supporting daily university student services with SQLite local storage and offline access.",
    image: "/images/projects/smartie.png",
    tags: ["Java", "SQLite", "Android"],
    github: "https://github.com/noura05x",
  },
]

const skills = [
  "Machine Learning","Data Engineering", "Neural Networks", "LLMs", "Prompt Engineering", "Data Analysis", "NLP", "Computer Vision", "Agent-based AI", "Python", "JavaScript", "PHP", "Java", "HTML", "CSS", "Firebase", "SQL", "SQLite", "Streamlit", "Git/GitHub", "Arduino", "Embedded Systems", "IoT"
]

const certificates = [
  { title: "Bootcamp for AI Professionals", provider: "SDAIA", date: "Dec 2025 – Feb 2026", image: "/images/certificates/ai-pro.jpeg" },
  { title: "KAUST Artificial Intelligence Specialization", provider: "KAUST Academy", date: "Nov 2025 – Feb 2026", image: "/images/certificates/ai-fun.jpeg" },
  { title: "Data Engineering on Google Cloud", provider: "Tuwaiq Academy", date: "Apr 2026 – May 2026", image: "/images/certificates/google.jpeg" },
  { title: "Fundamentals of Artificial Intelligence", provider: "SDAIA", date: "Aug 2025", image: "/images/certificates/aifund.jpeg" },
  { title: "AI Risk Management Workshop", provider: "MCIT", date: "Sep 2025", image: "/images/certificates/risk.jpeg" },
  { title: "Drones Fundamentals Program", provider: "Tuwaiq Academy", date: "Sep 2025 – Oct 2025", image: "/images/certificates/drone.jpeg" },
  { title: "Calculus for Machine Learning and Data Science", provider: "DeepLearning.AI", date: "Nov 2025 – Nov 2025", image: "/images/certificates/calc.jpeg" },
   { title: "Linear Algebra for Machine Learning and Data Science", provider: "DeepLearning.AI", date: "Nov 2025 – Nov 2025", image: "/images/certificates/ln.jpeg" },
]

const awards = [
  {
    title: "Haqthon - Top 3",
    provider: "winning third place with the project “Rafiq” at the national level in the Hackathon Haqthon",
    date: "Award Achievement",
    image: "/images/awards/haqthon.jpeg",
  },
  {
    title: "Certificate of Excellence",
    provider: "Academic / Technical Achievement",
    date: "Honor Recognition",
    image: "/images/awards/ex.jpeg",
  },
]

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#06020d] text-white">
      <AnimatedGradientBackground />
      <ParticleBackground />
      <ScrollIndicator />
      <SmoothScroll />
      <Navbar />

      <section id="home" className="relative px-4 pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col items-center justify-center text-center">
            <AnimatedSection direction="left" className="flex flex-col items-center text-center">
              <Badge className="mb-5 border-purple-400/40 bg-purple-500/10 text-purple-200 hover:bg-purple-500/20">
                <Sparkles className="mr-2 h-3.5 w-3.5" /> AI • Data Engineering • ML
              </Badge>
              <h1 className="text-4xl font-black tracking-tight md:text-6xl">
                Norah Mashhor <span className="block bg-gradient-to-r from-fuchsia-300 via-purple-400 to-cyan-300 bg-clip-text text-transparent">Aljandol</span>
              </h1>
              <p className="mt-4 text-2xl font-semibold text-purple-200">AI and Data-focused Information Technology Student</p>
              <p className="mt-5 max-w-xl text-lg leading-8 text-gray-300">
                I build machine learning pipelines, NLP systems, intelligent applications, and Programed solutions that solve real-world problems.
              </p>
              <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
                <Button asChild className="bg-purple-600 shadow-[0_0_25px_rgba(168,85,247,.45)] hover:bg-purple-500">
                  <Link href="#projects">View Projects</Link>
                </Button>
                <Button asChild variant="outline" className="border-purple-400/50 bg-white/5 text-white hover:bg-purple-500/20">
                  <Link href="/documents/norah-aljandol-cv.pdf" target="_blank" download><Download className="mr-2 h-4 w-4" />Download CV</Link>
                </Button>
              </div>
              <div className="mt-7 flex gap-5 text-purple-200">
                <Link aria-label="LinkedIn" href="https://www.linkedin.com/in/norah-aljandol-a17843218" target="_blank" className="hover:text-white"><Linkedin /></Link>
                <Link aria-label="GitHub" href="https://github.com/noura05x" target="_blank" className="hover:text-white"><Github /></Link>
                <Link aria-label="Email" href="mailto:noura04mj@gmail.com" className="hover:text-white"><Mail /></Link>
              </div>
            </AnimatedSection>

            
          </div>
        </div>
      </section>

      <section id="about" className="px-4 py-16">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection><h2 className="mb-10 text-center text-3xl font-bold md:text-4xl">About Me</h2></AnimatedSection>
          <div className="grid gap-6 md:grid-cols-4">
            {[{ icon: Brain, title: "AI & Data", text: "ML, NLP, LLMs, prompt engineering, and analysis." }, { icon: Code2, title: "Development", text: "Front-end, back-end, Streamlit, web and mobile apps." }, { icon: Database, title: "Data Systems", text: "SQL, SQLite, Firebase, and data-driven applications." }, { icon: Cpu, title: "IoT", text: "Arduino, embedded systems, and hardware/software integration." }].map((item) => (
              <Card key={item.title} className="border-purple-500/30 bg-white/[.04] text-white shadow-[0_0_25px_rgba(168,85,247,.08)] backdrop-blur">
                <CardHeader><item.icon className="mb-3 h-8 w-8 text-purple-300" /><CardTitle>{item.title}</CardTitle></CardHeader>
                <CardContent className="text-gray-300">{item.text}</CardContent>
              </Card>
            ))}
          </div>
          <AnimatedSection delay={0.2}>
            <Card className="mt-8 border-purple-500/30 bg-white/[.04] text-white backdrop-blur">
              <CardContent className="p-6 text-lg leading-8 text-gray-300">
                AI and Data-focused Information Technology student with hands-on experience building end-to-end machine learning pipelines, NLP systems, and intelligent applications. Skilled in Python, scikit-learn, LLMs, and data analysis, with a passion for developing AI-driven solutions from emotion analysis and text classification to agent-based curriculum generation and IoT-integrated safety systems.
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      <section id="experience" className="px-4 py-16 bg-purple-950/10">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection><h2 className="mb-10 text-center text-3xl font-bold md:text-4xl">Experience & Education</h2></AnimatedSection>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-purple-500/30 bg-white/[.04] text-white backdrop-blur">
              <CardHeader><Briefcase className="h-8 w-8 text-purple-300" /><CardTitle>Robotics Trainer – AI Arena</CardTitle><CardDescription className="text-purple-200">Aug 2025 – Sep 2025</CardDescription></CardHeader>
              <CardContent className="space-y-2 text-gray-300">
                <p>Delivered hands-on training sessions in Arduino programming and electronic circuit design.</p>
                <p>Guided learners through practical projects combining hardware and software integration.</p>
                <p>Mentored students in building real-world prototypes and understanding embedded systems and IoT.</p>
              </CardContent>
            </Card>
            <Card className="border-purple-500/30 bg-white/[.04] text-white backdrop-blur">
              <CardHeader><GraduationCap className="h-8 w-8 text-purple-300" /><CardTitle>Bachelor of Information Technology</CardTitle><CardDescription className="text-purple-200">Imam Mohammad Ibn Saud Islamic University • 2021 – 2026</CardDescription></CardHeader>
              <CardContent className="text-gray-300">Focused on AI, data, web development, software systems, and practical technical projects.</CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="projects" className="px-4 py-16">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection><h2 className="mb-10 text-center text-3xl font-bold md:text-4xl">Featured Projects</h2></AnimatedSection>
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((project, index) => (
              <AnimatedCard key={project.title} delay={index * 0.1}>
                <Card className="h-full overflow-hidden border-purple-500/30 bg-white/[.04] text-white backdrop-blur transition hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(168,85,247,.25)]">
                  <div className="relative aspect-video bg-[#10061d]">
                    <Image src={project.image} alt={project.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#06020d] via-transparent to-transparent" />
                  </div>
                  <CardHeader><CardTitle>{project.title}</CardTitle></CardHeader>
                  <CardContent>
                    <p className="text-gray-300">{project.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">{project.tags.map((tag) => <Badge key={tag} className="bg-purple-500/20 text-purple-100 hover:bg-purple-500/30">{tag}</Badge>)}</div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="outline" className="border-purple-400/50 bg-white/5 text-white hover:bg-purple-500/20">
                      <Link href={project.github} target="_blank"><Github className="mr-2 h-4 w-4" /> GitHub Link</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="px-4 py-16 bg-purple-950/10">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection><h2 className="mb-10 text-center text-3xl font-bold md:text-4xl">Technical Skills</h2></AnimatedSection>
          <div className="flex flex-wrap justify-center gap-3">{skills.map((skill) => <Badge key={skill} className="border border-purple-500/30 bg-white/[.05] px-4 py-2 text-sm text-purple-50 hover:bg-purple-500/20">{skill}</Badge>)}</div>
        </div>
      </section>

      <section id="certificates" className="px-4 py-16">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection><h2 className="mb-10 text-center text-3xl font-bold md:text-4xl">Certificates</h2></AnimatedSection>
          <div className="grid gap-6 md:grid-cols-3">
            {certificates.map((cert, index) => (
              <AnimatedCard key={cert.title} delay={index * 0.08}>
                <Card className="h-full overflow-hidden border-purple-500/30 bg-white/[.04] text-white backdrop-blur">
                  <div className="relative aspect-video bg-[#10061d]"><Image src={cert.image} alt={cert.title} fill className="object-cover" /></div>
                  <CardHeader><Award className="h-7 w-7 text-purple-300" /><CardTitle className="text-lg">{cert.title}</CardTitle><CardDescription className="text-purple-200">{cert.provider}</CardDescription></CardHeader>
                  <CardContent className="text-gray-300">{cert.date}</CardContent>
                </Card>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      <section id="awards" className="px-4 py-16 bg-purple-950/10">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection><h2 className="mb-10 text-center text-3xl font-bold md:text-4xl">Honors & Awards</h2></AnimatedSection>
          <div className="grid gap-6 md:grid-cols-2">
            {awards.map((award, index) => (
              <AnimatedCard key={award.title} delay={index * 0.08}>
                <Card className="h-full overflow-hidden border-purple-500/30 bg-white/[.04] text-white backdrop-blur transition hover:-translate-y-1 hover:shadow-[0_0_35px_rgba(168,85,247,.25)]">
                  <div className="relative aspect-video bg-[#10061d]">
                    <Image src={award.image} alt={award.title} fill className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#06020d] via-transparent to-transparent" />
                  </div>
                  <CardHeader>
                    <Trophy className="h-7 w-7 text-purple-300" />
                    <CardTitle className="text-lg">{award.title}</CardTitle>
                    <CardDescription className="text-purple-200">{award.provider}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-gray-300">{award.date}</CardContent>
                </Card>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-4 py-16">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection><p className="font-semibold uppercase tracking-widest text-purple-300">Let’s Connect</p><h2 className="mt-2 text-3xl font-bold md:text-4xl">Get In Touch</h2></AnimatedSection>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <Card className="border-purple-500/30 bg-white/[.04] text-white backdrop-blur">
              <CardContent className="space-y-5 p-6 text-gray-200">
                <Link className="flex items-center gap-3 hover:text-purple-200" href="mailto:noura04mj@gmail.com"><Mail className="h-5 w-5 text-purple-300" />noura04mj@gmail.com</Link>
                <Link className="flex items-center gap-3 hover:text-purple-200" href="https://www.linkedin.com/in/norah-aljandol-a17843218" target="_blank"><Linkedin className="h-5 w-5 text-purple-300" />linkedin.com/in/norah-aljandol-a17843218</Link>
                <Link className="flex items-center gap-3 hover:text-purple-200" href="https://github.com/noura05x" target="_blank"><Github className="h-5 w-5 text-purple-300" />github.com/noura05x</Link>
                <p className="flex items-center gap-3"><MapPin className="h-5 w-5 text-purple-300" />Riyadh, Saudi Arabia</p>
              </CardContent>
            </Card>
            <Card className="border-purple-500/30 bg-gradient-to-br from-purple-700/80 to-fuchsia-900/80 text-white shadow-[0_0_35px_rgba(168,85,247,.25)]">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold">Have an opportunity in mind?</h3>
                <p className="mt-3 text-purple-100">I’m open to cooperative training, AI/data roles, and projects where I can learn, contribute, and grow.</p>
                <Button asChild className="mt-6 bg-white text-purple-900 hover:bg-purple-100"><Link href="mailto:noura04mj@gmail.com">Send Message <ExternalLink className="ml-2 h-4 w-4" /></Link></Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="border-t border-purple-500/20 px-4 py-8 text-center text-sm text-gray-400">© 2026 Norah Mashhor Aljandol. Designed with a dark purple AI portfolio style.</footer>
    </main>
  )
}
