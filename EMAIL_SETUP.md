# Email Setup Instructions

The contact form now uses **Resend** (API-based email service) instead of SMTP. This avoids firewall/port blocking issues and is more reliable.

## Resend Setup (Recommended - Current Method)

### Steps:

1. **Sign up for Resend** (Free tier: 3,000 emails/month):
   - Go to https://resend.com
   - Sign up for a free account
   - Verify your email address

2. **Get your API Key**:
   - After logging in, go to https://resend.com/api-keys
   - Click "Create API Key"
   - Give it a name (e.g., "Pranaras Academy Website")
   - Copy the API key (starts with `re_`)

3. **Update `.env.local`**:
   - Open or create `.env.local` in the root directory
   - Add your Resend API key:
   ```env
   RESEND_API_KEY=re_your_api_key_here
   ```

4. **Restart your development server**:
   - Stop your current server (Ctrl+C)
   - Run `npm run dev` again

### Important Notes:

- **From Email**: Currently using `onboarding@resend.dev` (Resend's default)
- **To Email**: All emails are sent to **kpherald7@gmail.com**
- **Domain Verification** (Optional): To use your own domain (e.g., `noreply@pranarasacademy.com`):
  - Go to https://resend.com/domains
  - Add and verify your domain
  - Update the `from` field in `app/api/contact/route.ts`

### Testing:

After setting up, test the contact form. It should work immediately without firewall issues!

---

## Alternative: Gmail SMTP Setup (If Resend doesn't work)

If you prefer to use Gmail SMTP (may have firewall issues):

1. Create a `.env.local` file in the root directory.

2. Add the following environment variables:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

### Gmail Setup:

1. **Enable 2-Step Verification** on your Google account:
   - Go to https://myaccount.google.com/security
   - Enable 2-Step Verification if not already enabled

2. **Generate an App Password**:
   - Go to https://myaccount.google.com/apppasswords
   - Select "Mail" and "Other (Custom name)"
   - Enter "Pranaras Academy Contact Form" as the name
   - Click "Generate"
   - Copy the 16-character password (this is your `SMTP_PASS`)

3. **Update `.env.local`**:
   - Replace `your-email@gmail.com` with your Gmail address
   - Replace `your-app-password` with the generated app password (remove spaces)

### Important Notes:

- Never commit `.env.local` to git (it's already in .gitignore)
- The app password is different from your regular Gmail password
- Emails will be sent to: **kpherald7@gmail.com**
- Restart your development server after creating/updating `.env.local`
- If you get connection timeout errors, use Resend instead (see above)
