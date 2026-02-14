import { describe, it, expect, beforeEach } from 'vitest';

describe('Header Component', () => {
    beforeEach(() => {
        // Setup DOM structure for testing
        document.body.innerHTML = `
            <header role="banner">
                <div id="header-overlay" class="bg-black opacity-0 fixed top-0 left-0 right-0 z-10 h-24 transition-opacity duration-300"></div>
                <div class="fixed top-0 left-0 right-0 z-20">
                    <div class="mx-auto max-w-6xl px-4 flex justify-between items-center h-24">
                        <figure class="max-w-55">
                            <a href="#inicio" aria-label="Ir al inicio">
                                <img src="/images/main-logo.webp" alt="Oscar Abel Mascareno Cervantes - Psicólogo" class="w-full" />
                            </a>
                        </figure>
                        
                        <!-- Desktop Navigation -->
                        <nav class="hidden md:flex items-center gap-8" role="navigation" aria-label="Navegación principal">
                            <a href="#inicio" class="text-white font-arvo text-lg hover:text-primary transition-colors duration-200">Inicio</a>
                            <a href="#nosotros" class="text-white font-arvo text-lg hover:text-primary transition-colors duration-200">Nosotros</a>
                            <a href="#contacto" class="text-white font-arvo text-lg hover:text-primary transition-colors duration-200">Contacto</a>
                        </nav>
                        
                        <!-- Mobile Menu Button -->
                        <button 
                            id="menu-toggle" 
                            class="md:hidden inline-block max-w-12 p-1 bg-transparent border-none"
                            aria-label="Abrir menú de navegación"
                            aria-expanded="false"
                            aria-controls="mobile-menu"
                        >
                            <img src="/svgs/menu-icon.svg" alt="" class="w-full" aria-hidden="true" />
                        </button>
                    </div>
                    
                    <!-- Mobile Menu -->
                    <div 
                        id="mobile-menu" 
                        class="md:hidden fixed top-24 left-0 right-0 bg-black bg-opacity-95 transform -translate-y-full transition-transform duration-300 ease-in-out"
                        role="navigation" 
                        aria-label="Navegación móvil"
                    >
                        <nav class="flex flex-col items-center py-8 gap-6">
                            <a href="#inicio" class="mobile-nav-link text-white font-arvo text-xl hover:text-primary transition-colors duration-200">Inicio</a>
                            <a href="#nosotros" class="mobile-nav-link text-white font-arvo text-xl hover:text-primary transition-colors duration-200">Nosotros</a>
                            <a href="#contacto" class="mobile-nav-link text-white font-arvo text-xl hover:text-primary transition-colors duration-200">Contacto</a>
                        </nav>
                    </div>
                </div>
            </header>
        `;
    });

    describe('Structure', () => {
        it('should have a banner role', () => {
            const header = document.querySelector('header[role="banner"]');
            expect(header).toBeTruthy();
        });

        it('should have a header overlay element', () => {
            const overlay = document.getElementById('header-overlay');
            expect(overlay).toBeTruthy();
            expect(overlay?.classList.contains('fixed')).toBe(true);
        });

        it('should have a logo with link to home', () => {
            const logoLink = document.querySelector('a[href="#inicio"]');
            expect(logoLink).toBeTruthy();
            expect(logoLink?.getAttribute('aria-label')).toBe('Ir al inicio');
        });
    });

    describe('Desktop Navigation', () => {
        it('should have desktop navigation with correct role', () => {
            const desktopNav = document.querySelector(
                'nav[role="navigation"][aria-label="Navegación principal"]'
            );
            expect(desktopNav).toBeTruthy();
        });

        it('should have all three navigation links', () => {
            const links = document.querySelectorAll('nav[aria-label="Navegación principal"] a');
            expect(links.length).toBe(3);

            const hrefs = Array.from(links).map((link) => link.getAttribute('href'));
            expect(hrefs).toContain('#inicio');
            expect(hrefs).toContain('#nosotros');
            expect(hrefs).toContain('#contacto');
        });

        it('should have correct link text in Spanish', () => {
            const nav = document.querySelector('nav[aria-label="Navegación principal"]');
            const links = nav?.querySelectorAll('a');

            expect(links?.[0].textContent).toBe('Inicio');
            expect(links?.[1].textContent).toBe('Nosotros');
            expect(links?.[2].textContent).toBe('Contacto');
        });
    });

    describe('Mobile Navigation', () => {
        it('should have mobile menu toggle button', () => {
            const menuToggle = document.getElementById('menu-toggle');
            expect(menuToggle).toBeTruthy();
        });

        it('should have correct ARIA attributes on menu toggle', () => {
            const menuToggle = document.getElementById('menu-toggle');
            expect(menuToggle?.getAttribute('aria-label')).toBe('Abrir menú de navegación');
            expect(menuToggle?.getAttribute('aria-expanded')).toBe('false');
            expect(menuToggle?.getAttribute('aria-controls')).toBe('mobile-menu');
        });

        it('should have mobile menu with correct ID', () => {
            const mobileMenu = document.getElementById('mobile-menu');
            expect(mobileMenu).toBeTruthy();
        });

        it('should have mobile navigation with correct ARIA label', () => {
            const mobileNav = document.querySelector('#mobile-menu[role="navigation"]');
            expect(mobileNav?.getAttribute('aria-label')).toBe('Navegación móvil');
        });

        it('should have mobile navigation links with correct class', () => {
            const mobileLinks = document.querySelectorAll('.mobile-nav-link');
            expect(mobileLinks.length).toBe(3);
        });
    });

    describe('Accessibility', () => {
        it('should have alt text on logo image', () => {
            const logoImg = document.querySelector('figure img');
            expect(logoImg?.getAttribute('alt')).toBe('Oscar Abel Mascareno Cervantes - Psicólogo');
        });

        it('should have aria-hidden on decorative menu icon', () => {
            const menuIcon = document.querySelector('#menu-toggle img');
            expect(menuIcon?.getAttribute('aria-hidden')).toBe('true');
            expect(menuIcon?.getAttribute('alt')).toBe('');
        });

        it('should use semantic HTML elements', () => {
            expect(document.querySelector('header')).toBeTruthy();
            expect(document.querySelector('nav')).toBeTruthy();
            expect(document.querySelector('figure')).toBeTruthy();
        });
    });
});
