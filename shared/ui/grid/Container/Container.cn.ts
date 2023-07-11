import { cn } from '../../../helpers/react/ClassBem';
import { ContainerTypes } from './Container.types';

export function classes(props?: ContainerTypes['cn']) {
	// Определение блока 'container'
	const BLOCK = cn('container');

	// Блок 'container'
	return BLOCK({}, [props && props.padding]);
}
