class Position {
    constructor(id, title, company_name, location, description, applied, applied_date){
        this.id = id
        this.title = title
        this.company_name = company_name
        this.location = location
        this.description = description
        this.applied = applied
        this.applied_date = applied_date
        this.renderPosition()
    }

    getYYYYMMDD(d0) {
        const d = new Date(d0)
        const m = new Date(d.getTime() - d.getTimezoneOffset() * 60 * 1000).toISOString().split('T')[0]
        return m
    }

    positionHTML(){
        let checked = this.applied == true ? "checked" : ""
        let date = this.getYYYYMMDD(this.applied_date)
        return `
        <h2 class="position-title">${this.title}</h2>
        <h3 class="position-company">${this.company_name}</h3>
        <p>Location: ${this.location}</p>
        <p>Description: ${this.description}</p>
        <p>Have you applied? <input data-id="${this.id}" class="toggle" type="checkbox" value="applied" ${checked}></p>
        <p>When did you apply? <input data-id="${this.id}" class="date" type="date" value="${date}" ${date}></p>
        <button class="delete">Delete</button>
        `
    }

    deletePosition(e){
        const id = parseInt(e.target.parentElement.id)
        debugger
        fetch(`http://localhost:3000/positions/${id}`,{
            method: 'DELETE'
        })
        .then(() => {
            document.getElementById('content').removeChild(document.getElementById(id))
        })
    }

    static filtered(event){
        event.preventDefault()
        let names = document.getElementsByClassName("position-card")
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
        document.getElementById('search-form').addEventListener("submit", event => { Position.filtered(event)})
    }

    appliedToggle(e){
        const id = parseInt(e.target.dataset.id)
        fetch(`http://localhost:3000/positions/${id}`,{
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                applied: e.target.checked
            })
        })
    }

    appliedDate(e){
        const id = parseInt(e.target.dataset.id)
        fetch(`http://localhost:3000/positions/${id}`,{
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                applied_date: e.target.value
            })
        })
    }


    renderPosition(){
        const positionContainer = document.getElementById("content")
        const positionCard = document.createElement('div')
        positionCard.classList.add("position-card")
        positionCard.id = this.id
        positionCard.innerHTML += this.positionHTML()
        positionContainer.appendChild(positionCard)
        positionCard.addEventListener("click", e => {
            if (e.target.className === "toggle") this.appliedToggle(e)
            if (e.target.className.includes("delete")) this.deletePosition(e)
            if (e.target.className == 'position-title') this.showContact(e)
        })
        positionCard.addEventListener("change", e => {
            if (e.target.className == "date") this.appliedDate(e)
        })
    }

    showContact(){
        debugger
    }
}