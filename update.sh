#!/usr/bin/env sh

node scripts/formatApi.js
node scripts/formatAwesomeWechatApp.js

# if docs updated
if [[ `git status docs --porcelain` ]]; then
  # Changes
  npm run deploy
  git add .
  git commit -m "bot: auto update doc"
else
  # No changes
  echo 'no doc updates'
fi