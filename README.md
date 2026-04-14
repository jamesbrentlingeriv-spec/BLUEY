# 🐾 Bluey Reading Buddies 📚

<div align="center">

![Bluey Banner](https://img.shields.io/badge/🐾-Bluey%20Reading%20Buddies-5BA4CF?style=for-the-badge&logo=bookstack&logoColor=white)

**An Interactive Learning Platform for Kids Featuring Bluey & Friends!**

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![PWA](https://img.shields.io/badge/PWA-Enabled-5BA4CF?style=flat-square&logo=pwa&logoColor=white)](https://web.dev/progressive-web-apps/)
[![License](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)](LICENSE)

</div>

---

## 🌟 Overview

**Bluey Reading Buddies** is a fun, interactive web application designed to help children develop reading skills through engaging stories featuring everyone's favorite Blue Heeler family! This Progressive Web App (PWA) combines storytelling, games, music, and video content to create an immersive learning experience.

### ✨ Key Features

- 📖 **Interactive Stories** - 9 beautifully illustrated stories across 3 categories
- 🔊 **Read Aloud Feature** - Audio narration helps kids follow along
- 💃 **Dance Party** - 17 Bluey songs with dancing videos
- 🎬 **Bluey and Me** - Real-life lesson videos
- 📺 **Watch Bluey** - All 50 Season 3 episodes with thumbnails
- ✏️ **Letter Tracing** - Practice writing the alphabet
- 📱 **PWA Support** - Install on any device for offline use
- 🎨 **Kid-Friendly Design** - Bright colors, large text, easy navigation

---

## 📋 Table of Contents

- [Features](#-features)
- [Project Structure](#-project-structure)
- [Installation](#-installation)
- [Usage](#-usage)
- [Content Guide](#-content-guide)
- [Customization](#-customization)
- [Troubleshooting](#-troubleshooting)
- [Contributing](#-contributing)
- [Credits](#-credits)
- [License](#-license)

---

## 🎯 Features

### 📚 Story Categories

#### 🏖️ Family Adventures
Stories about the Heeler family's exciting outings and bonding experiences.

| Story | Description | Characters |
|-------|-------------|------------|
| **The Beach** | Sandcastles, hermit crabs, and sunset memories | Bluey, Bingo, Bandit, Chilli |
| **Camping** | Campfires, bushwalks, and shooting stars | Bluey, Bingo, Bandit, Chilli |
| **The Markets** | Saturday morning adventures with music and treats | Bluey, Bingo, Bandit, Chilli |

#### 🎈 Games & Imagination
Interactive games that spark creativity and fun!

| Story | Description | Characters |
|-------|-------------|------------|
| **Keepy Uppy** | Keep the balloon in the air! | Bluey, Bingo, Bandit |
| **Magic Xylophone** | Freeze your family with magic powers! | Bluey, Bingo, Bandit, Chilli |
| **Shadowlands** | Navigate the garden using only shadows | Bluey, Bingo, Bandit |

#### 💛 Life Lessons
Important lessons wrapped in entertaining stories.

| Story | Description | Characters |
|-------|-------------|------------|
| **Patience** | Growing a seed teaches waiting skills | Bluey, Bingo, Bandit |
| **Sharing** | Toys are more fun when shared | Bluey, Bingo, Bandit |
| **Teamwork** | Building together makes everything better | Bluey, Bingo, Bandit, Chilli |

### 🎵 Dance Party
Access to **17 official Bluey songs** including:
- Bluey Theme Tune (Instrument Parade & Extended versions)
- Keepy Uppy
- Here Come The Grannies!
- The Claw (Pachelbel's Canon)
- I Know A Place (The Creek Song)
- And 12 more favorites!

### 🎬 Bluey and Me
Real-life educational videos covering:
- Stranger Safety
- Anti-Bullying (Being Mean)
- Sharing & Kindness
- Cleaning Up Together
- Listening Skills

### 📺 Watch Bluey
Complete **Season 3 collection** with:
- ✅ All 50 episodes
- ✅ Custom episode thumbnails
- ✅ Fullscreen video player
- ✅ Autoplay with sound
- ✅ Easy episode selection grid

### ✏️ Letter Tracing
Interactive alphabet practice:
- Trace all 26 letters (A-Z)
- Both uppercase and lowercase
- Finger-friendly touch interface
- Perfect for early writers

---

## 📁 Project Structure

```
BLUEY/
│
├── 📄 index.html                    # Main homepage with all features
├── 📄 watch-bluey.html              # Video streaming page (50 episodes)
├── 📄 letter-tracing.html           # Alphabet tracing activity
├── 📄 story.css                     # Global styles for stories
├── 📄 story.js                      # Story interaction logic
├── 📄 shared-story-script.js        # Shared functionality across stories
├── 📄 service-worker.js             # PWA offline support
├── 📄 manifest.webmanifest          # PWA configuration
│
├── 📁 stories/                      # All story HTML files
│   ├── family-adventures/
│   │   ├── the-beach.html
│   │   ├── camping.html
│   │   └── the-markets.html
│   ├── games-and-imagination/
│   │   ├── keepy-uppy.html
│   │   ├── magic-xylophone.html
│   │   └── shadowlands.html
│   └── life-lessons/
│       ├── patience.html
│       ├── sharing.html
│       └── teamwork.html
│
├── 📁 thumbs/                       # Episode thumbnails (50 images)
│   ├── episode 1.jpg               # Bedroom
│   ├── episode 2.jpg               # Obstacle Course
│   ├── ... (episodes 3-49)
│   └── episode 50.jpg              # Surprise
│
├── 📁 blueymusic/                   # Dance party audio files
│   ├── 01 Bluey Theme Tune (Instrument Parade).mp3
│   ├── 02 Keepy Uppy.mp3
│   ├── ... (17 total tracks)
│   └── dancing.mp4                 # Dancing animation video
│   └── dancing.png                 # Dance party thumbnail
│
├── 📁 Bluey and Me/                 # Educational videos
│   ├── stranger/
│   │   ├── stranger.mp4
│   │   └── stranger.png
│   ├── being mean/
│   │   ├── being mean.mp4
│   │   └── being mean.png
│   ├── sharing/
│   │   ├── sharing.mp4
│   │   └── sharing.png
│   ├── cleaning/
│   │   ├── cleaning up.mp4
│   │   └── cleaning up.png
│   └── listen/
│       ├── listen.mp4
│       └── listen.png
│
├── 📁 STORYPICS/                    # Story illustration images
│   ├── beach/
│   ├── CAMPING/
│   ├── market/
│   ├── keepyuppy/
│   ├── xylophone/
│   ├── shadowlands/
│   ├── patience/
│   ├── sharing/
│   └── teamwork/
│
├── 🖼️ BLUEYREAD.mp4                # Hero video (looping)
├── 🖼️ BLUEREAD.png                  # Logo image
├── 🖼️ blueyy.png                    # Background image
├── 🖼️ Bluey.png                     # Character images
├── 🖼️ BINGO.png
├── 🖼️ BANDIT.png
├── 🖼️ Chilli.png
├── 🖼️ icon-192.png                  # PWA icons
├── 🖼️ icon-512.png
└── 🖼️ favicon.ico
```

---

## 🚀 Installation

### Prerequisites

Before you begin, ensure you have:
- ✅ A modern web browser (Chrome, Firefox, Safari, Edge)
- ✅ A local web server (recommended but not required)
- ✅ Basic understanding of HTML/CSS/JavaScript (for customization)

### Option 1: Quick Start (No Server Required)

1. **Download the Project**
   ```bash
   # Clone the repository
   git clone https://github.com/yourusername/bluey-reading-buddies.git
   
   # Or download as ZIP and extract
   ```

2. **Open in Browser**
   - Navigate to the `BLUEY` folder
   - Double-click `index.html`
   - The app will open in your default browser

   > ⚠️ **Note:** Some features may not work properly without a local server due to browser security restrictions.

### Option 2: Local Web Server (Recommended)

#### Using Python (Easiest)

```bash
# Navigate to the BLUEY folder
cd BLUEY

# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Then open: `http://localhost:8000`

#### Using Node.js

```bash
# Install http-server globally
npm install -g http-server

# Navigate to BLUEY folder
cd BLUEY

# Start server
http-server -p 8000
```

Then open: `http://localhost:8000`

#### Using VS Code Live Server

1. Install the **Live Server** extension
2. Right-click `index.html`
3. Select **"Open with Live Server"**

### Option 3: Deploy to GitHub Pages

1. **Create a GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/bluey-reading-buddies.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Select branch: `main`
   - Folder: `/ (root)`
   - Click Save

3. **Access Your Site**
   - Your site will be live at: `https://yourusername.github.io/bluey-reading-buddies/`

### Option 4: Deploy to Netlify (Free Hosting)

1. Drag and drop the `BLUEY` folder to [netlify.com](https://netlify.com)
2. Get instant live URL
3. Connect custom domain (optional)

---

## 🎮 Usage

### Getting Started

1. **Open the Application**
   - Launch `index.html` in your browser
   - You'll see the colorful homepage with Bluey and friends

2. **Install as PWA** (Optional but Recommended)
   - Look for the install prompt at the bottom
   - Click **"Install App"**
   - The app will be added to your home screen
   - Works offline after first visit!

### Navigation Guide

#### 🏠 Homepage Features

**Hero Section:**
- Watch Bluey reading animation (auto-plays)
- "Read Aloud" demo button
- Meet the characters: Bluey, Bingo, Bandit, Chilli

**Story Sections:**
- Click any story card to read
- Each story has illustrations and interactive elements
- Use browser back button to return home

**Special Features:**
- 💃 **Dance Party** - Click to access music player
- 🎬 **Bluey and Me** - Real-life lesson videos
- ✏️ **Trace Letters** - Alphabet practice activity
- 📺 **Watch Bluey** - All 50 Season 3 episodes

### 📖 Reading Stories

1. **Select a Story**
   - Browse by category (Family Adventures, Games, Life Lessons)
   - Click on any story card

2. **Story Page Features**
   - Beautiful illustrations throughout
   - Text appears in readable chunks
   - Interactive elements (click to reveal)
   - Character dialogue highlighted

3. **Navigation Within Stories**
   - Scroll down to continue reading
   - Images enhance the narrative
   - Return home via navbar or back button

### 💃 Dance Party

1. **Access Dance Party**
   - Click the "Pick a Song!" card on homepage
   - Tracklist modal appears

2. **Play Music**
   - Click any song title
   - Video starts dancing animation
   - Audio plays simultaneously
   - Close with ✕ button or click outside

3. **Available Tracks**
   - 17 official Bluey songs
   - Instrumental and vocal versions
   - Theme tunes and episode music

### 🎬 Bluey and Me Videos

1. **Browse Videos**
   - Located below Dance Party section
   - 5 educational videos available

2. **Watch Videos**
   - Click any video card
   - Full-screen modal opens
   - Videos play in sequence
   - Learn real-life lessons

3. **Video Topics**
   - Stranger danger awareness
   - Anti-bullying education
   - Sharing and kindness
   - Cleaning up responsibilities
   - Listening skills

### 📺 Watch Bluey (Season 3)

1. **Access Episodes**
   - Click "Watch Bluey" card on homepage
   - Grid of 50 episodes appears

2. **Episode Features**
   - Custom thumbnail for each episode
   - Episode title and number displayed
   - Click any card to play

3. **Video Player**
   - Opens in fullscreen modal
   - Google Drive embedded player
   - Autoplay enabled
   - Sound on by default
   - Close with ✕ button or Escape key

4. **All Episodes Included**
   - S03E01: Bedroom → S03E50: Surprise
   - Complete season collection
   - Organized in responsive grid

### ✏️ Letter Tracing

1. **Start Tracing**
   - Click "Trace Letters with Bluey!" link
   - Alphabet tracing page opens

2. **How to Trace**
   - Touch/click on letter outlines
   - Follow the dotted lines
   - Both uppercase and lowercase
   - Perfect for finger or stylus

3. **Learning Benefits**
   - Develops fine motor skills
   - Letter recognition
   - Writing preparation
   - Fun and interactive

---

## 📝 Content Guide

### Adding New Stories

1. **Create Story File**
   ```html
   <!-- In stories/[category]/your-story.html -->
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <title>Your Story Title</title>
       <link rel="stylesheet" href="../../story.css">
   </head>
   <body>
       <!-- Your story content here -->
   </body>
   </html>
   ```

2. **Add to Homepage**
   ```html
   <!-- In index.html, find appropriate section -->
   <a href="stories/category/your-story.html" class="story-card">
       <div class="card-img">
           <img src="STORYPICS/your-folder/thumbnail.png" alt="Thumbnail">
       </div>
       <div class="card-body">
           <h3>Story Title</h3>
           <p>Brief description...</p>
       </div>
       <div class="tags">
           <span class="tag">Character1</span>
           <span class="tag">Character2</span>
       </div>
   </a>
   ```

3. **Add Illustrations**
   - Create folder: `STORYPICS/your-story/`
   - Add images: `story1.png`, `story2.png`, etc.
   - Reference in HTML: `<img src="../../STORYPICS/your-story/story1.png">`

### Adding New Videos to Watch Bluey

1. **Upload to Google Drive**
   - Upload video file to Google Drive
   - Right-click → Share → Get link
   - Change to "Anyone with link can view"

2. **Get File ID**
   - From share URL: `https://drive.google.com/file/d/FILE_ID/view`
   - Copy the `FILE_ID` portion

3. **Generate Thumbnail**
   - Take screenshot or create custom thumbnail
   - Save as: `thumbs/episode XX.jpg` (XX = episode number)

4. **Update watch-bluey.html**
   ```javascript
   const episodes = [
       // Add new episode
       { 
           title: 'Episode Title', 
           episode: 'S03EXX', 
           fileId: 'YOUR_FILE_ID', 
           thumbnail: 'thumbs/episode XX.jpg' 
       },
       // ... existing episodes
   ];
   ```

### Adding Dance Party Songs

1. **Prepare Audio File**
   - Format: MP3 recommended
   - Location: `blueymusic/`
   - Naming: `XX Song Name.mp3`

2. **Update Track List**
   ```javascript
   var danceTracks = [
       // Add new track
       { 
           title: 'New Song Name', 
           file: 'blueymusic/XX New Song Name.mp3' 
       },
       // ... existing tracks
   ];
   ```

3. **Test Playback**
   - Open Dance Party
   - Verify audio plays correctly
   - Check volume levels

### Adding Bluey and Me Videos

1. **Organize Video Files**
   ```
   Bluey and Me/
   ├── topic-name/
   │   ├── topic-name.mp4      # Video file
   │   └── topic-name.png      # Thumbnail
   ```

2. **Add to Homepage**
   ```html
   <div class="story-card" onclick="openBlueyMeVideoSequence(['Bluey and Me/topic/topic.mp4'])">
       <div class="card-img">
           <img src="Bluey and Me/topic/topic.png" alt="Topic">
       </div>
       <div class="card-body">
           <h3>Video Title</h3>
           <p>Description...</p>
       </div>
   </div>
   ```

---

## 🎨 Customization

### Changing Colors

Edit `index.html` CSS section:

```css
/* Primary Blue */
--primary-color: #5BA4CF;

/* Background Gradient */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Text Colors */
color: #1E3A5F;        /* Dark blue text */
color: #7A8FA6;        /* Light gray text */
```

### Modifying Fonts

Currently using **Nunito** from Google Fonts:

```html
<link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap" rel="stylesheet">
```

To change:
1. Choose font from [Google Fonts](https://fonts.google.com/)
2. Replace link tag
3. Update `font-family` in CSS

### Adjusting Layout

**Grid Columns:**
```css
.story-grid {
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    /* Change 320px to adjust card width */
}
```

**Card Sizes:**
```css
.story-card .card-img {
    height: 200px;  /* Adjust image height */
}
```

### PWA Configuration

Edit `manifest.webmanifest`:

```json
{
  "name": "Reading Buddies",
  "short_name": "Bluey",
  "description": "Your custom description",
  "theme_color": "#5BA4CF",
  "background_color": "#6EC1E4"
}
```

### Service Worker Updates

Edit `service-worker.js` to cache additional files:

```javascript
const CACHE_NAME = 'bluey-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/watch-bluey.html',
  // Add more files...
];
```

---

## 🔧 Troubleshooting

### Common Issues

#### ❌ Videos Won't Play

**Problem:** Google Drive videos not loading

**Solutions:**
1. ✅ Verify Google Drive file is set to "Anyone with link can view"
2. ✅ Check internet connection
3. ✅ Try different browser
4. ✅ Clear browser cache

#### ❌ Thumbnails Not Showing

**Problem:** Episode thumbnails appear broken

**Solutions:**
1. ✅ Verify `thumbs/` folder exists
2. ✅ Check file names match exactly (case-sensitive)
3. ✅ Ensure files are `.jpg` format
4. ✅ Verify file paths in JavaScript array

#### ❌ PWA Install Prompt Not Appearing

**Problem:** Can't install as app

**Solutions:**
1. ✅ Must use HTTPS (or localhost)
2. ✅ Check `manifest.webmanifest` is valid
3. ✅ Verify `service-worker.js` is registered
4. ✅ Clear browser data and reload

#### ❌ Audio Not Playing

**Problem:** Dance party songs silent

**Solutions:**
1. ✅ Check browser autoplay policies
2. ✅ Interact with page first (click anywhere)
3. ✅ Verify audio files exist in `blueymusic/`
4. ✅ Check file paths in `danceTracks` array

#### ❌ Stories Not Loading

**Problem:** Clicking story cards shows 404

**Solutions:**
1. ✅ Verify file paths are correct
2. ✅ Check folder structure matches links
3. ✅ Ensure HTML files have proper extensions
4. ✅ Use local server instead of file:// protocol

### Browser Compatibility

| Feature | Chrome | Firefox | Safari | Edge |
|---------|--------|---------|--------|------|
| PWA Install | ✅ | ✅ | ✅ | ✅ |
| Video Playback | ✅ | ✅ | ✅ | ✅ |
| Audio Playback | ✅ | ✅ | ✅ | ✅ |
| Touch Events | ✅ | ✅ | ✅ | ✅ |
| Service Worker | ✅ | ✅ | ✅ | ✅ |

**Minimum Requirements:**
- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

### Performance Tips

1. **Optimize Images**
   - Compress thumbnails to <50KB each
   - Use WebP format when possible
   - Lazy load images (already implemented)

2. **Reduce Load Times**
   - Enable gzip compression on server
   - Use CDN for fonts/icons
   - Minify CSS/JS for production

3. **Mobile Optimization**
   - Test on actual devices
   - Use responsive design tools
   - Optimize touch targets (min 44x44px)

---

## 🤝 Contributing

We welcome contributions! Here's how to help:

### Reporting Bugs

1. Check existing issues first
2. Create new issue with:
   - Clear description
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots if applicable
   - Browser/device info

### Suggesting Features

1. Open a feature request issue
2. Describe the enhancement
3. Explain why it would be valuable
4. Provide examples/mockups if possible

### Code Contributions

1. **Fork the Repository**
   ```bash
   git fork https://github.com/yourusername/bluey-reading-buddies.git
   ```

2. **Create Feature Branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Make Changes**
   - Follow existing code style
   - Add comments for complex logic
   - Test thoroughly

4. **Commit Changes**
   ```bash
   git add .
   git commit -m "Add amazing feature"
   ```

5. **Push and Create PR**
   ```bash
   git push origin feature/amazing-feature
   ```
   - Open Pull Request on GitHub
   - Describe your changes
   - Link related issues

### Code Style Guidelines

- **HTML:** Use semantic tags, proper indentation (2 spaces)
- **CSS:** Mobile-first approach, consistent naming
- **JavaScript:** ES6+ features, meaningful variable names
- **Comments:** Explain "why" not "what"

---

## 👏 Credits

### Created By
**James Brentlinger** - Developer & Designer

### Special Thanks
- 🎨 **Ludo Studio** - Creators of Bluey
- 📚 **BBC Studios** - Bluey licensing
- 💙 **Bluey Community** - Inspiration and support
- 👨‍👩‍👧‍👦 **Families Everywhere** - For making this worthwhile

### Technologies Used
- **HTML5** - Structure and semantics
- **CSS3** - Styling and animations
- **JavaScript (ES6+)** - Interactivity
- **Google Fonts** - Nunito typography
- **Font Awesome** - Icons
- **Google Drive** - Video hosting
- **Progressive Web App** - Offline functionality

### Resources
- [Bluey Official Website](https://www.bluey.tv/)
- [MDN Web Docs](https://developer.mozilla.org/)
- [Google Fonts](https://fonts.google.com/)
- [Font Awesome](https://fontawesome.com/)

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

**Important Notes:**
- Bluey characters and imagery are property of Ludo Studio/BBC Studios
- This is a fan-made educational project
- Not affiliated with or endorsed by Ludo Studio or BBC
- All video content hosted on Google Drive requires proper permissions
- For personal and educational use only

---

## 📞 Support

Need help? Here's how to get support:

1. **Check Documentation** - Read this README thoroughly
2. **Search Issues** - Look for similar problems on GitHub
3. **Create Issue** - Open a new issue with details
4. **Email** - Contact project maintainer

---

## 🌈 Show Your Support

If you enjoyed this project:

⭐ **Star this repository** on GitHub  
📢 **Share with friends** who have kids  
💬 **Leave feedback** in the issues section  
🎨 **Contribute** your own stories or features  

---

<div align="center">

**Made with 💙 for kids everywhere**

*"For real life!"* - Bluey

[⬆ Back to Top](#-bluey-reading-buddies-)

</div>