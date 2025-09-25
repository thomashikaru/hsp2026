// Website Configuration
console.log('Config.js loaded');

window.WEBSITE_CONFIG = {
    // Set to false to disable under construction mode and show all content
    index_under_construction: false, // should never be true
    call_for_papers_under_construction: false, // almost ready to release!
    schedule_under_construction: true, // should stay false until schedule is finalized
    venue_under_construction: false,
    faq_under_construction: true,

    // Conference Details
    conferenceName: "39th Annual Conference on Human Sentence Processing",
    conferenceTagline: "",
    conferenceDate: "March 26-28, 2026",
    conferenceLocation: "MIT, Cambridge, MA",
    conferenceTheme: "Language and Thought in Minds and Machines",
    
    // Contact Information
    contact: {
        email: "info@hsp2026.org",
        website: "https://hsp2026.org"
    },
    
    // Important Deadlines
    deadlines: [
        {
            title: "Abstract Submission Deadline",
            date: "December 12, 2025 [NO extensions]",
            description: "Submit your research abstracts for consideration in the conference program. All submissions must be in PDF format and follow the provided template.",
            status: "urgent",
            type: "submission"
        },
        // {
        //     title: "Early Bird Registration",
        //     date: "January 28, 2026", 
        //     description: "Register early to secure the best rates for conference attendance. Early bird pricing includes access to all sessions and workshops.",
        //     status: "upcoming",
        //     type: "registration"
        // },
        // {
        //     title: "Notification of Acceptance",
        //     date: "January 21, 2026",
        //     description: "Authors will be notified of abstract acceptance and presentation format (oral presentation, poster, or workshop).",
        //     status: "upcoming", 
        //     type: "notification"
        // },
        // {
        //     title: "Final Paper Submission",
        //     date: "March 15, 2026",
        //     description: "Submit final papers for inclusion in the conference proceedings. Papers must be formatted according to the conference guidelines.",
        //     status: "upcoming",
        //     type: "submission"
        // },
        // {
        //     title: "Regular Registration Deadline",
        //     date: "March 15, 2026",
        //     description: "Final deadline for conference registration. Late registration may incur additional fees and limited availability.",
        //     status: "upcoming",
        //     type: "registration"
        // },
        // {
        //     title: "Conference Begins",
        //     date: "March 26, 2026",
        //     description: "The HSP 2026 Conference officially begins with opening ceremonies and keynote presentations.",
        //     status: "upcoming",
        //     type: "event"
        // }
    ],
    
    // Conference Schedule
    schedule: {
        day1: {
            date: "March 26",
            sessions: [
                {
                    time: "8:00 AM - 9:00 AM",
                    type: "keynote",
                    title: "Opening Ceremony & Welcome",
                    speaker: "Ted Gibson, Roger Levy, Evelina Fedorenko (MIT)",
                    description: "Official opening of HSP 2026 with welcome remarks and conference overview.",
                    location: "Main Auditorium - 10-250"
                },
                {
                    time: "9:00 AM - 10:30 AM",
                    type: "keynote",
                    title: "TBD",
                    speaker: "TBD",
                    description: "TBD",
                    location: "Main Auditorium - 10-250"
                },
                {
                    time: "10:30 AM - 11:00 AM",
                    type: "break",
                    title: "Coffee & Networking Break",
                    speaker: "",
                    description: "Refreshments and networking opportunities with fellow attendees.",
                    location: "Grand Hall"
                },
                {
                    time: "11:00 AM - 12:30 PM",
                    type: "workshop",
                    title: "TBD",
                    speaker: "TBD",
                    description: "TBD",
                    location: "Workshop Room A"
                },
                {
                    time: "12:30 PM - 2:00 PM",
                    type: "break",
                    title: "Lunch & Poster Session",
                    speaker: "",
                    description: "Lunch provided with opportunity to view research posters and network with presenters.",
                    location: "Grand Hall"
                },
                {
                    time: "2:00 PM - 3:30 PM",
                    type: "panel",
                    title: "TBD",
                    speaker: "TBD",
                    description: "TBD",
                    location: "Main Auditorium"
                },
                {
                    time: "3:30 PM - 4:00 PM",
                    type: "break",
                    title: "Afternoon Break",
                    speaker: "",
                    description: "Refreshments and networking.",
                    location: "Grand Hall"
                },
                {
                    time: "4:00 PM - 6:00 PM",
                    type: "poster",
                    title: "Research Poster Presentations",
                    speaker: "",
                    description: "Interactive poster session.",
                    location: "Exhibition Hall"
                }
            ]
        },
        day2: {
            date: "March 27",
            sessions: [
                {
                    time: "8:30 AM - 10:00 AM",
                    type: "keynote",
                    title: "TBD",
                    speaker: "TBD",
                    description: "TBD",
                    location: "Main Auditorium"
                },
                {
                    time: "10:00 AM - 10:30 AM",
                    type: "break",
                    title: "Coffee Break",
                    speaker: "",
                    description: "Refreshments and networking.",
                    location: "Grand Hall"
                },
                {
                    time: "10:30 AM - 12:00 PM",
                    type: "workshop",
                    title: "TBD",
                    speaker: "TBD",
                    description: "TBD",
                    location: "Workshop Room B"
                },
                {
                    time: "12:00 PM - 1:30 PM",
                    type: "break",
                    title: "Lunch & Networking",
                    speaker: "",
                    description: "Lunch provided with structured networking activities.",
                    location: "Grand Hall"
                },
                {
                    time: "1:30 PM - 3:00 PM",
                    type: "presentation",
                    title: "TBD",
                    speaker: "",
                    description: "TBD",
                    location: "Various Rooms"
                },
                {
                    time: "3:00 PM - 3:30 PM",
                    type: "break",
                    title: "Afternoon Break",
                    speaker: "",
                    description: "Refreshments and networking.",
                    location: "Grand Hall"
                },
                {
                    time: "3:30 PM - 5:00 PM",
                    type: "panel",
                    title: "TBD",
                    speaker: "TBD",
                    description: "TBD",
                    location: "Main Auditorium"
                }
            ]
        },
        day3: {
            date: "March 28",
            sessions: [
                {
                    time: "9:00 AM - 10:30 AM",
                    type: "keynote",
                    title: "TBD",
                    speaker: "TBD",
                    description: "TBD",
                    location: "Main Auditorium"
                },
                {
                    time: "10:30 AM - 11:00 AM",
                    type: "break",
                    title: "Coffee Break",
                    speaker: "",
                    description: "Refreshments and networking.",
                    location: "Grand Hall"
                },
                {
                    time: "11:00 AM - 12:30 PM",
                    type: "workshop",
                    title: "TBD",
                    speaker: "TBD",
                    description: "TBD",
                    location: "Workshop Room C"
                },
                {
                    time: "12:30 PM - 2:00 PM",
                    type: "break",
                    title: "Conference Lunch & Awards",
                    speaker: "",
                    description: "Lunch with presentation of conference awards and recognition of outstanding contributions.",
                    location: "Grand Hall"
                },
                {
                    time: "2:00 PM - 3:30 PM",
                    type: "closing",
                    title: "Conference Wrap-up & Next Steps",
                    speaker: "Conference Organizing Committee",
                    description: "Summary of conference outcomes and announcement of HSP 2027 plans.",
                    location: "Main Auditorium"
                },
                {
                    time: "3:30 PM - 5:00 PM",
                    type: "break",
                    title: "Farewell Reception",
                    speaker: "",
                    description: "Final networking opportunity with refreshments and informal discussions.",
                    location: "Grand Hall"
                }
            ]
        }
    },
    
    // FAQ Categories and Questions
    faq: {
        "Registration & Payment": [
            {
                question: "How do I register for the conference?",
                answer: "Registration will open in February 2026. You can register online through our website or contact our registration team directly. Early bird registration is available until February 28, 2026."
            },
            {
                question: "What payment methods are accepted?",
                answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. For institutional payments, we can provide invoices upon request."
            },
            {
                question: "Can I get a refund if I can't attend?",
                answer: "Full refunds are available until April 30, 2026. After that date, a 50% refund is available until May 31, 2026. No refunds will be issued after May 31, 2026."
            }
        ],
        "Abstract Submission": [
            {
                question: "What is the deadline for abstract submission?",
                answer: "The deadline for abstract submission is December 5, 2025. Late submissions will not be considered."
            },
            {
                question: "What format should my abstract be in?",
                answer: "Abstracts should be submitted in PDF format, maximum 300 words, using the template provided on our website. Include title, authors, affiliations, and a brief description of your research."
            },
            {
                question: "When will I be notified about my abstract acceptance?",
                answer: "Notification of acceptance will be sent by January 21, 2026. You will be informed about the format of your presentation (oral, poster, or workshop)."
            }
        ],
        "Conference Details": [
            {
                question: "Where is the conference being held?",
                answer: "The conference will be held at the MIT Campus in Cambridge, Massachusetts. Specific venue details and directions will be provided closer to the conference date."
            },
            {
                question: "Is accommodation included in the registration fee?",
                answer: "Accommodation is not included in the registration fee. However, we have secured discounted rates at nearby hotels. Information about accommodation options will be provided after registration."
            },
            {
                question: "Will meals be provided during the conference?",
                answer: "Yes, lunch and coffee breaks are included in the registration fee. Breakfast and dinner are not included, but there are many dining options available on campus and in the surrounding area."
            }
        ],
        "Technical Support": [
            {
                question: "What equipment will be available for presentations?",
                answer: "Each presentation room will be equipped with a computer, projector, microphone, and laser pointer. Presenters should bring their presentations on a USB drive or upload them in advance."
            },
            {
                question: "Will there be Wi-Fi available?",
                answer: "Yes, free Wi-Fi will be available throughout the conference venue. Login credentials will be provided at registration."
            }
        ]
    },
    
    // Map Locations
    mapLocations: {
        center: [42.3601, -71.0942], // MIT Center coordinates
        zoom: 16,
        venues: [
            {
                id: "main-venue",
                name: "MIT Building 10 - Main Auditorium (10-250)",
                type: "main",
                coordinates: [42.3598, -71.0921],
                description: "Room 10-250<br>Main conference venue",
                address: "MIT Building 10, 77 Massachusetts Avenue, Cambridge, MA 02139"
            },
            {
                id: "poster-venue",
                name: "MIT Building 46 - Atrium",
                type: "main",
                coordinates: [42.3619,-71.0919],
                description: "Building 46 atrium<br>Poster session venue",
                address: "MIT Building 46, 43 Vassar St, Cambridge, MA 02139"
            }
        ],
        accommodation: [
            {
                id: "le-meridien",
                name: "Le Meridien Cambridge",
                type: "accommodation",
                coordinates: [42.362114,-71.1002086],
                description: "20 Sidney Street<br>Luxury hotel near MIT",
                address: "20 Sidney Street, Cambridge, MA 02139"
            },
            {
                id: "residence-inn",
                name: "Residence Inn by Marriott Boston Cambridge",
                type: "accommodation",
                coordinates: [42.3642703,-71.088053],
                description: "6 Cambridge Center<br>Extended stay hotel",
                address: "6 Cambridge Center, Cambridge, MA 02142"
            },
            {
                id: "mariott-cambridge",
                name: "Boston Marriott Cambridge",
                type: "accommodation",
                coordinates: [42.3633289,-71.0866161],
                description: "3-star hotel",
                address: "50 Broadway, Cambridge, MA 02142"
            },
            {
                id: "marlowe",
                name: "Kimpton Marlowe Hotel",
                type: "accommodation",
                coordinates: [42.3678508,-71.0750888],
                description: "4-star hotel",
                address: "25 Edwin H Land Blvd, Cambridge, MA 02141"
            },
            {
                id: "sonesta",
                name: "The Royal Sonesta Boston",
                type: "accommodation",
                coordinates: [42.3667767,-71.0751351],
                description: "4-star hotel",
                address: "40 Edwin H Land Blvd, Cambridge, MA 02142"
            },
        ],
        dining: [
            {
                id: "stratton",
                name: "Stratton Student Center",
                type: "dining",
                coordinates: [42.3590265, -71.0947],
                description: "Building W20<br>Various dining options ($)",
                address: "84 Massachusetts Avenue, Cambridge, MA 02139"
            },
            {
                id: "chipotle",
                name: "Chipotle",
                type: "dining",
                coordinates: [42.3625961,-71.0858837],
                description: "Mexican, fast food ($)",
                address: "255 Main St, Cambridge, MA 02142"
            },
            {
                id: "a4",
                name: "Area Four",
                type: "dining",
                coordinates: [42.3631687,-71.092229],
                description: "Café ($) and Pizza ($$)",
                address: "500 Technology Square, Cambridge, MA 02139"
            },
            {
                id: "blue-bottle",
                name: "Blue Bottle Coffee",
                type: "dining",
                coordinates: [42.3632595,-71.0878557],
                description: "Coffee ($)",
                address: "88 Ames St, Cambridge, MA 02142"
            },
            {
                id: "al",
                name: "Al's Tech Square Cafe",
                type: "dining",
                coordinates: [42.3630859,-71.0933843],
                description: "Sandwich ($)",
                address: "600 Technology Square, Cambridge, MA 02139"
            },
            {
                id: "cava",
                name: "CAVA",
                type: "dining",
                coordinates: [42.3631727,-71.0880154],
                description: "Mediterranean, fast food ($)",
                address: "82 Ames St, Cambridge, MA 02142"
            },
            {
                id: "life-alive",
                name: "Life Alive Organic Cafe Kendall Square",
                type: "dining",
                coordinates: [42.3630085,-71.0884855],
                description: "Vegetarian ($)",
                address: "415 Main St, Ames St Side, Cambridge, MA 02142"
            },
            {
                id: "vester",
                name: "VESTER Cambridge",
                type: "dining",
                coordinates: [42.3631672,-71.0883456],
                description: "Vegetarian ($)",
                address: "73 Ames St, Cambridge, MA 02142"
            },
            {
                id: "flour",
                name: "Flour Bakery",
                type: "dining",
                coordinates: [42.3609644,-71.0966249],
                description: "Sandwich ($)",
                address: "190 Massachusetts Ave, Cambridge, MA 02139"
            },
            {
                id: "beantown",
                name: "Beantown Taqueria",
                type: "dining",
                coordinates: [42.3617144,-71.0972965],
                description: "Mexican ($)",
                address: "245 Massachusetts Ave, Cambridge, MA 02139"
            },
            {
                id: "muku",
                name: "Muku Ramen",
                type: "dining",
                coordinates: [42.3636457,-71.100258],
                description: "Japanese ($$)",
                address: "411 Massachusetts Ave Retail #5, Cambridge, MA 02139"
            },
            {
                id: "tatte",
                name: "Tatte Bakery & Cafe",
                type: "dining",
                coordinates: [42.3649188,-71.0827067],
                description: "Café ($)",
                address: "318 Third St, Cambridge, MA 02142"
            },
            {
                id: "cafe-luna",
                name: "Cafe Luna",
                type: "dining",
                coordinates: [42.3629198,-71.0942588],
                description: "Brunch ($$)",
                address: "612 Main St, Cambridge, MA 02139"
            },
            {
                id: "mae",
                name: "Mae Asian Eatery",
                type: "dining",
                coordinates: [42.3633755,-71.0968896],
                description: "Thai ($$)",
                address: "781 Main St, Cambridge, MA 02139"
            },
            {
                id: "desfina",
                name: "Desfina Restautant",
                type: "dining",
                coordinates: [42.3675399,-71.0811589],
                description: "Greek ($$)",
                address: "202 Third St, Cambridge, MA 02141"
            },
            {
                id: "sulmona",
                name: "Sulmona",
                type: "dining",
                coordinates: [42.3628401,-71.0938463],
                description: "Italian ($$$)",
                address: "608 Main St, Cambridge, MA 02139"
            },
            {
                id: "amelias",
                name: "Amelia's Trattoria",
                type: "dining",
                coordinates: [42.3650089,-71.0927982],
                description: "Italian ($$$)",
                address: "111 Harvard St, Cambridge, MA 02139"
            },
            {
                id: "sumiao",
                name: "Sumiao Hunan Kitchen",
                type: "dining",
                coordinates: [42.3659917,-71.0821242],
                description: "Chinese ($$$)",
                address: "270 Third St, Cambridge, MA 02142"
            },
            {
                id: "alive-and-kicking",
                name: "Alive and Kicking Lobsters",
                type: "dining",
                coordinates: [42.3626829,-71.1141081],
                description: "Seafood ($$$)",
                address: "269 Putnam Ave, Cambridge, MA 02139"
            },
            {
                id: "toscanini",
                name: "Toscanini's ice cream",
                type: "dining",
                coordinates: [42.3636316,-71.0995304],
                description: "Ice cream ($)",
                address: "899 Main St, Cambridge, MA 02139"
            },
            {
                id: "caralyst",
                name: "Caralyst Restaurant",
                type: "dining",
                coordinates: [42.3630539,-71.0917155],
                description: "American ($$$$)",
                address: "300 Technology Square, Cambridge, MA 02139"
            },
            {
                id: "oleana",
                name: "Oleana",
                type: "dining",
                coordinates: [42.3704785,-71.0972786],
                description: "Mediterranean ($$$$)",
                address: "134 Hampshire St, Cambridge, MA 02139"
            },
        ],
        transport: [
            {
                id: "kendall-mit",
                name: "Kendall/MIT Station",
                type: "transport",
                coordinates: [42.3622, -71.0864],
                description: "MBTA Red Line<br>Main public transit access",
                address: "Main Street, Cambridge, MA 02142"
            },
            {
                id: "south-station",
                name: "South Station",
                type: "transport",
                coordinates: [42.3520027,-71.0552398],
                description: "MBTA silver line SL1 departs from the airport and stops at South Station. To continue to MIT, take the Red Line towards Alewife and get off at Kendall/MIT station.",
                address: "20 Sidney Street, Cambridge, MA 02139"
            },
            {
                id: "logan-airport",
                name: "Logan Airport",
                type: "transport",
                coordinates: [42.367144,-71.0215091],
                description: "To continue to MIT, take the MBTA silver line SL1 to South Station and then take the Red Line towards Alewife and get off at Kendall/MIT station.",
                address: "Logan International Airport, Boston, MA 02128"
            }
        ],
        pointsOfInterest: [
            {
                id: "stata-center",
                name: "Stata Center",
                type: "general",
                coordinates: [42.3617, -71.0933],
                description: "MIT Building 32<br>Stata Center",
                address: "32 Vassar Street, Cambridge, MA 02139"
            },
            {
                id: "mit-museum",
                name: "MIT Museum",
                type: "general",
                coordinates: [42.3621, -71.0867],
                description: "MIT Building N52<br>Science and technology exhibits",
                address: "265 Massachusetts Avenue, Cambridge, MA 02139"
            }
        ]
    }
};

// Helper function to update page content
function updatePageContent() {
    // Update conference name and basic info
    const conferenceNames = document.querySelectorAll('.conference-name');
    conferenceNames.forEach(el => el.textContent = window.WEBSITE_CONFIG.conferenceName);
    
    const conferenceTaglines = document.querySelectorAll('.conference-tagline');
    conferenceTaglines.forEach(el => el.textContent = window.WEBSITE_CONFIG.conferenceTagline);
    
    // Update dates
    const dateElements = document.querySelectorAll('.conference-date');
    dateElements.forEach(el => el.textContent = window.WEBSITE_CONFIG.conferenceDate);
    
    // Update location
    const locationElements = document.querySelectorAll('.conference-location');
    locationElements.forEach(el => el.textContent = window.WEBSITE_CONFIG.conferenceLocation);
    
    // Update theme
    const themeElements = document.querySelectorAll('.conference-theme');
    themeElements.forEach(el => el.textContent = window.WEBSITE_CONFIG.conferenceTheme);
    
    // Update footer tagline
    const footerTaglines = document.querySelectorAll('.footer-tagline');
    footerTaglines.forEach(el => el.textContent = window.WEBSITE_CONFIG.conferenceTagline);
    
    // Update contact info
    const emailElements = document.querySelectorAll('.contact-email');
    emailElements.forEach(el => el.textContent = window.WEBSITE_CONFIG.contact.email);
    
    // Update schedule day dates
    const day1Elements = document.querySelectorAll('.schedule-day1-date');
    day1Elements.forEach(el => el.textContent = window.WEBSITE_CONFIG.schedule.day1.date);
    
    const day2Elements = document.querySelectorAll('.schedule-day2-date');
    day2Elements.forEach(el => el.textContent = window.WEBSITE_CONFIG.schedule.day2.date);
    
    const day3Elements = document.querySelectorAll('.schedule-day3-date');
    day3Elements.forEach(el => el.textContent = window.WEBSITE_CONFIG.schedule.day3.date);
}

// Run when DOM is loaded
document.addEventListener('DOMContentLoaded', updatePageContent);

// Debug logging
console.log('WEBSITE_CONFIG loaded:', window.WEBSITE_CONFIG);
console.log('Construction mode:', window.WEBSITE_CONFIG.UNDER_CONSTRUCTION_MODE);
