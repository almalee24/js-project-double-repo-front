class API {

    static addPositions(){
        fetch("http://localhost:3000/positions")
         .then(resp => resp.json())
         .then(positions => {
            positions.forEach(position => {
                const{id, title, company_name, location, description, applied, applied_date} = position
                new Position(id, title, company_name, location, description, applied, applied_date)
            })
        })
    }

    static addPosition(e){
        e.preventDefault()

        let data = {
            "title": e.target.title.value,
            "company_name": e.target.company_name.value,
            "location": e.target.location.value,
            "description": e.target.description.value,
            "applied": e.target.applied.value,
            "applied_date": e.target.applied_date.value
        };
        
        fetch("http://localhost:3000/positions", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        .then(resp => resp.json())
        .then(position => {
            const{id, title, company_name, location, description, applied, applied_date} = position
            new Position(id, title, company_name, location, description, applied, applied_date)
            document.getElementById('hog-form').reset()
        })
    }

    static addContacts(){
        fetch("http://localhost:3000/contacts")
        .then(resp => resp.json())
        .then(contacts => {
            contacts.forEach(contact => {
                const{id, first_name, company_name, last_name, email, job_title, user_id} = contact
                new Contact(id, first_name, company_name, last_name, email, job_title, user_id)
            })
        })
    }

    static addContact(e){
        e.preventDefault()

        let data = {
            "first_name": e.target.first_name.value,
            "company_name": e.target.company_name.value,
            "last_name": e.target.last_name.value,
            "email": e.target.email.value,
            "job_title": e.target.job_title.value,
            "applied_date": e.target.applied_date.value
        };

        fetch("http://localhost:3000/contacts", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(resp => resp.json())
        .then(contact => {
            const{id, first_name, company_name, last_name, email, job_title, user_id} = contact
            new Contact(id, first_name, company_name, last_name, email, job_title, user_id)
            document.getElementById('hog-form').reset()
        })
    }
}