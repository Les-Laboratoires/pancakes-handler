workflow "Pull Request ESLint" {
  on = "pull_request"
  resolves = ["ESLint Auto"]
}

workflow "Push ESLint" {
  on = "push"
  resolves = ["ESLint Auto"]
}

action "ESLint Auto" {
  uses = "hallee/eslint-action@master"
}
