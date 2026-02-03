import { dbConnect } from "@/app/lib/dbConnect";
import { revalidatePath } from "next/cache";


const feedbackCollection = await dbConnect("feedback");

export async function GET(request) {
  const result = await feedbackCollection.find().toArray();
  return Response.json(result);
}

export async function POST(request) {
  const {message} = await request.json();

  if (!message) {
    return Response.json({
      status: 400,
      message: "Please provide a message",
    });
  }
  const newFeedback = {message, date: new Date().toISOString()};
  const result = await feedbackCollection.insertOne(newFeedback);
  revalidatePath("/feedback");
  return Response.json(result);
} 
