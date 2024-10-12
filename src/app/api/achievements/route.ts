import DBInstance from "@/utils/db/server";
import { NextResponse } from "next/server";
const Achievements = require("@/utils/models/achievements.models");

DBInstance();

export async function GET(req: Request) {
  try {
    const achievementsData = await Achievements.find();
    console.log("Achievements fetched:", achievementsData);

    if (achievementsData.length > 0) {
      return NextResponse.json({
        message: "GET Success",
        data: achievementsData,
      });
    } else {
      return NextResponse.json(
        { message: "No achievements found" },
        { status: 404 }
      );
    }
  } catch (err) {
    console.error("Error fetching achievements:", err);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (
      !Array.isArray(body) ||
      !body.every((item) => item.title && item.content)
    ) {
      throw new Error(
        "Invalid input: expected an array of achievements with title and content."
      );
    }

    const newAchievements = body.map((achievement) => {
      return new Achievements({
        title: achievement.title,
        content: achievement.content,
      });
    });

    const savedAchievements = await Achievements.insertMany(newAchievements);
    return NextResponse.json(
      { message: "Achievements created successfully", data: savedAchievements },
      { status: 201 }
    );
  } catch (err) {
    console.error(err);
    const errorMessage = (err as Error)?.message || "An unknown error occurred";
    return NextResponse.json(
      { message: "Failed to create achievements", error: errorMessage },
      { status: 400 }
    );
  }
}
