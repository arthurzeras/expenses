rm -rf deploy/public
mkdir deploy/public
cp -a dist/* deploy/public
cd deploy
firebase deploy
cd ..