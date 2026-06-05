# AP Exam Quest

A simple solo AP Calculus AB board game built with React, TypeScript, and Vite.

## Run Locally

```bash
npm install
npm run dev
```

## Test And Build

```bash
npm test
npm run build
```

## Deploy With GitHub Pages

1. Create a GitHub repository and push this project to the `main` branch.
2. In the repository, open `Settings -> Pages`.
3. Under `Build and deployment`, set `Source` to `GitHub Actions`.
4. Open the `Actions` tab and wait for `Deploy to GitHub Pages` to finish.
5. The public site URL will appear in the workflow summary and in `Settings -> Pages`.

The Vite `base` path is computed automatically in GitHub Actions:

- User or organization site repositories such as `username.github.io` use `/`.
- Project repositories such as `ap-exam-quest` use `/ap-exam-quest/`.
