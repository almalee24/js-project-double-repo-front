const buttons = document.querySelectorAll("a");
const title = document.getElementById("title")
let el = document.getElementById("content")

document.addEventListener("DOMContentLoaded", function(){
    buttons.forEach(button => {
        button.addEventListener("click", function(){
            if(this.id == "position_btn"){
                title.innerHTML = "Position";
                el.innerHTML = '';
                Position_API.addPositions()
            }else if(this.id == "contact_btn"){
                title.innerHTML = "Contact";
                el.innerHTML = '';
                Contact_API.addContacts()
    
            }else if(this.id == "home_btn"){
                window.location.reload();
            }
        })
    })
    document.getElementById('logo').addEventListener('click', function(){
        window.location.reload();
    });
    document.getElementById('position-form').addEventListener("submit", Position_API.addPosition)
    document.getElementById('contact-form').addEventListener("submit", Contact_API.addContact)
});

