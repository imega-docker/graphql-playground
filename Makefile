IMG = imega/graphql-playground
TAG = latest
GO_IMG_DEV = node:current-alpine
GO_IMG = node:current-alpine
CWD = /data

build:
	@docker build \
		--build-arg GO_IMG_DEV=$(GO_IMG_DEV) \
		--build-arg GO_IMG=$(GO_IMG) \
		--build-arg CWD=$(CWD) \
		-t $(IMG):$(TAG) .
