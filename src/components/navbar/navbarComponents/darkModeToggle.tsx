'use client';

import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { LuMoon, LuSun } from "react-icons/lu";

const DarkModeToggle = () => {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	// When mounted on client, now we can show the UI
	// See here to know why https://github.com/pacocoursey/next-themes#avoid-hydration-mismatch
	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return (
			<Button variant="outline" size="icon">
				<LuMoon className="text-xl" />
			</Button>
		);
	}

	return (
		<Button
			variant="outline"
			size="icon"
			onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
		>
			{theme === 'light' ? (
				<LuMoon className="text-xl" />
			) : (
				<LuSun className="text-xl" />
			)}
		</Button>
	);
};

export default DarkModeToggle;
