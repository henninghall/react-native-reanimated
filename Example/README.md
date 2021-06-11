# Comparing React Native animation libraries

Comparing an expandable card animation with the following libs:

- Animated
- Layout Animation
- Reanimated 1
- Reanimated 2

<br>
<img src="src/henning/screencap.gif" height="400px">

## Installation

```bash
yarn
npx pod-install
react-native run-ios
```

## Usage

Toggle the "heavy load"-switch to make a basic performance comparison. When enabled, many additional invisible views are rendered within the card. This makes the performance difference between a native and a js driven animation obvious.

The default Animated library does not support native driven animations for properties such as height. The other libs does support native driven animations.

## Run the example

- clone the repository
- `yarn install` at main directory
- `cd Example/`
- `yarn install` again

### Running on iOS

- `cd ios && pod install && cd ..` - to install pods
- `react-native run-ios` - to run the app

### Running on Android

- [install NDK in version 21.3.6528147 or higher](https://developer.android.com/studio/projects/install-ndk)
- `react-native run-android` - to run the app

**Note:** Android compiles fairly long due to native dependencies. To shorten consecutive builds, load the project into android studio and run it from there. Same applies to iOS so you can use XCode for running the example.

**Important:** You will need to have an Android or iOS device or emulator connected as well as react-native-cli package installed globally.
