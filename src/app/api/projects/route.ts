import DBInstance from "@/utils/db/server";
import { NextResponse } from "next/server";
const Projects = require("@/utils/models/projects.models");

DBInstance();

export async function GET(req: Request) {
  try {
    const ProjectsData = await Projects.find();

    if (ProjectsData.length > 0) {
      return NextResponse.json({
        message: "GET Success",
        data: ProjectsData,
      });
    } else {
      return NextResponse.json(
        { message: "No Projects found" },
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
      throw new Error("Invalid input: expected an array of projects.");
    }

    const newProjects = body.map((project) => {
      return new Projects({
        title: project.title,
        description: project.description,
        imageSrc: project.imageSrc,
        tryNowLink: project.tryNowLink,
        iconLink: project.iconLink,
        icon: project.icon,
      });
    });

    const savedProjects = await Projects.insertMany(newProjects);

    return NextResponse.json(
      { message: "Projects created successfully", data: savedProjects },
      { status: 201 }
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: "Failed to create projects", error: err.message },
      { status: 400 }
    );
  }
}
