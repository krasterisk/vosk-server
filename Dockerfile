FROM node:18-alpine
WORKDIR /opt/app
ADD package.json package.json
RUN npm install
ADD aiPBX_backend .
RUN npm run build
RUN npm prune --production
CMD ["node", "./dist/main.js"]



