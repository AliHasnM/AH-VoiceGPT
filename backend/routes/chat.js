const express = require("express");
const axios = require("axios");
const router = express.Router();
const { CHATGPT_API_KEY } = require("../config/config");

router.post("/chat", async (req, res) => {
  const { message } = req.body;

  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: message }],
        max_tokens: 150,
      },
      {
        headers: {
          Authorization: `Bearer ${CHATGPT_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (response.data.choices && response.data.choices.length > 0) {
      const reply = response.data.choices[0].message.content.trim();
      res.json({ reply });
    } else {
      res.status(500).json({ error: "No reply from ChatGPT" });
    }
  } catch (error) {
    console.error(
      "Error calling OpenAI API:",
      error.response ? error.response.data : error.message
    );
    if (error.response) {
      console.error("Status:", error.response.status);
      console.error("Headers:", error.response.headers);
      console.error("Data:", error.response.data);
    }
    res.status(500).json({ error: "Server Error" });
  }
});

module.exports = router;

// const express = require("express");
// const axios = require("axios");
// const router = express.Router();
// const { CHATGPT_API_KEY } = require("../config/config");

// router.post("/chat", async (req, res) => {
//   const { message } = req.body;

//   try {
//     const response = await axios.post(
//       "https://api.openai.com/v1/completions",
//       {
//         model: "text-davinci-003",
//         prompt: message,
//         max_tokens: 150,
//       },
//       {
//         headers: {
//           Authorization: `Bearer ${CHATGPT_API_KEY}`,
//           "Content-Type": "application/json",
//         },
//       }
//     );

//     if (response.data.choices && response.data.choices.length > 0) {
//       const reply = response.data.choices[0].text.trim();
//       res.json({ reply });
//     } else {
//       res.status(500).json({ error: "No reply from ChatGPT" });
//     }
//   } catch (error) {
//     console.error(
//       "Error calling OpenAI API:",
//       error.response ? error.response.data : error.message
//     );
//     res.status(500).json({ error: "Server Error" });
//   }
// });

// module.exports = router;
