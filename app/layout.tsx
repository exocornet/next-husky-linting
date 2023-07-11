import './style.scss';
import React from 'react';
import { Header, Footer } from '../sections';
import { Providers } from '../shared/redux/provider';

export const metadata = {
	title: 'Уралсиб',
	description: 'uralsib',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='ru'>
			<body>
				<Providers>
					<Header />
					<main>{children}</main>
					<Footer />
				</Providers>
			</body>
		</html>
	);
}
