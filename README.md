# Norah Aljandol Portfolio

## Run locally
```bash
npm install --legacy-peer-deps
npm run dev
```
Open `http://localhost:3000`.

## Where to add pictures
Put your images inside the `public/images` folder. Keep the same file names below, or update the image path in `app/page.tsx`.

### Profile picture
Replace:
`public/images/profile.png`

Recommended size: square image, 900×900 px or larger.

### Project pictures
Replace these files:
- `public/images/projects/minhaj.png`
- `public/images/projects/seen.png`
- `public/images/projects/waditext.png`
- `public/images/projects/findcourses.png`
- `public/images/projects/smartie.png`

Recommended size: 1200×675 px.

### Certificate pictures
Replace these files:
- `public/images/certificates/ai-professionals.png`
- `public/images/certificates/kaust-ai.png`
- `public/images/certificates/google-cloud.png`
- `public/images/certificates/ai-fundamentals.png`
- `public/images/certificates/ai-risk.png`
- `public/images/certificates/drones.png`

Recommended size: 1200×675 px.

## GitHub project links
Open `app/page.tsx`, find the `projects` array, and replace each `github` value with the real repository URL.

Example:
```ts
github: "https://github.com/noura05x/seen-project"
```
