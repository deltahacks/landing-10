module.exports = {
  ci: {
    collect: {
      settings: {
        throttling: {
          cpuSlowdownMultiplier: 2.2,
        },
        skipAudits: ["bf-cache"],
      },
    },
    upload: {
      target: "lhci",
      serverBaseUrl: "https://deltahacks-lhci.up.railway.app",
      token: "4c8a9fe6-33a7-46b1-8e2f-3bff0f514351",
    },
    assert: {
      preset: "lighthouse:no-pwa",
    },
  },
};
