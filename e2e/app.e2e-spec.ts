import { CbxMvpPage } from './app.po';

describe('cbx-mvp App', () => {
  let page: CbxMvpPage;

  beforeEach(() => {
    page = new CbxMvpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('cbx works!');
  });
});
