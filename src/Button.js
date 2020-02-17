import * as React from 'react';
import classnames from 'classnames';

const Button = props => {
	const { type, onClick, children, className } = props;
	const styleclass = classnames(className);

	return (
		<button type={type} onClick={onClick} className={styleclass}>
			{children}
		</button>
	);
};

export default Button;
