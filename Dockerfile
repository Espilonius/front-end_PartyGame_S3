FROM node:lts-alpine 

# install simple http server for serving static content
RUN npm install -g http-server

# Set the working directory to /app inside the container
WORKDIR /app

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

# Install dependencies (npm ci makes sure the exact versions in the lockfile gets installed)
RUN npm install
RUN npm ci 

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

# Build the app
RUN npm run build

# Expose the port on which the app will be running (3000 is the default that `serve` uses)
EXPOSE 8080

CMD [ "http-server", "dist" ]