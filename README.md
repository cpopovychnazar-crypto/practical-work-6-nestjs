
# Practical Work No. 6
## Input Validation and Request Handling in NestJS

**Student:** Popovych Nazar Serhiiovych  
**Group:** KN-42  
**Variant:** 10 — Pet Supplies

## Project Description

This project demonstrates input validation and request handling in a NestJS application for managing pet supplies.

The application supports creating, retrieving, and updating pet supply products.

## Technologies

- Node.js
- TypeScript
- NestJS
- class-validator
- class-transformer

## Implemented Features

- Global ValidationPipe configuration.
- DTO validation using class-validator.
- Required field validation.
- String and number type validation.
- Positive price validation.
- Minimum package weight validation.
- Optional fields for product updates.
- Rejection of unknown properties.
- HTTP 400 Bad Request responses for invalid data.
- GET, POST and PATCH endpoints.

## Validation Configuration

The global ValidationPipe uses:

- `whitelist: true`
- `forbidNonWhitelisted: true`
- `transform: true`

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | /pet-supplies | Get all products |
| GET | /pet-supplies/:id | Get product by ID |
| POST | /pet-supplies | Create a product |
| PATCH | /pet-supplies/:id | Update a product |

## Installation

```bash
npm install
```

## Run the Application

```bash
npm run start:dev
```

The application runs at:

http://localhost:3000

## Build

```bash
npx nest build
```

## Validation Testing

The following scenarios were tested:

1. Successful product creation.
2. Invalid title type.
3. Negative product price.
4. Invalid package weight type.
5. Empty brand.
6. Unknown property rejection.
7. Successful partial product update.
8. Rejection of negative price during update.

## Conclusion

The project demonstrates input validation and request handling in NestJS using DTOs, class-validator, class-transformer, and the global ValidationPipe.
