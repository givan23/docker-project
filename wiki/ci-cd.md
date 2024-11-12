# docker-project

This project is a tutorial on how to implement docker, containers and CI/CD in github.

## GitHub Actions

GitHub Actions makes it easy to automate all your software workflows, now with world-class CI/CD. Build, test, and
deploy your code right from GitHub. Make code reviews, branch management, and issue triaging work the way you want.

- Create a new repository in GitHub
- Add a new file in the repository (example: Dockerfile) for the docker image
- Create workflow for CI (example: this will trigger the workflow when a push is made to the repository)
- Create workflow for CD (example: this will trigger the workflow when a pull request is made and approved to the
  repository)
- In the gitHub repository, go to Actions tab to see the workflows
- In the gitHub repository, go to Packages tab to see the docker image
- In the gitHub repository, go to Pull requests tab to see the pull requests
- In the gitHub repository, go to Settings tab to see the secrets
**IMPORTANT: the token must be "classic", has an expiration date and is better to set it all permissions**

## Docker

- Create docker image locally
    ```bash
    docker build -t docker-project-image:latest .
    ```
- Run docker image locally
    ```bash
    docker run -e PORT=5000 -p 5000:5000 docker-project-image:latest
    ```

## Heroku

Heroku is a platform as a service (PaaS) that enables developers to build, run, and operate applications entirely in the
cloud.

- Install Heroku CLI (on official website)
- Login to Heroku CLI
    ```bash
    heroku login
    ```
- Create a new app in Heroku
    ```bash
    heroku create
    ```
- Deploy the app to Heroku
    ```bash
    git push heroku master
    ```
- Access the app in Heroku (open the app in the browser)
    ```bash
    heroku open -a <app-name>
    ```
- View the logs of the app in Heroku
    ```bash
    heroku logs --tail -a <app-name>
    ```
- Scale the app in Heroku
    ```bash
    heroku ps:scale web=1 -a <app-name>
    ```
- Add environment variables to the app in Heroku
    ```bash
    heroku config:set KEY=VALUE -a <app-name>
    ```
- View the environment variables of the app in Heroku
    ```bash
    heroku config -a <app-name>
    ```
- Stop the app in Heroku
    ```bash
    heroku ps:scale web=0 -a <app-name>
    ```
- Remove the app in Heroku
    ```bash
    heroku apps:destroy -a <app-name>
    ```
- View the apps in Heroku
    ```bash
    heroku apps
    ```
- View the account in Heroku
    ```bash
    heroku account
    ```
- Set correct stack for the app in Heroku
    ```bash
    heroku stack:set container -a <app-name>
    ```
- Push the app to Heroku by CLI
    ```bash
    heroku container:push web -a <app-name>
    ```
- Release the app in Heroku by CLI
    ```bash
    heroku container:release web -a <app-name>
    ```
- Check Heroku app logs
    ```bash
    heroku logs --tail -a <app-name>
    ```

