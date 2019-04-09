#!/usr/bin/env sh

git checkout dev
"$(which node)" scripts/formatApi.js
"$(which node)" scripts/formatAwesomeWechatApp.js

# if docs updated
if [[ `git status docs --porcelain` ]]; then
  # Changes
  "$(which npm)" run deploy
  git add .
  git commit -m "bot: auto update doc"
  git push origin dev

  # Send update message to wechat with http://sc.ftqq.com/3.version
  if [[ "$FTQQ_SCKEY" ]]; then
    curl "https://sc.ftqq.com/$FTQQ_SCKEY.send?text=Mina.wiki+%E6%9C%89%E6%9B%B4%E6%96%B0%E5%95%A6&desp=%5B%E6%9F%A5%E7%9C%8B%E6%9B%B4%E6%96%B0%5D(https%3A%2F%2Fgithub.com%2FIOriens%2Fmina-wiki%2Fcommits%2Fdev)"
  else
    echo 'no ftqq_sckey'
  fi
else
  # No changes
  echo 'no doc updates'
fi
