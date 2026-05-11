import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig(() => {
    return {
        base: '/portfolio-proj/',
        server: {
            host: '0.0.0.0',
            port: 5173,
            hmr: {
                host: 'localhost',
                port: 5173,
            }
        },
        build: {
            outDir: 'build',
        },
        plugins: [react({
            jsxImportSource: '@emotion/react',
            babel: {
                plugins: ['@emotion/babel-plugin'],
            },
        }),
            svgr({ svgrOptions: { icon: true } }),
        ],
    };
});