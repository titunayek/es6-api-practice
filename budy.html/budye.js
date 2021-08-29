const loadBuddiles = () => {
    fetch ('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data => displayeBuddies(data));
}
loadBuddiles();

const displayeBuddies = data => {
    const buddies = data.results;
    const buddiesDiv = document.getElementById('duddies');
    for (const buddy of buddies){
        console.log(buddy);
        const p  = document.createElement('p')
        p.innerText =`Email:${buddy.email}. PhoneNumber:${buddy.cell}` ;
        buddiesDiv.appendChild(p);
    }
}