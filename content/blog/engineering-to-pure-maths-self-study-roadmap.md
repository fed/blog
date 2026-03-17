---
title: A self study roadmap for engineers transitioning to pure maths
date: 2026-01-06
description: This covers where to start, which courses and books to use, and how to build the kind of mathematical thinking that engineering degrees don't really teach and that's usually reserved for maths majors.
tags: maths
---

If you did an engineering degree, you probably came out the other end thinking you knew a fair bit of maths. And I think that's fair: calculus, linear algebra, differential equations, probability... we covered all of it. The thing is, we covered it in the way engineers cover maths: here is the tool, here is how you use it, now apply it to this problem. Nobody really stopped to ask why it works, or whether it could be proved, or what assumptions we were quietly sweeping under the rug.

That sat fine with me for a long time. But at some point I started pulling on that thread and realised that knowing the mechanics is not the same as understanding the mathematics. I can tell you what a limit is. I can't prove, from first principles, that the real numbers are complete enough to support that definition in the first place. There's a whole layer of rigour underneath everything I learned that I never had/got to to engage with. So I decided to go back and do it properly, the way pure mathematicians do it: definitions, axioms, theorems, proofs, no shortcuts. This post is my roadmap for how I'm tackling that.

## Prerequisites

Before starting taking any of the courses below, it'd be a good idea to read [**How to Prove It**](https://www.goodreads.com/book/show/739735.How_to_Prove_It) by Daniel Velleman. This book teaches proof writing and makes the transition from engineering thinking a bit easier.

## 1) Learn proof writing

[**Introduction to Mathematical Thinking**](https://www.coursera.org/learn/mathematical-thinking) (Coursera, Dr. Keith Devlin)

This course serves as a bridge: it teaches proof construction and mathematical logic, and focuses on the transition from a computational mindset to an analytical one. It is particularly handy for unlearning the habit of looking for a numerical answer and instead focusing on the validity of the argument.

## 2) Real analysis

[**18.100A Real Analysis**](https://ocw.mit.edu/courses/18-100a-real-analysis-fall-2020) (MIT OCW, Dr. Casey Rodriguez)

From what I've seen, this is a bit of a traditional entry point for engineers moving into pure maths. This course rebuilds calculus from axioms using rigorous proofs: epsilon-delta, sequences, continuity, and compactness. A plus is that, because as an engineer the intuition is already there, it's easy to focus entirely on proof technique rather than understanding any new concepts.

## 3) Abstract algebra

[**18.701 Algebra I**](https://ocw.mit.edu/courses/18-701-algebra-i-fall-2010) (MIT OCW, Prof. Michael Artin)

This course covers groups, rings, and fields, which I found to be a significant step up in abstraction from analysis. This course is pure proof work throughout.

## 4) Linear algebra

[**18.06 Linear Algebra**](https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010) (MIT OCW, Prof. Gilbert Strang)

The approach of this course is geometric and intuitive, which makes it excellent for building understanding, but it is not really proof based. If you have an engineering degree you have almost certainly covered most of this content already, and could skip the course videos and go straight to [Axler](https://linear.axler.net), using 18.06 only as a reference for anything that feels unfamiliar or as a refresher before starting reading Axler.

## Recommended books

- **Spivak, Calculus:** this is a rigorous calculus book used in a number of university pure maths courses. Same as with 18.100A, this book is ideal to ramp up on proof writing because the content is already familiar, so you can focus entirely on absorbing the proof style rather than trying to make sense of the new concepts.
- **Dummit & Foote, Abstract Algebra:** this is a good starting point for abstract algebra for someone still building proof fluency, and is a good companion for 18.701.
- **Axler, Linear Algebra Done Right:** in engineering you learn linear algebra around determinants: calculate the determinant, find the eigenvalues, done. Axler throws that out and rebuilds the whole subject from a proof first perspective: it covers the same material but sort of forces you to actually understand why it works rather than just how to calcualte it. A good book to use alongside 18.06.
