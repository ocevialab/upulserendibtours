# Environment Variable Setup

## Setting Your Domain URL

To complete the SEO setup, you need to set your actual domain URL as an environment variable.

### Step 1: Create `.env.local` file

Create a file named `.env.local` in the root of your project with the following content:

```env
NEXT_PUBLIC_BASE_URL=https://www.upulserendibtours.com
```

**Your domain is set to: `https://www.upulserendibtours.com`**

### Step 2: Restart Your Development Server

After creating or updating `.env.local`, restart your Next.js development server:

```bash
npm run dev
```

### Step 3: Update Production Environment

For production deployment, set the environment variable in your hosting platform:

#### Vercel
1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add `NEXT_PUBLIC_BASE_URL` with your production domain

#### Netlify
1. Go to Site settings
2. Navigate to "Environment variables"
3. Add `NEXT_PUBLIC_BASE_URL` with your production domain

#### Other Platforms
Set the `NEXT_PUBLIC_BASE_URL` environment variable in your platform's environment variable settings.

### Important Notes

- The `.env.local` file is already in `.gitignore` and won't be committed to version control
- Never commit actual domain URLs or sensitive information
- The environment variable is used in:
  - `app/layout.tsx` - Root metadata
  - `app/sitemap.ts` - Sitemap generation
  - `app/robots.ts` - Robots.txt generation
  - All page metadata files
  - Structured data schemas

### Verification

After setting the environment variable, verify it's working:

1. Check that your sitemap uses the correct domain: `https://www.upulserendibtours.com/sitemap.xml`
2. Check robots.txt: `https://www.upulserendibtours.com/robots.txt`
3. View page source and verify Open Graph tags use your domain
4. Test with Google Rich Results Test tool

### Current Status

All files are now configured to use `https://www.upulserendibtours.com` as the default domain. You can still override this by setting the `NEXT_PUBLIC_BASE_URL` environment variable if needed.

