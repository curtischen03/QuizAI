import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

export async function generateQuizQuestions(topic, numQuestions) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const prompt = `Generate ${numQuestions} multiple-choice quiz questions about ${topic}. 
    For each question, provide:
    1. The question text
    2. Four possible answers
    3. The correct answer (must be the exact text of the correct option)
    
    Format the response as a JSON array of objects, where each object has the properties:
    - question: string (the question text)
    - options: array of 4 strings (the possible answers)
    - answer: string (must be EXACTLY the same text as the correct option from the options array)
    
    Example format:
    {
      "question": "What is the capital of France?",
      "options": ["London", "Berlin", "Paris", "Madrid"],
      "answer": "Paris"
    }
    
    Make sure:
    1. The answer string matches EXACTLY with one of the options
    2. Questions are challenging but fair
    3. Incorrect options are plausible
    4. Each question has exactly 4 options`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    try {
      // Clean the response text to ensure it's valid JSON
      const cleanedText = text.replace(/```json\n?|\n?```/g, "").trim();
      const questions = JSON.parse(cleanedText);

      // Validate that each question's answer matches exactly with one of its options
      const validatedQuestions = questions.map((question) => {
        if (!question.options.includes(question.answer)) {
          // If answer doesn't match exactly, find the matching option
          const matchingOption = question.options.find(
            (option) =>
              option.toLowerCase().trim() ===
              question.answer.toLowerCase().trim()
          );
          if (matchingOption) {
            question.answer = matchingOption; // Use the exact option text
          }
        }
        return question;
      });

      return validatedQuestions;
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
    model: "gemini-2.5-flash",
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
