import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"


const ServicesPage = () => (
    <Layout>
         <SEO title="Process Digital Consulting Services"/>
         <div className={"page-header home"}>
            <h1>Process Digital Services</h1>
            <p>We're ready to help your organization find a better path forward.<br/><br/> 
                We work with your schedule to craft the right fit to 
                optimize your organization’s workflows.</p>
            <p><br/>Below is a brief list of some of the ways we help teams grow by prioritizing processes.</p>
        </div>

        <div className={"container"}>
            <div className={"features"}>
                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-6 first"}>    
                        </div>

                        <div className={"col-6"}>
                            <div className={"feature__content"}>
                                <h2>Process Mapping</h2>
                                <p>The first step toward improving any system is understanding the system holistically as it exists today. In this procedure, we will document existing systems. We will note how they are being leveraged now. <br /><br />
                                In this document you will also be made aware of  all exceptions and special circumstances your organization.<br /><br />
                                We can come to your office for a day or can map online meetings over the course of three weeks. <br /><br />
                                
</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"feature__item1"}>
                    <div className={"row"}>
                        <div className={"col-6"}>
                            <div className={"feature__content"}>
                                <h2>Process Improvement Workshops</h2>
                                <p>Are you ready to get your whole team aligned?  <br /><br />
                                Process Digital Consulting is available to kick off your new and improved organization with a series workshops for the whole team or one-on-one for product owners and key stakeholders.  <br /><br />

                                This series of workshops, delivered in person or video conference, is the perfect way to make sure every contributor is aware of the benefits of process realignment. Ensuring buy-in with your team is an important factor in system optimization. Not only that, but they should have their concerns and questions heard and addressed. 
                        
 </p>
                            </div>
                        </div>

                        <div className={"col-6 first"}>

                        </div>
                    </div>
                </div>

                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-6 first"}>
                        </div>

                        <div className={"col-6"}>
                            <div className={"feature__content"}>
                                <h2>Process Overhaul Engagements</h2>
                                <p>Are you ready for a brighter future? 
                                <br /><br />
                                    Take the plunge and embrace better internal processes. Starting with a full process audit and mapping, Process Digital Services will partner with you to discover  inefficiencies and eliminate them. Let’s make sure your whole team is rowing the boat in the right direction -- together.
                                    <br /><br />
                                    Contact us today to talk about pricing.
</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


<div className={"call-to-action"}>
            <div className={"container"}>
                <div className={"call-to-action__content"}>
                    <h2>What are you waiting for?</h2>
                    <p>There is no time like the present to get on a better path. Simply fill out the contact form to get started right now.</p>
                </div>

                <div className={"button"}>
                    <a href="https://forms.gle/ELy6jVDdydsFATAYA" target={"_blank"}>Start The Conversation</a>                </div>
            </div>
        </div>
    </Layout>

)

export default ServicesPage
