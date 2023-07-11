import { RowTypes } from './Row.types';
import { classes } from './Row.cn';

export const Row = (props: RowTypes): JSX.Element => {
	// получение классов для row
	const styles = classes(props.cn);

	return <div className={styles.row}>{props.children}</div>;
};
