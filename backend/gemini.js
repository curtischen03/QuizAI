import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

export async function generateQuizQuestions(topic, numQuestions) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const prompt = `Generate ${numQuestions} multiple-choice quiz questions about ${topic}. 
    For each question, provide:
    1. The question text
    2. Four possible answers (labeled A, B, C, D)
    3. The correct answer letter
    
    Format the response as a JSON array of objects, where each object has the properties:
    - question: string
    - options: array of 4 strings
    - answer: string (the correct option)
    
    Make sure the questions are challenging but fair, and the incorrect options are plausible.`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    try {
      // Clean the response text to ensure it's valid JSON
      const cleanedText = text.replace(/```json\n?|\n?```/g, "").trim();
      const questions = JSON.parse(cleanedText);
      return questions;
    } catch (parseError) {
      console.error("Error parsing Gemini response:", parseError);
      throw new Error("Failed to parse quiz questions");
    }
  } catch (error) {
    console.error("Error generating quiz questions:", error);
    throw error;
  }
}

async function analyze_text(context, task, output_constraint) {
  const response = await genAI.models.generateContent({
    model: "gemini-2.0-flash",
    contents: `Context:${context}, Task:${task}, Output Constraint:${output_constraint}`,
    config: {
      tools: [{ googleSearch: {} }],
    },
  });
  return response.text;
}

// const response = await analyze_text(
//   "You are a helpful assistant",
//   "What is the capital of France?",
//   "The capital of France is Paris"
// );

// console.log(response);
export default analyze_text;
