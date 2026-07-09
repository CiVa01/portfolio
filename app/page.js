/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

import {
  Banner,
  Spotlight,
  Gallery,
  SkillsGrid,
  ContactSection,
  Section,
} from "./components";

const galleryItems = [
  {
    fullImage: "/images/gallery/papers/tram_munchen.jpg",
    thumbnail: "/images/gallery/papers/tram_munchen.jpg",
    title: "Munich - 2024",
    description: "A snapshot of an empty tram",
  },
  {
    fullImage: "/images/gallery/fulls/monkey.jpg",
    thumbnail: "/images/gallery/thumbs/monkey.jpg",
    title: "Wildlands Emmen - 2024",
    description: "A random Monkey.",
  },
  {
    fullImage: "/images/gallery/fulls/vlinder-3.jpg",
    thumbnail: "/images/gallery/thumbs/vlinder.jpg",
    title: "Wildlands Emmen - 2024",
    description: "Sharp still of a flying butterfly",
  },
  {
    fullImage: "/images/gallery/fulls/toren.jpg",
    thumbnail: "/images/gallery/thumbs/toren.jpg",
    title: "Prague - 2024",
    description:
      "Tower I saw on the way. It provided a nice blend of the modern and the old within Prague.",
  },
  {
    fullImage: "/images/gallery/fulls/bloem.jpg",
    thumbnail: "/images/gallery/thumbs/bloem.jpg",
    title: "Flower on the way",
    description:
      "I tried to get as sharp as possible of a closeup with the camera equipment I had available.",
  },
  {
    fullImage: "/images/gallery/fulls/elbphilharmonie.jpg",
    thumbnail: "/images/gallery/thumbs/elbphilharmonie.jpg",
    title: "Elbhilharmony Concert Hall, Hamburg",
    description:
      "When I saw the building, I found it pretty impressive looking and I wanted to snatch a picture of it, here's the result.",
  },
  {
    fullImage: "/images/gallery/fulls/waalbrug.png",
    thumbnail: "/images/gallery/thumbs/waalbrug.png",
    title: "Waalbrug, Nijmegen",
    description:
      "I tried to capture the atmosphere of the setting sun behind Nijmegen's icon in this image. I feel like I succeeded.",
  },
  {
    fullImage: "/images/gallery/fulls/st pauli.jpg",
    thumbnail: "/images/gallery/thumbs/st pauli.jpg",
    title: "St Pauli, Hamburg",
    description:
      "When I took this picture, I wanted it to feel more vintage, like the picture was taken years ago, instead of last Winter. I do not think it is perfect, but I did achieve what I wanted to.",
  },
];

const skills = [
  {
    iconClass: "icon solid style2 major fa-user",
    title: "User Research",
    description:
      "Setting up surveys, conducting interviews, guiding focus groups and leading brainstorming sessions, turning what people say and do into clear, defensible design direction.",
  },
  {
    iconClass: "icon solid style2 major fa-pencil-ruler",
    title: "Prototyping",
    description:
      "From low-fidelity Figma and Miro sketches to testable interactive prototypes, I move ideas into something users can react to quickly, then iterate on what the feedback tells me.",
  },
  {
    iconClass: "icon solid style2 major fa-object-group",
    title: "Interaction & UI Design",
    description:
      "Designing flows, screens and interaction patterns grounded in human-centred design principles: clear, usable interfaces that hold up under real user testing.",
  },
  {
    iconClass: "icon solid style2 major fa-brain",
    title: "Designing for AI",
    description:
      "A working understanding of machine learning architectures, their strengths, weaknesses and how they behave, so I can design honest, explainable experiences on top of AI rather than around it.",
  },
  {
    iconClass: "icon solid style2 major fa-chart-bar",
    title: "Data Visualisation",
    description:
      "A strong grasp of what makes a visualisation genuinely effective, plus the ability to build it myself in JavaScript (D3.js) or Python (Seaborn, matplotlib).",
  },
  {
    iconClass: "icon solid style2 major fa-save",
    title: "Programming",
    description:
      "Hands-on experience in Java, Python and Scala. Not my headline, but it means I can prototype real behaviour, talk to developers as a peer and design within what is actually buildable.",
  },
];

const contacts = [
  {
    iconClass: "icon style2 major fa-address-book",
    title: "Email",
    content:
      "<p>Personal: cis.vanaken@outlook.com</p><p>Work: cis.vanaken@digitalbricks.ai</p>",
  },
  {
    iconClass: "icon brands style2 major fa-linkedin-in",
    title: "LinkedIn",
    link: {
      url: "https://www.linkedin.com/in/cis-van-aken/",
      label: "Connect with me",
      target: "_blank",
    },
  },
  {
    iconClass: "icon brands style2 major fa-github-square",
    title: "Github",
    content: 'find my code <a href="https://github.com/CiVa01">here.</a>',
  },
];

export default function Home() {
  return (
    <main id="wrapper" className="divided">
      {/* Banner Section */}
      <Banner
        style="3"
        orient="left"
        contentAlign="left"
        imagePosition="center"
        imageSrc="/images/gallery/myself/foto_zelf_2.jpg"
        imageAlt="Cis van Aken"
      >
        <h1>UX Designer &amp; Researcher</h1>
        <p className="major">Cis van Aken.</p>
        <p className="medium">
          I design human-centred products for AI systems, pairing user research
          and interaction design with a real understanding of the technology
          underneath.
        </p>
        <p className="medium">
          MSc Human-Computer Interaction, Utrecht University &middot; BSc
          Artificial Intelligence, Radboud University Nijmegen.
        </p>
        <ul className="actions stacked">
          <li>
            <Link href="/cv" className="button">
              See My CV
            </Link>
          </li>
        </ul>
      </Banner>

      {/* Who am I Section */}
      <Spotlight
        id="first"
        style="4"
        orient="right"
        contentAlign="left"
        imagePosition="center"
        imageSrc="/images/gallery/fulls/the_boys.jpg"
        imageAlt="The boys"
      >
        <h2>Who am I?</h2>
        <p>
          I&apos;m a UX designer and researcher at Digitalbricks, where I turn
          user research into design decisions for AI-driven products. With an
          MSc in Human-Computer Interaction and a BSc in Artificial Intelligence
          behind me, I can design for AI systems and still speak the language of
          the engineers building them.
        </p>
        <p>
          Alongside my design work I&apos;m completing my Master&apos;s in
          Utrecht and support a large enterprise client at HSO. I&apos;m a
          people&apos;s person who has always found himself in leadership
          positions across the associations and committees I&apos;ve joined; I
          work best as a guide and a connector between groups, supporting them
          with my own skills and knowledge.
        </p>
        <p>
          Outside of work I enjoy photography and am teaching myself
          post-processing; almost every image on this site was taken by me.
        </p>
        <ul className="actions stacked">
          <li>
            <Link href="/about" className="button big wide">
              Read More About Me
            </Link>
          </li>
        </ul>
      </Spotlight>

      {/* Projects Section */}
      <Spotlight
        style="1"
        orient="left"
        contentAlign="left"
        imagePosition="center"
        imageSrc="/images/gallery/fulls/Rosita_effect.JPG"
        imageAlt="Rosita effect"
      >
        <h2>Projects</h2>
        <p>
          Over my studies, I took part in a lot of projects. From designing and
          building a gesture-based IR-remote, to conceptualizing and prototyping
          a web plugin that advises you on privacy policies, you can read all
          about them in this section.
        </p>
        <ul className="actions stacked">
          <li>
            <Link href="/works" className="button">
              Read More
            </Link>
          </li>
        </ul>
      </Spotlight>

      {/* Papers Section */}
      <Spotlight
        style="1"
        orient="right"
        contentAlign="left"
        imagePosition="center"
        imageSrc="/images/gallery/fulls/Pim_monument.jpg"
        imageAlt="Pim monument"
      >
        <h2>Papers</h2>
        <p>
          A lot of my work was also of a more theoretical nature. Some that are
          worth highlighting, are my Bachelor Thesis written on Neuromorphic
          computing and scalabilty, as well as a paper on a machine learning
          model used to classify MEG data.
        </p>
        <p>
          Besides technical papers, I also wrote on more social and ethical
          issues, such as an ethical analysis on the usage on Recommendation
          Algorithms and how much responsibility companies have regarding its
          impact.
        </p>
        <ul className="actions stacked">
          <li>
            <Link href="/papers" className="button">
              Learn More
            </Link>
          </li>
        </ul>
      </Spotlight>

      {/* Contact Section */}
      <Section style="1" align="center">
        <h2>Contact</h2>
        <ContactSection contacts={contacts} />
      </Section>

      {/* Gallery Section */}
      <Section style="1" align="center">
        <h2>Gallery</h2>
        <p>
          A small selection of my photography. I am a hobbyist, that is teaching
          himself the basics of photography and editing.
        </p>
        <Gallery items={galleryItems} />
      </Section>

      {/* Skills Section */}
      <Section style="1" align="center">
        <h2>Skill set</h2>
        <p>
          I lead with user research and design, backed by a technical foundation
          most designers don&apos;t have. I genuinely understand AI,
          explainability and human-AI decision-making, so I can design for
          intelligent systems and speak to the engineers building them.
        </p>
        <SkillsGrid skills={skills} />
      </Section>

      {/* Footer */}
      <footer className="wrapper style1 align-center">
        <div className="inner">
          <ul className="icons">
            <li>
              <a
                href="https://www.linkedin.com/in/cis-van-aken/"
                className="icon brands style2 fa-linkedin-in"
              >
                <span className="label">LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                href="mailto:cis.vanaken@outlook.com"
                className="icon style2 fa-envelope"
              >
                <span className="label">Email</span>
              </a>
            </li>
          </ul>
          <p>&copy; Cis van Aken. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
