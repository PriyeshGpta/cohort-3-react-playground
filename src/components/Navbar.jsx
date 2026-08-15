import { NavLink } from "react-router";

const Navbar = () => {
    const navItems = [
        { name: "Home", path: "/main" },
        { name: "About", path: "/main/about" },
        { name: "Services", path: "/main/services" },
        { name: "Contact Us", path: "/main/contact" },
    ];

    return (
        <nav className="border-b border-slate-800 bg-slate-950/80">
            <div className="w-full flex h-16 items-center justify-between px-6">
                <NavLink
                    to="/main"
                    className="text-xl font-bold tracking-tight text-white"
                >
                    MyPlatform
                </NavLink>

                <div className="flex items-center gap-1 rounded-xl border border-slate-800 bg-slate-900/60 p-1">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            end
                            className={({ isActive }) =>
                                `rounded-lg px-4 py-2 text-sm font-medium transition-all ${isActive
                                    ? "bg-indigo-500/15 text-indigo-400"
                                    : "text-slate-400 hover:bg-slate-800 hover:text-slate-100"
                                }`
                            }
                        >
                            {item.name}
                        </NavLink>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;