---
title: How to block distracting sites on Mac
date: 2025-09-19
tags: general
---

Every time we visit a website our OS checks a file called `/etc/hosts` before it ever reaches our DNS server. If it finds an entry for that domain, it uses the address we've got listed there instead of looking it up.

By pointing a domain to `0.0.0.0` (which is known as a "non routable address") the request goes nowhere and the site will just not load.

The first step is to edit the `/etc/hosts` file. The file is owned by root, so we'll need `sudo`:

```sh
sudo vim /etc/hosts
```

You can use any editor you prefer, it doesn't need to be vim.

And then add the following to the end of the file (or anywhere, really):

```
# Blocked sites
0.0.0.0 reddit.com
0.0.0.0 www.reddit.com
0.0.0.0 old.reddit.com
0.0.0.0 x.com
0.0.0.0 www.x.com
0.0.0.0 m.x.com
0.0.0.0 bsky.app
0.0.0.0 www.bsky.app
```

The idea is that you replace these with whatever your personal time sinks are. Just a heads up that unfortunately the hosts file doesn't support wildcard entries, so we are going to need both the "bare domain" and the `www` subdomain, since they resolve separately.

The final step is to flush the cache. The OS caches DNS lookups, so the changes may not take effect immediately and you may need to flush the cache to force it:

```sh
sudo killall -HUP mDNSResponder
```

If for any reason you ever need to undo this, just remove the lines you added from the `/etc/hosts` file and flush the cache again.

Note that this blocks the domains **system wide** across all browsers and apps too.
