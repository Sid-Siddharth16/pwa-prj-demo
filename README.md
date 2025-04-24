🚀 React + TypeScript PWA Demo
Say hello to a sleek Progressive Web App built with React and TypeScript, showcasing modern PWA capabilities like offline mode, push notifications, and app install prompts.

🔗 Live Preview
Wanna see it in action? Check it out here:
Live Preview :- https://pwa-prj-demo.vercel.app/

🛠 GitHub Source
Wanna dig into the code? Clone or fork from here:
📁 GitHub Repo :- https://github.com/Sid-Siddharth16/pwa-prj-demo

✨ What’s Inside
✅ Offline access powered by Service Workers

🔔 Multiple Push Notification types (Info, Success, Warning, Error)

📲 Fully Installable like a native app

📱 Mobile-first Responsive UI styled with Tailwind CSS

🧠 Written in TypeScript for a robust dev experience

⚡ Built with Vite for ultra-fast performance

📲 Installing the App
The custom "Install App" button shows up only when:

You're on a secure HTTPS connection (so, not localhost 👀)

The app isn’t already installed

All the PWA rules are met (valid manifest, registered SW, the whole deal)

Heads-up: You won’t see the install button in a local dev setup—use the live link for that full experience!

🧑‍💻 Getting Started Locally
Prerequisites
Node.js v16+

npm v7+

Setup Steps
bash
Copy
Edit
git clone https://github.com/Anjulsinghal/pwa-notifications
cd pwa-notifications
npm install
npm run dev
Build for Production
bash
Copy
Edit
npm run build
npm run preview
📂 Project Layout
php
Copy
Edit
pwa-notifications/
├── public/
│   └── sw.js                      # Service worker logic
├── src/
│   ├── components/
│   │   ├── Notification.tsx       # Basic notification UI
│   ├── App.tsx                    # Main app component
│   ├── main.tsx                   # Entry point
│   ├── index.css                  # Tailwind global styles
│   └── serviceWorkerRegistration.ts # Registers SW
├── index.html                     # App shell
├── vite.config.ts                 # Vite config
├── tailwind.config.js             # Tailwind setup
├── tsconfig.json                  # TS config
└── package.json                   # Scripts & dependencies


🧠 Behind the Scenes
🛡 Service Worker Power
The sw.js script handles:

Smart caching for offline support

Network request interception

Push notifications setup

Optional background sync

### Notifications

The app demonstrates two ways to implement notifications:
1. **Basic Notifications**: Text-based notifications with the original component
2. **Typed Notifications**: Four different notification types (Info, Success, Warning, Error)

### Installation

The PWA can be installed on supported devices and browsers. The installation prompt is handled by the browser, and our app provides a custom "Install App" button when the conditions are met.

Basic Alerts — Plain text-style popups

Typed Alerts — Info, Success, Warning & Error variants with custom styles
![Screenshot (8)](https://github.com/user-attachments/assets/e433501e-4b8d-445a-b4f6-9f2073ff0a05)
![Screenshot (9)](https://github.com/user-attachments/assets/9e223a12-bb4f-42b1-a416-391b82fc8eeb)
![Screenshot (10)](https://github.com/user-attachments/assets/3e7184b4-f66c-4456-a92b-1b008d7af1a2)
![Screenshot (11)](https://github.com/user-attachments/assets/6120dcc5-73f4-4185-a9bf-761be78daed5)
