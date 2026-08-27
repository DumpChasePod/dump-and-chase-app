# Dump & Chase Podcast App — Version 130

Game Center standings fix from Version 129 known-good baseline:
- Fixed the live USHL standings loader so it targets the visible Game Center standings elements.
- Preserved Eastern/Western conference switching.
- Uses the public HockeyTech/USHL standings feed already configured in the app.
- If the live feed fails, the app now shows a clear fallback message and keeps the official USHL standings link available.
- Roster and all unrelated app sections remain unchanged.
- Build marker updated to v130.


Version 132: Unified Home/Game Center Next Game presentation, collapsed full schedule, and mobile Game Center polish. Roster unchanged.


Version 133: Redesigned podcast episode cards without synthetic episode numbers; added tappable episode detail view, cleaned description presentation, and simplified Listen actions. Game Center and roster unchanged.


Version 134: Fixed Previous Episodes Listen buttons by replacing fragile inline episode payload encoding with safe Base64 encoding and accepting all supported audio enclosure formats. No other app sections changed.


Version 135: Listen/Open Latest now loads the selected episode into the full player without autoplay. Added clear Ready to Play / Now Playing / Paused player states and minor full-player polish. Other app sections unchanged.


Version 136: Added a five-platform Listen On row below the Latest Episode card (Apple Podcasts, Spotify, YouTube Music, iHeart, Amazon Music) and tightened Home page hierarchy/spacing. Player behavior from v135 retained.


Version 137: Listen On row reduced to Apple Podcasts, Spotify, and iHeart; Spotify now uses the direct show URL supplied by the user; platform icons now use brand colors. YouTube Music and Amazon Music removed.


Version 138: Replaced placeholder More cards with working Meet the Hosts, Phan Q&A, Phantoms News, and Official Schedule actions. Moved Admin / Updates into a separate private area inside More and removed the redundant Home-page admin footer. Other app sections unchanged.


Version 139: Restored the Home-page Admin / Updates link for quick game-day stat entry while retaining the Admin / Updates shortcut inside More. No other app behavior changed.


Version 140: Removed Official Schedule from More. Replaced the embedded Admin password with passwordless Supabase email authentication restricted to samolmsteadradio@gmail.com. Game-day state is shared through Supabase and secure writes use a JWT-protected Edge Function. Public game-day state syncs across devices.


Version 141: Fixed Admin magic-link callback to explicitly use https://dumpchasepod.github.io/dump-and-chase-app/ instead of the browser's current URL. Disabled automatic user creation for subsequent admin logins. Supabase Auth must allow this GitHub Pages URL in Site URL / Redirect URLs.


Version 142: Full-app cleanup pass. Removed fake notification UI, unused modal News/Phantoms/Q&A branches, missing service-worker registration, abandoned live-USHL standings code, and an older overwritten Game Center implementation. Updated stale Admin copy to reflect Supabase publishing. Current Home, Episodes/player, Game Center fallback link, roster, More, and secure Admin behavior are preserved. Recent Results remain device-local and are flagged for a future backend migration.


Version 143: Migrated Recent Results to Supabase. Public clients read completed results from a shared RLS-protected table; Admin final-result publishing, edits, manual additions, and deletes now go through a JWT-protected Edge Function restricted to the authorized admin email. localStorage remains only as a read cache/offline fallback. Recent Results now sync across devices.


Version 144: Fixed Recent Results not appearing when Game Center was opened after the Supabase sync had already completed. Game Center now renders cached results immediately and refreshes them from Supabase on open. Backend data/security unchanged.


Version 145: Added automatic Game Day rollover. A published Final remains on the public Game Day card through the night, locked to the completed game's opponent/score from Recent Results. At 6:00 AM America/New_York the following morning, the public card automatically switches to Upcoming and advances to the next scheduled game. Opening Admin after rollover also prepares clean Upcoming fields for the next publish.


Version 146: Added colored Facebook, Instagram, and Buzzsprout social links in an inverted-triangle layout at the top-right of Home. Recent Results received a compact visual polish with clearer outcome pills, score hierarchy, cleaner venue formatting, and improved spacing. Backend, Admin, Game Day rollover, roster, and podcast behavior unchanged.


Version 147: Removed the Buzzsprout social link from the Home header. Facebook and Instagram remain as colored social icons at the top-right. No other behavior changed.


Version 148: Fixed Home social-link navigation. Facebook and Instagram now use a robust external-link handler that opens a new tab/window when allowed and falls back to direct navigation when popups are blocked. Added trailing slash to Facebook page URL. No other behavior changed.


Version 149: Fixed Facebook social link reliability by switching to the mobile-safe Facebook page URL and giving the social icon cluster explicit z-index and pointer-event priority. Instagram remains unchanged. No other app behavior changed.


Version 150: Removed the experimental Home social-media links and restored the original clean header spacing. Recent Results polish and all V149 backend/game-day behavior remain unchanged.


Version 151: Production-domain migration. Admin magic-link authentication now returns to https://www.dumpandchasepod.com/ instead of the legacy GitHub Pages project URL. All V150 app, Supabase, Game Day, Recent Results, and rollover behavior unchanged. Supabase Auth URL Configuration must allow the new production URL.


Version 152: Mobile-first production polish. Added real PWA/installability files (manifest, service worker, 192/512 icons, Apple touch icon), mobile metadata, favicon, Open Graph/Twitter sharing metadata and OG card, lightweight launch screen, and Home Screen install guidance. Admin received thumb-friendly score +/- steppers, quick status and period buttons, haptic feedback where supported, and a sticky Save & Publish action. Existing backend, authentication, Game Day rollover, Recent Results and podcast behavior unchanged.
