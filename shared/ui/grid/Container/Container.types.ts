import { HTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface ContainerTypes extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	children: ReactNode;
	cn?: {
		padding?: string;
	};
}
