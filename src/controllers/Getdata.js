import { GoogleGenerativeAI } from "@google/generative-ai";
import asynchandler from "../utility/asynchandler.js";
import ApiResponse from "../utility/Apiresponse.js";

const getdata = asynchandler(async (req, res) => {
  try {
    const genAI = new GoogleGenerativeAI(process.env.API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = "What is the value of gold right now";

    const result = await model.generateContent(prompt);
    //   const result = await model.generateContentStream(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
    res.status(200).json(new ApiResponse(200, text, "Getting successfully"));
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: `Having some error ${error}`,
    });
  }
});

export { getdata };
