const path = require('./src/index');

module.exports = {
  entry: './src/index.ts', // Assuming your entry point is in the 'src' directory
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        // use: 'ts-loader',
        exclude: /node_modules/,
        test: /\.txt$/,
         use: 'raw-loader'
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  // Add any plugins or additional configurations as needed
};
  
