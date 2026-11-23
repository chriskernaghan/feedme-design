---
title: 'Checkout analytics: the numbers worth watching, and the ones to ignore'
description: 'Which checkout analytics numbers are worth tracking, from step-by-step drop-off to form errors, and why the famous 70% abandonment figure is no target.'
pubDate: 2026-11-23
author: editor-two
type: insight
topics: [checkout, user-research]
keyFinding: 'The headline cart abandonment figure of about 70% includes plenty of people who were only browsing, so the numbers worth watching are your own step-by-step drop-off, split by device, plus where form errors cluster.'
sources:
  - title: 'Cart Abandonment Rate: 50 Statistics & Why People Abandon'
    publisher: 'Baymard Institute'
    url: 'https://baymard.com/blog/cart-abandonment-rate-statistics'
    accessed: 2026-11-23
  - title: '70.22% average documented online shopping cart abandonment rate'
    publisher: 'Baymard Institute'
    url: 'https://baymard.com/lists/cart-abandonment-rate'
    accessed: 2026-11-23
  - title: '[GA4] Checkout journey report'
    publisher: 'Google Analytics Help'
    url: 'https://support.google.com/analytics/answer/14000977'
    accessed: 2026-11-23
  - title: 'Zuko Shopify checkout analytics pricing'
    publisher: 'Zuko'
    url: 'https://www.zuko.io/checkout-analytics-app-pricing'
    accessed: 2026-11-23
draft: false
---

Once you've got a tool or two collecting checkout data (the [free ones](/articles/free-checkout-testing-tools-and-where-their-limits-sit/) will do), the next problem is knowing which numbers deserve your attention. Most dashboards will happily show you thirty. Five of them are worth a regular look.

## Start with the number to ignore

The figure everybody quotes is that around 70% of carts are abandoned. Baymard's average comes to 70.22%, taken from 50 published studies, and those studies range from 55% to 84%. It's a fair description of the industry, but it's a poor target for your shop, because it counts people who were never going to buy. Baymard itself notes that a large share of abandonment is window shopping, price comparison and saving items for later.

So don't judge your checkout against 70%. Judge it against itself last month.

## 1. Drop-off at each step

This is the number that does the most work. Google Analytics 4's checkout journey report follows people through four steps, from beginning checkout to adding shipping, adding payment and purchasing, and shows the share lost between each step. Google calls that the abandonment rate, and its inverse the retention rate.

What you're looking for is a step that's much worse than its neighbours. A big loss between beginning checkout and adding shipping points at the address form or the delivery costs, while a big loss between payment and purchase points at the payment step itself. Google's report only works if your site sends the right events, and it says the shipping one needs setting up by hand on Shopify.

## 2. The same numbers split by device

The checkout journey report splits by device category by default, and it's worth leaving it that way. A checkout that converts reasonably on a laptop and badly on a phone is usually a form, keyboard or button problem rather than a pricing one, which makes it one of the cheaper things to diagnose.

## 3. Form errors, by field

Tools such as Zuko's Shopify app track the error messages people see, which tells you which field is tripping people up and how often. A postcode field that throws an error on one in five attempts is a better lead than any amount of staring at a funnel, because you can usually fix it in an afternoon.

## 4. Payment failures

Check your payment provider's dashboard for declined and failed payments, and look at the pattern rather than the total. In Baymard's survey of why people abandon, 10% of respondents cited a declined card, and 9% said there weren't enough payment methods. A cluster of failures from one card type, one country or one wallet usually means something is misconfigured, not that customers are careless.

## 5. Why people say they left

Numbers tell you where, and customers can sometimes tell you why. Baymard's survey, once you set aside people who were just browsing, puts extra costs at the top, at 40%, followed by slow delivery at 20%, not trusting the site with card details at 19% and being forced to create an account at 18%. Too long or complicated a checkout and site errors both come in at 17%. That's a useful order to investigate things in, because it matches the [checklist](/articles/a-checkout-testing-checklist-you-can-run-in-an-afternoon/): costs first, then delivery, trust, accounts, length and errors.

## Reading small numbers

If your shop has modest traffic, a week of data can swing wildly on a handful of orders. Look at counts as well as percentages, compare four weeks against the previous four, and hold off changing anything because of a single bad Tuesday. Where a number looks alarming but the sample is tiny, [watching a few real people try the checkout](/articles/how-to-test-your-checkout-without-any-tools/) will tell you more than another week of waiting.
