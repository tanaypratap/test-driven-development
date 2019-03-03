/**
 * Describe and Hooks
 */
describe('grouping of tests', () => {
	console.log('Describe 1');

	let numOfCashews = null;

	beforeAll(() => {
		numOfCashews = 0;
	});

	beforeEach(() => {
		return new Promise(resovle => {
			numOfCashews++;
			console.log('from beforeEach', numOfCashews);
			resovle(numOfCashews);
		});
	});

	afterEach(() => {
		numOfCashews++;
		console.log('from afterEach', numOfCashews);
	});

	afterAll(() => {
		console.log(`Num of cashews from afterAll ${numOfCashews}`); // 4
		numOfCashews = 0;
		console.log(`Num of cashews from afterAll ${numOfCashews}`); // 0
	});

	test('cashew is not null', () => {
		expect(numOfCashews).not.toBeNull();
	});

	test('num of cashews is more than zero', () => {
		expect(numOfCashews).toBeGreaterThan(0);
	});
});

// See that all describes are called at first, so don't use that instead of beforeEach/all
describe('no tests inside', () => {
	console.log('Describe 2');
});
