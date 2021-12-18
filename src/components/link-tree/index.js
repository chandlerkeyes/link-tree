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
                <LinkButton link={LINKS.MOCK_INTERVIEW} text={`Sign up for a Mock Interview Today!`} />
                <LinkButton link={LINKS.MENTORSHIP_SESSION} text={`Schedule a Mentorship Session`} />
                <br/>
                <LinkButton link={LINKS.KODEABLY} text={`kodeably.com`} />
                <h3>Latest Videos</h3>
                <div className="button-group-2">
                    <LinkButton link={LINKS.LATEST_VIDEO} text={`Bad Decisions I've Made as a Software Engineer`} />
                    <LinkButton link={LINKS.LATEST_VIDEO2} text={`Common Interviewing Mistakes You Should Avoid`} />
                    <LinkButton link={LINKS.LATEST_VIDEO3} text={`Why You Should Get a STEM Job`} />
                </div>
                <h3>YouTube</h3>
                <div className="button-group-1">
                    <LinkButton link={LINKS.CHANDLER_KNOWS_BEST} text={'ChandlerKnowsBest'} />
                    <LinkButton link={LINKS.CODING_WITH_CHANDLER} text={'CodingWithChandler'} />
                </div>
                <h3>Projects</h3>
                <LinkButton link={LINKS.GITHUB} text={'GitHub'} />
                <h3>Personal Blog</h3>
                <LinkButton link={LINKS.BLOG} text={'ThinkWithColor'} />
                <h3>Socials</h3>
                <div className="button-group-2">
                    <LinkButton link={LINKS.INSTAGRAM} text={'Instagram'} />
                    <LinkButton link={LINKS.TWITTER} text={'Twitter'} />
                    <LinkButton link={LINKS.LINKEDIN} text={'LinkedIn'} />
                </div>
            </div>
        </div>
    );
}

export default LinkTree;
