/// <reference types="cypress" />

describe("API Testing Eduwork",()=>{
    it('Get Single User', () => {
        cy.request({
            method:'GET',
            url:"https://reqres.in/api/users/2"
        }).as("user")
        cy.get("@user").its("status").should("equal",200)
    });

    it('Create New User', () => {
        var user = {
                "name":"ilham wafiq",
                "job":"software tester"
        }

    cy.request("POST","https://reqres.in/api/users", user).then((response)=>{
        expect(response.status).equal(201);
        expect(response.body.name).equal("ilham wafiq")
    })
    });

    it('Update User', () => {
        var user = {
             "name": "morpheus",
              "job": "qa automation"
    }

cy.request("PUT","https://reqres.in/api/users/2", user).then((response)=>{
    expect(response.status).equal(200);
    expect(response.body.job).to.eq(user.job)
});
});
it('Delete User', () => {
    cy.request("DELETE","https://reqres.in/api/users/2").then((response)=>{
        expect(response.status).equal(204)
    })
});
});