---
title: 'A checkout testing checklist you can run in an afternoon'
description: 'A step-by-step checkout testing checklist covering the basket, forms, delivery, payment and confirmation, with what to look for on a phone and a laptop.'
pubDate: 2026-11-23
author: editor-one
type: insight
topics: [checkout, user-research]
keyFinding: 'Most checkout problems sit in a handful of predictable places, so walking the same checklist on a phone and a laptop will catch the majority of them before any tool is involved.'
draft: false
---

This is the checklist we'd run on any checkout, ordered the way a customer meets it. Work through it twice, once on a phone over mobile data and once on a laptop, and tick things off as you go. If you'd rather watch someone else try first, [the no-tools method](/articles/how-to-test-your-checkout-without-any-tools/) covers that, and if you want software to help afterwards there's [a short list of checkout tools](/articles/four-tools-for-testing-your-checkout/).

## The basket

- The total, including delivery, is visible or clearly estimated before the customer commits to checkout
- Quantities can be changed and items removed without losing the rest of the basket
- Discount codes are findable but don't dominate the page, so people without one aren't sent off to hunt for a code
- The basket survives a refresh and a return visit the next day
- The button to continue says what happens next, such as "Checkout", rather than something vague

## Account or guest

- Guest checkout is offered, and it's the easier path
- Creating an account is optional and can happen after the order
- Signing in doesn't empty the basket
- Password rules are shown before someone breaks them

## The forms

- Only the fields you genuinely need are asked for
- The right keyboard appears for each field, so numbers for card and phone, email for email
- Autofill works for name, address and card details
- Address lookup works, and typing the address by hand is still possible
- Errors appear next to the field, say what to fix, and don't wipe what was already typed
- The primary button is still visible when the keyboard is open

## Delivery

- Every delivery option shows its price and an arrival date or window
- The cheapest option isn't hidden or pre-ruled out
- Free delivery thresholds say how much more to spend
- Click and collect, if you offer it, is as easy to find as home delivery

## Payment

- The payment methods you accept are visible before the payment step
- Wallets such as Apple Pay or Google Pay work on the devices that support them
- A declined card gives a clear message and a way to try another, without starting again
- Anything that redirects to a bank or another page, such as a security check, returns the customer to the right place
- The pay button shows that something is happening and can't be pressed twice by accident

## Confirmation

- The confirmation page shows the order number, what was bought, where it's going and when
- The confirmation email arrives within a couple of minutes and doesn't land in spam
- The email says what happens next and how to get in touch
- Refreshing or going back from the confirmation page doesn't create a second order

## Things people forget

- Slow connections, which you can simulate by switching to a weak mobile signal
- Small screens and older phones, not just the one in your pocket
- Zoomed-in text and the keyboard alone, for people who can't use a mouse
- Returning customers whose saved details are out of date
- Basket contents when an item sells out mid-checkout

## Scoring it

Don't over-engineer this. Mark each line pass, fail or unsure, then fix the fails that sit earliest in the journey first, since problems at the basket cost you the customers who would have hit every later one. Run it again after each round of changes, and once a quarter even if nothing has changed, because a plugin update or a new payment option can break something that was fine last month.
