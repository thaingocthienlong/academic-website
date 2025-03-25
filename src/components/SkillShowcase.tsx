import { motion } from "framer-motion";
import { useState } from "react";
import { Waypoint } from "react-waypoint";

const skills = [
  { name: "Programming", value: 90 },
  { name: "Designing", value: 85 },
  { name: "Creative Writing", value: 80 },
  { name: "English Lessons", value: 95 },
];

export default function SkillShowcase() {
  const [animate, setAnimate] = useState(false);

  return (
    <section className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center text-blue-gray-900">OUR SKILLS</h2>
      <p className="text-center text-gray-600 mt-2">There are many variations of passages</p>

      <Waypoint onEnter={() => setAnimate(true)} />

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((skill, index) => (
          <div key={index}>
            <p className="text-lg font-semibold">{skill.name}</p>
            <div className="relative w-full h-2 bg-gray-200 rounded-md mt-2">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: animate ? `${skill.value}%` : "0%" }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="absolute top-0 left-0 h-full bg-blue-900 rounded-md"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
