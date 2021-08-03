import { render, fireEvent } from '@testing-library/react';

import Login from './Login';
import { validateEmail } from './loginHelpers';

describe('Login Describe', () => {
	test('validateEmail function should pass with valid email', () => {
		expect(validateEmail('cameron.moodley@me.com')).toBe(true);
	});

	test('validateEmail function should fail with broken email', () => {
		expect(validateEmail('cameron.com')).toBe(false);
	});

	test('login form is in the document', () => {
		const component = render(<Login />);
		const inputNode = component.getByText('Login');
		expect(inputNode).toBeInTheDocument();
	});

	test('email field should have a label', () => {
		const component = render(<Login />);
		const usernameInputNode = component.getByLabelText('Email');
		expect(usernameInputNode.getAttribute('name')).toBe('email');
	});

	test('password field should have a label', () => {
		const component = render(<Login />);
		const passwordInputNode = component.getByLabelText('Password');
		expect(passwordInputNode.getAttribute('name')).toBe('password');
	});

	test('email input should accept text', () => {
		const { getByLabelText } = render(<Login />);
		const emailInputNode = getByLabelText('Email') as HTMLInputElement;
		fireEvent.change(emailInputNode, {
			target: { value: 'testing' },
		});

		expect(emailInputNode.value).toBe('testing');
	});

	test('password input should accept text', () => {
		const { getByLabelText } = render(<Login />);
		const emailInputNode = getByLabelText('Password') as HTMLInputElement;
		fireEvent.change(emailInputNode, {
			target: { value: 'password' },
		});

		expect(emailInputNode.value).toBe('password');
	});
});
