# Étape 1: Builder
FROM node:20-alpine AS builder

WORKDIR /usr/src/app

# Copier package.json et package-lock.json
COPY package*.json ./

# Installer dépendances (legacy-peer-deps pour éviter conflits)
RUN npm install --legacy-peer-deps

# Copier le reste du projet
COPY . .

# Builder le projet
RUN npm run build

# Étape 2: Production
FROM node:20-alpine AS production

WORKDIR /usr/src/app

# Copier seulement le build et package.json pour réduire l'image
COPY package*.json ./
COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/node_modules ./node_modules

EXPOSE 3000

CMD ["node", "dist/main.js"]
