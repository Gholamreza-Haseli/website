# ISDA Website — International Society of Decision Analytics
## Complete Project Documentation & Structure Guide

---

## 📁 Folder Structure

```
isda/
├── index.html                          ← Homepage
├── assets/
│   ├── css/
│   │   └── main.css                   ← Global design system & all styles
│   ├── js/
│   │   └── main.js                    ← Navigation, tabs, accordion, forms
│   └── images/
│       └── (place all images here)
├── components/
│   ├── header.html                    ← Reusable header/nav snippet
│   └── footer.html                    ← Reusable footer snippet
├── data/
│   └── (JSON data files for dynamic content)
├── pages/
│   ├── about/
│   │   ├── index.html                 ← About ISDA
│   │   ├── mission.html               ← Mission & Vision
│   │   ├── history.html               ← History & Timeline
│   │   ├── bylaws.html                ← Bylaws & Governance
│   │   ├── announcements.html         ← News & Announcements
│   │   ├── contact.html               ← Contact Us (with form)
│   │   ├── privacy.html               ← Privacy Policy
│   │   └── terms.html                 ← Terms of Use
│   ├── board-members/
│   │   ├── index.html                 ← All Board Members grid
│   │   ├── amir-karimi.html           ← Individual profile (template)
│   │   ├── sarah-lin.html             ← Individual profile
│   │   ├── marco-rossi.html           ← Individual profile
│   │   ├── fatima-noor.html           ← Individual profile
│   │   ├── thomas-weber.html          ← Individual profile
│   │   ├── yuki-chen.html             ← Individual profile
│   │   ├── layla-mansouri.html        ← Individual profile
│   │   ├── raj-subramanian.html       ← Individual profile
│   │   ├── carmen-alvarez.html        ← Regional VP profile
│   │   ├── henrik-berg.html           ← Regional VP profile
│   │   ├── min-wang.html              ← Regional VP profile
│   │   ├── amara-osei.html            ← Regional VP profile
│   │   ├── elena-kovacs.html          ← Board member profile
│   │   ├── david-tran.html            ← Board member profile
│   │   ├── nadia-jimenez.html         ← Board member profile
│   │   ├── omar-shaikh.html           ← Board member profile
│   │   └── past-board.html            ← Past Board Members archive
│   ├── awards/
│   │   ├── index.html                 ← Awards overview
│   │   ├── society-awards/
│   │   │   ├── index.html             ← Society Awards overview
│   │   │   ├── fellows-award.html     ← ISDA Fellows Award + past recipients
│   │   │   ├── best-dissertation.html ← Best Dissertation Award
│   │   │   ├── service-award.html     ← Distinguished Service Award
│   │   │   ├── early-career.html      ← Early Career Research Award
│   │   │   ├── industry-award.html    ← Industry Excellence Award
│   │   │   └── fellows-archive.html   ← Complete fellows archive
│   │   └── journal-awards/
│   │       ├── index.html             ← Journal Awards overview
│   │       ├── best-paper.html        ← Best Paper Award + past winners
│   │       ├── best-reviewer.html     ← Best Reviewer Award
│   │       └── best-editor.html       ← Best Editor Award
│   ├── divisions/
│   │   ├── index.html                 ← All Divisions overview
│   │   ├── ai-analytics.html          ← AI & Machine Learning Division
│   │   ├── healthcare.html            ← Healthcare Analytics Division
│   │   ├── supply-chain.html          ← Supply Chain Decisions Division
│   │   ├── behavioral.html            ← Behavioral Decision Making Division
│   │   ├── sustainability.html        ← Sustainability Analytics Division
│   │   └── fintech.html               ← FinTech & Risk Analytics Division
│   ├── conferences/
│   │   ├── index.html                 ← All Conferences
│   │   ├── annual.html                ← Annual Conference 2026 (detailed)
│   │   ├── workshops.html             ← Workshops & Seminars
│   │   ├── past.html                  ← Past Conferences archive
│   │   └── call-for-papers.html       ← Call for Papers
│   ├── journal/
│   │   ├── index.html                 ← About the Journal (JDA)
│   │   ├── author-instructions.html   ← Author submission guide
│   │   ├── editorial-board.html       ← Full editorial board
│   │   ├── call-for-papers.html       ← Journal CFP & special issues
│   │   ├── ethics-policy.html         ← Publication ethics
│   │   └── subscriptions.html         ← Journal access / subscribe
│   ├── membership/
│   │   ├── index.html                 ← Membership overview
│   │   ├── register.html              ← Registration form (multi-step)
│   │   ├── benefits.html              ← Full benefits + comparison table
│   │   ├── renew.html                 ← Membership renewal
│   │   └── login.html                 ← Member portal login
│   ├── education/
│   │   ├── index.html                 ← Education resources hub
│   │   ├── courses.html               ← Online courses catalog
│   │   ├── doctoral.html              ← Doctoral program support
│   │   └── webinars.html              ← Webinars (upcoming + archive)
│   ├── jobs/
│   │   ├── index.html                 ← Jobs board
│   │   └── post-job.html              ← Post a job form
│   └── voices/
│       ├── index.html                 ← Voices of ISDA hub (tabbed)
│       ├── interviews.html            ← Expert interviews
│       ├── insights.html              ← Applied insights
│       └── fellow-talks.html          ← Fellow talks / recorded lectures
└── admin/
    └── (admin panel files — optional backend integration)
```

---

## 🎨 Design System

### Color Palette
| Token | Value | Usage |
|-------|-------|-------|
| `--navy-deep` | `#0B1F3A` | Primary dark, header bg, section bg |
| `--navy-mid`  | `#1A3A5C` | Nav, cards, gradients |
| `--teal`      | `#1A7FA0` | Links, buttons, accents |
| `--gold`      | `#C49A2B` | Highlights, awards, headings accent |
| `--ivory`     | `#F7F5F0` | Page background |
| `--slate`     | `#4A5568` | Body text |
| `--white`     | `#FFFFFF` | Cards, forms |

### Typography
- **Display / Headings**: Playfair Display (Google Fonts)
- **Body / UI**: Inter (Google Fonts)

### Key CSS Classes
```css
.btn--primary     /* Gold CTA button */
.btn--teal        /* Teal button */
.btn--dark        /* Navy button */
.btn--outline     /* Transparent bordered */
.btn--sm / --lg   /* Size modifiers */

.card             /* Standard content card */
.person-card      /* People/board member card */
.conf-card        /* Conference date card */

.section          /* Standard section padding */
.section--alt     /* Smoke background */
.section--dark    /* Navy background */

.layout-sidebar   /* 2-col: content + sidebar */
.page-header      /* Inner page hero */
.grid-2/3/4       /* Responsive grids */

.alert--info/warning/success  /* Alert boxes */
.badge--teal/gold/navy/green  /* Inline badges */
.tabs / .tab-btn / .tab-panel /* Tab system */
.accordion                     /* Accordion FAQ */
.timeline                      /* Timeline list */
```

---

## 🔧 Adding New Content

### Add a New Board Member
1. Copy `pages/board-members/amir-karimi.html`
2. Rename to `firstname-lastname.html`
3. Update all personal details: name, role, institution, avatar initials, biography, publications, timeline
4. Add a card to `pages/board-members/index.html`
5. Add a link in `components/header.html` dropdown if needed

### Add a New Division
1. Copy any file from `pages/divisions/`
2. Update title, chair, description, research topics
3. Add a card to `pages/divisions/index.html`
4. Add a menu item to all nav bars in `components/header.html`

### Add a Conference
1. Copy `pages/conferences/annual.html` as a template
2. Update dates, venue, keynote speakers, schedule, fees
3. Add a conf-card to `pages/conferences/index.html`

### Add a Job Posting
1. Copy a `.job-card` block in `pages/jobs/index.html`
2. Fill in: title, organization, type badge, area badge, description, deadline

### Add a Voices / Interview entry
1. Copy a `.voice-card` block in `pages/voices/index.html`
2. Add to the relevant tab panel (interviews / insights / fellow-talks)

---

## 📧 Newsletter & Email Integration

To connect real email automation:

### Option A — Mailchimp
```html
<!-- Replace the newsletter form action: -->
<form action="https://yourlist.us1.list-manage.com/subscribe/post" method="POST">
  <input type="hidden" name="u" value="YOUR_U_VALUE">
  <input type="hidden" name="id" value="YOUR_LIST_ID">
  <input type="email" name="EMAIL" placeholder="your@email.com">
  <button type="submit">Subscribe</button>
</form>
```

### Option B — EmailOctopus / Brevo / ConvertKit
Each has a simple embed form. Replace the `<form>` action and input names per their documentation.

### Option C — Custom Backend (Node.js / Python)
```javascript
// POST /api/newsletter with { email }
// Saves to database + triggers welcome email via SendGrid / Postmark
fetch('/api/newsletter', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email: inputValue })
});
```

---

## 🚀 Deployment Options

### Static Hosting (Recommended)
- **Netlify**: Drag-and-drop the `/isda` folder → instant HTTPS
- **Vercel**: `vercel deploy` from the project root
- **GitHub Pages**: Push to a repo, enable Pages in Settings

### With CMS (for easy content editing)
- **Netlify CMS** (open source): add `admin/` panel, edit content via browser
- **Forestry / Tina CMS**: visual editing for static HTML
- **WordPress**: rebuild as a WordPress theme using the same CSS

### Custom Domain
Point `yourdomain.org` to your hosting provider and update internal links from relative to absolute if needed.

---

## 💳 Membership Payment Integration

To enable real payments on `pages/membership/register.html`:

### Stripe (Recommended)
```html
<script src="https://js.stripe.com/v3/"></script>
<script>
  const stripe = Stripe('pk_live_YOUR_KEY');
  // On form submit, call stripe.redirectToCheckout({ sessionId })
  // Create session server-side via Stripe API
</script>
```

### PayPal
Replace the submit button with a PayPal Smart Button embed.

---

## 📌 Pages Still to Build (Stubs)

These pages are linked but need content filled in (copy the pattern from existing pages):

| File | Content Needed |
|------|---------------|
| `pages/about/mission.html` | Mission statement, values, strategic goals |
| `pages/about/history.html` | Timeline of ISDA history 2010–present |
| `pages/about/bylaws.html`  | Full bylaws document |
| `pages/about/privacy.html` | Privacy policy text |
| `pages/about/terms.html`   | Terms of use text |
| `pages/conferences/call-for-papers.html` | CFP details, tracks, submission link |
| `pages/conferences/workshops.html` | Workshop schedule and registration |
| `pages/conferences/past.html` | Past conferences table |
| `pages/journal/author-instructions.html` | Submission guide, formatting, templates |
| `pages/journal/call-for-papers.html` | Special issues, deadlines |
| `pages/journal/ethics-policy.html` | Publication ethics COPE guidelines |
| `pages/journal/subscriptions.html` | Access options, institutional pricing |
| `pages/membership/index.html` | Membership landing page |
| `pages/membership/login.html` | Member portal login form |
| `pages/membership/renew.html` | Renewal form |
| `pages/education/courses.html` | Full course catalog |
| `pages/education/doctoral.html` | PhD support programs, grants |
| `pages/education/webinars.html` | Webinar schedule + archive |
| `pages/voices/interviews.html` | Full interviews list |
| `pages/voices/insights.html` | Practitioner insights list |
| `pages/voices/fellow-talks.html` | Fellow talks with video embeds |
| `pages/awards/society-awards/index.html` | Society awards overview |
| `pages/awards/journal-awards/index.html` | Journal awards overview |
| `pages/awards/journal-awards/best-paper.html` | Best paper + past winners |
| `pages/divisions/ai-analytics.html` | AI division detail page |
| `pages/divisions/healthcare.html` | Healthcare division detail |
| All other division pages | (same pattern as ai-analytics.html) |
| All remaining board member profiles | Copy amir-karimi.html as template |

> **Tip:** All these pages follow the exact same 3-part template:
> 1. Topbar + Header (copy from any existing page, adjust `../../` path depth)
> 2. `.page-header` + `.section` with content
> 3. Newsletter strip + Footer

---

*Built for the International Society of Decision Analytics (ISDA) — 2026*
