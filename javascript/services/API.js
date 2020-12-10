class API {

    static addPositions(){
        fetch("http://localhost:3000/positions")
        .then(resp => resp.json())
        .then(positions => {
            positions.forEach(position => {
                const{id, title, company_name, location, description, applied, applied_date}
                new Position(id, title, company_name, location, description, applied, applied_date)
            })
        })
    }

    constructor addContacts(){
        fetch("http://localhost:300contactss")
        .then(resp => resp.json())
        .then(contacts => {
            contacts.forEach(contact => {
                const{id, first_name, company_name, last_name, email, job_title, user_id}
                new Position(id, first_name, company_name, last_name, email, job_title, user_id)
            })
        })
    }
}