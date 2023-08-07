/* PuzzleData.js */

/*
* Static data for puzzles
*/
const PuzzleData = [
    {
        id: 1,
        src: require('../assets/images/easyPuzzles/WWKD12.jpg'),
        thumbnail: require('../assets/images/easyPuzzles/WWKD12-TN.jpg'),
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
        src: require('../assets/images/mediumPuzzles/WWKD4.jpg'),
        thumbnail: require('../assets/images/mediumPuzzles/WWKD4-TN.jpg'),
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
        src: require('../assets/images/mediumPuzzles/WWKD6.jpg'),
        thumbnail: require('../assets/images/mediumPuzzles/WWKD6-TN.jpg'),
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
        src: require('../assets/images/mediumPuzzles/WWKD7.jpg'),
        thumbnail: require('../assets/images/mediumPuzzles/WWKD7-TN.jpg'),
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
        src: require('../assets/images/mediumPuzzles/WWKDGoldfish1.jpg'),
        thumbnail: require('../assets/images/mediumPuzzles/WWKDGoldfish1-TN.jpg'),
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
        src: require('../assets/images/mediumPuzzles/WWKD11.jpg'),
        thumbnail: require('../assets/images/mediumPuzzles/WWKD11-TN.jpg'),
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
        src: require('../assets/images/hardPuzzles/WWKD8.jpg'),
        thumbnail: require('../assets/images/hardPuzzles/WWKD8-TN.jpg'),
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
        src: require('../assets/images/hardPuzzles/WWKD9.jpg'),
        thumbnail: require('../assets/images/hardPuzzles/WWKD9-TN.jpg'),
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
        src: require('../assets/images/easyPuzzles/WWKD13.jpg'),
        thumbnail: require('../assets/images/easyPuzzles/WWKD13-TN.jpg'),
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
        src: require('../assets/images/easyPuzzles/WWKD14.jpg'),
        thumbnail: require('../assets/images/easyPuzzles/WWKD14-TN.jpg'),
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
        src: require('../assets/images/mediumPuzzles/WWKD18.jpg'),
        thumbnail: require('../assets/images/mediumPuzzles/WWKD18-TN.jpg'),
        date: 'July 31, 2023',
        difficulty: "Medium",
        isNew: false,
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
    {
        id: 12,
        src: require('../assets/images/easyPuzzles/WWKD19.png'),
        thumbnail: require('../assets/images/easyPuzzles/WWKD19-TN.jpg'),
        date: 'August 4, 2023',
        difficulty: "Easy",
        isNew: true,
        title: 'Flip of the hat',
        description: (
        <>
            <p>- Your opponent has tapped out at 21 health.</p>
            <p>- You Kano twice, revealing a Tome of Aetherwind and a blue Prognosticate.</p>
            <p>- You send your wildfire from arsenal, and follow up with prognosticate to reveal your last Blazing Aether!</p>
            <p>- How can you guarantee your victory?</p>
            <p>- Shoutout to TheTurtleMaturin on Discord for creating this puzzle!</p>
        </>
        ),
        url: 'https://www.reddit.com/r/FleshandBloodTCG/comments/15ibs23/what_would_kano_do_wwkd_19/',
    },
    {
        id: 13,
        src: require('../assets/images/mediumPuzzles/WWKD20.jpg'),
        thumbnail: require('../assets/images/mediumPuzzles/WWKD20-TN.JPG'),
        date: 'August 7, 2023',
        difficulty: "Medium",
        isNew: true,
        title: 'Cindering premonition',
        description: (
        <>
            <p>- Your opponent is tapped out with zero resources and swinging for lethal</p>
            <p>- You've played Cindering Foresight from arsenal, bottomed a blue, and left Quickening on top and Singe below it</p>
            <p>- Life totals are in the top right</p>
            <p>- Can you find the damage to take down your opponent?</p>
        </>
        ),
        url: 'https://www.reddit.com/r/FleshandBloodTCG/comments/15kr9lu/what_would_kano_do_wwkd_20/',
    },
];

export default PuzzleData;
