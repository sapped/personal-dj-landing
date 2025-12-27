import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="header">
        <div className="container header-inner">
          <div className="redirect">
            Looking for commercial real estate underwriting? →{" "}
            <a href="https://www.edwardsapp.com">Sapp Capital Advisors</a>
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="container">
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

      <section className="section">
        <div className="container">
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
      </section>

      <section className="section">
        <div className="container">
          <div className="section-label">My Approach</div>
          <h2>Your crowd will be dancing. The energy will be right.</h2>
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
            <a href="https://www.edwardsapp.com">Sapp Capital Advisors</a>, a commercial real
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
              I&apos;m responsible. I show up early. I don&apos;t drink on the job. And I take the
              gig seriously—even when I&apos;m doing it for the love of it.
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

      <section className="section">
        <div className="container">
          <div className="section-label">Archive</div>
          <h2>20 years in photos</h2>
          <p>From the dining room to the dance floor.</p>

          <div className="gallery">
            <div className="gallery-item">
              <Image
                src="/gallery/2005.jpg"
                alt="Early days"
                width={400}
                height={400}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div className="caption">Greensboro, 2005</div>
            </div>
            <div className="gallery-item">
              <Image
                src="/gallery/house-party.jpg"
                alt="House party"
                width={400}
                height={400}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div className="caption">House parties</div>
            </div>
            <div className="gallery-item">
              <Image
                src="/gallery/college.jpg"
                alt="College events"
                width={400}
                height={400}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div className="caption">College era</div>
            </div>
            <div className="gallery-item">
              <Image
                src="/gallery/club.jpg"
                alt="Club gigs"
                width={400}
                height={400}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div className="caption">Club gigs</div>
            </div>
            <div className="gallery-item">
              <Image
                src="/gallery/formal.jpg"
                alt="Formal events"
                width={400}
                height={400}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div className="caption">Formal events</div>
            </div>
            <div className="gallery-item">
              <Image
                src="/gallery/2024.jpg"
                alt="Recent wedding"
                width={400}
                height={400}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div className="caption">Weddings, 2024</div>
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
          <a href="mailto:ed@edwardsapp.com" className="cta-button">
            Get in Touch
          </a>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <p>
            © 2025 Edward Sapp ·{" "}
            <a href="https://www.edwardsapp.com">Sapp Capital Advisors</a>
          </p>
        </div>
      </footer>
    </>
  );
}
