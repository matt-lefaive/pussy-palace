import React, { useEffect } from 'react';
import SideMenu from '../components/side-menu';
import StickySubmenu from '../components/sticky-submenu';
import CreditsExpander from '../components/credits-expander';
import PDFMultiviewer from '../components/pdf-multiviewer';
import ContentPageTabs from '../components/content-page-tabs';
import IconListen from '../svg/Icon_Listen';
import IconLook from '../svg/Icon_Look';
import Mirador from '../components/mirador-viewer';

const Building = () => {
    useEffect(() => {
        document.title = 'Building the Palace';
        return;
    }, []);
    
    return (
        <div className='page-wrapper'>
            <SideMenu active='building'/>
            <div className='content'>
                <img className='banner' alt='' src='/assets/images/building/Building_Banner.png'/>
                <h2 className='content-title pink'>BUILDING THE PALACE </h2>
                <h3 className='content-subtitle pink'>Radical Sex Organizing (1998-2000) </h3>

                <p>The origins of the Pussy Palace are rooted in Toronto’s radical, sex-positive queer culture, emerging from an HIV prevention campaign for queer women. Originally envisioned as a health initiative, the event soon evolved into a space for queer women’s sexual expression, spearheaded by the Toronto Women’s Bathhouse Committee (TWBC). Despite challenges in securing a venue and ensuring accessibility, the inaugural event in 1998 drew over 400 attendees, offering a haven for sexual exploration.</p>
                <p>From the beginning, the TWBC prioritized inclusivity, particularly for trans and BIPOC participants. While trans inclusion evolved through early missteps and ongoing advocacy, tensions around transphobia persisted. Similarly, efforts to address systemic racism and structural inequities in queer spaces led to initiatives like the Sugar Shack, a BIPOC-focused event. However, racial tensions remained, with both white and BIPOC organizers struggling to confront these issues fully. </p>
                <p>Despite these challenges, the Pussy Palace stands as a testament to the difficult political work of fostering sexually subversive, yet inclusive queer spaces. Organizers and patrons alike embraced the political complexity of their actions, balancing accountability with solidarity. Their commitment to inclusivity, radical sexual freedom, and community empowerment continues to resonate, offering valuable lessons for navigating today’s political landscape. </p>
            
                <ContentPageTabs 
                    titles={[
                        {name: 'FOUNDING THE TWBC', id: 'founding-the-twbc'},
                        {name: 'TRANS INCLUSION', id: 'trans-inclusion'},
                        {name: 'BIPOC INCLUSION', id: 'bipoc-inclusion'}
                    ]}
                    content={[
                        <>
                            <h2 className='pink content-page-subheader'>FOUNDING THE TORONTO WOMEN’S BATHHOUSE COMMITTEE</h2>
                            <div className='split-66-33'>
                                <div>
                                    <p>The Pussy Palace started out as an HIV prevention strategy. Organizer Janet Rowe had developed a safe sex campaign for queer women as part of her work for the AIDS Committee of Toronto (ACT) and needed a place to launch it. Colleagues suggested: why not a queer women’s bathhouse night? So, in the Fall of 1998, Rowe started the Women’s Bath House Project, what later became the Toronto Women’s Bathhouse Committee (TWBC).</p>
                                    <button className='listen-button' onClick={() => document.getElementById('the-big-idea').play()}><IconListen/> Listen to “The Big Idea”</button>
                                    <p>Very quickly the secondary reason for the bathhouse — queer women’s sexual expression — became the driving force behind the organizing work. Carlyle Jansen had just opened her sex-positive retail store, <a href='https://goodforher.com/'>Good For Her</a>, when she was invited to partner with Rowe and draft a proposal for the initial event. Jansen’s pro-sex, pro-pleasure approach to the Pussy Palace was also shaped by a queer women’s bathhouse called Octopussy Galore, which she attended while living in Seattle in the mid-1990s.  </p>
                                    <button className='listen-button' onClick={() => document.getElementById('octopussy-galore').play()}><IconListen/> Listen to “Octopussy Galore”</button>
                                    <p>Securing a physical space to host the event was challenging, to say the least. For a variety of reasons, gay men’s bathhouse owners in the city were reluctant to share space with women. Most venues doubted the event’s capacity to draw a crowd or to turn a profit. After a series of rejections, Club Toronto, a low-end, gay men’s bathhouse at the corner of Carlton Street and Mutual Street, agreed to rent out their space. But not without some deliberation.  </p>
                                    <button className='listen-button' onClick={() => document.getElementById('blood-and-cat-fights').play()}><IconListen/> Listen to “Blood & Cat Fights”</button>
                                    <p>Once Club Toronto was secured, Rowe and Jansen began networking with friends and colleagues to assemble the first iteration of the Toronto Women’s Bathhouse Committee, a collective of more than a dozen pro-sex, feminist queers who could assist them in launching the inaugural event, slated for Monday, September 14, 1998.  </p>
                                    <button className='listen-button'><IconLook/> Look at “Original Proposal"</button>
                                    <p>From the very beginning, the TWBC was organized, focused and comprehensive in their planning. Early meetings covered fundraising; advertising and promotion; space rental; legal issues; and programming. Quite quickly, TWBC members sought to address the challenges of creating an inclusive, accessible event that welcomed both trans women and trans men, as well as BIPOC patrons. Accessibility for those with mobility challenges remained an ongoing issue. None of the clubs that the organizers could rent were accessible. Most Pussy Palace events took place at Club Toronto, now <a href='https://oasisaqualounge.com/'>Oasis Aqualounge</a> (a sex-positive playground for consenting adults): an old Victorian with four floors, a labyrinth of upstairs rooms, an outdoor pool, sauna, hot tub, showers, a small dance floor and a bar. Even entering the building required walking down a short set of stairs into a vestibule, and there was no elevator. </p>
                                    <p>Organizers did what they could by, for example, arranging for one patron, in a wheelchair, to be carried between floors; Temple Priestess Leanne Powers designed rituals for a volunteer’s new walker to help her “ground and continue to stay feeling erotically charged.”</p>
                                    <p>At one point, the TWBC donated money to a group organizing a sex event for people with disabilities. But when it came to the Pussy Palace, organizers made the difficult decision to rent an inaccessible space, rather than have no event at all.</p>
                                    <button className='listen-button' onClick={() => document.getElementById('smelled-like-hamster').play()}><IconListen/> Listen to “Smelled Like Hamster”</button>
                                    <p>Several radical, sex-positive influences shaped the TWBC’s approach. Many volunteers were part of Toronto’s kink and leather communities, which were diverse and inclusive, and which held play parties for those in the know. Queer artist <a href='https://en.wikipedia.org/wiki/Will_Munro'>Will Munro</a> was organizing his Vazaleen club nights, a gathering place for sex-positive queers and gender non-normative folks inventing lives outside the homonormative mainstream. Eight narrators had some familiarity with the <a href='https://en.wikipedia.org/wiki/Michigan_Womyn%27s_Music_Festival'>Michigan Womyn’s Music Festival</a>’s annual public sex spaces; in contrast to Michigan, however, as some narrators pointed out, the Pussy Palace explicitly welcomed trans women. 1990s Toronto hosted, in core committee member Chanelle Gallant’s words, a “very deep sex-positive, queer, feminist culture,” and the Pussy Palace — the only sexual women’s bathhouse in North America that she knew about — was a natural outgrowth of 1990s Toronto’s radical sex culture. </p>
                                </div>
                                <div>
                                    <h3><IconListen/> THE BIG IDEA</h3>
                                    <div className='video-div'>
                                        <video id='the-big-idea' poster='/assets/images/building/Founding the TWBC_Rowe_Cover.png' controls>
                                            <source src='/assets/video/Founding the TWBC_Rowe_Video.mp4'/>
                                            <track src='/assets/vtt/Founding the TWBC_Rowe_Captions.vtt' kind='subtitles' label='CC'/>
                                        </video>
                                    </div>
                                    <p className='video-description'>TWBC Co-Founder Janet Rowe shares the challenges and surprises of organizing a public campaign on HIV prevention for queer cis women.</p>
                                    <CreditsExpander content={<>Stranges, Alisha, and Elspeth Brown. “Building the Palace: The Big Idea.” Narrated by Janet Rowe. Illustration by Ayo Tsalithaba. Produced by LGBTQ Oral History Digital Collaboratory. <i>The History of the Pussy Palace: A Digital Exhibit</i>. 2024. Video, 1:43.</>}/>
                                
                                    <h3><IconListen/> OCTOPUSSY GALORE</h3>
                                    <div className='video-div'>
                                        <video id='octopussy-galore' poster='/assets/images/building/Founding the TWBC_Octopussy Galore_Cover.png' controls>
                                            <source src='/assets/video/Founding the TWBC_Octopussy Galore_Video.mp4'/>
                                            <track src='/assets/vtt/Founding the TWBC_Octopussy Galore_Captions.vtt' kind='subtitles' label='CC'/>
                                        </video>
                                    </div>
                                    <p className='video-description'>TWBC Co-Founder Carlyle Jansen recounts her experience at Octopussy Galore and its impact on her vision for the Pussy Palace events.</p>
                                    <CreditsExpander content={<>Stranges, Alisha, and Elspeth Brown. “Building the Palace: Octopussy Galore.” Narrated by Carlyle Jansen. Illustration by Ayo Tsalithaba. Produced by LGBTQ Oral History Digital Collaboratory. <i>The History of the Pussy Palace: A Digital Exhibit</i>. 2024. Video, 1:07.</>}/>

                                    <h3><IconListen/> BLOOD&nbsp;&amp;&nbsp;CAT&nbsp;FIGHTS</h3>
                                    <div className='video-div'>
                                        <video id='blood-and-cat-fights' poster='/assets/images/building/Founding the TWBC_Blood & Cat Fights_Cover.png' controls>
                                            <source src='/assets/video/Founding the TWBC_Blood & Cat Fights_Video.mp4'/>
                                            <track src='/assets/vtt/Founding the TWBC_Blood & Cat Fights_Captions.vtt' kind='subtitles' label='CC'/>
                                        </video>
                                    </div>
                                    <p className='video-description'>TWBC Co-Founders Carlyle Jansen and Janet Rowe recount their conversation with the owners of Club Toronto.</p>
                                    <CreditsExpander content={<>Stranges, Alisha, and Elspeth Brown. “Building the Palace: Blood & Cat Fights.” Narrated by Carlyle Jansen and Janet Rowe. Illustration by Ayo Tsalithaba. Produced by LGBTQ Oral History Digital Collaboratory. <i>The History of the Pussy Palace: A Digital Exhibit</i>. 2024. Video, 1:42.</>}/>
                                
                                    <h3><IconLook/> ORIGINAL PROPOSAL</h3>
                                    <PDFMultiviewer files={[
                                        {
                                            path: "/assets/documents/1998_Original Proposal_Women's Night at SPA.pdf",
                                            desc: '',
                                            pages: 2
                                        }
                                    ]}/>
                                    <p className='pdf-credits'>Courtesy of the <a href='https://sds.utoronto.ca/sexual-representation-collection/'>Sexual Representation Collection</a>, Bonham Centre for Sexual Diversity Studies, University of Toronto, Carlyle Jansen Collection. </p>
                                
                                    <h3><IconListen/> SMELLED&nbsp;LIKE&nbsp;HAMSTER</h3>
                                    <div className='video-div'>
                                        <video id='smelled-like-hamster' poster='/assets/images/building/Founding the TWBC_Smelled Like Hamster_Cover.png' controls>
                                            <source src='/assets/video/Founding the TWBC_Smelled Like Hamster_Video.mp4'/>
                                            <track src='/assets/vtt/Founding the TWBC_Smelled Like Hamster_Captions.vtt' kind='subtitles' label='CC'/>
                                        </video>
                                    </div>
                                    <p className='video-description'>Security Volunteer JP Hornick reflects on the nuanced relationship between accessibility, gender, and class at Club Toronto.</p>
                                    <CreditsExpander content={<>Stranges, Alisha, and Elspeth Brown. “Building the Palace: Smelled Like Hamster.” Narrated by JP Hornick. Illustration by Ayo Tsalithaba. Produced by LGBTQ Oral History Digital Collaboratory. <i>The History of the Pussy Palace: A Digital Exhibit</i>. 2024. Video, 0:41.</>}/>
                                </div>
                            </div>

                            <p>Much to the surprise of Club Toronto and the newly-formed TWBC, the Fall 1998 event attracted over 400 women and trans people, who stood in line, in the rain, awaiting their opportunity to explore their sexuality in a communal, public place. Members of the bathhouse committee sought to create a safe environment for sexual exploration that would include public sex with a partner, casual hook-ups with a stranger, exhibitionism and voyeurism, cruising, kink, BDSM, and more. For most patrons, the committee crafted a sexy, celebratory environment that mixed exploration with safety, opening possibilities for new experiences. </p>
                        
                            <div className='split-66-33'>
                                <div>
                                    <p>Many narrators reflect on how the Palace provided access to spaces for sexual freedom and public sex that had long been available to gay men in bathhouse culture. This was a key motivation for many attendees — the desire to have the same autonomy, opportunities, and sexual liberation that had become emblematic of gay men’s spaces. However, TWBC member Chanelle Gallant offers a different perspective, one that makes visible the role of class in shaping sexual rebellion. For Chanelle, the bathhouse wasn’t just about replicating the experiences of gay men; it was about reclaiming a space for women and trans people who existed outside a narrow, middle-class framing of sexuality. As she asserts, “gay men are not the only sex rebels,” and her involvement in the event was deeply informed by her class background, emphasizing a lineage of defiant, working-class women who have also claimed their sexual freedom in powerful ways. </p>
                                    <button className='listen-button' onClick={() => document.getElementById('like-the-guys-do').play()}><IconListen/> Listen to “Sex for Sex’s Sake”</button>
                                    <p>At the bathhouse, organizers made a concerted effort to create a culture of care that would ease anxieties and offer multiple pathways for participation. Volunteer duties included coat check; touring the space with newcomers; explaining etiquette, rules, and safe sex; watching for fire and/or unsafe behaviour, and other tasks. At the door, volunteers handed out sex-positive etiquette sheets and verbally confirmed with each patron that they understood that both trans women and trans men were welcome (during this period, terms such as “non-binary” were not part of the vocabulary), and that discrimination would not be tolerated. </p>
                                    <button className='listen-button'><IconLook/> Look at “Rules & Etiquette”</button>
                                </div>
                                <div>
                                    <h3><IconListen/> SEX FOR SEX'S SAKE</h3>
                                    <div className='video-div'>
                                        <video id='like-the-guys-do' poster='/assets/images/building/Founding the TWBC_Like the Guys Do_Cover.png' controls>
                                            <source src='/assets/video/Founding the TWBC_Like the Guys Do_Video.mp4'/>
                                            <track src='/assets/vtt/Founding the TWBC_Like the Guys Do_Captions.vtt' kind='subtitles' label='CC'/>
                                        </video>
                                    </div>
                                    <p className='video-description'>Listen as multiple narrators reflect on the personal significance of the Palace.</p>
                                    <CreditsExpander content={<>Stranges, Alisha, and Elspeth Brown. “Building the Palace: Sex for Sex’s Sake.” Narrated by Chloë Brushwood Rose, Noelle Campbell-Smith, Stephanie Dutrizac, T’Hayla Ferguson, Chanelle Gallant, Nia Herlihy, Lyla Miklos, and Janet Rowe. Illustration by Ayo Tsalithaba. Produced by LGBTQ Oral History Digital Collaboratory. <i>The History of the Pussy Palace: A Digital Exhibit</i>. 2024. Video, 4:25.</>}/>
                                
                                    <h3><IconLook/> RULES & ETIQUETTE</h3>
                                    <PDFMultiviewer files={[
                                        {
                                            path: "/assets/documents/(n.d.) Pussy Palace_Rules & Etiquette.pdf",
                                            desc: '',
                                            pages: 2
                                        }
                                    ]}/>
                                    <p className='pdf-credits'>Courtesy of the <a href='https://sds.utoronto.ca/sexual-representation-collection/'>Sexual Representation Collection</a>, Bonham Centre for Sexual Diversity Studies, University of Toronto, Carlyle Jansen Collection. </p>
                                </div>
                            </div>

                            <div>    
                                <div className='thin-divider' style={{margin: '60px 0'}}></div>
                                <button className='tab-switch-button next-tab-button' onClick={() => document.getElementById('trans-inclusion').click()}>TRANS INCLUSION &gt;</button>
                            </div>
                        </>,



                        <>
                            <h2 className='pink content-page-subheader'>TRANS INCLUSION</h2>
                            <p>The Pussy Palace events were unusually inclusive of both trans women and trans men, but this was an evolution. In 1998, when the bathhouse organizing began, gender diversity was visible within the cis queer women’s community, especially in the form of butch, femme, boi, and other gender expressions, yet transphobia and transmisogyny created barriers for many trans people within queer spaces. While trans people had developed creative solutions to accessing gender affirming care for decades before the Pussy Palace events, in 2001 Ontario’s standards of care shifted to allow more readily available access to hormones. The years of the Pussy Palace events correspond to the flourishing of gender creative identities and trans embodiments within queer communities. The Pussy Palace organizers sought to navigate these changes in community in inclusive ways, attempting to create a welcoming environment for diversely gendered and embodied participants.</p>
                        
                            <div className='split-66-33'>
                                <div>
                                    <p>Almost from the beginning, the cis queer women organizers envisioned the Palace as a radical, sex-positive space. It was a time when sex radical, queer, cis women read <a href='https://en.wikipedia.org/wiki/On_Our_Backs'><i>On Our Backs</i></a> rather than <a href='https://en.wikipedia.org/wiki/Off_Our_Backs'><i>Off Our Backs</i></a>, experimented with sexual power exchanges, and strapped on sex toys newly available through mail order or local shops like Carlyle Jansen’s <a href='https://goodforher.com/'>Good For Her</a>. But understanding how to establish a bathhouse event that was both cis-woman-specific and trans-inclusive required some finesse.</p>
                                    <button className='listen-button' onClick={() => document.getElementById('very-specific-flavour').play()}><IconListen/> Listen to “Very Specific Flavour”</button>
                                    <p>Organizers were familiar with the transphobia of other women’s spaces, such as the Michigan Womyn’s Music Festival, which had excluded trans women as early as 1991, a controversial stance that created the oppositional <a href='https://en.wikipedia.org/wiki/Camp_Trans'>Camp Trans</a>. In contrast to Michigan, the TWBC wanted to create a space inclusive of trans women and worked hard to make it so, a very unusual effort for queer women at the time. </p>
                                    <p>Trish Salah, a trans woman and Palace patron, remembers sitting down with organizer Loralee Gillis before the first Pussy Palace to discuss what would make the event trans inclusive, having a “running conversation” with organizers in the early years. Initially in early 1998, organizers wanted to include everyone except those who we would now refer to as cis men and used language they felt to be inclusive by planning an event “only for women who can put their dick in a drawer,” referencing both post-op trans women and queer women who used sex toys. </p>
                                    <button className='listen-button' onClick={() => document.getElementById('goddesses-and-dolphins').play()}><IconListen/> Listen to “Goddesses & Dolphins”</button>
                                    <p>Very quickly, however, because of the “running conversation” that Salah references as well as other feedback, organizers realized the exclusiveness of this language — which assumed that all trans women wanted or had been able to arrange for bottom surgery — and created new trans-positive approaches using various strategies.</p>
                                    <p>For instance, the poster for the very first event on September 14, 1998, was explicitly welcoming by announcing in capital letters “TRANSGENDERED [sic] WOMEN WELCOME.”</p>
                                    <button className='listen-button'><IconLook/> Look at “Pussy Palace ‘98”</button>
                                    <p>The door volunteer duties for the 2000 event stated, in bold print: </p>
                                    <p><b>“Verbally confirm with all women that they understand that trans-women and trans-men are welcome and discrimination will not be tolerated”</b> (during this period, terms such as “non-binary” were not part of the vocabulary)</p>
                                    <p>Some of the early promotional literature included a postcard, which featured two queer women, one of them trans. The work of creating trans-positive representation was a type of care that Salah recognized and appreciated, as it involved “outreach and connection,” and wasn’t merely performative. The creative labour of the shoot, and the representation in circulation within the queer and trans community, impacted how Salah experienced the bathhouse going forward. </p>
                                    <button className='listen-button' onClick={() => document.getElementById('tableau-of-possibility').play()}><IconListen/> Listen to “Tableau of Possibility”</button>
                                    <p>At the bathhouse events, organizers curated a range of activities designed to support patrons who might not feel quite as comfortable, or welcome, in the space, trans women included. Organizers recruited trans women to join the organizing committee as well as security and other volunteer committees. One year, as Jansen recalls, the security team was led by a trans woman, and the entire team identified as trans, an effort to make the space more trans-affirming.  </p>
                                    <p>For the most part, patrons and volunteers of all genders experienced the Pussy Palace events as inclusive, particularly from the perspective of the organizing committee. However, earlier iterations of the Palace could not mitigate entirely the trans-exclusionary politics circulating in queer women’s community in the late-90s. While trans patrons do recall enjoying their time at the Palace, for some, this enjoyment was also tinged with a lingering sense of isolation. </p>
                                    <button className='listen-button' onClick={() => document.getElementById('vis-invisible').play()}><IconListen/> Listen to “Vis/Invisible”</button>
                                </div>
                                <div>
                                    <h3><IconListen/> VERY SPECIFIC FLAVOUR</h3>
                                    <div className='video-div'>
                                        <video id='very-specific-flavour' poster='/assets/images/building/Trans Inclusion_Specific Flavour_Cover.png' controls>
                                            <source src='/assets/video/Trans Inclusion_Specific Flavour_Video.mp4'/>
                                            <track src='/assets/vtt/Trans Inclusion_Specific Flavour_Captions.vtt' kind='subtitles' label='CC'/>
                                        </video>
                                    </div>
                                    <p className='video-description'>TWBC Member Karen B. K. Chan remembers the committee’s quest for a trans-inclusive yet women-specific space. </p>
                                    <CreditsExpander content={<>Stranges, Alisha, and Elspeth Brown. “Building the Palace: Very Specific Flavour.” Narrated by Karen B. K. Chan. Illustration by Ayo Tsalithaba. Produced by LGBTQ Oral History Digital Collaboratory. <i>The History of the Pussy Palace: A Digital Exhibit</i>. 2024. Video, 0:55.</>}/>
                                
                                    <h3><IconListen/> GODDESSES &amp; DOLPHINS</h3>
                                    <div className='video-div'>
                                        <video id='goddesses-and-dolphins' poster='/assets/images/building/Trans Inclusion_Goddesses & Dolphins_Cover.png' controls>
                                            <source src='/assets/video/Trans Inclusion_Goddesses & Dolphins_Video.mp4'/>
                                            <track src='/assets/vtt/Trans Inclusion_Goddesses & Dolphins_Captions.vtt' kind='subtitles' label='CC'/>
                                        </video>
                                    </div>
                                    <p className='video-description'>TWBC Co-Founder Carlyle Jansen reflects on the perceptual barriers impacting trans inclusion at the Palace. </p>
                                    <CreditsExpander content={<>Stranges, Alisha, and Elspeth Brown. “Building the Palace: Goddesses & Dolphins.” Narrated by Carlyle Jansen. Illustration by Ayo Tsalithaba. Produced by LGBTQ Oral History Digital Collaboratory. <i>The History of the Pussy Palace: A Digital Exhibit</i>. 2024. Video, 1:16.</>}/>
                                
                                    <h3><IconLook/> PUSSY PALACE ‘98</h3>
                                    <PDFMultiviewer files={[
                                        {
                                            path: "/assets/documents/1998-09-14_Pussy Palace_Poster.pdf",
                                            desc: '',
                                            pages: 2
                                        }
                                    ]}/>
                                    <p className='pdf-credits'>Courtesy of the <a href='https://sds.utoronto.ca/sexual-representation-collection/'>Sexual Representation Collection</a>, Bonham Centre for Sexual Diversity Studies, University of Toronto, Carlyle Jansen Collection. </p>
                                    
                                    <h3><IconListen/> TABLEAU OF POSSIBILITY</h3>
                                    <div className='video-div'>
                                        <video id='tableau-of-possibility' poster='/assets/images/building/Trans Inclusion_Tableau_Cover.png' controls>
                                            <source src='/assets/video/Trans Inclusion_Tableau_Video.mp4'/>
                                            <track src='/assets/vtt/Trans Inclusion_Tableau_Captions.vtt' kind='subtitles' label='CC'/>
                                        </video>
                                    </div>
                                    <p className='video-description'>Patron Trish Salah reflects on the personal significance of posing for the Palace’s promotional materials.</p>
                                    <CreditsExpander content={<>Stranges, Alisha, and Elspeth Brown. “Building the Palace: Tableau of Possibility.” Narrated by Trish Salah. Illustration by Ayo Tsalithaba. Produced by LGBTQ Oral History Digital Collaboratory. <i>The History of the Pussy Palace: A Digital Exhibit</i>. 2024. Video, 1:22.</>}/>
                                
                                    <h3><IconListen/> VIS/INVISIBLE</h3>
                                    <div className='video-div'>
                                        <video id='vis-invisible' poster='/assets/images/building/Trans Inclusion_VisInvisible_Cover.png' controls>
                                            <source src='/assets/video/Trans Inclusion_VisInvisible_Video.mp4'/>
                                            <track src='/assets/vtt/Trans Inclusion_VisInvisible_Captions.vtt' kind='subtitles' label='CC'/>
                                        </video>
                                    </div>
                                    <p className='video-description'>Patrons and volunteers reflect on their perceptions of trans inclusivity at early iterations of the Pussy Palace.</p>
                                    <CreditsExpander content={<>Stranges, Alisha, and Elspeth Brown. “Building the Palace: Vis/Invisible.” Narrated by Tera Mallette, Lukas Blakk, and Trish Salah. Illustration by Ayo Tsalithaba. Produced by LGBTQ Oral History Digital Collaboratory. <i>The History of the Pussy Palace: A Digital Exhibit</i>. 2024. Video, 3:35.</>}/>
                                </div>
                            </div>
                            
                            <p>In an article reflecting on the first bathhouse of 1998, Salah records that her right to be at the bathhouse had been queried five times while in earshot, with patrons commenting “don’t you know that this is a womyn’s bathhouse?” Even though the organizers had made it clear that trans women were welcome, and Salah “had no questions about whether it was cool for me to be in the space,” she still had to navigate transphobia among other patrons. As Salah argues, trans exclusionary radical feminism had been a mainstream position within feminist and lesbian communities for generations, and the alliance between women’s spaces and trans positivity was a minority position in the 1990s. It would take several more years before an emerging queer common sense came to see the exclusion of trans people from “women’s” spaces as, in Salah’s words, “gross and despicable.” Despite organizers’ best efforts, trans women at the Palace still had to navigate this residual transphobia. Nonetheless, Salah remembers “a lot of care and attention.” </p>
                            <p>Ultimately, however, the full inclusion of trans women was limited by the conceptualization of the bathhouse as a queer women’s event. From Salah’s perspective, a bathhouse that was truly inclusive of trans women would, necessarily, require admitting cis men, as cis men were equally likely to be trans women’s sexual partners as queer women, cis or trans. A queer women’s bathhouse would necessarily be inclusive of some, but not all, trans women. Salah wondered then, as she does today, “about the place where our ethical recognition of one another meets our desire for one another and what the interplay between those are.” Utopian longing for an inclusive space for queer women and gender non-conforming people can get caught on the sholes of desire: when these very same queer women and gender non-conforming people desire excluded bodies, such as male-assigned persons of various genders, how should an organizing committee proceed?</p>
                            
                            <div className='split-66-33'>
                                <div>
                                    <button className='listen-button' onClick={() => document.getElementById('redefined').play()}><IconListen/> Listen to “Inclusion Redefined”</button>
                                    <p>The Pussy Palace environment was always more comfortable with masculine gender presentations, including trans masculinity. The organizers’ politics and the entire scene emerged out of the queer women’s community’s re-engagement with butch/femme roles in the 1990s; this was, in turn, a reaction against the sex wars of the 1980s and the white, middle-class lesbian feminist embrace of androgyny as the only appropriate form of gender expression. For queer women in the 1990s reacting against the lesbian feminism of the 1980s, female masculinity emerged as a site of radical politics and erotic investment. </p>
                                </div>
                                <div>
                                    <h3><IconListen/> INCLUSION REDEFINED</h3>
                                    <div className='video-div'>
                                        <video id='redefined' poster='/assets/images/building/Trans Inclusion_Redefined_Cover.png' controls>
                                            <source src='/assets/video/Trans Inclusion_Redefined_Video.mp4'/>
                                            <track src='/assets/vtt/Trans Inclusion_Redefined_Captions.vtt' kind='subtitles' label='CC'/>
                                        </video>
                                    </div>
                                    <p className='video-description'>Patron Trish Salah contemplates the limits of a women-and-trans-only space that excludes cis men.</p>
                                    <CreditsExpander content={<>Stranges, Alisha, and Elspeth Brown. “Building the Palace: Inclusion Redefined.” Narrated by Trish Salah. Illustration by Ayo Tsalithaba. Produced by LGBTQ Oral History Digital Collaboratory. <i>The History of the Pussy Palace: A Digital Exhibit</i>. 2024. Video, 2:11.</>}/>
                                </div>
                            </div>

                            <p>Not surprisingly, then, the Pussy Palace saw a range of masculinities, all of which seemed welcome, including bois, butches, drag kings, leather daddies, and eventually trans men. Stephanie Dutrizac, a cis queer femme, remembers seeing “a lot of trans-masculine people...who presented in all kinds of masculine ways.” And Noelle Campbell-Smith, who identified as a genderfluid lesbian in 2000 and as non-binary in 2020, doesn’t recall seeing “any separation between the groups.” Initially, however, in 1998 when the number of trans men in the community was relatively small, trans men were not really on the organizers’ radar, leading some prospective patrons to seek more clarity. One Palace hopeful approached organizer Carlyle Jansen to ask point blank: “Look, are we welcome at this event, if we identify…as trans male?” When Jansen brought the question to the organizing team, fellow committee member Chanelle Gallant reminded everyone that “trans men have always been a part of our community. So why would we exclude them now?” With all in agreement, trans men’s presence at the Palace was made explicitly welcome.</p>
                            <p>Trans men, in these early years of the Pussy Palace, could be the sites of both suspicion and eroticism. Volunteer Renee Racine, who identified as a femme bisexual in 2000, remembers “a conversation that was going on around trans men and whether or not people felt safe having them in this space.” As patron Andrea Ridgely commented, “there was a fair amount of judgment flying around at the time. It would not have been an easy time” for trans men. This 1990s period defined what Jack Halberstam and C. Jacob Hale named as the butch/FTM border wars, a period of suspicion and wariness over changing understandings of embodiment, gender presentation, and identity in what was once known as the “women’s community.” At the same time, from the perspective of some patrons, trans men seemed to get all the action. As Tera Mallette recalls, “everyone wanted a piece of a trans guy back then.” </p>
                            <p>The organizers’ commitment to trans inclusion continued well past the 2000 police raid. Activism in the wake of the 2000 police raid foregrounded trans community needs, including the community report on police relations with the queer and trans community that the TWBC commissioned in 2005, using a portion of the proceeds from the $350,000 settlement from their successful Ontario Human Rights Commission complaint (see Raid on the Palace: <a href='###'>Human Rights Complaint & Class Action Suit</a>). In 2010, the TWBC changed the name of the events from the Pussy Palace to the more inclusive Pleasure Palace. When the TWBC dissolved their finances in 2014, they donated the remaining $5000 to Trans Pride Toronto, founded by <a href='https://arquives.ca/whats-new-in-the-archives-monica-forrester-shines-a-spotlight-on-trans-history/'>Monica Forrester</a>, a Two-Spirit trans woman and a community activist.  </p>
                        
                            <div>    
                                <div className='thin-divider' style={{margin: '60px 0'}}></div>
                                <button className='tab-switch-button prev-tab-button' onClick={() => document.getElementById('founding-the-twbc').click()}>&lt; FOUNDING THE TWBC</button>
                                <button className='tab-switch-button next-tab-button' onClick={() => document.getElementById('bipoc-inclusion').click()}>BIPOC INCLUSION &gt;</button>
                            </div>
                        </>,



                        <>
                            <h2 className='pink content-page-subheader'>BIPOC INCLUSION</h2>  
                        
                            <div className='split-66-33'>
                                <div>
                                    <p>The Pussy Palace was organized primarily by white, queer cis women who worked hard to create a racially diverse and welcoming space. Organizers, in seeking to create an anti-racist event series, encountered structural racism within their work and within the community, creating ongoing challenges and conflicts. Sparked by the interventions of queer women of colour in their roles as organizing committee members and volunteers, the TWBC introduced numerous strategies to increase the number of BIPOC patrons, to make the space more affirming for people of colour, and to address systemic racism at the Palace. From the early days, advertising featured racially diverse models of all ages and body types.</p>
                                    <button className='listen-button'><IconLook/> Look at “Palace Photo Shoot”</button>
                                </div>
                                <div>
                                    <h3><IconLook/> PALACE PHOTO SHOOT</h3>
                                    <PDFMultiviewer files={[
                                        {
                                            path: "/assets/documents/2003_Pussy Palace_Promotional Postcard (placeholder).pdf",
                                            desc: '',
                                            pages: 2
                                        }
                                    ]}/>
                                    <p className='pdf-credits'>Promotional postcard for the Pussy Palace. Photograph by Chloë Brushwood Rose, c. 2003. Courtesy of TWBC member, Chanelle Gallant. </p>
                                </div>
                            </div>

                            <p>As Trish Salah mentions, this promotional imagery offered prospective patrons an expansive conception of what the Palace could look like, “mak[ing] apparent that the bathhouse was not only for white folks, not only for cis folks, not only for slim, able-bodied . . . cis queer women.” These photo shoots were community events in themselves, and organizers took care to ease anxieties for participants and to foster a culture of consent and collaboration. </p>
                        
                            <div className='split-66-33'>
                                <div>
                                    <button className='listen-button' onClick={() => document.getElementById('visualizing-inclusion').play()}><IconListen/> Listen to “Visualizing Inclusion”</button>
                                    <p>The Palace events were popular, and tickets would sell out early. Organizers began selling tickets in advance and considered discounts for BIPOC patrons, for example, or two-for-one deals, while worrying about further marginalizing non-white attendees. TWBC member Carol Thames, a Black activist and committee member, sold advance tickets to her BIPOC network. At another point, BIPOC patrons could skip the line-up outside and head directly to the door for admittance. In an effort to educate patrons on how to hold space with one another across difference, organizers asked Palace-goers to sign off on a “Being an Ally” notice before entering the space.</p>
                                    <button className='listen-button' onClick={() => document.getElementById('dear-white-people').play()}><IconListen/> Listen to “Dear White People”</button>
                                    <p>An undated handbill from Carlyle Jansen’s papers, entitled “Being An Ally,” is likely one iteration of the document that Singh references. After explaining what an ally is, the statement declares:  </p>
                                    <p>The Toronto Women’s Bathhouse is committed to upholding [an] anti-oppressive anti-racist framework at all times. We ask that you respect all women of colour and trans people to ensure that our events are inclusive and safe for all, and that all people are treated with respect and dignity, and that you uphold our commitment to an anti-oppressive, anti-racist, anti-trans phobic and feminist framework.</p>
                                    <button className='listen-button'><IconLook/> Look at “Being An Ally”</button>
                                    <p>While such care in building an anti-racist space might be more familiar today, these efforts were highly unusual in majority-white spaces twenty-five years ago. </p>
                                    <p>In 2006, in response to criticism that their events were not inclusive enough, the TWBC struck a BIPOC-only subcommittee, spearheaded by member Deidre “d-lishus” Walton, who recruited and trained Deb Singh, a rookie volunteer. This committee used TWBC funds to launch a separate set of events called the Sugar Shack. Singh recalls two Sugar Shack events, one in March 2006 and another in 2008, though there may have been more. These gatherings took place at Central Spa, a gay bathhouse in Toronto’s Little Portugal area on Dundas West. </p>
                                    <p>The subcommittee created BIPOC-focused promotional materials for these events that included a diversity of bodies: as Singh remembers, “definitely not just racialized bodies, but fat bodies and masculine-of-centre bodies or trans and non-binary, gender diverse bodies.” BIPOC models responded to an open call made to the community, and the promotional cards they created electrified Singh. “Damn,” she remembers thinking, “I can’t believe we created this. This wasn’t made by somebody else for us. This was made by us. And I’d never seen anything like that before. And I’d never felt it.”</p>
                                    <p>The Sugar Shack was a huge success, “definitely the event to go to,” assures Singh. She describes how moving it was to take part in this sexy BIPOC scene, and the subtle yet profound differences she experienced at the Sugar Shack, in contrast to the majority white Pussy Palace events.</p>
                                    <button className='listen-button' onClick={() => document.getElementById('the-sugar-shack').play()}><IconListen/> Listen to “The Sugar Shack”</button>
                                </div>
                                <div>
                                    <h3><IconListen/> VISUALIZING INCLUSION</h3>
                                    <div className='video-div'>
                                        <video id='visualizing-inclusion' poster='/assets/images/building/BIPOC Inclusion_Visualizing Inclusion_Cover.png' controls>
                                            <source src='/assets/video/BIPOC Inclusion_Visualizing Inclusion_Video.mp4'/>
                                            <track src='/assets/vtt/BIPOC Inclusion_Visualizing Inclusion_Captions.vtt' kind='subtitles' label='CC'/>
                                        </video>
                                    </div>
                                    <p className='video-description'>TWBC Co-Founder Carlyle Jansen and patron Trish Salah reflect on the use of promotional imagery to visualize radical inclusion.</p>
                                    <CreditsExpander content={<>Stranges, Alisha, and Elspeth Brown. “Building the Palace: Visualizing Inclusion.” Narrated by Carlyle Jansen and Trish Salah (Narrators). Illustration by Ayo Tsalithaba (Visual Artist). Produced by LGBTQ Oral History Digital Collaboratory. <i>The History of the Pussy Palace: A Digital Exhibit</i>. 2024. Video, 1:45.</>}/>
                                
                                    <h3><IconListen/> DEAR WHITE PEOPLE</h3>
                                    <div className='video-div'>
                                        <video id='dear-white-people' poster='/assets/images/building/BIPOC Inclusion_Dear White People_Cover.png' controls>
                                            <source src='/assets/video/BIPOC Inclusion_Dear White People_Video.mp4'/>
                                            <track src='/assets/vtt/BIPOC Inclusion_Dear White People_Captions.vtt' kind='subtitles' label='CC'/>
                                        </video>
                                    </div>
                                    <p className='video-description'>TWBC Member Deb Singh critically reflects on efforts to educate white patrons about the role of allyship at the Palace.</p>
                                    <CreditsExpander content={<>Stranges, Alisha, and Elspeth Brown. “Building the Palace: Dear White People.” Narrated by Deb Singh. Illustration by Ayo Tsalithaba. Produced by LGBTQ Oral History Digital Collaboratory. <i>The History of the Pussy Palace: A Digital Exhibit</i>. 2024. Video, 1:32.</>}/>
                                
                                    <div>
                                        <h3><IconLook/> BEING AN ALLY</h3>
                                        <PDFMultiviewer files={[
                                            {
                                                path: "/assets/documents/post-2009_Being An Ally_Handbill.pdf",
                                                desc: '',
                                                pages: 1
                                            }
                                        ]}/>
                                        <p className='pdf-credits'>Courtesy of the <a href='https://sds.utoronto.ca/sexual-representation-collection/'>Sexual Representation Collection</a>, Bonham Centre for Sexual Diversity Studies, University of Toronto, Carlyle Jansen Collection. </p>
                                    </div>

                                    <h3><IconListen/> THE SUGAR SHACK</h3>
                                    <div className='video-div'>
                                        <video id='the-sugar-shack' poster='/assets/images/building/BIPOC Inclusion_The Sugar Shack_Cover.png' controls>
                                            <source src='/assets/video/BIPOC Inclusion_The Sugar Shack_Video.mp4'/>
                                            <track src='/assets/vtt/BIPOC Inclusion_The Sugar Shack_Captions.vtt' kind='subtitles' label='CC'/>
                                        </video>
                                    </div>
                                    <p className='video-description'>TWBC Member Deb Singh articulates the sheer joy of organizing and attending the Sugar Shack events.</p>
                                    <CreditsExpander content={<>Stranges, Alisha, and Elspeth Brown. “Building the Palace: The Sugar Shack.” Narrated by Deb Singh. Illustration by Ayo Tsalithaba. Produced by LGBTQ Oral History Digital Collaboratory. <i>he History of the Pussy Palace: A Digital Exhibit</i>. 2024. Video, 1:07.</>}/>
                                </div>
                            </div>

                            <p>The intimacy and intensity of the Sugar Shack events deepened Singh’s understanding of consent, care, sexual health, and healing within a BIPOC-specific bathhouse space. In a <a href='https://lgbtqdigitalcollaboratory.org/how-to-find-self-love-and-community/'>2022 blog post</a> for the Collaboratory, Singh reflects beautifully on what “people, touch, and lap dancing” taught her about “love in activism” — both self-love and love of community. </p>
                            <p>The Sugar Shack events emerged in the wake of the police raid, where activism relating to the media, the legal case, and fundraising had thrown white entitlement and systemic racism into high relief. According to organizer Chanelle Gallant, “everything was impacted by disagreements around race and racism in our work,” from how to fundraise, who should represent the TWBC to the media, how the committee should respond to the raid, and how the committee should organize the Pussy Palace events. While some white queer women grabbed their placards, so to speak, and headed for the streets, others seemed to go into hiding. The organizing and political stakes intensified, leading some white activists to begin seeing forms of white privilege that may not have been evident to them previously. </p>
                            <p>As T’Hayla Ferguson reflected regarding these political discussions, “looking back now, 23 years later, it was a lot of white girls at the table all talking very fast about what we could get done.” Queer of colour activists associated with the TWBC sparked Ferguson to examine her own whiteness and see a new level of her own privilege. </p>
                        
                            <div className='split-66-33'>
                                <div>
                                    <button className='listen-button' onClick={() => document.getElementById('powerful-voices').play()}><IconListen/> Listen to “Powerful Voices”</button>
                                    <p>But as organizer Janet Rowe reflected, the mainly white organizers hadn’t really thought through the differential impact that a police raid might have on people of colour and gender non-normative patrons. The bathhouse of September 2000 had the most BIPOC and trans participation up to that point, who all left as soon as possible. People of colour and trans people are much more vulnerable to police harassment than cis white women and, in Rowe’s view, the TWBC had been naïve in not thinking through how a potential police raid would affect BIPOC and trans patrons differently than it would white, cis queer women. This experience revealed how white entitlement works, and how important the leadership of BIPOC organizers would have been in preparing for a possible raid. As she concluded, these reflections are ones “I think about now, that we didn’t think about then.” </p>
                                    <button className='listen-button' onClick={() => document.getElementById('looking-back').play()}><IconListen/> Listen to “Looking Back”</button>
                                    <p>Organizers had made strides creating a diverse bathhouse culture for the Pussy Palace events, but it was still a majority white space: while a few narrators described the events as racially diverse, most recognized that both the core organizing team and the events themselves were predominantly white. Volunteer Karen B. K. Chan was recruited to the TWBC in an effort to diversify the committee and, as part of that work, to recruit other queer East Asians to the events. The challenge, from Chan’s perspective, was that “not a lot of people of colour were connected” to the scene. Most of Chan’s queer Asian friends were connected uptown, in the Richmond Hill area of Toronto, and had no interest in heading downtown for a night out.</p>
                                    <button className='listen-button' onClick={() => document.getElementById('uptown-things').play()}><IconListen/> Listen to “Uptown Things”</button>
                                    <p>To address cis white privilege, the TWBC began organizing equity, diversity, and inclusion workshops for committee members and volunteers at Toronto’s 519 Community Centre. While narrators struggled to recall the particularities of these trainings, it seems their intent was to arrive at a shared awareness of how various systems of oppression were operating at the bathhouse. The hope was that a deeper understanding of white supremacy, systemic racism, and gender phobia would empower the event teams to mitigate macro- and micro-aggressions at the Palace. Some white radical activists involved with the TWBC and the post-raid organizing came to understand that it’s not possible to “add diversity” to a majority white organization and expect an anti-racist result. Organizer Chanelle Gallant noted that “those of us who were trying to work on the same side against the police were often in conflict with each other around race,” and that “white racism was undermining” the work.</p>
                                    <button className='listen-button' onClick={() => document.getElementById('liberal-racial-divsersity').play()}><IconListen/> Listen to “Liberal Racial Diversity”</button>
                                    <p>Committed to understanding and undoing systemic racism, Gallant eventually did a four-and-a-half-month anti-racism training program with the Catalyst Project in San Francisco and interned with <a href='https://criticalresistance.org/'>Critical Resistance</a>, the US national prison abolition organization. But this growing understanding of the perniciousness of white supremacy within all organizations, including radical queer ones like the TWBC, unfolded over years and was not always accessible to white organizers at the time. </p>
                                    <p>In contrast, queer of colour activists identified a growing gap between the majority white organizing committee and the queer and trans of colour committee members, volunteers, and patrons. When the TWBC did succeed in creating BIPOC spaces, as they had with the Sugar Shack events, some white patrons pushed back, insisting on having access. Lengthy discussions among Sugar Shack organizers resulted in a new policy, whereby white patrons could attend, so long as they were accompanied by a person of colour. Throughout, queer of colour volunteers and patrons shared stories with each other.  </p>
                                    <button className='listen-button' onClick={() => document.getElementById('kitchen-table-talk').play()}><IconListen/> Listen to “Kitchen Table Talk”</button>
                                    <p>Some queer of colour organizers reached their limits with this ongoing work, while at the same time valuing the importance of working together across racial lines to forge this radical experiment in queer sexuality. As Singh commented, when she moved from a membership on the sub-committee for the Sugar Shack events to joining the larger TWBC, “it became work that I was now doing as a racialized body for white people in a whiter space. And so, by the end of it, I was like, ‘And, end scene.’ Like, I can’t deal with this anymore.” For a variety of reasons, organizer Karen B. K. Chan eventually resigned from the main committee, where she was one of two people of colour. By this point, the TWBC was embroiled in the court case after the raid, and Chan wondered how much they could contribute. “I felt really torn,” Chan reflected. While they wanted to be an effective organizer, in the context of a committee dominated by “femme, top, tall, established, personable, vivacious, extrovert” types, Chan in contrast felt she didn’t know how to thrive in that environment. </p>
                                    <button className='listen-button' onClick={() => document.getElementById('i-needed-to-do-this').play()}><IconListen/> Listen to “I Needed to Do This”</button>
                                </div>
                                <div>
                                    <h3><IconListen/> POWERFUL VOICES</h3>
                                    <div className='video-div'>
                                        <video id='powerful-voices' poster='/assets/images/building/BIPOC Inclusion_Powerful Voices_Cover.png' controls>
                                            <source src='/assets/video/BIPOC Inclusion_Powerful Voices_Video.mp4'/>
                                            <track src='/assets/vtt/BIPOC Inclusion_Powerful Voices_Captions.vtt' kind='subtitles' label='CC'/>
                                        </video>
                                    </div>
                                    <p className='video-description'>Patron T’Hayla Ferguson highlights the impact of queer women of colour organizers on her understanding of white privilege.</p>
                                    <CreditsExpander content={<>Stranges, Alisha, and Elspeth Brown. “Building the Palace: Powerful Voices.” Narrated by T’Hayla Ferguson. Illustration by Ayo Tsalithaba. Produced by LGBTQ Oral History Digital Collaboratory. <i>The History of the Pussy Palace: A Digital Exhibit</i>. 2024. Video, 0:50.</>}/>
                                
                                    <h3><IconListen/> LOOKING BACK</h3>
                                    <div className='video-div'>
                                        <video id='looking-back' poster='/assets/images/building/BIPOC Inclusion_Looking Back_Cover.png' controls>
                                            <source src='/assets/video/BIPOC Inclusion_Looking Back_Video.mp4'/>
                                            <track src='/assets/vtt/BIPOC Inclusion_Looking Back_Captions.vtt' kind='subtitles' label='CC'/>
                                        </video>
                                    </div>
                                    <p className='video-description'>TWBC Co-Founder Janet Rowe grapples with the committee’s failure to consider the differential impacts of the police raid.</p>
                                    <CreditsExpander content={<>Stranges, Alisha, and Elspeth Brown. “Building the Palace: Looking Back.” Narrated by Janet Rowe. Illustration by Ayo Tsalithaba. Produced by LGBTQ Oral History Digital Collaboratory. <i>The History of the Pussy Palace: A Digital Exhibit</i>. 2024. Video, 1:08.</>}/>
                                
                                    <h3><IconListen/> UPTOWN THINGS</h3>
                                    <div className='video-div'>
                                        <video id='uptown-things' poster='/assets/images/building/BIPOC Inclusion_Uptown Things_Cover.png' controls>
                                            <source src='/assets/video/BIPOC Inclusion_Uptown Things_Video.mp4'/>
                                            <track src='/assets/vtt/BIPOC Inclusion_Uptown Things_Captions.vtt' kind='subtitles' label='CC'/>
                                        </video>
                                    </div>
                                    <p className='video-description'>TWBC Member Karen B. K. Chan recalls the challenge of uniting uptown and downtown queer subcultures.</p>
                                    <CreditsExpander content={<>Stranges, Alisha, and Elspeth Brown. “Building the Palace: Uptown Things.” Narrated by Karen B. K. Chan. Illustration by Ayo Tsalithaba. Produced by LGBTQ Oral History Digital Collaboratory. <i>The History of the Pussy Palace: A Digital Exhibit</i>. 2024. Video, 0:58.</>}/>
                                
                                    <h3><IconListen/> LIBERAL RACIAL DIVERSITY</h3>
                                    <div className='video-div'>
                                        <video id='liberal-racial-diversity' poster='/assets/images/building/BIPOC Inclusion_Liberal Racial Diversity_Cover.png' controls>
                                            <source src='/assets/video/BIPOC Inclusion_Liberal Racial Diversity_Video.mp4'/>
                                            <track src='/assets/vtt/BIPOC Inclusion_Liberal Racial Diversity_Captions.vtt' kind='subtitles' label='CC'/>
                                        </video>
                                    </div>
                                    <p className='video-description'>TWBC Member Chanelle Gallant confronts the limits of liberalism for organizers of this multi-racial, queer public sex event.</p>
                                    <CreditsExpander content={<>Stranges, Alisha, and Elspeth Brown. “Building the Palace: Liberal Racial Diversity.” Narrated by Chanelle Gallant. Illustration by Ayo Tsalithaba. Produced by LGBTQ Oral History Digital Collaboratory. <i>The History of the Pussy Palace: A Digital Exhibit</i>. 2024. Video, 0:59.</>}/>

                                    <h3><IconListen/> KITCHEN TABLE TALK</h3>
                                    <div className='video-div'>
                                        <video id='kitchen-table-talk' poster='/assets/images/building/BIPOC Inclusion_Kitchen Table Talk_Cover.png' controls>
                                            <source src='/assets/video/BIPOC Inclusion_Kitchen Table Talk_Video.mp4'/>
                                            <track src='/assets/vtt/BIPOC Inclusion_Kitchen Table Talk_Captions.vtt' kind='subtitles' label='CC'/>
                                        </video>
                                    </div>
                                    <p className='video-description'>TWBC Member Deb Singh notes the private labour organizers of colour take up in the service liberating community spaces.</p>
                                    <CreditsExpander content={<>Stranges, Alisha, and Elspeth Brown. “Building the Palace: Kitchen Table Talk.” Narrated by Deb Singh. Illustration by Ayo Tsalithaba. Produced by LGBTQ Oral History Digital Collaboratory. <i>The History of the Pussy Palace: A Digital Exhibit</i>. 2024. Video, 1:08.</>}/>
                                
                                    <h3><IconListen/> I NEEDED TO DO THIS</h3>
                                    <div className='video-div'>
                                        <video id='i-needed-to-do-this' poster='/assets/images/building/BIPOC Inclusion_I Needed to Do This_Cover.png' controls>
                                            <source src='/assets/video/BIPOC Inclusion_I Needed to Do This_Video.mp4'/>
                                            <track src='/assets/vtt/BIPOC Inclusion_I Needed to Do This_Captions.vtt' kind='subtitles' label='CC'/>
                                        </video>
                                    </div>
                                    <p className='video-description'>TWBC Member Karen B. K. Chan recounts their difficult resignation from the organizing committee.</p>
                                    <CreditsExpander content={<>Stranges, Alisha, and Elspeth Brown. “Building the Palace: I Needed to Do This.” Narrated by Karen B. K. Chan. Illustration by Ayo Tsalithaba. Produced by LGBTQ Oral History Digital Collaboratory. <i>The History of the Pussy Palace: A Digital Exhibit</i>. 2024. Video, 3:03.</>}/>
                                </div>
                            </div>

                            <p>Although Chan doesn’t speak directly about racism in this section of the interview, they do address the challenges of diversifying the Pussy Palace. As they reflected after discussing some of the numerous anti-racism strategies described throughout, maybe “some things are not meant to look a certain way . . . we really endeavored to have diversity in a thing that I just really don’t know how many people want to be part of.” At the same time, Chan recognized and valued the anti-racism work they were doing, and the organizers’ general commitment to making the Pussy Palace more inclusive of BIPOC volunteers and patrons. As they noted, “I was happy to be one of the people who is going to make this thing more diverse . . . I didn’t feel particularly tokenized.” But Chan’s inclusion of the word “particularly” here speaks volumes about the burden that BIPOC organizers carried in their efforts to make the Pussy Palace and the TWBC an affirming environment for non-white participants.   </p>
                            <p>One of the most moving aspects of our interviews has been the honesty, thoughtfulness, and compassion with which organizers discussed the difficult and unfinished work of building a radical, queer, anti-racist, trans-inclusive space for sexual expression, exploration, and celebration. Our interviews, of course, could not capture the sentiments of those who were so fed-up with this difficult work that they chose not to participate in the oral history project. But for those who did share their stories with us, we were deeply moved by narrators’ abilities to speak with directness and clarity about difficult political work — holding each other accountable without resorting to character assassination, while still embracing the radical possibilities such utopian spaces offer. Their political commitment, incisive analysis, and willingness to take responsibility provides equipment for living in our own difficult political era.</p>
                        
                            <div>    
                                <div className='thin-divider' style={{margin: '60px 0'}}></div>
                                <button className='tab-switch-button prev-tab-button' onClick={() => document.getElementById('trans-inclusion').click()}>&lt; TRANS INCLUSION</button>
                            </div>
                        </>
                    ]}
                />
            </div>
        </div>
    );

    /*
    return (
        <div className='page-wrapper'>
            <SideMenu active='building'/>
            <div className='content'>
                <img className='banner' alt='' src='/assets/images/building/Building_Banner.png'/>
                <h2 className='content-title pink'>BUILDING THE PALACE</h2>
                <h3 className='content-subtitle pink'>RADICAL SEX ORGANIZING (1998-2000)</h3>
                <p style={{marginBottom: 60}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis tempus augue, vitae convallis turpis. Sed nisl felis, ultricies vitae semper nec, condimentum id dui. Sed dapibus pellentesque neque. Aenean feugiat tempor erat, sed volutpat dolor congue ac. Aenean sed diam lacus. Nunc enim tortor, efficitur vitae turpis id, imperdiet venenatis ante. Nunc nec mollis libero. Nullam eros ante, finibus accumsan venenatis id, dictum at enim. Etiam at sem non ipsum finibus porttitor. Vestibulum tristique dolor lectus, ut finibus orci euismod id. Donec pretium turpis nec tincidunt feugiat. Mauris metus nisl, fermentum eget justo nec, tempus venenatis elit. Proin eu. </p>
            
                <ContentPageTabs 
                    titles={[
                        {name: 'FOUNDING THE TWBC', id: 'founding-the-twbc'},
                        {name: 'TRANS INCLUSION', id: 'trans-inclusion'},
                        {name: 'BIPOC INCLUSION', id: 'bipoc-inclusion'}
                    ]}
                    content={[
                        <>
                            <h3 className='tab-heading' style={{margin: '60px 0'}}>FOUNDING THE TORONTO WOMEN’S BATHHOUSE COMMITTEE</h3>
                            <div className='split-66-33'>
                                
                                <div>
                                    <p>The Pussy Palace started out as an HIV prevention strategy. Organizer Janet Rowe had developed a safe sex campaign for queer women as part of her work for the AIDS Committee of Toronto (ACT) and needed a place to launch it. Colleagues suggested: why not a queer women’s bathhouse night? So, in the Fall of 1998, Rowe started the Women’s Bath House Project, what later became the Toronto Women’s Bathhouse Committee (TWBC).</p>
                                    <button className='listen-button' onClick={() => document.getElementById('the-big-idea').play()}><IconListen/> Listen to “The Big Idea”</button>
                                    <p>Very quickly the secondary reason for the bathhouse — queer women’s sexual expression — became the driving force behind the organizing work. Carlyle Jansen had just opened her sex-positive retail store, <a href="https://goodforher.com/">Good For Her</a>, when she was invited to partner with Rowe and draft a proposal for the initial event. Jansen’s pro-sex, pro-pleasure approach to the Pussy Palace was also shaped by a queer women’s bathhouse called Octopussy Galore, which she attended while living in Seattle in the mid-1990s.</p>
                                    <button className='listen-button' onClick={() => document.getElementById('octopussy-galore').play()}><IconListen/> Listen to “Octopussy Galore”</button>
                                    <p>Securing a physical space to host the event was challenging, to say the least. For a variety of reasons, gay men’s bathhouse owners in the city were reluctant to share space with women. Most venues doubted the event’s capacity to draw a crowd or to turn a profit. After a series of rejections, Club Toronto, a working-class, gay men’s bathhouse at the corner of Carlton Street and Mutual Street, agreed to rent out their space. But not without some deliberation.</p>
                                    <button className='listen-button' onClick={() => document.getElementById('blood-and-cat-fights').play()}><IconListen/> Listen to “Blood &amp; Cat Fights”</button>
                                    <p>Once Club Toronto was secured, Rowe and Jansen began networking with friends and colleagues to assemble the first iteration of the Toronto Women’s Bathhouse Committee, a collective of more than a dozen pro-sex, feminist queers who could assist them in launching the inaugural event, slated for Monday, September 14, 1998. From the very beginning, the TWBC was organized, focused and comprehensive in their planning. Early meetings covered fundraising; advertising and promotion; space rental; legal issues; and programming. Quite quickly, TWBC members sought to address the challenges of creating an inclusive, accessible event that welcomed both trans women and trans men, as well as BIPOC patrons.</p>
                                    <p>Accessibility for those with mobility challenges remained an ongoing issue. None of the clubs that the organizers could rent were accessible. Most Pussy Palace events took place at Club Toronto, now <a href="https://oasisaqualounge.com/">Oasis Aqualounge</a> (a sex-positive playground for consenting adults): an old Victorian with four floors, a labyrinth of upstairs rooms, an outdoor pool, sauna, hot tub, showers, a small dance floor and a bar. Even entering the building required walking down a short set of stairs into a vestibule, and there was no elevator.</p>
                                    <p>Organizers did what they could by, for example, arranging for one patron, in a wheelchair, to be carried between floors; Temple Priestess Leanne Powers designed rituals for a volunteer’s new walker to help her “ground and continue to stay feeling erotically charged.” At one point, the TWBC donated money to a group organizing a sex event for people with disabilities. But when it came to the Pussy Palace, organizers made the difficult decision to rent an inaccessible space, rather than have no event at all. </p>
                                    <button className='listen-button' onClick={() => document.getElementById('smelled-like-hamster').play()}><IconListen/> Listen to “Smelled Like Hamster”</button>
                                    <p>Several radical, sex-positive influences shaped the TWBC’s approach. Many volunteers were part of Toronto’s kink and leather communities, which were diverse and inclusive, and which held play parties for those in the know. Queer artist Will Munro was organizing his Vazaleen club nights, a gathering place for sex-positive queers and gender non-normative folks inventing lives outside the homonormative mainstream. Eight narrators had some familiarity with the Michigan Womyn’s Music Festival’s annual public sex spaces; in contrast to Michigan, however, as some narrators pointed out, the Pussy Palace explicitly welcomed trans women. 1990s Toronto hosted, in core committee member Chanelle Gallant’s words, a “very deep sex-positive, queer, feminist culture,” and the Pussy Palace — the only sexual women’s bathhouse in North America that she knew about — was a natural outgrowth of 1990s Toronto’s radical sex culture.</p>
                                    <p>Much to the surprise of Club Toronto and the newly-formed TWBC, the Fall 1998 event attracted over 400 women and trans people, who stood in line, in the rain, awaiting their opportunity to explore their sexuality in a communal, public place. Members of the bathhouse committee sought to create a safe environment for sexual exploration that would include public sex with a partner, casual hook-ups with a stranger, exhibitionism and voyeurism, cruising, kink, BDSM, and more. For most patrons, the committee crafted a sexy, celebratory environment that mixed exploration with safety, opening possibilities for new experiences.</p>
                                    <button className='listen-button' onClick={() => document.getElementById('like-the-guys-do').play()}><IconListen/> Listen to “Sex for Sex's Sake”</button>
                                    <p>At the bathhouse, organizers made a concerted effort to create a culture of care that would ease anxieties and offer multiple pathways for participation. Volunteer duties included coat check; touring the space with newcomers; explaining etiquette, rules, and safe sex; watching for fire and/or inappropriate behavior, and other tasks. At the door, volunteers handed out sex-positive etiquette sheets and verbally confirmed with each patron that they understood that both transwomen and transmen were welcome, and that discrimination would not be tolerated (see Figures 1-3). </p>
                                </div>

                                
                                <div>
                                    <h3><IconListen/> THE BIG IDEA</h3>
                                    <div className='video-div'>
                                        <video id='the-big-idea' poster='/assets/images/building/Founding the TWBC_Rowe_Cover.png' controls>
                                            <source src='/assets/video/Founding the TWBC_Rowe_Video.mp4'/>
                                            <track src='/assets/vtt/Founding the TWBC_Rowe_Captions.vtt' kind='subtitles' label='CC'/>
                                        </video>
                                    </div>
                                    <p className='video-description'>TWBC Co-Founder Janet Rowe shares the challenges and surprises of organizing a public campaign on HIV prevention for queer cis women.</p>
                                    <CreditsExpander content={<>Rowe, J. (Narrator). (2024). Building the Palace: Founding the Toronto Women’s Bathhouse Committee [Audio soundbite]. In The history of the Pussy Palace: A digital exhibit. LGBTQ Oral History Digital Collaboratory. <a href="#">https://URL of soundbite webpage location</a></>}/>
                                
                                    <h3><IconListen/> OCTOPUSSY GALORE</h3>
                                    <div className='video-div'>
                                        <video id='octopussy-galore' poster='/assets/images/building/Founding the TWBC_Octopussy Galore_Cover.png' controls>
                                            <source src='/assets/video/Founding the TWBC_Octopussy Galore_Video.mp4'/>
                                            <track src='/assets/vtt/Founding the TWBC_Octopussy Galore_Captions.vtt' kind='subtitles' label='CC'/>
                                        </video>
                                    </div>
                                    <p className='video-description'>TWBC Co-Founder Carlyle Jansen recounts her experience at Octopussy Galore and its impact on her vision for the Pussy Palace events.</p>
                                    <CreditsExpander content={<>Jansen, C. (Narrator). (2024). Building the Palace: Octopussy Galore [Audio soundbite]. In The history of the Pussy Palace: A digital exhibit. LGBTQ Oral History Digital Collaboratory. <a href="#">https://URL of soundbite webpage location</a></>}/>

                                    <h3><IconListen/> BLOOD&nbsp;&amp;&nbsp;CAT&nbsp;FIGHTS</h3>
                                    <div className='video-div'>
                                        <video id='blood-and-cat-fights' poster='/assets/images/building/Founding the TWBC_Blood & Cat Fights_Cover.png' controls>
                                            <source src='/assets/video/Founding the TWBC_Blood & Cat Fights_Video.mp4'/>
                                            <track src='/assets/vtt/Founding the TWBC_Blood & Cat Fights_Captions.vtt' kind='subtitles' label='CC'/>
                                        </video>
                                    </div>
                                    <p className='video-description'>TWBC Co-Founders Carlyle Jansen and Janet Rowe recount their conversation with the owners of Club Toronto.</p>
                                    <CreditsExpander content={<>Jansen, C., & Rowe, J. (Narrators). (2024). Building the Palace: Blood and cat fights [Audio soundbite]. In The history of the Pussy Palace: A digital exhibit. LGBTQ Oral History Digital Collaboratory. <a href="#">https://URL of soundbite webpage location</a></>}/>
                                
                                    <p className='pdf-viewer-title'>TWBC ORIGINAL PROPOSAL AND MEETING MINUTES</p>
                                    <PDFMultiviewer files={[
                                        {
                                            path: "/assets/documents/1998_Original Proposal_Women's Night at SPA.pdf",
                                            desc: 'Digital scan of the TWBC’s original proposal to The Spa for a “Women’s Night” (c. Fall 1998).',
                                            pages: 2
                                        },
                                        {
                                            path: '/assets/documents/1998_TWBC Meeting Minutes_Feb-Mar.pdf',
                                            desc: 'Digital scan of the TWBC’s meeting minutes (c. Feb-Mar 1998). ',
                                            pages: 15
                                        }
                                    ]}/>
                                    <p className='pdf-credits'>Courtesy of the <a href="https://sds.utoronto.ca/sexual-representation-collection/">Sexual Representation Collection</a>, Bonham Centre for Sexual Diversity Studies, University of Toronto, Carlyle Jansen Collection. </p>
                                    <h3><IconListen/> SMELLED&nbsp;LIKE&nbsp;HAMSTER</h3>
                                    <div className='video-div'>
                                        <video id='smelled-like-hamster' poster='/assets/images/building/Founding the TWBC_Smelled Like Hamster_Cover.png' controls>
                                            <source src='/assets/video/Founding the TWBC_Smelled Like Hamster_Video.mp4'/>
                                            <track src='/assets/vtt/Founding the TWBC_Smelled Like Hamster_Captions.vtt' kind='subtitles' label='CC'/>
                                        </video>
                                    </div>
                                    <p className='video-description'>Security Volunteer JP Hornick reflects on the nuanced relationship between accessibility, gender, and class at Club Toronto.</p>
                                    <CreditsExpander content={<>Hornick, JP. (Narrator). (2024). Building the Palace: Smelled like hamster [Audio soundbite]. In The history of the Pussy Palace: A digital exhibit. LGBTQ Oral History Digital Collaboratory. <a href="#">https://URL of soundbite webpage location</a></>}/>

                                    <h3><IconListen/> SEX FOR SEX'S SAKE</h3>
                                    <div className='video-div'>
                                        <video id='like-the-guys-do' poster='/assets/images/building/Founding the TWBC_Like the Guys Do_Cover.png' controls>
                                            <source src='/assets/video/Founding the TWBC_Like the Guys Do_Video.mp4'/>
                                            <track src='/assets/vtt/Founding the TWBC_Like the Guys Do_Captions.vtt' kind='subtitles' label='CC'/>
                                        </video>
                                    </div>
                                    <p className='video-description'>Listen as multiple narrators reflect on the personal significance of the Palace.</p>
                                    <CreditsExpander content={<>Brushwood Rose, C., Campbell-Smith, N., Dutrizac, S., Ferguson, T., Gallant, C., Herlihy, N., Miklos, L., & Rowe, J. (Narrators). (2024). Building the Palace: Like the guys do [Audio soundbite]. In The history of the Pussy Palace: A digital exhibit. LGBTQ Oral History Digital Collaboratory. <a href="#">https://URL of soundbite webpage location</a></>}/>
                                    <p className='pdf-viewer-title'>PALACE RULES AND ETIQUETTE</p>
                                    <PDFMultiviewer files={[
                                        {
                                            path: "/assets/documents/1998_Original Proposal_Women's Night at SPA.pdf",
                                            desc: 'Digital scan of the TWBC’s original proposal to The Spa for a “Women’s Night” (c. Fall 1998).',
                                            pages: 2
                                        },
                                        {
                                            path: '/assets/documents/1998_TWBC Meeting Minutes_Feb-Mar.pdf',
                                            desc: 'Digital scan of the TWBC’s meeting minutes (c. Feb-Mar 1998). ',
                                            pages: 15                                            
                                        }
                                    ]}/>
                                    <p className='pdf-credits'>Courtesy of the <a href="https://sds.utoronto.ca/sexual-representation-collection/">Sexual Representation Collection</a>, Bonham Centre for Sexual Diversity Studies, University of Toronto, Carlyle Jansen Collection. </p>
                                </div>
                            </div>

                            <div>    
                                <div className='thin-divider' style={{margin: '60px 0'}}></div>
                                <button className='tab-switch-button next-tab-button' onClick={() => document.getElementById('trans-inclusion').click()}>TRANS INCLUSION &gt;</button>
                            </div>

                        </>,
                        <>
                            <p>The Pussy Palace events were unusually inclusive of both transwomen and transmen, but this was an evolution. In 1998, when the bathhouse organizing began, gender diversity wasn’t as visible in the queer community as it is today. Accessing hormones for gender transition was a relatively difficult process until after 2001, when the standards of care shifted to allow one’s physician to prescribe hormones. The years of the Pussy Palace events correspond to the flourishing of gender creative identities, medically enhanced and otherwise, within queer communities. The Pussy Palace organizers navigated these changes in community in inclusive ways, seeking to create a welcoming environment for diversely gendered and embodied participants.</p>

                            <div className='split-66-33'> 
                                
                                <div>
                                    <p>Almost from the beginning, the cis queer women organizers envisioned the Palace as a radical, sex-positive space. It was a time when sex radical, queer, cis women read <a href="https://en.wikipedia.org/wiki/On_Our_Backs"><i>On Our Backs</i></a> rather than <a href="https://en.wikipedia.org/wiki/Off_Our_Backs"><i>Off Our Backs</i></a>, experimented with sexual power exchanges, and strapped on sex toys newly available through mail order or local shops like Carlyle Jansen’s <a href="https://goodforher.com/">Good For Her</a>. But understanding how to establish a bathhouse event that was both woman-specific and trans-inclusive required some finesse. </p>
                                    <button className='listen-button' onClick={() => document.getElementById('very-specific-flavour').play()}><IconListen/> Listen to “Very Specific Flavour”</button>
                                    <p>Organizers were familiar with the transphobia of other women’s spaces, such as the Michigan Womyn’s Music Festival, which had excluded trans women as early as 1991, a controversial stance that created the oppositional <a href="https://en.wikipedia.org/wiki/Camp_Trans">Camp Trans</a>. In contrast to Michigan, the TWBC wanted to create a space inclusive of trans women and worked hard to make it so, a very unusual effort for queer women at the time.</p>
                                    <p>Trish Salah, a transwoman and Palace patron, remembers sitting down with organizer Loralee Gillis before the first Pussy Palace to discuss what would make the event trans inclusive, having a “running conversation” with organizers in the early years. Initially in early 1998, organizers wanted to include everyone except those who we would now refer to as cis men and used language they felt to be inclusive by planning an event “only for women who can put their dick in a drawer,” referencing both post-op trans women and queer women who used sex toys.</p>
                                    <button className='listen-button' onClick={() => document.getElementById('goddesses-and-dolphins').play()}><IconListen/> Listen to “Goddesses &amp; Dolphins”</button>
                                    <p>Very quickly, however, because of the “running conversation” that Salah references as well as other feedback, organizers realized the exclusiveness of this language — which assumed that all trans women wanted or had been able to arrange for bottom surgery — and created new trans-positive approaches using various strategies.</p>
                                    <p>For instance, the poster for the very first event on September 14, 1998, was explicitly welcoming by announcing in capital letters “TRANSGENDERED [sic] WOMEN WELCOME” (see Figure 1). The door volunteer duties for the 2000 event (see Figure 2) stated, in bold print:</p>
                                    <p><b>“Verbally confirm with all women that they understand that trans-women and trans-men are welcome and discrimination will not be tolerated”</b> (during this period, terms such as “non-binary” were not part of the vocabulary). </p>
                                    <p>Some of the early promotional literature included a postcard, which featured two queer women, one of them trans. </p>
                                    <p>The work of creating trans-positive representation was a type of care that Salah recognized and appreciated, as it involved “outreach and connection,” and wasn’t merely performative. The creative labour of the shoot, and the representation in circulation within the queer and trans community, impacted how Salah experienced the bathhouse going forward.</p>
                                    <button className='listen-button' onClick={() => document.getElementById('tableau-of-possibility').play()}><IconListen/> Listen to “Tableau of Possibility”</button>
                                    <p>At the bathhouse events, organizers curated a range of activities designed to support patrons who might not feel quite as comfortable, or welcome, in the space, trans women included. Organizers recruited trans women to join the organizing committee as well as security and other volunteer committees. One year, as Jansen recalls, the security team was led by a trans woman, and the entire team identified as trans, an effort to make the space more trans-affirming.</p>
                                    <p>For the most part, patrons and volunteers of all genders experienced the Pussy Palace events as inclusive, particularly from the perspective of the organizing committee. However, earlier iterations of the Palace could not mitigate entirely the trans-exclusionary politics circulating in queer women’s community in the late-90s. While trans patrons do recall enjoying their time at the Palace, for some, this enjoyment was also tinged with a lingering sense of isolation. </p>
                                    <button className='listen-button' onClick={() => document.getElementById('vis-invisible').play()}><IconListen/> Listen to “Vis/Invisible”</button>
                                </div>
                                
                                <div>
                                    <h3><IconListen/> VERY SPECIFIC FLAVOUR</h3>
                                    <div className='video-div'>
                                        <video id='very-specific-flavour' poster='/assets/images/building/Trans Inclusion_Specific Flavour_Cover.png' controls>
                                            <source src='/assets/video/Trans Inclusion_Specific Flavour_Video.mp4'/>
                                            <track src='/assets/vtt/Trans Inclusion_Specific Flavour_Captions.vtt' kind='subtitles' label='CC'/>
                                        </video>
                                    </div>
                                    <p className='video-description'>TWBC Member Karen B. K. Chan remembers the committee’s quest for a trans-inclusive yet women-specific space. </p>
                                    <CreditsExpander content={<>Chan, K. (Narrator). (2024). Building the Palace: Very specific flavour [Audio soundbite]. In The history of the Pussy Palace: A digital exhibit. LGBTQ Oral History Digital Collaboratory. <a href="#">https://URL of soundbite webpage location</a></>}/>
                                
                                    <h3><IconListen/> GODDESSES &amp; DOLPHINS</h3>
                                    <div className='video-div'>
                                        <video id='goddesses-and-dolphins' poster='/assets/images/building/Trans Inclusion_Goddesses & Dolphins_Cover.png' controls>
                                            <source src='/assets/video/Trans Inclusion_Goddesses & Dolphins_Video.mp4'/>
                                            <track src='/assets/vtt/Trans Inclusion_Goddesses & Dolphins_Captions.vtt' kind='subtitles' label='CC'/>
                                        </video>
                                    </div>
                                    <p className='video-description'>TWBC Co-Founder Carlyle Jansen reflects on the perceptual barriers impacting trans inclusion at the Palace. </p>
                                    <CreditsExpander content={<>Jansen, C. (Narrator). (2024). Building the Palace: Goddesses & dolphins [Audio soundbite]. In The history of the Pussy Palace: A digital exhibit. LGBTQ Oral History Digital Collaboratory. <a href="#">https://URL of soundbite webpage location</a></>}/>
                                
                                    <p className='pdf-viewer-title'>PALACE RULES AND ETIQUETTE</p>
                                    <PDFMultiviewer files={[
                                        {
                                            path: "/assets/documents/1998-09-14_Pussy Palace_Poster.pdf",
                                            desc: 'Fig. 1. Digital scan of “Pussy Palace: A Woman’s Bath House Night at Club Toronto” [Promotional Poster; recto and verso], (1998).',
                                            pages: 2
                                        },
                                        {
                                            path: '/assets/documents/Volunteer Job Descriptions_Door.pdf',
                                            desc: 'Fig. 2. “Volunteer Job Descriptions,” (2000), pg. 4.',
                                            pages: 1                                            
                                        }
                                    ]}/>
                                    <p className='pdf-credits'>Courtesy of the <a href="https://sds.utoronto.ca/sexual-representation-collection/">Sexual Representation Collection</a>, Bonham Centre for Sexual Diversity Studies, University of Toronto, Carlyle Jansen Collection. </p>
                                </div>
                            </div>
                            
                            <p>In an article reflecting on the first bathhouse of 1998, Salah records that her right to be at the bathhouse had been queried five times while in earshot, with patrons commenting “don’t you know that this is a womyn’s bathhouse?” Even though the organizers had made it clear that trans women were welcome, and Salah “had no questions about whether it was cool for me to be in the space,” she still had to navigate transphobia among other patrons. As Salah argues, trans exclusionary radical feminism had been a mainstream position within feminist and lesbian communities for generations, and the alliance between women’s spaces and trans positivity was a minority position in the 1990s. It would take several more years before an emerging queer common sense came to see the exclusion of trans people from “women’s” spaces as, in Salah’s words, “gross and despicable.” Despite organizers’ best efforts, trans women at the Palace still had to navigate this residual transphobia. Nonetheless, Salah remembers “a lot of care and attention.”  </p>
                            <p>Ultimately, however, the full inclusion of trans women was limited by the conceptualization of the bathhouse as a queer women’s event. From Salah’s perspective, a bathhouse that was truly inclusive of trans women would, necessarily, require admitting cis men, as cis men were equally likely to be trans women’s sexual partners as queer women, cis or trans. A queer women’s bathhouse would necessarily be inclusive of some, but not all, trans women. Salah wondered then, as she does today, “about the place where our ethical recognition of one another meets our desire for one another and what the interplay between those are.” Utopian longing for an inclusive space for queer women and gender non-conforming people can get caught on the sholes of desire: when these very same queer women and gender non-conforming people desire excluded bodies, such as male-assigned persons of various genders, what is an organizing committee to do? </p>
                        
                            <div className='split-66-33'>
                                <div>
                                    <button className='listen-button' onClick={() => document.getElementById('inclusion-redefined').play()}><IconListen/> Listen to “Inclusion Redefined”</button>
                                    <p>The Pussy Palace environment was always more comfortable with masculine gender presentations, including trans masculinity. The organizers’ politics and the entire scene emerged out of the queer women’s community’s re-engagement with butch/femme roles in the 1990s; this was, in turn, a reaction against the sex wars of the 1980s and the white, middle-class lesbian feminist embrace of androgyny as the only appropriate form of gender expression. For queer women in the 1990s reacting against the lesbian feminism of the 1980s, female masculinity emerged as a site of radical politics and erotic investment. </p>
                                </div>
                                <div>

                                </div>
                            </div>

                            <p>Not surprisingly, then, the Pussy Palace saw a range of masculinities, all of which seemed welcome, including bois, butches, drag kings, leather daddies, and eventually trans men. Stephanie Dutrizac, a cis queer femme, remembers seeing “a lot of trans-masculine people...who presented in all kinds of masculine ways.” And Noelle Campbell-Smith, who identified as a genderfluid lesbian in 2000 and as non-binary in 2020, doesn’t recall seeing “any separation between the groups.” Initially, however, in 1998 when the number of trans men in the community was relatively small, trans men were not really on the organizers’ radar, leading some prospective patrons to seek more clarity. One Palace hopeful approached organizer Carlyle Jansen to ask point blank: “Look, are we welcome at this event, if we identify…as trans male?” When Jansen brought the question to the organizing team, fellow committee member Chanelle Gallant reminded everyone that “trans men have always been a part of our community. So why would we exclude them now?” With all in agreement, trans men’s presence at the Palace was made explicitly welcome. </p>
                            <p>Trans men, in these early years of the Pussy Palace, could be the sites of both suspicion and eroticism. Volunteer Renee Racine, who identified as a femme bisexual in 2000, remembers “a conversation that was going on around trans men and whether or not people felt safe having them in this space.” As patron Andrea Ridgely commented, “there was a fair amount of judgment flying around at the time. It would not have been an easy time” for trans men. This 1990s period defined what Jack Halberstam and C. Jacob Hale named as the butch/FTM border wars, a period of suspicion and wariness over changing understandings of embodiment, gender presentation, and identity in what was once known as the “women’s community.” At the same time, from the perspective of some patrons, trans men seemed to get all the action. As Tera Mallette recalls, “everyone wanted a piece of a trans guy back then.” </p>
                            <p>The organizers’ commitment to trans inclusion continued well past the 2000 police raid. Activism in the wake of the 2000 police raid foregrounded trans community needs, including the community report on police relations with the queer and trans community that the TWBC commissioned in 2005, using a portion of the proceeds from the $350,000 settlement from their successful Ontario Human Rights Commission complaint (see <a href='#'>Post Raid Activism and Legal Action</a>). In 2010, the TWBC changed the name of the events from the Pussy Palace to the more inclusive Pleasure Palace. When the TWBC dissolved their finances in 2014, they donated the remaining $5000 to Trans Pride Toronto, founded by Monica Forrester, a Two-Spirit trans woman and a community activist.  </p>
                        
                            <div>    
                                <div className='thin-divider' style={{margin: '60px 0'}}></div>
                                <button className='tab-switch-button prev-tab-button' onClick={() => document.getElementById('founding-the-palace').click()}>&lt; FOUNDING THE PALACE</button>
                                <button className='tab-switch-button next-tab-button' onClick={() => document.getElementById('bipoc-inclusion').click()}>BIPOC INCLUSION &gt;</button>
                            </div>
                        </>,
                        <>
                            <p>The Pussy Palace was organized primarily by white, queer cis women who worked hard to create a racially diverse and welcoming space. Sparked by the interventions of queer women of colour in their roles as organizing committee members and volunteers, the TWBC introduced numerous strategies to increase the numbers of BIPOC patrons, to make the space more affirming for people of colour, and to address systemic racism at the Palace.</p>
                        
                            <div className='split-66-33'>
                                <div>
                                    <p>From the early days, advertising featured racially diverse models of all ages and body types. As Trish Salah mentions, this promotional imagery offered prospective patrons an expansive conception of what the Palace could look like, “mak[ing] apparent that the bathhouse was not only for white folks, not only for cis folks, not only for slim, able-bodied . . . cis queer women” <b>(see Figure 1)</b>. These photo shoots were community events in themselves, and organizers took care to ease anxieties for participants and to foster a culture of consent and collaboration. </p>
                                    <button className='listen-button' onClick={() => document.getElementById('visualizing-inclusion').play()}><IconListen/> Listen to “Visualizing Inclusion”</button>
                                    <p>The Palace events were popular, and tickets would sell out early. Organizers began selling tickets in advance and considered discounts for BIPOC patrons, for example, or two-for-one deals, while worrying about further marginalizing non-white attendees. TWBC member Carol Thames, a Black activist and committee member, sold advance tickets to her BIPOC network. At another point, BIPOC patrons could skip the line-up outside and head directly to the door for admittance. In an effort to educate patrons on how to hold space with one another across difference, organizers asked Palace-goers to sign off on a “Being an Ally” notice before entering the space.</p>
                                    <button className='listen-button' onClick={() => document.getElementById('dear-white-people').play()}><IconListen/> Listen to “Dear White People”</button>
                                    <p>This undated flyer <b>(see Figure 2)</b> from Carlyle Jansen’s papers, entitled “Being An Ally,” is likely one iteration of the document that Singh references. After explaining what an ally is, the statement declares:</p>
                                    <p>The Toronto Women’s Bathhouse is committed to upholding [an] anti-oppressive anti-racist framework at all times. We ask that you respect all women of colour and trans people to ensure that our events are inclusive and safe for all, and that all people are treated with respect and dignity, and that you uphold our commitment to an anti-oppressive, anti-racist, anti-trans phobic and feminist framework. </p>
                                    <p>While such care in building an anti-racist space might be more familiar today, these efforts were highly unusual in majority-white spaces twenty years ago.</p>
                                    <p>One TWBC strategy for creating a more affirming space for BIPOC patrons was to launch a separate set of events, called the Sugar Shack. Sometime after the 2000 police raid, the TWBC set aside funding and struck a BIPOC-only subcommittee, including Deb Singh, a rookie volunteer, and her mentor Deidre Walton, a more senior activist, poet and playwright. Singh remembers two Sugar Shacks, one in 2006 and another in April 2008, though there may have been more. They took place at Central Spa, a gay bathhouse in Toronto’s little Portugal area, on Dundas West.</p>
                                    <p>The subcommittee created BIPOC-focused promotional materials for these events that included a diversity of bodies: as Singh remembers, “definitely not just racialized bodies, but fat bodies and masculine-of-centre bodies or trans and non-binary, gender diverse bodies.” BIPOC models responded to an open call made to the community, and the promotional cards they created electrified Singh. “Damn,” she remembers thinking, “I can’t believe we created this. This wasn’t made by somebody else for us. This was made by us. And I’d never seen anything like that before. And I’d never felt it.” </p>
                                    <p>The Sugar Shack was a huge success, “definitely the event to go to,” assures Singh. She describes how moving it was to take part in this sexy BIPOC scene, and the subtle yet profound differences she experienced at the Sugar Shack, in contrast to the majority white Pussy Palace events.</p>
                                    <button className='listen-button' onClick={() => document.getElementById('the-sugar-shack').play()}><IconListen/> Listen to “The Sugar Shack”</button>
                                    <p>The intimacy and intensity of the Sugar Shack events deepened Singh’s understanding of consent, care, sexual health, and healing within a BIPOC-specific bathhouse space. In a <a href="https://lgbtqdigitalcollaboratory.org/how-to-find-self-love-and-community/">2022 blog post</a> for the Collaboratory, Singh reflects beautifully on what “people, touch, and lap dancing” taught her about “love in activism” — both self-love and love of community.</p>
                                </div>
                                <div>
                                    <p className='pdf-viewer-title'>PALACE PHOTO SHOOT</p>
                                    <PDFMultiviewer files={[
                                        {
                                            path: "/assets/documents/Promotional Postcard.pdf",
                                            desc: 'Fig. 1. Promotional postcard (n.d.), photograph by Chloë Brushwood Rose.',
                                            pages: 1
                                        }
                                    ]}/>
                                    <p className='pdf-credits'><i>In Irwin, Nancy. (2000). <a href="https://pussypalaceproject.org/wp-content/uploads/2023/09/Irwin_Siren-Article.pdf">Police raid women’s bathhouse party</a>. Siren, 5(4), 12-14.</i></p>
                                
                                    <h3><IconListen/> VISUALIZING INCLUSION</h3>
                                    <div className='video-div'>
                                        <video id='visualizing-inclusion' poster='/assets/images/building/BIPOC Inclusion_Visualizing Inclusion_Cover.png' controls>
                                            <source src='/assets/video/BIPOC Inclusion_Visualizing Inclusion_Video.mp4'/>
                                            <track src='/assets/vtt/BIPOC Inclusion_Visualizing Inclusion_Captions.vtt' kind='subtitles' label='CC'/>
                                        </video>
                                    </div>
                                    <p className='video-description'>TWBC Co-Founder Carlyle Jansen and patron Trish Salah reflect on the use of promotional imagery to visualize radical inclusion.</p>
                                    <CreditsExpander content={<>Chan, K. (Narrator). (2024). Building the Palace: Very specific flavour [Audio soundbite]. In The history of the Pussy Palace: A digital exhibit. LGBTQ Oral History Digital Collaboratory. <a href="#">https://URL of soundbite webpage location</a></>}/>

                                    <h3><IconListen/> DEAR WHITE PEOPLE</h3>
                                    <div className='video-div'>
                                        <video id='dear-white-people' poster='/assets/images/building/BIPOC Inclusion_Dear White People_Cover.png' controls>
                                            <source src='/assets/video/BIPOC Inclusion_Dear White People_Video.mp4'/>
                                            <track src='/assets/vtt/BIPOC Inclusion_Dear White People_Captions.vtt' kind='subtitles' label='CC'/>
                                        </video>
                                    </div>
                                    <p className='video-description'>TWBC Member Deb Singh critically reflects on efforts to educate white patrons about the role of allyship at the Palace.</p>
                                    <CreditsExpander content={<>Singh, D. (Narrator). (2024). Building the Palace: Dear white people [Audio soundbite]. In The history of the Pussy Palace: A digital exhibit. LGBTQ Oral History Digital Collaboratory. <a href="#">https://URL of soundbite webpage location</a></>}/>
                                
                                    <p className='pdf-viewer-title'>BEING AN ALLY</p>
                                    <PDFMultiviewer files={[
                                        {
                                            path: "/assets/documents/Being an Ally_Flyer.pdf",
                                            desc: 'Fig. 2. Pussy Palace event flyer (n.d.).',
                                            pages: 1
                                        }
                                    ]}/>
                                    <p className='pdf-credits'><i>Courtesy of the <a href="https://sds.utoronto.ca/sexual-representation-collection/">Sexual Representation Collection</a>, Bonham Centre for Sexual Diversity Studies, University of Toronto, Carlyle Jansen Collection. </i></p>
                                
                                    <h3><IconListen/> THE SUGAR SHACK</h3>
                                    <div className='video-div'>
                                        <video id='the-sugar-shack' poster='/assets/images/building/BIPOC Inclusion_The Sugar Shack_Cover.png' controls>
                                            <source src='/assets/video/BIPOC Inclusion_The Sugar Shack_Video.mp4'/>
                                            <track src='/assets/vtt/BIPOC Inclusion_The Sugar Shack_Captions.vtt' kind='subtitles' label='CC'/>
                                        </video>
                                    </div>
                                    <p className='video-description'>TWBC Member Deb Singh articulates the sheer joy of organizing and attending the Sugar Shack events.</p>
                                    <CreditsExpander content={<>Singh, D. (Narrator). (2024). Building the Palace: The Sugar Shack [Audio soundbite]. In The history of the Pussy Palace: A digital exhibit. LGBTQ Oral History Digital Collaboratory. <a href="#">https://URL of soundbite webpage location</a></>}/>
                                    
                                </div>
                            </div>

                            <p>The Sugar Shack events emerged in the wake of the police raid, where activism relating to the media, the legal case, and fundraising had thrown white entitlement and systemic racism into high relief. According to organizer Chanelle Gallant, “everything was impacted by disagreements around race and racism in our work,” from how to fundraise, who should represent the TWBC to the media, how the committee should respond to the raid, and how the committee should organize the Pussy Palace events. While some white queer women grabbed their placards, so to speak, and headed for the streets, others seemed to go into hiding. The organizing and political stakes intensified, leading some white activists to begin seeing forms of white privilege that may not have been evident to them previously.</p>

                            <div className='split-66-33'>
                                <div>
                                    <p>As T’Hayla Ferguson reflected regarding these political discussions, “looking back now, 23 years later, it was a lot of white girls at the table all talking very fast about what we could get done.” Queer of colour activists associated with the TWBC sparked Ferguson to examine her own whiteness and see a new level of her own privilege.</p>
                                    <button className='listen-button' onClick={() => document.getElementById('powerful-voices').play()}><IconListen/> Listen to “Powerful Voices”</button>
                                    <p>But as organizer Janet Rowe reflected, the mainly white organizers hadn’t really thought through the differential impact that a police raid might have on people of colour and gender non-normative patrons. The bathhouse of September 2000 had the most BIPOC and trans participation up to that point, who all left as soon as possible. People of colour and trans people are much more vulnerable to police harassment than cis white women and, in Rowe’s view, the TWBC had been naïve in not thinking through how a potential police raid would affect BIPOC and trans patrons differently than it would white, cis queer women. This experience revealed how white entitlement works, and how important the leadership of BIPOC organizers would have been in preparing for a possible raid. As she concluded, these reflections are ones “I think about now, that we didn’t think about then.” </p>
                                    <button className='listen-button' onClick={() => document.getElementById('looking-back').play()}><IconListen/> Listen to “Looking Back”</button>
                                    <p>Organizers had made strides creating a diverse bathhouse culture for the Pussy Palace events, but it was still a majority white space: while a few narrators described the events as racially diverse, most recognized that both the core organizing team and the events themselves were predominantly white. Volunteer Karen B. K. Chan was recruited to the TWBC in an effort to diversify the committee and, as part of that work, to recruit other queer East Asians to the events. The challenge, from Chan’s perspective, was that “not a lot of people of colour were connected” to the scene. Most of Chan’s queer Asian friends were connected uptown, in the Richmond Hill area of Toronto, and had no interest in heading downtown for a night out.</p>
                                    <button className='listen-button' onClick={() => document.getElementById('uptown-things').play()}><IconListen/> Listen to “Uptown Things”</button>
                                    <p>To address cis white privilege, the TWBC began organizing equity, diversity, and inclusion workshops for committee members and volunteers at Toronto’s 519 Community Centre. While narrators struggled to recall the particularities of these trainings, it seems their intent was to arrive at a shared awareness of how various systems of oppression were operating at the bathhouse. The hope was that a deeper understanding of white supremacy, systemic racism, and gender phobia would empower event staff to mitigate macro- and micro-aggressions at the Palace. Some white radical activists involved with the TWBC and the post-raid organizing came to understand that it’s not possible to “add diversity” to a majority white organization and expect an anti-racist result. Organizer Chanelle Gallant noted that “those of us who were trying to work on the same side against the police were often in conflict with each other around race,” and that “white racism was undermining” the work.</p>
                                    <button className='listen-button' onClick={() => document.getElementById('liberal-racial-diversity').play()}><IconListen/> Listen to “Liberal Racial Diversity”</button>
                                </div>
                                <div>
                                    <h3><IconListen/> POWERFUL VOICES</h3>
                                    <div className='video-div'>
                                        <video id='powerful-voices' poster='/assets/images/building/BIPOC Inclusion_Powerful Voices_Cover.png' controls>
                                            <source src='/assets/video/BIPOC Inclusion_Powerful Voices _Video.mp4'/>
                                            <track src='/assets/vtt/BIPOC Inclusion_Powerful Voices_Captions.vtt' kind='subtitles' label='CC'/>
                                        </video>
                                    </div>
                                    <p className='video-description'>Patron T’Hayla Ferguson highlights the impact of queer women of colour organizers on her understanding of white privilege.</p>
                                    <CreditsExpander content={<>Ferguson, T. (Narrator). (2024). Building the Palace: Powerful voices [Audio soundbite]. In The history of the Pussy Palace: A digital exhibit. LGBTQ Oral History Digital Collaboratory. <a href="#">https://URL of soundbite webpage location</a></>}/>
                                    
                                    <h3><IconListen/> LOOKING BACK</h3>
                                    <div className='video-div'>
                                        <video id='looking-back' poster='/assets/images/building/BIPOC Inclusion_Looking Back_Cover.png' controls>
                                            <source src='/assets/video/BIPOC Inclusion_Looking Back _Video.mp4'/>
                                            <track src='/assets/vtt/BIPOC Inclusion_Looking Back_Captions.vtt' kind='subtitles' label='CC'/>
                                        </video>
                                    </div>
                                    <p className='video-description'>TWBC Co-Founder Janet Rowe grapples with the committee’s failure to consider the differential impacts of the police raid.</p>
                                    <CreditsExpander content={<>Rowe, J. (Narrator). (2024). Building the Palace: Looking back [Audio soundbite]. In The history of the Pussy Palace: A digital exhibit. LGBTQ Oral History Digital Collaboratory. <a href="#">https://URL of soundbite webpage location</a></>}/>

                                    <h3><IconListen/> UPTOWN THINGS</h3>
                                    <div className='video-div'>
                                        <video id='uptown-things' poster='/assets/images/building/BIPOC Inclusion_Uptown Things_Cover.png' controls>
                                            <source src='/assets/video/BIPOC Inclusion_Uptown Things_Video.mp4'/>
                                            <track src='/assets/vtt/BIPOC Inclusion_Uptown Things_Captions.vtt' kind='subtitles' label='CC'/>
                                        </video>
                                    </div>
                                    <p className='video-description'>TWBC Member Karen B. K. Chan recalls the challenge of uniting uptown and downtown queer subcultures.</p>
                                    <CreditsExpander content={<>Chan, K. (Narrator). (2024). Building the Palace: Uptown things [Audio soundbite]. In The history of the Pussy Palace: A digital exhibit. LGBTQ Oral History Digital Collaboratory. <a href="#">https://URL of soundbite webpage location</a></>}/>

                                    <h3><IconListen/> LIBERAL RACIAL DIVERSITY</h3>
                                    <div className='video-div'>
                                        <video id='liberal-racial-diversity' poster='/assets/images/building/BIPOC Inclusion_Liberal Racial Diversity_Cover.png' controls>
                                            <source src='/assets/video/BIPOC Inclusion_Liberal Racial Diversity_Video.mp4'/>
                                            <track src='/assets/vtt/BIPOC Inclusion_Liberal Racial Diversity_Captions.vtt' kind='subtitles' label='CC'/>
                                        </video>
                                    </div>
                                    <p className='video-description'>TWBC Member Chanelle Gallant confronts the limits of liberalism for organizers of this multi-racial, queer public sex event.</p>
                                    <CreditsExpander content={<>Gallant, C. (Narrator). (2024). Building the Palace: Liberal racial diversity [Audio soundbite]. In The history of the Pussy Palace: A digital exhibit. LGBTQ Oral History Digital Collaboratory. <a href="#">https://URL of soundbite webpage location</a></>}/>
                                </div>
                            </div>

                            <p>Committed to understanding and undoing systemic racism, Gallant eventually did a four-and-a-half-month anti-racism training program with the Catalyst Project in San Francisco and interned with Critical Resistance, the US national prison abolition organization. But this growing understanding of the perniciousness of white supremacy within all organizations, including radical queer ones like the TWBC, unfolded over years and was not always accessible to white organizers at the time.</p>
                            
                            <div className='split-66-33'>
                                <div>
                                    <p>In contrast, queer of colour activists identified a growing gap between the majority white organizing committee and the queer and trans of colour committee members, volunteers, and patrons. When the TWBC did succeed in creating BIPOC spaces, as they had with the Sugar Shack events, white patrons pushed back, insisting on having access. Lengthy discussions among Sugar Shack organizers resulted in a new policy, whereby white patrons could attend, so long as they were accompanied by a person of colour. Throughout, queer of colour volunteers and patrons shared stories with each other.</p>
                                    <button className='listen-button' onClick={() => document.getElementById('kitchen-table-talk').play()}><IconListen/> Listen to “Kitchen Table Talk”</button>
                                    <p>Some queer of colour organizers reached their limits with this ongoing work, while at the same time valuing the importance of working together across racial lines to forge this radical experiment in queer sexuality. As Singh commented, when she moved from a membership on the sub-committee for the Sugar Shack events to joining the larger TWBC, “it became work that I was now doing as a racialized body for white people in a whiter space. And so, by the end of it, I was like, ‘And, end scene.’ Like, I can’t deal with this anymore.” For a variety of reasons, organizer Karen B. K. Chan eventually resigned from the main committee, where she was one of two people of colour. By this point, the TWBC was embroiled in the court case after the raid, and Chan wondered how much they could contribute. “I felt really torn,” Chan reflected. While they wanted to be an effective organizer, in the context of a committee dominated by “femme, top, tall, established, personable, vivacious, extrovert” types, Chan in contrast felt she didn’t know how to thrive in that environment.</p>
                                    <button className='listen-button' onClick={() => document.getElementById('i-needed-to-do-this').play()}><IconListen/> Listen to “I Needed to Do This”</button>
                                </div>
                                <div>
                                    <h3><IconListen/> KITCHEN TABLE TALK</h3>
                                    <div className='video-div'>
                                        <video id='kitchen-table-talk' poster='/assets/images/building/BIPOC Inclusion_Kitchen Table Talk_Cover.png' controls>
                                            <source src='/assets/video/BIPOC Inclusion_Kitchen Table Talk_Video.mp4'/>
                                            <track src='/assets/vtt/BIPOC Inclusion_Kitchen Table Talk_Captions.vtt' kind='subtitles' label='CC'/>
                                        </video>
                                    </div>
                                    <p className='video-description'>TWBC Member Deb Singh notes the private labour organizers of colour take up in the service liberating community spaces.</p>
                                    <CreditsExpander content={<>Gallant, C. (Narrator). (2024). Building the Palace: Liberal racial diversity [Audio soundbite]. In The history of the Pussy Palace: A digital exhibit. LGBTQ Oral History Digital Collaboratory. <a href="#">https://URL of soundbite webpage location</a></>}/>

                                    <h3><IconListen/> I NEEDED TO DO THIS</h3>
                                    <div className='video-div'>
                                        <video id='i-needed-to-do-this' poster='/assets/images/building/BIPOC Inclusion_I Needed to Do This_Cover.png' controls>
                                            <source src='/assets/video/BIPOC Inclusion_I Needed to Do This_Video.mp4'/>
                                            <track src='/assets/vtt/BIPOC Inclusion_I Needed to Do This_Captions.vtt' kind='subtitles' label='CC'/>
                                        </video>
                                    </div>
                                    <p className='video-description'>TWBC Member Karen B. K. Chan recounts their difficult resignation from the organizing committee.</p>
                                    <CreditsExpander content={<>Chan, K. (Narrator). (2024). Building the Palace: I needed to do this [Audio soundbite]. In The history of the Pussy Palace: A digital exhibit. LGBTQ Oral History Digital Collaboratory. <a href="#">https://URL of soundbite webpage location</a></>}/>
                                </div>
                            </div>
                        
                        </>
                    ]}
                />
            </div>
        </div>
    );
    */
    
    /*
    return (
        <div className='page-wrapper'>
            <SideMenu active='building'/>
            <div className='content'>
                <h2 className='content-title center pink'>BUILDING THE PALACE</h2>
                <h3 className='content-subtitle center pink'>RADICAL SEX ORGANIZING (1998-2000)</h3>
                <img className='banner' alt='' src='/assets/images/building/Building_Banner.png'/>
                <StickySubmenu items={[
                    {name: 'FOUNDING THE TWBC', href: '#founding-the-twbc'},
                    {name: 'TRANS INCLUSION', href: '#trans-inclusion'},
                    {name: 'BIPOC INCLUSION', href: '#bipoc-inclusion'}
                ]}/>
                <h3 id='founding-the-twbc' className='center'>FOUNDING THE TORONTO WOMEN’S BATHHOUSE COMMITTEE </h3>
                
                <p>The Pussy Palace started out as an HIV prevention strategy. Organizer Janet Rowe had developed a safe sex campaign for queer women as part of her work for the AIDS Committee of Toronto (ACT) and needed a place to launch it. Colleagues suggested: why not a queer women’s bathhouse night? So, in the Fall of 1997, Rowe started the Women’s Bath House Project, what later became the Toronto Women’s Bathhouse Committee (TWBC).</p>
                
                <div className='split-66-33'>
                    <div className='video-div'>
                        <video poster='/assets/images/building/Founding the TWBC_Rowe_Cover.png' controls>
                            <source src='/assets/video/Founding the TWBC_Rowe_Video.mp4'/>
                            <track src='/assets/vtt/Founding the TWBC_Rowe_Captions.vtt' kind='subtitles' label='CC'/>
                        </video>
                    </div>
                    <div className='grey-box'>
                        <div className='horizontal-deco'></div>
                        <p className='box-text'>Listen to Rowe share some of the challenges and surprises of organizing a public campaign on HIV prevention for cis women.</p>
                        <CreditsExpander content={<>Rowe, J. (Narrator). (2024). Building the Palace: Founding the Toronto Women’s Bathhouse Committee [Audio soundbite]. In The history of the Pussy Palace: A digital exhibit. LGBTQ Oral History Digital Collaboratory. <a href="#">https://URL of soundbite webpage location</a></>}/>
                    </div>
                </div>
                
                <p>Very quickly the secondary reason for the bathhouse — queer women’s sexual expression — became the driving force behind the organizing work. Carlyle Jansen had just opened her sex-positive retail store, <a href="https://goodforher.com">Good For Her</a>, when she was invited to partner with Rowe and draft a proposal for the initial event. Jansen’s pro-sex, pro-pleasure approach to the Pussy Palace was also shaped by a queer women’s bathhouse called Octopussy Galore, which she attended while living in Seattle in the mid-1990s. </p>
                
                <div className='split-33-66'>
                    <div className='grey-box'>
                        <div className='horizontal-deco'></div>
                        <p className='box-text'>Listen as Jansen recounts her experience at Octopussy Galore and its impact on her vision for the Pussy Palace events.</p>
                        <CreditsExpander content={<>Jansen, C. (Narrator). (2024). Building the Palace: Founding the Toronto Women’s Bathhouse Committee [Audio soundbite]. In The history of the Pussy Palace: A digital exhibit. LGBTQ Oral History Digital Collaboratory. <a href="">https://URL of soundbite webpage location</a></>}/>
                    </div>
                    <div className='video-div'>
                        <video poster='/assets/images/building/Founding the TWBC_Jansen_Cover.png' controls>
                            <source src='/assets/video/Founding the TWBC_Jansen_Video.mp4'/>
                            <track src='/assets/vtt/Founding the TWBC_Jansen_Captions.vtt' kind='subtitles' label='CC'/>
                        </video>
                    </div>
                </div>

                <p>Securing a physical space to host the event was challenging, to say the least. For a variety of reasons, gay men’s bathhouse owners in the city were reluctant to share space with women. Most venues doubted the event’s capacity to draw a crowd or to turn a profit. After a series of rejections, Club Toronto, a working-class, gay men’s bathhouse at the corner of Carlton Street and Mutual Street, agreed to rent out their space. But not without some deliberation.</p>

                <div className='split-66-33'>
                    <div className='video-div'>
                        <video poster='/assets/images/building/Founding the TWBC_Securing a Venue_Cover.png' controls>
                            <source src='/assets/video/Founding the TWBC_Securing a Venue_Video.mp4'/>
                            <track src='/assets/vtt/Founding the TWBC_Securing a Venue_Captions.vtt' kind='subtitles' label='CC'/>
                        </video>
                    </div>
                    <div className='grey-box'>
                        <div className='horizontal-deco'></div>
                        <p className='box-text'>Listen as Jansen and Rowe recount their conversation with the owners of Club Toronto. </p>
                        <CreditsExpander content={<>Jansen, C., & Rowe, J. (Narrators). (2024). Building the Palace: Founding the Toronto Women’s Bathhouse Committee [Audio soundbite]. In The history of the Pussy Palace: A digital exhibit. LGBTQ Oral History Digital Collaboratory. <a href="">https://URL of soundbite webpage location</a></>}/>
                    </div>
                </div>

                <p>With a venue now secured, Rowe and Jansen began networking with friends and colleagues to assemble the first iteration of the Toronto Women’s Bathhouse Committee, a collective of more than a dozen pro-sex, feminist queers who could assist them in launching the inaugural event, slated for Monday, September 14, 1998. From the very beginning, the TWBC was organized, focused and comprehensive in their planning. Early meetings covered fundraising; advertising and promotion; space rental; legal issues; and programming. Quite quickly, TWBC members sought to address the challenges of creating an inclusive, accessible event that welcomed both trans women and trans men, as well as BIPOC patrons. </p>

                <div className='split-33-66'>
                    <div className='grey-box'>
                        <div className='horizontal-deco'></div>
                        <p className='box-text'>Content courtesy of the <a href="https://sds.utoronto.ca/sexual-representation-collection/">Sexual Representation Collection</a>, Bonham Centre for Sexual Diversity Studies, University of Toronto, Carlyle Jansen Collection. </p>
                    </div>
                    <PDFMultiviewer files={[
                        {
                            path: "/assets/documents/1998_Original Proposal_Women's Night at SPA.pdf",
                            desc: 'Digital scan of the TWBC’s original proposal to The Spa for a “Women’s Night” (c. Fall 1998).',
                            pages: 2
                        },
                        {
                            path: '/assets/documents/1998_TWBC Meeting Minutes_Feb-Mar.pdf',
                            desc: 'Digital scan of the TWBC’s meeting minutes (c. Feb-Mar 1998). ',
                            pages: 15
                        },
                        {
                            path: '/assets/documents/1998-09-14_Pussy Palace_Poster.pdf',
                            desc: 'Digital scan of a promotional poster for the inaugural Pussy Palace event held on Monday, September 14, 1998.',
                            pages: 2
                        }
                    ]}/>
                </div>

                <p>Accessibility for those with mobility challenges remained an ongoing issue. None of the clubs that the organizers could rent were accessible. Most Pussy Palace events took place at Club Toronto, now <a href='https://oasisaqualounge.com'>Oasis Aqualounge</a> (a sex-positive playground for consenting adults): an old Victorian with four floors, a labyrinth of upstairs rooms, an outdoor pool, sauna, hot tub, showers, a small dance floor and a bar. Even entering the building required walking down a short set of stairs into a vestibule, and there was no elevator. Organizers did what they could by, for example, arranging for one patron, in a wheelchair, to be carried between floors; Temple Priestess Leanne Powers designed rituals for a volunteer’s new walker to help her “ground and continue to stay feeling erotically charged.” At one point, the TWBC donated money to a group organizing a sex event for people with disabilities. But when it came to the Pussy Palace, organizers made the difficult decision to rent an inaccessible space, rather than have no event at all. </p>
            
                <div className='split-66-33'>
                    <div className='video-div'>
                        <video poster='/assets/images/building/Founding the TWBC_Hornick_Cover.png' controls>
                            <source src='/assets/video/Founding the TWBC_Hornick_Video.mp4'/>
                            <track src='/assets/vtt/Founding the TWBC_Hornick_Captions.vtt' kind='subtitles' label='CC'/>
                        </video>
                    </div>
                    <div className='grey-box'>
                        <div className='horizontal-deco'></div>
                        <p className='box-text'>Security Volunteer JP Hornick reflects on the nuanced relationship between accessibility, gender, and class at Club Toronto.</p>
                        <CreditsExpander content={<>Hornick, JP. (Narrator). (2024). Building the Palace: Founding the Toronto Women’s Bathhouse Committee [Audio soundbite]. In The history of the Pussy Palace: A digital exhibit. LGBTQ Oral History Digital Collaboratory. <a href="">https://URL of soundbite webpage location</a></>}/>
                    </div>
                </div>

                <p>Several radical, sex-positive influences shaped the TWBC’s approach. Many volunteers were part of Toronto’s kink and leather communities, which were diverse and inclusive, and which held play parties for those in the know. Queer artist Will Munro was organizing his Vazaleen club nights, a gathering place for sex-positive queers and gender non-normative folks inventing lives outside the homonormative mainstream. Eight narrators had some familiarity with the Michigan Womyn’s Music Festival’s annual public sex spaces; in contrast to Michigan, however, as some narrators pointed out, the Pussy Palace explicitly welcomed trans women. 1990s Toronto hosted, in core committee member Chanelle Gallant’s words, a “very deep sex-positive, queer, feminist culture,” and the Pussy Palace — the only sexual women’s bathhouse in North America that she knew about — was a natural outgrowth of 1990s Toronto’s radical sex culture.</p>
                <br/>
                <p>Much to the surprise of Club Toronto and the newly-formed TWBC, the Fall 1998 event attracted over 400 women and trans people, who stood in line, in the rain, awaiting their opportunity to explore their sexuality in a communal, public place. Members of the bathhouse committee sought to create a safe environment for sexual exploration that would include public sex with a partner, casual hook-ups with a stranger, exhibitionism and voyeurism, cruising, kink, BDSM, and more. For most patrons, the committee crafted a sexy, celebratory environment that mixed exploration with safety, opening possibilities for new experiences.</p>
            
                <div className='split-33-66'>
                    <div className='grey-box'>
                        <div className='horizontal-deco'></div>
                        <p className='box-text'>Listen as multiple narrators reflect on the personal significance of the Palace.</p>
                        <CreditsExpander content={<>Brushwood Rose, C., Campbell-Smith, N., Dutrizac, S., Ferguson, T., Gallant, C., Herlihy, N., Miklos, L., & Rowe, J. (Narrators). (2024). Building the Palace: Founding the Toronto Women’s Bathhouse Committee [Audio soundbite]. In The history of the Pussy Palace: A digital exhibit. LGBTQ Oral History Digital Collaboratory. <a href="">https://URL of soundbite webpage location</a></>}/>
                    </div>
                    <div className='video-div'>
                        <video poster='/assets/images/building/Founding the TWBC_Significance of Palace_Cover.png' controls>
                            <source src='/assets/video/Founding the TWBC_Significance of Palace_Video.mp4'/>
                            <track src='/assets/vtt/Founding the TWBC_Significance of Palace_Captions.vtt' kind='subtitles' label='CC'/>
                        </video>
                    </div>
                </div>

                <p>At the bathhouse, organizers made a concerted effort to create a culture of care that would ease anxieties and offer multiple pathways for participation. Volunteer duties included coat check; touring the space with newcomers; explaining etiquette, rules, and safe sex; watching for fire and/or inappropriate behavior, and other tasks. At the door, volunteers handed out sex-positive etiquette sheets and verbally confirmed with each patron that they understood that both transwomen and transmen were welcome, and that discrimination would not be tolerated. </p>
            
                <div className='split-66-33'>
                    <PDFMultiviewer files={[
                        {
                            path: "/assets/documents/(n.d.) Pussy Palace_Rules & Etiquette.pdf",
                            desc: 'Digital Scan of Pussy Palace rules and bathhouse etiquette, as printed in Xtra magazine (n.d.).',
                            pages: 2
                        },
                        {
                            path: '/assets/documents/(n.d.) Pussy Palace_Bathhouse Etiquette.pdf',
                            desc: 'Digital scan of bathhouse etiquette at the Pussy Palace (n.d.).',
                            pages: 1
                        },
                        {
                            path: '/assets/documents/2000-09-14_Bathhouse Volunteer_Job Descriptions.pdf',
                            desc: 'Digital scan of job descriptions for TWBC Bathhouse Volunteers (2000). ',
                            pages: 5
                        }
                    ]}/>
                    <div className='grey-box'>
                        <div className='horizontal-deco'></div>
                        <p className='box-text'>Content courtesy of the <a href="https://sds.utoronto.ca/sexual-representation-collection/">Sexual Representation Collection</a>, Bonham Centre for Sexual Diversity Studies, University of Toronto, Carlyle Jansen Collection. </p>
                    </div>
                </div>
            </div>
        </div>   
    )
    */
}

export default Building;