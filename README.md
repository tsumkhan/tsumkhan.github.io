# Sumaira Khan — Portfolio

A plain static site: `index.html`, `styles.css`, `script.js`, and an `images/`
folder. No build step, no framework. You upload the files, turn on GitHub Pages,
and it's live.

---

## 1. Put your site live on GitHub Pages (free)

1. Create a GitHub account if you don't have one.
2. Create a **new public repository** named exactly:
   `YOURUSERNAME.github.io`
   (replace `YOURUSERNAME` with your real GitHub username — this exact name is
   what makes it a personal site.)
3. Upload **all** the files in this folder into the repo — `index.html`,
   `styles.css`, `script.js`, the `images/` folder, and your `cv.pdf`. You can
   drag-and-drop them in the GitHub web uploader ("Add file → Upload files"),
   then commit.
4. In the repo, go to **Settings → Pages**. Under "Build and deployment", set
   **Source = Deploy from a branch**, branch = `main`, folder = `/ (root)`. Save.
5. Wait ~1–2 minutes. Your site is live at `https://YOURUSERNAME.github.io`.

Later, if you want a custom domain (like `sumairakhan.com`), buy one (~$10–15/yr
from Namecheap or Cloudflare) and follow GitHub's "custom domain" docs — it's a
`CNAME` setting plus a couple of DNS records. Not needed to launch.

---

## 2. Add your CV

Export your resume as a PDF, name it exactly `cv.pdf`, and put it in the repo
root (next to `index.html`). The "CV" button and "Download CV" link point to it.

---

## 3. Add your media

Drop your photos, GIFs, and the manual into the `images/` folder using these
**exact filenames** (the code already points at them). Anything missing just
shows a neat labeled placeholder box until you add it — the site never looks
broken. Preferred formats noted; a phone photo is fine.

| Filename                     | What it is                                          |
|------------------------------|-----------------------------------------------------|
| `sumaira-portrait.jpg`       | Your headshot / portrait (hero). Portrait crop.     |
| `mci-lab.jpg`                | Microcontrollers lab, current iteration             |
| `mci-manual.pdf`             | The MCI lab manual you help maintain                |
| `robotics-lab.gif`           | Robotics lab in action (short GIF — see note below) |
| `nerc-1.jpg`, `nerc-2.jpg`   | Two NERC competition photos                         |
| `fyp-presentation.jpg`       | You + teammates on FYP presentation day             |
| `origami-robot.gif`          | Origami/Purdue robot moving (short GIF)             |
| `surf-poster.jpg`            | You with the SURF poster                            |
| `purdue-front.jpg`           | You in front of Purdue                              |
| `iftp-win-local.jpg`         | Team winning the local IFTP round                   |
| `iftp-working.jpg`           | Team working on FinDiesel                           |
| `iftp-texas.jpg`             | Team at Texas A&M (caption already added)           |
| `load-flow.jpg`              | Any figure/screenshot for the load-flow project     |
| `arm-working.gif`            | Robotic arm doing pick & place (short GIF)          |
| `mci-project.jpg`            | Bluetooth combat robot                              |
| `self-balancing.jpg`         | Self-balancing robot (report or photo)              |
| `puan-1.jpg`, `puan-2.jpg`   | Two photos from the PUAN energy conference          |
| `buraq-hoodbhoy.jpg`         | Lecture with Dr. Hoodbhoy                           |
| `buraq-batch.jpg`            | Buraq Space Camp batch photo                        |
| `buraq-kamra.jpg`            | You by the aircraft at PAC Kamra                    |

**GIF note:** GIFs of robots get huge (10–20 MB) and load slowly. If any clip is
more than ~5 MB, tell me and I'll switch that slot to a looping muted MP4 (much
smaller, looks better) or a YouTube embed.

I did NOT find a picture named for the "with the dean" shot in a slot yet — if
you want it added, send the word and I'll place it in the Purdue block.

---

## 4. Links to fill in

Search `index.html` for `href="#"` and `YOURUSERNAME`. Replace these:

- **GitHub username** — in the Contact section and the "GitHub →" links on the
  Pick-and-Place, Snake, and Robotic Arm projects.
- **IEEE Xplore paper** — the FYP "IEEE Xplore paper →" link.
- **Project video** — the LinkedIn video your university made (FYP block).
- **Origami robot: Research paper** and **SURF certificates** links.
- **Load-flow IEEE publication** link.
- (Optional) Google Scholar / ORCID — say the word and I'll add them to Contact.

Tell me the real URLs and I'll drop them in for you so you don't have to touch
the HTML.

---

## 5. Things I left out on purpose

- Your **phone number** and **home address** (both were on your resume). They're
  spam magnets on a public site. Say so if you want the phone added.
- Confirm your **RA start date** — resume says Dec 2025, LinkedIn says Jan 2026.
  I wrote "2026 — now"; change if needed.
