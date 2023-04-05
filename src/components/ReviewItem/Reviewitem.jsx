import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './Reviewitem.css';
const Reviewitem = ({product,handleRemoveFromCart}) => {
    const {id,price,name,img,quantity}=product;
    return (
        <div className='review-item'>
           {/* <h4>Review Item</h4> */}
           <img src={img} alt="" /> 
           <div className='review-details'>
            <p className='product-title'>{name}</p>
            <p>Price:<span className='orange-text'>${price}</span></p>
            <p>Order Quantity:<span className='orange-text'>{quantity}</span></p>
           </div>
           <button onClick={()=>handleRemoveFromCart(id)}className='btn-delete'> <FontAwesomeIcon className='delete-icon' icon={faTrashAlt} /></button>
        </div>
    );
};

export default Reviewitem;