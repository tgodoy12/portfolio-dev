const Navbar = () => {
    const navItems = [
        { name: "Home", id: "home" },
        { name: "About", id: "about" },
        { name: "Projects", id: "projects" },
        { name: "Contact", id: "contact" }
    ];

    return (
        <nav className="fixed top-0 left-0
            py-4 w-screen backdrop-blur-3xl">
            <ul className="flex justify-center space-x-20">
                {navItems.map((item) => (
                    <li key={item.id}>
                        <a 
                            href={`#${item.id}`} 
                            className="text-2xl 
                                hover:text-gray-300 transition duration-300"
                        >
                            {item.name}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;