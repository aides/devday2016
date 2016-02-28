FROM node:4

MAINTAINER Mikhail Kuleshov
EXPOSE 9000
WORKDIR /home/myapp

# Dependencies
COPY ./package.json /home/myapp/
RUN npm -q install

# Copy sources into container
COPY ./src /home/myapp

# Run application
ENV NODE_ENV=production
CMD ["node", "server.js"]