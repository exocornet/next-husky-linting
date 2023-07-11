import { HTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface RowTypes extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children: ReactNode;
	cn?: {
		rowCols?: string;
		justify?: string;
		alignItems?: string;
		alignContent?: string;
		gap?: string;
		gutters?: string;
		margin?: string;
		inheritedClass?: string;
		direction?: string;
	};
}
