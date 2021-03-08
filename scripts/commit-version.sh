#!/bin/bash

## Autor ##
## Ronoaldo Lasso - Developer

NEW_VERSION="$1"

# Set Colors
GREEN=$'\e[0;32m'
RED=$'\e[0;31m'
NC=$'\e[0m'

CURRENT_VERSION=$(< package.json grep version | head -1 | awk -F: '{ print $2 }' | sed 's/[", ]//g')
sed -i 's/"version": "'$CURRENT_VERSION'"/"version": "'$NEW_VERSION'"/' package.json


echo "${GREEN}PROJECT INFORMATION:"
echo "----------------------"
echo "Current version:      '$CURRENT_VERSION'${GREEN}"
echo "New version:      '$NEW_VERSION'${RED}"
git config user.email "ronylasso@gmail.com"
git config user.name "rlasso92 CI/CD"
git checkout -f origin master
git checkout -b feature/newversion

CURRENT_BRANCH=$(git name-rev --name-only HEAD)
echo "current branch $CURRENT_BRANCH${NC}"

echo "Git add package.json"
git add package.json -v

echo "Git commit"
git commit -m "chore(New Release): $NEW_VERSION"
git checkout master
git merge --no-ff feature/newversion -m "chore(new version): $NEW_VERSION"
git tag -f "v$NEW_VERSION" -m "New Version $NEW_VERSION"
#git push origin master --tags -f

echo "Remove newversion branch"
git branch -d feature/newversion