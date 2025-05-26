import React from 'react';
import SideMenu from '../components/side-menu';
import TabPanel from '../components/tab-panel';
import CreditImageBio from '../components/credit-image-bio';

import '../styles/credits.css'

const Credits = () => {
    
    return (
        <div className='page-wrapper credits'>
            <SideMenu active='credits'/>
            <div className='content'>
                <h1 className='credits-h1'>CREDITS</h1>

                <p>In 2021, the <a href='https://lgbtqdigitalcollaboratory.org/about/'>LGBTQ Oral History Digital Collaboratory</a>, led by Director Elspeth Brown, launched the <a href='https://pussypalaceproject.org/'>Pussy Palace Oral History Project</a> (PPOHP). In collaboration with <a href='https://arquives.ca/'>The ArQuives: Canada’s LGBTQ2+ Archives</a>, the PPOHP preserves 36 interviews with patrons, organizers, and allies of the Pussy Palace bathhouse events. These interviews capture reflections not only on the September 2000 police raid but also on the vibrant sex and gender cultures of early 21st-century Toronto.</p>
                <p>Driven by a desire to connect broader audiences with this rich archive, the Collaboratory developed this immersive digital exhibit, which invites users to explore the evolution of the Palace events, hear first-person accounts of the raid and its aftermath, and experience the pleasures and provocations of the physical space as virtual patrons. </p>
                <p>This digital exhibit was made possible through the support of the UX Design for DH Accelerator Program, a project of the <a href='https://dhn.utoronto.ca/'>Critical Digital Humanities Initiative</a> at the University of Toronto. </p>
                <p>Visit <a href='https://pussypalaceproject.org/meet-our-team/'>Meet Our Team</a> to learn more about the Digital Exhibit and Oral History Project team members.</p>

                <div className='thin-divider' style={{marginTop: 60, marginBottom: 60}}></div>

                <h2 className='credits-h2'>DIGITAL EXHIBIT TEAM</h2>
                <h3 className='credits-h3'>FOR THE COLLABORATORY</h3>
                <p><b>Elspeth Brown</b> | Lead Historian and Exhibit Co-Curator </p>
                <p><b>Alisha Stranges</b> | Project Manager, Exhibit Co-Curator, Co-Designer, and Co-Creative Producer </p>
                <p><b>Ayo Tsalithaba</b> | Exhibit Co-Creative Producer and Visual Artist </p>
                <h3 className='credits-h3'>FOR THE CRITICAL DIGITAL HUMANITIES INITIATIVE</h3>
                <p><b>Danielle Taschereau Mamers</b> | CDHI Managing Director and Accelerator Team Lead</p>
                <p><b>Peter Luo</b> | UX Designer</p>
                <p><b>Matt Lefaive</b> | Web Developer </p>
                <div className='credits-page-button-spacer'></div>
                <a href='https://pussypalaceproject.org/meet-our-team/' className='credits-page-button'>Meet our Team</a>

                <div className='thin-divider' style={{marginTop: 60, marginBottom: 60}}></div>

                <h2 className='credits-h2'>ORAL HISTORY PROJECT TEAM</h2>
                <h3 className='credits-h3'>FOR THE COLLABORATORY</h3>
                <p><b>Elspeth Brown</b> | Principal Investigator </p>
                <p><b>Alisha Stranges</b> | Project Manager and Co-Oral Historian </p>
                <p><b>Elio Colavito</b> | Co-Oral Historian </p>
                <p><b>Emily Mastragostino</b> | Interview Coder </p>
                <p><b>Katherine Zheng, Aisling Murphy, & Andy Huynh</b> | Social Media Managers </p>
                <h3 className='credits-h3'>FOR THE ARQUIVES</h3>
                <p><b>Raegan Swanson</b> | Executive Director </p>
                <p><b>Lucie Handley-Girard</b> | Archivist </p>
                <p><b>Jordan Saroya</b> | Administrative Assistant </p>
                <div className='credits-page-button-spacer'></div>
                <a href='https://pussypalaceproject.org/meet-our-team/' className='credits-page-button'>Meet our Team</a>

                <div className='thin-divider' style={{marginTop: 60, marginBottom: 60}}></div>

                <h2 className='credits-h2'>FEATURED NARRATORS</h2>
                <p>Thank you to all the community narrators who participated in the <a href='https://lgbtqdigitalcollaboratory.org/about/'>LGBTQ Oral History Digital Collaboratory’s</a> <a href='https://pussypalaceproject.org/'>Pussy Palace Oral History Project</a>. This exhibit would not be possible without their generosity, vulnerability, and the depth of their shared memories. Below is an alphabetical list of narrators who have consented to be featured throughout the exhibit. </p>
                <h3 className='credits-h3'>BATHHOUSE ORGANIZERS AND VOLUNTEERS</h3>
                <p><b>Lukas Blakk</b> | Security Volunteer</p>
                <p><b>Chloë Brushwood Rose</b> | Volunteer Photographer </p>
                <p><b>Noelle Campbell-Smith</b> | Volunteer Bartender </p>
                <p><b>Karen B. K. Chan</b> | TWBC Member </p>
                <p><b>Chanelle Gallant</b> | TWBC Member </p>
                <p><b>Diane Hamilton</b> | TWBC Member </p>
                <p><b>JP Hornick</b> | Security Volunteer</p> 
                <p><b>Carlyle Jansen</b> | TWBC Co-Founder </p>
                <p><b>Tera Mallette</b> | Security Volunteer </p>
                <p><b>Leanne Powers</b> | Temple Priestess </p>
                <p><b>Renee Racine</b> | Security Volunteer </p>
                <p><b>Terri Roberton</b> | Body Painter </p>
                <p><b>Janet Rowe</b> | TWBC Co-Founder </p>
                <p><b>Deb Singh</b> | TWBC Member </p>
                <h3 className='credits-h3'>BATHHOUSE PATRONS AND COMMUNITY ALLIES</h3>
                <p><b>Ange Beever</b> | Patron </p>
                <p><b>Olivia Chow and Bob Gallagher</b> | Community Allies </p>
                <p><b>Brenda Cossman</b> | Patron and Legal Consultant </p>
                <p><b>Stephanie Dutrizac</b> | Patron </p>
                <p><b>T’Hayla Ferguson</b> | Patron </p>
                <p><b>Paul Gallant</b> | Community Ally and Journalist </p>
                <p><b>Nia Herlihy</b> | Patron </p>
                <p><b>Nancy Irwin</b> | Patron </p>
                <p><b>Pam Johnson</b> | Patron </p>
                <p><b>Hanlon Uafás-Álainn (formerly Hanlon McGregor)</b> | Patron </p>
                <p><b>Lyla Miklos</b> | Patron </p>
                <p><b>Anthony Mohamed</b> | Community Ally </p>
                <p><b>Sabrina Olender</b> | Patron </p>
                <p><b>Lynda J. Perry</b> | Patron </p>
                <p><b>Andrea Ridgley</b> | Patron </p>
                <p><b>Mariana Valverde</b> | Community Ally </p>
                <p><b>Josey Vogels</b> | Patron and Journalist </p>
                <p><b>Anna Willats</b> | Patron and Community Ally </p>
                <p><b>Robin Woodward</b> | Patron </p>

                <div className='thin-divider' style={{marginTop: 60, marginBottom: 60}}></div>

                <h2 className='credits-h2'>SPECIAL THANKS</h2>
                <p>A heartfelt thank you to <b>Steff J. Mendolia</b>, who supported narrator Lynda J. Perry with technical and administrative tasks throughout the oral history interview process. </p>
                <p>Special thanks as well to <b>Geena R.</b>, Co-Owner of <a href='https://oasisaqualounge.com/'>Oasis Aqualounge</a>, for her invaluable collaboration on this project. Oasis, now located at 231 Mutual St., was formerly the site of Club Toronto Bathhouse and the iconic Pussy Palace events. To help us create reference imagery for the exhibit, Geena generously provided building floor plans, led a detailed in-person tour of the interior, and permitted us to photograph every part of the space. </p>
            
                <div className='thin-divider' style={{marginTop: 60, marginBottom: 60}}></div>
            
                <h2 className='credits-h2'>RESOURCES AND FURTHER RESEARCH </h2>
                <p>In creating this digital exhibit, we consulted a range of invaluable resources to support our research and storytelling. For a select list of these sources, please see our <a href='https://pussypalaceproject.org/resources/'>Resources</a> page. </p>
                <div className='credits-page-button-spacer'></div>
                <a href='https://pussypalaceproject.org/resources/' className='credits-page-button'>Resources</a>
                <div className='credits-page-button-spacer'></div>
                <p>We also invite you to explore our archive of <a href='https://pussypalaceproject.org/research-creation/'>digital research creation</a> projects. Blending artistic expression with scholarly investigation, these works aim to connect broader publics with this rich oral history archive. The collection includes:</p>
                <ul>
                    <li><b>Instagram Stories:</b> An 18-episode illustrated series depicting an “Average Night” at the Palace. </li>
                    <li><b>Animated Shorts:</b> Soundbites animated with digital illustrations showcasing key interview themes. </li>
                    <li><b>Audiograms:</b> Brief interview highlights layered with sketches of narrators and Palace photos. </li>
                    <li><b>Live Action Shorts:</b> Early video experiments, including a Pussy Palace-themed Heritage Minute. </li>
                </ul>
                <p>Each piece offers a unique way to experience the stories in our archive — explore the full collection on our website.</p>
                <div className='credits-page-button-spacer'></div>
                <a href='https://pussypalaceproject.org/research-creation/' className='credits-page-button'>Research Creation</a>

                <div className='thin-divider' style={{marginTop: 60, marginBottom: 60}}></div>
            </div>
        </div>
    )
}

export default Credits;