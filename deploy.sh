#!/bin/bash

echo -e "\033[0;32mDeploying updates to Github...\033[0m"

git checkout dev 
git pull origin dev 
git add -A
git commit -m 'Committing work in progress'

# Pull down the file we just committed help avoid merge conflicts
git subtree pull --prefix=public origin master -m 'Merge origin'

rm -rf public

# Build the project.
hugo

# Add README.md
touch public/README.md
echo "# codyschool.com" > public/README.md

# Add the CNAME
touch public/CNAME
echo "codyschool.com" > public/CNAME

# Add robots.txt
touch public/robots.txt
echo "User-agent: *" > public/robots.txt

# Add changes to git.
git add -A

# Commit changes.
msg="Rebuilding site `date`"
if [ $# -eq 1 ]
  then msg="$1"
fi
git commit -m "$msg"

# Push source and build repos.
git push origin source
git subtree push --prefix=public origin master
