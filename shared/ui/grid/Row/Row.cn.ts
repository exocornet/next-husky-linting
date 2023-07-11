import { cn } from '../../../helpers/react/ClassBem';
import { RowTypes } from './Row.types';

export function classes(props?: RowTypes['cn']) {
	// Определение блока 'row'
	const block = cn('row');

	// Блок 'row'
	const row = block({}, [
		props?.rowCols,
		props?.justify,
		props?.alignItems,
		props?.alignContent,
		props?.gap,
		props?.gutters,
		props?.margin,
		props?.inheritedClass,
		props?.direction,
	]);

	return {
		row,
	};
}
