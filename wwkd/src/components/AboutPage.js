// AboutPage.js
import React from 'react';
import MenuBar from './MenuBar';
import BottomBar from './BottomBar';
import './AboutPage.css';

const AboutPage = () => {
    return (
      <div>
        <MenuBar />
          <div className="content">
            <h1>About</h1>
            <p>Hey there, I'm Eugene(ID: 48835423). My journey with Flesh and Blood began somewhere between Crucible of War and Monarch, 
                which was also around the time I became intrigued with Kano, Dracai of Aether. As someone who has played numerous 
                mainstream TCGs throughout my life, I can confidently say that playing Kano has taken me on an unending voyage 
                of exploration. The deck and play style associated with Kano are incredibly rewarding, offering a plethora of 
                non-linear lines of play, ensuring that each Kano game is distinct from the others. So much so that playing 
                Kano almost feels like you’re playing an entirely different game than anyone else around you!</p>

            <p>The depth and complexity of the gameplay eventually inspired me to create a series of puzzles known as WWKD 
                (What would Kano do). Starting with my first puzzle posted on Reddit on 21 Feb 2022, I've continued to produce 
                more puzzles since then. Along the way I've also been lucky enough to have gained the contribution of other Kano 
                enthusiasts who have helped in crafting some of these brain teasers as well! I find great joy in creating puzzles. 
                When I make them, I often have a master 
                solution in mind, but what amazes me is how others come up with alternative solutions that are simply fantastic and 
                sometimes better than the intended combo-lines. I truly enjoy this aspect, as it allows me to learn from the ingenious solutions 
                of others as well.</p>

            <p>The purpose of this website is simple: to serve as a repository for all the WWKD puzzles going forward. However, 
                due to rule changes over time, some puzzles may not be included here as they may become obsolete.</p>

            <p>I warmly welcome suggestions and contributions from fellow players to create new puzzles for posting. If you'd like
                 to participate, please don't hesitate to reach out via the contact links provided below. I’m always happy
                  to give shoutouts and promote the original authors and their socials when sharing puzzles on Discord, Reddit, 
                  or this website. If the website grows alongside the 'Guides' section, I imagine that there will be more content 
                  in the months to come!</p>

            <p>Thank you for joining me on this exciting Kano Dracai adventure, and I hope you enjoy the challenges that await!</p>

            <h1>Roadmap</h1>
            <ul>
                <li><strike>Launch the website</strike> 🚀🚀🚀</li>
                <li>Expand the WWKD puzzle series, add more of the relevant legacy puzzles</li>
                <li>Add kano specific VOD matches sorted by most recent, and those those into a separate tab</li>
                <li>Elaborate on the guides section and reach out to creators in regards to posting</li>
                <li>(Ongoing) Enhance website design for better user experience</li>
                    <ul>
                        <li>Minor bugs and tweaks for accessability across different browsers and devices</li>
                        <li>Work on more responsive loading times</li>
                        <li>Deep links for WWKD puzzles</li>
                        <li>Sorting Puzzles</li>
                        <li>Feedback mechanism</li>
                    </ul>
            </ul>
        </div>
        <BottomBar />
      </div>
    );
  };
  
  export default AboutPage;
