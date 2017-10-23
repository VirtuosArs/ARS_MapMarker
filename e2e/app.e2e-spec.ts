import { ARSMapMarkerPage } from './app.po';

describe('arsmap-marker App', () => {
  let page: ARSMapMarkerPage;

  beforeEach(() => {
    page = new ARSMapMarkerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
