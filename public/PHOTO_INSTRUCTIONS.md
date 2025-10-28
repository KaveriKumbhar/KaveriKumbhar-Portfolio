# Add Your Profile Photo

To display your photo on the website, please add your profile picture to this folder.

## Instructions:

1. **Prepare your photo:**
   - Use a high-quality, professional photo
   - Square aspect ratio works best (e.g., 800x800px or 1000x1000px)
   - Recommended formats: JPG, PNG, or WebP
   - Keep file size under 500KB for best performance

2. **Rename and save:**
   - Rename your photo to exactly: `profile.jpg`
   - Save it in the `/public` folder (this folder)

3. **File location:**
   ```
   /public/profile.jpg
   ```

4. **That's it!**
   - Your photo will automatically appear on:
     - Home page (Hero section)
     - About page (Profile section)

## Tips for best results:

- Use a well-lit, clear photo
- Professional headshot or portrait works best
- Make sure your face is clearly visible
- Avoid busy backgrounds
- Consider using a photo editor to adjust brightness/contrast if needed

---

**Current setup:** The website is looking for `/public/profile.jpg`

If you want to use a different filename or format (like `profile.png`), you'll need to update:
- `components/HeroSection.js` (line 15)
- `app/about/page.js` (line 52)

