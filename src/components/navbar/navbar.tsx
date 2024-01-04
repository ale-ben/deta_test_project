import { MainNav } from './navbarComponents/MainNav';
import { Fuel } from 'lucide-react';

//  import NavbarButton from './navbarComponents/navbarButton';
import DarkModeToggle from './navbarComponents/darkModeToggle';

interface NavbarElems {
	name: string;
	href: string;
}

const navbarElems: NavbarElems[] = [
	{
		name: 'Home',
		href: '/'
	}
];

const FLNavbar = () => {
	return (
		<>
			<div className="hidden flex-col md:flex">
				<div className="border-b">
					<div className="flex h-16 items-center px-4">
					   <Fuel className='mr-2'/>
						<a className='text-xl'>Fuel Logger</a>
						<MainNav className="mx-6" />
						<div className="ml-auto flex items-center space-x-4">
							<DarkModeToggle/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default FLNavbar;
