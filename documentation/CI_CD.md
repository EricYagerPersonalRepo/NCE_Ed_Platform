# CI/CD Process Overview

This document outlines the Continuous Integration/Continuous Deployment (CI/CD) process utilized in the development of the project. The process ensures that all code commits are built, tested, and deployed efficiently and reliably.

## Process Flow

1. **Code Commit to Main Branch**
   - Developers commit code changes to the `main` branch of the GitHub repository. This triggers the CI/CD pipeline.

2. **Parallel Processes Kick-off**
   - Upon a commit to the `main` branch, two parallel processes are automatically initiated:
     - AWS Amplify Development Environment Build
     - GitHub Actions Workflow Execution

3. **AWS Amplify Development Environment Build**
   - An automated build is triggered in the AWS Amplify Development Environment. This ensures that the development version of the application is always up-to-date with the latest code changes.

4. **GitHub Actions Workflow Execution**
   - A predefined GitHub Actions workflow is executed, which includes:
     - Installation of dependencies.
     - Execution of the build process.
     - Running automated tests to verify the integrity and functionality of the code changes.

5. **Decision Point: Workflow Success**
   - If the GitHub Actions workflow completes successfully, the process moves to the next step.
   - If the workflow fails, developers are notified to fix the issues and commit the changes again.

6. **Code Promotion to Production Branch**
   - Upon successful completion of the GitHub Actions workflow, the code is automatically promoted from the `main` branch to the `production` branch. This action triggers the CI/CD process for the production environment in AWS Amplify.

7. **Final Deployment in AWS Amplify Production Environment**
   - The CI/CD process in AWS Amplify automatically deploys the code from the `production` branch to the Production Environment, making the changes live.

## Notes

- **Automated Rollbacks**: In case of deployment failures or critical issues detected in the production environment, automated rollbacks are triggered to maintain the stability of the live application.
- **Monitoring and Alerts**: Continuous monitoring is in place for both the development and production environments. Alerts are configured to notify the development team of any significant events or issues.

This CI/CD process ensures a streamlined and automated workflow from code commit to deployment, facilitating rapid and reliable delivery of features and fixes.