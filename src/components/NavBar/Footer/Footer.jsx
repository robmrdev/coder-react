import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
    <footer>
        <ul className='footerAccordion'>
            <li className='footerIkeaFamily'>
                <strong>Join IKEA Family</strong>
                <div className='accordionPieces'>
                    <p>
                    Bring your ideas to life with special discounts, inspiration, and lots of good things in store. It's all free.
                    </p>
                    <a href='#'>See more</a>
                    <div className='footerLogIn'>Join or Log in</div>
                </div>
            </li>
            <li>
                <strong>Customer service</strong>
                <ul className='accordionPieces'>
                    <li>Customer service</li>
                    <li>My orders</li>
                    <li>Returns & claims</li>
                    <li>Delivery</li>
                    <li>Stock information</li>
                    <li>Services</li>
                    <li>Recalls</li>
                    <li>Personal advice</li>
                </ul>
            </li>
            <li>
                <strong>About IKEA</strong>
                <ul className='accordionPieces'>
                    <li>This is IKEA</li>
                    <li>IKEA concept</li>
                    <li>Sustainability</li>
                    <li>Ideas & inspiration</li>
                    <li>Catalogue & brochures</li>
                    <li>Campaigns</li>
                    <li>Working at IKEA</li>
                    <li>Press</li>
                    <li>IKEA news</li>
                </ul>
            </li>
            <li>
                <strong>Shopping at IKEA</strong>
                <ul className='accordionPieces'>
                    <li>Opening hours</li>
                    <li>All stores</li>
                    <li>Offers</li>
                    <li>Swedish restaurant</li>
                    <li>Swedish Food Market</li>
                    <li>IKEA App</li>
                    <li>Gift card</li>
                    <li>Planners</li>
                </ul>
            </li>
            <li>
                <strong>IKEA Family & Business</strong>
                <ul className='accordionPieces'>
                    <li>Log in</li>
                    <li>Sign up</li>
                    <li>About IKEA Family</li>
                    <li>Benefits</li>
                    <li>Events</li>
                    <li>IKEA for Business</li>
                    <li>Interior advice for businesses</li>
                </ul>
            </li>
        </ul>
        <div className='footerBottom'>
            <div className='socialNetworks'>
                <i className="fi fi-brands-facebook"></i>
                <i className="fi fi-brands-instagram"></i>
                <i className="fi fi-brands-pinterest"></i>
                <i className="fi fi-brands-youtube"></i>
            </div>
            <div className='paymentsLogos'>
                <img src="https://www.ikea.com/global/assets/logos/external-payment-providers/ideal.svg" alt=""/>
                <img src="https://www.ikea.com/global/assets/logos/external-payment-providers/master-card.svg" alt="" />
                <img src="https://www.ikea.com/global/assets/logos/external-payment-providers/visa.svg" alt="" />
                <img src="https://www.ikea.com/global/assets/logos/external-payment-providers/klarna.svg" alt="" />
                <img src="https://www.ikea.com/global/assets/logos/external-payment-providers/ikea-gift-card.svg" alt="" />
                <img src="https://www.ikea.com/global/assets/logos/external-payment-providers/american-express.svg" alt="" />
                <img src="https://www.ikea.com/global/assets/logos/external-payment-providers/paypal.svg" alt="" />
            </div>
        </div>
        <div className='footerOptionsContainer'>
            <p><i className="fi fi-rr-copyright"></i> Not copyright intended</p>
            <ul className='footerOptions'>     
                <li>Privacy policy</li>
                <li>Cookies</li>
                <li>Cookie settings</li>
                <li>Terms and conditions</li>
                <li>User terms and conditions</li>
                <li>Responsible Disclosure Program</li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer