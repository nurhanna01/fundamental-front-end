class DataSource{
    static getMeal(){
        return fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
            .then(response=>{
                return response.json();
            })
            .then(responseJson=>{
                if(responseJson.categories) {
                return Promise.resolve(responseJson.categories);
                } else {
                return Promise.reject(`Error`);
                }
            });
    }
}
 export default DataSource;