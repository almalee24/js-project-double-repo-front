class Contact {
    constructor(id, first_name, last_name, company_name, email, job_title, connections){
        this.id = id
        this.first_name = first_name
        this.last_name = last_name
        this.company_name = company_name
        this.email = email
        this.job_title = job_title
        this.renderContact()
        this.connections = connections
    }


    contactHTML(){
        return `
        <h2 id="contact-title" class="contact-title">${this.first_name} ${this.last_name}</h2>
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

    static filtered(event){
        event.preventDefault()
        let names = document.getElementsByClassName("contact-card")
        let word = document.getElementsByName("search-filter")[0].value
        for (let i = 0; i < names.length; i++) {
            let match = names[i].innerText.split(' ').filter(name => name.toLowerCase() == word.toLowerCase())
            if(match.length == 0){
                names[i].style.display = 'none'
            }
         }
         debugger
    }

    static filterForm(){
        return `<form id="search-form">
            <input type="text" name="search-filter">
            <br>
            <input class="submit" type="submit" value="Submit">
        </form>`
    }
    
    static renderSearch(){
        const contactContainer = document.getElementById("content")
        const searchCard = document.createElement('div')
        searchCard.innerHTML += this.filterForm()
        contactContainer.appendChild(searchCard)
        document.getElementById('search-form').addEventListener("submit", event => { Contact.filtered(event)})
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
            if (e.target.className.includes('contact-title')) this.showConnection(e)
        })
    }

    connectionHTML(){
        let html 
        this.connections.forEach(conn => 
           html +=  `
            <p>Date: ${conn.contact_date}</p>
            <p>Take Away: ${conn.take_away}</p>
            `
        )
        return html
    }

    showConnection(e){
        document.getElementById("title").innerHTML = ''
        document.getElementById("content").innerHTML = ''
        const contactContainer = document.getElementById("content")
        const contactCard = document.createElement('div')
        contactCard.classList.add("contact-card")
        contactCard.id = this.id
        contactCard.innerHTML += this.connectionHTML()
        contactContainer.appendChild(contactCard)
    }
}