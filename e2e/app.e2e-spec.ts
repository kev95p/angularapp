import { ComponenteEjemploPage } from './app.po';

describe('componente-ejemplo App', () => {
  let page: ComponenteEjemploPage;

  beforeEach(() => {
    page = new ComponenteEjemploPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
