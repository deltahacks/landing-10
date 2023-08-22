module.exports = {
  ci: {
    upload: {
      target: "lhci",
      serverBaseUrl: "https://deltahacks-lhci.up.railway.app",
      token: "7a547b5b-4683-42d0-9877-a3a8d5c52c04",
    },
    assert: {
      preset: "lighthouse:recommended",
    },
  },
};
