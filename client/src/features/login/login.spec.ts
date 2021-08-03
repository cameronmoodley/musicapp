import Login from './Login';
import { validateEmail } from './loginHelpers';

describe('Login', () => {
	test('validateEmail function should validate emails', () => {
		expect(validateEmail('cameron.moodley@me.com')).toBe(true);
	});

	test('validateEmail function should validate emails', () => {
		expect(validateEmail('cameron')).toBe(false);
	});
});
