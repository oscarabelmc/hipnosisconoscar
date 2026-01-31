// @ts-check
import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    i18n: {
        locales: ["es", "en"],
        defaultLocale: "es",
    },
    server: {
        allowedHosts: ['hipnosisconoscar.com', 'zorro12.local'],
    },

    vite: {
        plugins: [tailwindcss()],
        resolve: {
            alias: {
                '@': path.resolve(fileURLToPath(import.meta.url), '../src'),
            },
        },
    },
});
