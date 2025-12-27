"use client";

import { useState, FormEvent } from "react";

export default function BookPage() {
  const [dateFlexibility, setDateFlexibility] = useState("flexible");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget;
    const optionalFields = [
      "phone", "venue", "arrival_time", "duration", "crowd_size",
      "indoor_outdoor", "sound_system", "lighting", "vibe",
      "family_friendly", "genres", "mic_announcements"
    ];

    optionalFields.forEach((fieldName) => {
      const field = form.elements.namedItem(fieldName) as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | null;
      if (field && !field.value) {
        field.value = "N/A";
      }
    });
  };

  return (
    <main style={{ minHeight: "100vh", background: "#0a0a0a", color: "#f5f5f5" }}>
      {/* Back link */}
      <div style={{ maxWidth: "640px", margin: "0 auto", padding: "24px 24px 0" }}>
        <a
          href="/"
          style={{ fontSize: "15px", color: "#999", textDecoration: "none" }}
        >
          &larr; Back to DJ Eddy X
        </a>
      </div>

      {/* Form container */}
      <div style={{ maxWidth: "640px", margin: "0 auto", padding: "64px 24px" }}>
        <h1
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: "48px",
            fontWeight: 400,
            marginBottom: "8px",
          }}
        >
          Book DJ Eddy X
        </h1>
        <p style={{ color: "#aaa", marginBottom: "48px", fontSize: "17px" }}>
          Fill this out and I&apos;ll get back to you within 24 hours.
        </p>

        <form
          action="https://formspree.io/f/xbdjdzwj"
          method="POST"
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "32px" }}
        >
          {/* Essential Fields */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <div>
              <label htmlFor="name" style={{ display: "block", fontSize: "13px", textTransform: "uppercase", letterSpacing: "1px", color: "#ccc", marginBottom: "8px", fontWeight: 600 }}>
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                style={{ width: "100%", padding: "14px 16px", background: "#111", border: "1px solid #333", borderRadius: "4px", color: "#fff", fontSize: "17px", fontFamily: "'Space Mono', monospace" }}
              />
            </div>

            <div>
              <label htmlFor="email" style={{ display: "block", fontSize: "13px", textTransform: "uppercase", letterSpacing: "1px", color: "#ccc", marginBottom: "8px", fontWeight: 600 }}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                style={{ width: "100%", padding: "14px 16px", background: "#111", border: "1px solid #333", borderRadius: "4px", color: "#fff", fontSize: "17px", fontFamily: "'Space Mono', monospace" }}
              />
            </div>

            <div>
              <label htmlFor="event_type" style={{ display: "block", fontSize: "13px", textTransform: "uppercase", letterSpacing: "1px", color: "#ccc", marginBottom: "8px", fontWeight: 600 }}>
                Event Type
              </label>
              <select
                id="event_type"
                name="event_type"
                required
                style={{ width: "100%", padding: "14px 16px", background: "#111", border: "1px solid #333", borderRadius: "4px", color: "#fff", fontSize: "17px", fontFamily: "'Space Mono', monospace", cursor: "pointer" }}
              >
                <option value="">Select one...</option>
                <option value="private-party">Private party</option>
                <option value="wedding">Wedding</option>
                <option value="corporate">Corporate event</option>
                <option value="weekly">Weekly activation</option>
                <option value="monthly">Monthly recurring</option>
                <option value="fitness">Gym / fitness event</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="date_flexibility" style={{ display: "block", fontSize: "13px", textTransform: "uppercase", letterSpacing: "1px", color: "#ccc", marginBottom: "8px", fontWeight: 600 }}>
                Preferred Date
              </label>
              <select
                id="date_flexibility"
                name="date_flexibility"
                value={dateFlexibility}
                onChange={(e) => setDateFlexibility(e.target.value)}
                style={{ width: "100%", padding: "14px 16px", background: "#111", border: "1px solid #333", borderRadius: "4px", color: "#fff", fontSize: "17px", fontFamily: "'Space Mono', monospace", cursor: "pointer", marginBottom: dateFlexibility === "specific" ? "12px" : "0" }}
              >
                <option value="flexible">Flexible / not sure yet</option>
                <option value="specific">I have a specific date</option>
              </select>
              {dateFlexibility === "specific" && (
                <input
                  type="date"
                  id="date"
                  name="date"
                  style={{ width: "100%", padding: "14px 16px", background: "#111", border: "1px solid #333", borderRadius: "4px", color: "#fff", fontSize: "17px", fontFamily: "'Space Mono', monospace" }}
                />
              )}
            </div>

            <div>
              <label htmlFor="message" style={{ display: "block", fontSize: "13px", textTransform: "uppercase", letterSpacing: "1px", color: "#ccc", marginBottom: "8px", fontWeight: 600 }}>
                Anything else?
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Tell me about your event, vibe, music preferences, family-friendly lyrics needed?, links to Spotify/Apple Music/YouTube playlists you like, any questions..."
                style={{ width: "100%", padding: "14px 16px", background: "#111", border: "1px solid #333", borderRadius: "4px", color: "#fff", fontSize: "17px", fontFamily: "'Space Mono', monospace", resize: "vertical" }}
              />
            </div>
          </div>

          {/* Collapsible Advanced Section */}
          <details style={{ borderTop: "1px solid #222", paddingTop: "24px" }}>
            <summary style={{ fontSize: "15px", color: "#999", cursor: "pointer", marginBottom: "24px", listStyle: "none" }}>
              <span style={{ borderBottom: "1px dotted #666" }}>+ Have more details? (optional)</span>
            </summary>

            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <div>
                <label htmlFor="phone" style={{ display: "block", fontSize: "13px", textTransform: "uppercase", letterSpacing: "1px", color: "#ccc", marginBottom: "8px", fontWeight: 600 }}>
                  Phone <span style={{ color: "#999", fontWeight: 400, textTransform: "none", letterSpacing: "normal" }}>(optional)</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  style={{ width: "100%", padding: "14px 16px", background: "#111", border: "1px solid #333", borderRadius: "4px", color: "#fff", fontSize: "17px", fontFamily: "'Space Mono', monospace" }}
                />
              </div>

              <div>
                <label htmlFor="venue" style={{ display: "block", fontSize: "13px", textTransform: "uppercase", letterSpacing: "1px", color: "#ccc", marginBottom: "8px", fontWeight: 600 }}>
                  Venue / Location Name
                </label>
                <input
                  type="text"
                  id="venue"
                  name="venue"
                  style={{ width: "100%", padding: "14px 16px", background: "#111", border: "1px solid #333", borderRadius: "4px", color: "#fff", fontSize: "17px", fontFamily: "'Space Mono', monospace" }}
                />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div>
                  <label htmlFor="time" style={{ display: "block", fontSize: "13px", textTransform: "uppercase", letterSpacing: "1px", color: "#ccc", marginBottom: "8px", fontWeight: 600 }}>
                    DJ Arrival Time
                  </label>
                  <input
                    type="time"
                    id="time"
                    name="arrival_time"
                    style={{ width: "100%", padding: "14px 16px", background: "#111", border: "1px solid #333", borderRadius: "4px", color: "#fff", fontSize: "17px", fontFamily: "'Space Mono', monospace" }}
                  />
                  <p style={{ fontSize: "12px", color: "#777", marginTop: "6px" }}>I need ~1 hour for setup before music starts</p>
                </div>
                <div>
                  <label htmlFor="duration" style={{ display: "block", fontSize: "13px", textTransform: "uppercase", letterSpacing: "1px", color: "#ccc", marginBottom: "8px", fontWeight: 600 }}>
                    Duration
                  </label>
                  <input
                    type="text"
                    id="duration"
                    name="duration"
                    placeholder="e.g., 3 hours"
                    style={{ width: "100%", padding: "14px 16px", background: "#111", border: "1px solid #333", borderRadius: "4px", color: "#fff", fontSize: "17px", fontFamily: "'Space Mono', monospace" }}
                  />
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div>
                  <label htmlFor="crowd_size" style={{ display: "block", fontSize: "13px", textTransform: "uppercase", letterSpacing: "1px", color: "#ccc", marginBottom: "8px", fontWeight: 600 }}>
                    Crowd Size
                  </label>
                  <select
                    id="crowd_size"
                    name="crowd_size"
                    style={{ width: "100%", padding: "14px 16px", background: "#111", border: "1px solid #333", borderRadius: "4px", color: "#fff", fontSize: "17px", fontFamily: "'Space Mono', monospace", cursor: "pointer" }}
                  >
                    <option value="">Select...</option>
                    <option value="under-25">Under 25</option>
                    <option value="25-50">25-50</option>
                    <option value="50-100">50-100</option>
                    <option value="100-200">100-200</option>
                    <option value="200+">200+</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="indoor_outdoor" style={{ display: "block", fontSize: "13px", textTransform: "uppercase", letterSpacing: "1px", color: "#ccc", marginBottom: "8px", fontWeight: 600 }}>
                    Indoor/Outdoor
                  </label>
                  <select
                    id="indoor_outdoor"
                    name="indoor_outdoor"
                    style={{ width: "100%", padding: "14px 16px", background: "#111", border: "1px solid #333", borderRadius: "4px", color: "#fff", fontSize: "17px", fontFamily: "'Space Mono', monospace", cursor: "pointer" }}
                  >
                    <option value="">Select...</option>
                    <option value="indoor">Indoor</option>
                    <option value="outdoor">Outdoor</option>
                    <option value="both">Both</option>
                  </select>
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div>
                  <label htmlFor="sound_system" style={{ display: "block", fontSize: "13px", textTransform: "uppercase", letterSpacing: "1px", color: "#ccc", marginBottom: "8px", fontWeight: 600 }}>
                    Sound System
                  </label>
                  <select
                    id="sound_system"
                    name="sound_system"
                    style={{ width: "100%", padding: "14px 16px", background: "#111", border: "1px solid #333", borderRadius: "4px", color: "#fff", fontSize: "17px", fontFamily: "'Space Mono', monospace", cursor: "pointer" }}
                  >
                    <option value="">Select...</option>
                    <option value="yes">Have house system</option>
                    <option value="no">Need DJ to bring</option>
                    <option value="not-sure">Not sure</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="lighting" style={{ display: "block", fontSize: "13px", textTransform: "uppercase", letterSpacing: "1px", color: "#ccc", marginBottom: "8px", fontWeight: 600 }}>
                    Lighting
                  </label>
                  <select
                    id="lighting"
                    name="lighting"
                    style={{ width: "100%", padding: "14px 16px", background: "#111", border: "1px solid #333", borderRadius: "4px", color: "#fff", fontSize: "17px", fontFamily: "'Space Mono', monospace", cursor: "pointer" }}
                  >
                    <option value="">Select...</option>
                    <option value="bring-lights">Bring lights</option>
                    <option value="we-have-lights">We have it</option>
                    <option value="no-lights">Not needed</option>
                  </select>
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div>
                  <label htmlFor="vibe" style={{ display: "block", fontSize: "13px", textTransform: "uppercase", letterSpacing: "1px", color: "#ccc", marginBottom: "8px", fontWeight: 600 }}>
                    Vibe
                  </label>
                  <select
                    id="vibe"
                    name="vibe"
                    style={{ width: "100%", padding: "14px 16px", background: "#111", border: "1px solid #333", borderRadius: "4px", color: "#fff", fontSize: "17px", fontFamily: "'Space Mono', monospace", cursor: "pointer" }}
                  >
                    <option value="">Select...</option>
                    <option value="background">Background music</option>
                    <option value="social">Social energy</option>
                    <option value="dance-floor">Dance floor</option>
                    <option value="build">Build over night</option>
                    <option value="formal">Formal event</option>
                    <option value="workout">Workout class</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="family_friendly" style={{ display: "block", fontSize: "13px", textTransform: "uppercase", letterSpacing: "1px", color: "#ccc", marginBottom: "8px", fontWeight: 600 }}>
                    Family-Friendly?
                  </label>
                  <select
                    id="family_friendly"
                    name="family_friendly"
                    style={{ width: "100%", padding: "14px 16px", background: "#111", border: "1px solid #333", borderRadius: "4px", color: "#fff", fontSize: "17px", fontFamily: "'Space Mono', monospace", cursor: "pointer" }}
                  >
                    <option value="">Select...</option>
                    <option value="yes">Yes, keep clean</option>
                    <option value="no">Explicit OK</option>
                    <option value="depends">Depends</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="genres" style={{ display: "block", fontSize: "13px", textTransform: "uppercase", letterSpacing: "1px", color: "#ccc", marginBottom: "8px", fontWeight: 600 }}>
                  Genre Preferences
                </label>
                <textarea
                  id="genres"
                  name="genres"
                  rows={2}
                  placeholder="e.g., '90s hip-hop, Latin, no country'"
                  style={{ width: "100%", padding: "14px 16px", background: "#111", border: "1px solid #333", borderRadius: "4px", color: "#fff", fontSize: "17px", fontFamily: "'Space Mono', monospace", resize: "vertical" }}
                />
              </div>

              <div>
                <label htmlFor="mic" style={{ display: "block", fontSize: "13px", textTransform: "uppercase", letterSpacing: "1px", color: "#ccc", marginBottom: "8px", fontWeight: 600 }}>
                  Need MC/Announcements?
                </label>
                <select
                  id="mic"
                  name="mic_announcements"
                  style={{ width: "100%", padding: "14px 16px", background: "#111", border: "1px solid #333", borderRadius: "4px", color: "#fff", fontSize: "17px", fontFamily: "'Space Mono', monospace", cursor: "pointer" }}
                >
                  <option value="">Select...</option>
                  <option value="yes-dj">Yes, DJ to MC</option>
                  <option value="yes-other">Yes, someone else will MC</option>
                  <option value="no">No</option>
                  <option value="maybe">Maybe</option>
                </select>
              </div>
            </div>
          </details>

          {/* Submit */}
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "18px",
              background: "#ff3d00",
              color: "#0a0a0a",
              fontSize: "14px",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "2px",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontFamily: "'Space Mono', monospace",
              marginTop: "16px",
            }}
          >
            Submit Request
          </button>
        </form>
      </div>

      {/* Footer */}
      <footer style={{ maxWidth: "640px", margin: "0 auto", padding: "48px 24px", borderTop: "1px solid #222", textAlign: "center" }}>
        <p style={{ fontSize: "14px", color: "#999", margin: 0 }}>
          &copy; 2025 Edward Sapp &middot;{" "}
          <a href="https://sapp.capital" style={{ color: "#999", textDecoration: "none" }}>
            Sapp Capital Advisors
          </a>
        </p>
      </footer>
    </main>
  );
}
