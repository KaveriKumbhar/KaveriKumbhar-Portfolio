# Email Setup Guide for Contact Form

This guide will help you set up Gmail to work with your contact form.

## 📧 Prerequisites
- A Gmail account

## 🔧 Setup Steps

### Step 1: Enable 2-Factor Authentication on Gmail

1. Go to your [Google Account](https://myaccount.google.com/)
2. Click on **Security** in the left sidebar
3. Under "Signing in to Google," click on **2-Step Verification**
4. Follow the prompts to set up 2-Factor Authentication

### Step 2: Generate App Password

1. Once 2FA is enabled, go back to **Security** settings
2. Under "Signing in to Google," click on **App passwords**
3. You may need to sign in again
4. At the bottom, select:
   - **App:** Select "Mail"
   - **Device:** Select "Other (Custom name)" and enter "Portfolio Website"
5. Click **Generate**
6. Google will display a 16-character password
7. **Copy this password** (you won't be able to see it again)

### Step 3: Create Environment Variables File

1. In your project root, create a file named `.env.local`
2. Copy the contents from `.env.local.example`
3. Fill in your actual values:

```env
EMAIL_ADDRESS=your.actual.email@gmail.com
EMAIL_PASSWORD=your-16-character-app-password
```

**Example:**
```env
EMAIL_ADDRESS=kaveri.kumbhar@gmail.com
EMAIL_PASSWORD=abcd efgh ijkl mnop
```

> **Important:** The app password should be 16 characters (may include spaces)

### Step 4: Restart Development Server

After creating `.env.local`, restart your development server:

```bash
# Stop the current server (Ctrl+C)
# Then restart
npm run dev
```

## 🧪 Testing the Contact Form

1. Go to your website's contact page: `http://localhost:3000/contact`
2. Fill out the form with test data
3. Submit the form
4. You should receive:
   - A confirmation email at the address you entered in the form
   - A notification email at your Gmail (with the form details)

## 🔒 Security Notes

- **Never commit** `.env.local` to Git (it's already in `.gitignore`)
- The app password is specific to your portfolio website
- You can revoke it anytime from Google Account settings
- Keep your `.env.local` file secure

## 📝 Customization

You can customize the email templates in `app/api/send/route.js`:
- Line 12-27: Email sent to the user (acknowledgment)
- Line 30-54: Email sent to you (notification)

## 🐛 Troubleshooting

### "Invalid login" error
- Make sure you're using the **App Password**, not your regular Gmail password
- Check that 2FA is enabled on your Google Account

### Emails not sending
- Verify your `EMAIL_ADDRESS` and `EMAIL_PASSWORD` in `.env.local`
- Check that there are no extra spaces or quotes around the values
- Restart your development server after changing `.env.local`

### Gmail blocking sign-in
- Use App Password (not regular password)
- Ensure 2-Step Verification is enabled

## 🚀 Production Deployment

When deploying to production (Vercel, Netlify, etc.):

1. Add environment variables in your hosting platform's dashboard
2. Add `EMAIL_ADDRESS` and `EMAIL_PASSWORD` as environment variables
3. Values should be the same as in your `.env.local`

### Vercel Example:
1. Go to your project dashboard
2. Settings → Environment Variables
3. Add:
   - Name: `EMAIL_ADDRESS`, Value: `your.email@gmail.com`
   - Name: `EMAIL_PASSWORD`, Value: `your-app-password`

---

Need help? Check the [Gmail App Passwords Help](https://support.google.com/accounts/answer/185833)

