ARG PORT
FROM node:10.16-alpine

WORKDIR /usr/src

COPY [".", "/usr/src"]

RUN npm install

EXPOSE ${PORT}

CMD ["npm","run", "dev"]