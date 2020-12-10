class API {

    static addPositions(){
        fetch("http://localhost:3000/positions")
        binding.pry 
        .then(resp => resp.json())
        .then(positions => {
            positions.forEach(position => {
                const{id, title, company_name, location, description, applied, applied_date}
                new Position(id, title, company_name, location, description, applied, applied_date)
            })
        })
    }
}