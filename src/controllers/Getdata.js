import { GoogleGenerativeAI } from "@google/generative-ai";
import asynchandler from "../utility/asynchandler.js";
import ApiResponse from "../utility/Apiresponse.js";

const BLogtitle = asynchandler(async (req, res) => {
  try {
    const { data } = req.body;
    if (!data) {
      return res.status(500).json({
        message: `Having some error ${error}`,
      });
    }

    const genAI = new GoogleGenerativeAI(process.env.API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `Give me a short and crisp Title of this blog ${data}`;
    console.log(prompt);

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
    res.status(200).json(new ApiResponse(200, text, "Getting successfully"));
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: `Having some error ${error}`,
    });
  }
});

const BLogsummary = asynchandler(async (req, res) => {
  try {
    const { data } = req.body;
    if (!data) {
      return res.status(500).json({
        message: `Having some error ${error}`,
      });
    }

    const genAI = new GoogleGenerativeAI(process.env.API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `Give me a short and crisp summary of this blog ${data}`;
    console.log(prompt);

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
    res.status(200).json(new ApiResponse(200, text, "Getting successfully"));
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: `Having some error ${error}`,
    });
  }
});
const Blogresult = asynchandler(async (req, res) => {
  try {
    const { data } = req.body;
    if (!data) {
      return res.status(500).json({
        message: `Having some error ${error}`,
      });
    }

    const genAI = new GoogleGenerativeAI(process.env.API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `Give me in two lines about the outcome of this ${data}`;
    console.log(prompt);

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
    res.status(200).json(new ApiResponse(200, text, "Getting successfully"));
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: `Having some error ${error}`,
    });
  }
});
const converttopara = asynchandler(async (req, res) => {
  try {
    const { data } = req.body;
    if (!data) {
      return res.status(500).json({
        message: `Having some error ${error}`,
      });
    }

    const genAI = new GoogleGenerativeAI(process.env.API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `This is a summary you have to convert it into a paragraph and it begins from here  ${data}`;
    console.log(prompt);

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
    res.status(200).json(new ApiResponse(200, text, "Getting successfully"));
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: `Having some error ${error}`,
    });
  }
});

const promotionaldata = asynchandler(async (req, res) => {
  try {
    const { data } = req.body;
    if (!data) {
      return res.status(500).json({
        message: `Having some error ${error}`,
      });
    }

    const genAI = new GoogleGenerativeAI(process.env.API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `I am giving you a content and then you have to write a promotinal advertisment on that content and the content is ${data}`;
    console.log(prompt);

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
    res.status(200).json(new ApiResponse(200, text, "Getting successfully"));
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: `Having some error ${error}`,
    });
  }
});

const utubevuddes = asynchandler(async (req, res) => {
  try {
    const { data } = req.body;
    if (!data) {
      return res.status(500).json({
        message: `Having some error ${error}`,
      });
    }

    const genAI = new GoogleGenerativeAI(process.env.API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `I am giving you a video content and then you have to write captions for that video and that video will be going to upload on youtube so please give a good caption and the content is ${data}`;
    console.log(prompt);

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
    res.status(200).json(new ApiResponse(200, text, "Getting successfully"));
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: `Having some error ${error}`,
    });
  }
});

const utubevuditle = asynchandler(async (req, res) => {
  try {
    const { data } = req.body;
    if (!data) {
      return res.status(500).json({
        message: `Having some error ${error}`,
      });
    }

    const genAI = new GoogleGenerativeAI(process.env.API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `Give me a good title for this youtube video content and the video content is ${data}`;
    console.log(prompt);

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
    res.status(200).json(new ApiResponse(200, text, "Getting successfully"));
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: `Having some error ${error}`,
    });
  }
});

const jobrole = asynchandler(async (req, res) => {
  try {
    const { data } = req.body;
    if (!data) {
      return res.status(500).json({
        message: `Having some error ${error}`,
      });
    }

    const genAI = new GoogleGenerativeAI(process.env.API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `Hey i am giving you knowledge about my job describe the role of my job and my job is ${data}`;
    console.log(prompt);

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
    res.status(200).json(new ApiResponse(200, text, "Getting successfully"));
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: `Having some error ${error}`,
    });
  }
});

const pcaption = asynchandler(async (req, res) => {
  try {
    const { data } = req.body;
    if (!data) {
      return res.status(500).json({
        message: `Having some error ${error}`,
      });
    }

    const genAI = new GoogleGenerativeAI(process.env.API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `Hey please give a caption for this image content and the content is ${data}`;
    console.log(prompt);

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
    res.status(200).json(new ApiResponse(200, text, "Getting successfully"));
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: `Having some error ${error}`,
    });
  }
});
const lipost = asynchandler(async (req, res) => {
  try {
    const { data } = req.body;
    if (!data) {
      return res.status(500).json({
        message: `Having some error ${error}`,
      });
    }

    const genAI = new GoogleGenerativeAI(process.env.API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `hey please provide a linked in post captions about my post content and please use emojis and here my post content ${data}`;
    console.log(prompt);

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);
    res.status(200).json(new ApiResponse(200, text, "Getting successfully"));
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: `Having some error ${error}`,
    });
  }
});
export {
  BLogtitle,
  BLogsummary,
  Blogresult,
  converttopara,
  promotionaldata,
  utubevuddes,
  utubevuditle,
  jobrole,
  pcaption,
  lipost
};
