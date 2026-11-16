---
title: 'Your shop might be sending too many emails'
description: 'Baymard’s survey puts retailer email frequency among the main reasons for unsubscribing. Here is how to check the pressure your own shop creates.'
pubDate: 2026-11-16
author: editor-two
type: data
topics: [email]
cover:
  stat: '48%'
  caption: 'cite frequent retailer emails as a reason to unsubscribe'
keyFinding: 'Baymard reports that 48% cite excessive email frequency from a retailer as an unsubscribe reason; this is not an unsubscribe rate.'
dataset:
  name: 'Research review of Baymard’s 2026 ecommerce survey'
  method: 'Secondary analysis of the public summary, not original feedme.design fieldwork.'
  sampleSize: '1,083 US online shoppers overall; the public summary does not state the question-specific base.'
  collected: 'Fieldwork dates not stated in the public summary, published 4 August 2026; reviewed 16 November 2026.'
sources:
  - title: 'Ecommerce Quantitative UX: 3 High-Level Trends & Takeaways from 20+ Charts'
    publisher: 'Baymard Institute'
    url: 'https://baymard.com/research-articles/ecommerce-quantitative-ux-insights-2026'
    accessed: 2026-11-16
draft: false
---

Your campaign calendar may show a manageable number of emails, while a customer receives several more through automated journeys that never appear on it.

That makes email frequency worth examining from the recipient’s side. A shop can approve each message for a sensible reason and still create a sequence that feels relentless when it reaches one inbox.

## How we measured it

We reviewed [Baymard’s published survey summary](https://baymard.com/research-articles/ecommerce-quantitative-ux-insights-2026). We did not access respondent-level data or audit retailer email programmes. The detailed newsletter insight requires a subscription.

## Results

| Reported unsubscribe reason | Share reported by Baymard |
| --- | --- |
| Emails from a particular retailer arrive too often | 48% |
| Too many newsletters across the inbox | 46% |
| Interest in the content has faded | 44% |

These figures describe reasons, not mutually exclusive groups or the proportion of delivered emails that cause an unsubscribe. Do not add them together.

## Count what reaches the customer

Our practical interpretation is that a shop should review the total contact it creates before deciding whether another campaign is reasonable.

Consider a hypothetical customer who joins a mailing list for a discount, browses a product, and leaves a basket unfinished. Their address might qualify for a welcome sequence and a basket reminder while also remaining eligible for a scheduled promotion.

The marketing team may have reviewed those messages in separate workflows. The customer encounters them together, with no reason to care which automation was responsible for which email.

This example is not a finding from Baymard’s survey. It is a scenario to investigate in your own sending records. Whether it happens will depend on the rules your shop has configured.

Start with the recipient timeline. A weekly newsletter might be the only promotional message some subscribers receive, while others also enter several automated sequences. Changing the newsletter schedule alone would affect both groups without necessarily addressing the overlap.

The content deserves the same attention. A basket reminder that arrives after a purchase may indicate a problem with how purchase events stop the sequence. A second discount offer could undermine the first offer’s deadline. Review what each message assumes about the customer, as well as when it was sent.

## A useful check for this week

Choose one common journey, such as a new subscriber making their first purchase. Use a test address to follow it and inspect the corresponding event and send logs in your email platform. Some sequences take several days, so the logs may give you a fuller starting point than waiting for a fresh test to finish.

Build a single timeline showing each message and its trigger. Keep receipts and delivery updates visible in the review, but label their purpose so you can examine promotional pressure without proposing to remove information someone needs about an order.

Look for a specific collision you can fix. For example, if a completed purchase does not stop an abandoned-basket sequence, check the event mapping and exclusion rule. If two promotional flows compete on the same day, decide which should take priority for that customer.

Test the revised rule with the same journey. Confirm that it stops the intended message and that an order confirmation still arrives. A rule that lowers the count while breaking the receipt flow has solved the wrong problem.

Once you understand the overlap, you can run a limited frequency experiment. Assign comparable eligible subscribers to different promotional schedules and choose the evaluation period in advance. Compare unsubscribes per recipient over that period, alongside orders or revenue per recipient. Looking only at revenue attributed to individual sends can miss what happens across the whole group.

Agree on what would count as a useful result before the experiment starts. A small or noisy difference should leave the question open rather than becoming a claim that a particular schedule works for every shop.

## Limits

The source covers US respondents and self-reported reasons. It does not establish an ideal sending frequency for your audience or show that reducing your emails will increase sales.

The public summary does not provide the full question wording, weighting, or uncertainty estimates. The two-percentage-point gap between the first two reasons is not enough on its own to establish a meaningful difference.

Use this review to choose something to inspect in your own shop. The first useful outcome is a complete picture of what one customer receives, including the messages that are easy to overlook when you work from the campaign calendar.
