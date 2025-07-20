---
title: Introduction to Petri Nets
date: 2013-11-01
description:
tags: knowledge-modelling
draft: true
---

I've just taken a course on "Software Systems Modeling" and one of the topics covered was Petri Nets.

These are named after Carl Adam Petri, and are also known as place/transition or P/T Nets. They are a mathematical modeling language for
describing distributed, concurrent and real-time systems. By distributed system we mean ...

Examples of these kinds of systems are, typically, vending machines, ...

A Petri Net is a directed bipartite graph, in which the nodes represent transitions (i.e. events that may occur, signified by bars)
and places (i.e. conditions, signified by circles). The directed arcs describe which places are pre- and/or postconditions for which
transitions (signified by arrows).

## Introductory material

Here's a couple of interesting and traditional white papers on Petri Nets that might be useful as an introductory material on this topic:

#1: PETRI NETS, by J. Peterson (1977) http://www.rose-hulman.edu/Users/faculty/young/CS-Classes/csse373/Spring2009/Resources/peterson77.pdf

#2: PETRI NETS: PROPERTIES, ANALYSIS AND APPLICATIONS, by T. Murata (1989)
http://embedded.eecs.berkeley.edu/Research/hsc/class.F03/ee249/discussionpapers/PetriNets.pdf

After having read these two introductory papers it'd be a good idea to check on the following examples, just to make sure you get the
essence of Petri Nets. But before that

Simulation Software

HPSim is a basic but yet powerful simulation software to play around with Petri Nets. It has a graphical editor which provides basic editing
and simulation features, and is a great tool for beginners to get familiar with Petri Nets.

The software is only 1 Mb and can be downloaded here: http://www.winpesim.de/hpsim.html

Examples and Applications

Here's some basic but clarifying examples on how Petri Nets actually work, giving us an idea of what kind of situations they can help us
modeling:

MAKING WATER

In this example:

tokens are mapped to transitions are mapped to chemical reactions places are where we keep our atoms or molecules

The image on the top shows the initial state of our system: we have two tokens (atoms) in the H2 place, and two tokes (atoms, again) in the
O2 place. To create one molecule of water we need two of these H2 atoms and one O2 atom, hence we are gonna use two tokens from the first
place but only one from the second. As this system meets this precondition (two H2 tokens and one O2 token needed) then the transition is
fired, originating one molecule of water (that is, one token in the H20 place of the final system state). In this example the

TAKING THE BUS

More interactive examples and tutorials on Petri Nets: http://www.informatik.uni-hamburg.de/TGI/PetriNets/introductions/aalst/

Further Resources

not yet
