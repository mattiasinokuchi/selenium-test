const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

const driver = new webdriver.Builder()
    .forBrowser('firefox')
    .build();
driver.get('https://duckduckgo.com/');

driver.findElement(By.name('q')).sendKeys('webdriver');

driver.sleep(1000).then(function() {
  driver.findElement(By.name('q')).sendKeys(webdriver.Key.TAB);
  driver.findElement(By.name('q')).sendKeys(webdriver.Key.ENTER);
});

driver.sleep(5000).then(function() {
  driver.getTitle().then(function(title) {
    if(title === 'webdriver at DuckDuckGo') {
      console.log('Test passed');
    } else {
      console.log('Test failed');
    }
    driver.quit();
  });
});

