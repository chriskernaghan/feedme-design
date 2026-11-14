---
title: 'How to make mobile checkout fields easier to understand'
description: 'Clarify which checkout details customers need to enter, explain phone requests, and test the form on a real phone.'
pubDate: 2026-11-14
author: editor-two
type: guide
topics: [checkout, mobile]
keyFinding: 'Mark each field as required or optional; Baymard observed missed required fields among 32% of participants encountering forms that marked only optional fields.'
sources:
  - title: 'E-Commerce Checkouts Need to Mark Both Required Fields and Optional Fields Explicitly'
    publisher: 'Baymard Institute'
    url: 'https://baymard.com/research-articles/required-optional-form-fields'
    accessed: 2026-11-14
  - title: 'Checkout UX 2026: 10 Pitfalls and Best Practices'
    publisher: 'Baymard Institute'
    url: 'https://baymard.com/research-articles/current-state-of-checkout-ux'
    accessed: 2026-11-14
draft: false
---

A checkout form should not make customers guess which boxes they can leave empty.

This guide is for shop owners and designers working on mobile checkout. It will help you clarify field labels and check whether the form behaves as those labels promise.

The evidence comes from [Baymard’s field-label study and annotated examples](https://baymard.com/research-articles/required-optional-form-fields), supported by its [November 2026 checkout review](https://baymard.com/research-articles/current-state-of-checkout-ux). There is no corresponding original feedme.design data study yet.

## What to change

### Mark each field where it appears

Label both required and optional inputs. Baymard’s [field-label study](https://baymard.com/research-articles/required-optional-form-fields) reports missed required fields among 32% of participants facing forms that marked only optional ones. This is a testing result, not a forecast for your customers.

A simple treatment to try is “Email address (required)” and “Company name (optional)”. Keep that wording visible as someone types.

Audit one checkout step at a time. For each field, compare its label with what happens when you leave it blank. Fix any mismatch before changing the visual design.

### Remove reliance on a notice at the top

A page-level instruction cannot replace field labels. In [Baymard’s Argos example](https://baymard.com/research-articles/required-optional-form-fields), users overlooked the general instruction and had to work out what individual inputs required.

On your phone, scroll until the page heading is out of view. Read the next field without looking back. If you cannot tell whether it is needed, add the information beside its label.

The same check is useful when the keyboard opens. Your design file may show far more of the form than the customer can see while typing.

### Explain why you need a phone number

Give a specific reason beside a required phone field. Baymard’s [2026 checkout review](https://baymard.com/research-articles/current-state-of-checkout-ux) describes participants providing false details or abandoning when the requirement had no explanation.

First ask the person handling fulfilment how the number is used. If the courier needs it to resolve delivery problems, describe that purpose. Do not promise “delivery use only” if the business uses it for something else.

If the number is not needed to fulfil the order, review whether the requirement should exist. A sentence of reassurance cannot make an unnecessary field useful.

### Tuck away infrequent optional inputs

Consider revealing an optional company field only after a tap. Baymard’s [Lowe’s example](https://baymard.com/research-articles/current-state-of-checkout-ux) shows less commonly needed inputs behind links.

Try “Add company name (optional)” for a consumer shop where most orders go to individuals. Test a business order too, so someone who needs the field can still find it.

Do not copy this choice onto a wholesale checkout where company information is routine. The right presentation depends on the orders your shop handles.

## How to check it worked

Allow five minutes for the first pass. Use a test checkout on a real phone and fill in only fields marked as required. Stop before payment. You should reach the next step without being asked for an optional detail.

Now leave one required field blank. Submit that step and check that the error identifies the missing information. Confirm that the details you entered elsewhere remain intact.

For a short comprehension check, show the form to someone who has not worked on it. Ask which boxes they would skip and why the shop needs their phone number. Compare their answer with the actual rules.

Record the confusing field, what they expected, and what happened. Repeat the check after the edit. This gives you a useful record of the problem being resolved; a few successful attempts do not establish a measured sales uplift.

<!-- Editorial note: No internal breakdown or data study exists for this topic in the supplied material. The introduction links directly to the primary research instead. Historical examples are not fresh audits of the named shops. -->
