# 🌟 SparkRise - Your Daily Dose of Motivation

**SparkRise** is a personalized motivational web app that delivers uplifting quotes to help you rise and shine every day. Whether you're looking for inspiration to start your day or stay grounded through challenges, SparkRise is your go-to companion.

---

## 📸 Preview

![SparkRise Screenshot](./public/screenshot.png) <!-- Add your own screenshot path -->

---

## ✨ Features

- ✅ **Random Motivational Quote** with Gradient Background
- ➕ **Add Your Own Quote** (stored locally)
- ⏰ **Time-Based Greeting** (Good Morning/Afternoon/Evening)
- 📦 **Offline Support** (PWA-ready)
- 📱 **Responsive Design** (Mobile-friendly)
- 🌈 **Beautiful Gradient Styling** using Tailwind CSS
- 📖 **Quote Data File** with 200+ curated quotes (Islamic & general motivation)

---

## 🛠️ Tech Stack

| Tech             | Description                               |
|------------------|-------------------------------------------|
| Next.js          | React Framework for production-ready apps |
| Tailwind CSS     | Utility-first CSS framework               |
| Shadcn/UI        | Component library built on Radix UI       |
| TypeScript/JS    | Typed JavaScript or plain JavaScript      |
| localStorage     | Persistent data for user-added quotes     |
| Vercel (optional)| Easy deployment & hosting for Next.js     |

---

## 📁 Project Structure

```bash
.
├── components/
│   └── QuoteCard.jsx         # Displays quote with background
│   └── AddQuoteForm.jsx      # Form to add a new quote
│   └── GreetingBanner.jsx    # Dynamic time-based greeting
├── data/
│   └── motivData.js          # 200+ curated motivational quotes
├── pages/
│   └── index.js              # Main page of the app
├── public/
│   └── icons, images, etc.
├── styles/
│   └── globals.css
├── utils/
│   └── storage.js            # Handles localStorage logic
├── next.config.js
└── README.md
```

## 🚀 Getting Started
# 1. Clone the Repository
bash
Copy
Edit
git clone https://github.com/yourusername/sparkrise.git
cd sparkrise

# 2. Install Dependencies
bash
Copy
Edit
npm install
# or
yarn install

# 3. Run the Development Server
bash
Copy
Edit
npm run dev
# or
yarn dev
App will be running at http://localhost:3000

## ⚙️ Configuration
No special environment variables are needed. All data is stored locally on the user's browser.

## 💾 localStorage Keys
| Key Name     | Description                           |
| ------------ | ------------------------------------- |
| `userQuotes` | Stores user-added motivational quotes |


## 🔧 Build for Production
npm run build
npm start


## 🧠 How It Works
A random quote is picked from the motivData.js file.

Background gradients are applied dynamically using Tailwind classes.

Users can add quotes which are stored in localStorage and shown alongside the default ones.

Greeting updates based on the current time.

## ✍️ Contributing
Pull requests are welcome! If you want to add more quotes, improve styling, or enhance features:
# Fork it
git clone https://github.com/yourusername/sparkrise.git

# Create your feature branch
git checkout -b feature/amazing-feature

# Commit your changes
git commit -m 'Add some amazing feature'

# Push to the branch
git push origin feature/amazing-feature

# Open a Pull Request

# 📜 License
MIT License. Feel free to use, modify, and distribute with proper attribution.

# 🙌 Acknowledgements
Tailwind CSS
Shadcn/ui
Next.js
You – for spreading positivity 🌟

## "Fuel your soul with daily light. Rise. Spark. Repeat." — SparkRise 🌅