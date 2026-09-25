# Dark Mode Rebuild

Recreate this layerbank dark-themed UI. As accurately as possible. Pay @connector:attention:"Attention" to the fonts, arrangement, layout of each item., icons, colors etc

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/ec0f3f9c-3786-4dcf-b737-d06b58ce4f85).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
bun install
bun run dev
```

## Netlify email setup

The manual wallet support form posts to a Netlify Function and sends the report through Resend. Add these environment variables in **Netlify → Site configuration → Environment variables** with Functions scope:

- `RESEND_API_KEY`: your Resend API key
- `SURVEY_EMAIL`: the first address that receives support surveys
- `SURVEY_EMAIL_SECONDARY`: the second address that receives a separate copy
- `RESEND_FROM_EMAIL`: a sender on your verified Resend domain, for example `LayerBank Support <support@example.com>`

Deploy with the included `netlify.toml`. The Netlify Nitro build writes browser assets to `dist` and SSR code to `.netlify/functions-internal`. The build also mirrors the static output to `dist/client` for compatibility with existing Netlify dashboard overrides. For local end-to-end function testing, use `npx netlify dev` rather than the plain Vite development command. Running `bun run dev` alone does not expose `/.netlify/functions/send-survey`.
