import Link from 'next/link';
import { Container, Row, Col } from '../../shared';

export const Header = () => {
	return (
		<header>
			<Container>
				<Row>
					<Col>
						<nav>
							<Link href='#'>Home</Link>
							<Link href='#'>Blog</Link>
							<Link href='#'>About</Link>
						</nav>
					</Col>
					<Col>
						<nav>
							<Link href='#'>Home</Link>
							<Link href='#'>Blog</Link>
							<Link href='#'>About</Link>
						</nav>
					</Col>
					<Col>
						<nav>
							<Link href='#'>Home</Link>
							<Link href='#'>Blog</Link>
							<Link href='#'>About</Link>
						</nav>
					</Col>
				</Row>
			</Container>
		</header>
	);
};
