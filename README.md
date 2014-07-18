# Meteor-Dropzone [![Build Status](https://travis-ci.org/devonbarrett/meteor-dropzone.png?branch=master)](https://travis-ci.org/devonbarrett/meteor-dropzone)

## Dropzone.js
[DropzoneJS](http://www.dropzonejs.com/) is an open source library that provides drag'n'drop file uploads with image previews.

## Compatibility
Intended for versions of Meteor 0.8.2+

## Installation
* Pre-Install: [Meteorite](https://github.com/oortcloud/meteorite) to gain the mrt command
* Add Dropzonejs to your project with:
```
    mrt add Dropzonejs
```

## Usage
In your handlebar templates you can just include the template Dropzonejs:

```
    {{> dropzone url='http://somewebsite.com/upload' id='dropzoneDiv'}}
```
Which will post any uploaded files to the url of your choice.

### Options
If you would like more control over your Dropzone. You can instantiate one on any html element and pass a range of events and options.

```
    $(selector).dropzone(options);
    window.Dropzone.discover();
```

A full list of options can be found in the Dropzone [documentation](http://www.dropzonejs.com/)

## Contributors
- [aramk](https://github.com/aramk)

## Todo
Pull requests are very welcome if you are looking for a starting point:
- Tests
- Ability to pass options to the template
