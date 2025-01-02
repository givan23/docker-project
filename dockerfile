# Use the official Node.js image as the base image
FROM node:18

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Expose the port (not strictly required but good for documentation)
EXPOSE 3000

# Install serve globally for serving static files
RUN npm install -g serve

# Start the application, dynamically binding to Heroku's provided PORT
CMD ["sh", "-c", "serve -s build -l ${PORT:-3000}"]
