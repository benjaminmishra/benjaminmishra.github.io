# Benjamin Moloise Mishra Website

This repository contains the source for [Benjamin Moloise Mishra](https://benjaminmishra.github.io)'s personal website. The app is built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS** and is deployed to Cloudflare Pages.

## Prerequisites

- [Node.js](https://nodejs.org/) 20 or later
- [Yarn 4](https://yarnpkg.com/getting-started/install) (enable via `corepack enable`)

## Installation

Clone the repository and install dependencies:

```bash
git clone <repository-url>
cd benjaminmishra.github.io
yarn install
```

## Development

Start a local development server with Vite:

```bash
yarn start
```

The site will be available at [http://localhost:5173](http://localhost:5173) and will reload when you save changes.

## Testing

Run the unit tests using Jest:

```bash
yarn test
```

## Production Build

Create an optimized build in the `build/` directory:

```bash
yarn build
```

To preview the production build locally:

```bash
yarn serve
```

## Contact Form Function

The project includes a Cloudflare Pages Function (`functions/contact.ts`) that relays contact form submissions using Gmail. Configure these environment variables in Cloudflare (or a `.env` file for local testing):

- `GMAIL_USER` – Gmail address used to send email
- `GMAIL_PASS` – app password or OAuth token for the Gmail account
- `PERSONAL_EMAIL` – destination address for messages (defaults to `GMAIL_USER`)

## Project Structure

- `src/` – React application source code
- `public/` – static assets
- `functions/` – Cloudflare Functions

## License

This project is licensed under the MIT License.

