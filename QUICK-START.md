# Traquiva Website - Quick Start Guide

**Get up and running in 5 minutes!**

---

## 🚀 Quick Start

### **1. Understanding the New Structure**

Your website has been refactored into a clean, modular architecture:

```
website/
├── assets/
│   ├── css/main.css          ← All styles here
│   └── js/main.js            ← All JavaScript here
├── components/               ← Reusable components
├── template-base.html        ← Start here for new pages
└── [your existing pages]
```

---

## 📝 Creating a New Page (3 Steps)

### **Step 1: Copy the Template**

```bash
cp template-base.html my-new-page.html
```

### **Step 2: Update Meta Information**

Find and replace these placeholders:

```html
<title>[PAGE TITLE] - Traquiva</title>
<meta name="description" content="[PAGE DESCRIPTION]">
```

### **Step 3: Add Your Content**

Replace the placeholder sections with your content. Use components from `/components/` folder.

**Done!** Your new page is ready.

---

## 🎨 Using Components

### **Example: Adding a Feature Section**

1. Open `components/cards.html`
2. Find the "Feature Card" section
3. Copy the HTML
4. Paste into your page
5. Customize the content

```html
<section class="section bg-white">
    <div class="container">
        <h2 class="text-3xl font-bold text-center mb-12">Our Features</h2>
        
        <div class="grid md:grid-cols-3 gap-8">
            <!-- Paste feature card here -->
            <div class="card feature-card card-hover">
                <div class="feature-card-icon gradient-bg">
                    <svg><!-- Your icon --></svg>
                </div>
                <h3 class="card-title">Your Feature</h3>
                <p class="card-text">Your description</p>
            </div>
        </div>
    </div>
</section>
```

---

## 🎯 Common Tasks

### **Task 1: Update Navigation**

**File:** `components/navigation.html`

Edit once, and copy to all pages that need updating.

### **Task 2: Change Colors**

**File:** `assets/css/main.css`

```css
:root {
    --color-primary: #667eea;    /* Change this */
    --color-secondary: #764ba2;  /* Change this */
}
```

Changes apply to all pages automatically!

### **Task 3: Add a New Button**

Use existing button classes:

```html
<!-- Primary button -->
<a href="#" class="btn btn-primary">Click Me</a>

<!-- Secondary button -->
<a href="#" class="btn btn-secondary">Click Me</a>

<!-- Outline button -->
<a href="#" class="btn btn-outline">Click Me</a>

<!-- Large button -->
<a href="#" class="btn btn-primary btn-lg">Click Me</a>

<!-- Full width button -->
<a href="#" class="btn btn-primary btn-block">Click Me</a>
```

### **Task 4: Add a Contact Form**

**File:** `components/forms.html`

Copy the "Contact Form" section and paste into your page.

---

## 🛠️ Available Components

### **Navigation & Layout**
- ✅ Navbar (responsive with mobile menu)
- ✅ Footer (4-column with social links)
- ✅ Container (max-width wrapper)
- ✅ Section (standard spacing)

### **Hero Sections**
- ✅ Standard Hero with Code Editor
- ✅ Simple Centered Hero
- ✅ Hero with Background Image
- ✅ Hero with Stats

### **Cards (8 Types)**
- ✅ Feature Card
- ✅ Pricing Card
- ✅ Testimonial Card
- ✅ Mentor Card
- ✅ Project Card
- ✅ Blog Card
- ✅ Stat Card
- ✅ CTA Card

### **Forms (7 Types)**
- ✅ Contact Form
- ✅ Newsletter Signup
- ✅ Search Form
- ✅ Login Form
- ✅ Signup Form
- ✅ Filter Form
- ✅ Booking Form

### **Buttons**
- ✅ Primary, Secondary, Outline
- ✅ Small, Default, Large
- ✅ Block (full width)

---

## 🎨 Utility Classes

### **Backgrounds**
```html
<div class="gradient-bg">Purple-blue gradient</div>
```

### **Text**
```html
<h1 class="gradient-text">Gradient text effect</h1>
```

### **Effects**
```html
<div class="glass-effect">Glassmorphism</div>
<div class="card-hover">Hover animation</div>
```

### **Animations**
```html
<div data-aos="fade-up">Fade up on scroll</div>
<div data-aos="fade-left">Fade from left</div>
<div data-aos="zoom-in">Zoom in</div>
```

---

## 📱 Responsive Design

All components are responsive by default:

- **Mobile:** < 640px (single column)
- **Tablet:** 640px - 1024px (2 columns)
- **Desktop:** > 1024px (full layout)

No extra work needed!

---

## ✅ Checklist for New Pages

- [ ] Copy `template-base.html`
- [ ] Update page title and meta tags
- [ ] Choose a hero section from components
- [ ] Add content sections using components
- [ ] Test on mobile (resize browser)
- [ ] Check all links work
- [ ] Add to navigation menu
- [ ] Test in different browsers

---

## 🆘 Need Help?

### **For Components**
→ See `COMPONENT-LIBRARY.md`

### **For Detailed Guide**
→ See `REFACTORING-GUIDE.md`

### **For Audit Results**
→ See `AUDIT-REPORT.md`

---

## 💡 Pro Tips

### **Tip 1: Use Data Attributes for Animations**

Add smooth scroll animations:

```html
<div data-aos="fade-up" data-aos-delay="100">
    Content appears after 100ms
</div>
```

### **Tip 2: Combine Utility Classes**

```html
<div class="card feature-card card-hover">
    <!-- Multiple classes for combined effects -->
</div>
```

### **Tip 3: Use CSS Variables**

Instead of hardcoding colors:

```css
/* ❌ Don't do this */
.my-element {
    color: #667eea;
}

/* ✅ Do this */
.my-element {
    color: var(--color-primary);
}
```

### **Tip 4: Keep Components Modular**

Each component should be self-contained and reusable.

---

## 🎯 Example: Building a Complete Page

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Meta tags -->
    <title>My Page - Traquiva</title>
    
    <!-- Styles -->
    <link rel="stylesheet" href="/assets/css/main.css">
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
</head>
<body>
    
    <!-- Navigation (copy from components/navigation.html) -->
    <nav class="navbar">...</nav>
    
    <!-- Hero Section (copy from components/hero-sections.html) -->
    <section class="hero gradient-bg">...</section>
    
    <!-- Feature Section (copy cards from components/cards.html) -->
    <section class="section bg-white">
        <div class="container">
            <h2 class="text-3xl font-bold text-center mb-12">Features</h2>
            <div class="grid md:grid-cols-3 gap-8">
                <!-- Feature cards here -->
            </div>
        </div>
    </section>
    
    <!-- CTA Section -->
    <section class="section gradient-bg">
        <div class="container text-center text-white">
            <h2 class="text-4xl font-bold mb-6">Ready to Start?</h2>
            <a href="#signup" class="btn bg-white text-primary">Get Started</a>
        </div>
    </section>
    
    <!-- Footer (copy from components/footer.html) -->
    <footer class="footer">...</footer>
    
    <!-- Scripts -->
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script src="/assets/js/main.js"></script>
</body>
</html>
```

---

## 🚀 You're Ready!

You now have everything you need to:

✅ Create new pages quickly  
✅ Use reusable components  
✅ Maintain consistent design  
✅ Build world-class web pages  

**Happy coding!** 🎉

---

**Questions?** Check the full documentation:
- `COMPONENT-LIBRARY.md` - All components
- `REFACTORING-GUIDE.md` - Detailed guide
- `AUDIT-REPORT.md` - What was improved

© 2025 Traquiva. All rights reserved.
