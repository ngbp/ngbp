# Contributing to `ngbp`

## Getting Started

To get started, follow the [Detailed Installation](./README.md#detailed-installation)
guide from the main project README.

## Style

All pull requests must follow a few simple guidelines:

- One logical feature per commit. When you submit a pull request, it should
  *not* include more than one commit. If it does, please squash them first.
- Avoid unnecessary changes. A PR should only contain the necessary changes for
  the particular feature/bug/documentation/... that it is meant for.
- Commit messages (and therefore PR titles) must follow the format
  `type(component): short message` and be absolutely no longer than 100
  characters in length. 80 characters or less is preferable.

This style is very similar to those for AngularJS, so check out [their
contributing guide](https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md).

## Notes

- Please keep `package.json` package list in alphabetical order. Using
`npm install --save-dev` automatically does this.