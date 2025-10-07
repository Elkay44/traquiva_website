# GoDaddy DNS Setup Guide - TXT Records

**For:** Traquiva Website  
**Date:** October 7, 2025  
**Purpose:** Domain verification, email authentication, and security

---

## 📋 What Are TXT Records?

TXT records are DNS records used for:
- ✅ Domain verification (Google, Microsoft, etc.)
- ✅ Email authentication (SPF, DKIM, DMARC)
- ✅ Site verification (Google Search Console, Bing)
- ✅ Security policies (CAA records)

---

## 🚀 How to Add TXT Records in GoDaddy

### **Step-by-Step Instructions:**

#### **Step 1: Log into GoDaddy**
1. Go to [https://www.godaddy.com](https://www.godaddy.com)
2. Click **Sign In** (top right)
3. Enter your username and password
4. Click **Sign In**

#### **Step 2: Access DNS Management**
1. Click on your **profile icon** (top right)
2. Select **My Products**
3. Find your domain (e.g., `traquiva.com`)
4. Click the **DNS** button next to your domain
   - Or click the **three dots (⋮)** → **Manage DNS**

#### **Step 3: Add TXT Record**
1. Scroll down to the **Records** section
2. Click **Add** button (or **Add Record**)
3. Select **TXT** from the dropdown menu
4. Fill in the fields:
   - **Name:** Enter the subdomain or `@` for root domain
   - **Value:** Enter the TXT record value
   - **TTL:** Leave default (1 hour) or set to 600 seconds
5. Click **Save**

#### **Step 4: Verify**
1. Wait 10-60 minutes for DNS propagation
2. Verify using online tools (see below)

---

## 📝 Common TXT Records to Add

### **1. Domain Verification (Google)**

**Purpose:** Verify domain ownership for Google services

**Record Details:**
```
Type: TXT
Name: @
Value: google-site-verification=YOUR_VERIFICATION_CODE
TTL: 1 Hour
```

**How to get the code:**
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your property (domain)
3. Choose **DNS verification** method
4. Copy the TXT record value
5. Add to GoDaddy

---

### **2. SPF Record (Email Authentication)**

**Purpose:** Prevent email spoofing, authorize email senders

**Record Details:**
```
Type: TXT
Name: @
Value: v=spf1 include:_spf.google.com ~all
TTL: 1 Hour
```

**Common SPF values:**

**For Google Workspace:**
```
v=spf1 include:_spf.google.com ~all
```

**For Microsoft 365:**
```
v=spf1 include:spf.protection.outlook.com ~all
```

**For SendGrid:**
```
v=spf1 include:sendgrid.net ~all
```

**For multiple services:**
```
v=spf1 include:_spf.google.com include:sendgrid.net ~all
```

---

### **3. DKIM Record (Email Signing)**

**Purpose:** Digitally sign emails to prevent tampering

**Record Details:**
```
Type: TXT
Name: default._domainkey
Value: v=DKIM1; k=rsa; p=YOUR_PUBLIC_KEY
TTL: 1 Hour
```

**How to get DKIM:**
1. Go to your email provider (Gmail, Outlook, etc.)
2. Find DKIM settings
3. Generate DKIM key
4. Copy the TXT record
5. Add to GoDaddy

**Example (Google Workspace):**
```
Name: google._domainkey
Value: v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC...
```

---

### **4. DMARC Record (Email Policy)**

**Purpose:** Define email authentication policy

**Record Details:**
```
Type: TXT
Name: _dmarc
Value: v=DMARC1; p=quarantine; rua=mailto:dmarc@traquiva.com
TTL: 1 Hour
```

**DMARC Policy Options:**
- `p=none` - Monitor only (recommended for testing)
- `p=quarantine` - Send suspicious emails to spam
- `p=reject` - Reject unauthorized emails

**Example:**
```
v=DMARC1; p=quarantine; rua=mailto:dmarc-reports@traquiva.com; ruf=mailto:dmarc-forensics@traquiva.com; pct=100
```

---

### **5. Site Verification (Multiple Services)**

**Google Search Console:**
```
Type: TXT
Name: @
Value: google-site-verification=ABC123XYZ
TTL: 1 Hour
```

**Bing Webmaster Tools:**
```
Type: TXT
Name: @
Value: msvalidate.01=ABC123XYZ
TTL: 1 Hour
```

**Facebook Domain Verification:**
```
Type: TXT
Name: @
Value: facebook-domain-verification=ABC123XYZ
TTL: 1 Hour
```

---

### **6. CAA Record (Certificate Authority Authorization)**

**Purpose:** Specify which CAs can issue SSL certificates

**Record Details:**
```
Type: CAA (or TXT if CAA not available)
Name: @
Value: 0 issue "letsencrypt.org"
TTL: 1 Hour
```

**Multiple CAs:**
```
0 issue "letsencrypt.org"
0 issue "digicert.com"
0 issuewild "letsencrypt.org"
```

---

## 🔧 Complete Setup Example

Here's a complete TXT record setup for Traquiva:

### **Records to Add:**

| Type | Name | Value | TTL |
|------|------|-------|-----|
| TXT | @ | `google-site-verification=ABC123` | 1 Hour |
| TXT | @ | `v=spf1 include:_spf.google.com ~all` | 1 Hour |
| TXT | google._domainkey | `v=DKIM1; k=rsa; p=YOUR_KEY` | 1 Hour |
| TXT | _dmarc | `v=DMARC1; p=quarantine; rua=mailto:dmarc@traquiva.com` | 1 Hour |
| TXT | @ | `facebook-domain-verification=ABC123` | 1 Hour |

---

## ⚠️ Important Notes

### **1. Multiple TXT Records on Same Name**
- ✅ You CAN have multiple TXT records with the same name
- ✅ Each serves a different purpose
- ✅ GoDaddy supports this

### **2. SPF Record Limit**
- ⚠️ Only ONE SPF record per domain
- ⚠️ Combine all email services in one SPF record
- ⚠️ Don't create multiple SPF records

**Wrong:**
```
v=spf1 include:_spf.google.com ~all
v=spf1 include:sendgrid.net ~all
```

**Correct:**
```
v=spf1 include:_spf.google.com include:sendgrid.net ~all
```

### **3. DNS Propagation Time**
- ⏱️ Changes take 10-60 minutes
- ⏱️ Full propagation: up to 48 hours
- ⏱️ Use lower TTL (600 seconds) for faster updates

### **4. Verification**
- ✅ Always verify after adding records
- ✅ Use online DNS lookup tools
- ✅ Check with service provider

---

## 🔍 How to Verify TXT Records

### **Method 1: Online Tools**

**MXToolbox:**
1. Go to [https://mxtoolbox.com/TXTLookup.aspx](https://mxtoolbox.com/TXTLookup.aspx)
2. Enter your domain: `traquiva.com`
3. Click **TXT Lookup**
4. View all TXT records

**Google Admin Toolbox:**
1. Go to [https://toolbox.googleapps.com/apps/dig/](https://toolbox.googleapps.com/apps/dig/)
2. Enter domain: `traquiva.com`
3. Select **TXT** record type
4. Click **Dig**

**WhatsMyDNS:**
1. Go to [https://www.whatsmydns.net/](https://www.whatsmydns.net/)
2. Enter domain: `traquiva.com`
3. Select **TXT** from dropdown
4. Click **Search**
5. View global propagation

### **Method 2: Command Line**

**Windows (Command Prompt):**
```cmd
nslookup -type=TXT traquiva.com
```

**Mac/Linux (Terminal):**
```bash
dig traquiva.com TXT
```

**Check specific subdomain:**
```bash
dig _dmarc.traquiva.com TXT
```

---

## 📊 Recommended TXT Records for Traquiva

### **Priority 1: Essential**
1. ✅ **Google Site Verification** - For Search Console
2. ✅ **SPF Record** - For email authentication
3. ✅ **DMARC Record** - For email security

### **Priority 2: Important**
4. ✅ **DKIM Record** - For email signing
5. ✅ **Bing Verification** - For Bing Webmaster Tools

### **Priority 3: Optional**
6. ⭕ **Facebook Verification** - If using Facebook Business
7. ⭕ **Twitter Verification** - If using Twitter Ads
8. ⭕ **CAA Record** - For SSL certificate control

---

## 🛠️ Troubleshooting

### **Problem: TXT Record Not Showing**

**Solutions:**
1. Wait 10-60 minutes for propagation
2. Clear DNS cache:
   - Windows: `ipconfig /flushdns`
   - Mac: `sudo dscacheutil -flushcache`
3. Check for typos in record value
4. Verify TTL is set correctly
5. Contact GoDaddy support

### **Problem: Multiple SPF Records**

**Solution:**
- Delete all SPF records
- Create ONE combined SPF record
- Include all email services in one record

### **Problem: Verification Failing**

**Solutions:**
1. Double-check record value (no extra spaces)
2. Ensure Name field is correct (`@` for root)
3. Wait for full DNS propagation (up to 48 hours)
4. Try verification again
5. Check DNS with online tools

---

## 📞 GoDaddy Support

**If you need help:**

**Phone Support:**
- US: 1-480-505-8877
- International: [Find your country](https://www.godaddy.com/contact-us)

**Live Chat:**
- Go to [GoDaddy Help](https://www.godaddy.com/help)
- Click **Chat with us**

**Help Center:**
- [DNS Management Help](https://www.godaddy.com/help/manage-dns-680)
- [TXT Record Help](https://www.godaddy.com/help/add-a-txt-record-19232)

---

## ✅ Quick Setup Checklist

- [ ] Log into GoDaddy account
- [ ] Navigate to DNS Management
- [ ] Add Google verification TXT record
- [ ] Add SPF record for email
- [ ] Add DKIM record (if using email)
- [ ] Add DMARC record for email security
- [ ] Add other verification records (Bing, Facebook, etc.)
- [ ] Wait 10-60 minutes for propagation
- [ ] Verify records using online tools
- [ ] Test verification with each service
- [ ] Document all records added

---

## 📝 Record Template

Use this template when adding records:

```
Domain: traquiva.com
Record Type: TXT
Name: @
Value: [PASTE YOUR VALUE HERE]
TTL: 1 Hour (or 600 seconds)
Priority: N/A (not used for TXT)
```

---

## 🎯 Summary

**To add TXT records in GoDaddy:**

1. **Login** → GoDaddy.com
2. **Navigate** → My Products → Your Domain → DNS
3. **Add Record** → Type: TXT
4. **Fill Fields** → Name, Value, TTL
5. **Save** → Click Save button
6. **Wait** → 10-60 minutes for propagation
7. **Verify** → Use online DNS tools

**Most Common TXT Records:**
- Google verification
- SPF (email authentication)
- DKIM (email signing)
- DMARC (email policy)

---

## 📚 Additional Resources

**GoDaddy Documentation:**
- [DNS Management](https://www.godaddy.com/help/manage-dns-680)
- [Add TXT Record](https://www.godaddy.com/help/add-a-txt-record-19232)
- [DNS Propagation](https://www.godaddy.com/help/dns-propagation-938)

**Verification Tools:**
- [MXToolbox TXT Lookup](https://mxtoolbox.com/TXTLookup.aspx)
- [Google Dig Tool](https://toolbox.googleapps.com/apps/dig/)
- [WhatsMyDNS](https://www.whatsmydns.net/)

**Email Authentication:**
- [SPF Record Generator](https://www.spfwizard.net/)
- [DMARC Generator](https://dmarcian.com/dmarc-record-wizard/)
- [Email Authentication Guide](https://support.google.com/a/answer/33786)

---

**Last Updated:** October 7, 2025  
**Status:** ✅ COMPLETE GUIDE

© 2025 Traquiva. All rights reserved.
