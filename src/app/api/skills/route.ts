import DBInstance from "@/utils/db/server";
import { NextResponse } from "next/server";
const Skills = require("@/utils/models/skills.models");

DBInstance();

export async function GET(req: Request) {
  try {
    const skillsData = await Skills.find();

    if (skillsData.length > 0) {
      return NextResponse.json({
        message: "GET Success",
        data: skillsData,
      });
    } else {
      return NextResponse.json({ message: "No skills found" }, { status: 404 });
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
      throw new Error("Invalid input: expected an array of skills.");
    }

    const newSkills = body.map((skill) => {
      return new Skills({
        slug: skill.slug,
      });
    });

    const savedSkills = await Skills.insertMany(newSkills);

    return NextResponse.json(
      { message: "Skills created successfully", data: savedSkills },
      { status: 201 }
    );
  } catch (err) {
    console.error(err);
    const errorMessage = (err as Error)?.message || "An unknown error occurred";
    return NextResponse.json(
      { message: "Failed to create skills", error: errorMessage },
      { status: 400 }
    );
  }
}
