// AboutPage.js
import React from 'react';
import MenuBar from './MenuBar';
import './CommonPage.css';

const AboutPage = () => {
    return (
      <div>
        <MenuBar />
          <div className="content">
            <h1>About</h1>
            <p>Hey there, I'm Eugene. My journey with Flesh and Blood began between Crucible of War and Monarch expansions, which was also around the time I became obsessed with Kano, Dracai of Aether. As someone who has played numerous mainstream TCGs throughout my life, I can confidently say that playing Kano has taken me on an unending voyage of exploration. The deck and play style associated with Kano are incredibly rewarding, offering a plethora of non-linear lines of play, ensuring that each Kano game is distinct from the others. So much so that playing Kano almost feels like you’re playing an entirely different game than anyone else around you!</p>

            <p>The depth and complexity of the gameplay eventually inspired me to create a series of puzzles known as WWKD (What would Kano do). Starting with my first puzzle posted on Reddit on 21 Feb 2022, I've continued to produce more puzzles. I’d like to also acknowledge the contribution of other Kano enthusiasts who have helped in crafting some of these brain teasers.</p>

            <p>The purpose of this website is simple: to serve as a repository for all the WWKD puzzles going forward. However, due to rule changes over time, some puzzles may not be included here as they may become obsolete.</p>

            <p>I warmly welcome suggestions and contributions from fellow players to create new puzzles for posting. If you'd like to participate, please don't hesitate to reach out via the contact links provided on the homepage. I’m always happy to give shoutouts and promote the original authors and their socials when sharing puzzles on Discord, Reddit, or this website.</p>

            <p>Thank you for joining me on this exciting Kano Dracai adventure, and I hope you enjoy the challenges that await!</p>
        </div>
      </div>
    );
  };
  
  export default AboutPage;
