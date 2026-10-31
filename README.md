# Bryce Martinez: Personal Website

**Live site: https://brycemartinez.github.io**

A single-page professional site covering my background in emergency medical services, public health, and community care. It's built with [Astro](https://astro.build) and hosted free on GitHub Pages. The finished page is plain HTML and CSS, with no JavaScript, no tracking, and no outside font or analytics requests.

---

## Quick reference

| I want to… | Do this |
| --- | --- |
| Change any text on the site | Edit [`src/content.ts`](src/content.ts) ([how](#editing-the-content)) |
| Add or replace my photo | Put a square `headshot.jpg` in `public/assets/` ([how](#adding-a-photo)) |
| See changes before publishing | `npm run dev`, then open http://localhost:4321 ([how](#previewing-locally)) |
| Publish changes | Commit and push to `main`. The site updates in about a minute ([how](#publishing-changes)) |
| Check whether a publish worked | The repo's **Actions** tab ([how](#troubleshooting)) |

---

## Editing the content

**Every word on the site lives in one file: [`src/content.ts`](src/content.ts).** You never need to touch the layout or styling to update your experience, education, or skills.

The file is split into labeled blocks: `site` (name, tagline, intro, LinkedIn), `about`, `experience`, `education`, `certifications`, and `skills`.

- **Change text:** edit what's between the quotes `'like this'`. Keep the quotes and the comma at the end of each line.
- **Apostrophes:** inside `'single quotes'`, use the curly apostrophe `’` (as in `I’m`). A straight `'` ends the text early and breaks the build.
- **Add a role:** copy an existing `{ title: …, org: …, dates: …, points: [ … ] },` block, paste it into the right group, and edit it. Roles appear in the order they're listed.
- **Remove a role:** delete its whole `{ … },` block.
- **Roles with no bullet points:** use `points: []`.

### Before you share the link
- [ ] Replace `https://www.linkedin.com/in/YOUR-PROFILE` with your real LinkedIn URL (in the `site` block).
- [ ] Rewrite the three **About** paragraphs in your own words. They're a starting draft.
- [ ] Change `isDraft: true` to `isDraft: false` to remove the yellow "Draft" label.

> **Privacy:** everything in this repo is public. Don't add a phone number, email address, home location, certification numbers, or a resume file.

## Adding a photo

1. Crop a headshot to a **square**. About 600 × 600 pixels is plenty.
2. Name it exactly **`headshot.jpg`** (lowercase).
3. Put it at **`public/assets/headshot.jpg`**.
4. Publish. The photo replaces the "BM" initials circle and becomes the preview image when someone shares your link.

To go back to the initials, delete the file. On GitHub.com you can upload the photo directly: open `public/assets`, then **Add file → Upload files**.

## Previewing locally

You need [Node.js](https://nodejs.org) (the LTS version) installed. In Terminal, from this folder:

```bash
npm install
```

```bash
npm run dev
```

Open **http://localhost:4321**. The page refreshes each time you save a file. Press **Control + C** to stop.

`npm install` is only needed the first time, or after the packages change. To check the exact output that gets published, run `npm run build`; the result appears in `dist/`.

## Publishing changes

Every push to the `main` branch rebuilds and republishes the site automatically, using [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). Changes are usually live within about a minute.

**From your computer:**

```bash
git add .
```

```bash
git commit -m "Describe what you changed"
```

```bash
git push
```

**From GitHub.com (no tools needed):** open a file in the repo, click the ✏️ pencil, make your edits, and click **Commit changes**.

## Troubleshooting

- **The site didn't update.** Open the repo's **Actions** tab. A green ✓ means it published, so hard-refresh the page (⌘ + Shift + R). A red ✗ means the build failed: click it to see the error.
- **The build failed after editing `content.ts`.** Look for a missing quote, comma, or bracket near the line the error mentions, or a straight apostrophe `'` inside a `'single-quoted'` line.
- **`git push` asks for a password.** Run `gh auth login` and follow the browser prompts. GitHub doesn't accept account passwords for git.
- **The site shows a plain README page instead of the design.** In the repo's **Settings → Pages**, make sure **Source** is set to **GitHub Actions**.

## Setting up on a new computer

1. Install [Node.js](https://nodejs.org) (LTS), [Homebrew](https://brew.sh), and the GitHub tool:

   ```bash
   brew install gh
   ```

2. Sign in to GitHub. This opens your browser:

   ```bash
   gh auth login
   ```

3. Download the project and install its packages:

   ```bash
   gh repo clone brycemartinez/brycemartinez.github.io
   ```

   ```bash
   cd brycemartinez.github.io && npm install
   ```

4. Keep your email private in commits. Every commit records an email address, so use GitHub's noreply address (find it under GitHub **Settings → Emails**):

   ```bash
   git config user.email "PASTE-YOUR-NOREPLY-ADDRESS"
   ```

   ```bash
   git config user.name "Bryce Martinez"
   ```

## Project structure

| Path | What it is |
| --- | --- |
| `src/content.ts` | **All site text. The file you'll edit most.** |
| `public/assets/` | Your photo goes here (`headshot.jpg`) |
| `public/favicon.svg` | The "BM" icon shown in browser tabs |
| `src/pages/index.astro` | Page structure and the order of sections |
| `src/styles/global.css` | Colors, fonts, spacing, and layout |
| `.github/workflows/deploy.yml` | Builds and publishes the site on every push |
| `astro.config.mjs` | Site address and build settings |

**Design notes:** cream background with a deep navy accent. Headings use Fraunces and body text uses Atkinson Hyperlegible, a typeface designed for readability; both are served from the site itself. All color pairs meet WCAG AA contrast, the page works with a keyboard, and the entrance animation turns off for visitors who prefer reduced motion.
