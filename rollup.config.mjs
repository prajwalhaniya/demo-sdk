export default {
    input: "build/index.js",
    output: [
        {
            file: "package/index.js",
            format: "esm"
        },
        {
            file: "package/index.cjs",
            format: "cjs"
        }
    ],
    onwarn(warning, warn) {
        if (warning.code === 'THIS_IS_UNDEFINED') return;
        warn(warning);
    },
    context: 'this'
}