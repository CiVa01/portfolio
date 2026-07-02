/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import { Banner, Spotlight, Section } from "../components";
import { imgPath } from "../utils/imgPath";

export const metadata = {
  title: "Papers - Cis van Aken",
  description:
    "Academic papers and thesis work by Cis van Aken across AI, ethics, and machine learning",
};

export default function PapersPage() {
  return (
    <main id="wrapper" className="divided">
      <Banner
        style="3"
        orient="left"
        contentAlign="left"
        imagePosition="right"
        imageSrc="/images/gallery/myself/cameraman.png"
        imageAlt="Camera portrait"
      >
        <header>
          <h1>In this section</h1>
        </header>
        <p>
          Here you can find some of my academic works, including my Bachelor
          thesis and papers I wrote during my studies. There is a lot more I
          worked on, but these are some highlights chosen to display my varied
          skill set.
        </p>
        <p>
          Feel free to have a look around and reach out if you want to discuss
          any of this work.
        </p>
      </Banner>

      <Spotlight
        style="4"
        orient="right"
        contentAlign="right"
        imagePosition="left"
        imageSrc="/images/gallery/papers/rosita_in_bot_tuin.JPG"
        imageAlt="Thesis visual"
      >
        <header>
          <h2>Bachelor Thesis on Neuromorphic Computing</h2>
        </header>
        <p>
          I wrote my thesis on Neuromorphic Computing, focusing on energy
          efficiency of neuromorphic algorithms versus traditional methods.
          Ultimately graded with an 8 average.
        </p>
        <p>
          The scope changed often because it was a highly novel and complex
          topic for a bachelor thesis. It taught me how to navigate ambiguity
          and adapt research plans under uncertainty.
        </p>
        <ul className="actions stacked">
          <li>
            <a
              href={imgPath("/files/BSc_Thesis_Cis_van_Aken.pdf")}
              className="button"
            >
              Read the full thesis
            </a>
          </li>
        </ul>
      </Spotlight>

      <Spotlight
        style="4"
        orient="left"
        contentAlign="left"
        imagePosition="right"
        imageSrc="/images/gallery/papers/marc_regenboog.jpg"
        imageAlt="MEG paper visual"
      >
        <header>
          <h2>A Machine Learning Model to Classify MEG Data</h2>
        </header>
        <p>
          For a machine learning course, we built a model combining LSTM and CNN
          units to process temporal and spatial signals and classify MEG data
          across tasks.
        </p>
        <p>
          My main contributions were architecture design and implementation in
          PyTorch, based on prior neural network experience.
        </p>
        <ul className="actions stacked">
          <li>
            <a
              href={imgPath("/files/Assignment_2_paper-5.pdf")}
              className="button"
            >
              Read the full paper
            </a>
          </li>
        </ul>
      </Spotlight>

      <Spotlight
        style="1"
        orient="right"
        contentAlign="right"
        imagePosition="left"
        imageSrc="/images/gallery/fulls/vlinder-1.jpg"
        imageAlt="Ethics paper visual"
      >
        <header>
          <h2>Mental Health Effects of Social Media</h2>
        </header>
        <p>
          We wrote an ethical analysis of social media use, investigating how
          responsibility should be balanced between platform providers and
          users.
        </p>
        <p>
          This was a collaborative effort where I contributed research, writing,
          and framework development for the ethical analysis.
        </p>
        <ul className="actions stacked">
          <li>
            <a
              href={imgPath("/files/Responsible_ICT_Research_Project-1.pdf")}
              className="button"
            >
              Read the full paper
            </a>
          </li>
        </ul>
      </Spotlight>

      <Section style="1" align="center" size="small">
        <ul className="actions stacked">
          <li>
            <Link href="/" className="button">
              Back to Home
            </Link>
          </li>
        </ul>
      </Section>
    </main>
  );
}
