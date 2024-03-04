# NCE Education Platform

The NCE Education Platform is an extensible, cloud-based learning management system designed to provide a comprehensive toolset for educators and learners. Utilizing AWS Amplify for the backend, this platform offers a robust, scalable solution for managing courses, users, notifications, and more.

## Technology Stack

- **Frontend**: [React.js](https://reactjs.org/) for dynamic user interfaces
- **Backend**: [AWS Amplify](https://aws.amazon.com/amplify/) handling authentication, data storage (GraphQL), file storage, and more
- **CI/CD**: Automated workflows with [GitHub Actions](https://github.com/features/actions) for testing, building, and deploying both frontend and backend changes
- **Database**: AWS Amplify's managed GraphQL service with a DynamoDB backend
- **Testing**: [Cypress](https://www.cypress.io/) for component and end-to-end testing

## Development Workflow

### Setting Up for Development

1. **Clone the repository**: `git clone https://github.com/yourgithubusername/your-repo-name.git`
2. **Install dependencies**: Run `npm install` at the root of your project.
3. **Set up AWS credentials**: Configure your AWS credentials for Amplify CLI usage.
4. **Initialize Amplify**: Run `amplify init` and follow the prompts to set up your development environment.

### Making Changes

1. Create a new branch for your feature: `git checkout -b feature/your-feature-name`
2. Make your changes, including any necessary modifications to the GraphQL schema.
3. Test your changes locally.
4. Commit your changes: `git commit -am "Add some feature"`
5. Push your branch: `git push origin feature/your-feature-name`

### Deploying Changes

- **Development**: Upon pushing changes to the `main` branch, GitHub Actions automates the build, test, and deployment process to the development environment.
- **Production**: After successful deployment and testing in the development environment, changes are promoted to the production branch, triggering a production deployment via GitHub Actions.

## CI/CD Pipeline

This project utilizes GitHub Actions for continuous integration and continuous deployment. The `.github/workflows/main.yml` file contains the workflow configuration for building, testing, and deploying the application.

### Key Workflow Steps

- **Build and Test**: Compiles the application, starts the server, and runs all Cypress tests.
- **Deploy to Development**: Applies changes to the AWS Amplify development environment.
- **Promote to Production**: After successful testing, merges changes to the production branch, triggering a deployment to the AWS Amplify production environment.

## Contributing

Contributions are welcome! Please read our [Contributing Guide](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
