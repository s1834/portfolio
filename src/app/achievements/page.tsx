"use client";

import React, { useEffect, useState } from "react";
import { Timeline } from "@/app/components/ui/timeline";
import axios from "axios";

const Content = ({ content }) => {
  return (
    <div className="p-6 space-y-8">
      <div className="p-6 text-black dark:text-white rounded-lg shadow-md space-y-6">
        {content.map((item, index) => (
          <React.Fragment key={index}>
            <p>{item}</p>
            <hr className="border-black dark:border-white transition-transform duration-300 transform hover:scale-x-110" />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default function Page() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        const response = await axios.get("/api/achievements");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching achievements:", error);
      }
    };

    fetchAchievements();
  }, []);

  return (
    <div className="w-full" id="Achievements">
      <Timeline
        data={data.map((item) => ({
          title: item.title,
          content: <Content content={[item.content]} />,
        }))}
      />
    </div>
  );
}
