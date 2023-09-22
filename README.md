# air-O-Meter App

![air-O-Meter Logo](./assets/logo.png)

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The **air-O-Meter** app is a React Native application built using TypeScript that provides real-time air quality information based on your current location. It fetches data from the [acinc.org](https://acinc.org) API and uses location tracking to determine your current location.

![air-O-Meter Screenshot](https://example.com/airometer-screenshot.png)

## Features

- Real-time air quality data based on your location.
- Interactive and user-friendly interface.
- Detailed air quality information, including pollutant levels and health recommendations.
- Support for dark and light themes.
- Geolocation tracking to provide accurate data based on your current location.
- Data sourced from [acinc.org](https://acinc.org) for reliable and up-to-date information.

## Getting Started

### Prerequisites

Before you can run the **air-O-Meter** app, you need to have the following software installed on your development machine:

- Node.js and npm: You can download and install them from [nodejs.org](https://nodejs.org/).

### Installation

Follow these steps to install and run the **air-O-Meter** app:

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/lindakw/air-O-meter_appRN.git
   ```

2. Navigate to the project directory:

   ```bash
   cd air-O-meter_appRN
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the project root and configure your API key from [acinc.org](https://acinc.org):

   ```env
   ACINC_API_KEY=your-api-key
   ```

5. Start the development server:

   ```bash
   npm start
   ```

6. Run the app on an Android or iOS emulator or device:

   ```bash
   npm run android # For Android
   npm run ios     # For iOS
   ```

## Usage

- When you open the app, it will request permission to access your location.
- Once permission is granted, the app will determine your location and fetch air quality data from [acinc.org](https://acinc.org).
- You can view detailed air quality information for your location, including pollutant levels and health recommendations.
- The app supports both dark and light themes, and you can toggle between them in the settings.

## Configuration

You can customize the app by modifying the `.env` file with your API key from [acinc.org](https://acinc.org) and other configuration options.

## Contributing

We welcome contributions to the **air-O-Meter** app. If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix: `git checkout -b feature/new-feature` or `git checkout -b bugfix/fix-issue`.
3. Make your changes and commit them with descriptive commit messages.
4. Push your branch to your fork: `git push origin feature/new-feature`.
5. Create a pull request to the `main` branch of the original repository.

Please make sure to adhere to our code of conduct and follow the coding guidelines in the project.

## License

The **air-O-Meter** app is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute the code for your own projects.
