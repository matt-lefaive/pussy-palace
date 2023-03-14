import React from 'react';
import SideMenu from '../components/side-menu';
import TabPanel from '../components/tab-panel';
import CreditImageBio from '../components/credit-image-bio';

import '../styles/credits.css'

const Credits = () => {
    const digitalExhibitTeamCollaboratory = [
        {
            name: 'Elspeth Brown',
            role: 'Principal Investigator, Lead Historian, and Co-Curator',
            photo: '',
            bio: <>
                    <p>Elspeth H. Brown is Professor of History at the University of Toronto and Associate Vice-Principal, Research at the University of Toronto Mississauga. Her research focuses on modern queer and trans history; the history and theory of photography; and the history of US capitalism.</p>
                    <p>She is the author of <a href="https://lgbtqdigitalcollaboratory.org/the-team/_wp_link_placeholder"><em>Work! A Queer History of Modeling</em></a> (Duke University, 2019) and <em>The Corporate Eye: Photography and the Rationalization of American Commercial Culture, 1884-1929</em> (2005); co-editor of “Queering Photography,” a special issue of <em>Photography and Culture</em> (2014), <em>Feeling Photography</em> (Duke University Press, 2014), and <em>Cultures of Commerce: Representation and American Business Culture, 1877-1960</em> (Palgrave, 2006). Recent articles include “Trans Oral History as Trans Care” (with Myrl Beam); “Archival Activism, Symbolic Annihilation, and the LGBTQ+ Community Archive” (<em>Archivaria</em> 2020); and “It’s Raining Men: Physique Photography and Racial Capitalism,” in Brian Wallis, Tina Campt, Marianne Hirsch, and Gil Pasternak, eds., <em>Imagining Everyday Life</em> (Steidl, 2020).</p> 
                    <p>She has published in <em>GLQ</em>, <em>TSQ</em>; <em>Gender and History</em>; <em>American Quarterly</em>; <em>Radical History Review</em>; <em>Photography and Culture</em>; <em>Feminist Studies</em>; <em>Aperture</em>; <em>No More Potlucks</em>, and others.</p>
                    <p>She is the Director of the <a href="http://lgbtqdigitalcollaboratory.org/">LGBTQ Oral History Digital Collaboratory</a>, a multi-year digital history and oral history public, digital humanities collaboration. At the University of Toronto, she is also the Faculty Lead for the <a href="https://dhn.utoronto.ca/">Critical Digital Humanities Initiative</a>, a three-year Institutional Strategic Initiative. She is a volunteer and former President of the Board for <a href="https://arquives.ca/">The ArQuives</a>: Canada’s LGBTQ2+ Archives, the world’s largest and oldest queer community archive.</p>
                    <p>As the principal investigator, lead historian, and co-curator of the digital exhibit, Elspeth collaborated with the project team to develop the exhibit’s content framework and narrative arc, guide the site’s aesthetic and interactive design, author text copy, and select featured materials from the Pussy Palace Oral History Project’s collection.</p>
                </>
        },
        {
            name: 'Alisha Stranges',
            role: 'Project Manager, Creative Director, and Co-Curator',
            photo: '',
            bio: <>
                    <p>Alisha Stranges is a queer, community-based, public humanities scholar, theatre creator, and performer. In January 2021, Stranges joined the LGBTQ Oral History Digital Collaboratory as the Project Manager and Co-Oral Historian for the Pussy Palace Oral History Project. As lead interviewer, Stranges has collected 36 narrator accounts surrounding the September 2000 police raid of the Pussy Palace bathhouse events, supervising a 5-member team in the preservation and creative activation of these interviews. Currently, Stranges also serves as the Collaboratory’s Research Manager, supporting Director Elspeth Brown in the planning, development, and execution of concurrent projects.</p>
                    <p>Stranges holds an M.A. in Women & Gender Studies from the University of Toronto, with a collaborative specialization in Sexual Diversity Studies (2020). Her master’s research project examined the therapeutic resonances of improvised rhythm tap dance for survivors of psychological trauma. Before entering the academy, Stranges received a Diploma in Theatre Performance from Humber College (2006) and spent a decade devising original plays within Toronto’s queer, independent theatre community. From 2010 to 2015, she returned annually to Buddies in Bad Times Theatre as a teaching-artist and co-facilitator for <em>PrideCab</em>, an intensive training program in collective creation and performance for queer, trans, and gender variant youth. In 2019, she launched the <a href="https://queeryingreligion.weebly.com/anti-archive.html">Qu(e)erying Religion anti-Archive Project</a>, which blends elements of oral history with the art of whiteboard animation to document 10+ years of supportive programming for life-giving, queer spirituality at the University of Toronto.</p>
                    <p>As the project manager, creative director, and co-curator of the digital exhibit, Alisha collaborated with the project team to develop the exhibit’s content framework and narrative arc, guide the site’s aesthetic and interactive design, direct the production of all visual media, author text copy, select and edit featured materials from the Pussy Palace Oral History Project’s collection, and oversee the execution of the exhibit from start to finish.</p>
                </>
        },
        {
            name: 'Ayo Tsalithaba',
            role: 'Creative Producer',
            photo: '',
            bio: <>
                    <p>Ayisha/Ayo Tsalithaba is a visual artist, originally from Ghana and Lesotho. Their primary media include film, photography, and illustration. Their work explores questions of home, visibility, and (un)belonging as they relate to Black queer and trans* African diasporic subjectivity.</p>
                    <p>In August of 2021, Ayo joined the Collaboratory as a Creative Producer for the Pussy Palace Oral History Project, developing project branding, editing interview access copies, and creating a robust library of original, digital illustrations to assist in activating the oral histories for the public via animated video shorts and new media.</p>
                    <p>As the creative producer for the digital exhibit, Ayo collaborated with the team to establish an aesthetic signature for the site design and illustrate all featured visual media, both static and interactive.</p>
                </>
        }
    ];

    const digitalExhibitTeamCDHICDRS = [
        {
            name: 'Peter Luo',
            role: 'UX Designer',
            photo: '',
            bio: <>
                    <p>Peter Luo is a Master of Information Student at the University of Toronto studying User Experience Design. As an undergraduate, Peter studied Digital Enterprise Management at the University of Toronto Mississauga where he wanted to pursue digital marketing. But sudden changes in his circumstances and career helped him discover his true passion for helping people and making a difference in society. This led him to his current career as a UX Designer where he seeks to create intuitive and pleasant digital experiences and products.</p>
                    <p>After completing year one of his Master’s program, Peter was introduced to the exhibit during his summer 2022 co-op with the <a href="https://dhn.utoronto.ca/">Critical Digital Humanities Initiative</a>. From July to September 2022, Peter led the design stage of the digital exhibit, transforming the Collaboratory’s preliminary ideas into a comprehensive website design, which he refined through a graduated series of visual mock-ups, interactive prototypes, and usability tests. From October 2022 to January 2023, he supported web developer, Matt Lefaive, in actualizing the design for public access.</p>
                </>
        },
        {
            name: 'Matt Lefaive',
            role: 'Web Developer',
            photo: '',
            bio: <>
                    <p>Matt Lefaive graduated from the University of Toronto Scarborough (UTSC) in 2019 with an H.B.Sc. in Computer Science and Linguistics. Matt serves as the Digital Humanities (DH) Developer for the Critical Digital Humanities Initiative, aiding DH researchers in creating project websites and digital exhibitions. He is also the Project Manager for Bioline International — the longest running project currently housed in UTSC's Knowledge Equity Lab — and Project Coordinator for UTSC’s Department of Language Studies. Matt is interested in open access research and developing web applications to assist in language preservation and learning.</p>
                    <p>As the web developer for the digital exhibit, Matt supported the Collaboratory with both the front- and back-end development of the digital exhibit, transforming UX Designer Peter Luo’s work into a fully-functioning website.</p>
                </>
        },
        {
            name: 'Danielle Taschereau Mamers',
            role: 'Managing Director, CDHI',
            photo: '',
            bio: <></>
        },
        {
            name: 'Elizabeth Parke',
            role: 'Senior Research Associate, Collaborative Digital Research, CDRS',
            photo: '',
            bio: <></>
        }
    ];

    const PPOHPTeamCollaboratory = [
        {
            name: 'Elspeth Brown',
            role: 'Principal Investigator, Lead Historian, and Co-Curator',
            photo: '',
            bio: <>
                    <p>Elspeth H. Brown is Professor of History at the University of Toronto and Associate Vice-Principal, Research at the University of Toronto Mississauga. Her research focuses on modern queer and trans history; the history and theory of photography; and the history of US capitalism.</p>
                    <p>She is the author of <a href="https://lgbtqdigitalcollaboratory.org/the-team/_wp_link_placeholder"><em>Work! A Queer History of Modeling</em></a> (Duke University, 2019) and <em>The Corporate Eye: Photography and the Rationalization of American Commercial Culture, 1884-1929</em> (2005); co-editor of “Queering Photography,” a special issue of <em>Photography and Culture</em> (2014), <em>Feeling Photography</em> (Duke University Press, 2014), and <em>Cultures of Commerce: Representation and American Business Culture, 1877-1960</em> (Palgrave, 2006). Recent articles include “Trans Oral History as Trans Care” (with Myrl Beam); “Archival Activism, Symbolic Annihilation, and the LGBTQ+ Community Archive” (<em>Archivaria</em> 2020); and “It’s Raining Men: Physique Photography and Racial Capitalism,” in Brian Wallis, Tina Campt, Marianne Hirsch, and Gil Pasternak, eds., <em>Imagining Everyday Life</em> (Steidl, 2020).</p> 
                    <p>She has published in <em>GLQ</em>, <em>TSQ</em>; <em>Gender and History</em>; <em>American Quarterly</em>; <em>Radical History Review</em>; <em>Photography and Culture</em>; <em>Feminist Studies</em>; <em>Aperture</em>; <em>No More Potlucks</em>, and others.</p>
                    <p>She is the Director of the <a href="http://lgbtqdigitalcollaboratory.org/">LGBTQ Oral History Digital Collaboratory</a>, a multi-year digital history and oral history public, digital humanities collaboration. At the University of Toronto, she is also the Faculty Lead for the <a href="https://dhn.utoronto.ca/">Critical Digital Humanities Initiative</a>, a three-year Institutional Strategic Initiative. She is a volunteer and former President of the Board for <a href="https://arquives.ca/">The ArQuives</a>: Canada’s LGBTQ2+ Archives, the world’s largest and oldest queer community archive.</p>
                    <p>As the principal investigator, lead historian, and co-curator of the digital exhibit, Elspeth collaborated with the project team to develop the exhibit’s content framework and narrative arc, guide the site’s aesthetic and interactive design, author text copy, and select featured materials from the Pussy Palace Oral History Project’s collection.</p>
                    <p>Additionally, she publishes a blog at <a href='http://elspethbrown.tumblr.com/'>http://elspethbrown.tumblr.com/</a>.</p>
                </>
        },
        {
            name: 'Alisha Stranges',
            role: 'Project Manager, Creative Director, and Co-Curator',
            photo: '',
            bio: <>
                    <p>Alisha Stranges is a queer, community-based, public humanities scholar, theatre creator, and performer. In January 2021, Stranges joined the LGBTQ Oral History Digital Collaboratory as the Project Manager and Co-Oral Historian for the Pussy Palace Oral History Project. As lead interviewer, Stranges has collected 36 narrator accounts surrounding the September 2000 police raid of the Pussy Palace bathhouse events, supervising a 5-member team in the preservation and creative activation of these interviews. Currently, Stranges also serves as the Collaboratory’s Research Manager, supporting Director Elspeth Brown in the planning, development, and execution of concurrent projects.</p>
                    <p>Stranges holds an M.A. in Women & Gender Studies from the University of Toronto, with a collaborative specialization in Sexual Diversity Studies (2020). Her master’s research project examined the therapeutic resonances of improvised rhythm tap dance for survivors of psychological trauma. Before entering the academy, Stranges received a Diploma in Theatre Performance from Humber College (2006) and spent a decade devising original plays within Toronto’s queer, independent theatre community. From 2010 to 2015, she returned annually to Buddies in Bad Times Theatre as a teaching-artist and co-facilitator for <em>PrideCab</em>, an intensive training program in collective creation and performance for queer, trans, and gender variant youth. In 2019, she launched the <a href="https://queeryingreligion.weebly.com/anti-archive.html">Qu(e)erying Religion anti-Archive Project</a>, which blends elements of oral history with the art of whiteboard animation to document 10+ years of supportive programming for life-giving, queer spirituality at the University of Toronto.</p>
                    <p>As the project manager, creative director, and co-curator of the digital exhibit, Alisha collaborated with the project team to develop the exhibit’s content framework and narrative arc, guide the site’s aesthetic and interactive design, direct the production of all visual media, author text copy, select and edit featured materials from the Pussy Palace Oral History Project’s collection, and oversee the execution of the exhibit from start to finish.</p>
                </>
        },
        {
            name: 'Elio Colavito',
            role: 'Co-Oral Historian',
            photo: '',
            bio: <>
                    <p>Elio Colavito is a Ph.D. student in the Department of History at the University of Toronto, specializing in Sexual Diversity Studies. As a trans non-binary researcher, Elio’s passion lies in archiving and re-telling queer histories in Canada. Their research interests include policing, sex culture, and the intersections of lesbian and trans identities. They hold an M.A. in History from the University of Toronto and a BSc (Hons) in History and Political Science from Eastern Michigan University.</p>
                    <p>In 2020, Elio supported the LGBTQ Oral History Digital Collaboratory as a research assistant for the Queer Peel Oral History Project. Since January of 2021, Elio has been the Co-Oral Historian for the Pussy Palace Oral History Project. Beginning in March 2022, they launched <a href="https://lgbtqdigitalcollaboratory.org/"><em>Traversing Temporalities</em></a>, a bi-weekly blog series, featuring interdisciplinary reflections on queer and trans oral history. As the series curator, Elio self-authored 6 entries and edited 6 entries submitted by external authors. In September 2022, they launched a new iteration of the series, which features monthly Zoom interviews with practitioners and allies of queer and trans oral history, paired with Elio's own critical reflections.</p>
                </>
        },
        {
            name: 'Emily Mastragostino',
            role: 'Interview Coder',
            photo: '',
            bio: <><p>Emily Mastragostino is a Ph.D. student in Counselling and Clinical Psychology at the Ontario Institute for Studies in Education (OISE) in the University of Toronto. From a positive psychology lens, Emily’s research focuses on investigating the ways in which marginalized communities cultivate wellbeing, despite institutional and social barriers. From May 2021 to August 2022, Emily supported the Pussy Palace Oral History Project in coding narrative interviews. Through the coding process, she identified and organized themes in the lived experiences of organizers, patrons, and community members involved in the police raid of the 2000 Pussy Palace bathhouse event. She holds an M.A. in Counselling and Clinical Psychology from the University of Toronto and a B.A. (Hons) double major in Psychology and Humanities, with a research background spanning classic quantitative methods to participatory arts-based qualitative approaches</p></>
        },
        {
            name: 'Ayo Tsalithaba',
            role: 'Creative Producer',
            photo: '',
            bio: <>
                    <p>Ayisha/Ayo Tsalithaba is a visual artist, originally from Ghana and Lesotho. Their primary mediums include film, photography, and illustration. Their work explores questions of home, visibility, and (un)belonging as they relate to Black queer and trans* African diasporic subjectivity.</p>  
                    <p>In August of 2021, Ayo joined the Collaboratory as a Creative Producer for the Pussy Palace Oral History Project, developing project branding, editing interview access copies, and creating a robust library of original, digital illustrations to assist in activating the oral histories for the public via animated video shorts and new media.</p>
                </>
        },
        {
            name: 'Aisling Murphy',
            role: 'Social Media Manager',
            photo: '',
            bio: <><p>Originally from Baltimore, MD, Aisling Murphy graduated in August 2022 with an M.A. from the Centre for Drama, Theatre, and Performance Studies at the University of Toronto. Her research interests include contemporary theatre criticism, the canon and critical legacy of queer British playwright Sarah Kane, and multilingual/translated dramaturgies. Aisling is the Senior Editor at <em>Intermission Magazine</em> in Toronto and a staff reporter for The Toronto Star. She graduated Magna Cum Laude with her Honours BA in Theatre from the University of Ottawa in June 2021. As the resident Social Media Manager for the Collaboratory from September 2021 to June 2022, Aisling ran all Collaboratory social media accounts and generated shareable, conversation-starting content about the Collaboratory’s oral history collections.</p></>
        },
        {
            name: 'Katherine Zheng',
            role: 'Social Media Manager',
            photo: '',
            bio: <><p>Katherine Zheng is a fourth-year undergraduate at the University of Toronto studying English and Women and Gender Studies. Along with passions in graphic design and literature, they are interested in topics of identity, sexuality, and gender, particularly as they relate to East-Asian diasporic queerness. In September of 2022, Katherine joined the Collaboratory as the Social Media Manager. They are responsible for developing text, graphic, and audio-visual content for social media to help amplify queer voices and broaden the public’s awareness of the Collaboratory’s oral history collections.</p></>
        }
    ];

    const PPOHPTeamArQuives = [
        {
            name: 'Raegan Swanson',
            role: 'Executive Director',
            photo: '',
            bio: <><p>Raegan Swanson serves as the Executive Director of <a href='https://arquives.ca/'>The ArQuives: Canada’s LGBTQ2S+ Archive</a>. She holds a BA from Collège universitaire de Saint-Boniface and a Masters of Information from the University of Toronto iSchool. She has worked as an archivist at Library and Archives Canada, the Truth and Reconciliation Commission of Canada, Aanischaaukamikw Cree Cultural Institute and as the Archival Advisor for the Council of Archives New Brunswick. She is currently working on her Ph.D. focusing on the role of community archives in Aboriginal and Inuit communities. She is member of the Steering Committee on Canada’s Archives Taskforce to respond to the “Calls to Action” Report from the Truth and Reconciliation Commission.</p></>
        },
        {
            name: 'Lucie Handley-Girard',
            role: 'Archivist',
            photo: '',
            bio: <><p>Lucie Handley-Girard has worked at The ArQuives as an Archivist since 2017. She holds a BA and a Masters of Information, both from the University of Toronto. In the summer of 2016, she was the Archives Assistant at The ArQuives, and has previously worked in records management. She currently sits on the Association for Canadian Archivists’ Equity, Diversity, and Inclusion Taskforce. Her research interests include community archives, archival performativity, and archives as spaces for activism, resistance, and identity formation.</p></>
        },
        {
            name: 'Jordan Saroya',
            role: 'Administrative Assistant',
            photo: '',
            bio: <><p>Jordan Saroya has been The ArQuives’ Administrative Assistant since January 2020, and in 2021 provided administrative support for the Pussy Palace Oral History project. He holds a B.A. (Hons) from the University of Toronto in Human Geography and Women & Gender Studies. He has worked in various administrative capacities and LGBTQ2+ community spaces. He personally values QTBIPOC (specifically trans) history and storytelling so is proud to be part of both The ArQuives and Digital Collaboratory teams for their work in this area.</p></>
        }
    ];

    const featuredNarrators = [
        {name: 'Ange Beever', photo: 'Beever.png'},
        {name: 'Ange Beever', photo: 'Beever.png'},
        {name: 'Ange Beever', photo: 'Beever.png'},
        {name: 'Ange Beever', photo: 'Beever.png'},
        {name: 'Ange Beever', photo: 'Beever.png'},
        {name: 'Ange Beever', photo: 'Beever.png'},
        {name: 'Ange Beever', photo: 'Beever.png'},
        {name: 'Ange Beever', photo: 'Beever.png'},
        {name: 'Ange Beever', photo: 'Beever.png'},
        {name: 'Ange Beever', photo: 'Beever.png'}
    ];
    
    const dateAccessed = () => {
        const date = new Date();
        const month = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'][date.getMonth()];
        return `${date.getDate()} ${month} ${date.getFullYear()}`;
    }
    
    return (
        <div className='page-wrapper credits'>
            <SideMenu active='credits'/>
            <div className='content'>
                <h2 className='content-title center pink'>Credits</h2>
                <div className='line'></div>
                <TabPanel 
                    mode='text'
                    tabs={['DIGITAL EXHIBIT TEAM', 'FEATURED NARRATORS', 'PUSSY PALACE ORAL HISTORY PROJECT TEAM', 'HOW TO CITE THIS EXHIBIT']}
                    content={[
                        <>
                            <p>In 2021, the <a href="https://lgbtqdigitalcollaboratory.org/about/">LGBTQ Oral History Digital Collaboratory</a> (Elspeth Brown, Director) conducted the <a href="https://lgbtqdigitalcollaboratory.org/projects/pussy-palace/">Pussy Palace Oral History Project</a>, preserving 36 interviews with patrons, organizers, and allies of the Pussy Palace bathhouse events. Interviews address not only the September 2000 bathhouse police raid, but also radical sex/gender cultures in turn of the 21st century Toronto.</p>
                            <p>A desire to connect broader publics with this rich archive of oral testimonies prompted the Collaboratory to develop an immersive, digital exhibit that invites users to learn about the evolution of the Palace events, hear first-person accounts of the police raid and its aftermath, and experience the pleasures and provocations of the physical space as virtual patrons.</p>
                            <p>This digital exhibit was created with the support of the UX Design for DH Accelerator Program. The Accelerator is jointly supported by the <a href="https://dhn.utoronto.ca/">Critical Digital Humanities Initiative</a> (University of Toronto) and <a href="https://www.utm.utoronto.ca/cdrs/">Collaborative Digital Research Space</a> (University of Toronto Mississauga).</p>
                            <p>Special thanks to <strong>Geena R.</strong>, Co-Owner of <a href="https://oasisaqualounge.com/">Oasis Aqualounge</a>, for her collaboration on this project. Oasis, which now occupies 231 Mutual St., was the former site of Club Toronto Bathhouse and the Pussy Palace events. To help us generate reference imagery for the exhibit, Geena generously provided us with building floor plans, guided us on a comprehensive, in-person tour of the building’s interior, and allowed us to photograph every crevice of the space.</p>
                            <TabPanel 
                                mode='logo'
                                tabs={['Collaboratory_Logo', 'Collaboratory_Logo']}
                                content={[
                                    <CreditImageBio people={digitalExhibitTeamCollaboratory}/>, 
                                    <CreditImageBio people={digitalExhibitTeamCDHICDRS}/>]}
                                alts={['Digital Collaboratory', 'CDHI and CDRS']}
                            />
                        </>,
                        <>
                            <p>Many thanks to all the community narrators who participated in the <a href="https://lgbtqdigitalcollaboratory.org/about/">LGBTQ Oral History Digital Collaboratory’s</a> <a href="https://lgbtqdigitalcollaboratory.org/projects/pussy-palace/">Pussy Palace Oral History Project</a>. Without the generosity, vulnerability, and richness of their shared memories, this exhibit would not be possible.</p>
                            <p>Below is a list of those narrators who consented to being featured throughout the exhibit.</p>
                            <div className='narrator-grid'>
                                    {featuredNarrators.map(narrator => {
                                        return (
                                            <div className='narrator-card'>
                                                <img 
                                                    key={narrator.name.replace(' ', '-')}
                                                    alt={narrator.name}
                                                    src={`../../assets/images/headshots/${narrator.photo}`}
                                                />
                                                {narrator.name}
                                            </div>
                                        )
                                    })}
                            </div>
                        </>,
                        <>
                            <p>The Pussy Palace Oral History Project (PPOHP) is a research initiative of the LGBTQ Oral History Digital Collaboratory (Director, Elspeth Brown). Founded in 2014 and based at the University of Toronto Mississauga, the Collaboratory is a SSHRC-funded, public and digital humanities research initiative that preserves gay, queer, and trans life stories, using new methodologies in digital history, collaborative research, and archival practice. As the largest LGBTQ oral history project in North America, the Collaboratory connects archives across Canada and the U.S. to produce a digital history hub for the research and study of LGBTQ+ lived experience.</p>
                            <p>The PPOHP preserves 36 interviews with a variety of narrators: event organizers and volunteers, bathhouse patrons, journalists, scholars, and community activists. Interviews address not only the September 2000 bathhouse police raid, but also radical sex/gender cultures in turn of the 21st century Toronto.</p>
                            <p>Interviews were conducted between February and August of 2021. Synchronous interview coding of both interview transcripts and video footage took place between May 2021 and June 2022. In June 2022, the collection was transferred to the project’s archival partner, The ArQuives: Canada’s LGBTQ2+ Archives, for long-term digital preservation and community access. Mid-way through the collection phase, the project team began animating and activating the interviews on the Collaboratory’s social media platforms in the form of audio portraits, video shorts, and other methods, laying the aesthetic and conceptual foundation for this digital exhibit.</p>
                            <TabPanel 
                                mode='logo'
                                tabs={['Collaboratory_Logo', 'ArQuives_Logo']}
                                content={[
                                    <CreditImageBio people={PPOHPTeamCollaboratory}/>,
                                    <CreditImageBio people={PPOHPTeamArQuives}/>
                                ]}
                                alts={['Digital Collaboratory', 'The ArQuives']}
                            />
                        </>,
                        <>
                            <p>LGBQT Oral History Digital Collaboratory, “Title of Exhibit,” 2023, URL here. Date Accessed: {dateAccessed()}</p>
                        </>
                    ]}
                />
            </div>
        </div>
    )
}

export default Credits;