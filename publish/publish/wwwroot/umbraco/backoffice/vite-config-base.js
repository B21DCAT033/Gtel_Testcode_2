export const getDefaultConfig = (args) => {
    return {
        build: {
            target: 'es2022',
            lib: {
                entry: args.entry || ['index.ts', 'manifests.ts', 'umbraco-package.ts'],
                formats: ['es'],
            },
            outDir: args.dist,
            sourcemap: true,
            rollupOptions: {
                external: [/^@umbraco/],
            },
        },
        plugins: args.plugins,
    };
};
