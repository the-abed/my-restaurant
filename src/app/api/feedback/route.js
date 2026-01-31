import dbConnect from "@/app/lib/dbConnect";
import { feedback } from "../route";

export async function GET(request) {
  const feedbackCollection = dbConnect().collection("feedback");
  return Response.json(feedback);
}
export async function POST(request) {
  const {message} = await request.json();

  return Response.json({
    status: 200,
    message: "Feedback created",
    data,
  });
} 
