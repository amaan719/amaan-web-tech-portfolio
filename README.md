# Amaan Web Tech — Portfolio Website

React + Vite se bana company portfolio. Theme: "blueprint / drafting table" —
deep blue + grid lines + amber highlights, kyunki ye company apps, websites,
aur (future) games/3D "build" karti hai.

## Run karne ke liye (apne computer pe, internet on rakh kar)

```bash
npm install
npm run dev
```

Browser me `http://localhost:5173` khol lo.

Production build banane ke liye:
```bash
npm run build
```
Output `dist/` folder me milega — isi ko kisi bhi hosting (Vercel, Netlify, GitHub Pages) pe upload kar sakte ho.

## Folder structure

```
amaan-web-tech/
  src/
    components/
      Navbar.jsx     -> top nav bar
      Hero.jsx        -> homepage banner
      Services.jsx    -> App/Website (Live) + Game/3D (In Development)
      About.jsx       -> founder note + company "spec sheet"
      Portfolio.jsx   -> project gallery (abhi placeholder hai)
      Contact.jsx     -> contact form + social links
      Footer.jsx      -> bottom bar
    App.jsx           -> sab sections ko jodta hai
    index.css         -> colors, fonts, design system
  index.html
  package.json
```

## Customize kaise karein

1. **Apne real projects daalo:** `src/components/Portfolio.jsx` me `PROJECTS`
   array hai — title, tag, desc, aur image path daal do. Images
   `public/projects/` folder me daal kar path do, e.g. `/projects/app1.jpg`.

2. **Contact form ko actually email bhejne layak banao:** abhi form
   `mailto:` link kholta hai (kyunki static site me backend nahi hota).
   Real email bhejne ke liye [Formspree](https://formspree.io) ya
   [EmailJS](https://www.emailjs.com) use karo — dono free tier dete hain,
   aur `Contact.jsx` ke `handleSubmit` function me bas unka code daalna hoga.

3. **Social links update karo:** `src/components/Contact.jsx` me `SOCIALS`
   array me apne real Instagram/LinkedIn/GitHub links daal do.

4. **Email address change karo:** `Contact.jsx` me `hello@amaanwebtech.com`
   ko apne real email se replace kar do (2 jagah hai — `mailto:` link aur
   text dono me).

5. **Colors/fonts change karne ho:** `src/index.css` ke top me `:root`
   variables hain (`--blue-deep`, `--amber`, etc.) — yahi se poori site ka
   color theme control hota hai.

## Deploy kahan karein (free)

- **Vercel** — `vercel.com`, GitHub repo connect karo, auto-deploy ho jayega.
- **Netlify** — `netlify.com`, drag-drop `dist/` folder ya GitHub connect karo.
