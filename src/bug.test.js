
const description = 'template-literal';

it(`skips this test if ran with debug CodeLense, ${description}`, () => {
    console.log("test ran");
});

it('runs normally here', () => {
    console.log("test ran");
});