# Iridium Chrono Plugin

This is a plugin for Iridium app that uses chrono (https://github.com/wanasit/chrono) to parse date string in task title and automatically sets due date 📅 when creating or updating task. 

![alt text](https://github.com/Yamazaki93/Iridium-Chrono-Plugin/raw/master/demo.gif "Preview")

# Requirements

 - Iridium 0.9.0 or above

# Release Notes

## 0.2.0

 - Added setting for different locale used for date detection. So 2/1 will be Feb. 1 in EN-US but Jan. 2 in EN-GB
 - Added setting to allow removing detected date string from title.

## 0.1.0

Initial Release

# Installing The Plugin

## Install From Pre-Packaged (Recommended)

 1. Download [`packaged.zip`]('https://github.com/Yamazaki93/Iridium-Chrono-Plugin/raw/master/packaged.zip') file from the repo. 
 2. Launch Iridium and follow the [`Offline Installation`]('https://michaellu.gitbook.io/iridium-documentation/user-guide/untitled#offline-installation') steps to install the plugin.

## Install From Source
 
 To run from source, Node.js 10, npm and CLI are needed to be installed.

 1. Download/Clone the repository under `Your Home Directory/Iridium/plugins/` as a folder.
 2. `cd` into the cloned directory, then run `npm`
 3. `cd` into `frontend` and run `npm`, then `ng build settings-frontend`
 3. Launch Iridium.