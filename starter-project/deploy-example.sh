npm install
NODE_ENV=production npm run cleanbuild
rsync -vaz --delete --rsh="ssh -l user" public/* example.com:/srv/mysite
