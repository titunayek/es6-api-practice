document.getElementById('button-search').addEventListener('click', function(){
   const inputField = document.getElementById('input-field')
   const inputText = inputField.value 
    //    clear data 
   inputField.value = '';
const errorDiv = document.getElementById("error");
errorDiv.innerHTML= "";
if (inputText === ''){
    errorDiv.innerText = "Search field cannot be empty.";
    return;  
}
    //    load data 
   const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputText}`;
   fetch (url)
   .then(res => res.json())
   .then(data => displaySearchresult(data.meals))

})
const displaySearchresult = meals=>{
    // console.log(meals)
    const searchresult = document.getElementById('search-result')
    // clear data 
    searchresult.textContent = '';

    if( meals.length == 0 ){
        console.log('wrong type')
    }

    meals.forEach(meal =>{
        // console.log(meal)
        const div = document.createElement('div')

        div.classList.add('col')

        div.innerHTML = `
            <div onclick="loadMealDetail(${meal.idMeal})" class="col">
            <div class="card">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${meal.strMeal}</h5>
                        <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
                        <button class="card-text">youtub link :${meal.strYoutube}</button>
                    </div> 
                </div>
            </div>
        `;
        searchresult.appendChild(div);
    })
}
const loadMealDetail = mealId =>{
    // console.log(meal)
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMealDeatail(data.meals))

}
const displayMealDeatail = meal => {
    
    const mealDeatial = document.getElementById('meal-deatial')
  
    const div = document.createElement('div')
    div.classList.add('card')
    div.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">${meal.strInstructions}</a>
        <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
    </div>
    `;
    mealDeatial.appendChild(div);
}