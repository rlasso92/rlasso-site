const runYarnLock = "yarn install --frozen-lockfile"

module.exports = {
  hooks: {
    "post-merge": runYarnLock,
    "post-rebase": "yarn install",
    "pre-commit": "yarn build:ts && yarn lint-staged",
  },
}
