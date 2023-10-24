module.exports = {
  ci: {
    collect: {
      numberOfRuns: 5,
      settings: {
        throttling: {
          cpuSlowdownMultiplier: 2.5,
        },
      },
    },
    upload: {
      target: "lhci",
      serverBaseUrl: "https://deltahacks-lhci.up.railway.app",
      token: "4c8a9fe6-33a7-46b1-8e2f-3bff0f514351",
    },
    assert: {
      preset: "lighthouse:no-pwa",
      assertions: {
        // currently broken when running headless, so skip assertion
        // see: https://github.com/GoogleChrome/lighthouse/issues/14784
        "bf-cache": "off",
        // don't think it's possible to properly evaluate csp either
        "csp-xss": "off",
        // google analytics has unused js, since we don't own it there's nothing we can do
        "unused-javascript": "warn",
        // the carousel library's built-in buttons are a bit undersized,
        // but making a new button would be a lot of work for minimal improvement
        "tap-targets": "warn",
        // Lint Images doesn't work on the carousel images, so we can't fix this (for now)
        "uses-responsive-images": "warn",
        list: "off",
        listitem: "off",
        "form-field-multiple-labels": "warn",
      },
    },
  },
};
