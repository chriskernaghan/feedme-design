---
title: 'Let customers finish buying before asking them to join'
description: 'Baymard reports that 56% of assessed sites do not leave account creation until order confirmation. What this means for guest checkout.'
pubDate: 2026-11-14
author: editor-two
type: data
topics: [checkout]
cover:
  stat: '56%'
  caption: 'do not save account creation for order confirmation'
keyFinding: 'Baymard reports that 56% of assessed sites do not defer account creation to confirmation; its public summary does not give the exact denominator.'
dataset:
  name: 'Baymard Checkout UX benchmark, November 2026 summary'
  method: 'Secondary review of published benchmark findings, not an original feedme.design audit.'
  sampleSize: 'The wider analysis contains 44,000+ usability scores. The exact site and page counts for the account creation measure are not disclosed.'
  collected: 'Underlying collection dates not specified; source updated 3 November 2026 and accessed 14 November 2026.'
sources:
  - title: 'Checkout UX 2026: 10 Pitfalls and Best Practices (Most Sites Have Mediocre-to-Poor Performance)'
    publisher: 'Baymard Institute'
    url: 'https://baymard.com/research-articles/current-state-of-checkout-ux'
    accessed: 2026-11-14
draft: false
---

Someone has chosen a product and reached checkout. Asking them to join your shop introduces another decision before they have finished the first.

It is worth checking when that invitation appears. A guest checkout button at the start tells you little about what happens further along.

## How we measured it

We reviewed [Baymard’s November 2026 checkout summary](https://baymard.com/research-articles/current-state-of-checkout-ux) and extracted its account creation finding. We did not inspect shops ourselves. The public article lacks the underlying records needed to reproduce the percentage.

## Results

| Measure | Reported share |
| --- | --- |
| Sites that do not save account creation for confirmation | 56% |

Source: Baymard Institute, November 2026 update.

This is about timing. It does not mean 56% force registration. Baymard observed that early account invitations interrupted some test participants, even when registration was optional.

## Follow the whole guest journey

For your own review, start in a fresh browser session and choose guest checkout. Record each point where the shop mentions an account. Continue through a test purchase using your platform’s test environment, so you can inspect the confirmation screen too.

Then ask someone unfamiliar with the shop to try the same journey. Give them a task such as buying a birthday gift. Avoid mentioning registration in the brief, as that could draw attention to the thing you want to observe.

If they pause at an account prompt, ask what they think the page requires. Their answer matters more than whether your team considers the prompt optional.

A password field can look like part of the purchase form. Check what happens when someone leaves it blank. Any error should make clear which action failed and whether the order can continue without an account.

## Give the invitation a useful purpose

One version to test on the confirmation page is: “Your order is confirmed. Create an account to view it here next time.” Only use that promise if your shop supports it.

Make the order confirmation clear before introducing the offer. Someone who declines should still understand how they will receive updates about their purchase.

When evaluating a change, account sign-ups alone give an incomplete picture. Compare completed orders between the versions too. A small usability session can reveal confusion, but it cannot establish a reliable change in sales.

## Limits

This is a review of published research, not a UK-only shop audit. The percentage describes a design pattern, not the share of customers who abandoned a purchase.

Individual implementations may have changed since assessment. Use the finding to choose a question for your own testing; it does not predict the financial effect of moving an account prompt.

<!-- Editorial note: This research review uses third-party findings. Before publication, broaden the Data studies category description to include research reviews or use a suitable category. Do not label it as original feedme.design measurement. Confirm that checkout is an accepted topic slug in the site schema. -->
