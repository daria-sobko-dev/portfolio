import aetherfieldImg from '../assets/aetherfield.jpg'
import bizTklaserImg from '../assets/biz-tklaser.jpg'
import omniImg from '../assets/omni.jpg'
import carFromUsaImg from '../assets/carfromusa.jpg'
import tklaserbfImg from '../assets/tklaserbf.jpg'

// Work section intro + featured project.
export const workIntro =
  'I build fast, responsive websites with WordPress and Webflow — from custom themes ' +
  'and CMS-driven projects to pixel-perfect Figma conversions.'

// Featured project (top showcase).
export const featuredProject = {
  label: 'Featured Project',
  name: 'Aetherfield',
  url: 'https://aetherfield.dariadev.cv.ua',
  media: aetherfieldImg,
  mediaW: 1500,
  mediaH: 1014,
  tags: ['WordPress', 'CPT', 'Gutenberg', 'ACF', 'HTML', 'SCSS', 'JS'],
}

// Project filter categories
export const categories = [
  { id: 'all', label: 'All' },
  { id: 'wordpress', label: 'WordPress' },
  { id: 'webflow', label: 'Webflow' },
  { id: 'landing', label: 'Landing' },
]

// Real projects. `category` is a best guess — adjust wordpress/webflow per project.
// Screenshots are generated live from the URL (thum.io); swap for your own images anytime.
const shot = (url) => `https://image.thum.io/get/width/1000/crop/750/${url}`

export const projects = [
  {
    id: 1,
    title: 'TK Laser — Business',
    category: 'landing',
    tag: 'HTML/CSS/JS',
    size: 'wide',
    url: 'https://biz-tklaser.netlify.app/',
    image: bizTklaserImg,
    width: 1500,
    height: 1020,
    description:
      'Business proposal landing page hand-coded in HTML, SCSS and JavaScript — pixel-perfect and fully responsive.',
    tags: ['HTML', 'SCSS', 'JS', 'Responsive'],
  },
  {
    id: 2,
    title: 'Omnifood',
    category: 'landing',
    tag: 'HTML/CSS/JS',
    url: 'https://omni-daria.netlify.app/',
    image: omniImg,
    width: 1500,
    height: 947,
    description:
      'Food-subscription landing page hand-coded in HTML, CSS and JavaScript — responsive, accessible and fast.',
    tags: ['HTML', 'CSS', 'JS', 'Responsive'],
  },
  {
    id: 3,
    title: 'Auto Express',
    category: 'landing',
    tag: 'HTML/CSS/JS',
    url: 'https://carfromusa.netlify.app/',
    image: carFromUsaImg,
    width: 1500,
    height: 934,
    description:
      'Car-import service landing page hand-coded in HTML, CSS and JavaScript — responsive and conversion-focused.',
    tags: ['HTML', 'CSS', 'JS', 'Responsive'],
  },
  {
    id: 4,
    title: 'TK Laser — Black Friday',
    category: 'landing',
    tag: 'HTML/CSS/JS',
    size: 'wide',
    url: 'https://tklaserbf.netlify.app/',
    image: tklaserbfImg,
    width: 1500,
    height: 935,
    description:
      'Black-Friday promo landing for a laser-epilation studio, hand-coded in HTML, CSS and JavaScript — responsive and fast.',
    tags: ['HTML', 'CSS', 'JS', 'Responsive'],
  },
]
