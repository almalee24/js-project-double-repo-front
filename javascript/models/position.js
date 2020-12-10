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
        const positionHolder = document.getElementById("user-position-list")
        const positionContainer = document.createElement('div')
        positionContainer.dataset.id = this.id
        positionContainer.id = this.id
        positionContainer.classList.add = "position-show"
        positionContainer.innerHTML += this.positionHTML()
        positionHolder.appendChild(positionContainer)
        positionContainer.addEventListener("click", e => {
            if (e.target.className == "position-button") this.positionUsers(e)
        })
    }

    positionHTML(){
        let available = this.availability == true ? 'yes' : 'no'
        return `
        <h2 class="headline">${this.title}</h2>
        <h3 class="position_company">${this.company_name}</h3>
        <p>Location: ${this.location}</p>
        <p>Description: ${this.description}</p>
        <p>Have you applied? ${this.applied}</p>
        <p>When did you apply? ${this.applied_date}</p>
        `
    }
}