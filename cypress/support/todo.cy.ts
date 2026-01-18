/// <reference types="cypress" />

describe('Aplicación To-Do', () => {
  it('debería permitir agregar una nueva tarea', () => {
    cy.visit('http://localhost:5173'); 

    cy.get('input[placeholder="Escribe tu tarea"]').type('Estudiar Cypress');
    cy.contains('Agregar').click();
    cy.get('li').should('contain.text', 'Estudiar Cypress');
  });
});
