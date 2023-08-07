/* GuideData.js */
import testImage0 from '../assets/images/test-image.png';
import testImage1 from '../assets/images/kano-adult.jpg'
import testImage2 from '../assets/images/test-image-1.jpg';
import testImage3 from '../assets/images/gaze-the-ages.jpg';

import arakniBanner from '../assets/images/banners/arakni-banner.jpg';
import azaleaBanner from '../assets/images/banners/azalea-banner.jpg';
import boltynBanner from '../assets/images/banners/boltyn-banner.jpg';
import bravoBanner from '../assets/images/banners/bravo-banner.jpg';
import briarBanner from '../assets/images/banners/briar-banner.jpg';
import dashBanner from '../assets/images/banners/dash-banner.jpg';
import doriBanner from '../assets/images/banners/dori-banner.jpg';
import dromaiBanner from '../assets/images/banners/dromai-banner.jpg';
import faiBanner from '../assets/images/banners/fai-banner.jpg';
import iyslanderBanner from '../assets/images/banners/iyslander-banner.jpg';
import kanoBanner from '../assets/images/banners/kano-banner.jpg';
import katsuBanner from '../assets/images/banners/katsu-banner.jpg';
import lexiBanner from '../assets/images/banners/lexi-banner.jpg';
import prismBanner from '../assets/images/banners/prism-banner.jpg';
import riptideBanner from '../assets/images/banners/riptide-banner.jpg';
import uzuriBanner from '../assets/images/banners/uzuri-banner.jpg';
import viseraiBanner from '../assets/images/banners/viserai-banner.jpg';
import vynnBanner from '../assets/images/banners/vynn-banner.jpg';
import leviBanner from '../assets/images/banners/levia-banner.jpg';
import rhinarBanner from '../assets/images/banners/rhinar-banner.jpg';

/*
* Static data for guides
*/
const GuideData = [
    {
        id: 3,
        title: 'Kano CC matchup guide',
        content: (
        <>
            <p><strong>Decklist examples(subject to update, check links often!):</strong></p>
            <a href="https://fabrary.net/decks/01H35ZHKQHBYJBX657JGS9HXVP" target="_blank" rel="noopener noreferrer">
            - Blazing For Lethals CC deck, DRs for pitch stacking matches
            </a>
            <br></br>
            <a href="https://fabrary.net/decks/01GZMXD7NNHS4Y7JC5XM2PM1GQ" target="_blank" rel="noopener noreferrer">
            - Pontiff Sulyvahns CC deck, DRs and Oasis for pitch stacking matches
            </a>
            <br></br>
            <a href="https://fabrary.net/decks/01H76F0JHRWVNNTB1H7NRVD6KC" target="_blank" rel="noopener noreferrer">
            - Dropmaws CC deck, with emphasized sideboard against Dromai
            </a>
            <br></br>
            <br></br>
            <img
                src={arakniBanner}
                alt="arakni"
                style={{ maxWidth: '100%', margin: '1rem 0' }}
            />
            <p><strong>Arakni:</strong> I would recommend using your highest damaging spells off your sideboard in order to help chip as much damage as you can throughout this matchup. Though Arakni is not currently a popular hero, you’ll occasionally see one. You should be prepared for the potential of being fatigued as they will usually run high arcane barrier to counter you, and should also expect to see oasis respite. If your opponent does not have AB, you can go ahead and ignore all their attacks and race the down. Otherwise if they have 3-4 AB then you should be prepared to pitch stack casually for a second cycle play. Due to their lower damage output potential, you can approach this matchup the same as you would against a Bravo, but far less threatening and more fatigue oriented.</p>
            <br></br><br></br>

            <img
                src={azaleaBanner}
                alt="azalea"
                style={{ maxWidth: '100%', margin: '1rem 0' }}
            />
            <p><strong>Azalea:</strong> I recommend using a mixture of low cost(0-1) arcane spells for Azalea, and going first if possible. This is a matchup that recently got better due to their bracers ban, but the matchup can still be tricky due to Azalea’s access to inertia tokens. Since the average method of playing Kano revolves around assembling your combo pieces(wildfire + lava/blazing), if you stick one of those combo pieces into your arsenal, this means that an inertia token can absolutely ruin your plan to combo her. This can be very hard to work around if Azalea is able to chain inertia tokens on back to back turns on a dominated arrow. She has a couple ways that she’ll be able to generate inertia, so it’s going to be important to consider blocking them out when you can, however if the inertia arrows are dominated then sometimes you’re left with little choice. It’s important to remember that Azalea’s are usually very red heavy decks, so even if they run 1-3AB, they are not able to block much. Additionally if they commit to a large arrow against you, there is a large chance that they are tapping out their hand in order to do so. My advice against her is to effectively aggro her as hard as you can while looking for your combo pieces. If your arsenal(which has wildfire/lava/blazing) is being threatened then you’ll have to consider your options here — do you have enough life to replenish and see that combo piece again? If not, I would consider throwing your combo into her earlier rather than later if you have the resources to do so. An average Azalea should not be able to block out much arcane so it’s best to break striders early, because you can and will run into situations where you’ll be inertia’ed back to back with no viable way of fighting back.</p>
            <br></br><br></br>
            
            <img
                src={boltynBanner}
                alt="boltyn"
                style={{ maxWidth: '100%', margin: '1rem 0' }}
            />
            <p><strong>Boltyn:</strong> I recommend using a mixture of low cost(0-1) arcane spells and race Boltyn as fast as possible, opting to go second if you can. Boltyn has gotten harder since the last set due to his natural damage prevention off his new chest piece, and access damage prevention. They are now an aggro character that can dish out a decent amount of damage while naturally being able to prevent a lot of your combo turn. It’s important to note that if Boltyn runs too much spell void, then they won’t be able to negate your damage, which leads to a play pattern where it’s important for you to get them as low as possible(low 20’s) before you consider comboing them. Boltyn has two main builds at the moment which either revolve around combo(lumina), or non-combo light attacks that are strung into longer combo chains. The combo build of Boltyn has been around for a while is comes down to who can get their combo cards faster — either you wildfire them first or they double lumina you. Combo Boltyn has a slightly easier time looking for his combo cards than Kano, so you can expect them to potentially find what they need in order to establish their lethal turn against us. The matchup is straight forward in that you need to chip as much as you can while looking for your big pieces. Combo bolton’s average turns are very weak so you will most likely not take too much damage in the interim, which gives you some time to setup. The newer version of Boltyn has some additional quirks where instead of leaning into lumina, their average turns do a little more damage on average. The matchup here is more akin to something like axe Dori where the damage is consistent and average, and you’ll have to tempo them as best as you can.</p>
            <br></br><br></br>
            
            <img
                src={bravoBanner}
                alt="bravo"
                style={{ maxWidth: '100%', margin: '1rem 0' }}
            />
            <p><strong>Bravo:</strong> I recommend using a mixture of medium cost(1-2) arcane spells in this matchup, and prioritize gaining life off of tomes from arsenal. Try to start second if you can in order to immediately start tempoing. Bravo is a character who’s either 50/50 for Kano, or even more favored for us depending on how you approach this matchup. The two main methods here are to either tempo the Bravo or pitch stack against Bravo for a second cycle solution. The tempoing gameplay is fairly simple in that you’ll usually block with two cards and send a 2 cost spell on your turn in order to threaten damage. Creating a pitch stack against him is probably the best solution to having the highest win percentage, where the pitch stack might involve multiple wildfires or blazing’s in combination with your arsenal’ed combo piece. If the Bravo is keeping an eye on your pitch stack, they'll most likely notice that you're pitching away your key combo pieces for later. If a Bravo realizes you're doing this, they might be more inclined to apply even more pressure against you knowing that your combo pieces are going to come around later. In this case you might expect more dominated attacks that disrupt your hand, or the threat of pummels. The alternative approaching this matchup is to simply tempo them turn by turn. The goal here is to play enough pressure to make them want to use arcane barrier, and if you do this then it makes their turns less threatening. Taking even just one card from their hand means that they will most likely not be able to dominate or pummel you. However the full tempo approach also doesn't necessarily guarantee a factory, and it could mean that one bad hand from you means losing tempo, which could also just lose you the game. My recommended approach to this matchup is to have a fine balance between tempo and also creating a pitch stack in case the game goes on for a longer period of time. By tempo’ing them and reducing their threat potential on their turn, you can then also casually focus on creating a simple pitch stack that might only have one or two combo pieces, which will lead to you with the ability to flex between both plans and dynamically adapt to what the Bravo’s gameplay is. If the Bravo is dead set on aggroing you down, then you’ll have no choice but to tempo as best as possible. Oppositely if the Bravo is troubling up and AB’ing as much as possible, then you might need to depend on that second cycle pitch stack.</p>
            <br></br><br></br>
            
            <img
                src={briarBanner}
                alt="briar"
                style={{ maxWidth: '100%', margin: '1rem 0' }}
            />
            <p><strong>Briar:</strong> Use a mixture of low cost(0-1) arcane spells, go second if you can. The Briar matchup is very similar to the Boltyn combo matchup, in the sense that they are both looking for their combo pieces in order to deal as much damage as possible. The difference between Briar and Boltyn is that briars large combo turns are a little less predictable and sometimes lethal beyond initial recognition. If a Briar gets channel mount heroic and force of nature, it's very possible for the game to end right then and there if you were not able to block out her attacks. Other than that this is a very standard aggro matchup where Briar is able to present a lot of damage, but is also capable of using spell void in order to prevent a large amount of your combo damage. My suggestion for this matchup is to present as much damage as you can, and also threaten the combo turn when you feel you have enough resources to do so, in combination with the Briar hopefully tapping out their hand.</p>
            <br></br><br></br>
            
            <img
                src={dashBanner}
                alt="dash"
                style={{ maxWidth: '100%', margin: '1rem 0' }}
            />
            <p><strong>Dash:</strong> Use a mixture of medium cost(1-2) arcane spells for the matchup, go second if you can. This is a fairly hard matchup above some of our other aggro matchups, because she is capable of having a natural three arcane barrier, does a lot of damage, and also has a healthy amount of blues in the case that she wants to use arcane barrier against you. I would recommend approaching this matchup very dynamically, because the dash will be very aggressive, but you'll have to gauge how aggressive she's capable of being based off of the attacks that she throws at you. For example I would be more inclined to block out until their pounder is gone, however I would be less inclined to block if the attacks that she's throwing are yellow or blue. This might indicate that her hand is bad, which means that you will have breathing room in order to throw some damage back at her. And if you can get into the play cycle of tempoing cards out of her hand, this means that you will live longer and be able to find your combo pieces. The most important part of this match is to allow yourself to have enough breathing room to establish a combo turn while the Dash does not have many cards and her hand. For example, if you’re in a situation where you’re at 1 life with the full combo in hand, and the Dash has 4 cards, all the dash has to do is throw one attack and boost, then block out the rest of your damage. You want to have enough buffer room in your life such that the dash has to nearly tap out to kill you. This is a little easier said than done, but it's an important thought to keep track of during the match because of her natural ability to arcane barrier so easily.</p>
            <br></br><br></br>
            
            <img
                src={doriBanner}
                alt="dori"
                style={{ maxWidth: '100%', margin: '1rem 0' }}
            />
            <p><strong>Dori:</strong> Use a mixture of low cost(0-1) arcane spells and race them, go second if you can. This is an aggro matchup at its core, however, you have the ability to completely stunt Dori’s turns with a full hand block(most of the time) if you have a terrible hand that you don’t want to use. Consider occasionally dumping your hand to block, assuming you have a potion that you can put out on your turn, or something of that sort to reset her dawn blade counters. Otherwise, pressure them to keep the pressure lower on yourself. If they decide to flat out race, you need to pedal to the metal and tempo them as best as possible. There are versions of her that run oasis respite, and you might get a few hints at this if they are not using their arsenal at all, and if they have a tunic counter that stays up for a long period of time. If this is the case, you'll need to try and force it out as best as possible. Other than that, I would say that the Dori matchup is a skill check more than anything. If you find that you are not comfortable against her, it might be worth trying to play her for a few games to understand what her play pattern is like and what she is capable of doing. Often times you can get a good idea of what she might have in her hand based on the amount of resources she has floating and the cards in her graveyard. Lastly, there is also a consideration for the builds which use either dual axes or decimator axe. Both of these builds focus more on consistent damage without relying on-hits, so they will most likely feel like bravo without detrimental on-hits. If you encounter an axe Dori, just try your best to tempo them down.</p>
            <br></br><br></br>
            
            <img
                src={dromaiBanner}
                alt="dromai"
                style={{ maxWidth: '100%', margin: '1rem 0' }}
            />
            <p><strong>Dromai:</strong> Use low cost(0-1) arcane spell and race as fast as possible, ideally going second, however, throwing as much as you can during their first turn depending on what the Dramai does. First and foremost, she is one of our harder matchups and is unfavored in most circumstances. She comes in two different builds as either a heavy red line aggro build with attack actions and smaller dragons, which is favored for us, or a big dragon build which is unfavored for us. With either of her builds, you’ll be focusing on aggroing her down, while paying consideration to only blocking kyloria in most cases so that she doesn’t steal your potions. Dromai is red-heavy so you can absolutely pressure her, but don't assume this is an easy matchup. There are a handful of dragons that will make your match near-impossible to win. You're basically hoping that she does not get the dragon's she needs -- if she does you're hoping that you have the answer for them immediately otherwise you’re teetering on the brink of dying quickly. Dromai has access to cards like sand cover which will prevent up to 4 damage at instant speed. It’s important to note that you can let the sand cover resolve, then respond with another instant speed spell to soak up the sand cover(even if your spell is just 1 damage). She can and most likely will also run oasis respite alongside sand cover which adds additional complexity to your combo turn. Here are three dragons to pay attention to below.
            </p>       
            <p>Kyloria: Will steal your potions. Kill it, block, or break the potion and use it right then and there. Any Aether dart is enough to kill them.</p>
            <p>Themai: Will prevent you from casting on their turn, so this will ruin your combo unless you choose to throw it before Them resolves. Otherwise, you'll have to let her resolve and then kill Themai on your turn.</p>
            <p>Tomeltai: Is the bane of your existence and will immediately attack to break your boots. Tomeltai costs 5, so you might anticipate her being used if the Dromai is saving her entire hand on your turn. Your only option against Tomeltai is using either your ragamuffin or striders to dig deep into your deck and kill the Tomeltai before her attack layer resolves or end the game right then and there with a combo. If the goal is to just kill the Tomeltai, try your best to only use either your striders or ragamuffin's hat, so you have the other one remaining for another wildfire turn later.</p>
            <br></br><br></br>
            
            <img
                src={faiBanner}
                alt="fai"
                style={{ maxWidth: '100%', margin: '1rem 0' }}
            />
            <p><strong>Fai:</strong> Use low cost(0-1) arcane spells and race as fast as possible, going second if you can. This matchup is just a classical aggressive fight. The most likely scenario is that you will not be blocking much and neither will the Fai. You'll have roughly 2 to 3 turns to find your combo pieces in order to burn down Fai.</p>
            <br></br><br></br>
            
            <img
                src={iyslanderBanner}
                alt="iyslander"
                style={{ maxWidth: '100%', margin: '1rem 0' }}
            />
            <p><strong>Iyslander:</strong> Use a mixture of 1-2 cost spells for this matchup, and use waning moon along with alluvion chest. This is not a straightforward matchup and takes a lot of patience and practice to navigate properly. Every small point of damage matters in this game, so it’s incredibly critical that you consider every trade-off of damage during this matchup. If you go first, attempt to ping yourself with damage for a free alluvion counter — do not attack the Islander during your first turn. This is going to be a long matchup where both of you are going to be using arcane barrier a lot. There are three things that you need to actively do starting from your first turn. You will want to set up and use Tomes of Fyendal from the arsenal in order to gain as much life as you can during this matchup. Ideally, you'll want to get a minimum of two tomes from the arsenal to gain five lives from each play. This is really important for the matchup because Iyslander functions off of efficiency, and if you can skew that by gaining life and negating some of her key damage, then you’ll have a greater chance at turning the game. The second thing that you'll want to be doing is setting up as many potions as possible. Energy potions will help you secure the game but also help prevent to lethal against you in the case that you need more resources. Déjà vu potions are great for counter-attacks in the early to late game without needing to absolutely secure a kill. Because the name of the game against her is efficiency, you'll always want to carve out plays where you do the most amount of damage while taking the least amount back. Or if you choose to take a large amount of damage from her(due to on-hit disruptions), 
            consider committing to dumping your hand in order to try and do as much damage back. An ideal game against her is where both you and her are around the same life threshold. The third and last thing that you want to do against her is to attempt a pitch stack for late game. This means that you will not want to be holding on to a wildfire for the majority of your game like you do in other matchups. You'll want to have reasonable arsenals(tomes/quickening/scalding/swell/voltic) that allow you to chip damage back but also to be able to arcane barrier at the same time. Consider only looking for combo pieces much later in the game or as you approach your pitch stack. Due to the amount of arcane barrier she has and also the amount of blues in her deck, you'll only really want to attempt a lethal turn when you absolutely know that you can secure it.</p>
            <br></br><br></br>
            
            <img
                src={kanoBanner}
                alt="kano"
                style={{ maxWidth: '100%', margin: '1rem 0' }}
            />
            <p><strong>Kano:</strong> Good luck on your poker match! Most Kano’s have different styles of play. Some are aggressive and others are more likely to block. I prefer Waning and Alluvion in this match up for more consistent chip damage.</p>
            <br></br><br></br>
            
            <img
                src={katsuBanner}
                alt="katsu"
                style={{ maxWidth: '100%', margin: '1rem 0' }}
            />
            <p><strong>Katsu:</strong> Use low cost(0-1) arcane spells and race as fast as possible, going second if you can. This matchup is very much like the Fai matchup because of it being aggressively oriented. The only difference between Katsu and Fai is that Katsu can threaten a dishonor which will turn off your Kano ability. Keep in mind this is only possible when you see a descendant gust wave on the chain. Often times you'll want to make sure you have enough blocking power in case the dishonor comes out. Apart from that, you'll just want to race them down as fast as possible.</p>
            <br></br><br></br>
            
            <img
                src={lexiBanner}
                alt="lexi"
                style={{ maxWidth: '100%', margin: '1rem 0' }}
            />
            <p><strong>Lexi:</strong> Use low cost(0-1) arcane spells and race as fast as possible, going second if you can. She is one of our harder matchups who is able to deal a solid amount of damage yet also disrupt our hand and arsenal. The matchup is fairly similar to the other aggressive matchups that you have, however, she is also able to use spell void and use heart of ice which can severely thwart your combo turn. Ideal games against her revolve around her getting worse hands than you. High roll as best as you can!</p>
            <br></br><br></br>
            
            <img
                src={prismBanner}
                alt="prism"
                style={{ maxWidth: '100%', margin: '1rem 0' }}
            />
            <p><strong>Prism:</strong> Use low cost(0-1) arcane spells and race as fast as possible, going second if you can. The new form of Prism is an interesting matchup that is ongoing and ever-changing with different builds. As a generic approach it's important to understand that prism is able to use her figments in order to help her prevent damage. However, because she starts at a lower life threshold, as long as you can work around the figments, you can still combo her down on any average game. My recommended and successful approach to this matchup is to use waning moon. The purpose of waning moon is going to be in order to get rid of their spectral shields and the figment damage prevention. Do you want to try and use your waning moon every single turn to minimize and keep their damage prevention at bay. For example, if you are going for your wildfire turn and they end up using a figment, you can use waning moon at instant speed to soak up the figment prevention. The usual play pattern for this matchup should be blocking a herald in order to stop her from gaining soul, and throwing something back at her during your turn. I would say that this match up is pretty interesting because you and prism can exchange damage until you are both around 10 life, at which you should have the advantage.</p>   
            <br></br><br></br>
            
            <img
                src={riptideBanner}
                alt="riptide"
                style={{ maxWidth: '100%', margin: '1rem 0' }}
            />
            <p><strong>Riptide:</strong> Use low cost(0-1) arcane spells and race as fast as possible, going second if you can. You can treat this matchup just like any other aggro race, with the consideration that Riptide has the potential to give you inertia tokens. He is able to lay down decent damage however it will be a bit less than that of ninja’s so you should expect to have a little more breathing room against him.</p>
            <br></br><br></br>
            
            <img
                src={uzuriBanner}
                alt="uzuri"
                style={{ maxWidth: '100%', margin: '1rem 0' }}
            />
            <p><strong>Uzuri:</strong> I recommend using a mixture of medium cost(1-2) arcane spells in this matchup, and prioritize gaining life off of tomes from the arsenal. Try to start second if you can in order to immediately start tempoing. This is very much like the Bravo matchup listed above, however, you will have to potentially deal with much more disruption during this matchup. Just like Bravo, you will want to consider playing a balanced game of pitch stacking and tempoing her at the same time. The good thing about her is that unlike Bravo, she's not capable of putting out large amounts of back to back damage. You'll have to pay attention to identify whether or not she is trying to fatigue you, and if this is the case, you will want to create a pitch stack and block most of the time until you get to a double wildfire turn. If she's not trying to fatigue you, then playing the tempo game is to your advantage.</p>
            <br></br><br></br>
            
            <img
                src={viseraiBanner}
                alt="viserai"
                style={{ maxWidth: '100%', margin: '1rem 0' }}
            />
            <p><strong>Viserai:</strong> Use low cost(0-1) arcane spells and race as fast as possible, going second if you can. This matchup is very close to what the ninja matchups are like, which is very aggro-heavy. Given the proper hand, Viserai is capable of dealing a large amount of damage in one turn. With the addition of the new runeblade armor which provides arcane barrier, it's very possible that Viserai might attempt to block out some of your relevant on hits. In this case, you'll just have to play the tempo game in which you should be favored. Just try your best to look for your combo pieces in the meantime and focus on throwing as much damage as you can because usually, these games do not last long. In order for the Viserai to do a large amount of damage, they will have to retain most of their hand so be wary of this, as this might signal a big turn coming your way.</p>
            <br></br><br></br>
            
            <img
                src={vynnBanner}
                alt="vynnset"
                style={{ maxWidth: '100%', margin: '1rem 0' }}
            />
            <p><strong>Vynnset:</strong> I recommend using a mixture of medium cost(1-2) arcane spells in this matchup, going second to start tempoing if you can. Just like the new Prism, this character and their meta-deck is ever-changing with different builds at the moment. For now, what you can expect out of Vynnset is that she is able to have fairly efficient hands where she will come at you with a little bit of arcane and usually a six attack. Her larger returns can rival that of Viserai, however, this will require some set up on her end. Initially, I want to say that this matchup is favored because at the beginning of Vynnset’s turn, she needs to banish a card from their hand which already gives us an advantage in terms of how much they might arcane barrier. I think the normal tempo approach works well against her in the sense that if she arcane barriers too much during your turn, she's not able to do much on hers. Controversially if she does too much on her return then she is completely out of resources which opens her up to being blown up.</p>
            <br></br><br></br>
            
            <img
                src={leviBanner}
                alt="levia"
                style={{ maxWidth: '100%', margin: '1rem 0' }}
            />
            <p><strong>Levia:</strong> I recommend using a mixture of medium cost(1-2) arcane spells in this matchup, going second to start tempoing if you can. This matchup is similar to a Bravo matchup, but the exchange is that they have less relevant on hits and a higher damage ceiling during their big turns. Depending on her build, she could also be geared more towards blocking out your damage versus dishing it out. The usual play pattern here is that so they will be very aggressive, or they will be a little bit more passive and wait for their blood rush below turns in order to dish out as much damage as possible. You will not be able to fatigues them out due to their recent buffs, so you will have to actively tempo them down to a comfortable life range where you can combo them. Just remember to pay attention to how fast their play pattern is. If you find that they are playing slower, then consider doing a block with 2, send back 2 play pattern. Otherwise if they're playing very aggressive then you should consider being just as aggressive or fully blocking out if you have bad hands.</p>
            <br></br><br></br>
            
            <img
                src={rhinarBanner}
                alt="rhinar"
                style={{ maxWidth: '100%', margin: '1rem 0' }}
            />
            <p><strong>Rhinar:</strong> I recommend using a mixture of medium cost(1-2) arcane spells in this matchup, going second to start tempoing if you can. This matchup is similar to the Levia matchup except for the fact that Rhinar works off of intimidate. Rhinar is very capable of either playing insanely aggressive and not allowing you to block, or they can take a slower approach where they'll arcane barrier with two cards, and then swing back with one large attack per turn. In my opinion, he can be slightly harder than Levia because of the intimidate. For example, if he manages to get his blood rush bellows, there is a good chance that the majority of your hand will be intimidated. If this happens it makes you answer the question right then and there as the blood rush bellow is played — do you attempt to partially block to go off with as much damage as possible. Often times this is a really hard question to answer because it's hard to predict what the Rhinar will be capable of during their big turns. If you find that they are playing slower, then consider doing a block with 2, send back 2 play pattern. Otherwise if they're playing very aggressive then you should consider being just as aggressive or fully blocking out if you have bad hands.</p>
        </>
        ),
        author: 'Dropmaw',
        date: 'August 7, 2023',
        imageSrc: testImage1,
        isGuideActive: false,
        twitter: 'https://twitter.com/dropmaw',
        discord: 'https://discordapp.com/users/193506197591031810',
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
        isGuideActive: false,
        discord: 'https://discordapp.com/users/269656564816674827',
        twitter: 'https://twitter.com/WeMakeBestFAB1',
    },
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
        isGuideActive: false,
        discord: 'https://discordapp.com/users/100833161851699200',
    },
    {
        id: 1230123,
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
        isGuideActive: true,
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