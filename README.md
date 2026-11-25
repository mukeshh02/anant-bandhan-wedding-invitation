# ॐ Anant Bandhan — Shivam & Gauri (Wedding Invitation)

1:1 Standalone wedding invitation web application cloned from the Shiv-Parvati template, named **Anant Bandhan**, completely de-branded and unwatermarked, with RSVP removed.

## Features

- **A to Z Clone**: Exact reproduction of opening hero animation, flower petal dynamics, audio playback, multi-layer parallax scrolling (Mount Kailash, Temple, Nandi, Couple), couple portraits, 5 celebration event cards, and live Muhurat countdown timer.
- **Watermark & Brand Removal**:
  - All third-party watermarks ("HappyInvitee") completely removed from every asset.
  - Sacred Nandi and Varanasi Ghat generated in high definition without watermarks.
  - Hands, mountains, temple, clouds, meadow, and event cards mathematically inpainted to restore crisp, pristine illustrations.
- **RSVP Removed**: Fully omitted from DOM, styles, and layout. Direct seamless transition from the Muhurat countdown to the footer.
- **Full-Screen Responsive Experience**: Clean full-screen invitation with native responsiveness across desktop, tablet, and mobile screens without any top headers or wrappers.

## How to Run

A local server is pre-configured and running on **port 5000**:

```powershell
python server.py
```

### URLs
- **Direct Wedding Invitation**: [http://localhost:5000/](http://localhost:5000/) or [http://localhost:5000/index.html](http://localhost:5000/index.html) (or [http://localhost:5000/preview.html](http://localhost:5000/preview.html))

## Project Structure

```text
├── index.html        # Main standalone wedding invitation
├── invite.html       # Mirror copy of the invitation
├── preview.html      # Full-screen invite (preview route)
├── server.py         # HTTP server script for localhost:5000
├── images/           # All 29 clean, unwatermarked illustration assets
│   ├── events/       # 5 event illustrations (Haldi, Sangeet, Baraat, Vivah, Ashirvaad)
│   └── petals/       # Marigold, Jasmine, and Rose animated petals
├── images_backup/    # Original untouched reference assets
└── tools/            # Cleanup and extraction utilities
```
