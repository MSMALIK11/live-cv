import swaggerJSDoc from "swagger-jsdoc";

export const swaggerOptions: swaggerJSDoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "LiveCV API Docs",
      version: "1.0.0",
      description: "API documentation for LiveCV platform",
    },
    servers: [
      {
        url: "http://localhost:5000/api",
        description: "Development Server",
      },
    ],
  },
  apis: ["./src/routes/*.ts"], // Path to the route files for annotations
};

export const swaggerSpec = swaggerJSDoc(swaggerOptions);
