import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { navItems } from "../constants/index";

export const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    };

    return (
        <nav className="sticky top-0 z-50 backdrop-blur-lg border-b border-neutral-700/80">
            <div className="px-4 mx-auto relative text-sm">
                <div className="flex justify-between items-center py-3">
                    {/* Logo */}
                    <div className="flex items-center flex-shrink-0">
                        <img className="h-12 w-12 mr-2" src={logo} alt="logo" />
                        <span className="text-xl tracking-tight">VirtualR</span>
                    </div>

                    {/* Desktop Menu */}
                    <ul className="hidden lg:flex ml-14 space-x-12">
                        {navItems.map((item, index) => (
                            <li key={index}>
                                <a
                                    href={item.href}
                                    className="hover:text-orange-500 cursor-pointer"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Desktop Buttons */}
                    <div className="hidden lg:flex justify-center space-x-6 items-center">
                        <button className="px-4 py-2 bg-black text-white border rounded-md cursor-pointer hover:text-orange-500">
                            Sign Up
                        </button>
                        <button className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md text-white  cursor-pointer">
                            Create an account
                        </button>
                    </div>

                    {/* Mobile Menu Button (visible below lg) */}
                    <div className="lg:hidden">
                        <button onClick={toggleNavbar} aria-label="Toggle menu">
                            {mobileDrawerOpen ? (
                                <X size={28} />
                            ) : (
                                <Menu size={28} />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Drawer */}
                {mobileDrawerOpen && (
                    <div className="lg:hidden position-fixed  z-0 bg-neutral-900 flex flex-col items-center justify-center p-8 ">
                        <ul className="space-y-6 text-lg text-center">
                            {navItems.map((item, index) => (
                                <li key={index}>
                                    <a
                                        href={item.href}
                                        className="text-white hover:text-orange-500 transition-colors"
                                        onClick={() =>
                                            setMobileDrawerOpen(false)
                                        } // close on click
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-8 flex flex-col space-y-4 w-full max-w-xs">
                            <button className="w-full px-4 py-2 bg-black text-white border border-orange-600 rounded-md cursor-pointer hover:text-orange-500 hover:border-orange-500 transition-colors">
                                Sign Up
                            </button>
                            <button className="w-full bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md text-white cursor-pointer hover:from-orange-400 hover:to-orange-700 transition-colors">
                                Create an account
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

