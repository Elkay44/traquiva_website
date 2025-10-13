#!/bin/bash

# Traquiva Website - Link Fixer Script
# This script updates all broken links across all HTML files

echo "🔧 Fixing links across all website pages..."
echo "==========================================="

# Define the website directory
WEBSITE_DIR="/Users/lukman.ibrahim/idea 1/website"

# Backup original files
echo "📦 Creating backups..."
mkdir -p "$WEBSITE_DIR/backups"
cp "$WEBSITE_DIR"/*.html "$WEBSITE_DIR/backups/" 2>/dev/null

# Fix login links
echo "🔗 Fixing login links..."
find "$WEBSITE_DIR" -name "*.html" -type f -exec sed -i '' 's|href="#login"|href="http://localhost:3000/login"|g' {} \;
find "$WEBSITE_DIR" -name "*.html" -type f -exec sed -i '' 's|href="/login"|href="http://localhost:3000/login"|g' {} \;

# Fix signup links
echo "🔗 Fixing signup links..."
find "$WEBSITE_DIR" -name "*.html" -type f -exec sed -i '' 's|href="#signup"|href="http://localhost:3000/signup"|g' {} \;
find "$WEBSITE_DIR" -name "*.html" -type f -exec sed -i '' 's|href="/signup"|href="http://localhost:3000/signup"|g' {} \;

# Update all projects-improved.html references to projects.html
echo "🔗 Updating projects page references..."
find "$WEBSITE_DIR" -name "*.html" -type f -exec sed -i '' 's|href="projects-improved.html"|href="projects.html"|g' {} \;

# Remove or comment out broken links
echo "🗑️  Removing broken links..."
find "$WEBSITE_DIR" -name "*.html" -type f -exec sed -i '' 's|href="#demo"|href="https://www.youtube.com/watch?v=demo" target="_blank"|g' {} \;
find "$WEBSITE_DIR" -name "*.html" -type f -exec sed -i '' 's|href="#cookies"|href="privacy.html#cookies"|g' {} \;

echo ""
echo "✅ All links fixed!"
echo "==========================================="
echo ""
echo "📋 Summary:"
echo "  - Login links → http://localhost:3000/login"
echo "  - Signup links → http://localhost:3000/signup"
echo "  - Projects page → projects.html (with working filters)"
echo "  - Demo links → YouTube (placeholder)"
echo "  - Cookie links → privacy.html#cookies"
echo ""
echo "💾 Backups saved to: $WEBSITE_DIR/backups/"
echo ""
echo "🎉 Done! Test your website now."
