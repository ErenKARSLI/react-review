describe('Ana Sayfa testi', () => {
    it('Home sayfasını ziyaret eder ve "Ana Sayfa" başlığını görür', () => {
      cy.visit('http://localhost:3000');
      cy.contains('Ana Sayfa').should('exist');
    });
  });
  