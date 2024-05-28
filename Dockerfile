From node:lts-alpine3.20
EXPOSE 3000
WORKDIR /usr/src/app
COPY . .
RUN npm install
CMD ["npm", "start"]