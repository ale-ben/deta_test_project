import './globals.css';
import type { Metadata } from 'next';
import { Providers } from './providers';
import FLNavbar from './components/navbar';

export const metadata: Metadata = {
	title: 'Fuel Logger',
	description: 'Tool for tracking fuel consumption of a vehicle'
};

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html suppressHydrationWarning lang="en" className="dark">
			<body className="flex h-screen w-screen flex-col">
				<Providers>
					<FLNavbar />
					<div className="h-full w-full overflow-hidden">
						{children}
					</div>
				</Providers>
			</body>
		</html>
	);
}
