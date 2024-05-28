From node:lts-alpine3.20
EXPOSE 3000
WORKDIR /usr/src/app
COPY ./my-app/ .
RUN npm ci
CMD ["npm", "start"]