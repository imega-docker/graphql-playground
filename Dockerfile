ARG GO_IMG_DEV
ARG GO_IMG

FROM $GO_IMG_DEV as builder
ARG CWD
WORKDIR $CWD

COPY . .

RUN npm install && \
    npm run build && \
    cp -r $CWD/src/schema $CWD/dist && \
    find $CWD/dist


FROM $GO_IMG
ARG CWD

EXPOSE 4000

COPY --from=builder $CWD/package.json .
RUN npm install --save-prod
COPY --from=builder $CWD/dist /app

CMD ["node", "/app/index.js"]
