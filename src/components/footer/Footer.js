import React from "react";
import "./footer.css"

const Footer = ()=>{
    return(
        <>
        <footer>
        <section className="footer-info">
            <div className="brand-intro">
                <h1>Fastcom</h1>
                <h3>Items delivered with in 24 hrs</h3>
            </div>
            <div>
                <h1>Explore Fastcom</h1>
                <h3>Summer cloathing</h3>
                <h3>Winter cloathing</h3>
                <h3>Electronics Items</h3>
                <h3>Footwear</h3>
                <h3>Gift Items</h3>
            </div>
            <div>
                <h1>Resources</h1>
                <h3>Blog</h3>
                <h3>About us</h3>
                <h3>Contact us</h3>
                <h3>Careers</h3>
                <h3>Privacy Policy</h3>
            </div>
            <div>
                <h1>Follow us on</h1>
                <h3>Youtube</h3>
                <h3>LinkedIn</h3>
                <h3>Facebook</h3>
                <h3>Twitter</h3>
            </div>
        </section>
        <section className="footer-copyright">
            Copyright © 2022 Fastcom Private Ltd. All Rights Reserved.
        </section>
    </footer>
        </>
    )
}

export {Footer}