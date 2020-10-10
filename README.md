# AllergicalApp

This is a ReactNative based application that helps users to identify whether the product is usable by them.

- The application is provides for scanning a product/upload an image from gallery, and then based on user's existing preferences (that the user is allergic to), the application identifies ingredients and analyses them against each other and predicts whether is it ok for the user.
- This idea could be extrapolated to Food Items, Cosmetics, or even medicines.
- Watch out video in DEMO folder, to see how it works.

## Tech Stack

- React Native
- Tesseract - for OCR
- Tensorflow - for object classification
- NOT IN REPO:
  - Java - springboot
  - Docker

## Prerequisites

- To setup dev environment for your machine, please follow steps mentioned at (https://reactnative.dev/docs/environment-setup)

## Steps

- yarn install
- react-native link
- npx pod-install OR npx pod-install ios
- yarn start
- yarn ios
- yarn android

## User Credentials

- dummy@abc.com | 12345
