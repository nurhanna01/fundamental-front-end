import '../component/meal-list.js';
import DataSource from '../data/data-source.js';

const main = ()=>{
    const mealItem = document.querySelector("meal-list");
  
    const getData = () => {
      DataSource.getMeal()
        .then((result) => (mealItem.meals = result));
    };
  
    getData();
};
export default main;