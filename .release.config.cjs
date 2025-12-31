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

    // Write src/_data/version.json on each release
    [
      "@semantic-release/exec",
      {
        prepareCmd:
          "mkdir -p src/_data && echo '{\"version\": \"${nextRelease.version}\", \"released\": \"${nextRelease.gitTag}\", \"notes\": \"${nextRelease.notes}\"}' > src/_data/version.json && cat src/_data/version.json"
      }
    ],

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
