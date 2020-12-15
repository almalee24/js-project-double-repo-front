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
            "job_title": e.target.job_title.value
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
            const{id, first_name, company_name, last_name, email, job_title} = contact
            new Contact(id, first_name, company_name, last_name, email, job_title)
            document.getElementById('contact-form').reset()
        })
    }

    
}