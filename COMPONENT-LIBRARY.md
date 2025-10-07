# Traquiva Component Library

**Version:** 1.0.0  
**Last Updated:** October 7, 2025

---

## 📚 Table of Contents

1. [Introduction](#introduction)
2. [Getting Started](#getting-started)
3. [Layout Components](#layout-components)
4. [Navigation Components](#navigation-components)
5. [Hero Components](#hero-components)
6. [Card Components](#card-components)
7. [Form Components](#form-components)
8. [Button Components](#button-components)
9. [Utility Components](#utility-components)
10. [Usage Examples](#usage-examples)

---

## 🎯 Introduction

The Traquiva Component Library is a collection of reusable, production-ready UI components designed for consistency, accessibility, and ease of use. All components follow modern web standards and best practices.

### **Design Principles**

- **Modular:** Each component is self-contained and reusable
- **Consistent:** Unified design language across all components
- **Accessible:** WCAG 2.1 AA compliant
- **Responsive:** Mobile-first, works on all devices
- **Performant:** Optimized for speed and efficiency

---

## 🚀 Getting Started

### **Prerequisites**

Include these in your HTML `<head>`:

```html
<!-- Tailwind CSS -->
<script src="https://cdn.tailwindcss.com"></script>

<!-- AOS Animation Library -->
<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">

<!-- Custom Styles -->
<link rel="stylesheet" href="/assets/css/main.css">
```

Include these before closing `</body>`:

```html
<!-- AOS Animation -->
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>

<!-- Custom JavaScript -->
<script src="/assets/js/main.js"></script>
```

---

## 📐 Layout Components

### **Container**

Centers content with max-width and responsive padding.

```html
<div class="container">
    <!-- Your content -->
</div>
```

**Props:**
- Max-width: 1280px
- Responsive padding: 1rem (mobile) to 2rem (desktop)

---

### **Section**

Standard section spacing for page sections.

```html
<section class="section">
    <div class="container">
        <!-- Section content -->
    </div>
</section>
```

**Variants:**
- `.section` - Standard padding (4rem top/bottom)
- `.section-sm` - Small padding (2rem top/bottom)
- `.section-lg` - Large padding (6rem top/bottom)

---

## 🧭 Navigation Components

### **Navbar**

Responsive navigation with mobile menu.

**Location:** `components/navigation.html`

```html
<nav class="navbar">
    <div class="navbar-container">
        <a href="index.html" class="navbar-logo">
            <div class="navbar-logo-icon gradient-bg">
                <span class="text-white font-bold text-xl">T</span>
            </div>
            <span class="gradient-text">Traquiva</span>
        </a>
        
        <div class="navbar-menu">
            <a href="index.html" class="navbar-link">Home</a>
            <a href="features.html" class="navbar-link">Features</a>
            <!-- More links -->
        </div>
        
        <button class="navbar-toggle">
            <!-- Menu icon -->
        </button>
    </div>
    
    <div class="navbar-mobile-menu">
        <!-- Mobile menu links -->
    </div>
</nav>
```

**Features:**
- Fixed position at top
- Responsive mobile menu
- Active state management
- Smooth scroll behavior
- Accessible (ARIA labels)

**CSS Classes:**
- `.navbar` - Main container
- `.navbar-container` - Inner wrapper
- `.navbar-logo` - Logo link
- `.navbar-menu` - Desktop menu
- `.navbar-link` - Navigation link
- `.navbar-link.active` - Active page indicator
- `.navbar-cta` - Call-to-action button
- `.navbar-toggle` - Mobile menu button
- `.navbar-mobile-menu` - Mobile menu container

---

### **Footer**

Comprehensive footer with multiple columns.

**Location:** `components/footer.html`

```html
<footer class="footer">
    <div class="container">
        <div class="footer-grid">
            <!-- 4 columns of links -->
        </div>
        <div class="footer-bottom">
            <!-- Copyright -->
        </div>
    </div>
</footer>
```

**Features:**
- 4-column responsive grid
- Social media links
- Comprehensive site navigation
- Copyright notice

---

## 🎨 Hero Components

### **1. Standard Hero with Code Editor**

**Location:** `components/hero-sections.html` (Section 1)

```html
<section class="hero gradient-bg">
    <div class="hero-background">
        <!-- Animated blobs -->
    </div>
    <div class="container">
        <div class="grid md:grid-cols-2 gap-12 items-center">
            <div class="hero-content text-white">
                <h1 class="hero-title">...</h1>
                <p class="hero-description">...</p>
                <div class="hero-cta-group">...</div>
                <div class="hero-stats">...</div>
            </div>
            <div>
                <!-- Code editor preview -->
            </div>
        </div>
    </div>
</section>
```

**Use Case:** Landing pages, product showcases

---

### **2. Simple Centered Hero**

**Location:** `components/hero-sections.html` (Section 2)

```html
<section class="hero gradient-bg text-center">
    <div class="container">
        <div class="max-w-4xl mx-auto">
            <h1 class="hero-title text-white">...</h1>
            <p class="hero-description mx-auto">...</p>
            <div class="hero-cta-group justify-center">...</div>
        </div>
    </div>
</section>
```

**Use Case:** About pages, simple landing pages

---

### **3. Hero with Background Image**

**Location:** `components/hero-sections.html` (Section 3)

```html
<section class="relative py-32 overflow-hidden">
    <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('...');"></div>
    <div class="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-blue-900/90"></div>
    <div class="container relative z-10">
        <!-- Content -->
    </div>
</section>
```

**Use Case:** Feature pages, promotional pages

---

### **4. Hero with Stats**

**Location:** `components/hero-sections.html` (Section 4)

```html
<section class="hero gradient-bg">
    <div class="container">
        <div class="text-center text-white mb-16">
            <h1 class="hero-title">...</h1>
            <p class="hero-description mx-auto">...</p>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <!-- Stat items -->
        </div>
    </div>
</section>
```

**Use Case:** Success pages, metrics showcases

---

## 🃏 Card Components

### **1. Feature Card**

**Location:** `components/cards.html` (Section 1)

```html
<div class="card feature-card card-hover">
    <div class="feature-card-icon gradient-bg">
        <!-- Icon SVG -->
    </div>
    <h3 class="card-title">Feature Title</h3>
    <p class="card-text">Description...</p>
</div>
```

**Use Case:** Feature showcases, service listings

**CSS Classes:**
- `.card` - Base card styling
- `.feature-card` - Feature-specific styling
- `.card-hover` - Hover animation
- `.feature-card-icon` - Icon container

---

### **2. Pricing Card**

**Location:** `components/cards.html` (Section 2)

```html
<div class="card pricing-card card-hover">
    <div class="card-header text-center">
        <h3 class="card-title">Plan Name</h3>
        <div class="pricing-card-price">$29</div>
        <div class="pricing-card-period">per month</div>
    </div>
    <div class="card-body">
        <ul><!-- Features --></ul>
    </div>
    <div class="card-footer">
        <a href="#" class="btn btn-primary btn-block">Get Started</a>
    </div>
</div>
```

**Use Case:** Pricing pages, subscription plans

**Variants:**
- `.pricing-card.featured` - Highlighted plan (scaled up, different border)

---

### **3. Testimonial Card**

**Location:** `components/cards.html` (Section 3)

```html
<div class="card testimonial-card card-hover">
    <div class="card-body">
        <div class="flex items-center gap-1 mb-4">
            <!-- 5-star rating -->
        </div>
        <p class="testimonial-quote">"Quote..."</p>
        <div class="flex items-center gap-3 mt-4">
            <img src="..." class="testimonial-avatar">
            <div>
                <div class="testimonial-author">Name</div>
                <div class="testimonial-role">Role</div>
            </div>
        </div>
    </div>
</div>
```

**Use Case:** Social proof, customer reviews

---

### **4. Mentor Card**

**Location:** `components/cards.html` (Section 4)

```html
<div class="card card-hover">
    <div class="card-body">
        <div class="flex items-start gap-4 mb-4">
            <img src="..." class="w-20 h-20 rounded-full">
            <div>
                <h3 class="card-title">Mentor Name</h3>
                <p class="text-sm text-gray-500">Title</p>
                <div class="flex items-center gap-1">
                    <!-- Rating -->
                </div>
            </div>
        </div>
        <p class="card-text">Bio...</p>
        <div class="flex flex-wrap gap-2 mb-4">
            <!-- Skills badges -->
        </div>
        <div class="flex items-center justify-between">
            <div>$50/hour</div>
            <a href="#" class="btn btn-primary btn-sm">Book Session</a>
        </div>
    </div>
</div>
```

**Use Case:** Mentor listings, team profiles

---

### **5. Project Card**

**Location:** `components/cards.html` (Section 5)

```html
<div class="card card-hover">
    <div class="relative h-48 bg-gradient-to-br from-purple-500 to-blue-500">
        <!-- Project thumbnail -->
    </div>
    <div class="card-body">
        <div class="flex items-center gap-2 mb-2">
            <!-- Badges -->
        </div>
        <h3 class="card-title">Project Title</h3>
        <p class="card-text">Description...</p>
        <div class="flex items-center justify-between text-sm">
            <!-- Duration, students -->
        </div>
        <a href="#" class="btn btn-outline btn-block">Start Project</a>
    </div>
</div>
```

**Use Case:** Project galleries, course listings

---

### **6. Blog Card**

**Location:** `components/cards.html` (Section 6)

```html
<div class="card card-hover">
    <img src="..." class="w-full h-48 object-cover">
    <div class="card-body">
        <div class="flex items-center gap-2 mb-3 text-sm text-gray-500">
            <span>Date</span>
            <span>•</span>
            <span>Read time</span>
        </div>
        <h3 class="card-title">Blog Title</h3>
        <p class="card-text">Excerpt...</p>
        <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
                <img src="..." class="w-8 h-8 rounded-full">
                <span>Author</span>
            </div>
            <a href="#" class="text-primary">Read More →</a>
        </div>
    </div>
</div>
```

**Use Case:** Blog listings, article previews

---

### **7. Stat Card**

**Location:** `components/cards.html` (Section 7)

```html
<div class="card text-center card-hover">
    <div class="card-body">
        <div class="w-16 h-16 mx-auto mb-4 gradient-bg rounded-full flex items-center justify-center">
            <!-- Icon -->
        </div>
        <div class="text-4xl font-bold gradient-text mb-2">10,000+</div>
        <div class="text-gray-600">Active Students</div>
    </div>
</div>
```

**Use Case:** Statistics, metrics display

---

### **8. CTA Card**

**Location:** `components/cards.html` (Section 8)

```html
<div class="card gradient-bg text-white card-hover">
    <div class="card-body text-center">
        <h3 class="text-2xl font-bold mb-4">Ready to Start?</h3>
        <p class="text-lg mb-6">Join thousands of students...</p>
        <div class="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#" class="btn bg-white text-primary">Start Free</a>
            <a href="#" class="btn btn-outline">Watch Demo</a>
        </div>
    </div>
</div>
```

**Use Case:** Call-to-action sections, conversion points

---

## 📝 Form Components

### **1. Contact Form**

**Location:** `components/forms.html` (Section 1)

```html
<form id="contact-form" class="space-y-6">
    <div class="form-group">
        <label for="name" class="form-label">Full Name *</label>
        <input type="text" id="name" class="form-input" required>
    </div>
    <!-- More fields -->
    <button type="submit" class="btn btn-primary btn-lg btn-block">
        Send Message
    </button>
</form>
```

**Features:**
- Real-time validation
- Error messages
- Required field indicators
- Accessible labels

---

### **2. Newsletter Signup**

**Location:** `components/forms.html` (Section 2)

```html
<form id="newsletter-form" class="flex flex-col sm:flex-row gap-3">
    <input type="email" class="form-input flex-1" placeholder="Enter your email" required>
    <button type="submit" class="btn btn-primary">Subscribe</button>
</form>
```

**Use Case:** Newsletter signups, email collection

---

### **3. Search Form**

**Location:** `components/forms.html` (Section 3)

```html
<form class="relative">
    <input type="search" class="form-input pl-10" placeholder="Search...">
    <svg class="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2">
        <!-- Search icon -->
    </svg>
</form>
```

**Use Case:** Site search, content filtering

---

## 🔘 Button Components

### **Primary Button**

```html
<a href="#" class="btn btn-primary">Primary Action</a>
```

**Variants:**
- `.btn-primary` - Main call-to-action (gradient background)
- `.btn-secondary` - Secondary action (outlined)
- `.btn-outline` - Transparent with border

**Sizes:**
- `.btn-sm` - Small button
- `.btn` - Default size
- `.btn-lg` - Large button

**Modifiers:**
- `.btn-block` - Full width button

---

## 🛠️ Utility Components

### **Gradient Background**

```html
<div class="gradient-bg">
    <!-- Content with purple-blue gradient -->
</div>
```

---

### **Gradient Text**

```html
<h1 class="gradient-text">Gradient Text</h1>
```

---

### **Glass Effect**

```html
<div class="glass-effect">
    <!-- Glassmorphism effect -->
</div>
```

---

### **Animations**

```html
<!-- Fade up on scroll -->
<div data-aos="fade-up">Content</div>

<!-- Fade up with delay -->
<div data-aos="fade-up" data-aos-delay="200">Content</div>

<!-- Other animations -->
<div data-aos="fade-left">Content</div>
<div data-aos="fade-right">Content</div>
<div data-aos="zoom-in">Content</div>
```

---

## 💡 Usage Examples

### **Creating a Feature Section**

```html
<section class="section bg-white">
    <div class="container">
        <h2 class="text-3xl font-bold text-center mb-12" data-aos="fade-up">
            Our Features
        </h2>
        
        <div class="grid md:grid-cols-3 gap-8">
            <!-- Feature Card 1 -->
            <div class="card feature-card card-hover" data-aos="fade-up" data-aos-delay="100">
                <div class="feature-card-icon gradient-bg">
                    <svg><!-- Icon --></svg>
                </div>
                <h3 class="card-title">Feature One</h3>
                <p class="card-text">Description of feature one.</p>
            </div>
            
            <!-- Feature Card 2 -->
            <div class="card feature-card card-hover" data-aos="fade-up" data-aos-delay="200">
                <!-- ... -->
            </div>
            
            <!-- Feature Card 3 -->
            <div class="card feature-card card-hover" data-aos="fade-up" data-aos-delay="300">
                <!-- ... -->
            </div>
        </div>
    </div>
</section>
```

---

### **Creating a Pricing Section**

```html
<section class="section bg-gray-50">
    <div class="container">
        <h2 class="text-3xl font-bold text-center mb-12">Choose Your Plan</h2>
        
        <div class="grid md:grid-cols-3 gap-8">
            <!-- Pricing Card -->
            <div class="card pricing-card card-hover">
                <div class="card-header text-center">
                    <h3 class="card-title">Free</h3>
                    <div class="pricing-card-price">$0</div>
                    <div class="pricing-card-period">forever</div>
                </div>
                <div class="card-body">
                    <ul class="space-y-3">
                        <li class="flex items-start gap-2">
                            <svg class="w-5 h-5 text-green-500"><!-- Check --></svg>
                            <span>Feature 1</span>
                        </li>
                        <!-- More features -->
                    </ul>
                </div>
                <div class="card-footer">
                    <a href="#" class="btn btn-primary btn-block">Get Started</a>
                </div>
            </div>
            <!-- More pricing cards -->
        </div>
    </div>
</section>
```

---

## 📱 Responsive Behavior

All components are mobile-first and responsive:

- **Mobile (< 640px):** Single column, stacked layout
- **Tablet (640px - 1024px):** 2-column grid where applicable
- **Desktop (> 1024px):** Full multi-column layout

---

## ♿ Accessibility

All components include:

- ✅ Semantic HTML
- ✅ ARIA labels where needed
- ✅ Keyboard navigation support
- ✅ Focus states
- ✅ Screen reader friendly
- ✅ Color contrast compliance

---

## 🎨 Customization

### **Changing Colors**

Edit CSS variables in `/assets/css/main.css`:

```css
:root {
    --color-primary: #667eea;    /* Change this */
    --color-secondary: #764ba2;  /* And this */
}
```

### **Changing Fonts**

Update the font import and variable:

```css
@import url('https://fonts.googleapis.com/css2?family=YourFont&display=swap');

:root {
    --font-family-base: 'YourFont', sans-serif;
}
```

---

## 📞 Support

For component-specific questions:
- Check the component file in `/components/`
- Review `/assets/css/main.css` for styling
- See `template-base.html` for usage examples

---

**Component Library Version:** 1.0.0  
**Last Updated:** October 7, 2025  
**Status:** ✅ Production Ready

© 2025 Traquiva. All rights reserved.
