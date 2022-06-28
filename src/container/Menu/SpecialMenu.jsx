import React from 'react';
import {images,data} from '../../constants'
import './SpecialMenu.css';
import {SubHeading, MenuItem } from '../../components';
const SpecialMenu = () => (
  <div className='app__specialMenu flex-center section__padding' id="#menu">
    <div className='app__specialMenu-title'>
      <SubHeading title="Menu that fits you palatte"/>
      <h1 className='headtext__cormorant'> 
        Today's Special
      </h1>
    </div>

    <div className='app__specialMenu-menu'>
        <div className='app__specialMenu-menu_wine flex__center'>
          <p className='app__specialMenu-menu_heading'>Wine &amp; Beer</p>
          <div className='app__specialMenu-menu_items'>
            {data.wines.map((wines,index) => (
              <MenuItem key={wines.title + index} title={wines.title} price={wines.price} tags={wines.tags} />
            ))}
          </div>
        </div>

        <div className='app__specialMenu-menu_img'>
          <img src={images.menu} alt="menu img"/>
        </div>

        <div className='app__specialMenu-menu_cocktails flex__center'>
          <p className='app__specialMenu-menu_heading'>Cocktails</p>
          <div className='app__specialMenu-menu_items'>
            {data.cocktails.map((cocktail,index) => (
              <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
            ))}
          </div>
        </div>
    </div>

    <div className='app__specialMenu-menu_button'>
        <button type='button' className='custom__button'>View More</button>
    </div>
  </div>
);

export default SpecialMenu;
