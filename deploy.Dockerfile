FROM node:6.9.4
RUN npm install -g yarn@0.22.0
COPY . /app/
WORKDIR /app
RUN yarn install
EXPOSE 4000
CMD npm start


