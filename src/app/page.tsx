import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="header">
        <div className="container header-inner">
          <div className="redirect">
            Looking for commercial real estate underwriting? →{" "}
            <a href="https://sapp.capital">Sapp Capital Advisors</a>
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="hero-videos">
          <video autoPlay muted loop playsInline>
            <source src="/hero-video-1.mp4" type="video/mp4" />
          </video>
          <video autoPlay muted loop playsInline>
            <source src="/hero-video-2.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="container hero-content">
          <h1>
            DJ <span>Eddy X</span>
          </h1>
          <p className="hero-tagline">20+ years behind the decks. Still reading rooms.</p>

          <div className="hero-stats">
            <div className="stat">
              <div className="stat-number">20+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat">
              <div className="stat-number">200+</div>
              <div className="stat-label">Events</div>
            </div>
            <div className="stat">
              <div className="stat-number">ATL</div>
              <div className="stat-label">Based In</div>
            </div>
          </div>
        </div>
      </section>

      <section className="mid-cta">
        <div className="container">
          <a href="/book" className="mid-cta-button">Book Now</a>
        </div>
      </section>

      <section className="section section-story">
        <div className="story-gallery-bg">
          <Image src="/gallery/545193147_31187764827534306_8735137467493314077_n.jpg" alt="" width={300} height={300} />
          <Image src="/gallery/513859225_10239055788392356_3634728018556833407_n.jpg" alt="" width={300} height={300} />
          <Image src="/gallery/472297968_10161332305708353_6876835523591593908_n.jpg" alt="" width={300} height={300} />
          <Image src="/gallery/514720608_10239055801632687_5470636956490416291_n.jpg" alt="" width={300} height={300} />
          <Image src="/gallery/467671571_10160808585443597_6648752054071422004_n.jpg" alt="" width={300} height={300} />
          <Image src="/gallery/468911035_10161255611858353_1168045258331959643_n.jpg" alt="" width={300} height={300} />
          <Image src="/gallery/514109719_10238151173057738_919747157847236360_n.jpg" alt="" width={300} height={300} />
          <Image src="/gallery/555693996_10166246548543761_6065520913205924100_n.jpg" alt="" width={300} height={300} />
          <Image src="/gallery/471664041_10161332310688353_2409614837003362541_n.jpg" alt="" width={300} height={300} />
          <Image src="/gallery/465995200_10162229373584511_5067228996678230709_n.jpg" alt="" width={300} height={300} />
          <Image src="/gallery/472172276_10161332302258353_3996717328429110899_n.jpg" alt="" width={300} height={300} />
          <Image src="/gallery/556698141_10166246548418761_2065552809278793157_n.jpg" alt="" width={300} height={300} />
          <Image src="/gallery/472311482_10161332307538353_4603687870950461750_n.jpg" alt="" width={300} height={300} />
          <Image src="/gallery/463459433_8921509087868584_2375526918257032711_n.jpg" alt="" width={300} height={300} />
          <Image src="/gallery/518113224_10161875032033597_3212367342069227862_n.jpg" alt="" width={300} height={300} />
          <Image src="/gallery/518321948_10161879651328597_3509790786019115705_n.jpg" alt="" width={300} height={300} />
          <Image src="/gallery/IMG_6841.jpeg" alt="" width={300} height={300} />
        </div>
        <div className="container">
          <div className="story-content">
            <div className="section-label">The Story</div>
            <h2>Started at 13 with flyers and a dream</h2>
            <p>
              I started DJing by plastering flyers across my neighborhood in Greensboro, North
              Carolina, offering a few free gigs to get started. I expected it to take months to land
              something. <span className="highlight">I was booked within a week.</span>
            </p>
            <p>
              What began as a middle school hustle turned into a real business almost overnight. By
              the time I was a freshman in high school, I was DJing every other weekend—birthday
              parties, school dances, house parties, bar mitzvahs, you name it. Word of mouth did all
              the heavy lifting. Every dollar I made went right back into better equipment.
            </p>
            <p>
              That&apos;s when I learned two things that have stuck with me ever since:{" "}
              <span className="highlight">how to shake hands, and how to read a crowd.</span>
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-label">My Approach</div>
          <h2>I&apos;ll match your vibe. And yes, I can get anyone dancing.</h2>
          <p>
            I&apos;m not going to blow you away with the sickest transitions or flashiest
            scratching. That&apos;s not my game.{" "}
            <span className="highlight">
              My sixth sense is playing what the crowd wants to hear—often before they know they
              want to hear it.
            </span>
          </p>

          <div className="approach-grid">
            <div className="approach-item">
              <h3>Open Format</h3>
              <p>
                I&apos;ll read the room and adjust on the fly. Hip-hop to house to classic
                rock—whatever moves people.
              </p>
            </div>
            <div className="approach-item">
              <h3>Family Friendly</h3>
              <p>
                Need it clean? I&apos;ve got it locked. Weddings, corporate events, kids&apos;
                parties—no problem.
              </p>
            </div>
            <div className="approach-item">
              <h3>Background Vibes</h3>
              <p>
                If you want music that elevates without stealing center stage, I can hold that line
                all night.
              </p>
            </div>
            <div className="approach-item">
              <h3>Turn It Up</h3>
              <p>
                When the energy needs to build, I know how to take it there. Controlled chaos is
                still controlled.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-label">Recent Work</div>
          <h2>By day, I build financial models. By night, I build playlists.</h2>
          <p>
            These days, I&apos;m a principal consultant running{" "}
            <a href="https://sapp.capital">Sapp Capital Advisors</a>, a commercial real
            estate underwriting firm. I spend most of my time building institutional-grade
            financial models for hedge funds and private equity shops.
          </p>
          <p>
            But DJing never left me. I&apos;ve been trusted to run the decks for two weddings in
            recent years, plus occasional private events. Now I&apos;m looking to get more reps in
            and reconnect with the craft that started everything.
          </p>
          <p>
            <span className="highlight">
              I&apos;m responsible. I show up early. And I take the gig seriously—even when
              I&apos;m doing it for the love of it.
            </span>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-label">Equipment</div>
          <h2>Full mobile rig. Self-sufficient for 200+ people.</h2>

          <div className="equipment-list">
            <div className="equipment-item">
              <span className="label">Controller</span>
              <span className="value">Numark Mixtrack Pro 3</span>
            </div>
            <div className="equipment-item">
              <span className="label">Software</span>
              <span className="value">Serato DJ Pro</span>
            </div>
            <div className="equipment-item">
              <span className="label">Laptop</span>
              <span className="value">MacBook Pro</span>
            </div>
            <div className="equipment-item">
              <span className="label">Speakers</span>
              <span className="value">QSC K12.2 (pair) – 2000W each</span>
            </div>
            <div className="equipment-item">
              <span className="label">Subwoofer</span>
              <span className="value">QSC KS112 – 2000W</span>
            </div>
            <div className="equipment-item">
              <span className="label">Microphone</span>
              <span className="value">Shure SM58</span>
            </div>
            <div className="equipment-item">
              <span className="label">Lighting</span>
              <span className="value">Chauvet DJ GigBAR 2</span>
            </div>
            <div className="equipment-item">
              <span className="label">Backup</span>
              <span className="value">Full redundant laptop setup</span>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Let&apos;s work together</h2>
          <p>
            Currently booking private events, weddings, and social gatherings in Atlanta. Open to
            venue residencies and one-off activations.
          </p>
          <a href="/book" className="cta-button">
            Book Now
          </a>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>
            © 2025 Edward Sapp ·{" "}
            <a href="https://sapp.capital">Sapp Capital Advisors</a>
          </p>
        </div>
      </footer>
    </>
  );
}
