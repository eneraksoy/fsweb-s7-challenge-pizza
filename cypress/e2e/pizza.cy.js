describe('Main Page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:5173/');
    });

    it('should display the main page correctly', () => {
        cy.get('a[href="/orderpage"]').first().click();
        cy.url().should('include', '/orderpage');
    });
});

describe('Order Page', () => {
    beforeEach(() => {
        cy.visit('localhost:5173/orderpage')
    })

    it('should submit order form', () => {
        cy.get('input[name="isim"]').type('John Doe')
        cy.get('select[name="hamurKalinligi"]').select('Kalın')
        cy.contains('Position Absolute Acı Pizza')
    })
})

describe('Success Page', () => {
    beforeEach(() => {
        cy.visit('localhost:5173/successpage')
    })

    it('should display the success message', () => {
        cy.contains('Siparişiniz Alındı')
    })
})
