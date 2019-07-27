import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import thumbnailEvent from "../../static/images/dylan-gillis-KdeqA3aTnBY-unsplash.webp"
import thumbnailBoard from "../../static/images/isaac-smith-AT77Q0Njnt0-unsplash.webp"
import thumbnailNews from "../../static/images/cater-butter.webp"
import thumbnailTeams from "../../static/images/feature-team.png"
import thumbnailStaff from "../../static/images/feature-user.png"

const IndexPage = () => (
    <Layout>
        <SEO title="Optimize Your Workflows And Processes"/>

        <div className={"page-header home"}>
            <h1>Better Processes = Better Results</h1>
            <p>From defining your story of what success looks like to implementing tools<br/>Process Digital Consulting can get you to success faster</p>
           
        </div>

        <div className={"container"}>
            <div className={"features"}>
                <div className={"feature__item1"}>
                    <div className={"row"}>
                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <img alt={"Event"} src={thumbnailEvent}/>
                            </div>
                        </div>

                        <div className={"col-6"}>
                            <div className={"feature__content"}>
                                <h2>Optimize Your Organizational Processes</h2>
                                <p>Let us help you map your processes that have emerged naturally and plan for a better tomorrow. Unleash the power of your team by letting them focus on what matters.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-6"}>
                            <div className={"feature__content"}>
                                <h2>Refine Your Definition Of Seccess</h2>
                                <p>Find your path from endless meetings and tribal knowledge to a well oiled machine that empowers team members to deliver better results for your clients.</p>
                            </div>
                        </div>

                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <img alt={"Board"} src={thumbnailBoard}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"feature__item1"}>
                    <div className={"row"}>
                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <img alt={"News"} src={thumbnailNews}/>
                            </div>
                        </div>

                        <div className={"col-6"}>
                            <div className={"feature__content"}>
                                <h2>Evolve with Purpose!</h2>
                                <p>Stop growing without a plan. What got you today does not get you tomorrow. Make the proactive choice to elimate inefficiencies and prevent bottlenecks before they become engrained.</p>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
        <br/>
        <br/>
        <div className={"call-to-action"}>
            <div className={"container"}>
                <div className={"call-to-action__content"}>
                    <h2>Reach out today!</h2>
                    <p>Don't let one more day pass you by. Reach out now to start your journey to better processes today.</p>
                </div>

                <div className={"button"}>
                    <a href="https://forms.gle/ELy6jVDdydsFATAYA" target={"_blank"}>Start The Conversation</a>                </div>
            </div>
        </div>
    </Layout>
)

export default IndexPage
