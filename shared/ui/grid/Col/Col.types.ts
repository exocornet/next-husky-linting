import { HTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface ColTypes extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children: ReactNode;
	cn?: {
		col?: string;
		offset?: string;
		order?: string;
		justify?: string;
		alignSelf?: string;
		margin?: string;
		padding?: string;
		display?: string;
		direction?: string;
		gap?: string;
		inheritedClass?: string;
	};
}
