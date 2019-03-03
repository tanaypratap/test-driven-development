/**
 * Callbacks
 */

function fetchDataCallback(callback) {
	setTimeout(() => {
		callback('cashew');
	}, 0);
}

// Test fetchDataCallback
test('the data is cashew', done => {
	function callback(data) {
		expect(data).toBe('cashew');
		done();
	}

	fetchDataCallback(callback);
});

/**
 * Promises
 */

function fetchDataPromise() {
	return new Promise((resolve, _) => {
		resolve('cashew');
	});
}

// return the promise, expect in then
test('promise returns cashew', () => {
	return fetchDataPromise().then(data => {
		expect(data).toBe('cashew');
	});
});

// use resolves in expect
test('resolves to cashew', () => {
	return expect(fetchDataPromise()).resolves.toBe('cashew');
});

// function to reject a promise
function fetchDataReject() {
	return new Promise((_, reject) => {
		reject('error');
	});
}

// use reject in expect
test('rejects the call', () => {
	return expect(fetchDataReject()).rejects.toMatch('error');
});

// when rejecting a promise
test('promise rejects', () => {
	expect.assertions(1);
	return fetchDataReject().catch(e => expect(e).toMatch('error'));
});
