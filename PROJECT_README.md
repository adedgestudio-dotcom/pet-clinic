# Krishna Pet Speciality Clinic Website

A stunning, modern website for Krishna Pet Speciality Clinic in Chennai, India.

## 🎨 Features

- **Modern Design**: Teal and amber color scheme with smooth animations
- **Fully Responsive**: Mobile-first design that works on all devices
- **Smooth Animations**: Framer Motion animations throughout
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Fast Performance**: Next.js 16 with optimized images and code splitting

## 🛠️ Tech Stack

- **Next.js 16.2.6** (App Router)
- **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** for animations
- **Bun** as package manager

## 📦 Installation

```bash
# Install dependencies
bun install

# Run development server
bun run dev

# Build for production
bun run build

# Start production server
bun run start
```

## 🎯 Sections

1. **Navbar** - Sticky navigation with blur backdrop
2. **Hero** - Full-screen hero with floating cards and pet images
3. **Trust Bar** - Animated statistics (500+ pets treated, 4.5★ rating)
4. **Services** - 6 service cards with hover effects
5. **Why Choose Us** - Split section with image and benefits
6. **Reviews** - Real Google reviews with 5-star ratings
7. **Location** - Google Maps embed with contact info
8. **CTA Banner** - Call-to-action with WhatsApp integration
9. **Footer** - Complete footer with links and social media

## 📱 Contact Information

- **Clinic**: Krishna Pet Speciality Clinic (கிருஷ்ணா பெட் ஸ்பெஷலிட்டி கிளினிக்)
- **Doctor**: Dr. Vairamuthu
- **Phone**: +91 96001 03135
- **Address**: B, 125/1, Karthikeyan Rd, Periyar Nagar West, Perambur, Chennai, Tamil Nadu 600082
- **Hours**: Mon–Sat 10:00 AM – 9:00 PM | Sun 10:30 AM – 1:30 PM
- **Rating**: 4.5 ★ (280+ Google Reviews)

## 🎨 Color Palette

- Primary Teal: `#0D6E6E`
- Accent Amber: `#F4A940`
- Background: `#F9F7F4`
- Text: `#1C1C1E`
- Muted: `#6B7280`

## 📁 Project Structure

```
pet clinic/
├── app/
│   ├── layout.tsx       # Root layout with fonts
│   ├── page.tsx         # Main page component
│   └── globals.css      # Global styles
├── components/
│   ├── Navbar.tsx       # Navigation bar
│   ├── Hero.tsx         # Hero section
│   ├── TrustBar.tsx     # Statistics bar
│   ├── Services.tsx     # Services grid
│   ├── WhyUs.tsx        # About section
│   ├── Reviews.tsx      # Reviews carousel
│   ├── Location.tsx     # Map and contact
│   ├── CTABanner.tsx    # Call-to-action
│   └── Footer.tsx       # Footer
└── public/              # Static assets
```

## 🚀 Deployment

This project is ready to deploy on Vercel, Netlify, or any platform that supports Next.js.

```bash
# Build the project
bun run build

# The output will be in the .next folder
```

## 📝 Notes

- All images use Next.js Image component for optimization
- Animations use Framer Motion with `whileInView` for performance
- Mobile menu with hamburger icon
- WhatsApp integration for easy contact
- Google Maps embedded for location
- Smooth scroll behavior enabled

## 🎉 Credits

Website designed and developed by **Zorivo**

---

© 2025 Krishna Pet Speciality Clinic. All rights reserved.
