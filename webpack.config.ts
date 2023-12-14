module.exports = {
    // ... other configuration options
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          use: {
            loader: 'ts-loader',
            // options: { // Remove transpileOnly temporarily
            //   transpileOnly: true,
            // },
          },
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    // ... other configuration options
  };
  
