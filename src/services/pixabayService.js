import axios from 'axios';

//encodeURIComponent(str) - отформатирует строку для поискового запроса, напр "yellow flowers" => 'yellow+flowers'
//str = `https://pixabay.com/api/?key=18874263-8f02838ab97d9dd90f7110125&q=yellow+flowers&image_type=photo`;  //for test

const API_KEY = process.env.REACT_APP_PIXABAY_API_KEY;

axios.defaults.baseURL = `https://pixabay.com/api`;

export default class PixabayService {

    _page = 1;
    _query = '';
    _perPage = 18;
    _lastPage = null;

    setLastPage(total){
        this._lastPage = Math.ceil(total / this._perPage)
    }

    getImages(){
        const url = `?key=${API_KEY}&q=${encodeURIComponent(this._query)}&page=${this._page}&per_page=${this._perPage}&image_type=photo&orientation=horizontal`;
        return axios.get(url)
            .then( ({data}) => {
                const {total, hits} = data;
                this.setLastPage(total);
                this._page++;
                const images = hits.map( ({id, tags, largeImageURL, webformatURL}) => {
                    id = id + '';
                    return {id, tags, largeImageURL, webformatURL}
                    })
                return images
            })
            
    }

    set query(val) {
        this._query = val; 
    }

    set perPage(val) {
        this._perPage = val;
    }

    set page(val){
        this._page = val;
    }
    get page() {
        return this._page;
    }
    get lastPage(){
        return this._lastPage;
    }

    resetPages(){
        this._page = 1;
    }
}