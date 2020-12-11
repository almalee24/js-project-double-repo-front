const buttons = document.querySelectorAll("button");
let el = document.getElementById("content")

buttons.forEach(button => {
    button.addEventListener("click", function(){
        if(this.id == "position_btn"){
            el.innerHTML = '';
            Position_API.addPositions()
        }else if(this.id == "contact_btn"){
            el.innerHTML = '';
            Contact_API.addContacts()
        }else if(this.id == "home_btn"){
            window.location.reload();
        }
    })
})

document.addEventListener("DomContentLoaded", function(){
    document.getElementById('position-form').addEventListener("submit", Position_API.addPosition)
    document.getElementById('contact-form').addEventListener("submit", Contact_API.addContact)
})
