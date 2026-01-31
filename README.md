# Next.js Blog Platform with Static Site Generation

A production-ready, SEO-optimized blog platform built with **Next.js** using **Static Site Generation (SSG)** and **MDX**.
This project demonstrates modern frontend architecture, content-driven site performance, and containerized deployment using Docker.

---

## 🚀 Features

* **Static Site Generation (SSG)** for all pages
* **MDX-based content system** (local `.mdx` files)
* **Dynamic routing** for blog posts and pagination
* **SEO optimization** (meta tags, Open Graph, Twitter cards)
* **Sitemap & RSS feed** generated at build time
* **Optimized images** using `next/image`
* **Syntax-highlighted code blocks**
* **Dark / Light theme toggle**
* **Custom 404 page**
* **Fully containerized with Docker & Docker Compose**
* **Test-friendly UI** using strict `data-testid` attributes

---

## 🧱 Tech Stack

* **Framework:** Next.js (App Router)
* **Language:** JavaScript (No TypeScript)
* **Styling:** Tailwind CSS
* **Content:** MDX + Gray Matter
* **SEO:** Next.js Metadata API
* **DevOps:** Docker, Docker Compose

---

## 📁 Project Structure

```
├── app/
│   ├── page.js                 # Homepage (SSG)
│   ├── blog/                   # Blog listing + pagination
│   ├── posts/[slug]/           # Individual blog posts (SSG)
│   ├── sitemap.js              # Sitemap generation
│   ├── feed.xml/route.js       # RSS feed generation
│   └── not-found.js            # Custom 404 page
│
├── components/
│   ├── PostCard.js
│   ├── Pagination.js
│   └── ThemeToggle.js
│
├── lib/
│   ├── posts.js                # MDX loading logic
│   └── utils.js                # Reading time helpers
│
├── posts/                      # MDX blog content
│   └── *.mdx
│
├── Dockerfile
├── docker-compose.yml
├── .env.example
└── README.md
```

---

## 📝 Content Management (MDX)

* Blog posts are stored locally in the `/posts` directory
* Each `.mdx` file contains frontmatter:

```mdx
---
title: "Understanding Static Site Generation"
date: "2024-01-10"
author: "Manikanta"
tags: ["Next.js", "SSG"]
excerpt: "Learn how static site generation improves performance and SEO."
---
```

* MDX allows JSX inside markdown for powerful, component-driven content

---

## 🧪 Testing & Data Attributes

All required elements include **strict `data-testid` attributes**, such as:

* `post-list`
* `post-card-<slug>`
* `read-more-<slug>`
* `blog-post`
* `post-title`
* `post-content`
* `reading-time`
* `code-block`
* `optimized-image`
* `theme-toggle`
* `not-found-message`

This ensures automated verification and easy DOM inspection.

---

## 🔍 SEO

Every page includes:

* Dynamic `<title>` and `<meta description>`
* Open Graph tags
* Twitter Card metadata

Generated at build time using content frontmatter.

---

## 🗺 Sitemap & RSS

* **Sitemap:** `/sitemap.xml`
* **RSS Feed:** `/feed.xml`

Both are generated **during build time** and include:

* Homepage
* Blog listing pages
* Individual blog posts

---

## 🐳 Docker Setup (Recommended)

### Prerequisites

* Docker
* Docker Compose

### Run with Docker

```bash
docker-compose up --build
```

Then open:

```
http://localhost:3000
```

Healthcheck is included to verify the app is running.

---

## 💻 Run Locally (Without Docker)

```bash
npm install
npm run build
npm start
```

Open:

```
http://localhost:3000
```

> ⚠️ `npm run dev` is for development only and not used for evaluation.

---

## 🌗 Theme Toggle

* Switch between light and dark mode
* Mode is reflected via a class on the `<html>` element
* Toggle button includes `data-testid="theme-toggle"`

---

## ❌ 404 Page

* Custom Not Found page
* Returns HTTP 404
* Displays a user-friendly message

---

## 📦 Environment Variables

See `.env.example`:

```env
PORT=3000
BASE_URL=http://localhost:3000
```

No secrets are included.

---

## ✅ Evaluation Checklist

* [x] Static Site Generation
* [x] MDX content rendering
* [x] Pagination (10 posts per page)
* [x] SEO meta tags
* [x] Sitemap & RSS
* [x] Optimized images
* [x] Theme toggle
* [x] Custom 404
* [x] Dockerized deployment
* [x] Strict `data-testid` usage

---

## 👤 Author

**Manikanta Venkateswarlu Oruganti**