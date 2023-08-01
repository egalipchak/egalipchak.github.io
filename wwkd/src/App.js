/* App.js */
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import PuzzlePage from './components/PuzzlePage';
import GuidesPage from './components/GuidesPage';
import AboutPage from './components/AboutPage';
import GuidePage from './components/GuidePage';
import PuzzleDetailsPage from './components/PuzzleDetailsPage';
import './common.css';

const App = () => {
  const puzzles = [
    {
      id: 1,
      src: require('./assets/images/easyPuzzles/WWKD12.jpg'),
      thumbnail: require('./assets/images/easyPuzzles/WWKD12-TN.png'),
      date: 'April 27, 2022',
      difficulty: "Easy",
      isNew: false,
      title: 'Baby steps',
      description: (
        <>
          <p>- Your opponent is swinging for lethal, figure out how to deal lethal damage.</p>
          <p>- You have just broken lens to see your two cards on top -- they're exposed on top of your deck</p>
          <p>- Opponent has 0 Arcane Barrier.</p>
          <p>- Life totals are displayed in top left. Opponent has 33 life remaining. Aether Flare is on the top of your deck.</p>
        </>
      ),
      url: 'https://www.reddit.com/r/FleshandBloodTCG/comments/ue6abk/what_would_kano_do_wwkd_12/',
    },
    {
      id: 2,
      src: require('./assets/images/mediumPuzzles/WWKD4.jpg'),
      thumbnail: require('./assets/images/mediumPuzzles/WWKD4-TN.png'),
      date: 'February 23, 2022',
      difficulty: "Medium",
      isNew: false,
      title: 'High roller',
      description: (
        <>
          <p>- Your opponent threatens 16 damage to your 8 life.</p>
          <p>- If you can't kill, surviving just one more turn is a big lesson when playing Kano – you'll need to return as much damage as possible for your "kill turn".</p>
          <p>- Get the opponent down to 10 without using boots for a decent chance. Get them down further for an even better chance.</p>
          <p>- Opponent has 0 Arcane Barrier.</p>
          <p>- Life totals displayed in top left. Aether Flare is the top card on the deck.</p>
        </>
      ),
      url: 'https://www.reddit.com/r/FleshandBloodTCG/comments/t0jcsz/what_would_kano_do_wwkd_4/',
    },
    {
      id: 3,
      src: require('./assets/images/mediumPuzzles/WWKD6.jpg'),
      thumbnail: require('./assets/images/mediumPuzzles/WWKD6-TN.png'),
      date: 'May 5, 2022',
      difficulty: "Medium",
      isNew: false,
      title: 'Fuse reveal',
      description: (
        <>
          <p>- You're being presented lethal. Find a way to win!</p>
          <p>- You know your opponent is running Arcane Barrier 2, and because they fused their attack you know they only have two resources to play with.</p>
          <p>- Assume they'll use them as efficiently as possible.</p>
          <p>- Shoutout to Zejjs#3210 from discord! Answer exists on global discord by searching, “in: wizard-kano WWKD - 6”</p>
        </>
      ),
      url: "",
    },
    {
      id: 4,
      src: require('./assets/images/mediumPuzzles/WWKD7.jpg'),
      thumbnail: require('./assets/images/mediumPuzzles/WWKD7-TN.png'),
      date: 'February 24, 2022',
      difficulty: "Medium",
      title: 'Luck or curse',
      description: (
        <>
          <p>- You are the world's luckiest Kano. Whenever you Opt or activate Kano, you get exactly what you want.</p>
          <p>- What is the largest amount of damage you can generate with this hand during your turn?</p>
          <p>- Abide by standard CC deck rules, use any cards you wish to run.</p>
          <p>- Opponent has 0 Arcane Barrier. No spell void.</p>
        </>
      ),
      url: 'https://www.reddit.com/r/FleshandBloodTCG/comments/t3nlf4/what_would_kano_do_wwkd_7/',
    },
    {
      id: 5,
      src: require('./assets/images/mediumPuzzles/WWKDGoldfish1.jpg'),
      thumbnail: require('./assets/images/mediumPuzzles/WWKDGoldfish1-TN.png'),
      date: 'May 9, 2022',
      difficulty: "Medium",
      isNew: false,
      title: 'Goldfishing',
      description: (
        <>
          <p>- Special thanks to mjed#0837 off the main FaB discord for this one!</p>
          <p>- You have the setup shown in the screenshot (counters on tunic, d-pot, e-pot, wildfire in arsenal, wildfire / sonic boom / snapback r / scalding b in hand).</p>
          <p>- How much damage can you do, assuming no defense from the opponent?</p>
          <p>- How exactly do you do it?</p>
        </>
      ),
      url: 'https://www.reddit.com/r/FleshandBloodTCG/comments/um0j9w/what_would_kano_do_wwkd_goldfish_edition/',
    },
    {
      id: 6,
      src: require('./assets/images/mediumPuzzles/WWKD11.jpg'),
      thumbnail: require('./assets/images/mediumPuzzles/WWKD11-TN.png'),
      date: 'March 30, 2022',
      difficulty: "Medium",
      isNew: false,
      title: 'Spectral death',
      description: (
        <>
          <p>- Figure out how to end the game, as your opponent is attacking you on their turn.</p>
          <p>- Opponent has 2 Arcane Barrier using Crown of Reflection and one Nullrune piece. They are potentially holding two blues in hand.</p>
          <p>- Note opponent has 4 spectral shields in play.</p>
          <p>- You have responded with Cindering Foresight from arsenal, and are free to arrange the three cards (right side) in any way you want.</p>
          <p>- Opponent will use AB as intelligently as possible. Life totals are displayed in the top left. Opponent has 11 life remaining.</p>
        </>
      ),
      url: 'https://www.reddit.com/r/FleshandBloodTCG/comments/tsmgzr/what_would_kano_do_wwkd_11/',
    },
    {
      id: 7,
      src: require('./assets/images/hardPuzzles/WWKD8.jpg'),
      thumbnail: require('./assets/images/hardPuzzles/WWKD8-TN.png'),
      date: 'March 3, 2022',
      difficulty: "Hard",
      isNew: false,
      title: 'The brick',
      description: (
        <>
          <p>- It is opponent's turn, and they're threatening lethal.</p>
          <p>- Opponent has 3 AB, and you know they are holding two blues from an earlier fuse that they presented.</p>
          <p>- They will use arcane barrier as intelligently as possible.</p>
          <p>- Life is displayed in the bottom-left -- you must do at least 20 damage.</p>
          <p>- The top of your deck is Ophidia.</p>
        </>
      ),
      url: 'https://www.reddit.com/r/FleshandBloodTCG/comments/t6388a/what_would_kano_do_wwkd_8/',
    },
    {
      id: 8,
      src: require('./assets/images/hardPuzzles/WWKD9.jpg'),
      thumbnail: require('./assets/images/hardPuzzles/WWKD9-TN.png'),
      date: 'March 10, 2022',
      difficulty: "Hard",
      isNew: false,
      title: 'Star of the show',
      description: (
        <>
          <p>- You're responding to Starvo activating their crippling crush. Figure out how to deal 17 damage during your opponents turn.</p>
          <p>- Opponent has 4AB active using Skullcap and one Nullrune piece, with two blues in hand.</p>
          <p>- Opponent will use AB as intelligently as possible.</p>
          <p>- Lesson in Lava is the top card of your deck, assume you can tutor whatever you want if lava hits.</p>
          <p>- Assume that you're not on the right track if you find yourself Kano'ing beyond the last Zap.</p>
        </>
      ),
      url: 'https://www.reddit.com/r/FleshandBloodTCG/comments/tbz8j9/what_would_kano_do_wwkd_9/',
    },
    {
      id: 9,
      src: require('./assets/images/easyPuzzles/WWKD13.jpg'),
      thumbnail: require('./assets/images/easyPuzzles/WWKD13-TN.png'),
      date: 'April 28, 2022',
      difficulty: "Easy",
      isNew: false,
      title: 'Cinders',
      description: (
        <>
          <p>- Your opponent is swinging for near-lethal(lightning surge), and you played a Cindering Foresight from arsenal during the reaction phase.</p>
          <p>- Arrange the cards in any order on top of your deck.</p>
          <p>- Opponent has 0 Arcane Barrier.</p>
          <p>- Life totals are displayed in top left. Opponent has 24 life remaining.</p>
        </>
      ),
      url: 'https://www.reddit.com/r/FleshandBloodTCG/comments/ujxhdb/what_would_kano_do_wwkd_13/',
    },
    {
      id: 10,
      src: require('./assets/images/easyPuzzles/WWKD14.jpg'),
      thumbnail: require('./assets/images/easyPuzzles/WWKD14-TN.png'),
      date: 'May 19, 2022',
      difficulty: "Easy",
      isNew: false,
      title: 'The classic',
      description: (
        <>
          <p>- Your opponent has exhausted their hand on their turn(zero cards in hand) and has zero pitch. </p>
          <p>- Opponent is closing combat chain and passing priority to you before end phase.</p>
          <p>- The exposed cards on the right are the top cards of your deck, lesson being on top. Assume you can Opt them after pitching your Eye.</p>
          <p>- Assume you have access to any cards you want in your deck if you decide to search.</p>
          <p>Life totals are displayed in top left. Opponent has 22 life remaining.</p>
        </>
      ),
      url: 'https://www.reddit.com/r/FleshandBloodTCG/comments/utcw3e/what_would_kano_do_wwkd_14/',
    },
    {
      id: 11,
      src: require('./assets/images/mediumPuzzles/WWKD18.jpg'),
      thumbnail: require('./assets/images/mediumPuzzles/WWKD18-TN.png'),
      date: 'July 31, 2023',
      difficulty: "Medium",
      isNew: true,
      title: 'Unexpected',
      description: (
        <>
          <p>- You're against Katsu who's racing you.</p>
          <p>- They're not going to AB at all because they know they have lethal next turn, and they rather use their AB incase you wildfire.</p>
          <p>- It's your turn and you're looking to do as much damage as possible.</p>
          <p>- Assume you have a blue(Aether Quickening) on top of your deck as pictured.</p>
          <p>- Life totals are displayed in top left. Opponent has 36 life remaining.</p>
          <p>- Considerations: Would it be wise to use metacarpus during your turn? Why or why not?</p>
        </>
      ),
      url: 'https://www.reddit.com/r/FleshandBloodTCG/comments/15emnwx/what_would_kano_do_wwkd_18/',
    },
  ];

  const guideData = [
    {
      id: 1,
      title: 'Kotarou\'s blitz primer guide',
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
      author: 'Kotarou aka Kieran Carnegie',
      date: 'July 30, 2023',
      discord: 'https://discordapp.com/users/100833161851699200',
    },
    {
      id: 2,
      title: 'Tog\'s Kano CC sideboard guide',
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
      discord: 'https://discordapp.com/users/269656564816674827',
      twitter: 'https://twitter.com/WeMakeBestFAB1',
    },
    {
      id: 3,
      title: 'Dropmaw\'s card counting strat',
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
      date: 'July 30, 2023',
      twitter: 'https://twitter.com/dropmaw',
      discord: 'https://discordapp.com/users/193506197591031810',
    },
    // Add more guides as needed
    /*{
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
      ),*/
  ];

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/puzzles" element={<PuzzlePage images={puzzles} />} />
          <Route path="/puzzles/:id" element={<PuzzleDetailsPage images={puzzles} />} />
          <Route path="/guides" element={<GuidesPage />} />
          <Route path="/guides/:id" element={<GuidePage guideData={guideData} />} />
          <Route path="/about" element={<AboutPage />} />
         {/*<Route path="/kanomatches" element={<KanoMatchesPage />} />*/}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
