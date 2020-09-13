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
                <p>Subscribe - Like - Share</p>
                <h3>Latest Video</h3>
                <LinkButton link={LINKS.LATEST_VIDEO} text={'Understanding useEffect()'} />
                <h3>YouTube Channel(s)</h3>
                <div className="button-group-1">
                    <LinkButton link={LINKS.CHANDLER_KNOWS_BEST} text={'ChandlerKnowsBest'} />
                    <LinkButton link={LINKS.CODING_WITH_CHANDLER} text={'CodingWithChandler'} />
                </div>
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
