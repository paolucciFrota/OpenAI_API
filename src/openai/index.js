import OpenAI from "openai";
import 'dotenv/config'

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    projectId: process.env.OPENAI_PROJECT_ID
});

export default openai;