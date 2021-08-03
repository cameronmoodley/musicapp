import { useState } from 'react';
import { iFormFieldStructure } from './iLogin';

const Login = (): JSX.Element => {
	const [formData, setFormData] = useState({});

	const handleChange = ({
		target: { name, value },
	}: iFormFieldStructure): void => {
		setFormData({ ...formData, [name]: value });
	};

	return (
		<div>
			<h1>Login</h1>
			<form name='loginForm'>
				<div className='form-group'>
					<label htmlFor='email'>Email</label>
					<input
						type='text'
						name='email'
						id='email'
						className='form-control'
						placeholder='Email'
						onChange={(e) => handleChange(e)}
					/>
					<label htmlFor='password'>Password</label>
					<input
						type='password'
						name='password'
						id='password'
						className='form-control'
						placeholder='Password'
					/>
				</div>
			</form>
		</div>
	);
};

export default Login;
