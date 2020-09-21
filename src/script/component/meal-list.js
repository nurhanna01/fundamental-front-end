import './meal-item.js'

class MealList extends HTMLElement{
    constructor(){
        super();
    }

    set meals(meals){
        this._meals=meals;
        this.render();
    }

    render(){
        this.innerHTML=`
        <div class="col-lg-4 col-md-6 col-sm-12" style="margin-top: 12px;">`;
        this._meals.forEach(meal=>{
            const mealItemElement = document.createElement("meal-item");
            mealItemElement.meal=meal;
            this.appendChild(mealItemElement);
        })
        this.innerHTML += `</div>`;
        
    }
}

customElements.define("meal-list",MealList);