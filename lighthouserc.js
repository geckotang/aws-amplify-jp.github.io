module.exports = {
  ci: {
    collect: {
      staticDistDir: './public',
    },
    assert: {
      preset: 'lighthouse:recommended',
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};