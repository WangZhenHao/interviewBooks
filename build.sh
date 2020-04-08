#!/bin/bash

DATETIME=`date "+%Y-%m-%d %H:%M:%S"`

npm run build
# ls
# cd ./dist
# ls
if [ $? -eq 0 ]
 then
   cd ./dist
   git init
   git add .
   git commit -m "构建时间：$DATETIME"
  #  git remote add origin https://github.com/WangZhenHao/interviewBooks.git
   git push -f https://github.com/WangZhenHao/interviewBooks.git master:gh-pages

   if [ $? -eq 0 ]
     then 
       cd ..
       rm -rf ./dist
       echo -e "\n\033[32m构建成功.\033[0m"
   fi
fi
