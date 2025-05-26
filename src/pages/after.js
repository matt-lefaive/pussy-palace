import React, { useEffect } from 'react';
import SideMenu from '../components/side-menu';
import StickySubmenu from '../components/sticky-submenu';
import CreditsExpander from '../components/credits-expander';
import PDFMultiviewer from '../components/pdf-multiviewer';
import ContentPageTabs from '../components/content-page-tabs';
import IconListen from '../svg/Icon_Listen';
import Mirador from '../components/mirador-viewer';

const After = () => {
    return (
        <div className='page-wrapper'>
            <SideMenu active='after'/>
            <div className='content'>
                <img className='banner' alt='' src='/assets/images/after/After_Banner.png'/>
                <h2 className='content-title pink'>AFTER THE PALACE</h2>
                <h3 className='content-subtitle pink uppercase'>Legacy, Activism, and the Evolving Struggles of Queer Spaces</h3>
                
                <div className='split-66-33'>
                    <div>
                        <p>In the immediate aftermath of the police raid, many organizers and patrons described their response as deeply traumatic. Queer and trans attendees experienced fear, anger, and a profound violation of their personal space and safety. Temple Priestess Leanne Powers recalls spending at least five years talking through “the energy of invasion” with patrons at subsequent bathhouses. Powers notes that while “all sorts of things came up for folks . . . ridicule was often something people needed to learn to counter” (see Care at the Palace, “The Energy of Invasion”). Although Pussy Palace events continued through 2014, the raid had shifted the atmosphere. Attendance initially dropped, partly due to organizers’ fear of selling alcohol and triggering another raid. Additionally, those most vulnerable to police violence — racialized people, trans people, and sex workers — stayed away, hesitant to expose themselves to further harm.</p>
                        <button className='listen-button' onClick={() => document.getElementById('differential-impact').play()}><IconListen/> Listen to “Differential Impact”</button>
                        <p>At the same time, the raid galvanized the community into political activism with lasting consequences. Toronto police were forced to implement significant policy changes relating to their interactions with queer and trans communities — at least for a time (see Raid on the Palace: <a href="###">Human Rights Complaint & Class Action Suit</a>). The raid and resulting activism also prompted several organizers and patrons to further examine how white supremacy operates within progressive organizations. In the years since, some activists have shifted their focus to police abolition and fighting against anti-Black racism. As TWBC member Chanelle Gallant noted, while the queer community’s activism against the raid succeeded in curbing police harassment of white queer people, it didn’t stop police abuse altogether. Instead, she explains, “they just moved on to different communities.” While police abuse of power was “less prevalent” at the Palace, Gallant warns, they continued to target queer and trans people of colour.</p>
                        <button className='listen-button' onClick={() => document.getElementById('activism-ignited').play()}><IconListen/> Listen to “Activism Ignited”</button>
                    </div>
                    <div>
                        <h3><IconListen/> DIFFERENTIAL IMPACT</h3>
                            <div className='video-div'>
                                <video id='differential-impact' poster='/assets/images/after/After the Palace_Differential Impact_Cover.png' controls>
                                    <source src='/assets/video/After the Palace_Differential Impact_Video.mp4'/>
                                    <track src='/assets/vtt/After the Palace_Differential Impact_Captions.vtt' kind='subtitles' label='CC'/>
                                </video>
                            </div>
                        <p className='video-description'>Multiple narrators reflect on the raid's trauma and its disproportionate impact on marginalized communities.</p>
                        <CreditsExpander content={<>Stranges, Alisha, and Elspeth Brown. “After the Palace: Differential Impact.” Narrated by Nancy Irwin, JP Hornick, Carlyle Jansen, and Hanlon Uafás-Álainn. Illustration by Ayo Tsalithaba. Produced by LGBTQ Oral History Digital Collaboratory. <i>The History of the Pussy Palace: A Digital Exhibit</i>. 2024. Video, 1:53.</>}/>
                    
                        <h3><IconListen/> ACTIVISM IGNITED</h3>
                            <div className='video-div'>
                                <video id='activism-ignited' poster='/assets/images/after/After the Palace_Activism Ignited_Cover.png' controls>
                                    <source src='/assets/video/After the Palace_Activism Ignited_Video.mp4'/>
                                    <track src='/assets/vtt/After the Palace_Activism Ignited_Captions.vtt' kind='subtitles' label='CC'/>
                                </video>
                            </div>
                        <p className='video-description'>Multiple narrators share how the raid influenced their political activism, highlighting intersections of race, police abolition, and community.</p>
                        <CreditsExpander content={<>Stranges, Alisha, and Elspeth Brown. “After the Palace: Activism Ignited.” Narrated by Nancy Irwin, Chanelle Gallant, and Andrea Ridgley. Illustration by Ayo Tsalithaba. Produced by LGBTQ Oral History Digital Collaboratory. <i>The History of the Pussy Palace: A Digital Exhibit</i>. 2024. Video, 2:13.</>}/>
                    </div>
                </div>

                <p>
                    The Pussy Palace events continued for nearly 15 years after the raid, with a trans-inclusive name change to the Pleasure Palace around 2010. By the 2010s, new public sex venues for queer women and trans people emerged. The main commercial option was <a href="https://oasisaqualounge.com/">Oasis Aqualounge</a>, an upscale sex club “that caters to the needs of women and their partners,” which opened at 231 Mutual Street — the former site of Club Toronto and the Pussy Palace. Though ostensibly welcoming to queer women and trans patrons, Oasis primarily attracted a cis-het crowd. However, in 2012, they launched Sapphic Aquatica, a monthly party dedicated to queer women (for more, see former Collaboratory blogger Atticus Hawk’s <a href="https://lgbtqdigitalcollaboratory.org/back-back-back-again-a-snapshot-of-sapphic-aquatica-the-new-new-pussy-palace/">“Back, Back, Back Again! A Snapshot of Sapphic Aquatica, the New [New] Pussy Palace”</a>). By this time, many original TWBC members were more than 15 years older, and some had become parents, with less time and energy for bathhouse organizing. Without much fanfare, the Palace events ended in 2014. 
                </p>

                <div className='split-66-33'>
                    <div>
                        <p>The Pussy Palace made headlines again in June 2016, when then-Toronto Police Chief Mark Saunders issued a <a href="https://www.cbc.ca/news/canada/toronto/police-apology-raids-1.3647668">public apology</a> on behalf of the force for the 1981 “Operation Soap” raids. After discussions with the police about the 2000 raid, TWBC organizers declined to have the Pussy Palace included in the public apology. They later <a href="https://www.cbc.ca/news/canada/toronto/bathhouse-raids-pussy-palace-1.3647636">rejected the apology altogether</a>, arguing it was merely a public relations move with no meaningful changes in how the police interact with queer, trans, racialized, or other marginalized communities. Their skepticism was validated just months later when police conducted a sting operation in Etobicoke’s Marie Curtis Park, charging 72 people with 89 offenses ranging from trespassing to public sex.</p>
                        <button className='listen-button' onClick={() => document.getElementById('sorry-not-sorry').play()}><IconListen/> Listen to “Sorry, Not Sorry”</button>
                    </div>
                    <div>
                        <h3><IconListen/> SORRY, NOT SORRY</h3>
                            <div className='video-div'>
                                <video id='sorry-not-sorry' poster='/assets/images/after/After the Palace_Sorry Not Sorry_Cover.png' controls>
                                    <source src='/assets/video/After the Palace_Sorry Not Sorry_Video.mp4'/>
                                    <track src='/assets/vtt/After the Palace_Sorry Not Sorry_Captions.vtt' kind='subtitles' label='CC'/>
                                </video>
                            </div>
                        <p className='video-description'>Security volunteer JP Hornick and patron Lyla Miklos reflect on rejecting the police’s empty public apology.</p>
                        <CreditsExpander content={<>Stranges, Alisha, and Elspeth Brown. “After the Palace: Sorry, Not Sorry.” Narrated by JP Hornick and Lyla Miklos. Illustration by Ayo Tsalithaba. Produced by LGBTQ Oral History Digital Collaboratory. <i>The History of the Pussy Palace: A Digital Exhibit</i>. 2024. Video, 1:06.</>}/>
                    </div>
                </div>

                <p>Our current moment, much like the past, is rife with contradictions. On one hand, the Pussy Palace left a legacy by increasing visibility for queer women’s and trans people’s sexuality. The events celebrated a radical form of queer expression that was simultaneously sexy and safe, inclusive and irreverent, risky and risqué. Organizers triumphed in their activism following the September 2000 police raid, successfully getting the liquor violation charges dropped and winning a $350K human rights settlement. This victory forced the Toronto Police Service to implement policies sensitive to queer and trans communities. However, with visibility often comes backlash: fast forward to September 15, 2022, the 22nd anniversary of the raid, when the Toronto Police Services Board announced the appointment of Myron Demkiw — one of the five officers involved in the 2000 raid — as Toronto’s newest Chief of Police.</p>
                <p>The pain of this appointment hit hard for project narrators and for us, the research team. <a href="https://toronto.ctvnews.ca/myron-demkiw-appointed-as-toronto-s-new-chief-of-police-1.6070011">Public statements</a> portraying Demkiw as a bridge-builder felt like erasures of the lived experiences of those impacted by the raid that he participated in. Perhaps the most shocking was a statement from board chair Jim Hart, who described Demkiw as a “dedicated public servant” committed to “building and enhancing trust with the diverse communities we serve.” Such words leave us questioning what evidence Hart relied on to make this claim, and what painful truths he had to overlook to say it.</p>
                <p>When recruiting narrators for the project, we made extensive efforts to collect oral testimonies from the officers involved in the 2000 raid, but to no avail. As oral historians, it was disappointing — though unsurprising — not to document the perspectives of the officers involved. The last decade has only heightened tensions between the Toronto Police Service (TPS) and queer and trans communities, and Demkiw’s appointment exemplifies this strained relationship. His rise to the highest position in the TPS is a stark reminder that anti-queer and trans police violence remains an enduring issue, not a relic of the past. History is not a straightforward march of progress — every action provokes a reaction, and the fight for social justice continues. </p>
            
                <div className='split-66-33'>
                    <div>
                        <p>Across our 36 interviews, as narrators reflected on their final thoughts about attending or organizing the Pussy Palace events, a range of sentiments emerged. For some, it was a space of empowerment where sexual exploration and boundary-pushing were celebrated in ways that mainstream spaces did not allow. Others recalled how the Palace fostered lasting relationships and political consciousness, shaping their understanding of sexual freedom and collective resistance. Despite the trauma of the police raid, the Pussy Palace remained, for many, a transformative experience that shaped their personal growth, politics, and relationships. It continues to symbolize the complex dynamics of queer visibility and the enduring need for spaces where sexual and political autonomy can flourish. We are honoured to hold space for others to engage with and remember it.</p>
                        <button className='listen-button' onClick={() => document.getElementById('final-thoughts').play()}><IconListen/> Listen to “Final Thoughts”</button>
                    </div>
                    <div>
                        <h3><IconListen/> FINAL THOUGHTS</h3>
                            <div className='video-div'>
                                <video id='final-thoughts' poster='/assets/images/after/After the Palace_Final Thoughts_Cover.png' controls>
                                    <source src='/assets/video/After the Palace_Final Thoughts_Video.mp4'/>
                                    <track src='/assets/vtt/After the Palace_Final Thoughts_Captions.vtt' kind='subtitles' label='CC'/>
                                </video>
                            </div>
                        <p className='video-description'>Multiple narrators share their final thoughts on the Palace events and the lasting impact of such queer spaces.</p>
                        <CreditsExpander content={<>Stranges, Alisha, and Elspeth Brown. “After the Palace: Final Thoughts.” Narrated by Ange Beever, Chloë Brushwood Rose, Pam Johnson, Renee Racine, Janet Rowe, Karen B. K. Chan, Carlyle Jansen, JP Hornick, and Leanne Powers. Illustration by Ayo Tsalithaba. Produced by LGBTQ Oral History Digital Collaboratory. <i>The History of the Pussy Palace: A Digital Exhibit</i>. 2024. Video, 4:03.</>}/>
                    </div>
                </div>

                <div className='divider' style={{marginBottom: '60px', marginTop: '60px'}}></div>
            </div>
        </div>
    )
}

export default After;