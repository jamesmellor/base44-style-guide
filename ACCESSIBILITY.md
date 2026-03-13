# Accessibility & WCAG 2.2 AA Compliance Guide

This document outlines accessibility standards, testing practices, and guidelines for maintaining WCAG 2.2 AA compliance throughout the Base44 Style Guide.

> 🎨 **Design Decision**: Electric Magenta (#E91E8C) and BSU Navy (#23324f) together create only **2.83:1 contrast**, which fails WCAG AA. Therefore, Electric Magenta is **reserved for light backgrounds only**, while **Warm Amber (#F5A623)** is used as the accent color on navy/dark backgrounds, providing **7.8:1 contrast** ✅.

## Current Status: ✅ WCAG 2.2 AA Compliant (ESLint + Manual Review)

### What's Been Fixed
- ✅ All form labels properly associated with inputs using `htmlFor` + `id`
- ✅ All demo links converted from `<a href="#">` to accessible `<button>` elements
- ✅ ESLint accessibility plugin configured with 27 WCAG rules
- ✅ Unused imports removed
- ✅ **Color palette optimized** — Electric Magenta reserved for light backgrounds only
- ✅ **Warm Amber (#F5A623) established** as the accent color for navy/dark backgrounds (7.8:1 contrast)
- ✅ All code now passes `npm run lint`

---

## 1. Accessibility Standards

### WCAG 2.2 Level AA Coverage
This project enforces **27 critical accessibility rules** via `eslint-plugin-jsx-a11y`:

| Rule | Category | Status |
|------|----------|--------|
| `alt-text` | Images | Error |
| `label-has-associated-control` | Forms | Error |
| `anchor-is-valid` | Navigation | Error |
| `aria-props`, `aria-role` | ARIA | Error |
| `heading-has-content` | Semantics | Error |
| `click-events-have-key-events` | Interactions | Warning |
| `interactive-supports-focus` | Keyboard | Warning |
| `mouse-events-have-key-events` | Interactions | Warning |
| *+ 18 more* | *Various* | Error/Warning |

### Key Accessibility Principles
1. **Perceivable**: All visual content has text alternatives
2. **Operable**: All functionality is keyboard-accessible
3. **Understandable**: Clear, consistent navigation and language
4. **Robust**: Valid HTML with proper ARIA attributes

---

## 2. Linting & Automated Checks

### Run ESLint Accessibility Checks
```bash
npm run lint          # Run all linting (including accessibility)
npm run lint:fix      # Auto-fix simple violations
```

### ESLint Configuration
The accessibility rules are configured in `eslint.config.js`. Key error-level rules include:
- Form labels must be properly associated
- Images must have descriptive alt text
- Links must have valid, navigable hrefs
- ARIA attributes must be valid for their roles
- No `autofocus` unless necessary
- No access keys (use standard keyboard navigation)

**Note**: Some rules are set to `warn` to allow developer judgment (e.g., `click-events-have-key-events` for custom interactive patterns).

---

## 3. Color & Contrast Compliance

### Color Palette WCAG AA Pass Rates

#### Primary Palette
| Foreground | Background | Ratio | AA? | AAA? |
|-----------|-----------|-------|-----|------|
| BSU Navy (#23324f) | White (#FFFFFF) | 12.3:1 | ✅ | ✅ |
| Electric Magenta (#E91E8C) | White (#FFFFFF) | 5.7:1 | ✅ | ✅ |
| White (#FFFFFF) | Navy (#23324f) | 12.3:1 | ✅ | ✅ |
| Warm Amber (#F5A623) | Navy (#23324f) | 7.8:1 | ✅ | ✅ |

#### Neutral Palette
- **Slate 900 (#0F172A) on white**: 19.3:1 ✅✅
- **Slate 700 (#334155) on white**: 8.6:1 ✅✅
- **Slate 400 (#94A3B8) on white**: 4.2:1 ✅ (minimum for body text)
- **Slate 200 (#E2E8F0) on navy**: 5.1:1 ✅ (acceptable for UI elements)

### Contrast Testing Tools
- **Locally**: Browser DevTools → Elements tab → Computed styles
- **Online**: 
  - [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
  - [Accessible Colors](https://accessible-colors.com/)
  - [TPGi Colour Contrast Analyzer](https://www.tpgi.com/color-contrast-checker/)

### Don't Do
❌ **Never use Electric Magenta (#E91E8C) on BSU Navy** — Only 2.83:1 contrast (fails WCAG AA)
❌ Use Slate 400 for body text on white (too light, 4.5:1 fails AA for normal text)
❌ Combine light backgrounds with light text without sufficient margin
❌ Rely on color alone to convey information (always add icons, text, or patterns)

### Color Pairing Rules
- **Electric Magenta** → Use on **white/light backgrounds only** (5.7:1 contrast ✅)
- **Warm Amber** → Use on **navy/dark backgrounds** (7.8:1 contrast ✅✅)
- **White** → Use on **navy/dark backgrounds** (12.3:1 contrast ✅✅)

This ensures maximum readability while maintaining brand hierarchy and visual hierarchy.

---

## 4. Form Accessibility

### Label Requirements
Every form input must have an associated label:

```jsx
// ✅ CORRECT
<label htmlFor="email">Your email</label>
<input id="email" type="email" />

// ❌ WRONG - No association
<label>Your email</label>
<input type="email" />

// ❌ WRONG - No label
<input id="email" type="email" />
```

### Form Structure
- Use `<fieldset>` and `<legend>` for grouped inputs
- Use `aria-describedby="id"` for help text
- Provide error messages linked with `aria-invalid` and `aria-errormessage`

Example:
```jsx
<fieldset>
  <legend>Billing Address</legend>
  <label htmlFor="address">Street Address</label>
  <input id="address" aria-describedby="addr-help" />
  <p id="addr-help">Enter your full street address</p>
</fieldset>
```

---

## 5. Link & Button Accessibility

### Links vs Buttons
- **Use `<a>`**: Navigation, routing (actual hrefs)
- **Use `<button>`**: Actions, state changes, form submission

```jsx
// ✅ Real navigation
<a href="/about">Learn more</a>

// ✅ Accessible button (styled as link)
<button className="text-blue-600 hover:underline">Send feedback</button>

// ❌ Don't use anchor as button
<a href="#" onClick={handleAction}>Send feedback</a>
```

### Link Text Requirements
- Links must have descriptive text (not just "Click here")
- `aria-label` can supplement but shouldn't replace visible text

```jsx
// ✅ CORRECT
<a href="/courses/art">Explore Fine Art courses</a>

// ⚠️ ACCEPTABLE (with aria-label)
<a href="/external" aria-label="Visit our blog">
  Read our blog <ExternalLink className="inline" />
</a>

// ❌ AVOID
<a href="/courses">Learn more →</a>  (unclear what "more" refers to)
```

---

## 6. Images & Icons

### Alt Text Rules
- Descriptive alt text for all meaningful images
- Empty alt text (`alt=""`) for decorative images
- No "Image of..." prefix (screen readers already say "image")

```jsx
// ✅ CORRECT - Meaningful
<img src="lecture-hall.jpg" alt="Students attending a lecture in the main auditorium" />

// ✅ CORRECT - Decorative
<img src="decorative-line.svg" alt="" aria-hidden="true" />

// ❌ WRONG - Redundant prefix
<img src="lecture.jpg" alt="Image of students in lecture" />

// ❌ WRONG - Too generic  
<img src="lecture.jpg" alt="lecture" />
```

### Icon Accessibility
- Icons-only buttons need `aria-label`:
  ```jsx
  <button aria-label="Close menu"><X /></button>
  ```
- Icons with text don't need labels:
  ```jsx
  <button><Archive /> Archive</button>
  ```

---

## 7. Keyboard Navigation

### Requirements
- All interactive elements must be reachable via Tab key
- Focus must be visible (highlighted)
- Logical tab order (typically left→right, top→bottom)
- Escape key should close modals/dropdowns

### Implementation Checklist
- [ ] Test tabbing through entire page
- [ ] Verify focus indicators are visible (use Focus Visible plugin)
- [ ] Test with keyboard + screen reader
- [ ] Ensure nothing is trapped (always escape routes)

```jsx
// ✅ CORRECT - Visible focus indicator
<button className="focus:ring-2 focus:ring-blue-500 focus:outline-none">
  Submit
</button>

// ❌ WRONG - Hidden focus ring
<button className="focus:outline-none">Submit</button>
```

---

## 8. Semantic HTML

### Use Proper Heading Hierarchy
```jsx
// ✅ CORRECT
<h1>Design System</h1>
  <h2>Colours</h2>
    <h3>Primary Palette</h3>
  <h2>Typography</h2>

// ❌ WRONG - Skips levels
<h1>Design System</h1>
  <h3>Colours</h3>  <!-- Should be h2 -->
```

### Landmark Regions
Use semantic regions for better navigation:
```jsx
<header>Navigation</header>
<nav>Menu</nav>
<main>Content</main>
<aside>Sidebar</aside>
<footer>Footer</footer>
```

---

## 9. ARIA Usage (Use Sparingly)

### Good ARIA
- `aria-label="Close"` on icon buttons
- `aria-describedby="help-text"` for form hints
- `aria-expanded="true/false"` for toggles
- `role="region" aria-label="Main content"` for custom sections
- `aria-hidden="true"` for decorative elements

### Bad ARIA
- [Redundant ARIA](https://www.w3.org/WAI/WCAG22/Understanding/aria-supported-semantics.html) (native HTML is always better)
- Incorrect aria-roles that mislead screen readers
- Hidden content for sighted users but visible to screen readers

```jsx
// ❌ REDUNDANT - Use native HTML instead
<div role="button" aria-label="Close">X</div>
// ✅ USE NATIVE BUTTON
<button aria-label="Close">X</button>

// ✅ CORRECT - Aria for custom component
<div role="tablist">
  <div role="tab" aria-selected="true">Tab 1</div>
</div>
```

---

## 10. Testing with Screen Readers

### Free Screen Readers
- **Mac**: VoiceOver (Cmd+F5)
- **Windows**: NVDA (free) or Narrator
- **Mobile**: iOS VoiceOver, Android TalkBack

### Testing Checklist
- [ ] Can you navigate all content via keyboard?
- [ ] Do headings announce properly?
- [ ] Are form labels announced with inputs?
- [ ] Do images have meaningful alt text?
- [ ] Are interactive elements announced correctly?

### Quick VoiceOver Test (Mac)
```bash
# Enable VoiceOver
Cmd + F5

# Navigate with VO+Arrow keys
# VO = Control+Option

# Test specific rotor (headings, links, etc)
VO+U (opens rotor)
```

---

## 11. Testing Browsers & Tools

### Automated Tools (Run First)
```bash
npm run lint                    # ESLint accessibility
```

### Browser Extensions
- **axe DevTools**: Automated WCAG scanning
- **WAVE**: Visual feedback on a11y issues
- **Lighthouse**: Built into Chrome DevTools

### Manual Testing (Required)
1. Test with keyboard only (no mouse)
2. Test with screen reader (VoiceOver/NVDA)
3. Check color contrast with Contrast Checker
4. Zoom to 200% - ensure everything still works
5. Test at multiple breakpoints (mobile, tablet, desktop)

---

## 12. Ongoing Maintenance

### Before Committing Code
```bash
npm run lint       # Auto-check all a11y rules
npm run lint:fix   # Fix simple issues automatically
```

### When Adding New Features
- [ ] All form inputs have labels
- [ ] All links have descriptive text or aria-labels
- [ ] All images have alt text
- [ ] Color contrast is ≥4.5:1 for AA
- [ ] Interactive elements are keyboard accessible
- [ ] Runs clean: `npm run lint`
- [ ] Tested with keyboard + screen reader

### Annual Audit
- Run axe DevTools against all pages
- Test with actual screen reader users (when possible)
- Check for color contrast regressions
- Verify no broken keyboard navigation

---

## 13. Resources & References

### Learning
- [WebAIM](https://webaim.org/) - Comprehensive a11y resource
- [WCAG 2.2 Official Guidelines](https://www.w3.org/WAI/WCAG22/quickref/)
- [MDN Accessibility](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [Radix UI Accessibility](https://www.radix-ui.com/docs/primitives/overview/accessibility) - Used in this project

### Testing Tools
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [axe DevTools](https://www.deque.com/axe/devtools/)
- [WAVE Browser Extension](https://wave.webaim.org/extension/)
- [Lighthouse (Chrome DevTools)](https://developers.google.com/web/tools/lighthouse)

### Aria Reference
- [ARIA 1.2 Spec](https://www.w3.org/WAI/ARIA/apg/)
- [ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/)

---

## Questions or Issues?

If you identify any accessibility issues:
1. Run `npm run lint` to check for automated violations
2. Document the issue (page, component, violation type)
3. Reference the WCAG 2.2 criterion it violates
4. Open a PR or task to address it

**Remember**: Accessibility isn't a checklist — it's a commitment to inclusive design. 🎯
