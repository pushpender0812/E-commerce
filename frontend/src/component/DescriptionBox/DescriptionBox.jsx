import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbax'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-navbox">Description</div>
        <div className="descriptionbox-navbox fade">Reviews (123)</div>
      </div>
      <div className="desciptionbox-description">
        <p>An e-commerce website is one that allows people to buy and sell physical goods, services, and digital products over the internet rather than at a brick-and-mortar location. Through an e-commerce website, a business can process orders, accept payments, manage shipping and logistics, and provide customer service.   </p>
       <p>
        
E-commerce works on the same principles as a physical store. Customers come into your e-commerce store, browse products and make a purchase. The big difference is they don't have to get off their couch to do so, and your customer base isn't limited to a specific.
       </p>
     
      </div>
    </div>
  )
}

export default DescriptionBox
