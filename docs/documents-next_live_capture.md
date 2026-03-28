# Live capture: Documents (`/a/#/documents-next`)

Source: Chrome DevTools MCP on logged-in session (`tab=team`). Use this to align the CLM prototype with production **behavior** and **measured styles**.

## Page & URL

- **Route:** `https://app.pandadoc.com/a/#/documents-next?tab=team`
- **Title region:** `heading "All documents" level="2"`

## Top bar (global)

| A11y | Role / notes |
|------|----------------|
| `button "Search or ask anything"` | Global search / command entry |
| Icon buttons (no visible name in tree) | Likely notifications / help — verify in UI |
| `button "AB" … haspopup="menu"` | Account / profile menu |

## Primary actions (documents header)

| Control | Behavior |
|---------|----------|
| `button "New folder"` | Secondary action beside title |
| `button "Document"` + `button` … `haspopup="menu"` | **Split button:** primary label + chevron opens menu |
| Document menu (opened) | Static text items: **Bulk import**, **Bulk send** |

## Lifecycle / scope tabs

`tablist` pattern (selectable; one **selected**):

- Recent  
- **All documents** (selected in capture)  
- Created by me  
- Imported (badge **NEW**)  
- Archived  
- Upcoming renewals  
- **More** (overflow — shows **"2"** = two extra tabs in overflow)

## Filters row (toolbar)

| Control | Notes |
|---------|--------|
| `button "Filters"` | **Toggles visibility of the filter chip row** (chip buttons removed from tree when off; same idea as prototype `filtersVisible`) |
| `button` (icon only) | e.g. layout / density — confirm visually |
| `button "Ask AI"` | AI entry point beside filters |

**Optional strip below:** smart-summary promo — `StaticText` + `button "View AI Summary"` + dismiss `button`.

## Filter chips (when visible)

Chips are **`button`**s with labels:

Date · Status · Owner · Recipients · Tags · Amount · Currency · Company · **More**

### Measured styles (computed)

**`Filters` button**

- `font-size: 14px`
- `height: 32px`
- `padding: 0 12px`
- `color: rgb(71, 71, 71)` (`#474747`)
- `background-color: rgba(118, 118, 118, 0.16)`

**`Date` chip** (representative chip)

- `font-size: 14px`
- `height: 32px`
- `padding: 0 12px`
- `border-radius: 4px`
- `color: rgb(71, 71, 71)`
- `background-color: rgba(118, 118, 118, 0.08)` — **lighter** than the Filters control

**`Document` primary (left segment of split)**

- `font-size: 14px`; `font-weight: 600`
- `height: 40px` — **taller than** 32px chips / Filters
- `padding: 0 16px`
- `border-radius: 4px 0 0 4px` — only left corners (split with chevron)
- `color: white`
- `background-color: rgb(36, 133, 103)` — **#248567 family** (primary green)

## Status filter popover (opened from **Status** chip)

Popover content (checkbox list + footer):

- **Select all** (`checkbox` + label)
- Draft · For approval · Sent · Viewed · Suggest edits · Completed · Expired · Waiting for payment · Paid · Declined  
- **`button "Cancel"`** · **`button "Apply"`**

Use this list to align `StatusFilter` / status tokens in the prototype.

## Table

- **Columns:** checkbox · Name · Status · Amount · Modified · (column menu `haspopup="menu"` on header)
- **Rows:** Each row is a large `button` containing:
  - `link` — either `folderId=…` (folder) or `/documents/{id}` (document)
  - Status / amount / date content
  - Trailing **row overflow** menu (`haspopup="menu"`)

## Sidebar (same app shell)

Visible items include: Create new…, Home, Documents, Templates (+ My templates, Template gallery), Contacts, Payments, Smart Forms BETA, Rooms, Catalog, Notary, Forms, Automations, Workflows BETA (+ sub-items), Reports, Dev Center, Less, Extensions, Invite users, Settings, Open AI Chat.

## Prototype alignment checklist

1. **Filters** — Toggle **chip row** visibility (already modeled); match **Filters** vs chip **background** contrast (`0.16` vs `0.08` on grey).
2. **Primary CTA** — Product uses **40px** green split **Document** + menu; prototype uses shorter buttons in places — consider **h-10** (`40px`) for main create.
3. **Chips** — **32px** tall, **4px** radius, **14px** label, grey fill hierarchy.
4. **Tabs** — Match names where relevant (All documents, Imported with NEW, More overflow).
5. **Status filter** — Multi-select checklist + **Cancel** / **Apply** (not only instant apply).
6. **Document menu** — Add **Bulk import** / **Bulk send** (or placeholders) next to primary **Document** if parity matters.

---

*Captured via MCP: `take_snapshot`, `click`, `evaluate_script`. Re-run after UI changes.*
