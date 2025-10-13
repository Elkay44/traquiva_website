#!/bin/bash

# Apply Mobile Fix to All HTML Pages
# This script adds overflow-x: hidden to prevent horizontal scroll on mobile

echo "🔧 Applying mobile fix to all HTML pages..."
echo "==========================================="

WEBSITE_DIR="/Users/lukman.ibrahim/idea 1/website"

# The CSS fix to add
MOBILE_FIX='
        /* Prevent horizontal scroll and white space on mobile */
        html, body {
            max-width: 100%;
            overflow-x: hidden;
            position: relative;
        }
        
        * { 
            font-family: '\''Inter'\'', sans-serif;
            scroll-behavior: smooth;
        }
        
        /* Ensure all sections stay within viewport */
        section, div {
            max-width: 100%;
        }
'

# List of files to update (excluding already fixed ones)
FILES=(
    "about.html"
    "blog.html"
    "features.html"
    "mentors.html"
    "pricing.html"
    "privacy.html"
    "success.html"
    "terms.html"
)

echo "📦 Creating backups..."
mkdir -p "$WEBSITE_DIR/backups"

for file in "${FILES[@]}"; do
    if [ -f "$WEBSITE_DIR/$file" ]; then
        echo "🔧 Fixing $file..."
        
        # Backup
        cp "$WEBSITE_DIR/$file" "$WEBSITE_DIR/backups/$file.bak" 2>/dev/null
        
        # Check if fix already applied
        if grep -q "overflow-x: hidden" "$WEBSITE_DIR/$file"; then
            echo "   ✓ Already fixed, skipping..."
        else
            # Find the style tag and add the fix after @import
            if grep -q "@import url" "$WEBSITE_DIR/$file"; then
                # Add after @import line
                sed -i '' '/@ import url.*Inter/a\
\
        /* Prevent horizontal scroll and white space on mobile */\
        html, body {\
            max-width: 100%;\
            overflow-x: hidden;\
            position: relative;\
        }\
        \
        /* Ensure all sections stay within viewport */\
        section, div {\
            max-width: 100%;\
        }\
' "$WEBSITE_DIR/$file"
                echo "   ✓ Fixed!"
            else
                echo "   ⚠ No @import found, manual fix needed"
            fi
        fi
    else
        echo "   ⚠ File not found: $file"
    fi
done

echo ""
echo "✅ Mobile fix applied!"
echo "==========================================="
echo ""
echo "📋 Summary:"
echo "  - Fixed horizontal scroll issue"
echo "  - Prevented white space on mobile"
echo "  - Applied to all main pages"
echo ""
echo "💾 Backups saved to: $WEBSITE_DIR/backups/"
echo ""
echo "🎉 Done! Test your website on mobile now."
