import React from 'react'
import './Widgets.css'
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterFollowButton,
  TwitterHashtagButton,
  TwitterMentionButton,
  TwitterTweetEmbed,
  TwitterMomentShare,
  TwitterDMButton,
  TwitterVideoEmbed,
  TwitterOnAirButton,
} from "react-twitter-embed";

  import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
    return (
        <div className='widgets'>
     <div className="widgets__input">
         <SearchIcon className='widgets__searchIcon'/>
         <input type="text" placeholder='Search'/>
     </div>
     <div className="widgets__widgetContainer">
         <h2>What's happening</h2>
         <TwitterTimelineEmbed
  sourceType="profile"
  screenName="thefield_in"
  options={{height: 400}}
/>
<TwitterTweetEmbed
  tweetId={'933354946111705097'}
/>
<TwitterShareButton
    url={'https://facebook.com/saurabhnemade'}
    options={{ text: '#reactjs is awesome', via: 'saurabhnemade' }}
  />
  <TwitterMentionButton
    screenName={'saurabhnemade'}
  />
  <TwitterHashtagButton
    tag={'cybersecurity'}
  />
  <TwitterFollowButton
    screenName={'saurabhnemade'}
  />
  <TwitterMomentShare
    momentId={'650667182356082688'}
  />
  <TwitterDMButton
    id={1364031673}
  />
  <TwitterVideoEmbed
    id={'560070183650213889'}
  />
  <TwitterOnAirButton
    id={'560070183650213889'}
  />
     </div>
        </div>
    )
}

export default Widgets
