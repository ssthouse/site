var debug = require('debug')('lib:compile-inline-scripts');
var cheerio = require('cheerio');
var _ = require('lodash');
var babel = require('babel-core');

module.exports = function (str, wrapping) {
  var $ = wrapping ? cheerio.load(`<html><head></head><body>${str}</body></html>`) : cheerio.load(str);
  $('script').each(function () {
    const $script = $(this);
    const code = _.trim($script.html());
    if (code) {
      debug('inline script being transformed');
      var result = babel.transform(code, {
        babelrc: false,
        presets: ['es2015', 'react', 'stage-0'],
      });
      debug('inline script transformed');
      $script.html(`\n${result.code}\n`);
    }
  });
  const $codeDefault = $('textarea#code-default');
  debug($codeDefault.html());
  return wrapping ? $('body').html() : $.html();
};
