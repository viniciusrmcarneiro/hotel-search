FROM node:6.9.4
COPY package.json /app/
WORKDIR /app
RUN npm install
EXPOSE 4000
CMD npm start
