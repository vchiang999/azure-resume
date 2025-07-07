# Azure Resume

This project is a personal resume website hosted on Azure Static Web Apps. It showcases my professional experience, past projects, and certifications. The site is built with HTML, CSS, and vanilla JavaScript, and it leverages a serverless function to track visitor counts.

## Tech Stack

- **Frontend:**
  - HTML
  - CSS (with Bootstrap)
  - JavaScript
- **Backend:**
  - Azure Functions (for the visitor counter)
- **Deployment:**
  - Azure Static Web Apps
  - GitHub Actions for CI/CD

## Features

- **Responsive Design:** The website is fully responsive and works on all devices.
- **Dynamic Visitor Counter:** A JavaScript function calls an Azure Function to retrieve and display the number of visitors.
- **CI/CD Pipeline:** The project is configured with a GitHub Actions workflow that automatically builds and deploys the site to Azure Static Web Apps whenever changes are pushed to the `main` branch.

## Deployment

The site is deployed using Azure Static Web Apps. The `.github/workflows/azure-static-web-apps-salmon-moss-029303503.yml` file defines the GitHub Actions workflow. This workflow checks out the code, builds the frontend, and deploys it to Azure.