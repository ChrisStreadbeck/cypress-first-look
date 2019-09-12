context("My Todo App Tests", function() {
  beforeEach(function() {
    cy.visit("http://todomvc.com/examples/react-backbone/");
  });

  it("should add a todo", function() {
    cy.get("input.new-todo").type("already done{enter}");
    cy.contains("already done");
  });
});
