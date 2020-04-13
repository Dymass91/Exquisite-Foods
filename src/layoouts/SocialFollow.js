import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {

    faFacebook,
    faTwitter,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";
import '../styles/SocialIcons.css'

export default function SocialFollow() {
    return (
        <div className="social-container">


            <a
                href="https://www.facebook.com/learnbuildteach/"
                className="facebook social"
            >
                <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://www.twitter.com/jamesqquick" className="twitter social">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a
                href="https://www.instagram.com/learnbuildteach"
                className="instagram social"
            >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
        </div>
    );
}

