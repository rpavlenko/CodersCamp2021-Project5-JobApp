# Coders Camp 2021 | Project 5 | Advanced Frontend - Job App

&nbsp;

## Application Demo: [Job App](https://jobapp-main-tak3y.ondigitalocean.app/)

## Table of contents

- [Project Team](#project-team)
- [General Info](#general-info)
- [Application](#application)
- [Technologies](#technologies)
- [Setup](#setup)

&nbsp;

## Project Team

The Project was created as a part of [CodersCamp](https://CodersCamp.pl) initiative by participants of the course, supervised by a mentor.
We encourage you to familiarize yourself with team members' profiles and their portfolio:

**Mentor**: [Michał Ciborowski](https://github.com/Cidebur)

**Project participants:**

- [Barbara Korytkowska](https://github.com/korytba)
- [Magda Zaniewska-Ciecierska](https://github.com/FrontendMagdalena)
- [Roman Pavlenko](https://github.com/rpavlenko)

&nbsp;

As a part of the project team members have been assigned to additional roles:

| Name                       | Role in the Project |
| -------------------------- | ------------------- |
| Magda Zaniewska-Ciecierska | Project Manager     |
| Roman Pavlenko             | Tech Lead           |
| Michał Ciborowski          | Client              |

&nbsp;

## General info

### About Project

"Owocowe Czwartki" (Fruit Thursdays) is a Job Board developed with the idea to help potential junior developers find their first job on a dedicated job board, where only junior dev job offers will be posted. You will be able to not overestimate your salary in compare to middle/senior positions and of course find the best place to eat fruits at Thursdays.

Main features of application include:

- check available job offers
- find new job openings using search
- possibility to add offers to favourite tab
- possibility to apply for a job
- use your own google account to authorise on page

&nbsp;

### Design

Application was developed using Mobile First Design approach and Material UI component library.

&nbsp;

## Application

### Main Page

Main page is a core of application. All job offers are shown there. You can check available offers or search for offers you are interested in using search input.

Navigation is simplified and icon-based which increase accessability. It is available only on hamburger click on mobile version. For desktop version navigation bar always visible.

Main page:

![](./src/assets/readme/main.png 'Main page')

Navigation:

![](./src/assets/readme/navigation.png 'Main page - navigation')

&nbsp;

You can add offer to favourite using 'like' button:

![](./src/assets/readme/like.png 'Favourite offer - like button')

### Authorisation

You can authorise to your account using Google account. Click on user image at the top right corner, and Google popup will show up, where you will be able to sign in:

Before:

![](./src/assets/readme/authorisation.png 'Authorisation')

After:

![](./src/assets/readme/after-authorisation.png 'After Authorisation')

### Favourite offers Page

On this page user can check all offers added to favourite:

![](./src/assets/readme/favourite-page.png 'Favourite page')

### Details Page

User is directed to this page from Main page by clicking on each offer. Here all job offer details are shown.

![](./src/assets/readme/details-page.png 'Details page')

### Apply Page

This page gives possibility to apply for a job on form submit.

![](./src/assets/readme/apply.png 'Apply page')

### 404 Error Page

When page cannot be found in our App user will see below view:

![](./src/assets/readme/404.png '404 Error page')

### Dark Mode

Yes, we have dark mode:
![](./src/assets/readme/dark.png 'Dark')

## Technologies

**Technologies used in Project**:

- React: Router, Hooks
- TypeScript
- Redux toolkit
- Material UI
- Firebase
- MockAPI (backend)
- Vite
- Husky
- Prettier
- Eslint

## Setup

To run this project, install it locally on your machine using npm:

**Clone repository**

```
git clone https://github.com/rpavlenko/CodersCamp2021-Project3-ExpensesApp-backend.git
```

**Install dependencies**

```
$ npm install
```

**Start dev server**

```
$ npm run dev
```

Application will launch on [http://localhost:3000](http://localhost:3000/) in your browser.

&nbsp;
