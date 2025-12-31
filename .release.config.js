module.exports = {
  branches: ["main"],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",

    [
      "@semantic-release/changelog",
      {
        changelogFile: "CHANGELOG.md"
      }
    ],

    // Write src/_data/version.json and confirm it's visible
    [
      "semantic-release-exec",
      {
        prepareCmd:
          "mkdir -p src/_data && echo '{\"version\": \"${nextRelease.version}\", \"released\": \"${nextRelease.gitTag}\", \"notes\": \"${nextRelease.notes}\"}' > src/_data/version.json && cat src/_data/version.json"
      }
    ],

    // Commit updated files
    [
      "@semantic-release/git",
      {
        assets: [
          "CHANGELOG.md",
          "src/_data/version.json",
          "package.json",
          "package-lock.json"
        ],
        message: "chore(release): ${nextRelease.version} [skip ci]"
      }
    ],

    // Upload version.json as a GitHub release asset
    [
      "@semantic-release/github",
      {
        assets: [
          {
            path: "src/_data/version.json",
            label: "version.json"
          }
        ]
      }
    ]
  ],
  generateNotes: {
    preset: "conventionalcommits"
  }
};
