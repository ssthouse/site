var debug = require('debug')('lib:compile-inline-scripts');
var cheerio = require('cheerio');
var _ = require('lodash');
var babel = require('babel-core');
var beautify = require('js-beautify').js;

module.exports = function (str, wrapping) {
  var $ = wrapping ? cheerio.load(`<html><head></head><body>${str}</body></html>`) : cheerio.load(str);
  $('script').each(function () {
    var $script = $(this);
    var code = _.trim($script.html());
    
    if (code) {
      debug('inline script being transformed');
      var result = babel.transform(code, {
        babelrc: false,
        presets: [
          ['es2015', { 'modules': false }],
          'react',
          'stage-0'
        ],
      });
      debug('inline script transformed');
      // debug(result.code);
      // $script.innerHTML = `\n${result.code}\n`;
      var beautified = beautify(result.code, {
        indent_level: 1,
        indent_size: 2,
        keep_array_indentation: true,
        space_in_empty_paren: true
      });
      $script.text(`\n${beautified}\n`);
    }
  });
  // const $codeDefault = $('textarea#code-default');
  // debug($codeDefault.html());
  return wrapping ? $('body').html() : $.html();
};
