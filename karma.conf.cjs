// karma.conf.js
const webpack = require('webpack');

module.exports = function (config) {
 config.set({
   frameworks: ['jasmine'],
   files: [
     'src/test/setupTests.js',
     'src/test/**/*.spec.jsx'
   ],
   preprocessors: {
     'src/test/setupTests.js': ['webpack'],
     'src/test/**/*.spec.jsx': ['webpack']
   },
   webpack: {
     mode: 'development',
     plugins: [
       // Vite entrega import.meta.env, pero webpack (Karma) no lo conoce.
       // Lo definimos aqui para que los componentes que usan BASE_URL funcionen en las pruebas.
       new webpack.DefinePlugin({
         'import.meta.env': JSON.stringify({ BASE_URL: '/', MODE: 'test' }),
       }),
     ],
     module: {
       rules: [
         {
           test: /\.jsx?$/,
           exclude: /node_modules/,
           use: {
             loader: 'babel-loader',
             options: {
               presets: ['@babel/preset-env', '@babel/preset-react'],
             },
           },
         },
         {
           test: /\.css$/,
           use: ['style-loader', 'css-loader'],
         },
       ],
     },
     resolve: {
       extensions: ['.js', '.jsx'],
     },
   },
   reporters: ['progress', 'kjhtml', 'coverage'],
   coverageReporter: {
     type: 'html',
     dir: 'coverage/',
   },
   browsers: ['ChromeHeadless'],
   singleRun: true,
   restartOnFileChange: true,
   plugins: [
     'karma-jasmine',
     'karma-webpack',
     'karma-chrome-launcher',
     'karma-coverage',
     'karma-jasmine-html-reporter'
   ]
 });
};
