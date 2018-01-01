# akakom-mobile-rn
akakom static mobile app

## How to use
clone this repository

`git clone git@github.com:afrijaldz/akakom-mobile-rn.git`

install dependency

`npm install`

run the app on your simulator

`react-native run-android`

or

`react-native run-ios`

## How to build to APK

Assemble build

`cd android && ./gradlew assembleRelease && cd ..`

Move the output relaease-unsigned apk to root directory

`mv android/app/build/outputs/apk/app-release-unsigned.apk ./`

add the keystore

`jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore akakom-mobile-rn.keystore app-release-unsigned.apk akakom-mobile-rn`

passphrase: `akakom`

sign and rename apk

`zipalign -v 4 app-release-unsigned.apk akakom.apk`

Install apk to your device