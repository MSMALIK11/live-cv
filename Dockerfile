# Use official Node.js image with LTS
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install only production dependencies
RUN npm install --only=production

# Copy the build files
COPY dist ./dist

# Copy .env if needed (optional, typically injected at runtime)
# COPY .env .env

# Expose the port (match your Express PORT)
EXPOSE 8000

# Run the app
CMD ["node", "dist/index.js"]
