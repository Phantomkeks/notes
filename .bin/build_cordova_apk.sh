echo "Start Quasar Build for Cordova";
cd ..;
sudo quasar build -m cordova -T android;
echo "Finished Quasar Build";
cd src-cordova;
echo "Build Cordova";
sudo cordova platform remove android;
sudo cordova platform add android;
sudo cordova build android;
echo "Finished Cordova Build";