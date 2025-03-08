import UserIcon from "../components/icons/userIcon"
// import ProjectIcon from "./icons/projectIcon";
import ExperienceIcon from "./icons/experienceIcon";
import SkillsIcon from "./icons/skillsIcon";
import Suitcase from "./icons/suitcase.svg"


const Navbar = () => {
    const navItems = [
        { name: "About", id: "about", icon: <UserIcon className="overflow-visible" size={24} color="black" /> },
        { name: "Projects", id: "projects", icon: Suitcase},
        { name: "Experience", id: "experience", icon: <ExperienceIcon size={24} color="black" /> },
        { name: "Skills", id: "skills", icon: <SkillsIcon size={24} color="black" /> }
    ];

    return (
        <nav className="fixed top-0 left-0
            px-4 w-20 h-screen backdrop-blur-3xl">
            <ul className="space-y-20">
                {navItems.map((item) => (
                    <li key={item.id}>
                        <a 
                            href={`#${item.id}`} 
                            className="text-2xl 
                                hover:text-gray-300 transition duration-300"
                        >
                            {item.icon}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;