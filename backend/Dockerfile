FROM keymetrics/pm2:latest-alpine

RUN mkdir /usr/bin/www
WORKDIR /usr/bin/www

# Bundle APP files
COPY src src/
COPY package.json yarn.lock ./
COPY tsconfig.json .
COPY pm2.json .

# Install app dependencies
ENV NPM_CONFIG_LOGLEVEL warn
RUN yarn

RUN yarn prestart:prod

CMD [ "pm2-runtime", "start", "pm2.json" ]