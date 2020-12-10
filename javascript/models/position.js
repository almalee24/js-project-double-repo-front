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

    renderPosition(){
        const positionContainer = document.getElementById("position-container")
        const positionCard = document.createElement('div')
        positionCard.classList.add('position-card')
        positionCard.id = this.id
        positionCard.innerHTML += this.positionHTML()
        positionContainer.appendChild(positionCard)
        positionCard.addEventListener("click", e => {
            if (e.target.className.includes("delete")) this.deletePosition(e)
        })
    }

    positionHTML(){
        return `
        <h2 class="position-title">${this.title}</h2>
        <h3 class="position-company">${this.company_name}</h3>
        <p>Location: ${this.location}</p>
        <p>Description: ${this.description}</p>
        <p>Have you applied? ${this.applied}</p>
        <p>When did you apply? ${this.applied_date}</p>
        <button class="delete">Delete</button>
        `
    }

    deletePosition(e){
        const id = parseInt(e.target.parentElement.id)
        fetch(`http://localhost:3000/positions/${id}`, {
            method: 'DELETE'
        })
        .then(() => {
            document.getElmentById('position-container').removeChild(document.getElementById(id))
        })
    }
}