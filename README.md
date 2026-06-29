# BackendTask – Microservice-based Retail Tech Application

## Project Overview

This project demonstrates a simple microservice-based application using **NestJS** and a **Next.js** frontend.

### Technologies Used

* NestJS
* Next.js
* TypeScript
* Material UI
* React Hook Form
* MongoDB
* Render (Backend Deployment)
* Vercel (Frontend Deployment)

---

## Project Structure

```
BackendTask/
│
├── product-service/
├── order-service/
└── README.md
```

Frontend is available in a separate repository.

---

## Features

### Product Service

* Create Product
* Get All Products
* Get Product by ID
* Prevent duplicate product names
* REST APIs

### Order Service

* Create Order
* Get All Orders
* Get Order by ID
* Update Order
* Delete Order
* Retrieves product information from Product Service using HTTP REST

---

## Deployment

### Product Service

https://backendtask-91bz.onrender.com

### Order Service

https://backendtaskorder.onrender.com

---

## Running Locally

### Product Service

```bash
cd product-service
npm install
npm run start:dev
```

Runs on:

```
http://localhost:4001
```

### Order Service

```bash
cd order-service
npm install
npm run start:dev
```

Runs on:

```
http://localhost:4002
```

---

## API Endpoints

### Product Service

```
POST   /products
GET    /products
GET    /products/:id
```

### Order Service

```
POST   /order
GET    /order
GET    /order/:id
PUT    /order/:id
DELETE /order/:id
GET    /order/available-products
```

---

## Notes

* Product Service and Order Service are deployed independently on Render.
* Order Service communicates with Product Service using REST APIs.
* Frontend is developed separately using Next.js and consumes the deployed backend APIs.
