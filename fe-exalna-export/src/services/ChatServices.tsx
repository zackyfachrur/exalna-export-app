import axios from "axios";

export const getData = async (userInput: string, mode: string = "") => {
  const modeText = mode ? `Only show data with the category "${mode}".` : "";

  const prompt = `Provide a list of company names along with active and trusted website links related to the product "${userInput}". 
${modeText}
Respond in valid JSON format according to the following structure:

{
  "explanation_ai": [
    { "prompt": "A brief explanation from AI about the search results based on '${userInput}' with the filter mode '${mode}'" }
  ],
  "services": [
    { "name": "Company Name", "description": "Description Company" "url": "https://website-link.com" }
  ]
}

Return only the JSON without any additional explanations, text, HTML markup, or other notes outside the JSON structure above.`;

  try {
    const userString = localStorage.getItem("user");
    const user = userString ? JSON.parse(userString) : null;
    const userId = user?.id || null;
    console.log("User ID:", userId);

    const res = await axios.post(
      import.meta.env.VITE_CHATBOT_API_URL,
      {
        user_id: userId,
        keyword: userInput,
        prompt: prompt,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const base64String = res.data.data;
    console.log("Base64 string:", base64String);

    const decodedString = atob(base64String);
    console.log("Decoded JSON string:", decodedString);

    const parsedData = JSON.parse(decodedString);
    console.log("Parsed data:", parsedData);

    return parsedData;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
