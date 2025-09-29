import React from "react";
import "./team.css";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import img1 from "../assets/team1.avif";
import img2 from "../assets/team2.avif";
import img3 from "../assets/team3.avif";
import img4 from "../assets/team4.avif";
import img5 from "../assets/team5.avif";

const Team = () => {
  const members = [
    {
  name: "Name",
  role: "Founder - Creative Head",
  img: img3,
  desc: "Shapes the brand’s creative direction, turning bold ideas into powerful visual and storytelling campaigns.",
  socials: { linkedin: "#", twitter: "#", instagram: "#" },
},
{
  name: "Name",
  role: "Founder - Director",
  img: img1,
  desc: "Oversees strategy and execution, ensuring every project aligns with the company’s vision and delivers measurable impact.",
  socials: { linkedin: "#", twitter: "#", instagram: "#" },
},
{
  name: "Name",
  role: "Production Head",
  img: img5,
  desc: "Leads production with precision, creating high-quality content that resonates with audiences and elevates brand identity.",
  socials: { linkedin: "#", twitter: "#", instagram: "#" },
},
{
  name: "Name",
  role: "Social Media Manager",
  img: img2,
  desc: "Drives brand growth online by crafting engaging content, building communities, and fostering meaningful interactions.",
  socials: { linkedin: "#", twitter: "#", instagram: "#" },
},
{
  name: "Name",
  role: "Creative Consultant and Stylist",
  img: img4,
  desc: "Transforms concepts into compelling visuals through styling and design, enhancing the overall creative appeal of campaigns.",
  socials: { linkedin: "#", twitter: "#", instagram: "#" },
},

  ];

  return (
    <div className="team-page">
      <h1 className="team-title">Meet Our Team</h1>
      <p className="team-subtitle">
        These are the special people who bring <span>Metalino</span> to life —
        blending creativity, strategy, and innovation to deliver results.
      </p>

      <div className="team-container">
        {members.map((member, index) => (
          <div className="team-card" key={index}>
            <img src={member.img} alt={member.name} />
            <h2>{member.name}</h2>
            <h4>{member.role}</h4>
            <p>{member.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
