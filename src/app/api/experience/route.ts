import DBInstance from "@/utils/db/server";
import { NextResponse } from "next/server";
const Experience = require("@/utils/models/experience.models");

DBInstance();

export async function GET(req: Request) {
  try {
    const experienceData = await Experience.find();

    if (experienceData.length > 0) {
      return NextResponse.json({
        message: "GET Success",
        data: experienceData,
      });
    } else {
      return NextResponse.json(
        { message: "No Experience found" },
        { status: 404 }
      );
    }
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (!Array.isArray(body)) {
      throw new Error("Invalid input: expected an array of experiences.");
    }

    const newExperiences = body.map((experience) => {
      return new Experience({
        category: experience.category,
        title: experience.title,
        src: experience.src,
        content: experience.content,
      });
    });

    const savedExperiences = await Experience.insertMany(newExperiences);

    return NextResponse.json(
      { message: "Experiences created successfully", data: savedExperiences },
      { status: 201 }
    );
  } catch (err) {
    console.error(err);
    const errorMessage = (err as Error)?.message || "An unknown error occurred";
    return NextResponse.json(
      { message: "Failed to create experiences", error: errorMessage },
      { status: 400 }
    );
  }
}
