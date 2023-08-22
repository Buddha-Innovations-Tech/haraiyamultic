import { Carousel } from 'react-bootstrap';
import CrossButton from '../../images/cross.png';

import React from 'react';
const Popup = ({ data, setShowPopup }) => {
  return (
    <div className='popup'>
      <div className='popup-container'>
        <div
          className='popup-container-overlay'
          onClick={() => setShowPopup(false)}
        />
        <div className='popup-container-item'>
          <div className='popup-container-item-header'>
            <button onClick={() => setShowPopup(false)}>
              <img src={CrossButton} />
            </button>
          </div>
          <div className='popup-container-item-image'>
            <Carousel variant='dark'>
              {data?.map((popup, index) => (
                <Carousel.Item key={index} interval={10000}>
                  <img
                    fetchpriority='high'
                    src={popup.popupNotice.noticeImage.mediaItemUrl}
                    srcSet={popup.popupNotice.noticeImage.srcSet}
                    alt=''
                    placeholder='fade'
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
