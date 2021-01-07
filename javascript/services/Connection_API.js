class Connection_API{
    static addConnections(){
        fetch("http://localhost:3000/connections")
        .then(resp => resp.json())
        .then(connections => {
            connections.forEach(connection => {
                const{id, contact_date, take_away} = connection
                new Connection(id, contact_date, take_away)
            })
        })
    }

    static addConnection(e){
        debugger
        e.preventDefault()

        let data = {
            "contact_date": e.target.contact_date.value,
            "take_away": e.target.take_away.value
        };

        fetch("http://localhost:3000/connections", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(resp => resp.json())
    }

    
}