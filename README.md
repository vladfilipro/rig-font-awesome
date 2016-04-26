# rig-font-awesome
[![Dependency Status](https://david-dm.org/vladfilipro/rig-font-awesome.svg)](https://david-dm.org/vladfilipro/rig-font-awesome)

A rig containing font-awesome support for your projects

## How to use
1. Install rigs package: `npm install rigs`
2. Install rig-font-awesome: `npm install rig-font-awesome`

## Available tasks in rig-font-awesome
- `rig-font-awesome__font-awesome`: A task which copies the font awesome files to your project
  - properties:
    - `fontsDest`: String, refers to the destination folder for font files. Nothing will be done if not specified.
    - `lessDest`: String, refers to the destination folder for less files. Nothing will be done if not specified.
    - `scssDest`: String, refers to the destination folder for scss files. Nothing will be done if not specified.
    - `cssDest`: String, refers to the destination folder for css files. Nothing will be done if not specified.

    ```
    {
        taskname: 'rig-font-awesome__font-awesome',
        dependency: [],
        fontsDest: './',
        lessDest: './',
        scssDest: './',
        cssDest: './'
    }
    ```

### Generated using [webcase-rig](https://www.npmjs.com/package/webcase-rig) version 1.0.1
