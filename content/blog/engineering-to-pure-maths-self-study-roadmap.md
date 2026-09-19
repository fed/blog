---
title: A self study roadmap for engineers transitioning to pure maths
date: 2026-01-06
description: This covers where to start, which courses and books to use, and how to build the kind of mathematical thinking that engineering degrees don't really teach and that's usually reserved for maths majors.
tags: maths
---

If you did an engineering degree you probably came out the other end thinking you knew a fair bit of maths. And I think that's fair: calculus, linear algebra, differential equations, probability... we covered all of it. The thing is though, we covered it in the way engineers cover maths: "here is the tool, here is how you use it, now apply it to this problem". But I never really stopped to ask why it works, or whether it could be proved, or what assumptions we were sweeping under the rug without even thinking about it. We did prove some theorems here and there, but the nature of what we learned was mostly applied. And knowing the mechanics is not quite the same as understanding the maths behind it. There's a whole layer of rigour underneath everything I learned that I never had/got to to engage with. So I decided to go back and do it properly, the way pure mathematicians do it: definitions, axioms, theorems, proofs, all with no shortcuts. This post is my attempt at documenting the things I tackled on my own before signing up to uni.

## 1) Proof writing

A good first read on writing proofs is [How to Prove It](https://www.goodreads.com/book/show/739735.How_to_Prove_It) by Daniel Velleman. This book teaches proof writing and makes the transition from engineering thinking a bit easier.

There's also this course: [Introduction to Mathematical Thinking](https://www.coursera.org/learn/mathematical-thinking) (Coursera, Dr. Keith Devlin) which teaches proof construction and mathematical logic, and focuses on the transition from a computational mindset to an analytical mindset. It is particularly handy for unlearning the habit of looking for a numerical answer and instead focusing on the validity of the argument.

## 2) Real analysis in one variable

From what I've read, this course: [18.100A Real Analysis](https://ocw.mit.edu/courses/18-100a-real-analysis-fall-2020) (MIT OCW, Dr. Casey Rodriguez) is a bit of a traditional entry point for engineers moving into pure maths. It rebuilds calculus from axioms using rigorous proofs (e.g. epsilon-delta, sequences, continuity, and compactness). A plus is that, because as an engineer the intuition is already there, it's easy to focus entirely on proof technique rather than understanding any new concepts.

In terms of books, [Spivak, Calculus](https://www.goodreads.com/book/show/328645.Calculus) is known for being a rigorous calculus book, and I've seen it being used in a number of university pure maths courses.

[Abbott, Understanding Analysis](https://www.goodreads.com/book/show/845794.Understanding_Analysis) covers similar ground to Spivak. I'm yet to read this one, but Abbott is supposed to spend a bit longer motivating definitions before formalising them, and also be a slightly gentler entry point if Spivak's density feels like too much too soon.

## 3) Linear algebra

[18.06 Linear Algebra](https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010) (MIT OCW, Prof. Gilbert Strang) is a good refresher. If you have an engineering degree you have almost certainly covered most of this content already, and could instead skip the course videos and go straight to Axler and using 18.06 only as a reference for anything that feels unfamiliar before starting reading Axler.

[Axler, Linear Algebra Done Right](https://linear.axler.net) would be my pick for linear algebra. In engineering we typically learn linear algebra around determinants: calculate the determinant, find the eigenvalues, done. Axler throws that out and rebuilds the whole subject from a proof first perspective. It covers the same material but sort of forces you to actually understand why it works rather than just how to calculate it. Big fan of this book.

That's as far as I got before the degree started, and the units I chose picked up from here.
