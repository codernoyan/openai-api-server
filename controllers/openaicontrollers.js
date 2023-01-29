const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

// generate text function
const generateText = async (req, res) => {
  const { prompt } = req.body;
  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt,
      max_tokens: 75,
      temperature: 0,
    });
    const createdText = response.data.choices[0].text;
    res.status(200).json({
      success: true,
      data: createdText,
    })
  } catch (error) {
    res.send({
      success: false,
      message: error.message
    })
  }
}

module.exports = { generateText };