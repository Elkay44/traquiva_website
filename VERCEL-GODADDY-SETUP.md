# Connect Vercel to GoDaddy Domain - Complete Guide

**Domain:** traquiva.com  
**Hosting:** Vercel  
**Registrar:** GoDaddy  
**Date:** October 7, 2025

---

## 🚀 Quick Fix Steps

### **Step 1: Add Domain in Vercel**

1. **Go to Vercel Dashboard**
   - Login at [vercel.com](https://vercel.com)
   - Select your project (Traquiva website)

2. **Add Custom Domain**
   - Click **Settings** tab
   - Click **Domains** in sidebar
   - Enter: `traquiva.com`
   - Click **Add**

3. **Add WWW Domain (Optional)**
   - Click **Add Domain** again
   - Enter: `www.traquiva.com`
   - Click **Add**

4. **Get DNS Records**
   - Vercel will show you the DNS records needed
   - Keep this page open

---

### **Step 2: Add DNS Records in GoDaddy**

1. **Login to GoDaddy**
   - Go to [godaddy.com](https://www.godaddy.com)
   - Sign in to your account

2. **Access DNS Management**
   - Click profile icon → **My Products**
   - Find `traquiva.com`
   - Click **DNS** button

3. **Remove Existing A Records (If Any)**
   - Look for existing A records with Name: `@`
   - Click the **pencil icon** or **trash icon**
   - Delete any old A records

4. **Add Vercel A Record**
   - Click **Add** button
   - Select **A** from dropdown
   - Fill in:
     ```
     Type: A
     Name: @
     Value: 76.76.21.21
     TTL: 1 Hour (or 600 seconds)
     ```
   - Click **Save**

5. **Add CNAME for WWW**
   - Click **Add** button again
   - Select **CNAME** from dropdown
   - Fill in:
     ```
     Type: CNAME
     Name: www
     Value: cname.vercel-dns.com
     TTL: 1 Hour
     ```
   - Click **Save**

---

### **Step 3: Verify in Vercel**

1. **Go Back to Vercel**
   - Return to your Vercel dashboard
   - Go to Settings → Domains

2. **Wait for Verification**
   - Vercel will automatically check DNS
   - Status will change from "Invalid Configuration" to "Valid Configuration"
   - This takes 10-60 minutes

3. **Check Status**
   - ✅ Green checkmark = Working!
   - ⚠️ Yellow warning = Still propagating (wait)
   - ❌ Red error = Check DNS records

---

## 📋 Complete DNS Configuration

### **Required Records in GoDaddy:**

| Type | Name | Value | TTL | Purpose |
|------|------|-------|-----|---------|
| A | @ | 76.76.21.21 | 1 Hour | Main domain |
| CNAME | www | cname.vercel-dns.com | 1 Hour | WWW subdomain |

### **Optional but Recommended:**

| Type | Name | Value | TTL | Purpose |
|------|------|-------|-----|---------|
| TXT | @ | google-site-verification=... | 1 Hour | Google verification |
| TXT | @ | v=spf1 include:_spf.google.com ~all | 1 Hour | Email authentication |
| TXT | _dmarc | v=DMARC1; p=quarantine; rua=mailto:dmarc@traquiva.com | 1 Hour | Email security |

---

## 🔍 Verify DNS Configuration

### **Method 1: Check in Vercel**

1. Go to Vercel Dashboard
2. Settings → Domains
3. Look for green checkmarks next to domains
4. Click **Refresh** if needed

### **Method 2: Online DNS Checker**

1. Go to [https://www.whatsmydns.net/](https://www.whatsmydns.net/)
2. Enter: `traquiva.com`
3. Select: **A** record
4. Click **Search**
5. Should show: `76.76.21.21` globally

### **Method 3: Command Line**

**Check A Record:**
```bash
nslookup traquiva.com
```

**Should return:**
```
Name:    traquiva.com
Address: 76.76.21.21
```

**Check CNAME:**
```bash
nslookup www.traquiva.com
```

**Should return:**
```
www.traquiva.com    canonical name = cname.vercel-dns.com
```

---

## ⏱️ How Long Does It Take?

**DNS Propagation Timeline:**
- **Minimum:** 10-30 minutes
- **Average:** 1-2 hours
- **Maximum:** 24-48 hours (rare)

**What to do while waiting:**
- ✅ Clear your browser cache
- ✅ Clear DNS cache on your computer
- ✅ Try different browser/device
- ✅ Use incognito/private mode
- ✅ Check on mobile data (different network)

---

## 🧹 Clear DNS Cache

### **Windows:**
```cmd
ipconfig /flushdns
```

### **Mac:**
```bash
sudo dscacheutil -flushcache
sudo killall -HUP mDNSResponder
```

### **Linux:**
```bash
sudo systemd-resolve --flush-caches
```

### **Chrome Browser:**
1. Go to: `chrome://net-internals/#dns`
2. Click **Clear host cache**
3. Restart browser

---

## 🔧 Troubleshooting

### **Problem 1: "Invalid Configuration" in Vercel**

**Cause:** DNS records not set up correctly

**Solution:**
1. Double-check DNS records in GoDaddy
2. Ensure A record value is exactly: `76.76.21.21`
3. Ensure CNAME value is exactly: `cname.vercel-dns.com`
4. No extra spaces or typos
5. Wait 30-60 minutes
6. Click **Refresh** in Vercel

---

### **Problem 2: "DNS_PROBE_FINISHED_NXDOMAIN" Still Showing**

**Cause:** DNS not propagated yet

**Solution:**
1. Wait longer (up to 2 hours)
2. Clear DNS cache (see above)
3. Try different network/device
4. Verify DNS records are correct
5. Check nameservers (should be GoDaddy's)

---

### **Problem 3: WWW Not Working**

**Cause:** Missing CNAME record

**Solution:**
1. Add CNAME record in GoDaddy:
   ```
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```
2. Wait 10-30 minutes
3. Test: `http://www.traquiva.com`

---

### **Problem 4: SSL Certificate Error**

**Cause:** Vercel hasn't issued SSL yet

**Solution:**
1. Wait for DNS to propagate fully
2. Vercel auto-issues SSL (takes 1-2 hours)
3. Check Vercel dashboard for SSL status
4. If stuck, remove and re-add domain in Vercel

---

### **Problem 5: Wrong Nameservers**

**Cause:** Domain using wrong nameservers

**Solution:**
1. In GoDaddy, go to DNS Management
2. Scroll to **Nameservers** section
3. Should show:
   ```
   ns1.domaincontrol.com
   ns2.domaincontrol.com
   ```
4. If different, click **Change**
5. Select **Use GoDaddy nameservers**
6. Save and wait 24-48 hours

---

## 🎯 Step-by-Step Visual Guide

### **In Vercel:**

```
1. Dashboard → Your Project
2. Settings → Domains
3. Add Domain: traquiva.com
4. Add Domain: www.traquiva.com
5. Copy DNS records shown
```

### **In GoDaddy:**

```
1. My Products → traquiva.com → DNS
2. Add A Record:
   Name: @
   Value: 76.76.21.21
3. Add CNAME:
   Name: www
   Value: cname.vercel-dns.com
4. Save all changes
```

### **Verify:**

```
1. Wait 30-60 minutes
2. Check Vercel dashboard (green checkmarks)
3. Visit: https://traquiva.com
4. Visit: https://www.traquiva.com
5. Both should work!
```

---

## ✅ Final Checklist

### **In Vercel:**
- [ ] Domain `traquiva.com` added
- [ ] Domain `www.traquiva.com` added
- [ ] Both show green checkmarks (or waiting)
- [ ] SSL certificate issued (automatic)

### **In GoDaddy:**
- [ ] A record added: `@ → 76.76.21.21`
- [ ] CNAME added: `www → cname.vercel-dns.com`
- [ ] No conflicting A records
- [ ] Using GoDaddy nameservers
- [ ] Changes saved

### **Testing:**
- [ ] Waited 30-60 minutes
- [ ] Cleared DNS cache
- [ ] `traquiva.com` loads website
- [ ] `www.traquiva.com` loads website
- [ ] HTTPS works (green padlock)
- [ ] No SSL errors

---

## 🌐 What Your DNS Should Look Like

### **In GoDaddy DNS Management:**

```
Records:
┌──────────┬──────┬─────────────────────────┬────────┐
│ Type     │ Name │ Value                   │ TTL    │
├──────────┼──────┼─────────────────────────┼────────┤
│ A        │ @    │ 76.76.21.21            │ 1 Hour │
│ CNAME    │ www  │ cname.vercel-dns.com   │ 1 Hour │
│ TXT      │ @    │ google-site-verification│ 1 Hour │
│ TXT      │ @    │ v=spf1 include:...     │ 1 Hour │
└──────────┴──────┴─────────────────────────┴────────┘

Nameservers:
- ns1.domaincontrol.com
- ns2.domaincontrol.com
```

---

## 🚀 Expected Timeline

**Immediate (0-5 minutes):**
- ✅ DNS records added in GoDaddy
- ✅ Domain added in Vercel

**Short term (10-30 minutes):**
- ✅ DNS starts propagating
- ✅ Some locations can access site
- ⚠️ Vercel shows "Pending Verification"

**Medium term (30-60 minutes):**
- ✅ DNS fully propagated
- ✅ Vercel shows green checkmarks
- ✅ Website accessible globally
- ⚠️ SSL certificate being issued

**Complete (1-2 hours):**
- ✅ SSL certificate issued
- ✅ HTTPS working
- ✅ Both traquiva.com and www.traquiva.com work
- ✅ Green padlock in browser

---

## 📞 Support Resources

### **Vercel Support:**
- **Documentation:** [vercel.com/docs/custom-domains](https://vercel.com/docs/concepts/projects/domains)
- **Support:** [vercel.com/support](https://vercel.com/support)
- **Community:** [github.com/vercel/vercel/discussions](https://github.com/vercel/vercel/discussions)

### **GoDaddy Support:**
- **Phone:** 1-480-505-8877
- **Chat:** [godaddy.com/help](https://www.godaddy.com/help)
- **DNS Help:** [godaddy.com/help/manage-dns-680](https://www.godaddy.com/help/manage-dns-680)

---

## 💡 Pro Tips

### **1. Use Lower TTL During Setup**
- Set TTL to 600 seconds (10 minutes)
- Faster propagation during testing
- Change back to 1 hour after confirmed working

### **2. Add Both Domains in Vercel**
- Add `traquiva.com` (primary)
- Add `www.traquiva.com` (redirect)
- Vercel auto-redirects www to non-www (or vice versa)

### **3. Enable HTTPS Redirect**
- Vercel does this automatically
- All HTTP traffic redirects to HTTPS
- No configuration needed

### **4. Monitor DNS Propagation**
- Use [whatsmydns.net](https://www.whatsmydns.net/)
- Check multiple locations worldwide
- Green = propagated, Red = not yet

### **5. Test from Different Networks**
- Your ISP may cache DNS longer
- Test on mobile data
- Test from different location/VPN
- Use incognito mode

---

## 🎉 Success Indicators

**You'll know it's working when:**

1. ✅ **Vercel Dashboard:**
   - Green checkmarks next to both domains
   - SSL certificate shows "Active"
   - No error messages

2. ✅ **Browser:**
   - `https://traquiva.com` loads your website
   - `https://www.traquiva.com` loads your website
   - Green padlock icon (secure)
   - No SSL warnings

3. ✅ **DNS Tools:**
   - whatsmydns.net shows `76.76.21.21` globally
   - nslookup returns correct IP
   - No NXDOMAIN errors

---

## 📝 Quick Reference

**Vercel A Record IP:**
```
76.76.21.21
```

**Vercel CNAME:**
```
cname.vercel-dns.com
```

**GoDaddy DNS Records:**
```
A Record:
- Name: @
- Value: 76.76.21.21

CNAME Record:
- Name: www
- Value: cname.vercel-dns.com
```

**Verification URLs:**
- [whatsmydns.net](https://www.whatsmydns.net/)
- [mxtoolbox.com](https://mxtoolbox.com/SuperTool.aspx)
- [dnschecker.org](https://dnschecker.org/)

---

## ✅ Summary

**To connect Vercel to GoDaddy:**

1. **In Vercel:** Add domains (traquiva.com + www.traquiva.com)
2. **In GoDaddy:** Add A record (76.76.21.21) + CNAME (cname.vercel-dns.com)
3. **Wait:** 30-60 minutes for DNS propagation
4. **Verify:** Check Vercel dashboard for green checkmarks
5. **Test:** Visit https://traquiva.com

**That's it!** Your website will be live on your custom domain.

---

**Last Updated:** October 7, 2025  
**Status:** ✅ COMPLETE SETUP GUIDE

© 2025 Traquiva. All rights reserved.
