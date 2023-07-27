import React from 'react';
import LinkButton from './link-button'
import { LINKS } from '../../contants';
import './styles.scss'

const CLASS_NAME = 'link-tree';

function LinkTree() {
    return (
        <div className={CLASS_NAME}>
            <div className={`${CLASS_NAME}-container`}>
                <div className={`${CLASS_NAME}-image`} />
                <p className="email">chandler@keyrecruit.io</p>
                <LinkButton link={LINKS.KEYRECRUIT} text={`KeyRecruit | www.keyrecruit.io`} />
                <LinkButton link={"https://shoutouthtx.com/meet-chandler-keyes-ceo-of-kodeably-software-engineering-manager-at-integral/"} text={`ShoutoutHTX: Meet Chandler Keyes | CEO of Kodeably`} />
                <h3>Latest YouTube Video</h3>
                <LinkButton link={LINKS.LATEST_VIDEO} text={`Strawberry Cake Recipe (SUPER MOIST)`} />
                <h3>KeyRecruit Services</h3>
                <LinkButton link={LINKS.MOCK_INTERVIEW} text={`Sign up for a Mock Interview Today!`} />
                <LinkButton link={LINKS.MENTORSHIP_SESSION} text={`Schedule a Mentorship Session`} />
                <br/>
                <h3>KeyRecruit Social Media</h3>
                <LinkButton link={LINKS.KODEABLY_LINKEDIN} text={`LinkedIn`} />
                <LinkButton link={LINKS.KODEABLY_TWITTER} text={`Twitter`} />
                <LinkButton link={LINKS.KODEABLY_FACEBOOK} text={`Facebook`} />
                <h3>Projects</h3>
                <LinkButton link={LINKS.GITHUB} text={'GitHub'} />
                <h3>YouTube Channels</h3>
                <LinkButton link={LINKS.CHANDLER_KNOWS_BEST} text={'ChandlerKnowsBest'} />
                <LinkButton link={LINKS.CODING_WITH_CHANDLER} text={'CodingWithChandler'} />
            </div>
            </div>
    );
}

export default LinkTree;
