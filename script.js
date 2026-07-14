// RVITM Admission Guide — shared script
// All navigation is done with real <a href> links, so no JS is required
// for the site to function. This file is kept small and unobtrusive,
// reserved for any future enhancement (e.g. smooth-scroll fallback).

document.addEventListener('DOMContentLoaded', function () {
  // Smooth-scroll polyfill isn't needed (handled via CSS `scroll-behavior`),
  // but we nudge focus to the target section for accessibility when
  // navigating via anchor links (e.g. common-info.html#fee-receipt).
  if (window.location.hash) {
    var target = document.querySelector(window.location.hash);
    if (target) {
      target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
    }
  }
});
