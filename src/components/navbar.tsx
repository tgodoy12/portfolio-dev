import Home from "./icons/home.png"
import About from "./icons/about.png"
import Projects from "./icons/projects.png"
import Skills from "./icons/skills.png"

const Navbar = () => {
    const navItems = [
        { name: "About", id: "about", icon: Home },
        { name: "Projects", id: "projects", icon: About},
        { name: "Experience", id: "experience", icon: Projects },
        { name: "Skills", id: "skills", icon: Skills }
    ];

    return (
        <nav className="fixed flex top-0 left-0
            px-4 h-screen items-center">
            <ul className="space-y-20">
                {navItems.map((item) => (
                    <li key={item.id}>
                        <a 
                            href={`#${item.id}`} 
                            className="text-2xl 
                                hover:text-gray-300 transition duration-300"
                        >
                            
                            <img src={item.icon} className={`${item.id == 'skills' ? 'w-8' : 'w-7'}`} alt="" />
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;