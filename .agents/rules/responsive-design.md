# Responsive Design Rules

## 1. Breakpoint Philosophy
The website must be crafted intentionally for every viewport, not simply squished:
- **Mobile Small**: 320px – 375px (iPhone SE, compact devices)
- **Mobile Standard**: 375px – 430px (modern smartphones)
- **Tablet**: 768px – 1023px (iPads, tablets in portrait/landscape)
- **Laptop / Desktop**: 1024px – 1440px (MacBook, standard 1080p monitors)
- **Large Desktop**: 1440px+ (ultra-wides, 4k screens)

## 2. Layout Constraints & Touch Targets
- Zero horizontal overflow (`overflow-x-hidden` at layout wrapper, proper width clamping).
- Interactive touch targets must meet min 44x44px bounding area on mobile (`min-h-[44px] min-w-[44px]`).
- Typography scaling: Use fluid or responsive type scales (`text-3xl sm:text-4xl md:text-5xl lg:text-6xl`).
- Navigation: Elegant drawer or overlay menu on `< 1024px` with clear keyboard trap and focus restoration.
- Case study metadata grids: Multi-column on desktop (`grid-cols-3` or `grid-cols-4`), collapsing gracefully to 2 columns on tablet and 1 column on mobile.
