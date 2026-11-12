# ngoun-oudom-portfolio

## Setup

```bash
npm install
npm run dev
```

### Contact form (Formspree)

The "Send Message" form submits to [Formspree](https://formspree.io), so no backend server is needed.
It won't send anything until you connect it to a Formspree endpoint:

1. Create a free account at https://formspree.io and create a new form.
2. Copy the form's ID (the part after `/f/` in its endpoint, e.g. `https://formspree.io/f/abcdwxyz`).
3. In `src/components/Contact.tsx`, replace `YOUR_FORM_ID` in `FORMSPREE_ENDPOINT` with your ID.

Until then, the form shows a "not configured yet" message instead of sending.
