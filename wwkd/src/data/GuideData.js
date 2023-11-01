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

import countingGuide0 from '../assets/images/guides/00.JPG';
import countingGuide1 from '../assets/images/guides/11.JPG';
import countingGuide2 from '../assets/images/guides/22.JPG';
import countingGuide3 from '../assets/images/guides/33.JPG';
import countingGuide4 from '../assets/images/guides/44.JPG';
import countingGuide5 from '../assets/images/guides/55.JPG';
import countingGuide6 from '../assets/images/guides/66.JPG';

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
            <p><strong>Arakni:</strong> I would recommend using your highest damaging spells off your sideboard in order to help chip as much damage as you can throughout this matchup. Though Arakni is not currently a popular hero, you’ll occasionally see one. You should be prepared for the potential of being fatigued as they will usually run high arcane barrier to counter you, and should also expect to see oasis respite. If your opponent does not have AB, you can go ahead and ignore all their attacks and race them down. Otherwise, if they have 3-4 AB then you should be prepared to pitch stack casually for a second cycle play. Due to their lower damage output potential, you can approach this matchup the same as you would against a Bravo, but far less threatening and more fatigue oriented.</p>
            <br></br><br></br>

            <img
                src={azaleaBanner}
                alt="azalea"
                style={{ maxWidth: '100%', margin: '1rem 0' }}
            />
            <p><strong>Azalea:</strong> I recommend using a mixture of low cost (0-1) arcane spells for Azalea, and going first if possible. This is a matchup that recently got better due to their bracers ban, but the matchup can still be tricky due to Azalea’s access to inertia tokens.</p>
            <p>Since the average method of playing Kano revolves around assembling your combo pieces (wildfire + lava/blazing), if you stick one of those combo pieces into your arsenal, this means that an inertia token can absolutely ruin your plan to combo her. This can be very hard to work around if Azalea is able to chain inertia tokens on back-to-back turns on a dominated arrow. She has a couple of ways that she’ll be able to generate inertia, so it’s going to be important to consider blocking them out when you can. However, if the inertia arrows are dominated, then sometimes you’re left with little choice. It’s important to remember that Azalea’s decks are usually very red-heavy, so even if they run 1-3AB, they are not able to block much.</p>
            <p>Additionally, if they commit to a large arrow against you, there is a large chance that they are tapping out their hand in order to do so. My advice against her is to effectively aggro her as hard as you can while looking for your combo pieces. If your arsenal (which has wildfire/lava/blazing) is being threatened, then you’ll have to consider your options here — do you have enough life to replenish and see that combo piece again? If not, I would consider throwing your combo into her earlier rather than later if you have the resources to do so. An average Azalea should not be able to block out much arcane, so it’s best to break striders early because you can and will run into situations where you’ll be inertia’ed back-to-back with no viable way of fighting back.</p>
            <br></br><br></br>
            
            <img
                src={boltynBanner}
                alt="boltyn"
                style={{ maxWidth: '100%', margin: '1rem 0' }}
            />
            <p><strong>Boltyn:</strong> I recommend using a mixture of low-cost (0-1) arcane spells and racing Boltyn as fast as possible, opting to go second if you can.</p>
            <p>Boltyn has become tougher since the last set due to his natural damage prevention from his new chest piece and access to damage prevention. They have transformed into an aggro character capable of dealing a substantial amount of damage while naturally being equipped to prevent much of your combo potential.</p>
            <p>It's important to note that if Boltyn includes too much spell void in their deck, they won't be able to nullify your average turn damage. This leads to a strategic pattern where you aim to bring their health as low as possible (low 20’s) before considering executing your combo.</p>
            <p>Boltyn currently has two main builds: one revolves around combo (lumina), while the other employs non-combo light attacks woven into longer combo chains. The combo Boltyn build, which has been present for a while, centers on a race to access combo cards — either you initiate with Wildfire or they launch a double lumina combo. Combo Boltyn has a slightly more streamlined process of finding their combo cards compared to Kano. Therefore, anticipate their potential ability to acquire what's necessary to establish a lethal turn against us.</p>
            <p>The matchup strategy is straightforward: focus on chipping away at Boltyn's health while seeking your key pieces. Combo Boltyn's average turns are relatively weak, indicating that you'll likely endure minimal damage during the interim, granting you time to set up your own strategy.</p>
            <p>The newer iteration of Boltyn has some additional peculiarities. Instead of heavily relying on lumina, their average turns yield slightly higher damage output. This matchup resembles something akin to an encounter with axe Dori, where damage is consistent and moderate, prompting you to manage the tempo as effectively as possible.</p>
            <br></br><br></br>
            <img
                src={bravoBanner}
                alt="bravo"
                style={{ maxWidth: '100%', margin: '1rem 0' }}
            />
            <p><strong>Bravo:</strong> I recommend using a mixture of medium-cost (1-2) arcane spells in this matchup and prioritize gaining life off of tomes from your arsenal. If possible, try to start second to immediately establish tempo.</p>
            <p>Bravo presents a character matchup that is either 50/50 for Kano or even more favorable for us, depending on your approach. There are three main strategies to consider here: tempoing the Bravo, building a pitch stack against Bravo for a second cycle solution, or a mixture of both.</p>
            <p>The tempo strategy is fairly straightforward. You'll often block with two cards and play a 2-cost spell on your turn to apply pressure and threaten damage. Alternatively, creating a pitch stack against Bravo is likely the optimal approach for achieving the highest win percentage. This pitch stack might involve multiple Wildfires or Blazings in combination with your arsenal's combo piece.</p>
            <p>If Bravo is monitoring your pitch stack, they might notice that you're setting aside your key combo pieces for later use. Such awareness could lead Bravo to apply additional pressure, anticipating that your combo pieces will resurface later. This might result in more dominated attacks disrupting your hand or the threat of pummels.</p>
            <p>Another approach to this matchup is the full tempo strategy. The goal is to apply sufficient pressure to induce Bravo to use arcane barriers, thereby reducing their threat potential on subsequent turns. Even removing just one card from their hand can disrupt their ability to dominate or pummel you. However, committing fully to the tempo strategy does not guarantee success and comes with risks. A single unfavorable hand could result in lost tempo, potentially leading to defeat.</p>
            <p>My recommended approach to this matchup is to strike a balance between tempo and building a pitch stack in case the game extends. By implementing a tempo strategy to diminish their threat potential and concurrently creating a simple pitch stack containing one or two combo pieces, you'll be prepared to adapt dynamically to Bravo's gameplay.</p>
            <p>If Bravo is resolute in aggressive play, your best option may be to focus on tempo as effectively as possible. Conversely, if Bravo is prioritizing defense with arcane barriers, you may need to rely more heavily on the second cycle pitch stack strategy.</p>
            <br></br><br></br>
            
            <img
                src={briarBanner}
                alt="briar"
                style={{ maxWidth: '100%', margin: '1rem 0' }}
            />
            <p><strong>Briar:</strong> Use a mixture of low-cost (0-1) arcane spells and consider going second if possible.</p>
            <p>The Briar matchup closely resembles the Boltyn combo matchup. Both heroes are focused on assembling their combo pieces to maximize their damage output. The key distinction between Briar and Boltyn lies in the predictability of their large combo turns, with Briar's being slightly less anticipated and sometimes lethal beyond initial recognition.</p>
            <p>If a Briar manages to acquire both Channel Mount Heroic and Force of Nature, the game could potentially conclude at that moment, particularly if you weren't able to defend against her attacks. Apart from this, the matchup follows a standard aggro pattern, where Briar can deal significant damage while also utilizing spell void to mitigate a substantial portion of your combo damage.</p>
            <p>My suggestion for this matchup is to focus on delivering as much damage as possible while also positioning yourself to threaten a combo turn when you have sufficient resources. Ideally, you want to prompt Briar to exhaust their hand, which, combined with your own combo threat, can help shift the balance in your favor.</p>
            <br></br><br></br>
            
            <img
                src={dashBanner}
                alt="dash"
                style={{ maxWidth: '100%', margin: '1rem 0' }}
            />
            <p><strong>Dash:</strong> Use a mixture of medium-cost (1-2) arcane spells for this matchup and consider going second if possible.</p>
            <p>This matchup is notably challenging, more so than some of our other aggro matchups. The Dash has the ability to maintain a natural three arcane barrier, deal substantial damage, and possesses a significant number of blues to use in conjunction with arcane barrier.</p>
            <p>I would recommend adopting a dynamic approach to this matchup. The Dash's aggression will be intense, and your strategy must adapt based on the types of attacks she employs. For instance, you might lean towards blocking until her Pounder card is expended, but be less inclined to block if she utilizes yellow or blue attacks. This could indicate a weaker hand, offering you an opportunity to retaliate.</p>
            <p>Entering a cycle of tempoing cards out of her hand is crucial. This strategy prolongs your survival and enhances your chances of finding your combo pieces. The paramount objective is to create enough breathing room to execute a combo turn while the Dash has limited cards in hand.</p>
            <p>For instance, imagine a scenario where you're at 1 life with the full combo in hand, and the Dash holds 4 cards. In this situation, if the Dash throws one attack and boosts, then blocks the remainder of your damage, you want to ensure you have enough buffer room in your life that the Dash must nearly exhaust her resources to eliminate you.</p>
            <p>While challenging, this concept is significant to bear in mind throughout the match due to the Dash's inherent proficiency in easily utilizing arcane barrier.</p>
            <br></br><br></br>
            
            <img
                src={doriBanner}
                alt="dori"
                style={{ maxWidth: '100%', margin: '1rem 0' }}
            />
            <p><strong>Dori:</strong> Use a mixture of low-cost (0-1) arcane spells and aim to outpace them. If possible, opt to go second.</p>
            <p>This matchup revolves around aggression, though you possess the capability to disrupt Dori's turns significantly with a full hand block (most of the time) when you have an unfavorable hand that you'd rather not use. Occasionally, consider emptying your hand to obstruct their actions. This tactic assumes you can place a potion or similar card on your turn to reset Dori's Dawn Blade counters. Alternatively, apply pressure to force them into a defensive stance, thereby lessening their impact on your game plan.</p>
            <p>If Dori chooses an outright race, you'll need to maximize your tempo and go all-out. Be aware that there are versions of her that incorporate Oasis Respite. Clues to this strategy might surface if she refrains from using her arsenal or if a Tunic counter remains active for an extended period. If such indications emerge, focus on coaxing out her resources whenever possible.</p>
            <p>Overall, the Dori matchup is a test of skill more than anything else. If you find yourself struggling, it might prove beneficial to play as Dori for a few matches. This experience can grant insights into her play patterns and potential actions. Often, you can deduce her hand's composition based on her available resources and the cards in her graveyard.</p>
            <p>Finally, consider the variations that use either Dual Axes or Decimator Axe. Both builds prioritize consistent damage over relying on on-hits, akin to Bravo but without the detrimental on-hits. When facing an Axe Dori build, strive to strategically reduce their tempo.</p>
            <br></br><br></br>
            
            <img
                src={dromaiBanner}
                alt="dromai"
                style={{ maxWidth: '100%', margin: '1rem 0' }}
            />
            <p><strong>Dromai:</strong> Utilize low-cost (0-1) arcane spells and prioritize rapid advancement, ideally by going second. However, consider unleashing as much offense as feasible during their first turn, depending on Dromai's actions.</p>
            <p>First and foremost, Dromai presents one of our more challenging matchups and is generally not in our favor. She manifests in two distinct builds: a red-heavy aggro build featuring attack actions and smaller dragons (which tends to favor us) and a large dragon build (which is less favorable for us).</p>
            <p>In either build, your primary objective is to apply aggressive pressure, while being cautious to primarily block Kyloria to prevent her from seizing your potions. While Dromai is red-heavy, exert caution as this isn't necessarily an easy matchup. Several dragons within her arsenal can render the match nearly impossible to win.</p>
            <p>Your hope largely hinges on Dromai's ability to acquire the dragons she requires. If she succeeds, you'll be banking on having immediate solutions at your disposal; otherwise, your chances of swift defeat increase significantly. Dromai also boasts access to cards like Sand Cover, capable of instantly preventing up to 4 damage. An important strategy is to allow Sand Cover to resolve, then respond with another instant-speed spell to absorb the Sand Cover's effect, even if your spell only deals 1 damage.</p>
            <p>Moreover, it's highly likely that Dromai will incorporate Oasis Respite alongside Sand Cover, introducing added complexity to your combo turn. Below, I've outlined three crucial dragons that warrant your attention.</p>
            
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
            <p><strong>Iyslander:</strong> Employ a mixture of 1-2 cost spells for this matchup and utilize Waning Moon along with Alluvion Chest.</p>
            <p>This matchup is not straightforward and demands a significant amount of patience and practice to navigate effectively. Every incremental point of damage carries weight in this game, making it crucial to meticulously consider every trade-off during this matchup.</p>
            <p>If you have the opportunity to go first, consider pinging yourself with damage to earn a free Alluvion counter—refrain from attacking the Islander during your initial turn. This matchup is expected to be protracted, with both players frequently employing arcane barrier.</p>
            <p>There are three key actions you need to undertake starting from your first turn:</p>
            <ol>
            <li>Set up and use Tomes of Fyendal from your arsenal to maximize your life gain throughout the matchup. Aiming for a minimum of two tomes from the arsenal to gain five lives per play is pivotal. This strategy is vital as Iyslander thrives on efficiency. Gaining life and mitigating some of her significant damage can tilt the game in your favor.</li>
            <li>Strategically arrange as many potions as possible. Energy potions can secure your position in the game and also act as a safeguard against potential lethal threats. Déjà vu potions are valuable for counter-attacks in both early and late stages of the game without necessarily committing to secure a kill.</li>
            <li>Given that efficiency is paramount against Iyslander, you'll want to orchestrate plays that maximize damage dealt while minimizing damage received. If you find yourself absorbing a substantial amount of damage from her (likely due to on-hit disruptions), consider committing to emptying your hand to retaliate with significant damage.</li>
            </ol>
            <p>An ideal game against her involves both you and her hovering around similar life thresholds. The third and final critical action against her is attempting to build a pitch stack for the late game. In contrast to other matchups, refrain from holding onto a Wildfire for extended periods. Instead, maintain reasonable arsenals (containing tomes, quickening, scalding, swell, and voltic) to chip away at her life total while concurrently using arcane barrier. Save your efforts to locate combo pieces for later in the game or as you approach your pitch stack.</p>
            <p>Given her abundance of arcane barrier and blue cards, reserve attempts at a lethal turn for situations where you are absolutely certain of securing it.</p>
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
        isGuideDisabled: false,
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
        isGuideDisabled: false,
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
        isGuideDisabled: false,
        discord: 'https://discordapp.com/users/100833161851699200',
    },
    {
        id: 1230123,
        title: 'Blackjack card counting',
        content: (
        <>
            <p>The technique is similar to the version of counting cards for blackjack, but even easier since we're usually dealing with around 60 cards. The benefit to this technique is to give you a better idea of whether there is a useful card on top of your deck, or just a blue, all through basic math. All that's required from the technique is keeping track of one number, and either adding or subtracting 1 from it.</p>
            <p>Let's walk through a realistic example and assume you have 30 blue cards in your deck, and the other 30 cards are things you would like to see on top of your deck which would be a mixture of reds and yellows. </p>
            <img
                src={countingGuide0}
                style={{ maxWidth: '100%', margin: '1rem 0' }}
            />
            <p>First we want to assign all of our blue cards a +1, and all the other cards which are reds and yellows a -1. Since we have 30 blues and 30 red's/yellow's, if we add up all of those +1's and -1's, we get 0. Keeping track of this total is very important, because it's going to be the starting point of our deck, and we will simply be incrementing this number either up or down depending on what we draw.</p>
            <p>So lets start with an example of an opening hand where we draw four blues which is equivilant to +4, since each blue is worth 1. All we do is just add 4 to our 0, and keep track of 4.</p>
            <img
                src={countingGuide1}
                style={{ maxWidth: '100%', margin: '1rem 0' }}
            />
            <p>Similarly and for example, if our opening hand were to be 4 reds, then that's worth -4. So we just subtract 4 from our 0, which would be -4.</p>
            <p>Both of these numbers above represent knowledge of what might be on top of your deck. If the number that you're keeping track of is positive, then there is a higher likelyhood that the top card of your deck is going to be a red/yellow. Oppositely if the number youre tracking is negative then the likelyhood of there being a blue on top of your deck is higher. All you have to do at this point is simply update your number whenever you draw a card into your hand, banish a card off the top of your deck using Kano's ability, or Opt and decide to bottom a card. As you track this singular number, it should give you better odds and likelyhood on what you may see on top of your deck. The more-leaning you are into either positive or negative, will help you work around establishing certain plays with higher chances of success.</p>
            <p>Lets hammer in one more example just so we're absolutely clear on how it works:</p>
            <br></br>
            <p>Turn 1:</p>
            <p>Draw 4 cards, blue blue blue blue. Count is 4, indicates red/yellow is more likely on top.</p>
            <p>Action phase: Kano, banishing red. Count is updated to 3. Kano, banishing red. Count is updated to 2. You now proceed to using your remaining blues to use those reds.</p>
            <img
                src={countingGuide2}
                style={{ maxWidth: '100%', margin: '1rem 0' }}
            />
            <p>End phase: Draw 4 cards, red yellow red red. Count is updated to -2, indicates blues are more likely on top.</p>
            <img
                src={countingGuide3}
                style={{ maxWidth: '100%', margin: '1rem 0' }}
            />
            <br></br>
            <p>Turn 2:</p>
            <p>Action phase: Play red card, pitching a yellow and red, arsenaling one card. Count is still -2.</p>
            <img
                src={countingGuide4}
                style={{ maxWidth: '100%', margin: '1rem 0' }}
            />
            <p>End phase: Draw 4 cards, red blue blue blue. Count is updated to 0, indicates equal chance of red/yellow/blue on top.</p>
            <img
                src={countingGuide5}
                style={{ maxWidth: '100%', margin: '1rem 0' }}
            />
            <br></br>
            <p>Now when is this actually useful, and why should you even bother?</p>
            <p>There are a large handful of situations where this is useful for playing Kano. My favorite is capitalizing on the use of tomes, since we run so many. Take for example you're in the situation below:</p>
            <img
                src={countingGuide6}
                style={{ maxWidth: '100%', margin: '1rem 0' }}
            />
            <p>You Kano and banish a tome off the top of your deck, and you still have a handful of blues. At this point your faced with a decision of whether you Kano more before you use the tome, or use the tome right then and there to preferably draw blues? Well you can use your count to determine what's better to do at that moment, as having access to that knowledge will give you a better likelyhood of drawing blues with your tome instead of reds/yellows, all the while attempting to capitalize on banishing reds instead.</p>
            <p>I use counting for just about everything in Kano, as our method of damage output can depend on whats on top of our deck. It can also help you determine whether or not your ragamuffin's is likely to fail or succeed. Helps in other instances when making decisions of whether or not to "go off" on your opponents turn, especially in the case where you have a heavy blue hand and your count is decently in the positive indicating reds on top of your deck. The useage of counting spirals into just about all other deicions during a game. It's a technique I prefer to use as it helps with making deicions based on simple math rather than gut feeling.</p>
            <p>I hope it helps you too!</p>
            <p></p>
        </>
        ),
        author: 'Dropmaw',
        date: 'October 31, 2023',
        imageSrc: testImage2,
        isGuideDisabled: false,
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