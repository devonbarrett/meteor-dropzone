# Meteor-Dropzone [![Build Status](https://travis-ci.org/devonbarrett/meteor-dropzone.png?branch=master)](https://travis-ci.org/devonbarrett/meteor-dropzone)

## Dropzone.js
[DropzoneJS](http://www.dropzonejs.com/) is an open source library that provides drag'n'drop file uploads with image previews.

## Compatibility
Intended for versions of Meteor 1.0

## Installation
```
    meteor add dbarrett:dropzonejs
```

## Usage
In your handlebar templates you can just include the template Dropzonejs:

```
    {{> dropzone url='http://somewebsite.com/upload' id='dropzoneDiv'}}
```
Which will post any uploaded files to the url of your choice.


id is optional, if you do not set one, a random string will be used.
*url is not optional* you must pass a url to the template.

### Options
If you would like more control over your Dropzone. You can pass the full range of options found in the Dropzone [documentation](http://www.dropzonejs.com/) to the template e.g.

```
    {{> dropzone url='http://somewebsite.com/upload' id='dropzoneDiv' maxFiles=4}}
```

Or you can set the default options that every dropzone instance is instantiated with globally:

```
	Meteor.Dropzone.options.maxFiles = 4;
```

These will be overridden by any parameters set in the template helper.

A full list of options can be found in the Dropzone [documentation](http://www.dropzonejs.com/)

## Contributors
- [aramk](https://github.com/aramk)

## Todo
Pull requests are very welcome if you are looking for a starting point:
- Tests
- Examples