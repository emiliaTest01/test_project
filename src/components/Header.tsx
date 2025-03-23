import Link from 'next/link';

const Header = () => {
    return (
        <header className="bg-blue-600 text-white py-4 shadow-md">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
                <div className="text-2xl font-semibold">
                    <Link href="/" className="hover:underline">
                        My Blog
                    </Link>
                </div>
                <nav>
                    <ul className="flex space-x-6 md:space-x-8">
                        <li>
                            <Link href="/" className="hover:text-gray-300">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="hover:text-gray-300">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:text-gray-300">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
