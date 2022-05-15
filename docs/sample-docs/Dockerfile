#---------- 1. BASE STAGE ----------#
FROM node:fermium-alpine AS base

WORKDIR /app

# Disable next.js telemetry
ENV NEXT_TELEMETRY_DISABLED=1

# Copy settings files
COPY .yarn ./.yarn
COPY .yarnrc.yml tsconfig.json ./
COPY package.json yarn.lock ./

# Copy service files
COPY services/coin-membership-webview ./services/coin-membership-webview

# Copy libraries
COPY libraries ./libraries


#---------- 2. DEPENDENCIES(ALL) STAGE ----------#
FROM base AS dependencies-all

# Install all dependencies
RUN yarn workspaces focus @mathpresso/coin-membership-webview


#---------- 2. DEPENDENCIES(PROD) STAGE ----------#
FROM base AS dependencies-prod

# Install prod dependencies
RUN yarn workspaces focus @mathpresso/coin-membership-webview --production


#---------- 3. BUILD STAGE ----------#
FROM base AS build

# Copy all dependencies
COPY --from=dependencies-all /app/node_modules ./node_modules

# Build service
ARG BUILD_CMD
RUN yarn coin-membership-webview ${BUILD_CMD}


#---------- 4. IMAGE STAGE ----------#
FROM base AS image

# Copy production dependencies
COPY --from=dependencies-prod /app/node_modules ./node_modules

# Copy build artifacts
COPY --from=build /app/services/coin-membership-webview/.next ./services/coin-membership-webview/.next
COPY --from=build /app/services/coin-membership-webview/dist ./services/coin-membership-webview/dist

# Run service
EXPOSE 3000
ARG START_CMD
ENV START=${START_CMD}
ENTRYPOINT ["sh", "-c", "yarn coin-membership-webview ${START}"]
