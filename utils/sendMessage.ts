import { ChatCompletionMessageParam } from "openai/resources/index.mjs"

export const sendMessage = async (messages: ChatCompletionMessageParam[]) => {
  try {
    const response = await fetch('/api/createMessage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ messages }),
    })

    return await response.json()
  } catch (error) {
    console.log(error)
  }
}