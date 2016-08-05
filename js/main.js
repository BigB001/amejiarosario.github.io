// GA: Global functions
"use strict";

function createFunctionWithTimeout(callback, opt_timeout) {
  var called = false;
  function fn() {
    if (!called) {
      called = true;
      callback();
    }
  }
  setTimeout(fn, opt_timeout || 1000);
  return fn;
}

var trackOutboundLink = function trackOutboundLink(url) {
  ga("send", "event", "outbound", "click", "url", url, {
    transport: "beacon",
    hitCallback: function hitCallback() {
      document.location = url;
    }
  });
};