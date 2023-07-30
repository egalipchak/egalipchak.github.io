/* App.js */
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import PuzzlePage from './components/PuzzlePage';
import GuidesPage from './components/GuidesPage';
import AboutPage from './components/AboutPage';
import KanoMatchesPage from './components/KanoMatchesPage';
import './common.css';

const App = () => {
  const recentImages = [
    {
      src: require('./assets/images/mediumPuzzles/WWKDGoldfish1.jpg'),
      title: 'Recent Puzzle 1',
      description: `- Your opponent is swinging for near-lethal (lightning surge), and you played a Cindering Foresight from arsenal during the reaction phase.\n- Arrange the cards in any order on top of your deck.\n- Opponent has 0 Arcane Barrier.\n- Life totals are displayed in the top left. Opponent has 24 life remaining.`,
      url: 'https://www.example.com/recent-puzzle-1',
    },
  ];
  const easyImages = [
    {
      src: require('./assets/images/easyPuzzles/WWKD12.jpg'),
      title: 'Baby steps',
      description: `- Your opponent has exhausted their hand on their turn (zero cards in hand) and has zero pitch.\n- Opponent is closing combat chain and passing priority to you before end phase.\n- The exposed cards on the right are the top cards of your deck, lesson being on top. Assume you can Opt them after pitching your Eye.\n- Assume you have access to any cards you want in your deck if you decide to search.\n- Life totals are displayed in top left. Opponent has 22 life remaining.`,
      url: 'https://www.reddit.com/r/FleshandBloodTCG/comments/ue6abk/what_would_kano_do_wwkd_12/',
    },
  ];
  const mediumImages = [
    {
      src: require('./assets/images/mediumPuzzles/WWKD4.jpg'),
      title: 'High roller',
      description: `- Your opponent threatens 16 damage to your 8 life.\n- If you can't kill, surviving just one more turn is a big lesson when playing Kano – you'll need to return as much damage as possible for your "kill turn".\n- Get the opponent down to 10 without using boots for a decent chance. Get them down further for an even better chance.\n- Opponent has 0 Arcane Barrier.\n- Life totals displayed in top left. Aether Flare is the top card on the deck.`,
      url: 'https://www.reddit.com/r/FleshandBloodTCG/comments/t0jcsz/what_would_kano_do_wwkd_4/',
    },
    {
      src: require('./assets/images/mediumPuzzles/WWKD6.jpg'),
      title: 'Fuse reveal',
      description: `- You're being presented lethal. Find a way to win!\n- You know your opponent is running Arcane Barrier 2, and because they fused their attack you know they only have two resources to play with.\n- Assume they'll use them as efficiently as possible.\n- Shoutout to Zejjs#3210 from discord! Answer exists on global discord by searching, “in: wizard-kano WWKD - 6”`,
      url: "",
    },
    {
      src: require('./assets/images/mediumPuzzles/WWKD7.jpg'),
      title: 'Luck or curse',
      description: `- You are the world's luckiest Kano. Whenever you Opt or activate Kano, you get exactly what you want.\n- What is the largest amount of damage you can generate with this hand during your turn?\n- Abide by standard CC deck rules, use any cards you wish to run.\n- Opponent has 0 Arcane Barrier. No spell void.`,
      url: 'https://www.reddit.com/r/FleshandBloodTCG/comments/t3nlf4/what_would_kano_do_wwkd_7/',
    },
    {
      src: require('./assets/images/mediumPuzzles/WWKDGoldfish1.jpg'),
      title: 'Goldfishing',
      description: `- Special thanks to mjed#0837 off the main FaB discord for this one!\n- You have the setup shown in the screenshot (counters on tunic, d-pot, e-pot, wildfire in arsenal, wildfire / sonic boom / snapback r / scalding b in hand).\n- How much damage can you do, assuming no defense from the opponent?\n- How exactly do you do it?`,
      url: 'https://www.reddit.com/r/FleshandBloodTCG/comments/um0j9w/what_would_kano_do_wwkd_goldfish_edition/',
    },
    {
      src: require('./assets/images/mediumPuzzles/WWKD11.jpg'),
      title: 'Spectral death',
      description: `- Figure out how to end the game, as your opponent is attacking you on their turn.\n- Opponent has 2 Arcane Barrier using Crown of Reflection and one Nullrune piece. They are potentially holding two blues in hand.\nNote opponent has 4 spectral shields in play.\n- You have responded with Cindering Foresight from arsenal, and are free to arrange the three cards (right side) in any way you want.\n- Opponent will use AB as intelligently as possible. Life totals are displayed in the top left. Opponent has 11 life remaining.`,
      url: 'https://www.reddit.com/r/FleshandBloodTCG/comments/tsmgzr/what_would_kano_do_wwkd_11/',
    },
  ];
  const hardImages = [
    {
      src: require('./assets/images/hardPuzzles/WWKD8.jpg'),
      title: 'The brick',
      description: `- It is opponent's turn, and they're threatening lethal.\n- Opponent has 3 AB, and you know they are holding two blues from an earlier fuse that they presented.\n- They will use arcane barrier as intelligently as possible.\n- Life is displayed in the bottom-left -- you must do at least 20 damage.\n- The top of your deck is Ophidia.`,
      url: 'https://www.reddit.com/r/FleshandBloodTCG/comments/t6388a/what_would_kano_do_wwkd_8/',
    },
    {
      src: require('./assets/images/hardPuzzles/WWKD9.jpg'),
      title: 'Star of the show',
      description: `- You're responding to Starvo activating their crippling crush. Figure out how to deal 17 damage during your opponents turn.\n- Opponent has 4AB active using Skullcap and one Nullrune piece, with two blues in hand.\n- Opponent will use AB as intelligently as possible.\n- Lesson in Lava is the top card of your deck, assume you can tutor whatever you want if lava hits.\n- Assume that you're not on the right track if you find yourself Kano'ing beyond the last Zap.`,
      url: 'https://www.reddit.com/r/FleshandBloodTCG/comments/tbz8j9/what_would_kano_do_wwkd_9/',
    },
  ];

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/*<Route path="/recent" element={<PuzzlePage images={recentImages} />} />*/}
          <Route path="/easy" element={<PuzzlePage images={easyImages} />} />
          <Route path="/medium" element={<PuzzlePage images={mediumImages} />} />
          <Route path="/hard" element={<PuzzlePage images={hardImages} />} />
          {/* Add the new routes */}
          <Route path="/guides" element={<GuidesPage />} />
          <Route path="/about" element={<AboutPage />} />
         {/*<Route path="/kanomatches" element={<KanoMatchesPage />} />*/}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
