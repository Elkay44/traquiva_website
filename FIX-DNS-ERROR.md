# Fix DNS_PROBE_FINISHED_NXDOMAIN Error

**Error:** "This site can't be reached - DNS_PROBE_FINISHED_NXDOMAIN"  
**Domain:** traquiva.com  
**Date:** October 7, 2025

---

## 🔍 What This Error Means

**DNS_PROBE_FINISHED_NXDOMAIN** means:
- ❌ Domain doesn't exist in DNS
- ❌ DNS records not configured
- ❌ Domain not pointing to any server
- ❌ Nameservers not set up correctly

**In simple terms:** Your domain exists, but it's not connected to a website yet.

---

## ✅ How to Fix It

### **Solution 1: Add A Record (Point Domain to Server)**

This is the MAIN fix you need!

#### **Step 1: Get Your Server IP Address**

**If using hosting provider:**
- Check your hosting account for IP address
- Common providers:
  - **Vercel:** Automatic (use CNAME)
  - **Netlify:** Automatic (use CNAME)
  - **AWS/DigitalOcean:** Check dashboard for IP
  - **Shared Hosting:** Check cPanel/hosting panel

**If you don't have hosting yet:**
- You need to deploy your website first
- See "Deployment Options" below

#### **Step 2: Add A Record in GoDaddy**

1. **Login to GoDaddy**
   - Go to [godaddy.com](https://www.godaddy.com)
   - Sign in

2. **Access DNS Management**
   - My Products → Your Domain → **DNS**

3. **Add A Record**
   - Click **Add** button
   - Select **A** from dropdown
   - Fill in:
     ```
     Type: A
     Name: @
     Value: YOUR_SERVER_IP (e.g., 192.0.2.1)
     TTL: 1 Hour
     ```
   - Click **Save**

4. **Add WWW Record (Optional but Recommended)**
   - Click **Add** again
   - Select **A** from dropdown
   - Fill in:
     ```
     Type: A
     Name: www
     Value: YOUR_SERVER_IP (same as above)
     TTL: 1 Hour
     ```
   - Click **Save**

5. **Wait 10-60 minutes** for DNS propagation

---

### **Solution 2: Use CNAME (For Modern Hosting)**

**If using Vercel, Netlify, GitHub Pages, etc.**

#### **For Vercel:**

1. **In Vercel Dashboard:**
   - Add domain: `traquiva.com`
   - Vercel will give you DNS records

2. **In GoDaddy DNS:**
   - Add A Record:
     ```
     Type: A
     Name: @
     Value: 76.76.21.21
     TTL: 1 Hour
     ```
   - Add CNAME for www:
     ```
     Type: CNAME
     Name: www
     Value: cname.vercel-dns.com
     TTL: 1 Hour
     ```

#### **For Netlify:**

1. **In Netlify Dashboard:**
   - Site Settings → Domain Management
   - Add custom domain: `traquiva.com`

2. **In GoDaddy DNS:**
   - Add A Record:
     ```
     Type: A
     Name: @
     Value: 75.2.60.5
     TTL: 1 Hour
     ```
   - Add CNAME for www:
     ```
     Type: CNAME
     Name: www
     Value: YOUR-SITE.netlify.app
     TTL: 1 Hour
     ```

#### **For GitHub Pages:**

1. **In GitHub Repository:**
   - Settings → Pages
   - Add custom domain: `traquiva.com`

2. **In GoDaddy DNS:**
   - Add A Records (all 4):
     ```
     Type: A, Name: @, Value: 185.199.108.153
     Type: A, Name: @, Value: 185.199.109.153
     Type: A, Name: @, Value: 185.199.110.153
     Type: A, Name: @, Value: 185.199.111.153
     ```
   - Add CNAME for www:
     ```
     Type: CNAME
     Name: www
     Value: YOUR-USERNAME.github.io
     TTL: 1 Hour
     ```

---

### **Solution 3: Check Nameservers**

Your domain must use GoDaddy nameservers (or your hosting provider's).

#### **Check Current Nameservers:**

1. **In GoDaddy:**
   - My Products → Domain → DNS
   - Scroll to **Nameservers** section
   - Should show:
     ```
     ns1.domaincontrol.com
     ns2.domaincontrol.com
     ```

2. **If Different:**
   - Click **Change**
   - Select **Use GoDaddy nameservers**
   - Click **Save**
   - Wait 24-48 hours for propagation

#### **Verify Nameservers Online:**

1. Go to [https://www.whatsmydns.net/](https://www.whatsmydns.net/)
2. Enter: `traquiva.com`
3. Select: **NS** (Nameserver)
4. Click **Search**
5. Should show GoDaddy nameservers globally

---

## 🚀 Quick Fix Checklist

### **Step 1: Deploy Your Website**
- [ ] Choose hosting provider (Vercel, Netlify, etc.)
- [ ] Upload your website files
- [ ] Get deployment URL or IP address

### **Step 2: Configure DNS in GoDaddy**
- [ ] Login to GoDaddy
- [ ] Go to DNS Management
- [ ] Add A record pointing to server IP
- [ ] Add CNAME for www (optional)
- [ ] Save changes

### **Step 3: Wait & Verify**
- [ ] Wait 10-60 minutes
- [ ] Test: `http://traquiva.com`
- [ ] Test: `http://www.traquiva.com`
- [ ] Check DNS propagation online

---

## 🌐 Recommended Hosting Options

### **Option 1: Vercel (Recommended for Static Sites)**

**Pros:**
- ✅ Free tier
- ✅ Automatic HTTPS
- ✅ Fast CDN
- ✅ Easy deployment
- ✅ Perfect for HTML/CSS/JS sites

**Setup:**
1. Sign up at [vercel.com](https://vercel.com)
2. Import your GitHub repo or upload files
3. Add custom domain: `traquiva.com`
4. Follow Vercel's DNS instructions
5. Add records to GoDaddy

**DNS Records for Vercel:**
```
Type: A, Name: @, Value: 76.76.21.21
Type: CNAME, Name: www, Value: cname.vercel-dns.com
```

---

### **Option 2: Netlify**

**Pros:**
- ✅ Free tier
- ✅ Automatic HTTPS
- ✅ Form handling
- ✅ Continuous deployment

**Setup:**
1. Sign up at [netlify.com](https://netlify.com)
2. Drag & drop your website folder
3. Add custom domain
4. Add DNS records to GoDaddy

**DNS Records for Netlify:**
```
Type: A, Name: @, Value: 75.2.60.5
Type: CNAME, Name: www, Value: YOUR-SITE.netlify.app
```

---

### **Option 3: GitHub Pages (Free)**

**Pros:**
- ✅ Completely free
- ✅ Easy if using GitHub
- ✅ Good for static sites

**Setup:**
1. Create GitHub repository
2. Upload website files
3. Enable GitHub Pages in settings
4. Add custom domain
5. Add DNS records to GoDaddy

**DNS Records for GitHub Pages:**
```
Type: A, Name: @, Value: 185.199.108.153
Type: A, Name: @, Value: 185.199.109.153
Type: A, Name: @, Value: 185.199.110.153
Type: A, Name: @, Value: 185.199.111.153
Type: CNAME, Name: www, Value: YOUR-USERNAME.github.io
```

---

## 🔧 Complete DNS Setup Example

Here's what your GoDaddy DNS should look like:

### **For Vercel Hosting:**

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | 76.76.21.21 | 1 Hour |
| CNAME | www | cname.vercel-dns.com | 1 Hour |
| TXT | @ | google-site-verification=... | 1 Hour |
| TXT | @ | v=spf1 include:_spf.google.com ~all | 1 Hour |

### **For Traditional Hosting (with IP):**

| Type | Name | Value | TTL |
|------|------|-------|-----|
| A | @ | 192.0.2.1 (your server IP) | 1 Hour |
| A | www | 192.0.2.1 (same IP) | 1 Hour |
| TXT | @ | google-site-verification=... | 1 Hour |
| TXT | @ | v=spf1 include:_spf.google.com ~all | 1 Hour |

---

## 🔍 How to Verify DNS is Working

### **Method 1: Online Tools**

**Check DNS Propagation:**
1. Go to [https://www.whatsmydns.net/](https://www.whatsmydns.net/)
2. Enter: `traquiva.com`
3. Select: **A** record
4. Click **Search**
5. Should show your server IP globally

**Check All Records:**
1. Go to [https://mxtoolbox.com/SuperTool.aspx](https://mxtoolbox.com/SuperTool.aspx)
2. Enter: `traquiva.com`
3. View all DNS records

### **Method 2: Command Line**

**Windows:**
```cmd
nslookup traquiva.com
```

**Mac/Linux:**
```bash
dig traquiva.com
```

**Should return:**
```
traquiva.com.  3600  IN  A  YOUR_SERVER_IP
```

---

## ⏱️ DNS Propagation Time

**How long it takes:**
- **Minimum:** 10-30 minutes
- **Average:** 1-2 hours
- **Maximum:** 24-48 hours (rare)

**Speed it up:**
- Use lower TTL (600 seconds)
- Clear your DNS cache
- Use different network/device to test

**Clear DNS Cache:**

**Windows:**
```cmd
ipconfig /flushdns
```

**Mac:**
```bash
sudo dscacheutil -flushcache
sudo killall -HUP mDNSResponder
```

**Linux:**
```bash
sudo systemd-resolve --flush-caches
```

**Chrome Browser:**
```
chrome://net-internals/#dns
Click "Clear host cache"
```

---

## 🚨 Common Mistakes to Avoid

### **1. No A Record**
❌ **Problem:** Domain has no A record  
✅ **Solution:** Add A record pointing to server IP

### **2. Wrong IP Address**
❌ **Problem:** A record points to wrong IP  
✅ **Solution:** Verify IP with hosting provider

### **3. Missing WWW Record**
❌ **Problem:** `www.traquiva.com` doesn't work  
✅ **Solution:** Add CNAME or A record for `www`

### **4. Wrong Nameservers**
❌ **Problem:** Using wrong nameservers  
✅ **Solution:** Use GoDaddy nameservers or hosting provider's

### **5. Not Waiting for Propagation**
❌ **Problem:** Testing immediately after changes  
✅ **Solution:** Wait 10-60 minutes minimum

---

## 📞 Need Help?

### **GoDaddy Support:**
- **Phone:** 1-480-505-8877
- **Chat:** [godaddy.com/help](https://www.godaddy.com/help)
- **Help:** [DNS Management Guide](https://www.godaddy.com/help/manage-dns-680)

### **Hosting Provider Support:**
- **Vercel:** [vercel.com/support](https://vercel.com/support)
- **Netlify:** [netlify.com/support](https://www.netlify.com/support/)
- **GitHub:** [docs.github.com/pages](https://docs.github.com/pages)

---

## ✅ Summary: Fix DNS Error

**The error means your domain isn't connected to a website.**

**To fix:**

1. **Deploy your website** to a hosting provider
2. **Get server IP** or DNS records from hosting
3. **Add A record** in GoDaddy DNS:
   - Type: A
   - Name: @
   - Value: Your server IP
4. **Wait 10-60 minutes** for DNS propagation
5. **Test** your website

**Recommended hosting:** Vercel (free, easy, fast)

**Need immediate help?** Contact GoDaddy support or your hosting provider.

---

**Last Updated:** October 7, 2025  
**Status:** ✅ COMPLETE FIX GUIDE

© 2025 Traquiva. All rights reserved.
