import React from "react";
import classes from './ProductDetails.module.css';


const ProductDetails = (props) =>{
  const colorOptions = props.data.colorOptions.map((item,pos) => {
    const classArray = [classes.ProductImage];
      if(pos === props.currentPreviewImagePos)
      {
        classArray.push(classes.selectedProductImage);
      }
    return(
      <img key={pos} className={classArray.join(' ')} src={item.imageUrl} alt={item.styleName}
      onClick={()=> props.onColorOptionClick(pos)}/>
    );

  })

  const featureList = props.data.featureList.map((item, pos) =>{
    const classArray = [classes.FeatureItem];
    if(pos===props.currentSelectedFeature)
    {
      classArray.push(classes.selectedFeatureItem);
    }
    return(
      <button onClick={()=>props.onFeatureItemClick(pos)} key={pos} className={classArray.join(' ')}>{item}</button>
    );
  });


    return(
        <div>
        <h1 className={classes.ProductTitle}>{props.data.title}</h1>
            <p className={classes.ProductDescription}>{props.data.description}</p>

            <h3 className={classes.SectionHeading}>Select Color</h3>
            <div>
              {/* <img className={[classes.ProductImage,classes.selectedProductImage].join(' ')} src="https://imgur.com/iOeUBV7.png" alt="black strap"/>
              <img className={classes.ProductImage} src="https://imgur.com/PTgQlim.png" alt="red"/>
              <img className={classes.ProductImage} src="https://imgur.com/Mplj1YR.png" alt="blue"/>
              <img className={classes.ProductImage} src="https://imgur.com/xSIK4M8.png" alt="purple"/> */}
              {colorOptions}
            </div>

            <h3 className={classes.SectionHeading}>Features</h3>
            <div>
              {/* <button className={[classes.FeatureItem,classes.selectedFeatureItem].join(' ')}>Time</button>
              <button className={classes.FeatureItem}>Heart Rate</button> */}
              {featureList}
            </div>
            <button className={classes.primaryButton}>Buy Now</button>
        </div>
    );
}

export default ProductDetails;