# Personal Portfolio Build Tasks
Minimal, aesthetic portfolio using Next.js, Tailwind CSS, and Framer Motion.

---

## 🏁 0. Initialization

### 0.1 - Create project
- Initialize a Next.js app with `app` router support
- Command: `npx create-next-app@latest my-portfolio --app --ts`

### 0.2 - Install Tailwind CSS
- Follow: https://tailwindcss.com/docs/guides/nextjs
- Verify: `bg-red-500` shows up in a test div

### 0.3 - Install Framer Motion
- Install: `npm install framer-motion`
- Test: Animate a test div using `motion.div` with opacity animation

---

## 🎨 1. Layout & Theme

### 1.1 - Set up global layout
- Create `app/layout.tsx` with header, footer, and `children` slot
- Test: All pages share layout

### 1.2 - Add base Tailwind theme
- Set body font, background color, and text color in `globals.css`
- Test: Visually confirm correct font and background

---

## 🧑‍🎓 2. Hero Section

### 2.1 - Create Hero component
- Add `components/Hero.tsx` with name, photo, major
- Test: Component renders statically

### 2.2 - Add Framer Motion to Hero
- Animate `opacity` and `y` with initial and animate props
- Test: Animates on load

### 2.3 - Add phonetic pronunciation
- Show under the name in italic font
- Test: Text appears and is styled correctly

---

## 🔗 3. Links

### 3.1 - Add external links
- Add GitHub, LinkedIn, Resume icons using Heroicons or similar
- Test: Clicks open correct links in new tab

### 3.2 - Animate links on hover
- Add scale-up + color shift on hover via Tailwind + Framer Motion
- Test: Hover over each link animates

---

## 🧠 4. Experience

### 4.1 - Create Experience component
- Show 1 sample experience with:
  - Role
  - Company
  - Dates
  - 2 bullets
- Test: Text renders in proper layout

### 4.2 - Animate on scroll into view
- Use Framer Motion + `whileInView`
- Test: Animation only runs once when scrolled into view

---

## 🚀 5. Projects

### 5.1 - Create Projects component
- Card layout with project title, tech used, and GitHub link
- Test: At least 2 project cards render

### 5.2 - Add hover animation to cards
- Scale and background effect on hover
- Test: Hover over card animates

### 5.3 - Add open-in-new-tab GitHub/demo links
- Ensure `target="_blank"` + `rel="noopener noreferrer"`
- Test: Each link opens separately

---

## 📱 6. Responsive

### 6.1 - Add responsive header
- Navbar collapses into hamburger on mobile
- Test: Shrink screen, see hamburger

### 6.2 - Verify mobile breakpoints
- Ensure hero, experience, and project cards are readable on small screens
- Test: Use dev tools to preview

---

## 🌟 7. Personal Touches

### 7.1 - Add subtle shimmer to name
- Use Tailwind animation or CSS keyframe
- Test: Subtle shimmer effect plays

### 7.2 - Add one fun line in About
- Something personal: favorite tea, quote, etc.
- Test: Text shows up near Hero or in separate About section

---

## 🌐 8. Deployment

### 8.1 - Push to GitHub
- Initialize repo, commit, and push
- Test: View repo online

### 8.2 - Deploy to Vercel
- Connect GitHub repo
- Test: Site live and loads properly

---

## ✅ 9. Final Polish

### 9.1 - Add meta tags
- Add `title`, `description`, and Open Graph tags
- Test: Inspect page source

### 9.2 - Add alt text and aria-labels
- For image(s), links, and interactive elements
- Test: Use screen reader simulator

### 9.3 - Run Lighthouse report
- Fix accessibility, SEO, performance issues
- Test: Score > 90 in each category
