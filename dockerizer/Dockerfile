# ----------------------------------------
# Stage 1 - Build dependencies and app
# ----------------------------------------
FROM node:18-alpine AS build

# Instalar paquetes de sistema necesarios
RUN apk add --no-cache \
    python3 \
    make \
    g++ \
    vips-dev \
    git

# Establecer variables de entorno
ENV NODE_ENV=production

# Crear carpeta de trabajo
WORKDIR /opt/app

# Copiar package.json y yarn.lock primero para aprovechar caché
COPY package.json yarn.lock ./

# Instalar dependencias (sin --production para que build funcione)
RUN yarn install --frozen-lockfile

# Copiar el resto del código fuente
COPY . .

# Construir Strapi
RUN yarn build

# ----------------------------------------
# Stage 2 - Create production image
# ----------------------------------------
FROM node:18-alpine

# Instalar dependencias de imágenes en producción
RUN apk add --no-cache vips-dev

ENV NODE_ENV=production

# Crear carpeta de trabajo
WORKDIR /opt/app

# Copiar sólo node_modules y build generado
COPY --from=build /opt/app/node_modules ./node_modules
COPY --from=build /opt/app/dist ./dist
COPY --from=build /opt/app/package.json ./package.json
COPY --from=build /opt/app/.env ./.env
COPY --from=build /opt/app/config ./config
COPY --from=build /opt/app/src ./src
COPY --from=build /opt/app/public ./public

# (Opcional) Si tienes otras carpetas necesarias para tu proyecto, añádelas:
# COPY --from=build /opt/app/plugins ./plugins
# COPY --from=build /opt/app/.cache ./.cache

# Cambiar usuario si prefieres (o dejar root)
RUN chown -R node:node /opt/app
USER node

# Exponer el puerto de Strapi
EXPOSE 1337

# Comando de inicio
CMD ["yarn", "start"]
