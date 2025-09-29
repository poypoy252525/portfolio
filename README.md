# Portfolio Website

This is my personal portfolio website built with React, TypeScript, and Vite. It showcases my projects, skills, and contact information.

## Features

- Modern UI with smooth animations
- Responsive design
- Project showcase
- Skills section
- Contact form
- Dark/light mode toggle

## Contact Form Setup

To enable the contact form to send emails, you need to set up EmailJS:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Connect your email service (Gmail, Outlook, etc.) - this is where you'll receive messages
3. Create an email template with the following variables:
   - `from_name` - Name of the person contacting you (comes from form)
   - `from_email` - Email of the person contacting you (comes from form)
   - `subject` - Subject of the message (comes from form)
   - `message` - Content of the message (comes from form)
4. In your EmailJS template, configure the "To" field to be your email address (the one you connected in step 2)
5. Copy your EmailJS credentials:
   - Public Key
   - Service ID
   - Template ID
6. Create a `.env` file in the root of your project with these values:

   ```env
   VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
   VITE_EMAILJS_SERVICE_ID=your_service_id_here
   VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
   ```

7. The contact form will now send emails when users submit the form

**Important Note:** When users fill out the contact form, their information (name, email, message) will be sent to YOUR email address. The user doesn't need to know your email address - it's configured in your EmailJS template. The email will appear to come from the person contacting you, but will be delivered to your inbox.

## Development

To run the project locally:

```bash
npm install
npm run dev
```

## Building

To build the project for production:

```bash
npm run build
```

## Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- shadcn/ui
- EmailJS

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default tseslint.config([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```
