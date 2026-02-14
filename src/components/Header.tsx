import { useState, useEffect, useCallback } from 'react';

interface HeaderProps {
    className?: string;
}

export default function Header({ className = '' }: HeaderProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = useCallback(() => {
        const scrollPosition = window.scrollY;
        const viewportHeight = window.innerHeight;
        const scrollThreshold = viewportHeight * 0.3;
        setIsScrolled(scrollPosition >= scrollThreshold);
    }, []);

    useEffect(() => {
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    const toggleMenu = () => setIsMenuOpen((prev) => !prev);

    const closeMenu = () => setIsMenuOpen(false);

    const navLinks = [
        { href: '#inicio', label: 'Inicio' },
        { href: '#nosotros', label: 'Nosotros' },
        { href: '#contacto', label: 'Contacto' },
    ];

    return (
        <header role="banner" className={`fixed top-0 left-0 right-0 z-50 ${className}`}>
            <div
                className={`absolute inset-0 h-30 transition-all duration-300 bg-secondary/80 ${
                    isScrolled ? 'opacity-60 backdrop-blur-2xl' : 'opacity-0 backdrop-blur-none'
                }`}
            />

            <div className="relative z-10">
                <div className="container-xl flex justify-between items-center">
                    <figure className="max-w-55">
                        <a href="#inicio" aria-label="Ir al inicio" className="block">
                            <img
                                src="/svgs/banner-hco.svg"
                                alt="Oscar Abel Mascareno Cervantes - Psicólogo"
                                className="w-full drop-shadow-md"
                            />
                        </a>
                    </figure>

                    <button
                        onClick={toggleMenu}
                        className="inline-flex items-center justify-center size-12 p-2 bg-transparent border-2 border-white/30 rounded-lg hover:bg-white/10 transition-colors"
                        aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
                        aria-expanded={isMenuOpen}
                        aria-controls="collapsible-menu"
                    >
                        <img src="/svgs/menu-icon.svg" alt="Menú principal" className="w-6 h-6" />
                    </button>
                </div>

                <div
                    id="collapsible-menu"
                    className={`absolute top-full left-0 right-0 bg-secondary/95 backdrop-blur-md transform transition-all duration-300 ease-in-out shadow-lg overflow-hidden ${
                        isMenuOpen
                            ? 'max-h-96 opacity-100 translate-y-0'
                            : 'max-h-0 opacity-0 -translate-y-4'
                    }`}
                    role="navigation"
                    aria-label="Navegación principal"
                >
                    <nav className="flex flex-col items-center py-8 gap-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={closeMenu}
                                className="text-white font-serif text-xl hover:text-primary transition-colors duration-200"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
        </header>
    );
}
