"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Carousel, Card } from "@/app/components/ui/apple-cards-carousel";

export default function Experience() {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const response = await axios.get("/api/experience");
        setExperiences(response.data.data);
      } catch (error) {
        console.error("Error fetching experiences:", error);
      }
    };

    fetchExperiences();
  }, []);

  const cards = experiences.map((experience, index) => (
    <Card
      key={experience.title}
      card={experience}
      index={index}
      layout={true}
    />
  ));

  return (
    <div className="w-full h-full py-20" id="Experience">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Experience
      </h2>
      <Carousel items={cards} />
    </div>
  );
}
