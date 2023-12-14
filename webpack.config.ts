module.exports = {
    // ... other configuration options
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'ts-loader',
            options: {
              transpileOnly: true, // set to true if using fork-ts-checker-webpack-plugin for type checking
            },
          },
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    // ... other configuration options
  };
