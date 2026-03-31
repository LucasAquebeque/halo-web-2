import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                halo: {
                    teal: '#005671', //Color primario Halo
                    teal80: '#336E86',
                    teal60: '#668AA1',
                    teal40: '#99A7BB',
                    teal10: '#E6F0F4',
                    gray: '#555559', //Color secundario
                    gray60: '#888890',
                    gray20: '#DDDDE0',
                    black: '#141416',
                    white: '#FFFFFF',
                    offwhite: '#F7F7F6',
                },
            },
        },
    },
    plugins: [],
};

export default config;