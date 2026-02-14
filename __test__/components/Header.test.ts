import { describe, it, expect, beforeEach } from 'vitest';

describe('Header Component - Menu Items', () => {
    const expectedMenuItems = [
        { href: '#inicio', label: 'Inicio' },
        { href: '#nosotros', label: 'Nosotros' },
        { href: '#contacto', label: 'Contacto' },
        { href: '#especialidades', label: 'Especialidades' },
    ];

    beforeEach(() => {
        document.body.innerHTML = `
            <div id="collapsible-menu" role="navigation" aria-label="Navegación principal">
                <nav class="flex flex-col items-center py-8 gap-6">
                    <a href="#inicio" class="text-white font-serif text-xl hover:text-primary transition-colors duration-200">Inicio</a>
                    <a href="#nosotros" class="text-white font-serif text-xl hover:text-primary transition-colors duration-200">Nosotros</a>
                    <a href="#contacto" class="text-white font-serif text-xl hover:text-primary transition-colors duration-200">Contacto</a>
                    <a href="#especialidades" class="text-white font-serif text-xl hover:text-primary transition-colors duration-200">Especialidades</a>
                </nav>
            </div>
        `;
    });

    it('should have exactly 4 menu items', () => {
        const menuLinks = document.querySelectorAll('#collapsible-menu nav a');
        expect(menuLinks.length).toBe(4);
    });

    it('should have all expected menu items with correct hrefs', () => {
        const menuLinks = document.querySelectorAll('#collapsible-menu nav a');
        const actualHrefs = Array.from(menuLinks).map((link) => link.getAttribute('href'));

        expectedMenuItems.forEach((item) => {
            expect(actualHrefs).toContain(item.href);
        });
    });

    it('should have all expected menu items with correct labels', () => {
        const menuLinks = document.querySelectorAll('#collapsible-menu nav a');
        const actualLabels = Array.from(menuLinks).map((link) => link.textContent?.trim());

        expectedMenuItems.forEach((item) => {
            expect(actualLabels).toContain(item.label);
        });
    });

    it('should have menu in correct order: Inicio, Nosotros, Contacto, Especialidades', () => {
        const menuLinks = document.querySelectorAll('#collapsible-menu nav a');
        const actualOrder = Array.from(menuLinks).map((link) => link.textContent?.trim());

        expect(actualOrder).toEqual(['Inicio', 'Nosotros', 'Contacto', 'Especialidades']);
    });
});
