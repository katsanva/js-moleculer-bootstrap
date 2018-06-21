FROM node:10-alpine
WORKDIR /app
COPY package.json package-lock.json src config bin /app/
RUN npm i --production
ENV NODE_ENV=production
CMD bin/app
