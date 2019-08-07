FROM node:10.16-alpine

WORKDIR /express_plantilla

COPY . /express_plantilla

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]