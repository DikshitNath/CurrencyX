# CurrencyX

A modern, real-time currency converter web application featuring live exchange rates across 150+ currencies with zero latency and a minimalist, elegant design.

## Features

✨ **Real-Time Exchange Rates** — Live currency conversion with up-to-date rates  
🌍 **150+ Currencies** — Support for over 150 currencies worldwide  
⚡ **Instant Conversion** — Fast API response with ~0 latency  
💱 **Quick Swap** — One-click button to swap currencies  
🚩 **Country Flags** — Visual flag indicators for each currency  
📱 **Responsive Design** — Fully responsive layout for mobile and desktop  
🆓 **Always Free** — No hidden fees or premium tiers  

## Technologies Used

- **HTML5** — Semantic markup structure
- **CSS3** — Modern styling with custom design system, animations, and responsive grids
- **JavaScript (Vanilla)** — No frameworks, pure vanilla JS for lightweight performance
- **Tailwind CSS** — Browser-based utility CSS framework
- **Font Awesome** — Icon library for UI elements
- **Google Fonts** — Playfair Display, IBM Plex Mono, Syne typefaces
- **Currency API** — Real-time exchange rate data from [@fawazahmed0](https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/)

## Project Structure

```
CurrencyX/
├── index.html       # Main HTML structure
├── script.js        # Currency conversion logic and DOM manipulation
├── codes.js         # Country list and currency-to-country mapping
├── style.css        # Custom styling and responsive layout
└── README.md        # This file
```

## How to Use

1. **Open the Application**
   - Simply open `index.html` in your web browser
   
2. **Enter Amount**
   - Type the amount you want to convert in the amount field
   - Default is 1.00 if left empty
   
3. **Select Currencies**
   - Choose "From" currency from the first dropdown
   - Choose "To" currency from the second dropdown
   - Flags update automatically
   
4. **Swap Currencies**
   - Click the circular swap button (↻) to instantly swap the selected currencies
   
5. **View Results**
   - Click "Convert Now" to fetch and display the conversion result
   - Results display both the converted amount and live rate (per 1 unit)

## Key Components

### Left Panel
- **Eyebrow Label** - "Real-time exchange"
- **Display Heading** - Main title with elegant typography
- **Tagline** - Brief description
- **Live Rate Ticker** - Persistent display of current exchange rate (updates with each conversion)
- **Statistics** - Shows 150+ currencies, ~0s latency, and free status

### Right Panel
- **Amount Input** - Text field for conversion amount
- **Currency Selectors** - Dropdown menus with country flags
- **Swap Button** - Quick currency swap functionality
- **Result Block** - Golden-highlighted conversion result display
- **Convert Button** - Primary action button with bolt icon

## Design System

**Color Palette:**
- **Ink** (#0c0c0b) — Main text and borders
- **Paper** (#faf9f6) — Background color
- **Rule** (#e0ddd5) — Divider lines and borders
- **Muted** (#8a8880) — Secondary text
- **Gold** (#b8860b) — Accent color for highlights
- **Gold-bg** (#fdf8ec) — Light gold background for results

**Typography:**
- Playfair Display (serif) — Display headings
- Syne (sans-serif) — Body text and UI
- IBM Plex Mono (monospace) — Numbers and data

## API Information

The application uses the free [Currency API](https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/) which provides:
- Real-time exchange rates
- Latest data updates
- No authentication required
- High availability via CDN

**Example API Endpoint:**
```
https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/{currency}.json
```

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Installation

No installation required! Simply clone or download the project and open `index.html` in your browser.

```bash
git clone <repository-url>
cd CurrencyX
# Open index.html in your browser
```

## Performance

- **Lightweight** — Vanilla JavaScript, minimal dependencies
- **Fast Conversion** — Real-time API calls with instant display
- **Optimized CSS** — Custom design with animations and responsive layout
- **No Build Process** — Works directly in the browser

## Responsive Breakpoints

- **Desktop** — Full two-column layout (> 860px)
- **Tablet** — Stacked single-column layout (520px - 860px)
- **Mobile** — Optimized mobile menu with hamburger toggle (< 520px)

## Features in Detail

### Dynamic Flag Display
Flags are automatically fetched from [FlagsAPI](https://flagsapi.com) based on selected currency code and country mapping.

### Live Rate Ticker
The left panel maintains a live rate display that updates whenever a conversion is performed, showing "1 [From Currency] = X [To Currency]."

### Mobile Menu
Hamburger navigation menu appears on screens below 520px width for better mobile UX.

### Instant Validation
Amount input automatically defaults to 1.00 if empty or invalid value is entered.

## Future Enhancements

- Historical exchange rate charts
- Favorite currency pairs
- Offline mode with cached rates
- Additional payment methods support
- Multi-language support

## License

© 2025 CurrencyX — All rights reserved

## Credits

- Currency data provided by [@fawazahmed0](https://github.com/fawazahmed0)
- Icons by [Font Awesome](https://fontawesome.com)
- Fonts by [Google Fonts](https://fonts.google.com)
- Flags by [FlagsAPI](https://flagsapi.com)