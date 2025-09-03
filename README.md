[![DXP Frontend Starter – Open Self Service](https://raw.githubusercontent.com/o2sdev/openselfservice/420de04d09984a38122cd70dd666ea80e5493e29/apps/docs/static/img/dxp-gh-cover.png)](https://www.openselfservice.com/dxp)

# DXP Frontend Starter Kit

**Kick-start your composable web platform with an open-source frontend starter.**

This project provides a foundation for building digital experience platforms (DXPs) with **Next.js**, a **headless CMS**, and our **API integration layer**.  
Built on the Open Self Service (O2S) framework, it allows you to evolve from simple CMS-based websites into full-scale composable solutions by customizing the starter and integrating your chosen APIs.

---

## 🚀 What’s Included

- **Next.js Frontend** – Fast, extendable, with dynamic routing, SEO optimizations and full CMS control.
- **CMS Integration** – Preconfigured integration with [Strapi](https://strapi.io), including example content models and layout configuration.
- **Other integrations** available in O2S - [Integrations](https://www.openselfservice.com/docs/integrations)
- **UI Components** – Pre-styled, accessible components using `shadcn/ui` and Tailwind CSS.
- **API Harmonization Layer** – Optional backend service for integrating additional systems like CRM, commerce, PIM, DAM, ERP.
- **Monorepo Architecture** – Built with Turborepo and TypeScript packages for maintainability and performance.
- **Fully Open-Source** – Use, customize, extend however you want.

---

## 📦 Project Structure

```txt
/apps
  /frontend             # Next.js frontend
  /api-harmonization    # API Harmonization Server (NestJS)

/packages
  /ui                   # Reusable UI components (shadcn/ui, Tailwind)
```

More: [Project structure documentation](https://www.openselfservice.com/docs/getting-started/project-structure)

---

## 📖 Documentation

📚 **See full documentation:**  
👉 https://www.openselfservice.com/docs/app-starters/dxp/overview

Includes guides for installation, configuration, content modeling, and extensibility.

---

## 🛠️ Getting Started

To create a new project based on the starter:

```bash
npx create-o2s-dxp-app my-project
cd my-project
npm run dev
```

You can also run individual apps manually:

```bash
cd apps/frontend && npm run dev           # Start the Next.js frontend
cd apps/api-harmonization && npm run dev # (Optional) Start the API server
```

---
## 🖥️ Demo application

**Please remember that content presented on the demo is examplary - it can be fully managed from the integrated CMS, all blocks and components, as well as the UI theme can be customized.**

[![O2S Demo](https://raw.githubusercontent.com/o2sdev/openselfservice/420de04d09984a38122cd70dd666ea80e5493e29/apps/docs/static/img/dxp-gh-demo.png)](https://demo-dxp.openselfservice.com)

---

## 🔌 Integrations

This starter supports CMS, CRM, commerce and other integrations.  
For the full list and setup instructions, see:

👉 [Integrations documentation](https://www.openselfservice.com/docs/integrations)

---

## 🤝 Contributing

We welcome contributions!  
See our [Contribution Guide](CONTRIBUTING.md) to get started.

---

## 📬 Contact

- Email: [contact@openselfservice.com](mailto:contact@openselfservice.com)
- Website: [openselfservice.com](https://www.openselfservice.com)
- Discord: [Join our community](https://discord.gg/4R568nZgsT)
- GitHub Discussions: [Talk to us](https://github.com/o2sdev/openselfservice/discussions)
- LinkedIn: [/company/open-self-service/](https://www.linkedin.com/company/open-self-service/)
- Twitter/X: [@openselfservice](https://twitter.com/openselfservice)

---

## 📜 License

DXP Starter Kit is released under the **MIT License**.

---

> Built with ❤️ by [Hycom](https://hycom.digital)
