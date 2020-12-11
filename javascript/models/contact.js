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
        const contactInfo = document.createElement('div')
        contactInfo.classList.add("contact-info")
        contactCard.classList.add("contact-card")
        contactInfo.id = this.id
        contactInfo.innerHTML += this.contactHTML()
        contactContainer.appendChild(contactCard)
        contactCard.appendChild(contactInfo)
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
        <button class="edit">Edit</button>
        `
    }

    deleteContact(e){
        const id = parseInt(e.target.parentElement.id)
        fetch(`http://localhost:3000/contacts/${id}`, {
            method: 'DELETE'
        })
        .then(() => {
            document.getElementById('contact-container').removeChild(document.getElementById(id))
        })
    }


}