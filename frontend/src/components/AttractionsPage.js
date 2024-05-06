import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/commonStyles.css";
import "../styles/attractionsStyles.css"
import FooterSection from "./LandingPageSections/FooterSection.js";

function AttractionsBodyPage() {
    return (
        <main>
            <section>
                <figure class ="attract-pic">
                    <img src="./Main3.jpg"></img>
                    <div class="attract-info-container">
                        <div class="info-banner-text">
                            <h3>Adventure Awaits</h3>
                            <span class="info-banner-line"></span>
                            <h2>Our Many Attractions</h2>
                            <p>
                                Moffat Bay Lodge offers an array of local attractions, including thrilling whale watching, guided hikes through pristine wilderness, peaceful kayaking adventures, and mesmerizing scuba diving experiences.
                                These activities cater to diverse interests, ensuring guests can immerse themselves in the natural splendor and adventure that Moffat Bay has to offer.
                            </p>
                        </div>
                    </div>
                </figure>
            </section>
            <section>
                <div id="whale-watching" class="about-feature">
                    <div class="attract-comp-name">
                        <h1>Moffat Bay</h1>
                        <h1>Marina &amp; Lodge</h1>
                    </div>
                    <div class="about-feature-text">
                        <h1>WHALE WATCHING</h1>
                        <span class="about-feature-line"></span>
                        <p>Explore the realm of Moffat Bay Marina & Lodge. Beyond merely an establishment, we epitomize the perfect fusion of aquatic escapades and breathtaking natural beauty.</p>
                        <p>Nestled along the tranquil and scenic shores of Moffat Bay, our marina and lodge provide a serene sanctuary. Here, luxury amenities seamlessly intertwine with the peaceful embrace of nature.</p>
                    </div>
                    <div class="about-grid-gallery">
                        <div class="grid-item">
                            <img class="about-feature-image" src="./whales1.png" alt="Sailing"/>
                        </div>
                        <div class="grid-item">
                            <img class="about-feature-image" src="./whales2.png" alt="Sailing"/>
                        </div>
                        <div class="grid-item">
                            <img class="about-feature-image" src="./whales3.png" alt="Sailing"/>
                        </div>
                        <div class="grid-item">
                            <img class="about-feature-image" src="./whales4.png" alt="Sailing"/>
                        </div>
                    </div>
                    <div class="circle-info">
                        <div class="circle">
                            <div class="circle-inner">
                                <p>“Nature's spectacle on the open ocean waves.”</p>
                            </div>
                        </div>
                        <div class="circle">
                            <div class="circle-inner">
                                <p>Experience the wonder of whales in their natural ocean habitat</p>
                            </div>
                        </div>
                        <div class="circle">
                            <div class="circle-inner">
                                <p>“A breathtaking encounter with nature's gentle giants at sea.”</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div id="guided-hiking-tours" class="about-feature">
                    <div class="about-feature-text">
                        <h1>GUIDED</h1>
                        <h1>HIKING TOURS</h1>
                        <span class="about-feature-line"></span>
                        <p>Hike, Connect, Recharge: Immerse yourself in nature on guided tours designed to rejuvenate your spirit.</p>
                        <p>Ascend to new heights on this guided hiking tour, where our seasoned guides lead you through rugged trails to witness awe-inspiring mountain vistas. Connect with fellow adventurers as you conquer peaks and create lasting memories.</p> 
                    </div>
                    <div class="about-grid-gallery">
                        <div class="grid-item-large">
                            <img class="about-feature-image-tall" src="./hiking1.png" alt="Sailing"/>
                        </div>
                        <div class="grid-item">
                            <img class="about-feature-image" src="./hiking2.png" alt="Sailing"/>
                        </div>
                        <div class="grid-item">
                            <img class="about-feature-image" src="./hiking3.png" alt="Sailing"/>
                        </div>
                    </div>
                    <div class="circle-info">
                        <div class="circle">
                            <div class="circle-inner">
                                <p>Find Your Trek: Guided Hiking Tours Await You.</p>
                            </div>
                        </div>
                        <div class="circle">
                            <div class="circle-inner">
                                <p>Trail Bliss: Hike, Connect, and Recharge Outdoors.</p>
                            </div>
                        </div>
                        <div class="circle">
                            <div class="circle-inner">
                                <p>Elevate Your Journey: Guided Hiking, Nature's Embrace.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div id="scuba-diving" class="about-feature">
                    <div class="about-feature-text">
                        <h1>SCUBA DIVING</h1>
                        <span class="about-feature-line"></span>
                        <p>Discover a world beneath the waves with scuba diving! Immerse yourself in crystal-clear waters, explore vibrant coral gardens, encounter captivating marine creatures, and experience unparalleled adventures beneath the sea. Dive in today!</p>
                        <p>Whether you're an experienced diver or new to the sport, our expert-guided excursions ensure an unforgettable exploration of the bay's hidden treasures, making it a must-do activity for underwater enthusiasts.</p>
                    </div>
                    <div class="about-grid-gallery">
                        <div class="grid-item-large">
                            <img class="about-feature-image-tall" src="./scuba1.png" alt="Sailing"/>
                        </div>
                        <div class="grid-item">
                            <img class="about-feature-image" src="./scuba2.png" alt="Sailing"/>
                        </div>
                        <div class="grid-item">
                            <img class="about-feature-image" src="./scuba3.png" alt="Sailing"/>
                        </div>
                    </div>
                    <div class="circle-info">
                        <div class="circle">
                            <div class="circle-inner">
                                <p>“Scuba diving trip: Thrilling, colorful reefs, memories to last a lifetime.”</p>
                            </div>
                        </div>
                        <div class="circle">
                            <div class="circle-inner">
                                <p>“Unforgettable adventure, met sea turtles, breathtaking underwater world, pure exhilaration.”</p>
                            </div>
                        </div>
                        <div class="circle">
                            <div class="circle-inner">
                                <p>"Dive excursion: majestic marine life, tranquil depths, serenity beneath the waves."</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div id="kayaking" class="about-feature">
                    <div class="about-feature-text">
                        <h1>KAYAKING</h1>
                        <span class="about-feature-line"></span>
                        <p>Experience the beauty of nature from a new perspective as you glide through serene waters on our guided kayaking tours.</p>
                        <p>Explore picturesque lakes, winding rivers, and coastal wonders while surrounded by breathtaking natural beauty.  Get close to nature, enjoy the fresh air, and experience the thrill of kayaking. Encounter local wildlife, from graceful waterfowl to playful otters, in their natural habitats. </p>
                    </div>
                <div class="about-grid-gallery">
                    <div class="grid-item-large">
                        <img class="about-feature-image-tall" src="./kayaking1.png" alt="Sailing"/>
                    </div>
                    <div class="grid-item">
                        <img class="about-feature-image" src="./kayaking2.png" alt="Sailing"/>
                    </div>
                    <div class="grid-item">
                        <img class="about-feature-image" src="./kayaking3.png" alt="Sailing"/>
                    </div>
                </div>
                <div class="circle-info">
                    <div class="circle">
                        <div class="circle-inner">
                            <p>"Kayaking tour: Serene waters, wildlife surprises, a tranquil escape from everyday."</p>
                        </div>
                    </div>
                    <div class="circle">
                        <div class="circle-inner">
                            <p>"Adventure seekers' dream, kayaking through stunning vistas, nature's embrace beckons."</p>
                        </div>
                    </div>
                    <div class="circle">
                        <div class="circle-inner">
                            <p>"Memorable paddle, under the open sky, the river's secrets unveiled."</p>
                        </div>
                    </div>
                </div>
                </div>
            </section>
        </main>
    );
}

function AttractionsPage() {
    return (
      <div>
        <AttractionsBodyPage/>
        <FooterSection/>
      </div>
    );
  }

export default AttractionsPage;