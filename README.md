# Views concept prototype — Document type classification

Interactive prototype for the **Document type classification & Views** concept. It combines:

- **Layout:** Proposals-style main content (from [Figma 1561:19560](https://www.figma.com/design/ev8QrglqV7b7BNYKSBUUrs/Views-concept-exploration?node-id=1561-19560)) with title, Documents/Catalog tabs, hero card, and document table.
- **Navigation:** Expanded left sidebar with all Views (from [Figma 1878:22168](https://www.figma.com/design/ev8QrglqV7b7BNYKSBUUrs/Views-concept-exploration?node-id=1878-22168)): Contracts, Service agreements, Proposals, Quotes, NDAs, Invoices, Collaterals.
- **Filters:** Filter design from [Figma 445:17091](https://www.figma.com/design/ev8QrglqV7b7BNYKSBUUrs/Views-concept-exploration?node-id=445-17091). Click **Filters** (top right of the tabs row) to show filter chips. Filters **per view** match the spreadsheet (View × column D): Contracts, Service agreements, Proposals, Quotes, NDAs, Invoices, Forms; Collaterals has no filters.

## How to run locally

Open in a browser:

```bash
open prototype/views-prototype.html
```

Or serve the folder (e.g. `npx serve prototype`) and open the URL.

## Publishing (share with team)

**Recommended (reusable):** Use **Vercel** or **GitHub Pages** so every push can auto-deploy. Full setup: **[Deploying prototypes (Vercel & GitHub Pages)](../docs/DEPLOY_PROTOTYPES.md)**.

**One-off share:**
- **[Netlify Drop](https://app.netlify.com/drop)** — drag the `prototype` folder to get a link.
- **Surge** — `npx surge prototype/` (sign up when prompted).

## What you can try

1. **Switch Views** — Click each view in the left nav (Contracts, Service agreements, Proposals, Quotes, NDAs, Invoices, Forms, Collaterals). Title, primary button, hero copy, and filter chips update per view.
2. **Lifecycle tabs** — For **Contracts** and **Service agreements**, lifecycle tabs appear (All, Original, Amendment, Renewal, Termination) as in the proposal.
3. **Filters** — Click **Filters** next to the Documents/Catalog tabs to show or hide the filter chips. The chips are defined per view in `VIEW_CONFIG` (see below).

## Filters per view (spreadsheet column D)

The prototype’s `VIEW_CONFIG` in `views-prototype.html` is aligned with the spreadsheet:

| View | Filters |
|------|--------|
| Contracts | Date, Status, Completion date, Expiry / renewal date |
| Service agreements | Date, Status, Completion date, Expiry / renewal date |
| Proposals | Date, Status, Owner, Counterparty, Contract value |
| Quotes | Date, Status, Owner, Counterparty, Contract value |
| NDAs | Date, Status, Counterparty |
| Invoices | Date, Status, Payment status, Due date, Date sent |
| Forms | Status |
| Collaterals | (none) |

## Design system

- **Tokens:** CSS variables follow PandaDoc/Figmas tokens (`--primary-main`, `--secondary-dark`, `--background-lighter`, etc.).
- **Typography:** Graphik LC Web.
- **References:** [Document_Type_Classification_and_Views_Proposal.md](../docs/Document_Type_Classification_and_Views_Proposal.md), [Doc_Type_Classification_Views_RESTRUCTURED.md](../docs/Doc_Type_Classification_Views_RESTRUCTURED.md).
