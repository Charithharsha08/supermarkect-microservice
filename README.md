---

## 🧾 Project Overview

This project is designed using microservices architecture, incorporating the following key components:

* **Microservices**: Independent services handling specific business functionalities.
* **API Gateway**: A single entry point for client requests, routing them to the appropriate microservices.
* **Eureka Server**: A service registry for service discovery, allowing microservices to find and communicate with each other.

---

## 🧩 Components

### 1. Microservices

Each microservice is a Spring Boot application responsible for a specific domain, such as:

* **Product Service**: Manages product-related operations.
* **Order Service**: Handles order processing and management.
* **Customer Service**: Manages customer information and interactions.

These services are designed to be independently deployable and scalable.

### 2. Eureka Server

The Eureka Server acts as a service registry, enabling service discovery. Microservices register themselves with the Eureka Server, allowing them to locate and communicate with each other without hard-coded addresses.

### 3. API Gateway

The API Gateway serves as the single entry point for all client requests. It routes requests to the appropriate microservices, handles cross-cutting concerns like authentication, logging, and rate limiting, and simplifies the client architecture.

---

## 🚀 Getting Started

To run the application:

1. **Start Eureka Server**: Navigate to the Eureka Server directory and run the Spring Boot application.

2. **Start Microservices**: For each microservice, navigate to its directory and run the Spring Boot application.

3. **Start API Gateway**: Navigate to the API Gateway directory and run the Spring Boot application.

Ensure that each service is configured to register with the Eureka Server and that the API Gateway is set up to route requests to the appropriate services.

---

## 📚 Additional Resources

For a deeper understanding of microservices patterns like circuit breakers, service discovery, and API gateways, consider reading the paper [Circuit Breakers, Discovery, and API Gateways in Microservices](https://arxiv.org/abs/1609.05830).

---

<img width="494" alt="microservices-logical" src="https://github.com/user-attachments/assets/307c8f16-248c-403a-920f-44b82c57657a" />

*Note: This README is a reconstructed overview based on standard microservices architecture practices and the repository's structure. For specific implementation details, refer to the source code within the repository.*
