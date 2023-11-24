import React, {Component} from 'react';
import classes from './App.module.css';
import ProductPreview from './ProductPreview/ProductPreview';
import ProductDetails from './ProductDetails/ProductDetails';
import Navbar from './Navbar/Navbar';
import ProductData from './Utils/ProductData';

class App extends Component {
  state = {
    ProductData : ProductData,
    currentPreviewImagePos:0,
    currentSelectedFeature:0
  }

  onColorOptionClick = (pos) =>{
    this.setState({currentPreviewImagePos:pos})
  }

  onFeatureItemClick = (pos) => {
    this.setState({currentSelectedFeature:pos})
  }

  render(){
    return (
      <div className="App">
        
          <Navbar/>
  
        <div className={classes.MainContainer}>
          <div className={classes.ProductPreview}>
            <ProductPreview currentPreviewImage={this.state.ProductData.colorOptions[this.state.currentPreviewImagePos].imageUrl} 
            currentSelectedFeature={this.state.currentSelectedFeature} />
          </div>
          <div className={classes.ProductData}>
              <ProductDetails data={this.state.ProductData} onColorOptionClick={this.onColorOptionClick}
              currentPreviewImagePos={this.state.currentPreviewImagePos} 
              onFeatureItemClick={this.onFeatureItemClick} currentSelectedFeature={this.state.currentSelectedFeature}/>
          </div>
        </div>
      </div>
    );
  }
  
}

export default App;
