import { ChatCompletionMessageParam } from "openai/resources/index.mjs"

export const sendMessage = async (messages: ChatCompletionMessageParam[]) => {
  const apiKey = process.env.OPENAI_API_KEY;
  console.log(apiKey);
  const url = 'https://api.openai.com/v1/chat/completions'

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        messages, response_format:
        {
          type: "json_schema",
          json_schema: {
            "name": "quiz_schema",
            "schema": {
              "type": "object",
              "properties": {
                "question": {
                  "type": "string",
                  "description": "The quiz question"
                },
                "choices": {
                  "type": "array",
                  "items": {
                    "type": "string",
                    "description": "One of the possible answers"
                  },
                  "description": "List of possible answer choices"
                },
                "answer": {
                  "type": "integer",
                  "description": "The index of the correct answer in the choices array"
                },
                "explanation": {
                  "type": "string",
                  "description": "Explanation for the correct answer"
                }
              },
              "required": ["question", "choices", "answer", "explanation"],
              "additionalProperties": false
            },
            "strict": true
          }
        }
      }),
    })

    return await response.json()
  } catch (error) {
    console.log(error)
  }
}