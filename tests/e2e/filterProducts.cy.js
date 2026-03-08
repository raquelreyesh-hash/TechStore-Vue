describe("Filtro de productos", () => {

it("usuario puede filtrar productos por categoria", () => {

cy.visit("http://localhost:8080")

cy.contains("Catálogo de Productos")

cy.get("select").select("electronics")

cy.wait(1000)

cy.contains("electronics")

})

})