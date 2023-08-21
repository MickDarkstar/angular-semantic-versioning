const config = {
  branches: ["master"],
  plugins: [
    "@semantic-release/commit-analyzer", // Increments the version for us before 'passing' the commit to next plugins,
    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/git", // git configs, takes assets, stages commit and pushes to repo. 
      {
        assets: ["package.json, dist/*", "dist/*.js.map"],
        message: // edit commit message/release note and skipping CI to prevent an endless loop
          "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
      },
    ],
    "@semantic-release/github" // creates the release and adds releasenotes
  ],
};

module.exports = config
