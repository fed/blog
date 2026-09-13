---
title: A self study roadmap for engineers transitioning to pure maths
date: 2026-01-06
description: This covers where to start, which courses and books to use, and how to build the kind of mathematical thinking that engineering degrees don't really teach and that's usually reserved for maths majors.
tags: maths
---

If you did an engineering degree you probably came out the other end thinking you knew a fair bit of maths. And I think that's fair: calculus, linear algebra, differential equations, probability... we covered all of it. The thing is though, we covered it in the way engineers cover maths: "here is the tool, here is how you use it, now apply it to this problem". But I never really stopped to ask why it works, or whether it could be proved, or what assumptions we were sweeping under the rug without even thinking about it. We did prove some theorems here and there, but the nature of what we learned was mostly applied.

I guess knowing the mechanics is not quite the same as truly understanding the maths behind it. For example, I can tell you what a limit is, but I can't prove that the real numbers are complete enough to support that definition in the first place. There's a whole layer of rigour underneath everything I learned that I never had/got to to engage with. So I decided to go back and do it properly, the way pure mathematicians do it: definitions, axioms, theorems, proofs, all with no shortcuts. This post is my attempt at documenting my roadmap for how I'm tackling that.

## Prerequisites

Before starting taking any of the courses below, it'd be a good idea to read [How to Prove It](https://www.goodreads.com/book/show/739735.How_to_Prove_It) by Daniel Velleman. This book teaches proof writing and makes the transition from engineering thinking a bit easier.

## 1) Proof writing

[Introduction to Mathematical Thinking](https://www.coursera.org/learn/mathematical-thinking) (Coursera, Dr. Keith Devlin)

This course serves as a bridge by teaching proof construction and mathematical logic, and focuses on the transition from a computational mindset to an analytical mindset. It is particularly handy for unlearning the habit of looking for a numerical answer and instead focusing on the validity of the argument.

## 2) Real analysis

[18.100A Real Analysis](https://ocw.mit.edu/courses/18-100a-real-analysis-fall-2020) (MIT OCW, Dr. Casey Rodriguez)

From what I've seen this is a bit of a traditional entry point for engineers moving into pure maths. This course rebuilds calculus from axioms using rigorous proofs: epsilon-delta, sequences, continuity, and compactness. A plus is that, because as an engineer the intuition is already there, it's easy to focus entirely on proof technique rather than understanding any new concepts.

## 3) Abstract algebra

[18.701 Algebra I](https://ocw.mit.edu/courses/18-701-algebra-i-fall-2010) (MIT OCW, Prof. Michael Artin)

This course covers groups, rings, and fields, which I found to be a significant step up in abstraction from analysis. This whole course is pure proof work throughout.

## 4) Linear algebra

[18.06 Linear Algebra](https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010) (MIT OCW, Prof. Gilbert Strang)

The approach of this course is geometric and intuitive, which makes it great for building understanding, but it is not really proof based. If you have an engineering degree you have almost certainly covered most of this content already, and could instead skip the course videos and go straight to Axler (linked below) and using 18.06 only as a reference for anything that feels unfamiliar or as a refresher before starting reading Axler.

## Recommended books

- [Spivak, Calculus](https://www.goodreads.com/book/show/328645.Calculus): this is a rigorous calculus book used in a number of university pure maths courses. Same as with 18.100A, this book is ideal to ramp up on proof writing because the content is already familiar, so you can focus entirely on absorbing the proof style rather than trying to make sense of the new concepts.
- [Abbott, Understanding Analysis](https://www.goodreads.com/book/show/845794.Understanding_Analysis): covers similar ground to Spivak, but Abbott spends time motivating definitions before formalising them. It's supposed to be a bit of a gentler entry point if Spivak's density feels like too much too soon.
- [Dummit & Foote, Abstract Algebra](https://www.goodreads.com/book/show/264543.Abstract_Algebra): this is a good starting point for abstract algebra for someone still building proof fluency, and is a good companion for 18.701.
- [Axler, Linear Algebra Done Right](https://linear.axler.net): in engineering we typically learn linear algebra around determinants: calculate the determinant, find the eigenvalues, done. Axler throws that out and rebuilds the whole subject from a proof first perspective. It covers the same material but sort of forces you to actually understand why it works rather than just how to calculate it. Big fan of this book.
