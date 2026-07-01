/* eslint-disable @next/next/no-img-element */

import { Banner, Spotlight, Section } from "../components";
import { imgPath } from "../utils/imgPath";

export const metadata = {
  title: "My Works - Cis van Aken",
  description:
    "View my projects including Magic Wand, LawyAir, and Data Visualization work",
};

export default function WorksPage() {
  return (
    <main id="wrapper" className="divided">
      {/* Introduction */}
      <Banner
        style="1"
        orient="left"
        contentAlign="left"
        imagePosition="right"
        imageSrc="/images/gallery/myself/foto_zelf_2.jpg"
        imageAlt="Cis van Aken"
      >
        <header>
          <h1>In this section</h1>
        </header>
        <p>
          Here you can find some of the projects I worked on during my studies.
          These projects range from more technical assignments, to user research
          and design based projects. I tried to pick a varied selection of
          works, to showcase my broad skill set.
        </p>
      </Banner>

      {/* Magic Wand Project */}
      <Spotlight
        id="magic-wand"
        style="1"
        orient="right"
        contentAlign="right"
        imagePosition="left"
        imageSrc="/images/gallery/works/wand.jpg"
        imageAlt="Magic Wand - IR-powered gesture based remote"
        isFullscreen
      >
        <header>
          <h2>Magic Wand: An IR-powered, gesture based remote</h2>
        </header>
        <p>
          During this project, for one of my Master courses, we worked in groups
          to ideate and prototype a functional product. Over the course of the
          project, I was tasked with programming the components, as well as
          taking care of the electric wiring. I also stood in as user researcher
          when one of the group members fell away. In this instance, I helped a
          lot with experimenting and conducting interviews and field studies
          with potential users.
        </p>
        <p>
          We designed and built a working remote, that works with different
          gestures to perform different commands. In the end, we managed to make
          so that it can turn devices on and off, as well as cycle through
          different settings.
        </p>
        <p>
          I learned a lot about user testing, prototyping and product design and
          ultimately I am quite proud of the project.
        </p>
        <ul className="actions stacked">
          <li>
            <a
              href={imgPath(
                "/files/Novel_Human_Interface_Device__Magic_Wand-1.pdf",
              )}
              className="button"
            >
              Read all about it
            </a>
          </li>
        </ul>
      </Spotlight>

      {/* LawyAir Project */}
      <Spotlight
        id="lawyair"
        style="2"
        orient="left"
        contentAlign="left"
        imagePosition="right"
        imageSrc="/images/gallery/works/lawyair.png"
        imageAlt="LawyAir - Browser extension for privacy"
        isFullscreen
      >
        <header>
          <h2>LawyAir: An extension to help you understand online privacy</h2>
        </header>
        <p>
          For one of my courses, we got assigned groups and paired with a real
          life client. This client presented us with a problem: &quot;People
          have no clue what they are consenting to and do not have the amount of
          control over their data they should have.&quot; An interesting problem
          with many different angles to tackle it from.
        </p>
        <p>
          It was important that we built a tool that actually informs people of
          what they consent to online, rather than just making declining cookies
          for instance just easier. We brainstormed many different ideas,
          ranging from a website that informs people on the topic, to a tool
          that helps you fill in cookie consent forms automatically.
        </p>
        <p>
          We settled on designing an extension for your browser, that pops up
          and summarizes what is in cookie consent forms. In the form of a small
          &quot;lawyer&quot; avatar, that you can ask questions to and interact
          with, to deliver the information in an easily digestible manner. My
          contributions were mainly centered around the user research. I
          designed personas and build user stories around the interviews we held
          and suggested improvements to the prototype based on the feedback we
          received.
        </p>
      </Spotlight>

      {/* Data Visualization Project */}
      <Spotlight
        id="data-viz"
        style="5"
        orient="right"
        contentAlign="right"
        imagePosition="left"
        imageSrc="/images/gallery/works/dashboard.png"
        imageAlt="Within-Country Migration Visualization"
        isFullscreen
      >
        <header>
          <h2>Visualizing Within-Country migration in the Netherlands</h2>
        </header>
        <p>
          For a course in Information Visualization, we worked in groups to
          create a visualization of a dataset of our choice. We chose to
          visualize within-country migration in the Netherlands, using data from
          the CBS. Being the most experienced programmer in the group, I took
          the lead in designing the visualization and implementing it in D3.js,
          while also contributing to the research and ideation when help was
          needed process.
        </p>
        <ul className="actions stacked">
          <li>
            <a href="/" className="button">
              Back to Home
            </a>
          </li>
        </ul>
      </Spotlight>
    </main>
  );
}
