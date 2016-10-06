import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('Our first test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});

it('has document', function () {
  jsdom();
  var div = document.createElement('div')
  expect(div.nodeName).eql('DIV')
});

describe('jsdom test', () => {
  it('should pass', (done) => {
    const index = fs.readFileSync('./src/index.html', "utf-8");
    jsdom.env(index, function (err, window) {
      const h2 = window.document.getElementById('main-heading');
      expect(h2.innerHTML).to.equal("Fuel Savings Calculator");
      done();
      // free memory associated with the window
    });
  });
});
