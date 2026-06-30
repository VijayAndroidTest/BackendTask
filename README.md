# BackendTask – Microservice-based Retail Tech Application

## Project Overview

This project demonstrates a microservice-based application using **NestJS**. It consists of two independent backend services:

* Product Service
* Order Service

Frontend is available in a separate GitHub repository:
https://github.com/VijayAndroidTest/FrontEndTask

---

## Technologies Used

* NestJS
* TypeScript
* In-Memory Data Storage
* REST API
* Render (Backend Deployment)

Important Note :
This project uses in-memory data storage for both Product Service and Order Service. If either Render service restarts or is redeployed, previously created products and orders will be cleared. To test the Order Service, first create a product using the Product Service API, then use the returned productId when creating an order.
---

## Project Structure

```
BackendTask/
│
├── product-service/
├── order-service/
└── README.md
```

**Frontend is available in a separate repository.**

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

## Backend Deployment

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

## Frontend

The frontend is maintained in a separate repository.

Run it locally using:

```bash
npm install
npm run dev
```

Runs on:

```
http://localhost:3000
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
* Order Service communicates with Product Service using HTTP REST APIs.
* The frontend is developed separately using Next.js and consumes the deployed backend APIs.
