/* GuideData.js */
import testImage0 from '../assets/images/test-image.png';
import testImage2 from '../assets/images/test-image-1.jpg';
import testImage3 from '../assets/images/gaze-the-ages.jpg';

/*
* Static data for guides
*/
const GuideData = [
    {
        id: 1,
        title: 'Blitz primer guide',
        content: (
        <>
            <p>
            Unleash massive 14+ damage spells and watch the meta tremble with fear as you control the battlefield with Kano. As the most fearsome deck in blitz, Kano's strategy involves flinging overwhelming amounts of arcane damage, forcing opponents to adapt their game plans to survive. With an unparalleled hero ability, Kano can play non-attack action cards from the top of the deck at instant speed, keeping opponents on edge and striking fear into their hearts. Embrace the role of the ultimate glass cannon with Kano's lowest starting life of 15, and discover the art of "false tempo" to outmaneuver your foes. Join this ever-evolving guide to harness the power of Kano and become a force to be reckoned with.
            </p>
            <a href="https://docs.google.com/document/d/1aB8YH65cT_Q7e2LYi21VMDoXwja05EwxZj04Bnk3XLI" target="_blank" rel="noopener noreferrer">
            Link to blitz primer guide
            </a>
        </>
        ),
        author: 'Kotarou',
        date: 'July 30, 2023',
        imageSrc: testImage0,
        block: false,
        discord: 'https://discordapp.com/users/100833161851699200',
    },
    {
        id: 2,
        title: 'Kano CC sideboard guide',
        content: (
        <>
            <p>
            Conquer the DTD meta with Kano using this comprehensive guide by Tog. Master sideboarding strategies against various classes to optimize your deck for every encounter. Join the ranks of skilled Kano players who dominate the DTD meta. Arm yourself with the knowledge and strategies in this matchup guide to become a true force to be reckoned with.
            </p>
            <a href="https://docs.google.com/document/d/16w_fDk4ZHgLlNjWEr6MN0woPo22jTK84KZiVAxHyIUY" target="_blank" rel="noopener noreferrer">
            Link to Tog's CC sideboard guide
            </a>
        </>
        ),
        author: 'Tog',
        date: 'July 30, 2023',
        imageSrc: testImage3,
        block: false,
        discord: 'https://discordapp.com/users/269656564816674827',
        twitter: 'https://twitter.com/WeMakeBestFAB1',
    },
    {
        id: 3,
        title: 'Blackjack card counting',
        content: (
        <>
            <p>The technique is similar to the version of counting cards for blackjack, but even easier since we're usually dealing with around 60 cards. The benefit to this technique is to give you a better idea of whether there is a useful card on top of your deck, or just a blue, all through basic statistics. All that's required from the technique is keeping track of one number.</p>
            <p>Let's walk through a realistic example and assume you have 30 blue cards in your deck, and the other 30 cards are things you would like to see on top of your deck which would be a mixture of reds and yellows. </p>
            <p>First we want to assign all of our blue cards a +1, and all the other cards which are reds and yellows a -1. If we add up all of those +1's and -1's, we get 0. This zero is very important to remember, because it's going to be the starting point of our deck, and we will simply be incrementing this number either up or down depending on what we draw.</p>
            <p>So lets start with an example of an opening hand where we draw four blues which is equivilant to +4. All we do is just add 4 to our 0, and keep track of 4.</p>
            <p>Similarly if our opening hand were to be 4 reds, then that's -4, so we just subtract 4 from our 0, which would be -4.</p>
            <p>Both of these numbers above represent knowledge of what might be on top of your deck. If the number that you're keeping track of is positive, then there is a higher likelyhood that the top card of your deck is going to be a red/yellow. Oppositely if the number youre tracking is negative then the likelyhood of there being a blue on top of your deck is higher. All you have to do at this point is simply update your number whenever you draw a card into your hand, banish a card off the top of your deck using Kano's ability, or OPT and decide to bottom a card. As you track this singular number, ir should give you better odds and likelyhood on what you may see on top of your deck.</p>
            <p>Lets hammer in one more example just so we're absolutely clear on how it works:</p>
            <br></br>
            <p>Turn 1:</p>
            <p>Draw 4 cards, blue blue blue blue. Count is 4, indicates red/yellow is more likely on top.</p>
            <p>Action phase: Kano, banishing red. Count is updated to 3. Kano, banishing red. Count is updated to 2.</p>
            <p>End phase: Draw 4 cards, red red red red. Count is updated to -2, indicates blues are more likely on top.</p>
            <br></br>
            <p>Turn 2:</p>
            <p>Action phase: Play red card, pitch 3 reds. Count is still -2.</p>
            <p>End phase: Draw 4 cards, red blue blue blue. Count is updated to 0, indicates equal chance of red/yellow/blue on top.</p>
            <br></br>
            <p>Now when is this actually useful?</p>
            <p>Well lets take for example that you Kano and banish a tome off the top of your deck. At this point your faced with a decision of whether you Kano more before your use the tome, or should use the tome right then and there to preferably draw blues? Well you can use your count to determine what's better to do at that moment, as having access to that know of knowledge will give you a better likelyhood of drawing blues with your tome instead of reds/yellows.</p>
            <p>It can also help you determine whether or not your ragamuffin's is likely to fail or succeed. Additionally also helps in many other instances of just make decisions of whether or not to "go off" on your opponents turn, especially in the case where you have a heavy blue hand and your count is decently in the positive indicating reds on top of your deck. The useage of counting spirals into just about all other deicions during a game. It's a technique I prefer to use as it helps with making deicions based on simple math rather than feeling. </p>
            <p></p>
        </>
        ),
        author: 'Dropmaw',
        date: 'TBD',
        imageSrc: testImage2,
        block: true,
        twitter: 'https://twitter.com/dropmaw',
        discord: 'https://discordapp.com/users/193506197591031810',
    },
    // Add more guides as needed
    /* // EXAMPLE
    {
    id: 1,
    title: 'Kotarou\'s blitz primer guide',
    content: (
    <>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <img
        src={require('./assets/images/test-image-1.jpg')}
        alt="Image description"
        style={{ maxWidth: '100%', margin: '1rem 0' }}
        />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <img
        src={require('./assets/images/test-image-1.jpg')}
        alt="Image description"
        style={{ maxWidth: '100%', margin: '1rem 0' }}
        />
                <img
        src={require('./assets/images/test-image-1.jpg')}
        alt="Image description"
        style={{ maxWidth: '100%', margin: '1rem 0' }}
        />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <a href="https://docs.google.com/document/d/1aB8YH65cT_Q7e2LYi21VMDoXwja05EwxZj04Bnk3XLI" target="_blank" rel="noopener noreferrer">
        Link to blitz primer guide
        </a>
    </>
    ),
    */
];

export default GuideData;