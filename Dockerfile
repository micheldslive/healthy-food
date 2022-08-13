FROM node:14-alpine

WORKDIR /healthyfood

COPY . .

RUN yarn

EXPOSE 3000

CMD ["yarn","dev"]