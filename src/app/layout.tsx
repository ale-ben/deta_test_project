import './globals.css';
import type { Metadata } from 'next';
import { Providers } from './providers';
import { Inter as FontSans } from 'next/font/google';
import { cn } from '@/lib/utils';
import Navbar from '@/components/navbar/navbar';

export const fontSans = FontSans({
	subsets: ['latin'],
	variable: '--font-sans'
});

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
			<body
				className={cn(
					'min-h-screen bg-background font-sans antialiased',
					fontSans.variable
				)}
			>
				<Providers>
					<Navbar />
					<div className="h-full w-full overflow-hidden">
						{children}
					</div>
				</Providers>
			</body>
		</html>
	);
}
