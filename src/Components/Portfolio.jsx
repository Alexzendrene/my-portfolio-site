/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/image.png";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Blog Explore",
    description:
      "Investigating the Quantum Frontier: Unclosing the Dominion of the Next Generation of Computing",
    url: "https://medium.com/@dkmshruti/investigating-the-quantum-frontier-unclosing-the-dominion-of-the-next-generation-of-computing-34763d2b5477",
  },
  {
    title: "Alexzendrene's Tech Explorations",
    description:
      "Alexzendrene's Tech Explorations: UI/UX student with expertise in full-stack development, machine learning, and face recognition, passionate about AI/ML, data science, and cloud engineering.",
    url: "http://www.youtube.com/@SHRUTIMISHRA-AZ",
  },
  {
    title: "GURUKUL SAMSKRITI",
    description:
      "Student Management System Demo",
    url: "https://youtu.be/1hEk6QNo-_w",
  },
  {
    title: "सवागतम GROCERS",
    description:
      "GROCERS is a user-friendly grocery purchase app",
    url: "https://youtu.be/WB9u5owhIXI",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio" style={{ backgroundColor: "black", color: "white" }}>
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" , color: "white"}}>{project.title}</h3>
              </a>
              <p className="small" style={{ color: "white" }}>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
