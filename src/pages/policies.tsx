import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Styles from '@/styles/Policies.module.css'
import React from 'react';

const policies = () => {
    return (
        <div>
            <Navbar />
            <div className={Styles.mainContainer}>
                <h1 className={Styles.WebsitepolicyHeading}><span id='Copyright'></span>Website Policies</h1>
                <div className={Styles.policyContainer}>
                    <div className={Styles.policy}>
                        <h2>Copyright Policy</h2>
                        <p>Material featured on this Website may be reproduced free of charge. However, the material has to be reproduced accurately and not to be used in a derogatory manner or in a misleading context. Wherever the material is being published or issued to others, the source must be prominently acknowledged. However, the permission to reproduce this material shall not extend to any material which is identified as being copyright of a third party. Authorization to reproduce such material must be obtained from the departments/copyright holders concerned.</p> <span id='Hyperlinking'></span></div>
                    <div className={Styles.policy}>
                        <h2 >Hyperlinking Policy</h2>
                        <p>At many places in this website, you shall find links to other Websites/Portal/Web Application/Mobile apps. These links have been placed for your convenience.NCC UDAAN is not responsible for the contents of the linked destinations and does not necessarily endorse the views expressed in them. Mere presence of the link or its listing on this Website should not be assumed as endorsement of any kind. We can not guarantee that these links will work all the time and we have no control over availability of linked destinations.</p>
                        <p>We do not object to you linking directly to the information that is hosted on this Website and no prior permission is required for the same. However, we would like you to inform us about any links provided to this website so that you can be informed of any changes or updates therein. Also, we do not permit our pages to be loaded into frames on your site. The pages belonging to this website must load into a newly opened browser window of the User.</p>
                        <span id='Privacy'></span>
                    </div>
                    <div className={Styles.policy}>
                        <h2 >Privacy Policy</h2>
                        <p>NCC UDAAN does not automatically capture any specific personal information from you like name, phone number or e-mail address, that allows us to identify you individually. If you choose to provide us with your personal information, like names or addresses, when you visit our website, we use it only to fulfil your request for information. To use the respective section , this website does not require registration.</p>

                        <p>We do not sell or share any personally identifiable information volunteered on this site to any third party public/private. Any information provided to this website will be protected from loss, misuse, unauthorized access or disclosure, alteration, or destruction.
                        </p>
                        <p>
                            We gather certain information about the User, such as Internet protocol IP address, domain name, browser type, operating system, the date and time of the visit and the pages visited. We make no attempt to link these addresses with the identity of individuals visiting our site unless an attempt to damage the site has been detected.
                        </p>
                        <span id="TermsConditions"></span>
                    </div>
                    <div className={Styles.policy}>
                        <h2 >Terms & Conditions</h2>
                        <p>This website is designed, developed and maintained by NCC UDAAN , Government of India.</p>
                        <p>Though all efforts have been made to ensure the accuracy and currency of the content on this website, the same should not be construed as a statement of law or used for any legal purposes. In case of any ambiguity or doubts, users are advised to verify/check with the Departments and/or other sources, and to obtain appropriate professional advice.</p>
                        <p>Under no circumstances will this Department be liable for any expense, loss or damage including, without limitation, indirect or consequential loss or damage, or any expense, loss or damage whatsoever arising from use, or loss of use, of data, arising out of or in connection with the use of this website.</p>
                        <p>The information posted on this website could include hypertext links or pointers to information created and maintained by non-Government / private organization. Ministry Of Youth Affairs and sports is providing these links and pointers solely for your information and convenience. When you select a link to an external website, you are leaving the NCC UDAAN website and are subject to the privacy and security policies of the owners/ sponsors of the external website</p>
                        <p>NCC UDAAN does not guarantee availability of linked pages at all times.</p>
                        <p>NCC UDAAN cannot authorize use of copyrighted materials contained in linked website. Users are advised to request such authorization from owners of linked websites.</p>

                        <p>NCC UDAAN does not guarantee that linked websites comply with Indian Government Web Guidelines.</p>
                    </div>
                </div>
            </div>

            <Footer />
        </div>

    );
}

export default policies;
