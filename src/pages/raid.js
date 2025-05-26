import React, { useEffect } from 'react';
import SideMenu from '../components/side-menu';
import StickySubmenu from '../components/sticky-submenu';
import CreditsExpander from '../components/credits-expander';
import PDFMultiviewer from '../components/pdf-multiviewer';
import ContentPageTabs from '../components/content-page-tabs';
import IconListen from '../svg/Icon_Listen';
import IconLook from '../svg/Icon_Look';
import Mirador from '../components/mirador-viewer';

const Raid = () => {
    return (
        <div className='page-wrapper'>
            <SideMenu active='raid'/>
            <div className='content'>
                <img className='banner' alt='' src='/assets/images/raid/Raid_Banner.png'/>
                <h2 className='content-title pink'>RAID ON THE PALACE</h2>
                <h3 className='content-subtitle pink'>Care, Resistance, and Recovery (2000-2005) </h3>
                
                <p>The September 2000 raid on the Pussy Palace, conducted under the guise of liquor law enforcement, was a turning point in Toronto’s LGBTQ+ history, exposing the systemic policing of queer spaces and igniting community resilience. More than a bathhouse, the Palace was a radical space for queer and trans people to explore their sexuality. Organizers wove care practices into each event, making the Palace a site of queer resistance and recovery before, during, and after the police invasion. </p>
                <p style={{marginBottom:60}}>Following the raid, two security volunteers were charged under the Liquor Licence Act, prompting swift community mobilization through fundraising and protests. Legal proceedings argued that male officers’ presence violated patrons’ privacy, leading to the dismissal of charges in 2002. However, the focus on privacy rights sparked debate within the community, with some feeling it overshadowed the radical politics of queer and trans inclusivity. From 2001 to 2005, the TWBC pursued further legal actions, including a class-action lawsuit and human rights complaint. A settlement awarded $350,000 to fund LGBTQ+ organizations and required police reforms. Despite these efforts, true justice, many argued, would require more radical, abolitionist approaches to dismantle systemic police violence and harassment.</p>

                <ContentPageTabs 
                    titles={[
                        {name: 'THE RAID', id: 'the-raid'},
                        {name: 'CARE AT THE PALACE', id: 'care-at-the-palace'},
                        {name: 'POST-RAID ACTIVISM & CIVIL SUIT', id: 'post-raid-activism-and-civil-suit'},
                        {name: 'HR COMPLAINT & CLASS ACTION', id: 'hr-complaint-and-class-action'}
                    ]}
                    content={[
                        <>
                            <h2 className='pink content-page-subheader'>THE RAID (SEPTEMBER 14-15, 2000)</h2>
                        
                            <p>The September 14, 2000, Pussy Palace event — dubbed “2000 Pussies” — marked the fourth bathhouse organized by the TWBC. As dusk turned into night, over 350 patrons were frolicking joyously throughout the four-story Victorian mansion at Carlton and Mutual Streets. Around 12:15 a.m. on September 15, two undercover female officers, Janet Hall and Chris LaFrance, entered the space. Posing as patrons, Toronto Police had assigned them to investigate alleged anonymous reports from two female callers who, <a href="https://xtramagazine.com/power/got-booze-no-privacy-45898">police later claimed</a>, characterized past Palace events as a “sexorama” where indecent acts occurred. Based on what they observed, LaFrance phoned her superior to suggest he send in officers. At 12:45 a.m., five male plainclothes officers from the local 52 Division — Myron Demkiw, Adrian Greenaway, Peter Christie, Rich Petrie, and lead detective Dave Wilson — arrived on the scene.  </p>
                            <p>Under the pretense of a liquor licence inspection, Wilson questioned lead security volunteer JP Hornick at the entrance, while the remaining officers split up, searching every inch of the club’s four floors until 2:15 a.m. The police walked through the pool, sauna, and showers, staring at semi-dressed and naked revelers; they knocked on closed doors, asking for IDs and recording names and addresses. The intrusion of male officers into this private, sex-positive, women-and-trans-only space disrupted the evening, resulting in a hurried departure of patrons and, for many, a sense of violation. Two weeks later, Hornick and fellow security volunteer R. Atkins (pseudonym), both signatories on the event’s Special Occasion Permit, were charged with six counts each of violating the Liquor Licence Act. These charges set in motion an extended legal battle, positioning the raid at the centre of a larger conversation about gender, sexuality, and police practices. </p>
                        
                            <div className='split-66-33'>
                                <div>
                                    <button className='listen-button' onClick={() => document.getElementById('raid-on-the-palace').play()}><IconListen/> Listen to “Raid on the Palace”</button>
                                    <p>The raid prompted widespread media coverage that was unexpectedly supportive of the Pussy Palace and highly critical of police conduct. Local queer publication <a href="https://xtramagazine.com/"><i>Xtra</i></a>, founded by <a href="https://www.pinktrianglepress.com/who-we-are/">Pink Triangle Press</a>, took immediate action to document and condemn the incident. With the press’s founders having personal experience in the 1981 crackdowns on gay men’s bathhouses (see <a href="###">Before the Palace</a>), <i>Xtra</i> was primed to challenge police overreach. Journalist Paul Gallant, a reporter for <i>Xtra</i> back in 2000, recalls managing editor Eleanor Brown assigning a reporter immediately. Given “the history of the press” Gallant shared, “if there’s police action we swung into gear.” <i>Xtra’s</i> vigilance had been heightened earlier in 2000 when Julian Fantino, known for his controversial record in London, Ontario, was appointed Toronto’s police chief. Gallant reflects, “we were very much on the watch for him,” expecting potential conflicts under his leadership. This sentiment only intensified when Fantino hosted an exclusive Pride reception in spring of 2000, notably excluding <i>Xtra</i> from the list of invited guests. </p>
                                    <button className='listen-button' onClick={() => document.getElementById('king-fantino').play()}><IconListen/> Listen to “King Fantino”</button>
                                    <p>In a rare departure from past narratives, mainstream media outlets, including <i>The Globe and Mail</i>, CBC Radio, and <i>The Toronto Star</i>, also voiced support for the Pussy Palace, expressing sympathy for the bathhouse and sharp criticism of police actions — a marked shift since the 1981 raids. An editorial from <i>The Globe and Mail</i> on September 25, 2000, underscored this sentiment, specifically condemning the choice to send “five <i>male</i> officers” (emphasis in original) into the space. “Given the history of Toronto police and gay bathhouses,” the editorial noted, “one might have expected the force to show more sensitivity.” Failing to send female officers, it continued, blurred “the line between routine liquor-permit enforcement and harassment,” showing a concerning lack of consideration for both history and the event’s context. </p>
                                    <p>Then-journalist Josey Vogels, known for her sex-positive column, <a href="https://vehiculepress.com/shop/my-messy-bedroom-love-sex-in-the-90s-by-josey-vogels/"><i>My Messy Bedroom</i></a>, attended the Palace as a member of the press the night it was raided. She was struck by the absurdity of the raid, particularly the invasive presence of male officers. </p>
                                    <button className='listen-button' onClick={() => document.getElementById('gruff-guys').play()}><IconListen/> Listen to “Gruff Guys”</button>
                                </div>
                                <div>
                                    <h3><IconListen/> RAID ON THE PALACE</h3>
                                    <div className='video-div'>
                                        <video id='raid-on-the-palace' poster='/assets/images/raid/The Raid_Narrators Reflect_Cover.png' controls>
                                            <source src='/assets/video/The Raid_Narrators Reflect_Video.mov'/>
                                            <track src='/assets/vtt/The Raid_Narrators Reflect_Captions.vtt' kind='subtitles' label='CC'/>
                                        </video>
                                    </div>
                                    <p className='video-description'>Multiple narrators recount their memories of the police invasion, its aftermath, and the transformative impact of this collective wound.</p>
                                    <CreditsExpander content={<>Stranges, Alisha, and Elspeth Brown. “Raid on the Palace: Narrator’s Reflect.” Narrated by Hanlon Uafás-Álainn, Diane Hamilton, Renee Racine, Lyla Miklos, JP Hornick, Stephanie Dutrizac, Ange Beever, Noelle Campbell-Smith, T’Hayla Ferguson, Nancy Irwin, Nia Herlihy, Tera Mallette, Karen B. K. Chan, Janet Rowe, Robin Woodward, Chanelle Gallant, and Leanne Powers. Illustrated, animated, and edited by Ayo Tsalithaba. Produced by LGBTQ Oral History Digital Collaboratory. <i>The History of the Pussy Palace: A Digital Exhibit</i>. 2022. Video, 9:15.</>}/>

                                    <h3><IconListen/> KING FANTINO</h3>
                                    <div className='video-div'>
                                        <video id='raid-on-the-palace' poster='/assets/images/raid/The Raid_King Fantino_Cover.png' controls>
                                            <source src='/assets/video/The Raid_King Fantino_Video.mp4'/>
                                            <track src='/assets/vtt/The Raid_King Fantino_Captions.vtt' kind='subtitles' label='CC'/>
                                        </video>
                                    </div>
                                    <p className='video-description'>Journalist Paul Gallant reflects on Fantino's controversial appointment, anticipating negative actions against the queer community.</p>
                                    <CreditsExpander content={<>Stranges, Alisha, and Elspeth Brown. “Raid on the Palace: King Fantino.” Narrated by Paul Gallant. Illustration by Ayo Tsalithaba. Produced by LGBTQ Oral History Digital Collaboratory. <i>The History of the Pussy Palace: A Digital Exhibit</i>. 2024. Video, 1:08.</>}/>

                                    <h3><IconListen/> GRUFF GUYS</h3>
                                    <div className='video-div'>
                                        <video id='gruff-guys' poster='/assets/images/raid/The Raid_Vogels_Cover.png' controls>
                                            <source src='/assets/video/The Raid_Gruff Guys_Video.mp4'/>
                                            <track src='/assets/vtt/The Raid_Gruff Guys_Captions.vtt' kind='subtitles' label='CC'/>
                                        </video>
                                    </div>
                                    <p className='video-description'>Journalist Josey Vogels recalls the raid’s surreal, forceful disruption of an event she saw as harmless and consensual.</p>
                                    <CreditsExpander content={<>Stranges, Alisha, and Elspeth Brown. “Raid on the Palace: Gruff Guys.” Narrated by Josey Vogels. Illustration by Ayo Tsalithaba. Produced by LGBTQ Oral History Digital Collaboratory. <i>The History of the Pussy Palace: A Digital Exhibit</i>. 2024. Video, 0:59.</>}/>
                                </div>
                            </div>

                            <p>While patrons and organizers largely agreed that the choice to send male officers was inappropriate and that police conduct was excessively forceful, the narrative surrounding the raid diverged sharply in queer versus mainstream media, with each framing the invasion in ways that reflected distinct views on women’s sexuality. Both outlets critiqued the Toronto police for sending male officers into a female-dominated space; however, queer publications went further, combining criticism with detailed descriptions of the event’s unapologetic sexual expression. <i>Siren Magazine</i>, a now-defunct Toronto-based lesbian publication, circulated patron <a href="https://pussypalaceproject.org/wp-content/uploads/2023/09/Irwin_Siren-Article.pdf">Nancy Irwin’s vivid account</a>, where she describes women exploring various erotic activities before and after the raid. “Women wandered the four floors,” she wrote, “wearing everything from regular clothes to lingerie. [. . .] And the sounds of women moaning and coming was like a chorus heard through the halls.” Post-raid, Irwin recalls a moment with a friend: “We discussed doing a flogging, but thought it best not to, given the police presence. [. . .] Instead, we left toys in bags and chatted about female ejaculation — who started when, who could squirt the farthest, and what a mess it can make on a feather bed.”</p>
                        
                            <div className='split-66-33'>
                                <div>
                                    <p>Meanwhile, <i>Now Magazine</i> presented <a href="https://nowtoronto.com/news/polite-gal-love/">a more restrained perspective</a>, with straight ally and participant-observer Josey Vogels’ characterizing the atmosphere as “polite gal love,” marked by “femininely genteel” interactions akin to “any old lesbian bar.” Vogels described an evening filled with “Oops, sorrying and Pardon meing,” crafting an image of “hyper-civility” and “harmless” fun that reflected, as Vogels herself admits, broader societal misconceptions of women’s sexuality as less threatening. Despite this portrayal, Vogels views the raid as a significant moment of women “demanding . . . space” for sexual expression. While her tone in <i>Now</i> aligned with other mainstream coverage, in her interview she emphasized the importance of lesbian and queer women using sexual visibility as “a tool for activism.” </p>
                                    <button className='listen-button' onClick={() => document.getElementById('tied-to-sex').play()}><IconListen/> Listen to “Tied to Sex”</button>
                                    <p>Unfortunately, the mainstream media’s supportive framing often skirted the event’s explicit eroticism, subtly reinforcing gendered double standards around sexual expression. This sympathetic media response had a profound impact on public perception, with organizers and patrons recalling how it brought visibility to issues of privacy, sexuality, and police abuse of power. TWBC member Chanelle Gallant observed that even straight allies expressed outrage, viewing the raid as a blatant intrusion by male officers into women’s space. But Gallant and others acknowledge that this response was influenced by the predominantly white, cisgender makeup of the attendees. The media’s focus on the male officers’ intrusion underscored societal discomfort with female sexuality, which, intertwined with sexism and white supremacy, resulted in a public perception that the police had crossed a line. This reaction contrasted sharply with the lack of similar outrage when male-oriented venues faced similar raids. </p>
                                    <button className='listen-button' onClick={() => document.getElementById('the-spin').play()}><IconListen/> Listen to “The Spin”</button>
                                </div>
                                <div>
                                    <h3><IconListen/> TIED TO SEX</h3>
                                    <div className='video-div'>
                                        <video id='tied-to-sex' poster='/assets/images/raid/The Raid_Vogels_Cover.png' controls>
                                            <source src='/assets/video/The Raid_Tied to Sex_Video.mp4'/>
                                            <track src='/assets/vtt/The Raid_Tied to Sex_Captions.vtt' kind='subtitles' label='CC'/>
                                        </video>
                                    </div>
                                    <p className='video-description'>Vogels highlights the historical neglect of lesbian sexuality and the importance of queer women’s sexual visibility.</p>
                                    <CreditsExpander content={<>Stranges, Alisha, and Elspeth Brown. “Raid on the Palace: Tied to Sex.” Narrated by Josey Vogels. Illustration by Ayo Tsalithaba. Produced by LGBTQ Oral History Digital Collaboratory. <i>The History of the Pussy Palace: A Digital Exhibit</i>. 2024. Video, 1:00.</>}/>

                                    <h3><IconListen/> THE SPIN</h3>
                                    <div className='video-div'>
                                        <video id='the-spin' poster='/assets/images/raid/The Raid_The Spin_Cover.png' controls>
                                            <source src='/assets/video/The Raid_The Spin_Video.mp4'/>
                                            <track src='/assets/vtt/The Raid_The Spin_Captions.vtt' kind='subtitles' label='CC'/>
                                        </video>
                                    </div>
                                    <p className='video-description'>Multiple narrators reflect on the media’s role in shaping public perceptions of the raid.</p>
                                    <CreditsExpander content={<>Stranges, Alisha, and Elspeth Brown. “Raid on the Palace: The Spin.” Narrated by Chanelle Gallant, Brenda Cossman, and JP Hornick. Illustration by Ayo Tsalithaba. Produced by LGBTQ Oral History Digital Collaboratory. <i>The History of the Pussy Palace: A Digital Exhibit</i>. 2024. Video, 1:31.</>}/>
                                </div>
                            </div>

                            <p>Rachel Giese’s November 29, 2000, <i>Xtra</i> article <a href="https://xtramagazine.com/power/pussy-pals-46614">“Pussy Pals,”</a> further examined the importance of connecting the Pussy Palace raid to other instances of police overreach. In it, TWBC member Loralee Gillis expressed that while it was easier for the public to see the raid as a violation of women’s privacy, it was crucial for the committee to highlight its links to the criminalization of male sexuality and the targeting of other marginalized groups, including people of colour and sex workers, thereby bridging “support for people whose issues aren’t as palatable and don’t make the news.” </p>
                            <p>Given Chief Fantino’s documented history of anti-queer biases, the raid on the Pussy Palace felt almost inevitable, regardless of how it was publicly framed or defended. As Paul Gallant noted, while “the excuse for the raid was liquor licensing,” he doubted even a “perfectly run event” would have prevented police interference. Gallant asserted that the police were “looking for any excuse” to target the event, asserting that, in his view, the raid “was going to happen” irrespective of licensing. Ultimately, the extensive media coverage laid an unexpectedly favourable foundation for the defence in the civil case against Hornick and Atkins. Public outcry over the privacy invasion bolstered the defence’s central argument — that police actions had infringed on patrons’ Charter-protected right to privacy. Leveraging these public narratives, the defence reframed the raid as not just a violation of privacy, but as a deeply invasive act that many argue disregarded the Palace’s transformative role as a celebrated queer space for women and trans people. </p>
                        
                            <div>    
                                <div className='thin-divider' style={{margin: '60px 0'}}></div>
                                <button className='tab-switch-button next-tab-button' onClick={() => document.getElementById('care-at-the-palace').click()}>CARE AT THE PALACE &gt;</button>
                            </div>
                        </>,



                        <>
                            <h2 className='pink content-page-subheader'>CARE AT THE PALACE</h2>
                            <p>As a project in making space for queer and trans sexual expression, the Pussy Palace was a space of radical care. As <a href="https://www.upress.umn.edu/book-division/books/trans-care">Hil Malatino</a> has written, care isn’t abstract: it’s always manifested through practice, through action, through work. From the initial idea for the bathhouse — a place to share information about how queer women could have safe sex—to the final distribution of funds to Monica Forrester’s Trans Pride Toronto, the Pussy Palace organizers and volunteers practiced an ethics of care for queer women, trans people, and BIPOC patrons. As Janet Rowe reflected, “there was a lot of discussion around what that space can look like? How do we create safe space? What do we want to do to facilitate folks feeling comfortable about having sex in a public space?” They organized tours of the bathhouse for first timers, created ice-breaker strategies such as the Cupid board and games such as Twister and Spin the Bottle.</p>
                            <p>As part of their radical sex education and their commitment to care, the organizers created a variety of kink demonstrations. T’Hayla Ferguson noted a lot of patrons were interested in learning how to safely engage in rope play, and they ended up “doing rope demos for hours,” showing people how to tie, how to use a Japanese rope harness, how to have fun, safely. Organizers practiced care in making the space inclusive for trans and BIPOC patrons, with uneven results (see Building the Palace: <a href="###">Trans Inclusion</a> and <a href="###">BIPOC Inclusion</a>). The volunteer security teams circulated through the space, checking on patrons, making sure folks had what they needed. The entire Pussy Palace project, including the organizers’ response to the police raid, exemplifies a praxis of radical queer care. One of the more distinctive features of the Pussy Palace was the presence of the Temple Priestess, Leanne Powers. Powers is a queer femme of white, Acadian, and Mi’kmaq heritage who has also been a BDSM player, professional dominant and healer. </p>
                        
                            <div className='split-66-33'>
                                <div>
                                    <p>Powers brought to her practice a compelling background in psychodramatic body healing (a type of body-based knowledge); BDSM, as she had been both training and teaching in BDSM practice at conferences and events around the world; sacred sex practice, having taken workshops with luminaries such as <a href='https://en.wikipedia.org/wiki/Annie_Sprinkle'>Annie Sprinkle</a> and <a href='https://barbaracarrellas.com/'>Barbara Carrellas</a>; and work with survivors of conversion therapy and hardcore body trauma in self-healing techniques. Powers had also been inspired by the work of artist <a href='https://www.aabronson.com/bio2.htm'>A.A. Bronson</a>, particularly his work relating to loss, queerness, sexuality, and healing. At the Pussy Palace, Powers set up a “temple” in one of the upstairs rooms, a sacred place of radical hospitality where patrons could connect with her as the Temple Priestess in orienting themselves to the night’s adventures.</p>
                                    <button className='listen-button' onClick={() => document.getElementById('what-can-i-ask-for').play()}><IconListen/> Listen to “What Can I Ask For?”</button>
                                </div>
                                <div>
                                    <h3><IconListen/> WHAT CAN I ASK FOR?</h3>
                                    <div className='video-div'>
                                        <video id='what-can-i-ask-for' poster='/assets/images/raid/Care at Palace_Powers_Cover.png' controls>
                                            <source src='/assets/video/Care at Palace_What Can I Ask For_Video.mp4'/>
                                            <track src='/assets/vtt/Care at Palace_What Can I Ask For_Captions.vtt' kind='subtitles' label='CC'/>
                                        </video>
                                    </div>
                                    <p className='video-description'>Radical sex healer, Leanne Powers, describes her role as the Palace’s resident Temple Priestess.</p>
                                    <CreditsExpander content={<>Stranges, Alisha, and Elspeth Brown. “Raid on the Palace: What Can I Ask For?.” Narrated by Leanne Powers. Illustration by Ayo Tsalithaba. Produced by LGBTQ Oral History Digital Collaboratory. <i>The History of the Pussy Palace: A Digital Exhibit</i>. 2024. Video, 0:35.</>}/>
                                </div>
                            </div>

                            <p>To prepare this grungy upstairs room for its new mission, Powers smudged the space with rosemary and other non-sage herbs, called the directions, and populated a shelf with small items representing earth, fire, water and air as well as other tools, such as a seed pod and spool of thread, which she might use in her rituals. Patrons sought her out for a wide variety of caring encounters that typically ranged from seven to twelve minutes in duration. She never knew what the exchange would entail, as it depended on the patron’s energies and needs; sometimes the encounter was conversational, while other times she expressed care physically, such as through a <a href="https://en.wikipedia.org/wiki/Fivefold_kiss">Fivefold Kiss</a>. Often, she would work with couples where one was excited and open to new adventures at the Palace, while the other was more withdrawn, nervous, and trepidatious (see Explore the Palace: <a href="###">The Photo Booth/Temple</a>, “The Temple Priestess”). On a busy Palace event night, Powers might see as many as 45 people, helping them heal in relationship to long term illness, ageism, sexual violence, transphobia, and other everyday trauma. </p>
                        
                            <div className='split-66-33'>
                                <div>
                                    <p>On the night of the police raid, Powers navigated what seems like classic police entrapment. She remembers a visit from a shy, partially dressed middle aged woman who, in retrospect, sounds like one of the two undercover police officers. Powers remembers the patron asking twice whether Powers accepted money for her services — which, if she had, would place the Pussy Palace in danger of violating Section 197(1) of the Canadian Criminal Code, running a common bawdy house.   </p>
                                    <button className='listen-button' onClick={() => document.getElementById('completely-free').play()}><IconListen/> Listen to “Completely Free”</button>
                                    <p>Pussy Palace organizers had been careful to make sure that no money exchanged hands relating to any sexual or erotic activity for exactly this concern. Soon after this odd encounter, the male police officers did in fact arrive, knocking on Powers’ closed door.</p>
                                </div>
                                <div>
                                    <h3><IconListen/> COMPLETELY FREE</h3>
                                    <div className='video-div'>
                                        <video id='completely-free' poster='/assets/images/raid/Care at Palace_Powers_Cover.png' controls>
                                            <source src='/assets/video/Care at Palace_Completely Free_Video.mp4'/>
                                            <track src='/assets/vtt/Care at Palace_Completely Free_Captions.vtt' kind='subtitles' label='CC'/>
                                        </video>
                                    </div>
                                    <p className='video-description'>Temple Priestess Leanne Powers recalls her suspected encounter with one of the undercover police officers.</p>
                                    <CreditsExpander content={<>Stranges, Alisha, and Elspeth Brown. “Raid on the Palace: Completely Free.” Narrated by Leanne Powers. Illustration by Ayo Tsalithaba. Produced by LGBTQ Oral History Digital Collaboratory. <i>The History of the Pussy Palace: A Digital Exhibit</i>. 2024. Video, 1:32.</>}/>
                                </div>
                            </div>

                            <p>As the police raided the Palace, Powers immediately put her capacity and artistry in queer care into action. Hearing the police walking down the corridor, she put her body between the person she was with and the door to the Temple, so that when the police opened the door — which they did — this patron was protected. The police didn’t stay long and, after they left, Powers explained to this patron how to leave through an alternate exit. She then made her way downstairs to check in everywhere, “in every corner that I could,” to make sure that those she knew might be triggered could connect with her, for grounding and reassurance.</p>
                        
                            <div className='split-66-33'>
                                <div>
                                    <p>After the police left, Powers practiced care by talking with the remaining patrons and volunteers, working hard to help folks stay calm while developing “an exit plan that felt good for them.” She organized a circle at the Temple where people could “talk about their experiences” and find support in one another. She remembers folks feeling a bit lost, more shocked than angry, as they discussed their emotions and memories, from family histories to prison time. Powers continued this practice of radical care long after the night of the police raid. For as many as five years after the raid, Powers organized healing rituals (often followed by a play event) at Lap Space, the alternative venue she ran for many years. Powers continued to help community members process their experiences of trauma, anger, fear and other difficult emotions while also celebrating the joy and pleasure that was the Pussy Palace.</p>
                                    <button className='listen-button' onClick={() => document.getElementById('the-energy-of-invasion').play()}><IconListen/> Listen to “The Energy of Invasion”</button>
                                </div>
                                <div>
                                    <h3><IconListen/> THE ENERGY OF INVASION</h3>
                                    <div className='video-div'>
                                        <video id='the-energy-of-invasaion' poster='/assets/images/raid/Care at Palace_Powers_Cover.png' controls>
                                            <source src='/assets/video/Care at Palace_Energy of Invasion_Video.mp4'/>
                                            <track src='/assets/vtt/Care at Palace_Energy of Invasion_Captions.vtt' kind='subtitles' label='CC'/>
                                        </video>
                                    </div>
                                    <p className='video-description'>Temple Priestess Leanne Powers recalls her suspected encounter with one of the undercover police officers.</p>
                                    <CreditsExpander content={<>Stranges, Alisha, and Elspeth Brown. “Raid on the Palace: Completely Free.” Narrated by Leanne Powers. Illustration by Ayo Tsalithaba. Produced by LGBTQ Oral History Digital Collaboratory. <i>The History of the Pussy Palace: A Digital Exhibit</i>. 2024. Video, 1:32.</>}/>
                                </div>
                            </div>

                            <p>The Temple Priestess shared her room with another practitioner of queer care, Chloë Brushwood Rose. Brushwood Rose, a queer femme photographer who had also taken many of the promotional images, had been invited to set up what she called a “photo pornography booth,” where patrons could have their photos taken via Polaroid technology, where images develop within 60 seconds after exposure. Despite the title, most patrons’ portraits were on the tame side: “It was more like an erotic photography experience than porn, than something really explicit,” she reflected. </p>
                        
                            <div className='split-66-33'>
                               <div>
                                    <button className='listen-button' onClick={() => document.getElementById('instant-solution').play()}><IconListen/> Listen to “Instant Solution"</button>
                                    <p>Working in four-hour shifts, Brushwood Rose would take between 50-100 images a night, with sessions lasting about five minutes each. In her own way, through photography’s capacity to call new subjectivities into being while representing them at the same time, Brushwood Rose practiced a form of radical queer and trans care. She describes photographing trans women “who had never been photographed as women, and who spoke about this experience and wanted to be photographed in very particular ways. So, some people would come and really want a very particular experience of seeing themselves represented.”</p>
                                    <p>The point of the photo booth was as much to collaborate in the creation of queer and trans selfhood as it was to document, in non-extractive ways, radical queer sexuality. Brushwood Rose describes the photo both experience as a “therapeutic” one, wherein she helped patrons figure out how to represent themselves on camera. In the era before cell phones, having a photograph of one’s queer, sexy self was a big deal. This photographic practice was a form of queer care, allowing patrons to see themselves represented.</p>
                                    <button className='listen-button' onClick={() => document.getElementById('instant-archive').play()}><IconListen/> Listen to “Instant Archive"</button>
                                    <p>The immediacy of Polaroid technology also helped create a form of queer care within the space, as patrons gathered around the developing print, waiting for the image to emerge; their privacy was ensured, as they walked away with the unique image, sometimes even without Brushwood Rose having seen it.</p>
                                </div>
                                <div>
                                    <h3><IconListen/> INSTANT SOLUTION</h3>
                                    <div className='video-div'>
                                        <video id='instant-solution' poster='/assets/images/raid/Care at Palace_BrushwoodRose_Cover.png' controls>
                                            <source src='/assets/video/Care at Palace_Instant Solution_Video.mp4'/>
                                            <track src='/assets/vtt/Care at Palace_Instant Solution_Captions.vtt' kind='subtitles' label='CC'/>
                                        </video>
                                    </div>
                                    <p className='video-description'>Photographer Chloë Brushwood Rose discusses the queer aesthetics of the Polaroid and the virtues of instant photography. </p>
                                    <CreditsExpander content={<>Stranges, Alisha, and Elspeth Brown. “Raid on the Palace: Instant Solution.” Narrated by Chloë Brushwood Rose. Illustration by Ayo Tsalithaba. Produced by LGBTQ Oral History Digital Collaboratory. <i>The History of the Pussy Palace: A Digital Exhibit</i>. 2024. Video, 1:25.</>}/>

                                    <h3><IconListen/> INSTANT ARCHIVE</h3>
                                    <div className='video-div'>
                                        <video id='instant-archive' poster='/assets/images/raid/Care at Palace_BrushwoodRose_Cover.png' controls>
                                            <source src='/assets/video/Care at Palace_Instant Archive_Video.mp4'/>
                                            <track src='/assets/vtt/Care at Palace_Instant Archive_Captions.vtt' kind='subtitles' label='CC'/>
                                        </video>
                                    </div>
                                    <p className='video-description'>Photographer Chloë Brushwood Rose reflects on the reparative value of queer photographic evidence of self.</p>
                                    <CreditsExpander content={<>Stranges, Alisha, and Elspeth Brown. “Raid on the Palace: Instant Archive.” Narrated by Chloë Brushwood Rose. Illustration by Ayo Tsalithaba. Produced by LGBTQ Oral History Digital Collaboratory. <i>The History of the Pussy Palace: A Digital Exhibit</i>. 2024. Video, 1:32.</>}/>
                                </div>
                            </div>

                            <p>She loved the intimacy of the exchanges with patrons, as she helped actualize patrons’ photographic desires. As Brushwood Rose reflects: </p>
                            <p style={{paddingLeft: 60, paddingRight: 60}}>It felt like an erotic experience for me, it felt intimate, it felt like I had all these dates. I had like 50 dates, or 100 dates, with these people who just would come in, and they’d want to get undressed. Some people had never been photographed nude, and they were like, “I’ve never had anyone take a picture of me naked. I want to have [a portrait].” </p>
                            <p>Photographs do more than represent the social world. In her role as the Pussy Palace photo booth photographer, Brushwood Rose co-created sexy, queer worlds, offering queer care in the present while documenting queer lives for the future.</p>
                            <p>The fact that Brushwood Rose didn’t have any photographs with her when the police arrived may have saved her from being charged with a moral offence. The raid had brought together police officers from the local 52 Division and from the special investigation service’s morality office, who suspected Brushwood Rose of creating and selling pornographic photographs. The two female undercover police officers visited the photo booth, gathering information from patrons waiting outside, and then alerted the male police officers: four of them soon knocked on the door. Lukas Blakk, who was dating Brushwood Rose at the time, remembers the police combing through Brushwood Rose’s camera equipment, bag, purse, and tripod but did not find any photographs. As Blakk recalls: </p>
                            <p style={{paddingLeft: 60, paddingRight: 60}}>They wanted to know if people had paid for, or there was money exchanged for, the Polaroids or whatever, which there wasn’t. Chloë was just doing it as a service . . . fortunately there were no Polaroids in the room. Everybody took theirs with them. So, there wasn’t anything. There was nothing. Eventually they didn’t find anything, and they left. </p>
                            <p>Although not reported at the time, TWBC organizers had received a tip that the police might raid the September 14, 2000, bathhouse event. In response, they prepared an ethics of care strategy to protect patrons should a raid occur. For instance, they invited reporter Stephanie Nolan to attend, anticipating the need for first-hand media coverage. Organizers also created a new flyer, which they distributed at the door, informing patrons of their rights and advising them on what to do in the event of a raid. When the police finally arrived, volunteers quickly set up a protective barrier to keep them from patrons as much as possible. Security volunteers moved swiftly through the club, notifying patrons: “The cops are here, the cops are here, the cops are here.” </p>
                        
                            <div className='split-66-33'>
                                <div>
                                    <p>Law professor Brenda Cossman was also present that night. During the raid, she pushed her way to the front of the action. When volunteers tried to shepherd patrons away, she identified herself as a “legal type,” which allowed her to observe the police’s interactions. She followed one detective, providing witness while he questioned attendees, then moved to the entranceway where the police were questioning JP Hornick, one of the signers of the liquor licence. Cossman advised TWBC members to call criminal defence lawyer Frank Addario, whose card she had on hand, and explained the likely next steps, including the potential laying of criminal charges.  </p>
                                    <button className='listen-button' onClick={() => document.getElementById('care-narrators-reflect').play()}><IconListen/> Listen to “Care at the Palace"</button>
                                </div>
                                <div>
                                    <h3><IconListen/> CARE AT THE PALACE</h3>
                                    <div className='video-div'>
                                        <video id='care-narrators-reflect' poster='/assets/images/raid/Care at Palace_Narrators Reflect_Cover.png' controls>
                                            <source src='/assets/video/Care at Palace_Narrators Reflect_Video.mov'/>
                                            <track src='/assets/vtt/Care at Palace_Narrators Reflect_Captions.vtt' kind='subtitles' label='CC'/>
                                        </video>
                                    </div>
                                    <p className='video-description'>Multiple narrators reflect on experiences of care before, during, and in the immediate aftermath of the police invasion.</p>
                                    <CreditsExpander content={<>Brown, Elspeth, and Alisha Stranges. “Care at the Palace: Narrators Reflect.” Narrated by Nancy Irwin, Robin Woodward, Noelle Campbell-Smith, T’Hayla Ferguson, Lyla Miklos, Leanne Powers, and Renee Racine. Illustrated, animated, and edited by Ayo Tsalithaba. Produced by LGBTQ Oral History Digital Collaboratory. <i>The History of the Pussy Palace: A Digital Exhibit</i>. 2022. Video, 4:02.</>}/>
                                </div>
                            </div>

                            <p>After the raid, the community rallied to raise funds and support the defence. Organizer Janet Rowe recalls “a lot of cis gay men saying, ‘the women were there for us in the raids in the ‘80s and around HIV and AIDS and so we should be there for them too.‘” These are just a few of the many examples of radical care that unfolded during the raid itself, let alone its aftermath.</p>
                        
                            <div>    
                                <div className='thin-divider' style={{margin: '60px 0'}}></div>
                                <button className='tab-switch-button prev-tab-button' onClick={() => document.getElementById('the-raid').click()}>&lt; 2000 PUSSIES</button>
                                <button className='tab-switch-button next-tab-button' onClick={() => document.getElementById('post-raid-activism-and-civil-suit').click()}>CARE AT THE PALACE &gt;</button>
                            </div>
                        </>,



                        <>
                            <h2 className='pink content-page-subheader'>POST-RAID ACTIVISM & CIVIL SUIT (2000-2002) </h2>
                            <p>Weeks after the raid, on October 20, 2000, the police charged two Palace security volunteers, JP Hornick and R. Atkins (pseudonym), with six counts each of violating the Liquor Licence Act of Ontario. These charges stemmed from the Special Occasion Permit (SOP) they signed for the September 14, 2000, bathhouse event and included allegations of failing to provide sufficient security, permitting disorderly conduct, serving liquor outside of prescribed hours, and allowing liquor to be removed from the premises. In response to the raid, activists quickly mobilized to garner community support and organize defence fundraisers. In anticipation of the above charges, the TWBC hosted a community event at Toronto’s 519 Community Centre a week after the raid.</p>
                            
                            <div className='split-66-33'>
                                <div>
                                    <p>The event drew hundreds, including many gay men who had experienced the 1981 bathhouse raids. Speakers included TWBC members and then city councillor (now Toronto’s mayor) Olivia Chow, who energized the crowd and helped raise nearly $10,000 for the defence fund. The gathering’s outrage culminated in a spontaneous march down Church Street to Toronto police’s 52 Division. Chanting slogans like “out of the bars, into the streets” and “pussies bite back,” participants alerted the media and staged a kiss-in. But this was just the beginning. TWBC activists continued to mobilize the community, maintaining momentum with public actions like the “<a href='https://www.youtube.com/watch?v=uKTdV_BWWt0'>Panty Picket Protest</a>” on October 28, 2000, where participants brought their panties, boxers, and briefs to express outrage at the police. </p>
                                    <button className='listen-button' onClick={() => document.getElementById('give-til-it-hurts').play()}><IconListen/> Listen to “Give Til It Hurts"</button>
                                    <p>Fundraising was critical to the defence effort, not only for raising money but also for building community support. Councilor Chow and longtime queer community activist Bob Gallagher organized a series of fundraisers, including a dinner at Rodney’s Oyster House on November 16, 2000, co-chaired by Liberal MPs Bill Graham (Toronto Central-Rosedale) and Carolyn Bennett (St. Paul’s).</p>
                                    <button className='listen-button' onClick={() => document.getElementById('rodneys-oyster-house').play()}><IconListen/> Listen to “Rodney's Oyster House"</button>
                                    <p>Other fundraising efforts included an event at the lesbian bar Pope Joan on November 4, 2000, featuring a performance by the Toronto Drag Kings, which raised a net total of $3,596. The University of Toronto queer student group LGBTOUT organized the “HussiHop” dance on November 17, 2000. On March 26, 2001, a high-end fundraising party called “Cat Fight” was held at the upscale bar Byzantium, with tickets priced at $125 a pop. Additionally, a “Toonie Drive” took place at Toronto’s 2001 Pride. This outpouring of community support meant the world to defendant JP Hornick.</p>
                                    <button className='listen-button' onClick={() => document.getElementById('galvanized-resilience').play()}><IconListen/> Listen to “Galvanized Resilience"</button>
                                    <p>This wasn’t the only legal action resulting from the police raid. Immediately afterward, City Councilor Kyle Rae issued a press statement condemning the police as “rogue cops” and “cowboys,” using colourful language like “ogle fest” and “cop-a-peek” to describe their actions. The police sued Rae for defamation, and in 2002 a six-person jury awarded $170,000 in damages to the seven officers who launched the suit. The case, unusual for involving a jury, had significant implications for political speech about the police. Despite the ruling, Justice Jean MacFarland called the officers’ economic damage claims “flimsy.”</p>
                                </div>
                                <div>
                                    <h3><IconListen/> GIVE TIL IT HURTS</h3>
                                    <div className='video-div'>
                                        <video id='give-til-it-hurts' poster='/assets/images/raid/PostRaid Activism_Give Til It Hurts_Cover.png' controls>
                                            <source src='/assets/video/PostRaid Activism_Give Til It Hurts_Video.mp4'/>
                                            <track src='/assets/vtt/PostRaid Activism_Give Til It Hurts_Captions.vtt' kind='subtitles' label='CC'/>
                                        </video>
                                    </div>
                                    <p className='video-description'>At a packed community event, Olivia Chow inspired the crowd to raise thousands for the defence fund, leading to a powerful march and ongoing community actions. </p>
                                    <CreditsExpander content={<>Stranges, Alisha, and Elspeth Brown. “Raid on the Palace: Give Til It Hurts.” Narrated by Chanelle Gallant, Hanlon Uafás-Álainn, Janet Rowe, Robin Woodward, Olivia Chow, and Pam Johnson. Illustration by Ayo Tsalithaba. Produced by LGBTQ Oral History Digital Collaboratory. <i>The History of the Pussy Palace: A Digital Exhibit</i>. 2024. Video, 4:51.</>}/>
                                
                                    <h3><IconListen/> RODNEY’S OYSTER HOUSE</h3>
                                    <div className='video-div'>
                                        <video id='rodneys-oyster-house' poster='/assets/images/raid/PostRaid Activism_Rodneys Oyster House_Cover.png' controls>
                                            <source src='/assets/video/PostRaid Activism_Rodneys Oyster House_Video.mp4'/>
                                            <track src='/assets/vtt/PostRaid Activism_Rodneys Oyster House_Captions.vtt' kind='subtitles' label='CC'/>
                                        </video>
                                    </div>
                                    <p className='video-description'>Bob Gallagher and Olivia Chow reminisce about the Oyster Bar event, which expertly combined celebration and strategy to raise essential funds for the Pussy Palace defence. </p>
                                    <CreditsExpander content={<>Stranges, Alisha, and Elspeth Brown. “Raid on the Palace: Rodney’s Oyster House.” Narrated by Bob Gallagher and Olivia Chow. Illustration by Ayo Tsalithaba. Produced by LGBTQ Oral History Digital Collaboratory. <i>The History of the Pussy Palace: A Digital Exhibit</i>. 2024. Video, 3:09.</>}/>

                                    <h3><IconListen/> GALVANIZED RESILIENCE</h3>
                                    <div className='video-div'>
                                        <video id='galvanized-resilience' poster='/assets/images/raid/PostRaid Activism_Galvanized Resilience_Cover.png' controls>
                                            <source src='/assets/video/PostRaid Activism_Galvanized Resilience_Video.mp4'/>
                                            <track src='/assets/vtt/PostRaid Activism_Galvanized Resilience_Captions.vtt' kind='subtitles' label='CC'/>
                                        </video>
                                    </div>
                                    <p className='video-description'>JP Hornick describes the shift from anger to unity and resilience in the community following the raid, highlighting crucial support from Olivia Chow and other allies. </p>
                                    <CreditsExpander content={<>Stranges, Alisha, and Elspeth Brown. “Raid on the Palace: Galvanized Resilience.” Narrated by JP Hornick. Illustration by Ayo Tsalithaba. Produced by LGBTQ Oral History Digital Collaboratory. <i>The History of the Pussy Palace: A Digital Exhibit</i>. 2024. Video, 1:20.</>}/>                                
                                </div>
                            </div>

                            <p>In October 2001, Justice Peter Hyrn and members of the queer community listened to two days of testimony from Pussy Palace patrons and police witnesses in the civil case against Hornick and Atkins. Janet Rowe, a founding member of the TWBC, and Renee Racine, a security volunteer, both provided testimony for the defence.</p>
                        
                            <div className='split-66-33'>
                                <div>
                                    <p>Rowe reflects on her nervousness during cross-examination, noting that despite preparation, she has little memory of the specific questions asked. Racine recalls feeling frustrated by the Crown’s absurd questions, particularly one that trivialized the impact of being seen naked by men. Palace patron, Robin Woodward, present for defence testimony, describes a moment of emotional realization when she heard someone recount her experience during the raid, reminding her of the fear she had suppressed while focusing on the injustice of the situation. </p>
                                    <button className='listen-button' onClick={() => document.getElementById('on-the-stand').play()}><IconListen/> Listen to “On the Stand"</button>
                                    <p>The Crown also called police officers Janet Hall, Dave Wilson, and Adrian Greenaway to the stand. Palace supporters who attended the court proceedings to back Hornick and Atkins were outraged by the officers’ deceptive testimony. Convinced that the bar had closed in accordance with last call, and knowing that police had entered the space before the one o’clock cut-off, they believed police had fabricated reasons to justify their actions. Supporters were particularly struck by the falsehoods in Janet Hall’s testimony. As an undercover officer with the Special Investigation Services’ “Morality Office,” Hall claimed to have witnessed public sexual activities in the sling room and photo booth, leading to charges of permitting disorderly conduct. However, court attendees asserted that these incidents simply did not happen. For numerous patrons, the encounter with police during the raid and subsequent court case marked a dramatic shift in their perception of law enforcement, resulting in a profound loss of trust. </p>
                                    <button className='listen-button' onClick={() => document.getElementById('flat-out-lies').play()}><IconListen/> Listen to “Flat Out Lies"</button>
                                    <p>Following the dramatic court revelations, Palace bartender Noelle Campbell-Smith highlights the stark contrast between the police’s portrayal of the event and the actual experience of attendees, underscoring the disheartening gap between the positive, respectful atmosphere and the misleading police accounts. From a legal standpoint, however, law scholar and Palace patron Brenda Cossman warns that such discrepancies between police testimony and actual events are a common and anticipated aspect of courtroom proceedings.</p>
                                    <button className='listen-button' onClick={() => document.getElementById('hard-to-reconcile').play()}><IconListen/> Listen to “Hard to Reconcile"</button>
                                    <p>Activists differed over the best legal strategy but ultimately lawyer Frank Addario represented just the two volunteers who had signed the liquor permit and not the entire TWBC. Addario favoured a pragmatic legal approach, arguing that the male police officers violated the Pussy Palace patrons’ reasonable expectation of privacy, equating their presence to a strip search. </p>
                                    <p>For this argument to succeed, Addario needed to demonstrate that the patrons, primarily cisgender women in various states of undress, felt frightened and violated by the male officers’ presence. This essentialist legal strategy, however, risked flattening out the complexity of queer and trans embodiment. To argue that the police violated women’s privacy, the defence had to minimize the presence of trans men or present them as both men and not men simultaneously.</p>
                                    <p>Defence witnesses Anjula Gogia and Janet Rowe skillfully explained the relationship between trans men and the queer community, complicating the essentialist narrative while still supporting the argument that the police had violated patrons’ privacy rights. Many recall Rowe’s political prowess on the stand, but the most striking impression was the prosecution’s profound ignorance of trans identity. </p>
                                    <button className='listen-button' onClick={() => document.getElementById('out-of-her-depth').play()}><IconListen/> Listen to “Out of Her Depth"</button>
                                    <p>The defence strategy, while pragmatic, contradicted the political ethos of the Pussy Palace as a trans inclusive experiment in radical sexuality. Some activists, like law professor and Palace patron Brenda Cossman, supported this more conservative approach, believing that the most practical argument isn’t always the ‘right’ one. Others, such as activist and criminal justice scholar Mariana Valverde, felt that, given the significance of legal precedent, the strategy’s shift from radical queer politics to an essentialist gay and lesbian perspective was a broader move towards assimilationist respectability politics. For Valverde, how a case is won is more crucial than the outcome itself. </p>
                                    <button className='listen-button' onClick={() => document.getElementById('queer-justice-dilemma').play()}><IconListen/> Listen to “Queer Justice Dilemma"</button>
                                    <p>The defence strategy succeeded. On January 31, 2002, Judge Hyrn excluded the police testimony and dismissed all charges. He found that despite the event being public, Hornick, Atkins, and the Palace patrons still had a reasonable expectation of privacy. Just as having male police officers conduct a strip search would infringe on women’s privacy, so too did the presence of male officers, rather than female, in the Palace investigation. The police, Judge Hyrn ruled, had violated the volunteers’ Charter rights. </p>
                                    <button className='listen-button'><IconLook/> Look at “Hryn's Judgment"</button>
                                    <p>The defence not only won the case but also gained a basis for pursuing a class-action lawsuit against the police.</p>
                                </div>
                                <div>
                                    <h3><IconListen/> ON THE STAND</h3>
                                    <div className='video-div'>
                                        <video id='on-the-stand' poster='/assets/images/raid/PostRaid Activism_On the Stand_Cover.png' controls>
                                            <source src='/assets/video/PostRaid Activism_On the Stand_Video.mp4'/>
                                            <track src='/assets/vtt/PostRaid Activism_On the Stand_Captions.vtt' kind='subtitles' label='CC'/>
                                        </video>
                                    </div>
                                    <p className='video-description'>Janet Rowe and Renee Racine share their experience as witnesses in the civil suit; Robin Woodward recalls the emotional impact of hearing others describe her fear. </p>
                                    <CreditsExpander content={<>Stranges, Alisha, and Elspeth Brown. “Raid on the Palace: On the Stand.” Narrated by Janet Rowe, Renee Racine, and Robin Woodward. Illustration by Ayo Tsalithaba. Produced by LGBTQ Oral History Digital Collaboratory. <i>The History of the Pussy Palace: A Digital Exhibit</i>. 2024. Video, 2:31.</>}/>
                                
                                    <h3><IconListen/> FLAT OUT LIES</h3>
                                    <div className='video-div'>
                                        <video id='flat-out-lies' poster='/assets/images/raid/PostRaid Activism_Flat Out Lies_Cover.png' controls>
                                            <source src='/assets/video/PostRaid Activism_Flat Out Lies_Video.mp4'/>
                                            <track src='/assets/vtt/PostRaid Activism_Flat Out Lies_Captions.vtt' kind='subtitles' label='CC'/>
                                        </video>
                                    </div>
                                    <p className='video-description'>Multiple narrators describe their reaction to the police testimony, which they saw as a parade of falsehoods and distortions. </p>
                                    <CreditsExpander content={<>Stranges, Alisha, and Elspeth Brown. “Raid on the Palace: Flat Out Lies.” Narrated by Andrea Ridgley, Robin Woodward, Carlyle Jansen, and Ange Beever. Illustration by Ayo Tsalithaba. Produced by LGBTQ Oral History Digital Collaboratory. <i>The History of the Pussy Palace: A Digital Exhibit</i>. 2024. Video, 2:18.</>}/>
                                
                                    <h3><IconListen/> HARD TO RECONCILE</h3>
                                    <div className='video-div'>
                                        <video id='hard-to-reconcile' poster='/assets/images/raid/PostRaid Activism_Hard to Reconcile_Cover.png' controls>
                                            <source src='/assets/video/PostRaid Activism_Hard to Reconcile_Video.mp4'/>
                                            <track src='/assets/vtt/PostRaid Activism_Hard to Reconcile_Captions.vtt' kind='subtitles' label='CC'/>
                                        </video>
                                    </div>
                                    <p className='video-description'>Noelle Campbell-Smith and Brenda Cossman highlight the contrast between attendees' positive experiences and the police’s misleading testimonies. </p>
                                    <CreditsExpander content={<>Stranges, Alisha, and Elspeth Brown. “Raid on the Palace: Hard to Reconcile.” Narrated by Noelle Campbell-Smith and Brenda Cossman. Illustration by Ayo Tsalithaba. Produced by LGBTQ Oral History Digital Collaboratory. <i>The History of the Pussy Palace: A Digital Exhibit</i>. 2024. Video, 1:04.</>}/>
                                
                                    <h3><IconListen/> OUT OF HER DEPTH</h3>
                                    <div className='video-div'>
                                        <video id='out-of-her-depth' poster='/assets/images/raid/PostRaid Activism_Out of Her Depth_Cover.png' controls>
                                            <source src='/assets/video/PostRaid Activism_Out of Her Depth_Video.mp4'/>
                                            <track src='/assets/vtt/PostRaid Activism_Out of Her Depth_Captions.vtt' kind='subtitles' label='CC'/>
                                        </video>
                                    </div>
                                    <p className='video-description'>Multiple narrators assert the prosecution’s undeniable ignorance of trans identity. </p>
                                    <CreditsExpander content={<>Stranges, Alisha, and Elspeth Brown. “Raid on the Palace: Out of Her Depth.” Narrated by Robin Woodward and Ange Beever. Illustration by Ayo Tsalithaba. Produced by LGBTQ Oral History Digital Collaboratory. <i>The History of the Pussy Palace: A Digital Exhibit</i>. 2024. Video, 1:20.</>}/>
                                
                                    <h3><IconListen/> QUEER JUSTICE DILEMMA</h3>
                                    <div className='video-div'>
                                        <video id='queer-justice-dilemma' poster='/assets/images/raid/PostRaid Activism_Queer Justice Dilemma_Cover.png' controls>
                                            <source src='/assets/video/PostRaid Activism_Queer Justice Dilemma_Video.mp4'/>
                                            <track src='/assets/vtt/PostRaid Activism_Queer Justice Dilemma_Captions.vtt' kind='subtitles' label='CC'/>
                                        </video>
                                    </div>
                                    <p className='video-description'>Brenda Cossman emphasizes the success of a pragmatic legal strategy while Mariana Valverde mourns the missed opportunity for a more radical, queer argument. </p>
                                    <CreditsExpander content={<>Stranges, Alisha, and Elspeth Brown. “Raid on the Palace: Queer Justice Dilemma.” Narrated by Mariana Valverde and Brenda Cossman. Illustration by Ayo Tsalithaba. Produced by LGBTQ Oral History Digital Collaboratory. <i>The History of the Pussy Palace: A Digital Exhibit</i>. 2024. Video, 5:01.</>}/>
                                
                                    <h3><IconLook/> HRYN'S JUDGMENT</h3>
                                    <PDFMultiviewer files={[
                                        {
                                            path: "/assets/documents/R. v. Hornick_2002_Hryn's Judgment.pdf",
                                            desc: '',
                                            pages: 23
                                        }
                                    ]}/>
                                    <p className='pdf-credits'>Courtesy of TWBC member, Chanelle Gallant. </p>
                                </div>
                            </div>

                            <div>    
                                <div className='thin-divider' style={{margin: '60px 0'}}></div>
                                <button className='tab-switch-button prev-tab-button' onClick={() => document.getElementById('care-at-the-palace').click()}>&lt; CARE AT THE PALACE</button>
                                <button className='tab-switch-button next-tab-button' onClick={() => document.getElementById('hr-complaint-and-class-action').click()}>HR COMPLAINT &amp; CLASS ACTION &gt;</button>
                            </div>
                        </>,




                        <>
                            <h2 className='pink content-page-subheader'>HUMAN RIGHTS COMPLAINT & CLASS ACTION SUIT (2001-2005)</h2>
                            <p>In March 2001, six months after the raid and before the civil suit was heard, TWBC organizers filed a human rights complaint with the Ontario Human Rights Commission (OHRC) against three different parties: the Toronto Police Services Board, then-Chief Julian Fantino, and the five male officers involved in the raid. In July 2002, they filed a class-action lawsuit against the same parties, consolidating it with the ongoing OHRC complaint. </p>
                            
                            <div className='split-66-33'>
                                <div>
                                    <p>The complaint and lawsuit alleged that the defendants violated women’s rights under sections 7 and 8 of the Canadian Charter of Rights and Freedoms by: 1) policing the Palace differently from other events with special occasion permits (like weddings); 2) failing to conduct the liquor licence search with female officers; and 3) not providing adequate training for officers to understand the community they were interacting with. They sought monetary damages, apologies from the respondents, and an order for mandatory cultural competency training focused on the queer, bisexual, lesbian, trans, and gay communities. Palace patrons, and life partners, Robin Woodward and Ange Beever were two of four named plaintiffs in the class action suit. </p>
                                    <button className='listen-button' onClick={() => document.getElementById('we-need-4-plaintiffs').play()}><IconListen/> Listen to “We Need 4 Plaintiffs"</button>
                                </div>
                                <div>
                                    <h3><IconListen/> WE NEED 4 PLAINTIFFS</h3>
                                    <div className='video-div'>
                                        <video id='we-need-4-plaintiffs' poster='/assets/images/raid/HRC_We Need 4 Plaintiffs_Cover.png' controls>
                                            <source src='/assets/video/HRC_We Need 4 Plaintiffs_Video.mp4'/>
                                            <track src='/assets/vtt/HRC_We Need 4 Plaintiffs_Captions.vtt' kind='subtitles' label='CC'/>
                                        </video>
                                    </div>
                                    <p className='video-description'>Robin Woodward and Ange Beever joined Hornick and Atkins in the class action lawsuit, guided by experienced lawyers. </p>
                                    <CreditsExpander content={<>Stranges, Alisha, and Elspeth Brown. “Raid on the Palace: We Need 4 Plaintiffs.” Narrated by Robin Woodward and Ange Beever. Illustration by Ayo Tsalithaba. Produced by LGBTQ Oral History Digital Collaboratory. <i>The History of the Pussy Palace: A Digital Exhibit</i>. 2024. Video, 1:29.</>}/>
                                </div>        
                            </div>

                            <p>When the settlement conference finally took place, Woodward remembers the surreal atmosphere. Held in a high-end hotel in downtown Toronto, the plaintiffs found themselves in a swanky suite with catered lunch — a stark contrast to the struggle they had endured. It was a small, almost ironic, comfort in a battle that had been anything but luxurious. Throughout the settlement negotiations, the plaintiffs and the TWBC remained steadfast in their advocacy for causes they believed in. They pushed for the settlement funds to support the Bill 7 Award, a scholarship fund for LGBTQ+ post-secondary students in Ontario administered through <a href='https://soytoronto.com/'>Supporting Our Youth</a> (SOY), and for <a href='https://www.maggiestoronto.org/'>Maggie’s</a>, the sex workers’ outreach organization that had been a crucial ally both before and after the raid. As JP Hornick put it, “We wanted something that openly acknowledged that sexuality is okay. Sex work is sex work, not some moral policing issue.” Despite their best efforts, the police refused to authorize an even split between Bill 7 and Maggie’s, but the fight itself was a testament to the plaintiffs’ unwavering resolve. </p>
                        
                            <div className='split-66-33'>
                                <div>
                                    <p>In May 2005, nearly six years after the raid, a settlement was finally reached. The agreement awarded $350,000, divided as follows: $165,000 for the Bill 7 Award, $25,000 for Maggie’s, with the remainder allocated to legal fees. The settlement also mandated seven key policy and procedural changes for the police, including the creation of new guidelines for searching, arresting, and detaining trans people, as well as mandatory sensitivity training on trans identity and related issues. The settlement minutes also included a disappointing, one-paragraph apology from the raiding officers, which offered no admission of wrongdoing or liability. </p>
                                    <button className='listen-button'><IconLook/> Look at “Settlement Minutes"</button>
                                </div>
                                <div>
                                    <h3><IconLook/> SETTLEMENT MINUTES</h3>
                                    <PDFMultiviewer files={[
                                        {
                                            path: "/assets/documents/Human Rights Complaint_2004_Settlement Minutes.pdf",
                                            desc: '',
                                            pages: 9
                                        }
                                    ]}/>
                                    <p className='pdf-credits'>Courtesy of TWBC member, Chanelle Gallant. </p>
                                </div>
                            </div>

                            <p>The minutes allocated funds to the TWBC for consulting with LGBTQ2S+ community members to gather feedback on the settlement terms and how to improve relations with the Toronto Police Service. Activist and Pussy Palace patron Anna Willats, known for her tireless work against the harassment of marginalized communities in the 1990s, was selected to lead the consultation and produce a report. Willats’ longstanding activism on police accountability led to over 20 years of involvement with the <a href='https://tpac.ca/'>Toronto Police Accountability Coalition</a> (TPAC). Founded in 2000, the year of the Palace raid, TPAC was convened by former Toronto mayor John Sewell in response to ongoing issues with discriminatory policing practices. The raid, Willats notes, was just one manifestation of a broader trend in police behaviour. For instance, in the late 1990s, Willats was involved with the Committee to Stop Targeted Policing, which fought against the harassment of homeless individuals in city parks. This initiative, part of “Community Action Policing,” saw small groups of officers patrolling specific neighborhoods, often with a heavy hand. Willats observed that even as crime rates declined, the police budget grew, leading to the creation of new strategies to justify their expanded role. </p>
                        
                            <div className='split-66-33'>
                                <div>
                                    <p>When <a href='https://en.wikipedia.org/wiki/Julian_Fantino'>Julian Fantino</a> became Toronto’s police chief, his controversial past — including targeting gay men in London, Ontario — suggested a troubling continuity in his approach to marginalized communities. His arrival seemed to embolden officers, leading to the infamous raid on the Palace. This incident, Willats emphasizes, was not an isolated event but rather an extension of a broader pattern of police misconduct. For those deeply involved in Toronto’s activist scene, such actions were enraging but not surprising.  </p>
                                    <button className='listen-button' onClick={() => document.getElementById('arms-of-the-state').play()}><IconListen/> Listen to “Arms of the State"</button>
                                    <p>Willats’ community consultations, held in September and October 2005, involved drafting and distributing a survey, holding meetings with specific groups, and hosting a large gathering at The 519 Community Centre. Over 60 people from diverse queer, trans, and allied communities participated in the consultations, which addressed three interconnected issues: improving police training, reforming strip search policies for transgender and intersex individuals, and tackling the misuse of the Liquor Licence Act to target LGBTQ+ events.</p>
                                    <p>While Willats was well-acquainted with the first two issues, she was surprised to learn that, under Fantino, cops were using the Liquor Act “to insert themselves into bars, restaurants, clubs . . . to harass and curtail and limit LGBTQ events.” The final report includes 35 recommendations to the police, ranging from how to approach the arrest, search, and detention of trans people to what should be covered in police trainings, among other topics. </p>
                                    <button className='listen-button'><IconLook/> Look at “Willats’ Report”</button>
                                    <p>As the report suggests, the consultations revealed a broad consensus on the need for more effective police training and better treatment of transgender individuals during searches. However, Willats noted that many of the recommendations reflected a traditional view of police reform, which she felt was insufficient. With a growing awareness of the limitations of these conventional reforms, Willats was already leaning towards a more radical, abolitionist perspective. Looking back, she suspects that her analysis in 2005 would have likely questioned whether any amount of training or representation could truly address the systemic issues within policing.</p>
                                    <button className='listen-button' onClick={() => document.getElementById('i-wasnt-surprised').play()}><IconListen/> Listen to “I Wasn’t Surprised”</button>
                                    <p>Reflecting on her experience, Willats acknowledged the value of working within existing structures to hold the police accountable, but she also questioned whether such efforts were truly effective. She supported a more radical approach, including defunding and rethinking the role of the police altogether. These days, her activism is evermore grounded in the belief that real change requires challenging the very foundations of policing, rather than merely attempting to reform it from within. </p>
                                    <button className='listen-button' onClick={() => document.getElementById('radical-accountability').play()}><IconListen/> Listen to “radical-accountability”</button>
                                </div>
                                <div>
                                    <h3><IconListen/> ARMS OF THE STATE</h3>
                                    <div className='video-div'>
                                        <video id='arms-of-the-state' poster='/assets/images/raid/HRC_Willats_Cover.png' controls>
                                            <source src='/assets/video/HRC_Arms of the State_Video.mp4'/>
                                            <track src='/assets/vtt/HRC_Arms of the State_Captions.vtt' kind='subtitles' label='CC'/>
                                        </video>
                                    </div>
                                    <p className='video-description'>Anna Willats critiques Toronto police for escalating oppression and targeting marginalized communities under Chief Julian Fantino. </p>
                                    <CreditsExpander content={<>Stranges, Alisha, and Elspeth Brown. “Raid on the Palace: Arms of the State.” Narrated by Anna Willats. Illustration by Ayo Tsalithaba. Produced by LGBTQ Oral History Digital Collaboratory. <i>The History of the Pussy Palace: A Digital Exhibit</i>. 2024. Video, 2:44.</>}/>
                                
                                    <h3><IconLook/> WILLATS’ REPORT</h3>
                                    <PDFMultiviewer files={[
                                        {
                                            path: "/assets/documents/Willats_2005_Recommendations from the Community Consultation.pdf",
                                            desc: '',
                                            pages: 16
                                        }
                                    ]}/>
                                    <p className='pdf-credits'>Courtesy of Anna Willats.</p>

                                    <h3><IconListen/> I WASN’T SURPRISED</h3>
                                    <div className='video-div'>
                                        <video id='i-wasnt-surprised' poster='/assets/images/raid/HRC_Willats_Cover.png' controls>
                                            <source src='/assets/video/HRC_I Wasn’t Surprised_Video.mp4'/>
                                            <track src='/assets/vtt/HRC_I Wasn’t Surprised_Captions.vtt' kind='subtitles' label='CC'/>
                                        </video>
                                    </div>
                                    <p className='video-description'>In 2005, feedback supported typical reforms, but Willats reflects that more radical, abolitionist views are now emerging. </p>
                                    <CreditsExpander content={<>Stranges, Alisha, and Elspeth Brown. “Raid on the Palace: I Wasn’t Surprised.” Narrated by Anna Willats. Illustration by Ayo Tsalithaba. Produced by LGBTQ Oral History Digital Collaboratory. <i>The History of the Pussy Palace: A Digital Exhibit</i>. 2024. Video, 2:38.</>}/>
                                
                                    <h3><IconListen/> RADICAL ACCOUNTABILITY</h3>
                                    <div className='video-div'>
                                        <video id='radical-accountability' poster='/assets/images/raid/HRC_Willats_Cover.png' controls>
                                            <source src='/assets/video/HRC_Radical Accountability_Video.mp4'/>
                                            <track src='/assets/vtt/HRC_Radical Accountability_Captions.vtt' kind='subtitles' label='CC'/>
                                        </video>
                                    </div>
                                    <p className='video-description'>Willats questions the value of internal police reforms but acknowledges the need to hold police accountable using all available tools. </p>
                                    <CreditsExpander content={<>Stranges, Alisha, and Elspeth Brown. “Raid on the Palace: Radical Accountability.” Narrated by Anna Willats. Illustration by Ayo Tsalithaba. Produced by LGBTQ Oral History Digital Collaboratory. <i>The History of the Pussy Palace: A Digital Exhibit</i>. 2024. Video, 1:06.</>}/>
                                </div>
                            </div>

                            <p>Anthony Mohammed and JP Hornick were among the ten community facilitators selected to collaborate with four police educators — two of whom identified as gay or lesbian — in developing and delivering the LGBTQ cultural sensitivity training mandated by the settlement agreement. This group was carefully chosen to reflect a wide range of identities — diverse in age, race, gender, and sexual orientation. The innovative aspect of this training program, Hornick notes, was the pairing of community facilitators with police officers from the training unit. “Those pairings,” Hornick says, “definitely changed hearts [. . .]. We weren’t a number or a stereotype, we were people with a passionate commitment to making change.” Over the course of a year, they worked together to create and implement a robust three-hour training session for the thousands of police officers and civilian staff in the Toronto Police Services Board.  </p>
                        
                            <div className='split-66-33'>
                                <div>
                                    <p>Workshops had an average attendance of 40 people and typically began with the basics, explaining the “alphabet soup” of LGBTQ acronyms. While officers were somewhat familiar with the LGB components, for them, transgender identity was largely uncharted territory. As a result, much of the training focused on trans issues, exploring the complex relationship between sexual orientation and gender identity — concepts that were poorly understood within the force at the time. Beyond theoretical discussions, the workshops addressed practical concerns that directly impacted police operations, such as revised protocols for entering women’s spaces and conducting strip searches on women and trans people. These sessions often revealed deep-seated anxieties among the officers, particularly regarding the strip search policy.</p>
                                    <button className='listen-button' onClick={() => document.getElementById('unpacking-the-t').play()}><IconListen/> Listen to “Unpacking the ‘T’”</button>
                                    <p>In the challenging environment of court-mandated LGBTQ sensitivity training for the Toronto police, facilitators like Mohamed and Hornick faced a formidable “pack mentality” among officers, signaling a reluctance to dissent or express individuality. Facilitators vividly recall the hostile atmosphere, where police officers, often resistant and even antagonistic, made the sessions grueling. Yet, in contrast to the tension-filled classrooms, the hallway conversations offered a glimmer of hope.</p>
                                    <button className='listen-button' onClick={() => document.getElementById('they-all-said-blue').play()}><IconListen/> Listen to “They All Said Blue”</button>
                                    <p>In a starkly lit, pristine workshop room with rows of tables occupied by police officers of varying ranks, Mohamed stood at the front, balancing a marker and a stack of workshop outlines. His nervous habit of holding the marker helped him stay composed amid the buzz of chatter. The room was a microcosm of the diverse reactions to the LGBTQ sensitivity training. Among the officers, there was a clear divide. Some participants, particularly new recruits, were receptive and eager to learn. In contrast, others openly stated their reluctance to understand or embrace these new concepts. Despite these challenges, Mohamed was encouraged by the candidness of the participants, viewing it as an opportunity to foster dialogue and initiate change. His goal was to create a safer space for honest discussion, recognizing that true understanding would require more than a single workshop. He took pride in the progress made, noting that the visibility and discussion of queer and trans issues within police circles had grown. The experience, though demanding, was also somewhat empowering.</p>
                                    <button className='listen-button' onClick={() => document.getElementById('they-all-said-blue').play()}><IconListen/> Listen to “Bridging the Gap”</button>
                                    <p>Despite the daunting challenge of reforming deeply flawed institutions, the community facilitators were committed to influencing the Toronto Police Service. They acknowledged the limitations of their efforts, recognizing that while their training may not have dismantled systemic issues, it was still a vital step towards change. The facilitators understood that real transformation in such entrenched structures is slow work. However, they held onto the hope that even small victories — like the improved treatment of a single trans person in police custody — could justify their efforts. For Mohamed and Hornick, each incremental step toward equity, no matter how small, was a success. </p>
                                    <button className='listen-button' onClick={() => document.getElementById('realistically-speaking').play()}><IconListen/> Listen to “Realistically Speaking”</button>
                                </div>
                                <div>
                                    <h3><IconListen/> UNPACKING THE ‘T’</h3>
                                    <div className='video-div'>
                                        <video id='unpacking-the-t' poster='/assets/images/raid/HRC_Hornick and Mohamed_Cover.png' controls>
                                            <source src='/assets/video/HRC_Unpacking the T_Video.mp4'/>
                                            <track src='/assets/vtt/HRC_Unpacking the T_Captions.vtt' kind='subtitles' label='CC'/>
                                        </video>
                                    </div>
                                    <p className='video-description'>Anthony Mohamed and JP Hornick recall how the workshops exposed police ignorance with trans issues, sparking discussions and revealing anxieties. </p>
                                    <CreditsExpander content={<>Stranges, Alisha, and Elspeth Brown. “Raid on the Palace: Unpacking the ‘T.’” Narrated by Anthony Mohamed and JP Hornick. Illustration by Ayo Tsalithaba. Produced by LGBTQ Oral History Digital Collaboratory. <i>The History of the Pussy Palace: A Digital Exhibit</i>. 2024. Video, 1:49.</>}/>

                                    <h3><IconListen/> THEY ALL SAID BLUE</h3>
                                    <div className='video-div'>
                                        <video id='they-all-said-blue' poster='/assets/images/raid/HRC_Hornick and Mohamed_Cover.png' controls>
                                            <source src='/assets/video/HRC_They All Said Blue_Video.mp4'/>
                                            <track src='/assets/vtt/HRC_They All Said Blue_Captions.vtt' kind='subtitles' label='CC'/>
                                        </video>
                                    </div>
                                    <p className='video-description'>Icebreakers revealed a pack mentality among police, highlighting resistance to dissent and change. </p>
                                    <CreditsExpander content={<>Stranges, Alisha, and Elspeth Brown. “Raid on the Palace: They All Said Blue.” Narrated by Anthony Mohamed and JP Hornick. Illustration by Ayo Tsalithaba. Produced by LGBTQ Oral History Digital Collaboratory. <i>The History of the Pussy Palace: A Digital Exhibit</i>. 2024. Video, 2:11.</>}/>
                                
                                    <h3><IconListen/> BRIDGING THE GAP</h3>
                                    <div className='video-div'>
                                        <video id='bridging-the-gap' poster='/assets/images/raid/HRC_Bridging the Gap_Cover.png' controls>
                                            <source src='/assets/video/HRC_Bridging the Gap_Video.mp4'/>
                                            <track src='/assets/vtt/HRC_Bridging the Gap_Captions.vtt' kind='subtitles' label='CC'/>
                                        </video>
                                    </div>
                                    <p className='video-description'>Mohamed contrasts the openness of new recruits with the resistance from senior officers during LGBTQ sensitivity training.</p>
                                    <CreditsExpander content={<>Stranges, Alisha, and Elspeth Brown. “Raid on the Palace: Bridging the Gap.” Narrated by Anthony Mohamed. Illustration by Ayo Tsalithaba. Produced by LGBTQ Oral History Digital Collaboratory. <i>The History of the Pussy Palace: A Digital Exhibit</i>. 2024. Video, 2:04.</>}/>
                                
                                    <h3><IconListen/> REALISTICALLY SPEAKING</h3>
                                    <div className='video-div'>
                                        <video id='realistically-speaking' poster='/assets/images/raid/HRC_Hornick and Mohamed_Cover.png' controls>
                                            <source src='/assets/video/HRC_Realistically Speaking_Video.mp4'/>
                                            <track src='/assets/vtt/HRC_Realistically Speaking_Captions.vtt' kind='subtitles' label='CC'/>
                                        </video>
                                    </div>
                                    <p className='video-description'>Hornick and Mohamed highlight incremental police reforms, stressing their limited impact but recognizing small victories as worthwhile. </p>
                                    <CreditsExpander content={<>Stranges, Alisha, and Elspeth Brown. “Raid on the Palace: Realistically Speaking.” Narrated by JP Hornick and Anthony Mohamed. Illustration by Ayo Tsalithaba. Produced by LGBTQ Oral History Digital Collaboratory. <i>The History of the Pussy Palace: A Digital Exhibit</i>. 2024. Video, 1:13.</>}/>
                                </div>
                            </div>

                            <p>Five years after the police raid of September 14-15, 2000, the court cases and human rights complaints were resolved, leading to a landmark settlement and significant policy changes in how the Toronto Police Service engage with the queer and trans community. While LGBTQ activism achieved notable victories and the facilitators’ efforts fostered incremental progress, the persistent and deep-seated nature of systemic issues remained indisputable. These reforms, though important, underscore the limitations of working within existing frameworks. As many TWBC members and their allies understood, both then and now, true justice requires reimagining and dismantling oppressive systems entirely, moving beyond incremental change toward a vision of a society where safety and equity are achieved through abolitionist principles, not mere adjustments. </p>
                        
                            <div>    
                                <div className='thin-divider' style={{margin: '60px 0'}}></div>
                                <button className='tab-switch-button prev-tab-button' onClick={() => document.getElementById('post-raid-activism-and-civil-suit').click()}>&lt; POST-RAID ACTIVISM & CIVIL SUIT</button>
                            </div>
                        </>
                    ]}
                ></ContentPageTabs>
            </div>
        </div>
    )
}

export default Raid;