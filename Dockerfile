# npm startで起動するDockerfile
FROM node:22-alpine3.20
RUN mkdir -p /home/app/soracom-mcp-server
COPY . /home/app/soracom-mcp-server
WORKDIR /home/app/soracom-mcp-server
RUN npm cache clear --force
RUN npm install
CMD ["npm", "start", "--silent"]
