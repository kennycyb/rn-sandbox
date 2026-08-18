# React Native Sandbox (`rn-sandbox`)

A lightweight playground and experimental sandbox for React Native, designed for rapid component prototyping, Metro bundler testing, and standalone bundle generation (e.g., integrating into native Android/iOS applications).

---

## 📌 Features

- **Minimal Setup**: Clean, dependency-light React Native environment with minimal overhead.
- **Metro Bundler**: Preconfigured script to start the local development server (with `--openssl-legacy-provider` compatibility support).
- **Bundle Generation**: Ready-to-use command to package JavaScript bundles and assets for native Android deployment (`index.android.bundle`).
- **Starter Component**: Simple root component (`HelloWorld`) registered as `MyReactNativeApp` in [`index.js`](./index.js).

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (LTS recommended)
- [Yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/)
- (Optional) [Android Studio / SDK](https://developer.android.com/studio) if embedding into Android native apps

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/kennycyb/rn-sandbox.git
   cd rn-sandbox
   ```

2. Install dependencies:
   ```bash
   yarn install
   # or
   npm install
   ```

---

## 🛠 Available Scripts

In the project directory, you can run:

### `yarn start` / `npm start`
Starts the React Native Metro development server:
```bash
yarn start
```
Runs Metro with `NODE_OPTIONS=--openssl-legacy-provider react-native start`.

### `yarn bundle` / `npm run bundle`
Builds a production-ready JavaScript bundle and asset directory for Android:
```bash
yarn bundle
```
Executes:
```bash
react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/
```

---

## 📂 Project Structure

```text
rn-sandbox/
├── .github/
│   └── dependabot.yml       # Automated dependency updates
├── .githooks/               # Git hook scripts
├── index.js                 # Application entrypoint and root component
├── package.json             # Project metadata, scripts, and dependencies
├── yarn.lock                # Locked dependency tree
└── README.md                # Project documentation
```

---

## 📄 License

This project is licensed under the [Apache-2.0](LICENSE) License.
