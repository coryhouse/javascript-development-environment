import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';
import index from './index';

describe('Our first test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});

it('has document', function () {
  const html = '<!doctype html><html><body></body></html>';
  global.document = jsdom.env(html, function(err, window) {
    var div = window.document.createElement('div');
    expect(div.nodeName).eql('DIV');
    // free memory associated with the window
    window.close();
  });
});

describe('jsdom test', () => {
  it('should pass', (done) => {
    const indexHtml = fs.readFileSync('./src/index.html', "utf-8");
    jsdom.env(indexHtml, [index], function (err, window) {
      const h2 = window.document.getElementById('main-heading');
      expect(h2.innerHTML).to.equal("Fuel Savings Calculator");
      done();
      // free memory associated with the window
      window.close();
    });
  });
});
