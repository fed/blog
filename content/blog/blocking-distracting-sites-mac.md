---
title: How to block distracting sites on Mac/Linux
date: 2025-09-19
tags: general
draft: true
---

# Block distracting sites

sudo vim /etc/hosts

Add the following to the end of the file:

# Blocked Sites

0.0.0.0 distractingwebsite.com
0.0.0.0 www.distractingwebsite.com

Flush the DNS to make sure everything works:

sudo killall -HUP mDNSResponder
