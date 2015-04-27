var gulp = require('gulp');
var path = require('path');
var devGulpTasks = require('grommet/utils/gulp-tasks');

var opts = {
  base: '../../',
  dist: path.resolve(__dirname, '../../docs/dist/hpe'),
  copyAssets: [
    'docs/src/index.html',
    {
      asset: 'docs/src/style_guide/img/**',
      dist: 'docs/dist/hpe/img/'
    },
    {
      asset: 'src/img/**',
      dist: 'docs/dist/hpe/img/'
    },
    {
      asset: 'docs/src/img/**',
      dist: 'docs/dist/hpe/img/'
    },
    {
      asset: 'docs/src/documentation/img/**',
      dist: 'docs/dist/hpe/img/'
    },
    {
      asset: 'src/scss/hpe/font/**',
      dist: 'docs/dist/hpe/font/'
    }
  ],
  scssAssets: ['src/scss/grommet-core/**/*.scss', 'docs/src/scss/**/*.scss', 'src/scss/hpe/**/*.scss'],
  jsAssets: ['docs/src/**/*.js'],
  mainJs: 'docs/src/index.js',
  mainScss: 'docs/src/scss/index-hpe.scss',
  sync: {
    hostname: 'grommet.usa.hp.com',
    username: 'ligo',
    remoteDestination: '/var/www/html/doc/hpe'
  },
  webpack: {
    resolve: {
      root: [
        path.resolve(__dirname, '../../src/js'),
        path.resolve(__dirname, '../../src/lib'),
        path.resolve(__dirname, '../src/scss'),
        path.resolve(__dirname, '../../src/scss'),
        path.resolve(__dirname, '../../node_modules')
      ]
    }
  },
  devServerPort: 8003,
  devServerProxy: {
    "/rest/*": 'http://localhost:8000'
  },
  env: {
    __THEME__: {
      hpe: true
    }
  },
  watch: {
    path: path.resolve(__dirname, '../../src/js/**'),
    dist: path.resolve(__dirname, '../../dist')
  }
};

devGulpTasks(gulp, opts);
