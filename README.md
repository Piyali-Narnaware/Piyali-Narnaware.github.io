# Piyali Narnaware — Customer & Commercial Analyst

Static portfolio for GitHub Pages. No framework, package install or build service required.

## Pages

- `index.html`: business positioning, professional experience, four featured cases, capabilities, additional work, education and contact.
- `case-studies/retail.html`: Power BI retail analysis and metric definitions.
- `case-studies/customer-reviews.html`: review analysis and implemented prototype scope.
- `case-studies/torrent-gas.html`: professional commercial analytics account.
- `case-studies/loan-default.html`: academic risk modelling and evaluation trade-offs.

## Run locally

From this directory, run `python -m http.server 8000`, then open `http://localhost:8000`. The HTML can also be opened directly; serving over HTTP gives a more representative download check.

## Deploy

Copy this directory's contents into the root of `Piyali-Narnaware/Piyali-Narnaware.github.io`. Keep the existing GitHub Pages configuration. If configuring Pages for the first time, serve the repository's main branch from `/ (root)`. `.nojekyll` ensures the static assets are served as supplied. Merging the upgrade PR will update the live site if Pages deploys from main.

## Maintain

Content is static semantic HTML. `assets/base.css` preserves and adapts the original portfolio tokens, navigation, KPI/card and filter foundations. `assets/site.css` adds the responsive editorial layouts. `assets/site.js` progressively enhances theme, mobile navigation and secondary-project filters. Core links and content work without JavaScript. No analytics, third-party scripts or externally hosted fonts are required.

Images are compressed local copies of the original project screenshots. Full-size image links use native browser zoom. `assets/Piyali-Narnaware-CV.pdf` is a two-page, evidence-aligned CV derived from the supplied career documents. It preserves official employment titles and uses the same project metric definitions as the site. Original source documents have not been altered or uploaded.

## Content boundaries

Employment outcomes are approximate, candidate-reported figures. Project observations and academic model results are labelled separately. The retail dataset's original provenance remains unconfirmed. Review counts reflect the current CSV files (245 reviews, 49 reviewed products and 50 catalogue products). Loan metrics use the README's reported 97.25% recall rather than claiming independent reproduction. Certifications without confirmed completion are omitted. Full verification and editorial handoff documents are supplied separately from the public site.

## Accessibility and browser support

Responsive layouts, native links and buttons, skip link, keyboard focus, reduced-motion rules, theme controls, semantic headings, table captions/headers and image alt text. Mobile navigation supports Escape. All case-study text is present in HTML. Target current Chrome, Edge, Firefox and Safari; browser checks performed in Chromium are recorded in the separate handoff.
