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
        "csp-xss": ["off"],
      },
    },
  },
};
