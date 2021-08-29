const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.Value; 
    searchField.Value = '';
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    // console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.meals)); 
}
const displaySearchResult = meals => {
   const searchResult = document.getElementById('search-result');
    meals.forEach( meal =>{
        // console.log(meal);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML= `
        <div class="col">
        <div class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
            </div>
        </div>
        `;
        searchResult.appendChild(div);
    })

}







