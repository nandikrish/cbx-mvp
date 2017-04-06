import { browser, element, by } from 'protractor';

export class CbxMvpPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('cbx-root h1')).getText();
  }
}
