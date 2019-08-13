import { terser } from 'rollup-plugin-terser';

export default [
  {
    input: './index.js',
    plugins: [terser()],
    output: {
      file: 'umd/DateLib.js',
      format: 'umd',
      name: 'MathLib',
      esModule: false
    }
  },
  {
    input: './index.js',
    output: {
      file: 'esm/MathLib.js',
      format: 'esm'
    }
  }
];