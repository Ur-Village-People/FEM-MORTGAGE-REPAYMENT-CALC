# Frontend Mentor - Mortgage repayment calculator solution

This is a solution to the [Mortgage repayment calculator challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/mortgage-repayment-calculator-Galx1LXK73). 

## Table of contents

- [Frontend Mentor - Mortgage repayment calculator solution](#frontend-mentor---mortgage-repayment-calculator-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)

## Overview

### The challenge

Users should be able to:

- Input mortgage information and see monthly repayment and total repayment amounts after submitting the form.
- Complete the form only using their keyboard.
- View the optimal layout for the interface depending on their device's screen size.
- See hover and focus states for all interactive elements on the page.
- Clear all inputs and reset the result state using the "Clear All" button.

### Screenshot

![Design Preview](./design/desktop-preview.jpg)

### Links

- Solution URL: [Add solution URL here]
- Live Site URL: [Add live site URL here]

## My process

### Built with

- **Semantic HTML5** - Structured for accessibility and SEO.
- **SASS/SCSS** - Modular styles using `@use`, mixins, and BEM naming convention.
- **CSS Custom Properties** - For consistent color themes (Slate and Lime palettes).
- **Flexbox & CSS Grid** - Used for complex form alignment and responsive layouts.
- **Mobile-first workflow** - Optimized for small screens before scaling up.
- **Vanilla JavaScript** - Handles mathematical logic and UI state toggling.

### What I learned

During this project, I implemented a custom calculation logic to handle different mortgage types. If the user selects "Repayment," the monthly amount is calculated using the standard amortization formula:

$$M = P \frac{r(1+r)^n}{(1+r)^n - 1}$$

Where:
- $M$ is the monthly repayment.
- $P$ is the principal loan amount.
- $r$ is the monthly interest rate.
- $n$ is the total number of payments.

I also practiced UI state management by toggling visibility between the "empty" results illustration and the "completed" results data using a parent class.

```javascript
// Example of how I handled the UI toggle
if (type === 'repayment') {
    monthlyRepayment = amount * (monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
} else {
    monthlyRepayment = (amount * rate) / 12; // Interest Only logic
}
resultSection.classList.add('is-active');