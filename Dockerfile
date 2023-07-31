FROM node:20-slim AS base

Run npm i -g pnpm
FROM base AS dependencies

WORKDIR /app

COPY package.json pnpm-lock.yaml /app/

RUN pnpm install

# FROM base AS build
# COPY . .
# COPY --from=dependencies /app/node_modules ./node_modules
# RUN pnpm build
# RUN pnpm prune --prod
# ENV NODE_PATH=/app/node_modules

COPY . /app/

EXPOSE 3000

CMD ["pnpm","dev"]