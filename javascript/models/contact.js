class Contact {
    constructor(id, first_name, last_name, company_name, email, job_title, user_id){
        this.id = id
        this.first_name = first_name
        this.company_name = company_name
        this.last_name = last_name
        this.email = email
        this.job_title = job_title
        this.renderContact()
    }

    renderContact(){
        const contactContainer = document.getElementById("content")
        const contactCard = document.createElement('div')
        contactCard.classList.add("contact-card")
        contactCard.id = this.id
        contactCard.innerHTML += this.contactHTML()
        contactContainer.appendChild(contactCard)
        contactCard.addEventListener("click", e => {
            if (e.target.className.includes("delete")) this.deleteContact(e)
            if (e.target.className.includes("edit")) this.editeContact(e)
        })
    }

    contactHTML(){
        
        return `
        <h2 class="contact-title">${this.first_name} ${this.last_name}</h2>
        <h3 class="contact_company">${this.company_name}</h3>
        <p>Email: ${this.email}</p>
        <p>Job Title: ${this.job_title}</p>
        <button class="delete">Delete</button>
        `
    }

    deleteContact(e){
        const id = parseInt(e.target.parentElement.id)
        fetch(`http://localhost:3000/contacts/${id}`, {
            method: 'DELETE'
        })
        .then(() => {
            document.getElementById('content').removeChild(document.getElementById(id))
        })
    }


}