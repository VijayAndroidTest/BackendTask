# BackendTask# Retail Tech Monorepo

## Project Overview
- **Frontend**: Next.js (Deployed to Vercel)
- **Product Service**: NestJS (Deployed to Render - Root: `/product-service`)
- **Order Service**: NestJS (Deployed to Render - Root: `/order-service`)

## Deployment Instructions
1. Push this folder to a single GitHub repository.
2. Connect to **Vercel** and select the `/frontend` directory.
3. Connect to **Render** twice:
   - Once for Product Service (Set Root Directory to `product-service`)
   - Once for Order Service (Set Root Directory to `order-service`)
4. Set Environment Variables in Render/Vercel for the live API URLs.

## Local Development
- Run `npm install` inside each folder.
- Use `npm run start:dev` in each service to run them concurrently.
