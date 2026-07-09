/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { Banner, Spotlight, Section } from "../components";
import { imgPath } from "../utils/imgPath";

export const metadata = {
  title: "My Works - Cis van Aken",
  description:
    "Professional UX work and study projects by Cis van Aken, including a build-vs-integrate recommendation, Magic Wand, LawyAir and data visualisation.",
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
          Here you can find a selection of my work, from professional UX projects
          to projects from my studies. They range from user research and design
          through to more technical assignments, chosen to show the breadth of
          what I do.
        </p>
      </Banner>

      {/* Robin — Professional case study (Digitalbricks) */}
      <Spotlight
        id="robin"
        style="4"
        orient="right"
        contentAlign="right"
        imagePosition="left"
        imageSrc="/images/gallery/fulls/toren.jpg"
        imageAlt="Robin build-vs-integrate recommendation"
        isFullscreen
      >
        {/* TODO: Cis — replace imageSrc above with a real Robin artifact (decision matrix, research summary, or an anonymised screenshot). Currently a placeholder photo. */}
        <header>
          <h2>Robin: a build-vs-integrate recommendation</h2>
          <p>
            <em>Professional UX research &middot; Digitalbricks</em>
          </p>
        </header>
        <p>
          <strong>The problem.</strong> Digitalbricks needed to decide whether to
          build Robin in-house or integrate an existing solution, and wanted that
          call grounded in more than gut feel.
          {/* TODO: Cis — one or two sentences on what Robin actually is and the real question you were asked to answer. Anonymise anything NDA-sensitive. */}
        </p>
        <p>
          <strong>Constraints.</strong>
          {/* TODO: Cis — the constraints that shaped the decision: timeline, budget, team capacity, existing tech stack, client requirements. */}
        </p>
        <p>
          <strong>What I did.</strong> I led the research behind the
          recommendation, weighing the build and integrate options against user
          needs and business reality.
          {/* TODO: Cis — your actual role and method: what research you ran, who you spoke to, what options you compared and how you evaluated them. */}
        </p>
        <p>
          <strong>Decisions &amp; tradeoffs.</strong>
          {/* TODO: Cis — the key tradeoffs you surfaced (e.g. speed vs. control, cost vs. fit, maintenance burden) and how you weighed them. */}
        </p>
        <p>
          <strong>Outcome.</strong>
          {/* TODO: Cis — what you recommended, whether it was adopted, and any result you can share. No invented metrics. */}
        </p>
      </Spotlight>

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
          The result was a working prototype that reliably turned devices on and
          off and cycled through settings by gesture alone, and the user testing
          we ran along the way is what decided which gestures made the final cut.
          {/* TODO: Cis — replace/extend with the concrete outcome if you have one: how the prototype landed in the final course demo, the grade, or a specific testing insight that changed the design. */}
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
        <p>
          The research gave the team an evidence-based direction to design
          against, and handed the client a concrete prototype to react to rather
          than an abstract pitch.
          {/* TODO: Cis — add the real outcome: how the client responded, whether the concept was taken further, or what usability testing revealed. */}
        </p>
      </Spotlight>

      {/* Data Visualization Project */}
      <Spotlight
        id="data-viz"
        style="3"
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
          while also contributing to research and ideation wherever the team
          needed support.
        </p>
        <p>
          The finished dashboard let users explore migration flows between Dutch
          municipalities interactively, surfacing regional patterns that a static
          chart would have flattened out.
          {/* TODO: Cis — add the concrete outcome: the grade, how it was received, or a specific insight the visualization revealed. */}
        </p>
        <ul className="actions stacked">
          <li>
            <Link href="/" className="button">
              Back to Home
            </Link>
          </li>
        </ul>
      </Spotlight>
    </main>
  );
}
