class Position_API{

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
            document.getElementById('position-form').reset()
        })
    }
}
