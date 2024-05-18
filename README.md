# AH VoiceGPT

AH VoiceGPT is an interactive web application designed to provide a seamless and intuitive experience for users to communicate with an AI chatbot through voice commands. Utilizing modern web technologies such as React and Tailwind CSS, AH VoiceGPT offers a responsive, aesthetically pleasing interface with support for both light and dark modes.

## Features

- **Voice Recognition**: Users can interact with the AI chatbot using their voice, making the experience more natural and efficient.
- **Speech Synthesis**: The application provides spoken responses from the AI, enhancing the conversational experience.
- **Dark Mode and Light Mode**: Users can switch between dark and light themes to suit their preferences, improving readability and reducing eye strain.
- **Responsive Design**: The application is optimized for different devices and screen sizes, ensuring a smooth user experience across desktops, tablets, and mobile devices.
- **Real-Time Communication**: The AI responds in real-time, providing instant feedback and engaging interactions.

## Technologies Used

- **React**: A popular JavaScript library for building user interfaces, enabling the creation of dynamic and interactive web applications.
- **Tailwind CSS**: A utility-first CSS framework that allows for rapid and customizable styling of the application.
- **Axios**: A promise-based HTTP client for making requests to the backend API, ensuring efficient data retrieval and communication.
- **Web Speech API**: A powerful API for implementing voice recognition and speech synthesis, enabling voice-based interactions.
- **Express**: A fast, unopinionated, minimalist web framework for Node.js.
- **OpenAI API**: Used to generate responses from the GPT-3.5-turbo model.

## Installation and Setup

To run AH VoiceGPT locally, follow these steps:

### Frontend Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/AH-VoiceGPT.git
   ```
2. **Navigate to the project directory**:
   ```bash
   cd AH-VoiceGPT/ah_voicegpt
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Start the development server**:
   ```bash
   npm run dev
   ```
5. **Open your browser and navigate to** `http://localhost:5173`

### Backend Setup

1. **Navigate to the backend directory**:
   ```bash
   cd ../backend
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Create a `.env` file** in the `backend` directory with the following content:
   ```
   CHATGPT_API_KEY=your-openai-api-key
   ```
4. **Start the backend server**:
   ```bash
   npm run start
   ```

### Project Structure

The project structure is organized as follows:

```
AH-VoiceGPT/
├── ah_voicegpt/
│   ├── public/
│   │   ├── index.html
│   └── src/
│       ├── components/
│       │   ├── Navbar.jsx
│       │   ├── ChatComponent.jsx
│       │   └── ...
│       ├── App.jsx
│       ├── index.js
│       └── ...
├── backend/
│   ├── config/
│   │   ├── config.js
│   ├── routes/
│   │   ├── chat.js
│   ├── .env
│   ├── server.js
├── .gitignore
├── package.json
└── README.md
```

## Usage

1. **Navbar**: The `Navbar` component includes the "AH VoiceGPT" logo and a button to toggle between dark and light modes.
2. **ChatComponent**: The `ChatComponent` handles voice recognition, speech synthesis, and interaction with the backend API.

## Contributing

Contributions are welcome! If you have any ideas, suggestions, or improvements, feel free to open an issue or submit a pull request.
