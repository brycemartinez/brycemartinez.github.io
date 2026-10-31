# brycemartinez.github.io

My personal website, live at **https://brycemartinez.github.io**.

It's built with [Astro](https://astro.build), which turns one content file into a plain, fast HTML page with no JavaScript on the page. GitHub hosts it for free and rebuilds it automatically every time you push a change.

---

## 1. Editing the content

**All the text lives in one file: [`src/content.ts`](src/content.ts).** You never need to touch the layout files.

- **Change text:** edit what's between the quotes `'like this'`. Keep the quotes and the commas at the ends of lines.
- **Apostrophes:** inside `'single quotes'`, use the curly apostrophe `’` (as in `I’m`), or the text will break. If you prefer, you can wrap that line in double quotes `"..."` instead.
- **Add a job:** copy an existing `{ title: ..., org: ..., dates: ..., points: [...] },` block, paste it where you want it in its group, and edit it.
- **Remove a job:** delete its whole `{ ... },` block.
- **About section:** the three paragraphs are a **draft I wrote for you**. Rewrite them in your own words, then change `isDraft: true` to `isDraft: false` to remove the yellow "Draft" label.
- **LinkedIn:** replace `https://www.linkedin.com/in/YOUR-PROFILE` with your real profile URL. It appears in the hero and the footer.

> **Privacy:** don't add a phone number, email address, home location, or certification numbers to this file. Everything here is public.

## 2. Adding your photo

1. Choose a headshot and crop it to a **square** (about 600 × 600 pixels is plenty).
2. Name it exactly **`headshot.jpg`**, all lowercase.
3. Put it in the **`public/assets/`** folder, so the full path is `public/assets/headshot.jpg`.
4. Push the change (see section 5). The "BM" initials circle is replaced by your photo automatically, and the photo also becomes the preview image when someone shares your link.

To go back to the initials, delete the file.

## 3. One-time setup on your computer

You need two free tools:

1. **Node.js** (the LTS version): https://nodejs.org. Download it and run the installer.
2. **Git:** on a Mac, open the **Terminal** app and type `git --version`. If Git isn't installed, macOS offers to install it; click **Install**.

### Keep your email private in git (important; do this before your first commit)

Every git commit records an email address, and anyone can read it in a public repository's history. Use GitHub's private "noreply" address instead:

1. On GitHub, go to **Settings → Emails**.
2. Check **"Keep my email addresses private"** and **"Block command line pushes that expose my email."**
3. Copy the address shown there. It looks like `ID+USERNAME@users.noreply.github.com` (a number, a plus sign, then your username).
4. In Terminal, run these, pasting in your own noreply address:

```bash
git config --global user.name "Bryce Martinez"
```

```bash
git config --global user.email "PASTE-YOUR-NOREPLY-ADDRESS-HERE"
```

## 4. Previewing the site on your computer

In Terminal, go to this project folder (type `cd `, with a space, then drag the folder onto the Terminal window and press Return). Then run:

```bash
npm install
```

```bash
npm run dev
```

Open **http://localhost:4321** in your browser. While the preview is running, it updates every time you save `src/content.ts`. Press **Control + C** in Terminal to stop it.

You only need `npm install` the first time, or after a long break.

## 5. Putting the site online (first time)

### a. Create the repository on GitHub

1. Go to https://github.com/new.
2. **Repository name:** `brycemartinez.github.io`. It must be exactly this for the site to appear at the root address.
3. Set it to **Public** (free GitHub Pages requires a public repo).
4. Leave "Add a README", ".gitignore", and "license" **unchecked**.
5. Click **Create repository**.

### b. Push this folder to it

In Terminal, inside the project folder, run these one at a time:

```bash
git init
```

```bash
git add .
```

```bash
git commit -m "First version of my website"
```

```bash
git branch -M main
```

```bash
git remote add origin https://github.com/brycemartinez/brycemartinez.github.io.git
```

```bash
git push -u origin main
```

If git asks you to sign in, follow the browser prompt. If it asks for a **password**, it actually needs a *personal access token*: create one at GitHub → Settings → Developer settings → Personal access tokens, and paste that in instead.

*Prefer clicking to typing?* [GitHub Desktop](https://desktop.github.com) does the same thing: **File → Add Local Repository**, then **Publish repository**. Still do the email step above first, and in GitHub Desktop's settings make sure the noreply address is the one selected.

### c. Turn on GitHub Pages

1. In your repo on GitHub, open **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.
3. Open the **Actions** tab. You'll see "Deploy to GitHub Pages" running. When it shows a green check (usually 1–2 minutes), your site is live at **https://brycemartinez.github.io**.

If the first run happened before you switched Pages to "GitHub Actions", open the **Actions** tab, click **Deploy to GitHub Pages → Run workflow** to run it again.

## 6. Updating the site later

The site redeploys automatically whenever a change lands on `main`. Use whichever method is easier:

**Option A: edit on GitHub.com (no tools needed)**
1. In your repo, open `src/content.ts` and click the ✏️ pencil icon.
2. Make your edits, then click **Commit changes**.
3. Wait about 2 minutes, then refresh your site.

To add or replace your photo this way, open the `public/assets` folder, then **Add file → Upload files**.

**Option B: edit on your computer**
1. Edit `src/content.ts` and preview with `npm run dev`.
2. Then run:

```bash
git add .
```

```bash
git commit -m "Update experience"
```

```bash
git push
```

Check the **Actions** tab if something seems off. A red ✗ usually means a typo in `content.ts`, such as a missing quote or comma; click the failed run to see which line.

---

### What's where

| Path | What it is |
| --- | --- |
| `src/content.ts` | **All site text. The only file you normally edit.** |
| `public/assets/headshot.jpg` | Your photo (optional) |
| `public/favicon.svg` | The little "BM" icon in browser tabs |
| `src/pages/index.astro` | Page layout |
| `src/styles/global.css` | Colors, fonts, spacing |
| `.github/workflows/deploy.yml` | Tells GitHub how to build and publish the site |
