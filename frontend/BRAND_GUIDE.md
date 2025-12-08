# KIONI Brand Visual Identity Guide

## Color Palette

### Primary Colors
- **KIONI Deep Indigo** `#0E0E2C` - Intelligence, stability, premium
- **Solar Gold** `#F3C623` - Insight, clarity, value
- **Tech Slate** `#3C3F53` - Precision, neutrality
- **Pure White** `#FFFFFF` - Clean UI, enterprise feel

### Secondary Accent Colors
- **Pulse Cyan** `#00E5FF` - Data flow, connectivity
- **Aurora Green** `#00C88F` - Growth, trust
- **Earth Terracotta** `#C96F48` - Subtle African warmth

## Usage Rules

### Color Combinations
- **Indigo + Gold** = Logo & official documents (premium positioning)
- **Indigo + Cyan** = Technical dashboards (data-driven interface)
- **White + Slate** = UI backgrounds (clean, professional)

### Application
- **Primary Background**: Deep Indigo (#0E0E2C)
- **Card Background**: Indigo Light (#1A1A3F) with glass effect
- **Active States**: Cyan with neon pulse effects
- **Premium Highlights**: Gold accents on key features
- **Success States**: Aurora Green for positive feedback

## Typography

### Headlines
**Font**: Space Grotesk Bold
- Modern, geometric, powerful
- Used for all h1-h6 headings
- Tracked tight for premium feel

### Body Text
**Font**: Inter Regular
- Clean, readable, scalable
- Used by Stripe, Linear, Notion
- Primary font for all body copy

### Code & Technical
**Font**: JetBrains Mono
- Monospace for logs, code blocks
- Technical documentation

## Motion & Animation

### Brand Animations
- **Neon Pulse**: Soft cyan pulses on interactive elements
- **Data Flow**: Liquid gradient animations for dashboards
- **Circular Transitions**: Smooth scale and rotation effects
- **Gold Sweep**: Sweeping gold highlights on premium elements
- **Cyan Glow**: Text shadow effects on headings

### Micro-interactions
- Smooth transitions (200ms default)
- Scale on hover (1.05x)
- Subtle shadows and glows
- Glassmorphism with backdrop blur

## Component Patterns

### Cards
- Background: Indigo Light with opacity
- Border: Cyan/Gold with 30-50% opacity
- Hover: Border brightens, shadow glows
- Effect: glass-effect class with blur

### Buttons
- Background: Cyan to Gold gradient (primary)
- Text: Indigo on gradient background
- Hover: Enhanced shadow with brand color
- Disabled: Reduced opacity (50%)

### Navigation
- Background: Indigo Light with cyan border
- Active: Cyan text with neon pulse
- Hover: Cyan text with subtle background
- Underline: Cyan to Gold gradient

## Visual Principles

1. **Premium Minimalism**: Clean layouts, purposeful use of color
2. **Futuristic Clarity**: Glowing accents, neon effects
3. **African Heritage**: Warm terracotta accents sparingly
4. **Enterprise Trust**: Structured layouts, professional typography
5. **Automated Intelligence**: Flowing animations, data-driven visualization

## Asset Files

✅ Color variables defined in `tailwind.config.js`
✅ Animations defined in `styles/globals.css`
✅ Utility classes available: `.glass-effect-cyan`, `.neon-pulse`, `.liquid-flow`
✅ Brand colors accessible via `bg-kioni-*` and `text-kioni-*`

## Implementation

All components use Tailwind CSS utilities with brand colors:
```jsx
className="bg-kioni-indigo-light border-kioni-cyan/50 text-kioni-gold"
```

CSS custom properties available for advanced styling:
```css
--color-indigo: #0E0E2C;
--color-gold: #F3C623;
--color-cyan: #00E5FF;
```
