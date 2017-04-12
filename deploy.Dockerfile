FROM node:6.9.4
COPY . /app/
WORKDIR /app
RUN npm install
EXPOSE 4000
CMD npm start
