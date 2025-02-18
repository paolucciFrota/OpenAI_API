import 'dotenv/config'
import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    projectId: process.env.OPENAI_PROJECT_ID
});

const thread = await openai.beta.threads.create()

await openai.beta.threads.messages.create(thread.id, {
    role: 'user',
    content: 'Hello', // The message you want to send to the assistant
  });

const run = await openai.beta.threads.runs.create(thread.id, {assistant_id: process.env.OPENAI_ASSISTANT_ID}
)
let runStatus = await openai.beta.threads.runs.retrieve(thread.id, run.id);

while (runStatus.status !== 'completed') {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  runStatus = await openai.beta.threads.runs.retrieve(thread.id, run.id);
}

const messages = await openai.beta.threads.messages.list(thread.id);
const lastMessageForRun = messages.data
  .filter(
    (message) => message.run_id === run.id && message.role === 'assistant'
  )
  .pop();

if (lastMessageForRun) {
  let responseText = lastMessageForRun.content[0].text.value;
  let index = responseText.indexOf('【');
  if (index !== -1) {
    responseText = responseText.substring(0, index) + '.';
  }
  console.log(responseText)
}
