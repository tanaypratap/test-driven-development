/**
 * Common Matchers
 */

// exact equality using toBe
test('two multiplied by 3 is 6', () => {
	expect(2 * 3).toBe(6);
});

// toEqual for objects
test('object assignment', () => {
	const data = { one: 1 };
	data['two'] = 2;
	expect(data).toEqual({ one: 1, two: 2 });
});

// toBe or not.toBe
test('adding positive numbers is non-zero', () => {
	for (let a = 1; a < 10; a++) {
		for (let b = 1; b < 10; b++) {
			expect(a + b).not.toBe(0);
		}
	}
});

/**
 * Truthiness
 */

// to distinguish between null, undefined, false

test('null', () => {
	const n = null;
	expect(n).toBeNull();
	expect(n).toBeDefined();
	expect(n).not.toBeUndefined();
	expect(n).not.toBeTruthy();
	expect(n).toBeFalsy();
});

test('zero', () => {
	const z = 0;
	expect(z).not.toBeNull();
	expect(z).toBeDefined();
	expect(z).not.toBeUndefined();
	expect(z).not.toBeTruthy();
	expect(z).toBeFalsy();
});

/**
 * Numbers
 */
test('two plus two', () => {
	const value = 2 + 2;
	expect(value).toBeGreaterThan(3);
	expect(value).toBeGreaterThanOrEqual(3.5);
	expect(value).toBeLessThan(5);
	expect(value).toBeLessThanOrEqual(4.5);

	expect(value).toBe(4);
	expect(value).toEqual(4);
});

/**
 * Floats
 */
test('adding floating point numbers', () => {
	const decimalNum = 0.1 + 0.2;

	expect(decimalNum).toBeCloseTo(0.3);
});

/**
 * Strings
 */
test('there is no I in team', () => {
	expect('team').not.toMatch(/I/);
});

test('but there is a nay in Tanay', () => {
	expect('Tanay').toMatch(/nay/);
});

/**
 * Arrays
 */

const todoItems = ['shopping', 'laundry', 'side-project', 'book-reading'];

test('the todo has shopping in it', () => {
	expect(todoItems).toContain('shopping');
});
