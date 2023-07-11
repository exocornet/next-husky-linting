import { cn } from '../../../helpers/react/ClassBem';
import { ColTypes } from './Col.types';

export function classes(props?: ColTypes['cn']) {
	// определение назначенного нестандартного сласса '.col'
	const cols = props?.cols ? props.cols : 'col-12';

	// Определение блока 'col'
	const block = cn('col');

	// Блок 'col'
	const col = block({}, [
		cols,
		props?.offset,
		props?.order,
		props?.justify,
		props?.alignSelf,
		props?.margin,
		props?.padding,
		props?.display,
		props?.direction,
		props?.gap,
		props?.inheritedClass,
	]);

	return {
		col,
	};
}
