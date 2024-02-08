import React from 'react';
import SideMenu from '../components/side-menu';
import StickySubmenu from '../components/sticky-submenu';
import CreditsExpander from '../components/credits-expander';
import PDFMultiviewer from '../components/pdf-multiviewer';
import PDFViewer from '../components/pdf-viewer';

const Building = () => {
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
}

export default Building;