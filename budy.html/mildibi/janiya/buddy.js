const loadVuddies = () =>{
    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data => displaybuddies(data));
}

loadVuddies();
const displaybuddies = data =>{
    const buddies =  data.results;
    const buddyDiv = document.getElementById('buddy');
    for(const buddy of buddies){
        // console.log(data.results);
        const p = document.createElement('p');
        p.innerText =`email:${buddy.email} gender:${buddy.gender}` ;


        buddyDiv.appendChild(p);
    }

}