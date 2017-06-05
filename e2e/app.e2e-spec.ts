import { MovieStorePage } from './app.po';

describe('movie-store App', function() {
  let page: MovieStorePage;

  beforeEach(() => {
    page = new MovieStorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
