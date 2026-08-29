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


Version 153: Simplified mobile Admin controls by removing redundant Game Status and Period dropdowns. Quick Status and Quick Period are now the only controls for those fields, with Period moved above the score steppers. Hidden state inputs preserve the existing save/publish logic. All V152 PWA/mobile and backend behavior unchanged.


Version 154: Fixed Game Center schedule toggle regression by restoring toggleGCSchedule(). Replaced roster position dropdown with mobile-friendly Forwards / Defensemen / Goaltenders buttons, defaulting to Goaltenders. Roster active state and light haptic feedback added. PWA cache bumped to v154 so installed/mobile clients receive the corrected files.


Version 155: Replaced the Game Center schedule month dropdown with mobile-friendly month buttons. The current/default month remains selected initially, active month state is highlighted, and tapping a month immediately refreshes the schedule. PWA cache bumped to v155. All V154 behavior unchanged.


Version 156: Mobile-first production polish. Home now prioritizes the live/final Game Day card by hiding the redundant upcoming card while a game is Live or Final, and hides the separate Game Day section during normal Upcoming state. Game-day CTA is more prominent on mobile. Roster intro changed to Youngstown Phantoms Preseason Roster. Added the independent/non-commercial fan-production disclaimer to More. Added small mobile safe-area/focus improvements and removed an obvious duplicate variable declaration. PWA cache bumped to v156.


Version 157: Redesigned Meet the Hosts for mobile. Replaced full-width portrait/biography cards with compact stacked profile cards using circular portraits. Host bios are collapsed initially and expand by tapping the full profile header; only one bio can remain open at a time. Existing biography copy and photos are unchanged. PWA cache bumped to v157. All V156 game-day, admin, roster, schedule, backend and disclaimer behavior unchanged.


Version 158: Added weekday shorthand (SUN, MON, TUES, WED, THURS, FRI, SAT) to game dates across the schedule, Home/Next Game, Game Center next game, upcoming Game Day date, and Recent Results where an ISO game date is available. No game-day behavior changes. PWA cache bumped to v158.


Version 159: Hardened schedule venue handling. Added complete city-based arena mappings plus opponent/team fallbacks, explicit Fall Classic and American Cup neutral-site arenas, guaranteed Covelli Centre for Youngstown home games, and an Arena TBA fallback instead of blank venue text. Schedule formatting no longer leaves an empty dash when a venue field is unavailable. PWA cache bumped to v159.


Version 160: Fixed schedule arena rendering rather than venue data. Game Center schedule rows now call scheduleVenue() directly instead of silently falling back to an empty arena, and each row renders the arena and city as separate, clearly visible lines. Arena TBA remains the safety fallback. PWA cache bumped to v160.


Version 161: Fixed the V160 Game Center schedule regression with a self-contained venue resolver inside Game Center, added a visible schedule render error fallback, corrected a malformed Game Center button attribute, and bumped the PWA cache to v161.


Version 162: Replaced Dan Conley's Meet the Hosts photo with the newly supplied image. Existing circular mobile crop and all V161 behavior remain unchanged. PWA cache bumped to v162.


Version 163: Fixed Dan host-photo cache persistence by moving the new image to a unique filename (dan-conley-v163.jpg) and updating the site/service worker to reference it. This bypasses stale browser/PWA caches that continued serving the original dan-conley.jpg. PWA cache bumped to v163.


Version 164: Added an iPhone/iPad install instruction sheet for Safari; changed the Home Phan Q&A copy to 'in a future episode instead'; removed the period from the Game Center preseason roster line; removed Admin / Updates from More; and replaced the Home admin button label with the discreet 'Dump & Chase Podcast 2006 ©' footer text. PWA cache bumped to v164.


Version 165: Corrected Phan Q&A wording to 'in a future episode'; corrected the discreet Home footer year to 2026; restored explicit Android install presentation while retaining iPhone/iPad Safari install instructions. PWA cache bumped to v165.


Version 166: Updated iPhone install instructions to Share → More → Add to Home Screen → Add. All V165 changes retained. PWA cache bumped to v166.


Version 167: Fixed the install card regression introduced in V165/V166. The refresh function now targets the actual installAppCard/installAppButton/installAppHint elements, restoring the visible install section in More for both iPhone and Android. iPhone instructions remain Share → More → Add to Home Screen → Add. PWA cache bumped to v167.


Version 168: Changed the iPhone install hint from 'Tap below for iPhone installation instructions.' to 'Tap for iPhone installation instructions.' PWA cache bumped to v168.


Version 169: Proofread and polished the Meet the Hosts bios for grammar, punctuation, sentence structure, number/season formatting, and consistency while preserving the original humor and personality. PWA cache bumped to v169.


Version 170: Full app copy/proofreading sweep. Updated Sam's trombone line to "over 20 years"; tightened repetitive or unnecessary wording on the home page, Phan Q&A, More/install card, game-day button, and private admin dashboard; clarified the independent fan-podcast header; retained app functionality and personality. PWA cache bumped to v170.


Version 171: Restored the longstanding "Unofficial" wording in the app header: "Unofficial Youngstown Phantoms Fan Podcast." All V170 proofreading improvements retained. PWA cache bumped to v171.


Version 172: Redesigned the Home Phan Q&A card to match the compact visual language of the unopened Schedule card: smaller typography, subdued secondary text, and a full-width secondary action instead of the oversized promotional button. PWA cache bumped to v172.


Version 174: Corrected the V173 changes. The version number now appears inside the Home page content at the upper-right above the Latest Episode card. The Home Next Game arena now has its own line and both Home venue render paths populate it, including the later repairHome() routine that previously overwrote the display. PWA cache bumped to v174.


Version 175: Home Next Game venue line now matches Game Center exactly: Arena — City. Removed the duplicated puck-drop time from the Home venue line and removed the unused separate arena line. Both Home rendering paths use the same format. Cache bumped to v175.


Version 176: Restored the version number to the top-right corner placement. Added a final authoritative Home venue sync that runs after the legacy renderers and explicitly displays Arena — City, preventing older Home update loops from replacing the arena line. Cache bumped to v176.


Version 177: Fixed the Home Next Game venue at the source. repairHome() now has its own arena lookup and writes Arena — City directly, so it no longer depends on scheduleVenue() scope. Removed the ineffective v176 external override. Version remains in the approved top-right position. Cache bumped to v177.


Version 178: Conservative Home/Game Center consistency pass from the known-good v177 baseline. Preserved the v177 Home arena fix and approved top-right version placement. Standardized next-game venue presentation to Arena — City without duplicating puck-drop time, and aligned repeated next-game detail styling between Home and Game Center. Cache bumped to v178.


Version 179: Game Center now automatically opens to the current calendar month when that month exists in the schedule. If it does not, it falls back to the month of the next upcoming game. Manual month buttons continue to work normally. Built from the v178 known-good baseline; Home arena fix and version placement preserved. Cache bumped to v179.


Version 180: Recent Results presentation polish only. Results are now easier to scan with a compact date block, clearer opponent hierarchy, HOME/AWAY pill, venue line, outcome pill, and larger score. Storage, Supabase syncing, and completed-result logic are unchanged. Built from v179; Home arena fix and smart current-month Game Center behavior preserved. Cache bumped to v180.


Version 181: Fixed Final result publishing by correcting the Supabase results Edge Function endpoint to `manage-results`. Final publishing now immediately refreshes Recent Results and Admin Recent Results. The admin publish status message now lives above the sticky SAVE & PUBLISH button so it is fully visible. Preserves v180 results styling, v179 smart-month behavior, and the v177 Home arena fix. Cache bumped to v181.


Version 182:
- Restored the correct active Supabase Edge Function endpoint: `manage-completed-results`.
- Reworked Recent Results syncing to use a direct public Supabase REST read with no-store caching and visible console errors instead of silently swallowing client errors.
- Final-result publishing now includes an arena fallback so newly saved results have Arena — City metadata.
- Preserved the v181 admin publish-status placement above SAVE & PUBLISH.
- Cache bumped to v182.


Version 183: Corrected Recent Results REST authentication by removing the invalid Bearer header and using the Supabase publishable key as apikey only. FINAL publishing now requires a successful Recent Results read-back before reporting success. Game Center loads fresh results after its results container is created. Correct manage-completed-results endpoint preserved. Cache bumped to v183.


Version 184: Recent Results now reads through the dedicated public Supabase Edge Function `get-completed-results` instead of direct browser REST/PostgREST. Added an 8-second timeout so the UI can never remain stuck on Loading recent results… indefinitely. Game Center now shows a clear load error if the endpoint fails. Existing write/delete endpoint `manage-completed-results` is unchanged. Cache bumped to v184.


Version 185: Fixed the dedicated `get-completed-results` Edge Function request by adding the required Supabase `apikey` header. No other Recent Results logic changed. The 8-second timeout and visible error state remain in place. Cache bumped to v185.


Version 186: Recent Results now uses the Supabase JS client's `functions.invoke('get-completed-results')` instead of raw browser fetch. The read-only Edge Function was updated to accept POST as well as GET. An 8-second timeout remains so the UI cannot hang indefinitely. Cache bumped to v186.


Version 187: Consolidated Recent Results reads onto the already-working `manage-completed-results` Edge Function. That function now supports a public `list` action while keeping upsert/delete protected by custom admin authentication. The app posts `{action:'list'}` to the same endpoint used for result management. 8-second timeout retained. Cache bumped to v187.


Version 188: Supabase edge logs confirmed Recent Results requests were returning HTTP 200, so network/server failure was ruled out for V187. Public reads now use a plain GET to `manage-completed-results` with a cache-busting timestamp and no custom headers/preflight. `cacheCompletedResults` now updates the in-memory results first and treats localStorage/admin-render failures as non-fatal. If a strict Game Center load still fails, the actual error message is shown beneath the Recent Results error text for diagnosis. Cache bumped to v188.


Version 189: V188 diagnostics identified the concrete client-side error: `weekdayShort is not defined` inside Recent Results rendering. Recent Results now calculates its weekday locally and no longer depends on that out-of-scope helper. Network/read logic from V188 is otherwise unchanged. Cache bumped to v189.


Version 190: Recent Results presentation tightened into a compact scoreboard-style row. Reduced vertical padding, kept date/opponent/venue information, and placed the outcome badge and score together on the right. Functional V189 loading behavior is unchanged. Cache bumped to v190.


Version 191: Non-invasive usability/accessibility polish. Added visible keyboard focus treatment, reduced-motion support, polite live-region announcements for Recent Results loading/errors, dialog semantics for primary overlays, and a small offline status note that only appears when the device is offline. No standings, roster data/wording, Recent Results data logic, Home arena logic, or core navigation behavior changed. Cache bumped to v191.


Version 192: Podcast feed loading/error-state polish. Added an 8-second feed timeout, compact accessible loading state, cached episode-list fallback, cached latest-episode fallback, and clearer offline/feed-unavailable messaging. Existing embedded episode data remains the final fallback. No standings, roster, schedule, arena, or Recent Results logic changed. Cache bumped to v192.


Version 193: Presentation-only control consistency pass. Standardized primary/secondary button height, padding, radius, typography, icon spacing, hover/pressed/disabled treatment, month/admin quick controls, score-stepper touch targets, and Save & Publish sizing. No button wording, click handlers, navigation, install behavior, podcast logic, standings, roster, schedule, Recent Results, or arena logic changed. Cache bumped to v193.


Version 194: Home-screen presentation polish only. Tightened card spacing and vertical padding, normalized eyebrow/heading rhythm, reduced excess space around Next Game details/venue, and slightly tightened Home Recent Results rows, with additional small-phone spacing adjustments. No content wording, card order, navigation, standings, roster, schedule data, game-day logic, Recent Results loading/data logic, podcast/feed logic, arena mapping, or install behavior changed. Cache bumped to v194.
