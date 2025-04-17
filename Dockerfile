# npm startで起動するDockerfile
FROM node:22-alpine3.20
RUN apk update && apk upgrade
RUN apk add --no-cache git
RUN mkdir -p /home/app
WORKDIR /home/app
RUN git clone https://github.com/kenichiro-kimura/soracom-mcp-server.git
WORKDIR /home/app/soracom-mcp-server
RUN npm cache clear --force
RUN npm install
CMD ["npm", "start", "--silent"]
