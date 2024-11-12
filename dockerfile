# Base image
FROM node:14-alpine

# Define build arguments
ARG BASE_URL=http://localhost:3000

# Set environment variables
ENV REACT_APP_BASE_URL $BASE_URL

# Set the working directory
WORKDIR /app

# Copy application files
COPY . .

# Install dependencies
RUN npm install

# Build the application
RUN npm run build

# Expose the port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]




