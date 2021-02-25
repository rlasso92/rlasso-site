# ---- Base Node ----
FROM node:15.9.0 AS base

# set working directory
WORKDIR /app 
RUN mkdir /app/src
RUN mkdir /app/src/images
RUN ls -la
# copy project file
COPY package*.json ./

RUN npm ci
COPY . .

# ---- Dependencies ----
FROM base AS dependencies
# install node packages
RUN yarn config set cache-folder /app
RUN yarn install --production --silent
RUN yarn global add gatsby-cli
RUN yarn build:ts 

FROM nginx as server
EXPOSE 80
RUN mkdir /app && mkdir /app/src
RUN mkdir /app/src/images
COPY --from=dependencies /app/public /usr/share/nginx/html
COPY --from=dependencies /app/src/images /app/src/images