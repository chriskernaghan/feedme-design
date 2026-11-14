---
title: 'Breaking down MUJI’s checkout: when does delivery become clear?'
description: 'A dated walkthrough of MUJI UK’s desktop shopping flow, showing how a £12.95 diary becomes a £16.90 basket before checkout details are entered.'
pubDate: 2026-11-14
author: editor-one
type: breakdown
topics: [checkout]
keyFinding: 'MUJI lets shoppers calculate delivery before entering an email address, but the basket hides that useful option behind the vague label “Add Info”.'
sources:
  - title: '2027 Monthly and Weekly Diary with Rokuyō - A5'
    publisher: 'MUJI UK'
    url: 'https://uk.muji.eu/products/2027-Monthly-and-Weekly-Diary-with-Rokuy-A5-P-22182-H-000000'
    accessed: 2026-11-14
  - title: 'Shopping Cart'
    publisher: 'MUJI UK'
    url: 'https://uk.muji.eu/cart.php'
    accessed: 2026-11-14
  - title: 'Checkout'
    publisher: 'MUJI UK'
    url: 'https://uk.muji.eu/checkout'
    accessed: 2026-11-14
draft: false
---

A £12.95 diary is a small purchase. Delivery can still change how someone judges its price. We followed one item through [MUJI’s UK shop](https://uk.muji.eu/products/2027-Monthly-and-Weekly-Diary-with-Rokuy-A5-P-22182-H-000000) to see when a shopper could find the delivery charge and work out the amount they would pay.

The useful finding comes before the checkout form: MUJI offers a delivery estimate in the basket. You can get a quote without supplying an email address. The opportunity is to make that option easier to recognise.

**Test conditions:** Reviewed on 14 November 2026 in remote desktop Chrome, at a browser viewport of approximately 1363 × 936 pixels. This was not a phone or touch-device test. The basket held one White Grey A5 diary, priced at £12.95. We rejected optional cookies and stayed signed out. For the shipping estimate, we selected United Kingdom and entered London with the public test postcode SW1A 1AA; the state/province field was left empty. No email, street address or payment details were entered. We stopped at the first checkout screen and placed no order.

This is a single-session expert review. It reports what appeared in that session, not customer behaviour or a measured conversion effect. A different basket or destination may produce a different charge.

## What the flow does

### 1. The product page leads with the item price

The diary page shows £12.95 beside the product name. A strip across the top advertises free delivery on orders over £85, with an asterisk. That gives a shopper a threshold to consider, but does not answer what delivery costs for this one diary.

![MUJI’s A5 diary product page showing the £12.95 price and a free-delivery promotion in the header.](/images/breakdowns/muji-delivery/01-product.jpg)

*Screenshot 1 — MUJI UK, 14 November 2026. Initial desktop view of the product page.*

### 2. Further down, a starting delivery price appears

Below the purchase controls, a highlighted block says “Standard UK Delivery from £3.95”. The nearby “See shipping costs” link opens a panel. The product details also show a weight of 0.29 kg.

This is useful information before adding anything to the basket. In the initial viewport we captured, the delivery block was below the visible area. A shopper needed to move further down the page to see it.

![The lower product section showing Standard UK Delivery from £3.95, a shipping-cost link and the diary’s listed weight.](/images/breakdowns/muji-delivery/02-delivery-message.jpg)

*Screenshot 2 — MUJI UK, 14 November 2026. Delivery information below the purchase controls.*

### 3. The shipping panel explains the price bands

Opening the link reveals a table. The general-parcel band from 0 kg to 2 kg is £3.95. The panel also lists heavier bands and separate furniture charges, with information about surcharges further down.

The table explains why delivery starts at a particular price. It is still a general schedule rather than a quote for this basket. We used the basket calculator to check the actual estimate instead of inferring a final charge from the product’s listed weight.

![MUJI’s shipping panel showing the £3.95 general-parcel band and separate furniture rates.](/images/breakdowns/muji-delivery/03-shipping-panel.jpg)

*Screenshot 3 — MUJI UK, 14 November 2026. The shipping panel opened from the product page.*

### 4. Adding the diary shifts the message towards free delivery

The confirmation shows the selected item and its £12.95 price. It also says the basket is £72.05 away from free standard shipping.

That amount follows from the advertised £85 threshold: £85 minus £12.95 is £72.05. The message tells someone how much more to spend. It does not show the delivery charge for keeping the basket as it is.

![The add-to-cart confirmation showing one diary and a message that the shopper is £72.05 away from free standard shipping.](/images/breakdowns/muji-delivery/04-added-to-cart.jpg)

*Screenshot 4 — MUJI UK, 14 November 2026. Confirmation after adding one diary.*

### 5. The basket offers an estimate behind “Add Info”

In the [basket](https://uk.muji.eu/cart.php), the order summary shows “Shipping” with an “Add Info” control. The displayed subtotal is £12.95, and the free-shipping message remains underneath.

At this point, a cost-conscious shopper has a route to a quote. The label requires some interpretation: “Add Info” does not say which information is needed or what the shopper will get back.

![MUJI’s basket before an estimate, showing Shipping with an Add Info control and a £12.95 subtotal.](/images/breakdowns/muji-delivery/05-basket.jpg)

*Screenshot 5 — MUJI UK, 14 November 2026. Basket before calculating delivery.*

### 6. The calculator returns £3.95 before checkout

The expanded form asks for a country, state/province, city and postcode. It initially selected United States in this remote session. We changed that to United Kingdom. That default may reflect the test environment; this run cannot establish what a UK-based shopper would see.

With London and SW1A 1AA entered, the calculator returned “Shipping (Parcel)” at £3.95. We selected that option and used “Update shipping cost”.

![The basket delivery calculator with United Kingdom selected, the public test postcode entered and a £3.95 parcel quote.](/images/breakdowns/muji-delivery/06-estimate.jpg)

*Screenshot 6 — MUJI UK, 14 November 2026. A quote for the stated test destination; this is not a customer’s address.*

The summary then showed £3.95 for shipping and £16.90 on the line labelled “Subtotal”. That matches £12.95 plus £3.95.

![MUJI’s basket after applying shipping, with a £3.95 delivery charge and £16.90 labelled Subtotal.](/images/breakdowns/muji-delivery/07-basket-total.jpg)

*Screenshot 7 — MUJI UK, 14 November 2026. Basket after applying the shipping quote.*

### 7. Checkout carries the delivery charge forward

The first [checkout screen](https://uk.muji.eu/checkout) offers a guest route with an email field. The membership checkbox is unchecked in the captured view. The order summary retains £3.95 for delivery and lists the merchandise subtotal as £12.95.

We stopped here. Later address validation, payment and order confirmation were not tested. The important point for this review is that the delivery estimate was available before the email step.

![MUJI’s checkout entry screen showing guest checkout, an empty email field and the carried-forward £3.95 delivery charge.](/images/breakdowns/muji-delivery/08-checkout-entry.jpg)

*Screenshot 8 — MUJI UK, 14 November 2026. The stopping point, before entering contact or payment details.*

## What works

**Delivery information exists on the product page.** A starting price provides a useful cost signal before a shopper commits to the checkout. The linked table gives people a way to inspect the conditions behind that price.

**The basket calculator works before the email step.** In this run, the shopper could get a destination-based quote using a country, city and postcode. That creates an opportunity to judge the cost before sharing contact details.

**The charge carries forward.** The £3.95 basket quote was still visible at checkout entry. Keeping the number in view helps someone check that the estimate has not been lost during the transition.

## What costs sales

We did not measure lost sales. The points below are expert judgements about possible friction, not findings from MUJI’s analytics or customer tests.

**The calculator’s label undersells its purpose.** “Add Info” names a task the shopper must do. “Estimate delivery” would explain the result they can expect. That wording is a proposal to test, not a proven improvement.

**The free-delivery message answers a different question.** Someone buying just the diary may want to know the cost of that order. The prominent £72.05 figure describes a larger basket instead. It would be worth testing a delivery estimate beside the existing threshold message.

**The meaning of “Subtotal” changes along the way.** Before the quote, it is £12.95. After the quote, the basket uses the same label for £16.90 including shipping. Checkout then uses “Subtotal” for the £12.95 merchandise amount again. A clearer distinction between items and the estimated total could reduce the need to reconcile these figures.

For scale, £3.95 is about 30.5% of the diary’s £12.95 price. That is arithmetic from this basket, not an abandonment statistic. It explains why the delivery charge deserves attention even on a low-priced purchase.

## What to take from it

Start by making any existing delivery calculator easier to find. A useful first test is to replace a vague label with “Estimate delivery” and explain what details the form needs. Only remove fields after checking which ones your shipping service requires.

Then keep the summary labels consistent. Separate the cost of the items from delivery and use “Estimated total” for the combined amount until the final address and order details have been confirmed.

![Proposed basket summary with an Estimate delivery link and separate lines for items, estimated delivery and estimated total. This is a Feed Me Design concept, not MUJI’s interface.](/images/breakdowns/muji-delivery/09-proposed-summary.svg)

*Design proposal — Feed Me Design, 14 November 2026. These are two suggested states, not screenshots of MUJI. The figures illustrate the basket observed in this review. The proposal has not been user-tested.*

Try the revised summary with someone who has not used your shop. Ask them to find the delivery charge for one item and explain the amount they expect to pay. Their answer will tell you whether the next change should concern the wording or where the information appears.
