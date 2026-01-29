import { feedback } from "../route";

export async function GET(request) {
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
