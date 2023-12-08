/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/background.jpg";

const imageAltText = "christmas background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "Panda, Tu. TKU department of Information Management In Taiwan(R.O.C)";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "MS365",
  "Azure",
  "Web Design",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "Hello everyone! My name is Chao-Hsiang Tu, and you can call me Panda.I am currently enrolled at Tamkang University, where the institution collaborates with Microsoft Taiwan. I am also a member of the university's Microsoft Cloud Student Ambassador (CSA) program. My role primarily involves assisting the university in promoting MS365 services and providing guidance to faculty members on how to effectively utilize MS365 tools such as Forms, Lists, SharePoint, OneDrive, Power Automate, Power Virtual Agents, and more. Although I encounter various challenges throughout this process, I am dedicated to finding solutions and overcoming them. Now, I have successfully been accepted into Microsoft's Learn Student Ambassador program. In this program, I hope to learn more about MS365 tools and, in turn, promote them to those around me! One lifetime, live in the moment, be yourself!";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
