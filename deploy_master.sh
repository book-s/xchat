cd ./
rm -rf ./docs/.vitepress/dist

git init
git add .
git commit -m 'master'

git push -f git@github.com:book-s/xchat.git master