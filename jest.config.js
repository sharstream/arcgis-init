module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
        '^.+\\.vue$': '@vue/vue3-jest',
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.jsx?$',
    trasnformIgnorePatterns: ['/node_modules/?!(@arcgis|@esri|@)]'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node', 'vue'],
    extensionsToTreatAsEsm: ['.ts', '.vue'],
    globals: {
        '@vue/vue3-jest': {
            compilerOptions: {
                isCustomElement: (tag) => tag.includes('calcite-'),
            }
        }
    }
}