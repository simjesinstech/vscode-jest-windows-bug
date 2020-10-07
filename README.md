### Environment

1. `node -v`: `v12.18.3`
1. `npm -v`: `6.14.6`
1. `npm ls react-scripts`: `` `-- react-scripts@3.4.3``
1. your vscode-jest settings if customized: `no custom settings`

1. Operating system: `Windows`

### Prerequisite

- are you able to run jest test from command line? `yes`
- how do you run your tests from command line? (for example: `npm run test` or `node_modules/.bin/jest`):
  `npm run test`, which runs `react-scripts test`

### Steps to Reproduce

<!-- Please create a repository that reproduces the issue with the minimal amount of code possible. -->

Run debug CodeLense on a test that uses template literal variable in the test name.
See `src/bug.test.js` in [simjesinstech/vscode-jest-windows-bug](https://github.com/simjesinstech/vscode-jest-windows-bug).

### Relevant Debug Info

<!-- If applicable, following self-diagnosis in https://github.com/jest-community/vscode-jest/blob/master/README.md#troubleshooting, and include the relevant debug info here to speed up the issue resolution -->

Running debug CodeLense on:

```
it(`skips this test if ran with debug CodeLense, ${description}`, () => {
    console.log("test ran");
});
```

Produces:
`Ran all test suites matching /bug.test.js/i with tests matching "skips this test if ran with debug CodeLense, \$\{description\}"`

### Expected Behavior

Running debug CodeLense on a test with template literal variable in the name should run the test.

### Actual Behavior

Running debug CodeLense on a test with template literal variable in the name skips the test.

---
