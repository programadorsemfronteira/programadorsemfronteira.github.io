# Portfolio implementation rules

## Editorial split sections

For every desktop portfolio section that uses the editorial two-column pattern
of **title/narrative on the left** and **longer content on the right**, the left
column must be sticky beneath the fixed header while the right column scrolls.
It must release naturally when its parent section ends. Use `position: sticky`
with the established `96px` top offset and do not put the sticky element inside
an ancestor with `overflow` other than `visible` or a transform-based reveal
animation.

On screens at or below 800px, collapse these sections to normal linear content
flow; do not make the left column sticky.

Use this pattern for future portfolio sections and keep the shared CSS selector
updated when a qualifying section is added.

### Right-side entry reveals

For the scrolling content on the right of an editorial split section, apply
`data-reveal-on-view` to its single main content container, not to individual
entries. The complete right column should reveal together as that container
enters the browser viewport, conceal itself after leaving, and reveal again
when revisited. Put the concealed state in the document head (before first
paint), not only in a deferred script; this prevents the content flashing
visible before the observer runs. Animate only the right container, never the
split-section container or sticky left column, since transforms on an ancestor
can break sticky positioning. Respect `prefers-reduced-motion`.

### Capability-to-work links

Every capability item in an editorial right-side list must be a full-row link
to its matching localized Work page query (`/{{ page.lang }}/work/?tags=...`).
Keep the capability's normalized tag in the localized portfolio data and apply
that tag to every matching project, so the link always produces the mapped
experience rather than an empty result.

## Portfolio hero images

Every prominent portfolio hero image must include the established pointer-hover
interaction. Put `data-interactive-hero` on an image-frame wrapper and include a
`data-hero-glare` descendant so the shared interaction script can initialize it.
Keep captions, legends, and other layout elements outside the transformed
wrapper; only the image frame may tilt. The effect must reset on pointer exit and
remain disabled for coarse pointers and `prefers-reduced-motion`.

Hero-image legends must be fully readable and intentionally composed at every
breakpoint. When a legend overlaps the image edge, keep the figure overflow
visible, clip only inside the image-frame wrapper, and reserve enough surrounding
space for the overlap. Use separate localized fields for the legend's primary and
secondary ideas when the design aligns them independently. Before considering a
hero complete, verify the resting state, active hover state, pointer-exit reset,
desktop layout, and mobile layout; a clipped or missing legend and an inert image
are regressions.

## Localized editorial copy

Every user-facing sentence, label, accessibility description, control name,
date caption, and visual legend must use the language selected for that page.
Do not leave shared includes or data files with English fallback copy that can
appear on Portuguese or Spanish pages. Product names, technology names, code,
and normalized filter tags may remain unchanged, but visible tag labels must be
localized when they are ordinary language rather than proper technical names.

Do not use em dashes (Unicode U+2014) anywhere in authored copy, templates,
styles, instructions, or generated pages. Rewrite the sentence with commas,
parentheses, a colon, or a full stop instead. Use a regular hyphen for compact
date ranges. Before completing copy or localization work, build the site, run
`ruby test/content_localization_test.rb`, and search the source and generated
site for Unicode U+2014.
