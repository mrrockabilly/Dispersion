var Application = require('spectron').Application;
var assert = require('assert');
var path = require("path");
var appPath = path.resolve(__dirname, '../'); //require the whole thing
var electronPath = path.resolve(__dirname, '../node_modules/.bin/electron');
var expect = require('chai').expect;
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
require('fluentnode')
var helpers = require('./global-setup')


describe('application launch', function () {
  this.timeout(10000)

  beforeEach(function () {
    this.app = new Application({
      path: electronPath,
      args: [appPath]
    })
    return this.app.start()
  })

  afterEach(function () {
    if (this.app && this.app.isRunning()) {
      return this.app.stop()
    }
  })

  it('shows an initial window', function () {
    return this.app.client.getWindowCount().then(function (count) {
      assert.equal(count, 1)
    })
  })
})













// var app = new Application({
//   path: electronPath,
//   args: [appPath]
// })

// console.log("Hello")

// app.start().then(function () {
//   // Check if the window is visible
//   console.log('started')
//   return app.browserWindow.isVisible()
// }).then(function (isVisible) {
//   // Verify the window is visible
//   assert.equal(isVisible, true)
// }).then(function () {
//   // Get the window's title
//   return app.client.getTitle()
// }).then(function (title) {
//   // Verify the window's title
//   assert.equal(title, 'My App')
// }).then(function () {
//   // Stop the application
//   console.log("Stop")
//   return app.stop()
// }).catch(function (error) {
//   // Log any failures
//   console.error('Test failed', error.message)
// })











// describe('application launch', function () {
//   this.timeout(10000)

//   beforeEach(function () {
//     myApp = new Application({
//       path: electronPath,
//       args: [appPath], // pass args along with path
//     });
//     return myApp.start().then(function () {
//       chaiAsPromised.transferPromiseness = myApp.transferPromiseness;
//       return myApp;
//     });
//   });

//   afterEach(function () {
//     if (this.app && this.app.isRunning()) {
//       return this.app.stop()
//     }
//   })

//   it('shows an initial window abc', function () {
//     console.log(app);
//     app.isRunning().assert_Is_True()
//     return app.client.getWindowCount().then(function (count) {
//       assert.equal(count, 2)
//     })
//   })
// })
