'use strict';

const assert = require('assert');

let webdriver = require('selenium-webdriver'),
  By = webdriver.By,
  until = webdriver.until;

describe('Alert', () => {
  it('should have the correct text content - this is from the first button', async function () {
    let driver = new webdriver.Builder()
      .withCapabilities(webdriver.Capabilities.firefox())
      .build();
    await driver.get('http://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html')
    const button = await driver.findElement(By.css('button:nth-of-type(1)'));
    await button.click();
    const alert = await driver.switchTo().alert();
    const text = await alert.getText();
    assert.strictEqual(text, 'This is from the first button');
    driver.quit();
  });
});
