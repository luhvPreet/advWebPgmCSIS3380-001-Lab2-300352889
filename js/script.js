usersObjectArray = [
    {
        name : "iboya vat",
        image : "https://randomuser.me/api/portraits/thumb/women/67.jpg",
        joined : "07/15/15"
    },
    {
        name : "aapo niskanen",
        image : "https://randomuser.me/api/portraits/thumb/men/34.jpg",
        joined : "07/15/15"
    },
    {
        name : "zilda moreira",
        image : "https://randomuser.me/api/portraits/thumb/women/38.jpg",
        joined : "07/15/15"
    },
    {
        name : "lilou le gall",
        image : "https://randomuser.me/api/portraits/thumb/women/23.jpg",
        joined : "07/15/15"
    },
    {
        name : "lucy hall",
        image : "https://randomuser.me/api/portraits/thumb/women/24.jpg",
        joined : "07/15/15"
    },
    {
        name : "sara alves",
        image : "https://randomuser.me/api/portraits/thumb/women/14.jpg",
        joined : "07/15/15"
    },
    {
        name : "ramon macrae",
        image : "https://randomuser.me/api/portraits/thumb/men/49.jpg",
        joined : "07/15/15"
    },
    {
        name : "connor taylor",
        image : "https://randomuser.me/api/portraits/thumb/men/15.jpg",
        joined : "07/15/15"
    },
    {
        name : "aymeric morel",
        image : "https://randomuser.me/api/portraits/thumb/men/11.jpg",
        joined : "07/15/15"
    },
    {
        name : "lorenz otto",
        image : "https://randomuser.me/api/portraits/thumb/men/49.jpg",
        joined : "07/15/15"
    },
    {
        name : "karl williamson",
        image : "https://randomuser.me/api/portraits/thumb/men/29.jpg",
        joined : "07/15/15"
    },
    {
        name : "ouassim heering",
        image : "https://randomuser.me/api/portraits/thumb/men/34.jpg",
        joined : "07/15/15"
    },
    {
        name : "roberto molina",
        image : "https://randomuser.me/api/portraits/thumb/men/91.jpg",
        joined : "06/03/15"
    },
    {
        name : "jordan hubert",
        image : "https://randomuser.me/api/portraits/thumb/men/28.jpg",
        joined : "06/03/15"
    },
    {
        name : "melvin baker",
        image : "https://randomuser.me/api/portraits/thumb/men/29.jpg",
        joined : "09/18/14"
    },
    {
        name : "everett gordon",
        image : "https://randomuser.me/api/portraits/thumb/men/26.jpg",
        joined : "06/17/15"
    },
    {
        name : "aiden ma",
        image : "https://randomuser.me/api/portraits/thumb/men/82.jpg",
        joined : "07/18/12"
    },
    {
        name : "florent gerard",
        image : "https://randomuser.me/api/portraits/thumb/men/62.jpg",
        joined : "02/12/13"
    },
    {
        name : "amber chen",
        image : "https://randomuser.me/api/portraits/thumb/women/96.jpg",
        joined : "07/12/12"
    },
    {
        name : "alexandra davies",
        image : "https://randomuser.me/api/portraits/thumb/women/9.jpg",
        joined : "05/11/13"
    },
    {
        name : "sergio cole",
        image : "https://randomuser.me/api/portraits/thumb/men/57.jpg",
        joined : "02/17/15"
    },
    {
        name : "edgar dixon",
        image : "https://randomuser.me/api/portraits/thumb/men/98.jpg",
        joined : "06/17/11"
    },
    {
        name : "kirk myers",
        image : "https://randomuser.me/api/portraits/thumb/men/94.jpg",
        joined : "09/17/15"
    },
    {
        name : "ani hesseling",
        image : "https://randomuser.me/api/portraits/thumb/women/28.jpg",
        joined : "08/14/16"
    },
    {
        name : "victoire bonnet",
        image : "https://randomuser.me/api/portraits/thumb/women/24.jpg",
        joined : "05/13/16"
    },
    {
        name : "marcos morales",
        image : "https://randomuser.me/api/portraits/thumb/men/44.jpg",
        joined : "01/12/12"
    },
    {
        name : "nils neumann",
        image : "https://randomuser.me/api/portraits/thumb/men/75.jpg",
        joined : "03/11/12"
    },
    {
        name : "emily harrison",
        image : "https://randomuser.me/api/portraits/thumb/women/86.jpg",
        joined : "07/18/15"
    },
    {
        name : "matthew fortin",
        image : "https://randomuser.me/api/portraits/thumb/men/41.jpg",
        joined : "03/18/15"
    },
    {
        name : "charlotte steward",
        image : "https://randomuser.me/api/portraits/thumb/women/32.jpg",
        joined : "02/18/11"
    },
    {
        name : "marceau rodriguez",
        image : "https://randomuser.me/api/portraits/thumb/men/3.jpg",
        joined : "07/13/14"
    },
    {
        name : "hudson anderson",
        image : "https://randomuser.me/api/portraits/thumb/men/91.jpg",
        joined : "09/12/15"
    }
]


function displayUsers(num){

    var html = "<div class=\"page-header cf\">"
        html += "   <h2>Contacts</h2>" 
        html += "   <h3>Total: "+usersObjectArray.length+"</h3>"
        html += "</div>"
        html += "<ul class=\"contact-list\">"

        for(var i=num; i<num+10 && i<usersObjectArray.length; i++){
            //num is an integer argument value passed by the onClick() function calling through buttons
            //(i<num+10 && i<usersObjectArray.length) condition makes sure it display 10 objects, 
            //and if there is less then 10 it will display the remaining
            html += "<li class=\"contact-item cf\">"
            html += "   <div class=\"contact-details\">"
            html += "       <img class=\"avatar\" src=\""+usersObjectArray[i].image+"\">"
            html += "       <h3>"+usersObjectArray[i].name+"</h3>"

            let fullName = usersObjectArray[i].name //splitting  full name for displaying email
            const myArray = fullName.split(" ");

            html += "       <span class=\"email\">"+myArray[0]+"."+myArray[1]+"@example.com</span>"
            html += "   </div>"
            html += "   <div class=\"joined-details\">"
            html += "       <span class=\"date\">Joined "+usersObjectArray[i].joined+"</span>"
            html += "</div>"
            html += "</li>"
        }    
        
        html += "</ul>"

        var pageNum = 1; //variable to store page number
        for(var x=0; x<usersObjectArray.length; x+=10){ //YOU CAN UPDATE THE ARRAY AND IT WILL ADD MORE PAGE NUMBERS
            //this loop is to display buttons according to the array's length
            //x is incremented by 10, for getting the num argument value for onClick() function
            html += "<button onclick=\"displayUsers("+x+")\">"+ pageNum++ +"</button>"
        }

        document.getElementById("page").innerHTML = html
}
window.onload=displayUsers(0) //on load this will call the displayUsers() function

