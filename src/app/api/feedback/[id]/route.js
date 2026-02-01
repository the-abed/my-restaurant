import { ObjectId } from "mongodb";

const { dbConnect } = require("@/app/lib/dbConnect");

const feedbackCollection = await dbConnect("feedback");

export async function GET(request, { params }) {
    const { id } = await params;
    if(id.length !== 24) return Response.json({ status: 400, message: "Invalid ID"});
    const result = await feedbackCollection.findOne({ _id: new ObjectId(id) });
    return Response.json({ status: 200, data: result });
}

export async function DELETE(request, { params }) {
    const { id } = await params;

    if(id.length !== 24) return Response.json({ status: 400, message: "Invalid ID"});

    const result = await feedbackCollection.deleteOne({ _id: new ObjectId(id) });

    return Response.json({ status: 200, data: result });
}

export async function PATCH(request, { params }) {
    const { id } = await params;

    if(id.length !== 24) return Response.json({ status: 400, message: "Invalid ID"});

    const { message } = await request.json();

    if (!message) {
        return Response.json({ status: 400, message: "Please provide a message" });
    }

    const query = { _id: new ObjectId(id) };
    const newData = { $set: { message } };

    const result = await feedbackCollection.updateOne(query, newData);

    return Response.json({ status: 200, data: result });
}