# Portfolio Setup Checklist ✅

Complete these steps to get your portfolio fully functional:

## 🎨 **1. Add Your Profile Photo**
- [ ] Add your photo as `/public/kaveri-photo.jpeg` (or update the filename in code)
- [ ] Recommended: Square image, 800x800px or larger
- [ ] See `/public/PHOTO_INSTRUCTIONS.md` for details

## 📧 **2. Setup Email for Contact Form**
- [ ] Enable 2-Factor Authentication on your Gmail account
- [ ] Generate a Gmail App Password
- [ ] Create `.env.local` file in project root
- [ ] Add your email credentials to `.env.local`:
  ```env
  EMAIL_ADDRESS=your.email@gmail.com
  EMAIL_PASSWORD=your-16-character-app-password
  ```
- [ ] Restart the development server
- [ ] Test the contact form
- [ ] **See `EMAIL_SETUP.md` for detailed instructions**

## 📄 **3. Add Your CV/Resume**
- [ ] Add your CV as `/public/cv.pdf`
- [ ] The download button in navbar will automatically work

## ✏️ **4. Update Personal Information**

### In `components/HeroSection.js`:
- [ ] Update your name (line 33)
- [ ] Update your job title (line 38)

### In `app/about/page.js`:
- [ ] Update your bio/description
- [ ] Update skills in the skills array
- [ ] Update stats (projects, clients, experience)

### In `components/Navbar.js`:
- [ ] Replace "logo" text with your branding (line 24)

### In `components/Footer.js`:
- [ ] Add your email (line 71)
- [ ] Add your phone number (line 72)
- [ ] Add your location (line 73)
- [ ] Update social media links (lines 8-11)

### In `app/contact/page.js`:
- [ ] Update contact information (lines 64-76)
- [ ] Update social media links (lines 79-83)

## 🎨 **5. Update Portfolio Projects**

### In `components/Portfolio.js`:
- [ ] Update project titles, descriptions, and tags
- [ ] Add project images to `/public` folder
- [ ] Update live demo and GitHub links

### In `app/portfolio/page.js`:
- [ ] Update all 9 projects with your actual projects
- [ ] Add project images
- [ ] Update project categories, tags, and links

## 🌐 **6. Update Metadata**

### In `app/layout.js`:
- [ ] Update site title
- [ ] Update site description

### In `app/about/page.js`:
- [ ] Update page metadata (title, description)

## 🎯 **7. Customization (Optional)**

- [ ] Update color scheme if desired (see README.md)
- [ ] Add your own logo/favicon
- [ ] Update tech stack in `components/TechStack.js`
- [ ] Customize service offerings in `components/Services.js`

## 🚀 **8. Before Deploying**

- [ ] Test all pages locally
- [ ] Test contact form
- [ ] Test all links
- [ ] Test responsive design on mobile
- [ ] Update README.md with your information
- [ ] Remove example/placeholder content
- [ ] Add environment variables to hosting platform (Vercel/Netlify)

## 📋 **Quick Start Commands**

```bash
# Install dependencies (if not already done)
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

---

## 🆘 Need Help?

- **Email Setup:** See `EMAIL_SETUP.md`
- **Photo Setup:** See `/public/PHOTO_INSTRUCTIONS.md`
- **General Info:** See `README.md`

---

**Current Status:**
- ✅ Dark mode theme applied
- ✅ All pages created (Home, About, Portfolio, Contact)
- ✅ Contact form with email functionality ready
- ✅ Photo integration ready
- ⏳ Waiting for your content and credentials

