#!/bin/bash

## Autor ##
## Ronoaldo Lasso - Developer
IMAGE_TAG="$1"
REPOSITORY_OWNER="$2"
# Set Colors
GREEN=$'\e[0;32m'
RED=$'\e[0;31m'
NC=$'\e[0m'

echo "${GREEN}DOCKER TAG INFORMATION:"
echo "----------------------"
echo "TAG:$IMAGE_TAG"

docker tag $IMAGE_TAG "ghcr.io/$REPOSITORY_OWNER/$IMAGE_TAG"
echo "${GREEN}DOCKER TAG SUCCESS!"

docker push "ghcr.io/$REPOSITORY_OWNER/$IMAGE_TAG"
echo "${GREEN}DOCKER PUSH SUCCESS!"