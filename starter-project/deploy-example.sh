npm install
NODE_ENV=production npm run cleanbuild
rsync -vaz --delete --rsh="ssh -l user" public/* myserver.com:/srv/mysite
