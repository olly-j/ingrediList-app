/* ============================================
   IngrediList - Dynamic Contrast Handler
   Runtime contrast adjustment and adaptive overlay management
   ============================================ */

(function() {
  'use strict';

  // Contrast calculation utilities
  class ContrastHandler {
    constructor() {
      this.contrastThreshold = 4.5; // WCAG AA minimum
      this.observer = null;
      this.init();
    }

    init() {
      // Wait for DOM to be ready
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => this.setup());
      } else {
        this.setup();
      }
    }

    setup() {
      this.checkAllElements();
      this.setupMutationObserver();
      this.setupIntersectionObserver();
      this.setupThemeToggle();
    }

    /**
     * Calculate luminance of a color (RGB)
     * @param {number} r - Red component (0-255)
     * @param {number} g - Green component (0-255)
     * @param {number} b - Blue component (0-255)
     * @returns {number} Luminance value (0-1)
     */
    getLuminance(r, g, b) {
      const [rs, gs, bs] = [r, g, b].map(val => {
        val = val / 255;
        return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
      });
      return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
    }

    /**
     * Parse hex color to RGB
     * @param {string} hex - Hex color string
     * @returns {Object} RGB values
     */
    hexToRgb(hex) {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      } : null;
    }

    /**
     * Calculate contrast ratio between two colors
     * @param {string} color1 - Hex color string
     * @param {string} color2 - Hex color string
     * @returns {number} Contrast ratio
     */
    getContrastRatio(color1, color2) {
      const rgb1 = this.hexToRgb(color1);
      const rgb2 = this.hexToRgb(color2);
      
      if (!rgb1 || !rgb2) return 0;

      const lum1 = this.getLuminance(rgb1.r, rgb1.g, rgb1.b);
      const lum2 = this.getLuminance(rgb2.r, rgb2.g, rgb2.b);

      const lighter = Math.max(lum1, lum2);
      const darker = Math.min(lum1, lum2);

      return (lighter + 0.05) / (darker + 0.05);
    }

    /**
     * Get computed background color of an element
     * @param {Element} element - DOM element
     * @returns {string} Background color
     */
    getBackgroundColor(element) {
      const computed = window.getComputedStyle(element);
      let bgColor = computed.backgroundColor;

      // Try to get background from parent if transparent
      if (bgColor === 'rgba(0, 0, 0, 0)' || bgColor === 'transparent') {
        const parent = element.parentElement;
        if (parent) {
          bgColor = this.getBackgroundColor(parent);
        } else {
          bgColor = document.body.style.backgroundColor || '#FFFFFF';
        }
      }

      // Convert rgb() to hex if needed
      const rgbMatch = bgColor.match(/\d+/g);
      if (rgbMatch && rgbMatch.length >= 3) {
        const [r, g, b] = rgbMatch.map(Number);
        return this.rgbToHex(r, g, b);
      }

      return bgColor;
    }

    /**
     * Convert RGB to hex
     */
    rgbToHex(r, g, b) {
      return '#' + [r, g, b].map(x => {
        const hex = x.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
      }).join('');
    }

    /**
     * Get text color of an element
     * @param {Element} element - DOM element
     * @returns {string} Text color
     */
    getTextColor(element) {
      const computed = window.getComputedStyle(element);
      const color = computed.color;

      // Convert rgb() to hex
      const rgbMatch = color.match(/\d+/g);
      if (rgbMatch && rgbMatch.length >= 3) {
        const [r, g, b] = rgbMatch.map(Number);
        return this.rgbToHex(r, g, b);
      }

      return color;
    }

    /**
     * Check if element needs contrast adjustment
     * @param {Element} element - DOM element
     * @returns {boolean} True if adjustment needed
     */
    needsContrastAdjustment(element) {
      const textColor = this.getTextColor(element);
      const bgColor = this.getBackgroundColor(element);
      
      if (!bgColor || !textColor) return false;

      const contrast = this.getContrastRatio(textColor, bgColor);
      
      return contrast < this.contrastThreshold;
    }

    /**
     * Apply contrast adjustment to element
     * @param {Element} element - DOM element
     */
    applyContrastAdjustment(element) {
      if (element.dataset.contrastAdjusted === 'true') return;

      // Add overlay class
      element.classList.add('glass-card-text');
      element.dataset.contrastAdjusted = 'true';
    }

    /**
     * Check all text elements on page
     */
    checkAllElements() {
      const textElements = document.querySelectorAll('p, li, span, h1, h2, h3, h4, h5, h6, a, .hero-subtitle, .feature-card p');

      textElements.forEach(element => {
        if (this.needsContrastAdjustment(element)) {
          // Find parent card or container
          const card = element.closest('.glass-card, .hero, .feature-card, .privacy-banner, .cta-banner');
          if (card) {
            this.applyContrastAdjustment(card);
          }
        }
      });
    }

    /**
     * Setup mutation observer for dynamic content
     */
    setupMutationObserver() {
      this.observer = new MutationObserver(() => {
        setTimeout(() => this.checkAllElements(), 100);
      });

      this.observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['class', 'style']
      });
    }

    /**
     * Setup intersection observer for scroll-triggered animations
     */
    setupIntersectionObserver() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Check contrast when element comes into view
            const element = entry.target;
            if (this.needsContrastAdjustment(element)) {
              this.applyContrastAdjustment(element);
            }
          }
        });
      }, { threshold: 0.1 });

      // Observe all text containers
      document.querySelectorAll('.glass-card, .hero, .feature-card').forEach(el => {
        observer.observe(el);
      });
    }

    /**
     * Setup theme toggle functionality
     */
    setupThemeToggle() {
      const toggle = document.getElementById('theme-toggle');
      if (!toggle) return;

      toggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Re-check contrast after theme change
        setTimeout(() => this.checkAllElements(), 100);
      });

      // Load saved theme
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
      }
    }

    /**
     * Enable adaptive overlay mode
     * @param {Element} element - Element to enable overlay on
     */
    enableAdaptiveOverlay(element) {
      element.classList.add('adaptive-overlay');
    }

    /**
     * Auto-adjust overlay strength based on contrast
     */
    autoAdjustOverlays() {
      document.querySelectorAll('.text-overlay, .glass-card-text').forEach(element => {
        if (this.needsContrastAdjustment(element)) {
          // Increase overlay opacity
          element.style.setProperty('--overlay-opacity', '0.9');
        } else {
          // Reset to default
          element.style.setProperty('--overlay-opacity', '0.85');
        }
      });
    }
  }

  // Initialize contrast handler
  if (typeof window !== 'undefined') {
    window.contrastHandler = new ContrastHandler();
  }

  // Export for testing
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = ContrastHandler;
  }

})();
