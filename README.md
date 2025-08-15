# HSP 2026 Conference Website

A beautiful, minimalist conference website built with modern web technologies. This website is designed to be easily customizable and extendable for your conference needs.

🌐 **Live Website:** https://hsp2026.org

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern Aesthetics**: Clean, minimalist design with beautiful gradients and animations
- **Easy Navigation**: Intuitive navigation with smooth scrolling and mobile-friendly hamburger menu
- **Multiple Pages**: Home, Deadlines, Schedule, and FAQ pages
- **Interactive Elements**: Accordion FAQ, tabbed schedule, and hover effects
- **Accessibility**: Built with accessibility best practices

## Pages

### Home (`index.html`)
- Hero section with conference details
- Conference highlights with icons
- Call-to-action section
- Footer with contact information

### Deadlines (`deadlines.html`)
- Timeline of important dates
- Color-coded deadline status (urgent, upcoming, completed)
- Clear descriptions for each deadline

### Schedule (`schedule.html`)
- Three-day conference schedule
- Tabbed interface for easy navigation
- Color-coded session types (keynote, workshop, poster, break)
- Detailed session information with speakers and locations

### FAQ (`faq.html`)
- Accordion-style FAQ sections
- Organized by categories (Registration, Abstract Submission, etc.)
- Contact section for additional support

## File Structure

```
hsp2026/
├── index.html          # Home page
├── deadlines.html      # Important deadlines page
├── schedule.html       # Conference schedule page
├── faq.html           # Frequently asked questions page
├── styles.css         # Main stylesheet
├── script.js          # JavaScript functionality
└── README.md          # This file
```

## Under Construction Mode

The website includes an "Under Construction" overlay system that can be easily toggled on/off:

### How to Use

1. **Enable Construction Mode**: Set `UNDER_CONSTRUCTION_MODE: true` in `config.js`
2. **Disable Construction Mode**: Set `UNDER_CONSTRUCTION_MODE: false` in `config.js`

When enabled, all pages except the home page (`index.html`) will display an "Under Construction" overlay with:
- A professional construction message
- A link back to the home page
- Animated construction icon
- Semi-transparent overlay that preserves the underlying content

### Quick Toggle

You can also toggle construction mode dynamically using the browser console:
```javascript
// Disable construction mode (show content)
window.disableConstructionMode();

// Enable construction mode (hide content)
window.enableConstructionMode();
```

### Configuration

The construction mode is controlled by the `WEBSITE_CONFIG.UNDER_CONSTRUCTION_MODE` variable in `config.js`. This makes it easy to:
- Keep all your existing work intact
- Show a professional "under construction" message
- Easily activate content when ready
- Maintain consistency across all pages

## Customization

### Adding New Pages

To add a new page:

1. Create a new HTML file (e.g., `speakers.html`)
2. Copy the basic structure from an existing page
3. Update the navigation menu in all pages to include the new link
4. Add page-specific styles in the `<style>` section or in `styles.css`

Example new page structure:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title - HSP 2026 Conference</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        /* Page-specific styles here */
    </style>
</head>
<body>
    <!-- Navigation (copy from existing page) -->
    <nav class="navbar">
        <!-- Navigation content -->
    </nav>

    <main>
        <!-- Your page content here -->
    </main>

    <!-- Footer (copy from existing page) -->
    <footer class="footer">
        <!-- Footer content -->
    </footer>

    <script src="script.js"></script>
</body>
</html>
```

### Updating Content

#### Conference Details
- Update conference dates, location, and theme in `index.html`
- Modify deadlines in `deadlines.html`
- Edit schedule in `schedule.html`
- Update FAQ content in `faq.html`

#### Styling
- Main styles are in `styles.css`
- Page-specific styles are in the `<style>` section of each HTML file
- Color scheme can be modified by changing CSS custom properties

#### Contact Information
- Update email and phone numbers in the footer of all pages
- Modify contact details in the FAQ page

### Color Scheme

The website uses a modern color palette:
- Primary Blue: `#2563eb`
- Success Green: `#059669`
- Warning Orange: `#f59e0b`
- Error Red: `#dc2626`
- Purple: `#7c3aed`
- Neutral Grays: `#1f2937`, `#6b7280`, `#9ca3af`

## Deployment

### GitHub Pages

1. Push your code to a GitHub repository
2. Go to repository Settings > Pages
3. Select the branch you want to deploy (usually `main`)
4. Your site will be available at `https://username.github.io/repository-name`

### Other Hosting Services

The website can be deployed to any static hosting service:
- Netlify
- Vercel
- AWS S3
- Any web server

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance

- Optimized images and fonts
- Minimal JavaScript
- Efficient CSS
- Fast loading times

## Accessibility

- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images
- Keyboard navigation support
- Screen reader friendly

## Contributing

To extend the website:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the MIT License.

## Support

For questions or support, please contact:
- Email: info@hsp2026.org
- Phone: +1 (555) 123-4567

---

**Note**: This is a template website. Please update all placeholder content (dates, contact information, conference details) with your actual conference information before deployment. 