class MealItem extends HTMLElement{
    constructor(){
        super();
    }

    set meal(meal){
        this._meal=meal;
        this.render();
    }

    render(){
        this.innerHTML = `
        <style>
        p{
            text-align : justify;
        }
        </style>
        <center>
            <div class="card">
                <div class="card-body">
                    <h1>${this._meal.strCategory}</h1>
                    <img src="${this._meal.strCategoryThumb}" alt="Foods">
                    <p>${this._meal.strCategoryDescription}</p>
                </div>
            </div>
        </center>     
            `;
    };
}

customElements.define("meal-item",MealItem);