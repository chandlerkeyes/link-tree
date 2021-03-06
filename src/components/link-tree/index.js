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
                <div className={`${CLASS_NAME}-info`}>
                    <h4>Chandler Keyes</h4>
                    <p>@chandler.keyes</p>
                </div>
                <p className="email">chandler@kodeably.com</p>
                <h3>Learn more about Kodeably</h3>
                <LinkButton link={LINKS.KODEABLY} text={`kodeably.com`} />
                <h3>Latest Videos</h3>
                <div className="button-group-2">
                    <LinkButton link={LINKS.LATEST_VIDEO} text={`Fake Moonlanding`} />
                    <LinkButton link={LINKS.LATEST_VIDEO2} text={`Why Going Through A Coding Bootcamp Helped Me Land My First Job`} />
                    <LinkButton link={LINKS.LATEST_VIDEO3} text={`How to Start Coding TODAY`} />
                </div>
                <h3>YouTube Channel(s)</h3>
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
