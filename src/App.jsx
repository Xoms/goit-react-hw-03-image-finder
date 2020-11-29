import React, {Component} from 'react';
import Loader from 'react-loader-spinner';

import Api from './services/pixabayService';

import SearchBar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Modal from './components/Modal';
import Container from './components/shared/Container';
import Button from './components/shared/Button';

import './App.scss';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

class App extends Component {

  api = new Api(); 

  state = {
    images: [],
    isModalOpen: false,
    isLoading: false,
    isNotLastPage: true,
    currentImg: {},
    err: {}
  }

  componentDidMount() {
    this.getImages();
  }

  componentDidUpdate(prevProps, prevState){
    if (prevState.images !== this.state.images) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }
  getImages = () => {
    this.checkForLastPage();
    this.setState({isLoading: true})
    this.api.getImages()
      .then(images => {
        this.setState( prevState => {
          return {
            images: [...prevState.images, ...images]
          }
        });
      })
      .catch(err => {
        console.dir(err);
        this.setState({errMsg: err.message})
      })
      .finally(()=> this.setState({isLoading: false}));
  }

  checkForLastPage(){
    if (this.api.page === this.api.lastPage) {
      this.setState ({
        isNotLastPage: false
      })
    }      
  }

  onSearchSubmit = (query) => {
    this.setState({images: []})
    this.api.query = query;
    this.api.resetPages();
    this.getImages();
  }

  onImageClick = (currentImg) => {
    this.setState({currentImg});
    this.toggleModal();
  }

  toggleModal = () => {
    this.setState(state => ({isModalOpen: !state.isModalOpen})
    )
  }

  render(){
    const {images, currentImg, isModalOpen, isLoading, isNotLastPage, errMsg} = this.state;

    const loader =  isLoading ? 
      <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
      /> : 
      (isNotLastPage && <Button caption="Load More..." handleClick={this.getImages}/>)
    

    return (
      <>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageGallery 
          onImageClick={this.onImageClick} 
          images={images}
          />
        
        <Container>   
        {!!errMsg && <span>{errMsg}</span> }
          {loader}
        </Container>

        {isModalOpen && 
          <Modal onClose={this.toggleModal}>
            <img src={currentImg.imgSrc} alt={currentImg.alt} />
          </Modal>}
        
      </>
    );
  }
  
}

export default App;
