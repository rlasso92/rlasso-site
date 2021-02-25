#!/bin/bash

## Autor ##
## Ronoaldo Lasso - Developer

# Set Colors
GREEN=$'\e[0;32m'
RED=$'\e[0;31m'
NC=$'\e[0m'

# Get current version for project
CURRENT_VERSION=$(< package.json grep version | head -1 | awk -F: '{ print $2 }' | sed 's/[", ]//g')
PROJECT_NAME=$(< package.json grep name | head -1 | awk -F: '{ print $2 }' | sed 's/[", ]//g')


echo "${GREEN}PROJECT INFORMATION:"
echo "----------------------"
echo "Project Name set to:  '$PROJECT_NAME'"
echo "Current version:      '$CURRENT_VERSION'${NC}"

# Config environment variables in the pipelines
echo "CURRENT_VERSION=$CURRENT_VERSION" >> $GITHUB_ENV
echo "PROJECT_NAME=$PROJECT_NAME" >> $GITHUB_ENV
echo "IMAGE_TAG=$PROJECT_NAME:$CURRENT_VERSION" >> $GITHUB_ENV

