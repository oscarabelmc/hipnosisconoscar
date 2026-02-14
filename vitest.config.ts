import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        environment: 'jsdom',
        globals: true,
        include: ['__test__/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
        coverage: {
            reporter: ['text', 'json', 'html'],
            exclude: ['node_modules/', '__test__/'],
        },
    },
});
