# Nebula PWA Web

This repository contains the source code for the `nebula-info-web` project, a web site built with React. This site is to provide information about Nebula PWA. This is designed to be responsive, elegant, and up-to-date with the latest web development trends. This project is deployed on GitHub Pages.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Project Structure](#project-structure)
3. [Installation](#installation)
4. [Running Locally](#running-locally)
5. [Building the Project](#building-the-project)
6. [Deploying to GitHub Pages](#deploying-to-github-pages)
7. [Customizing the App](#customizing-the-app)
8. [Troubleshooting](#troubleshooting)
9. [Useful Resources](#useful-resources)
10. [License](#license)

## Project Overview

`nebula-info-web` is a modern PWA that includes multiple pages, a responsive navbar, and customizable components. The goal is to create a seamless user experience across different devices while leveraging the latest web technologies.

**Features:**
- Responsive design with mobile-friendly navigation
- Multi-page layout with React Router
- Deployed on GitHub Pages for easy access

## Project Structure

Here's a little overview of the project's folder structure:

```
nebula-tech-hub.github.io/
├── .git/
├── node_modules/
├── public/
│   ├── 404.html
│   ├── structure.txt
│   ├── index.html
│   ├── manifest.json
│   ├── robots.txt
├── src/
│   ├── assets/
│   │   ├── filter_infographic.png
│   │   ├── infographic.jpg
│   │   ├── iphone_step1.jpg
│   │   ├── iphone_step2.jpg
│   │   ├── iphone_step3.jpg
│   │   ├── iphone_step4.jpg
│   │   ├── iphone_steps.jpg
│   │   ├── like_infographic.png
│   │   ├── list_infographic.png
│   │   ├── message_infographic.png
│   │   ├── nebula_logo.png
│   │   ├── nebula-galaxy.png
│   │   ├── nebula.ico
│   │   ├── nebula.jpg
│   │   ├── nebulaLogo.png
│   │   ├── nebulaqrcode.png
│   │   ├── search_infographic.png
│   │   ├── small-nebula-galaxy.jpg
│   ├── components/
│   │   ├── AboutPage.js
│   │   ├── ContactPage.js
│   │   ├── CookieConsent.js
│   │   ├── Footer.js
│   │   ├── HomePage.js
│   │   ├── HowToInstallPage.js
│   │   ├── Navbar.js
│   │   ├── NebulaBackground.js
│   │   ├── NotFound.js
│   │   ├── PolicyPage.js
│   ├── styles/
│   │   ├── AboutPage.css
│   │   ├── App.css
│   │   ├── ContactPage.css
│   │   ├── CookieConsent.css
│   │   ├── Footer.css
│   │   ├── HomePage.css
│   │   ├── HowToInstallPage.css
│   │   ├── index.css
│   │   ├── Navbar.css
│   │   ├── NebulaBackground.css
│   │   ├── PolicyPage.css
│   ├── App.test.js
│   ├── App.js
│   ├── firebaseConfig.js
│   ├── index.js
│   ├── logo.svg
│   ├── reportWebVitals.js
│   ├── setupTests.js
├── .gitignore
├── package-lock.json
├── package.json
├── README.md
```

## Installation

Before running or deploying the project, you need to set up your development environment. Follow these steps:

1. **Clone the repository:**

   ```powershell
   git clone https://github.com/nebula-tech-hub/nebula-tech-hub.github.io.git
   ```

2. **Navigate to the project directory:**

   ```powershell
   cd nebula-tech-hub.github.io
   ```

3. **Install the required dependencies:**

   Make sure you have Node.js installed. Then, run:

   ```powershell
   npm install
   ```

   This will install all the dependencies listed in the `package.json` file.

## Running Locally

To preview the project on your local machine:

1. **Start the development server:**

   ```powershell
   npm start
   ```

2. Open your browser and navigate to `http://localhost:3000`. The app will automatically reload if you make changes to the code.

## Building the Project

Before deploying, you need to build the project. The build process compiles the React code and optimizes it for production.

1. **Run the build command:**

   ```powershell
   npm run build
   ```

2. This will create a `build` directory containing the optimized production-ready files. These files are what you will deploy to GitHub Pages.

## Deploying to GitHub Pages

Deploying to GitHub Pages involves a few steps:

1. **Set the `homepage` field in `package.json`:**

   The `homepage` field should be set to the URL where your app will be hosted:

   ```json
   "homepage": "https://nebula-tech-hub.github.io"
   ```

2. **Build the project:**

   If you haven't already done so, run:

   ```powershell
   npm run build
   ```

3. **Deploy the project:**

   Run the following command to deploy the app to GitHub Pages:

   ```powershell
   npm run deploy
   ```

   This command will create or update the `gh-pages` branch in your repository and push the built files there. Your site should be live at `https://nebula-tech-hub.github.io/`.

## Customizing the App

To tailor the app to your needs:

1. **Modify Components:**

   Update or add new components in the `src/components` directory.

2. **Update Styles:**

   Customize the appearance by editing the CSS files in the `src/styles` directory.

3. **Add New Pages:**

   To add a new page, create a new component, and update the routes in `App.js`.

4. **Update the Navbar:**

   Modify `Navbar.js` to include links to any new pages you've added.

## Workflow for Adding New Features

1. **Create a New Branch:**

   It’s best practice to create a new branch for each feature or bug fix. Run:

   ```powershell
   git checkout -b feature/your-feature-name
   ```

2. **Make Changes:**

   Develop your feature or fix issues.

3. **Commit and Push Changes:**

   After making changes, commit and push them to your repository:

   ```powershell
   git add .
   git commit -m "Describe your changes"
   git push origin feature/your-feature-name
   ```

4. **Merge Changes:**

   Once your feature is complete and tested, create a pull request on GitHub to merge it into the `main` branch.

5. **Build and Deploy:**

   Switch back to the `main` branch and pull the latest changes:

   ```powershell
   git checkout main
   git pull origin main
   ```

   Build and deploy the updated project:

   ```powershell
   npm run build
   npm run deploy
   ```

## Troubleshooting

Here are some common issues you might encounter and their solutions:

### 1. Blank Page after Deployment

- **Ensure the `homepage` field in `package.json` is correctly set.** This field tells React where your app will be hosted, ensuring that all assets are correctly linked.

- **Verify the paths in `index.html`.** Double-check that paths to assets like `favicon.ico`, `manifest.json`, and CSS/JS files are correctly prefixed with the appropriate URL.

### 2. 404 Error on GitHub Pages

- **Check the repository name and URL.** Ensure that the repository name is correct and that the `gh-pages` branch has been created.

- **Make sure the `gh-pages` branch is the deployment source.** Verify this in the repository settings on GitHub.

### 3. "Module not found" Errors

- **Check component imports.** Ensure that all components and stylesheets are imported correctly within your React components.

- **Confirm the folder structure.** Verify that all files are located where they should be, as per the project's folder structure.

### 4. Issues with GitHub Pages Deployment

- **Try a clean build and redeploy.** If the site isn’t deploying correctly, try removing the `build` directory and regenerating it:

  ```powershell
  Remove-Item -Recurse -Force build
  npm run build
  npm run deploy
  ```

## Useful Resources

Here are some resources to help you with development:

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Progressive Web Apps (PWA) Documentation](https://web.dev/progressive-web-apps/)
- [Create React App Documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [gh-pages npm package](https://www.npmjs.com/package/gh-pages)

## License

This project is protected. You cannot use, modify, and distribute the code, images, designs or anythign on this site.