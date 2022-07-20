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
                <p className="email">chandler@kodeably.com</p>
                <LinkButton link={"https://shoutouthtx.com/meet-chandler-keyes-ceo-of-kodeably-software-engineering-manager-at-integral/"} text={`ShoutoutHTX: Meet Chandler Keyes | CEO of Kodeably`} />
                <h3>Kodeably Services</h3>
                <LinkButton link={LINKS.MOCK_INTERVIEW_GIVEAWAY} text={`FREE Behavioral Mock Interview Giveaway Sign Up`} />
                <LinkButton link={LINKS.MOCK_INTERVIEW} text={`Sign up for a Mock Interview Today!`} />
                <LinkButton link={LINKS.MENTORSHIP_SESSION} text={`Schedule a Mentorship Session`} />
                <br/>
                <h3>Kodeably Social Media</h3>
                <LinkButton link={LINKS.KODEABLY_LINKEDIN} text={`LinkedIn`} />
                <LinkButton link={LINKS.KODEABLY_TWITTER} text={`Twitter`} />
                <LinkButton link={LINKS.KODEABLY_FACEBOOK} text={`Facebook`} />
                <LinkButton link={LINKS.KODEABLY} text={`kodeably.com`} />
                <h3>Latest Videos</h3>
                    <LinkButton link={LINKS.LATEST_VIDEO} text={`FAQs About Coding`} />
                    <LinkButton link={LINKS.LATEST_VIDEO2} text={`Common Interviewing Mistakes You Should Avoid`} />
                    <LinkButton link={LINKS.LATEST_VIDEO3} text={`Why You Should Get a STEM Job`} />
                <h3>YouTube</h3>
                    <LinkButton link={LINKS.CHANDLER_KNOWS_BEST} text={'ChandlerKnowsBest'} />
                    <LinkButton link={LINKS.CODING_WITH_CHANDLER} text={'CodingWithChandler'} />
                <h3>Projects</h3>
                <LinkButton link={LINKS.GITHUB} text={'GitHub'} />
                <h3>Personal Socials</h3>
                <LinkButton link={LINKS.INSTAGRAM} text={'Instagram'} />
                <LinkButton link={LINKS.TWITTER} text={'Twitter'} />
                <LinkButton link={LINKS.LINKEDIN} text={'LinkedIn'} />
            </div>
            </div>
    );
}

export default LinkTree;
