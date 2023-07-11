import { ContainerTypes } from './Container.types';
import { classes } from './Container.cn';

export const Container = (props: ContainerTypes): JSX.Element => {
	return <div className={classes(props.cn)}>{props.children}</div>;
};
