import { ColTypes } from './Col.types';
import { classes } from './Col.cn';

export const Col = (props: ColTypes): JSX.Element => {
	// получение классов для col
	const styles = classes(props.bem);

	return <div className={styles.col}>{props.children}</div>;
};
