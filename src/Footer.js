import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer class="footer-distributed">

                <div class="footer-left">
                    <h3>MARKDOWN<span>PREVIEWER</span></h3>



                    <p class="footer-company-name">Copyright © 2023 <strong>Maragathalakshmi</strong> All rights reserved</p>
                </div>

                <div class="footer-center">
                    <div>
                        <i class="fa fa-map-marker"></i>
                        <p><span>Coimbatore</span>
                            Tamilnadu</p>
                    </div>

                    <div>
                        <i class="fa fa-phone"></i>
                        <p>+91 9790276446</p>
                    </div>
                    <div>
                        <i class="fa fa-envelope"></i>
                        <p><a href="mailto:sagar00001.co@gmail.com">lsk172003@gmail.com</a></p>
                    </div>
                </div>
                <div class="footer-right">
                    <p class="footer-company-about">
                        <span>About Us</span>
                        <strong>MARK DOWN PREVIEWER-</strong>Markdown previwer is to type flavored Markdown into a text area.
                    You can see a preview of the output of your markdown that is updated as you type.
                    </p>
                   
                </div>
            </footer>
        </div>
    );
};
export default Footer;
