## Multi-stage Dockerfile for production
FROM node:20-alpine AS build
WORKDIR /app

# Install dependencies and build
COPY package.json package-lock.json* ./
COPY . ./
RUN npm ci --silent || npm install --silent
RUN npm run build

## Production image using nginx
FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["/usr/sbin/nginx", "-g", "daemon off;"]
