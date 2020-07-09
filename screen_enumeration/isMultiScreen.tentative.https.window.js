// META: global=window
// META: script=/resources/testdriver.js
// META: script=/resources/testdriver-vendor.js
"use strict";

promise_test(async testCase => {
  assert_equals(typeof self.isMultiScreen, "function");
}, "self.isMultiScreen is present");

promise_test(async testCase => {
  await test_driver.set_permission({name: "window-placement"}, "granted");
  const result = await self.isMultiScreen();
  assert_equals(typeof result, "boolean");
}, "self.isMultiScreen returns a boolean value with permission granted");

promise_test(async testCase => {
  await test_driver.set_permission({name: 'window-placement'}, 'denied');
  const result = await self.isMultiScreen();
  assert_equals(typeof result, "boolean");
}, "self.isMultiScreen returns a boolean value with permission denied");
