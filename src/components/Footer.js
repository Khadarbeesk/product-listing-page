function Footer() {
  return (
    <footer className="footer">

      {/* TOP */}
      <div className="footer-top">

        {/* LEFT */}
        <div className="footer-subscribe">
          <h4>BE THE FIRST TO KNOW</h4>
          <p>Sign up for updates from mettà muse.</p>

          <div className="subscribe-box">
            <input placeholder="Enter your e-mail..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="footer-contact">
          <h4>CONTACT US</h4>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>

          <h4 className="currency-title">CURRENCY</h4>
<div className="currency">
  <img src="/usa.png" alt="usd" />
  <span className="dot"></span>
  <span>USD</span>
</div>

          <span className="currency-note">
            Transactions will be completed in Euros and a currency reference is available on hover.
          </span>
        </div>

      </div>

      <hr />

      {/* BOTTOM */}
      <div className="footer-bottom">

        {/* COL 1 */}
        <div className="footer-col">
          <h5>mettà muse</h5>
          <p>About Us</p>
          <p>Stories</p>
          <p>Artisans</p>
          <p>Boutiques</p>
          <p>Contact Us</p>
          <p>EU Compliances Docs</p>
        </div>

        {/* COL 2 */}
        <div className="footer-col">
          <h5>QUICK LINKS</h5>
          <p>Orders & Shipping</p>
          <p>Join/Login as a Seller</p>
          <p>Payment & Pricing</p>
          <p>Return & Refunds</p>
          <p>FAQs</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>

        {/* COL 3 */}
        <div className="footer-col">
          <h5>FOLLOW US</h5>

          <div className="socials">
            <img src="/insta.png" alt="insta" />
            <img src="/linkedin.png" alt="linkedin" />
          </div>

          <h5 className="accepts">mettà muse ACCEPTS</h5>

          <div className="payments">
            <img src="/Gpay.png" alt="gpay" />
            <img src="/visa.png" alt="mc" />
            <img src="/pay.png" alt="paypal" />
            <img src="/amex.png" alt="amex" />
            <img src="/apple.png" alt="applepay" />
          </div>
        </div>

      </div>

      <p className="copyright">
        Copyright © 2023 mettamuse. All rights reserved.
      </p>

    </footer>
  );
}

export default Footer;