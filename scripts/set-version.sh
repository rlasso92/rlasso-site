#!/bin/bash

## Autor ##
## Ronoaldo Lasso - Developer


# Set Colors
GREEN=$'\e[0;32m'
RED=$'\e[0;31m'
NC=$'\e[0m'

GIT_TYPE=$(git log --pretty='format:%Creset%s' --no-merges -1)

if [[ $GIT_TYPE == *"feat"* ]]; then
    VERSION_TYPE="minor"
fi

if [[ $GIT_TYPE == *"fix"* ]]; then
    VERSION_TYPE="patch"
fi

if [[ $GIT_TYPE == *"[PATCH]"* ]]; then
    VERSION_TYPE="patch"
fi

if [[ $GIT_TYPE == *"[MAJOR]"* ]]; then
    VERSION_TYPE="major"
fi

CURRENT_VERSION=$(< package.json grep version | head -1 | awk -F: '{ print $2 }' | sed 's/[", ]//g')
PROJECT_NAME=$(< package.json grep name | head -1 | awk -F: '{ print $2 }' | sed 's/[", ]//g')

if [ -z "$CURRENT_VERSION" ]; then
    CURRENT_VERSION="0.1.0"
fi

VERSION_SPLIT=$(echo $CURRENT_VERSION | grep -o '[^-]*$')
MAJOR=$(echo "$VERSION_SPLIT" | cut -d. -f1 | sed 's/v//g')
MINOR=$(echo "$VERSION_SPLIT" | cut -d. -f2)
PATCH=$(echo "$VERSION_SPLIT" | cut -d. -f3 | sed 's/[^0-9]//g')

if [[ $VERSION_TYPE == "" ]]; then
    VERSION_TYPE="minor"
fi

if [[ $VERSION_TYPE == "major" ]]; then
    PATCH=0
    MINOR=0
    ((MAJOR++))
fi

if [[ $VERSION_TYPE == "minor" ]]; then
    PATCH=0
    ((MINOR++))
fi

if [[ $VERSION_TYPE == "patch" ]]; then
    ((PATCH++))
fi

NEW_VERSION="$MAJOR.$MINOR.$PATCH"

echo "${GREEN}VERSION INFORMATION:"
echo "----------------------"

echo "Current version:      '$CURRENT_VERSION'${RED}"
echo "New version:      '$NEW_VERSION'${GREEN}"

echo "$NEW_VERSION";
echo "PROJECT_NAME=$PROJECT_NAME" >> $GITHUB_ENV
echo "IMAGE_TAG=$PROJECT_NAME:$NEW_VERSION" >> $GITHUB_ENV
echo "NEW_VERSION=$NEW_VERSION" >> $GITHUB_ENV
echo "$IMAGE_TAG"