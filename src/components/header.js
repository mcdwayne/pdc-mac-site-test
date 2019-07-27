import {Link} from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../../static/images/pdc-logo-svg.svg"

const Header = ({siteTitle}) => (
    <header>
        <div className={"container"}>
            <div className={"top-menu"}>
                <div className={"logo"}>
                    <Link to="/" title={"Process Digital Consulting"}>
                        <img alt={"PDC Logo"} src={logo}/>
                    </Link>
                </div>

                <div className={"get-started"}>
                    <a href={"https://forms.gle/ELy6jVDdydsFATAYA"}>Contact</a>
                </div>
            </div>
        </div>
    </header>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
