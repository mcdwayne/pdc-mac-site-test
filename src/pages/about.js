import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import informationImage from "../../static/images/Headshot-square.webp";

const AboutPage = () => (
    <Layout>
        <SEO title="About"/>

        <div className={"page-header"}>
            <h2>Who is Process Digital Consulting?</h2>
        </div>

        <div className={"container"}>
            <div className={"targets"}>
                <div className={"title"}>
                    <h2>Our Story</h2>
                </div>

                <div className={"row"}>
                    <div className={"col-6"}>
                        <div className={"item"}>
                            <img className={"image1"} alt={"Information"} src={informationImage}/>
                            <p><br/>Since 2006, Dwayne McDaniel has been driven by a passion for open source technology and for getting things done. In 2019 Dwayne saw an opportunity to share the skills he developed over a multitude of projects and organizations with the world. <br/><br/>From technical consulting on specific platforms to full process and workflow optimizations, Process Digital Consulting is ready to help your organization today!  Contact us today to get on your way toward better processes and better results.</p>
                        </div>
                    </div>

                    
                </div>


            </div>
        </div>
    </Layout>
)

export default AboutPage
