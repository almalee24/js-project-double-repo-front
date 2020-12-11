class Contact_API{
    static addContacts(){
        fetch("http://localhost:3000/contacts")
        .then(resp => resp.json())
        .then(contacts => {
            contacts.forEach(contact => {
                const{id, first_name, company_name, last_name, email, job_title} = contact
                new Contact(id, first_name, company_name, last_name, email, job_title)
            })
        })
    }

    static addContact(e){
        debugger
        e.preventDefault()

        let data = {
            "first_name": e.target.first_name.value,
            "company_name": e.target.company_name.value,
            "last_name": e.target.last_name.value,
            "email": e.target.email.value,
            "job_title": e.target.job_title.value,
            "applied_date": e.target.applied_date.value,
            "connections_attributes": [{
                'contact_date': e.target.contact_date.value,
                'take_away': e.target.take_away.value
            }]
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
            document.getElementById('contact-form').reset()
        })
    }
}