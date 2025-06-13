# RandomCommerce - E-commerce Application

RandomCommerce is a full-stack e-commerce application built with Spring Boot and React that demonstrates CRUD operations, file uploads, and modern web development practices. This project was developed as a learning exercise to understand Spring Boot fundamentals, REST APIs, and full-stack integration.

![RandomCommerce Homepage](https://github.com/Navadeep-Reddy/ProjectScreenshots-/blob/main/RandomCommerce/Home.png?raw=true)
<p align="center">
  Modern e-commerce interface with product catalog
</p>

![Product Description](https://github.com/Navadeep-Reddy/ProjectScreenshots-/blob/main/RandomCommerce/Product.png?raw=true)
<p align="center">
  Product description with update functionality
</p>

![Product Management](https://github.com/Navadeep-Reddy/ProjectScreenshots-/blob/main/RandomCommerce/AddProduct.png?raw=true)
<p align="center">
  Complete product management with image uploads
</p>

![Search Functionality](https://github.com/Navadeep-Reddy/ProjectScreenshots-/blob/main/RandomCommerce/RealTimeSearch.png?raw=true)
<p align="center">
  Real-time product search across multiple fields
</p>

## Key Features

- **Product Management**: Full CRUD operations for products with image uploads
- **Real-time Search**: Search products by name, description, category, or image name
- **File Upload System**: Image storage and retrieval with Spring Boot
- **Responsive UI**: Modern interface built with React and Tailwind CSS
- **REST API**: Well-structured RESTful endpoints following Spring Boot best practices
- **H2 Database**: In-memory database for development and learning
- **Cross-Origin Support**: Configured CORS for seamless frontend-backend integration

## Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS, Shadcn UI
- **Backend**: Spring Boot, Spring Data JPA, Spring Web
- **Database**: H2 Database (file-based storage)
- **Build Tools**: Maven (backend), Vite (frontend)
- **Development Tools**: Spring Boot DevTools, Lombok
- **API Testing**: RESTful endpoints with proper HTTP status codes

## Architecture

The project follows a layered architecture pattern:
- **Presentation Layer**: React frontend with TypeScript for type safety
- **API Layer**: Spring Boot REST controllers with proper endpoint mapping
- **Service Layer**: Business logic implementation following Spring conventions
- **Data Access Layer**: Spring Data JPA repositories with custom queries
- **Database Layer**: H2 database with automatic schema generation

## Learning Objectives

This project demonstrates understanding of:
- Spring Boot application structure and configuration
- Spring Data JPA for database operations
- REST API design and implementation
- File upload handling in Spring Boot
- Cross-origin resource sharing (CORS) configuration
- Maven dependency management
- Frontend-backend integration patterns

## Steps to Run

### Server Setup

1. Navigate to the server directory:
```bash
cd RandomCommerce/server
```

2. Run the Spring Boot application:
```bash
./mvnw spring-boot:run
```
Or using Maven directly:
```bash
mvn spring-boot:run
```
The server will run on http://localhost:8080

3. Access H2 Console (optional):
    - URL: http://localhost:8080/h2-console
    - JDBC URL: `jdbc:h2:file:./storage/database`
    - Username: `navadeep`
    - Password: (leave empty)

### Client Setup

1. Navigate to the client directory:
```bash
cd RandomCommerce/client
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm dev
```
The client will be available at http://localhost:5173

## How It Works

1. **Product Creation**: Add new products with details and image uploads
2. **Product Catalog**: Browse all products with image display
3. **Search & Filter**: Search products using the navigation bar search field
4. **Product Details**: View detailed product information
5. **Product Updates**: Edit existing products and replace images
6. **Product Deletion**: Remove products from the catalog

## API Endpoints

### Product Management
- `GET /api/products`: Retrieve all products
- `GET /api/product/{prodId}`: Get product by ID
- `GET /api/product/image/{prodId}`: Get product image
- `POST /api/add`: Add new product with image
- `PUT /api/product/update/{prodId}`: Update existing product
- `DELETE /api/product/delete/{prodId}`: Delete product
- `GET /api/product/search?keyword={keyword}`: Search products

## Key Learning Points

### Spring Boot Concepts
- **Dependency Injection**: Constructor-based injection in services and controllers
- **Auto-configuration**: Leveraging Spring Boot's auto-configuration features
- **Data JPA**: Custom repository methods with JPQL queries
- **File Handling**: Multipart file uploads and binary data storage
- **Application Properties**: Database configuration and multipart settings

### REST API Design
- **HTTP Methods**: Proper use of GET, POST, PUT, DELETE methods
- **Response Entities**: Appropriate HTTP status codes and response handling
- **Request Mapping**: Clean URL patterns and parameter binding
- **Error Handling**: Basic error responses and null checks

### Database Operations
- **Entity Modeling**: JPA entity with Lombok annotations
- **Repository Pattern**: Custom query methods using Spring Data JPA
- **Search Functionality**: Case-insensitive search across multiple fields

## Database Schema

The application uses a simple `Product` entity with the following fields:
- `id`: Primary key (auto-generated)
- `name`: Product name
- `description`: Product description
- `category`: Product category
- `price`: Product price
- `stock`: Available quantity
- `imageName`: Original image filename
- `imageType`: Image MIME type
- `imageData`: Binary image data

## Future Enhancements

- User authentication and authorization
- Shopping cart functionality
- Order management system
- Payment integration
- Product categories and filters
- Inventory management
- Product reviews and ratings
- Admin dashboard
- Email notifications
- MySQL/PostgreSQL database integration

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

*This project was created as a learning exercise to understand Spring Boot fundamentals and full-stack web development patterns.*