import * as React from 'react';
import classnames from 'classnames';

const Heading = props => {
	const { children, className } = props;
	const styleclass = classnames(className);

	return <h2 className={styleclass}>{children}</h2>;
};

export default Heading;
