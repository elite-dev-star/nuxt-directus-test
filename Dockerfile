# Use a specific Node.js version
FROM node:18.18.0

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and pnpm-lock.yaml
COPY package.json ./

# Copy the rest of the code
COPY . .

# Remove existing node_modules and Install dependencies
RUN rm -rf node_modules
RUN npm install

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["npm", "run", "dev"]
