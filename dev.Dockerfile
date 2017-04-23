FROM node:6.9.4
RUN npm install -g yarn@0.22.0
WORKDIR /app
EXPOSE 4000
CMD npm start
