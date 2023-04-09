import React from 'react'
import './productDetail2.css'

export default function productDetail2() {
  return (
    <div className = "card-wrapper">
  <div className = "card">
  
    <div className = "product-imgs">
      <div className = "img-display">
        <div className = "img-showcase">
          <img src = "https://image.spreadshirtmedia.net/image-server/v1/productTypes/1040/views/1/appearances/70,width=1200,height=1200,backgroundColor=f2f2f2,modelId=2870,crop=detail.png" alt = "shoe image"/>
          <img src = "https://image.spreadshirtmedia.net/image-server/v1/productTypes/1040/views/1/appearances/70,width=650,height=800,backgroundColor=f2f2f2.png" alt = "shoe image"/>
          <img src = "https://image.spreadshirtmedia.net/image-server/v1/productTypes/1040/views/2/appearances/70,width=650,height=800,backgroundColor=f2f2f2.png" alt = "shoe image"/>
          <img src = "https://image.spreadshirtmedia.net/image-server/v1/productTypes/1040/views/1/appearances/70,width=650,height=800,backgroundColor=f2f2f2,modelId=1747,crop=detail.png" alt = "shoe image"/>
        </div>
      </div>
      <div className = "img-select">
        <div className = "img-item">
          <a href = "#" data-id = "1">
            <img src = "https://image.spreadshirtmedia.net/image-server/v1/productTypes/1040/views/1/appearances/70,width=650,height=800,backgroundColor=f2f2f2.png" alt = "shoe image"/>
          </a>
        </div>
        <div className = "img-item">
          <a href = "#" data-id = "2">
            <img src = "https://image.spreadshirtmedia.net/image-server/v1/productTypes/1040/views/2/appearances/70,width=650,height=800,backgroundColor=f2f2f2.png" alt = "shoe image"/>
          </a>
        </div>
        <div className = "img-item">
          <a href = "#" data-id = "3">
            <img src = "https://image.spreadshirtmedia.net/image-server/v1/productTypes/1040/views/1/appearances/70,width=650,height=800,backgroundColor=f2f2f2,modelId=1747,crop=detail.png" alt = "shoe image"/>
          </a>
        </div>
        <div className = "img-item">
          <a href = "#" data-id = "4">
            <img src = "https://image.spreadshirtmedia.net/image-server/v1/productTypes/1040/views/1/appearances/70,width=650,height=800,backgroundColor=f2f2f2.png" alt = "shoe image"/>
          </a>
        </div>
      </div>
    </div>
  
    <div className = "product-content">
      <h2 className = "product-title">trucker cap</h2>
  
      <div className = "product-rating">
        <i className = "fas fa-star"></i>
        <i className = "fas fa-star"></i>
        <i className = "fas fa-star"></i>
        <i className = "fas fa-star"></i>
        <i className = "fas fa-star-half-alt"></i>
        <span>4.7(21)</span>
      </div>

      <div className = "product-price">
        <p className = "last-price">Old Price: <span>$257.00</span></p>
        <p className = "new-price">New Price: <span>$249.00 (5%)</span></p>
      </div>

      <div className = "product-detail">
        <h2>about this item: </h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eveniet veniam tempora fuga tenetur placeat sapiente architecto illum soluta consequuntur, aspernatur quidem at sequi ipsa!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, perferendis eius. Dignissimos, labore suscipit. Unde.</p>
        <ul>
          <li>Color: <span>Black</span></li>
          <li>Available: <span>in stock</span></li>
          <li>Category: <span>Shoes</span></li>
          <li>Shipping Area: <span>All over the world</span></li>
          <li>Shipping Fee: <span>Free</span></li>
        </ul>
      </div>

      <div className = "purchase-info">
        <input type = "number" min = "0" value = "1"/>
        <button type = "button" className = "btn">
          Add to Cart <i className = "fas fa-shopping-cart"></i>
        </button>

      </div>

     
      </div>
    </div>
  </div>

  )
}
