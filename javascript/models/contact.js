class Contact {
    constructor(id, first_name, last_name, email, company_name, job_title, user_id){
        this.id = id
        this.first_name = first_name
        this.company_name = company_name
        this.last_name = last_name
        this.email = email
        this.job_title = job_title
        this.user_id = user_id
        this.renderContact()
    }

    renderCocontact
        const contactHolder = document.getElementById("user-contact-list")
        const contactContainer = document.createElement('div')
        contactContainer.dataset.id = this.id
        contactContainer.id = this.id
        contactContainer.classList.add = "contact-show"
        contactContainer.innerHTML += this.contactHTML()
        contactHolder.appendChild(contactContainer)
        contactContainer.addEventListener("click", e => {
            if (e.target.className == "contact-button") this.contactUsers(e)
        })
    }

    contactHTML(){
        return `
        <h2 class="headline">${this.first_name + this.last_name}</h2>
        <h3 class="position_company">${this.company_name}</h3>
        <p>Email: ${this.email}</p>
        <p>Job Title: ${this.job_title}</p>
        `
    }
}