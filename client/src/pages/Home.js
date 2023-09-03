import React, { useState } from 'react'
import ImageCarousel from '../components/Carousel'
import { Accordion, AccordionHeader, AccordionBody, AccordionItem } from 'reactstrap'

function Home() {
    const [open, setOpen] = useState('0');
    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };
    return (
        <>
            <ImageCarousel />
            <div className='about' id='about'>
                <div className='container'>
                    <h2 className='title'>About Us</h2>
                    <div className='content'>
                        <div className='left'>
                            <img src='/assets/images/statue.jpg' />
                        </div>
                        <div className='right'>
                            <p>
                                Cybelianism is the Culture, a religion or the Church of female Authority and Supremacy, the core of love and submissiveness. It is a religion that Is over 6000 years old. The first institution of its kind anywhere in the World. We believe that women are superior and that men are made to worship them. The purpose of the Cybelian order is to empower women to take back their rightful place in the world, where the world will become a place of more peaceful cohabitation under the reign of a most supreme GODDESS, and spiritual Godmother (Godmother Cybele).
                            </p>
                            <h3>Our History</h3>
                            <p>
                                The Cult of Cybele, the Gallae were transgendered priestesses of the Cult of Great Mother Cybele, much of what we know about them, and the cult itself, has been pieced together from fragments of contemporary accounts.
                            </p>
                            <p>
                                The cult was a mystery religion, which meant that it's inner secrets and practices were revealed to initiate only, origin and Spread Cybele originated as an earth goddess, worshipped in Asia Minor, primarily at Çatal Hüyük. She was known as Kubaba and was earliest depicted as an earth mother -- in plump and heavy forms.
                            </p>
                            <p>
                                The name may be a derivative of the local word for cube and may refer to a black meteorite that was associated with Her. She was also shown seated on a throne flanked by leopards. This form persisted later as well, though the Romans showed lions instead, and these were thought to represent the Goddess' male sons, consorts or priests. She became primarily associated with the concerns of women, protection against one's enemies, the healing of grave illnesses, guardianship of the dead, a granter of boons and a giver of the gift of prophecy.
                            </p>
                            <Accordion open={open} toggle={toggle}>
                                <AccordionItem>
                                    <AccordionHeader targetId="1">Read more...</AccordionHeader>
                                    <AccordionBody accordionId="1">
                                        <p>
                                            The Greeks colonised Asia Minor after the Trojan War and found worship of the Goddess everywhere. She was absorbed into their mythology about the 8th century BCE, though not willingly at first.
                                        </p>
                                        <p>
                                            Cybele became known as "Mother of the Gods". She was also considered to rule over Mt Ida, near Troy. Main centres of worship were Pessinus and Pergamum. A main symbol of the Goddess was a black meteorite that resided either at Pessinus, Pergamum, or Mt. Ida. There seems little mention of a Gallae at this time, though some mention of Corybantes and Metragytes, who were begging priests.Cybele's Advent in RomeAbout 213 BCE the Romans were fighting a war with Carthage. It was not going well and panic and uncertainty was the rule. Many superstitious ideas and practices were about that were not Roman in origin.
                                        </p>
                                        <p>
                                            This alarmed the Senate, and to reinstate order, they issued a decree that all books of prayers, prophecies and manuals for the sacrificial cult to be delivered to the city praetor. Nor was anyone to sacrifice in public or in a sacred place according to a new or foreign rite. Now some of the families in Rome were descended from Trojan emigrants, and prided themselves in their supposed Trojan origin. Rome was considered to be a "New Troy" by many, and thought that its fate might be dependent upon the Phrygian Goddess.
                                        </p>
                                        <p>
                                            The Sibylline books declared that "whenever a foreign enemy has invaded Italy, he can only be driven away and vanquished, if the Mother of Mount Ida is transferred from Pessinus to Rome”. A delegation was sent to Delphi to consult the Oracle and then to Pergamun where the ruling King (then allied with Rome against Philip V of Macedon) gave them the statue and the black meteorite that personified Cybele. This was carried on a ship built of pine trees from Mt Ida, through Tenedos, Lesbos, the Cyclades, Euboea, Cythera, around Sicily and then to Ostia (chief port of Rome). From Ostia the Goddess was taken by boat up the Tiber to Rome.
                                        </p>
                                        <p>
                                            There is a legend that the boat carrying the holy aerolith became stuck in the mud of the port which had begun to silt up. Then a young matron, whose reputation had been tarnished, removed her girdle and tied it to the boat, freeing it easily. From there Cybele was moved hand to hand by the matrons of Rome, to the Temple of Victoria until a Metroon was built in 191 BCE . The black meteorite was adapted as the head of the cult statue. Cybele, like Artemis of Ephesus, was a "black virgin”. Rise and fall of the Cult Caesar Augustus later rebuilt this temple after it burnt down, and he acknowledged Cybele as chief divinity of the Roman Empire.
                                        </p>
                                        <p>
                                            Cybele's retinue included many priestesses, including Amazonian, transgendered female priest/esse/s as well as traditional masculine functionaries such as the dendrophori (tree-bearer) and cannophori (reed-bearer), and transgendered males known as the Gallae. At its peek, the Cult of Cybele was rivalled only by that of Isis, and there were temples in all provinces of the Empire. While Cybele was accepted, attitudes towards the Gallae changed over a period of time. When Cybele first entered Rome, there is no mention of the Gallae -- they were later arrivals.
                                        </p>
                                        <p>
                                            Romans were horrified at the frenzy in which the gallae behaved, and by their self-emasculations. Initially the Gallae were confined to temple grounds, though later they were allowed to roam city streets with other followers. Some Emporers banned Roman citizens from taking part in the rites. At other times, rich and influential families patronised the temples. The early Christians were determined to destroy the cult and St Augustine condemns Her as a "demon" and a "monster" and the Gallae were "madmen" and "castrated perverts" (hardly an unbiased opinion). In the 4th century CE Valentinian II officially banned the worship of Cybele, and many of her followers perished at the hands of zealous Christians. Justinian continued the persecution of the cult and the Gallae. Under his reign, transgendered persons, and those indulging in same sex eroticism had their property confiscated, sacred texts burned, temples raised; they were tortured, forced to commit suicide, or burned alive.
                                        </p>
                                    </AccordionBody>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </div>
                </div>
                <div className='contact container'>
                    <h1 className='title'>Contact Us</h1>
                    <p className='sub-t'>Get In touch with us directly</p>
                    <div className='address'>
                        <p><i className='fas fa-location'></i> Address: 414 Fourth St, Annapolis, MD 21403, USA</p>
                        <p><i className='fas fa-envelope'></i> E-mail: info@cybeliann.org</p>
                        <p><i className='fas fa-phone'></i> Phone Number: +1301-450-0149</p>
                    </div>
                </div>
                <div className='img-container'>
                    <img className='footer-img' src='/assets/images/slide5.jpg' />
                </div>
            </div>
        </>
    )
}

export default Home