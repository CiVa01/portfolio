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
      "Setting up different kinds of surveys, conducting interviews, guiding focus groups and leading brainstorming sessions. These are all among the skills I possess.",
  },
  {
    iconClass: "icon solid style2 major fa-save",
    title: "Programming",
    description:
      "Extensive programming experience in languages like Java and Python, with moderate experience in Scala.\nI have experience in both imperative programming, as well as functional programming.",
  },
  {
    iconClass: "icon solid style2 major fa-database",
    title: "Data Mining",
    description:
      "Experience in traditional data mining methods, as well as engineering methods, using SQL, Hadoop and Apache Spark.",
  },
  {
    iconClass: "icon solid style2 major fa-chart-bar",
    title: "Data Visualisation",
    description:
      "I possess extensive knowledge on the underlying principles of what makes an effective data visualisation, alongside the skills to implement these in Javascript (D3.js) and/or Python (mainly Seaborn, matplotlib).",
  },
  {
    iconClass: "icon solid style2 major fa-cog",
    title: "Prototyping",
    description:
      "From Figma and Miro, to more overarching principles of user research, I offer these capabilities",
  },
  {
    iconClass: "icon solid style2 major fa-brain",
    title: "Machine Learning Methods",
    description:
      "Extensive knowledge of the application of different machine learning architectures, their strengths, weaknesses and how to combine them.",
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
        <h1>Welcome to my site</h1>
        <p className="major">Cis van Aken.</p>
        <p className="medium">
          Master of Science Student in Human-Computer Interaction, department of
          Information Sciences, Utrecht University.
        </p>
        <p className="medium">
          B.Sc. in Artificial Intelligence Obtained at Radboud University
          Nijmegen.
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
          I&apos;m a dedicated and enthusiastic Human-Computer Interaction
          master&apos;s student with a degree in Artificial Intelligence. I
          currently live in Nijmegen and next to my studies I work as a work
          student for HSO in Veenendaal. I enjoy photography, and I am teaching
          myself post-processing. Almost all images in this document are also
          taken by me as a showcase.
        </p>
        <p>
          I am a people&apos;s person that has always found himself in
          leadership positions in several different associations and committees
          that I have joined. I work best as a guide and a connector between
          different groups, that I can then support with my own skills and
          knowledge.
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
          Below is a listing of relevant skills I have acquired over the years,
          both through my studies and personal interest.
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
