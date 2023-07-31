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
      date: 'July 30, 2023',
      difficulty: "Easy",
      isNew: true,
      title: 'Baby steps',
      description: (
        <>
          <p>- Your opponent has exhausted their hand on their turn (zero cards in hand) and has zero pitch.</p>
          <p>- Opponent is closing combat chain and passing priority to you before end phase.</p>
          <p>- The exposed cards on the right are the top cards of your deck, lesson being on top. Assume you can Opt them after pitching your Eye.</p>
          <p>- Assume you have access to any cards you want in your deck if you decide to search.</p>
          <p>- Life totals are displayed in top left. Opponent has 22 life remaining.</p>
        </>
      ),
      url: 'https://www.reddit.com/r/FleshandBloodTCG/comments/ue6abk/what_would_kano_do_wwkd_12/',
    },
    {
      id: 2,
      src: require('./assets/images/mediumPuzzles/WWKD4.jpg'),
      date: 'July 29, 2023',
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
      date: 'July 28, 2023',
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
      date: 'July 27, 2023',
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
      date: 'July 26, 2023',
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
      date: 'July 25, 2023',
      difficulty: "Medium",
      isNew: false,
      title: 'Spectral death',
      description: (
        <>
          <p>- Figure out how to end the game, as your opponent is attacking you on their turn.</p>
          <p>- Opponent has 2 Arcane Barrier using Crown of Reflection and one Nullrune piece. They are potentially holding two blues in hand.</p>
          <p>Note opponent has 4 spectral shields in play.</p>
          <p>- You have responded with Cindering Foresight from arsenal, and are free to arrange the three cards (right side) in any way you want.</p>
          <p>- Opponent will use AB as intelligently as possible. Life totals are displayed in the top left. Opponent has 11 life remaining.</p>
        </>
      ),
      url: 'https://www.reddit.com/r/FleshandBloodTCG/comments/tsmgzr/what_would_kano_do_wwkd_11/',
    },
    {
      id: 7,
      src: require('./assets/images/hardPuzzles/WWKD8.jpg'),
      date: 'July 24, 2023',
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
      date: 'July 23, 2023',
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
  ];

  const guideData = [
    {
      id: 1,
      title: 'Kano test guide!',
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
          <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
            Test reference link to google
          </a>
        </>
      ),
      author: 'John Doe',
      date: 'July 25, 2023',
      twitter: 'https://twitter.com/johndoe',
      discord: 'https://discord.gg/johndoe',
      email: 'johndoe@example.com',
    },
    {
      id: 2,
      title: 'Kano test guide! number 2',
      content: (
        <>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </>
      ),
      author: 'John Doe',
      date: 'July 25, 2023',
      twitter: 'https://twitter.com/johndoe',
      discord: 'https://discord.gg/johndoe',
      email: 'johndoe@example.com',
    },
    {
      id: 3,
      title: 'Kano test guide! number 3',
      content: (
        <>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </>
      ),
      author: 'John Doe',
      date: 'July 25, 2023',
      twitter: 'https://twitter.com/johndoe',
      discord: 'https://discord.gg/johndoe',
      email: 'johndoe@example.com',
    },
    {
      id: 4,
      title: 'Kano test guide! number 4',
      content: (
        <>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </>
      ),
      author: 'John Doe',
      date: 'July 25, 2023',
      twitter: 'https://twitter.com/johndoe',
      discord: 'https://discord.gg/johndoe',
      email: 'johndoe@example.com',
    },
    // Add more guides as needed
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
