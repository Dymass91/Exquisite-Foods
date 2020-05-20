import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {

    faFacebook,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";
import '../styles/SocialIcons.css'

export default function SocialFollow() {
    return (
        <div className="social-container">


            <a
                href="https://www.facebook.com/Exquisite-Foods-Distributor-108503874114634/"
                className="facebook social"
            >
                <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>

            <a
                href="https://www.instagram.com/exquisitefoodsdist/"
                className="instagram social"
            >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
        </div>
    );
}

