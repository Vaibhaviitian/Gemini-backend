import { GoogleGenerativeAI } from "@google/generative-ai";
import asynchandler from "../utility/asynchandler.js";
import ApiResponse from "../utility/Apiresponse.js";
import { GoogleAIFileManager } from "@google/generative-ai/server";

const BLogtitle = asynchandler(async (req, res) => {
  try {
    const { data } = req.body;
    if (!data) {
      return res.status(500).json({
        message: `Having some error ${error}`,
      });
    }

    const genAI = new GoogleGenerativeAI(process.env.API_KEY);
    // Set the system instruction during model initialization
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      systemInstruction:
        "Your task is to generate a compelling and accurate title for a blog post based on the text provided by the user. The user will supply the content of the blog, and you should analyze the main themes, key points, and overall message to create a title that captures the essence of the blog post. Ensure the title is engaging, concise, and relevant to the content",
    });

    const prompt = `${data}`;
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
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      systemInstruction:
        "Your task is to generate a concise and informative summary of a blog post based on the text provided by the user. The user will supply the content of the blog, and you should distill the main points, key themes, and essential information into a brief summary. Ensure the summary is clear, coherent, and accurately reflects the content of the original blog post, capturing its essence in a few sentences",
    });

    const prompt = `${data}`;
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
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      systemInstruction:
        "Your task is to generate the moral or final outcome of a blog post based on the text provided by the user. The user will supply the content of the blog, and you should distill the key lessons, main conclusions, or ultimate takeaways into a few concise lines. Ensure the outcome is clear, coherent, and accurately reflects the core message of the original blog post.",
    });

    const prompt = `${data}`;
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
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      systemInstruction:
        "Your task is to organize and convert random content provided by the user into a coherent and well-structured paragraph. The user will supply the content in an unorganized format, and you should arrange the information logically, ensuring the paragraph is clear, cohesive, and flows naturally. Ensure the final paragraph accurately conveys the intended message of the original content.",
    });

    const prompt = `${data}`;
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
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      systemInstruction:
        "Your task is to create promotional and advertisement content based on the text provided by the user. The user will supply the content they wish to promote, and you should transform it into engaging and persuasive promotional material. Ensure the promotional content is compelling, clearly highlights the key benefits and features, and is suitable for use in advertisements.",
    });

    const prompt = `${data}`;
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
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      systemInstruction:
        "Your task is to create engaging and relevant captions for YouTube videos based on the content provided by the user. The user will supply the video content, and you should generate a compelling caption that accurately reflects the video's message, attracts viewers, and encourages engagement. Ensure the caption is concise, catchy, and optimized for YouTube's audience and search algorithms",
    });

    const prompt =  `${data}`;
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
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      systemInstruction:
        "Your task is to create an engaging and attention-grabbing title for a YouTube video based on the content provided by the user. The user will supply the video content, and you should generate a title that accurately reflects the video's theme, attracts viewers, and encourages clicks. Ensure the title is concise, relevant, and optimized for YouTube's audience and search algorithms",
    });

    const prompt = `${data}`;
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
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      systemInstruction:
        "Your task is to describe the role of a job based on the information provided by the user. The user will supply details about their job, and you should generate a clear and comprehensive description of the role. Ensure the description covers the main responsibilities, key tasks, and essential skills required for the job, providing an accurate and complete overview.",
    });

    const prompt = `${data}`;
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
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      systemInstruction:
        "Your task is to create an engaging and descriptive caption for an image based on the content provided by the user. The user will supply the details or context of the image, and you should generate a caption that accurately reflects the essence of the image, attracts viewers, and encourages engagement. Ensure the caption is concise, relevant, and captures the main theme or message of the image.",
    });

    const prompt = `${data}`;
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
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      systemInstruction:
        "Your task is to create an engaging LinkedIn post caption based on the content provided by the user. The user will supply the post content, and you should generate a caption that accurately reflects the essence of the post, attracts viewers, and encourages engagement. Ensure the caption is concise, relevant, and includes appropriate emojis to enhance the message and appeal to LinkedIn's professional audience.",
    });

    const prompt = `${data}`;
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

const liprofileview = asynchandler(async (req, res) => {
  try {
    const { data } = req.body;
    if (!data) {
      return res.status(500).json({
        message: `Having some error ${error}`,
      });
    }

    const genAI = new GoogleGenerativeAI(process.env.API_KEY);
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      systemInstruction:
        "Your task is to create a proficient and efficient profile description based on the user's provided skills and tech stacks. The user will supply information about their skills and technologies they are proficient in, and you should generate a comprehensive and polished profile description suitable for a resume. Ensure the description highlights the user's expertise, key strengths, and relevant experience in a clear and professional manner.",
    });

    const prompt = `${data}`;
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

const imagetotext = asynchandler(async (req, res) => {
  try {
    console.log("rwjkvb");
    if (!req.files || !req.files.image || req.files.image.length === 0) {
      return res.status(404).json({ message: 'Image is required' });
    }
    const genAI = new GoogleGenerativeAI(process.env.API_KEY);
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-pro",
      systemInstruction: "Your task is to analyze the provided image and generate a textual description of its content. When a user provides an image, you should:Image Handling: Receive and process the image file. Ensure the image is correctly loaded and accessible for analysis.Image Analysis: Use image processing techniques or a pre-trained model to analyze the content of the image. This may involve recognizing objects, text, or other elements within the image.Generate Textual Description: Convert the findings from the image analysis into a coherent and descriptive text. The description should accurately represent the content of the image, including any identifiable objects, scenes, or text.Return Results: Provide the generated textual description in the response to the user. Ensure the description is clear, concise, and relevant to the image content",
    });

    const imageFile = req.files.image[0];
    const imagePath = imageFile.path;
    const imageName = imageFile.originalname;
    const mimeType = imageFile.mimetype;
    const fileManager = new GoogleAIFileManager(process.env.API_KEY);
    const uploadResponse = await fileManager.uploadFile(imagePath, {
      mimeType: mimeType,
      displayName: imageName,
    });
    const result = await model.generateContent([
      {
        fileData: {
          mimeType: uploadResponse.file.mimeType,
          fileUri: uploadResponse.file.uri
        }
      },
      { text: "Describe all thing about this image in text" },
    ]);

    console.log(`Uploaded file ${uploadResponse.file.displayName} as: ${uploadResponse.file.uri}`);
    const ans = `${result.response.text()}`;

    return res.status(200).json(
      new ApiResponse(200, ans, "Image text is coming")
    );
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: `Having some error: ${error.message}`,
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
  lipost,
  liprofileview,
  imagetotext
};
