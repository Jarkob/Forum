/**
 * Temporary fix. See https://github.com/angular/angular/issues/9359
 */

const Builder = require('systemjs-builder');

export = (done: any) => {
  const options = {
    normalize: true,
    runtime: false,
    sourceMaps: true,
    sourceMapContents: true,
    minify: true,
    mangle: false
  };
  const builder = new Builder('./');
  builder.config({
    paths: {
      'n:*': 'node_modules/*',
      'rxjs/*': 'node_modules/rxjs/*.js',
      'rxjs/operators': 'node_modules/rxjs/operators.js',
      // doesn't help
      // 'rxjs/ajax': 'node_modules/rxjs/ajax/index.js',
      // 'rxjs/internal-compatibility': 'node_modules/rxjs/internal-compatibility/index.js',
      // 'rxjs/operators': 'node_modules/rxjs/operators/index.js',
      // 'rxjs/testing': 'node_modules/rxjs/testing/index.js',
      // 'rxjs/webSocket': 'node_modules/rxjs/webSocket/index.js',
    },
    map: {
      'rxjs': 'n:rxjs',
    },
    packages: {
      'rxjs': {main: 'Rx.js', defaultExtension: 'js'},
    }
  });
  builder.bundle('rxjs', 'node_modules/.tmp/Rx.min.js', options)
    .then(() => done())
    .catch((error: any) => done(error));
};
