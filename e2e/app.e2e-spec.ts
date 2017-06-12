import { AngularQuizPage } from './app.po';

describe('angular-quiz App', () => {
  let page: AngularQuizPage;

  beforeEach(() => {
    page = new AngularQuizPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
