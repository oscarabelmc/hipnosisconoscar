import type { Config } from 'tailwindcss';

export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Red Hat Text', 'system-ui', 'sans-serif'],
                serif: ['Parisienne', 'Georgia', 'serif'],
                arimo: ['Arimo', 'sans-serif'],
                parisienne: ['Parisienne', 'cursive'],
                'red-hat-text': ['Red Hat Text', 'sans-serif'],
            },
        },
    },
    plugins: [],
} satisfies Config;
