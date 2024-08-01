import { pugReview, catReview, doodleReview, yorkieReview } from "../assets/images";

export const navLinks = [
    { href: '#home', label: "Home"},
    { href: '#DogWalking', label: "Dog Walking"},
    { href: '#PetSitting', label: "PetSitting"},
    { href: '#Boarding', label: "Boarding"},
];

export const reviewData = [
    {
        customerName: "Sarah T.",
        imgUrl: pugReview,
        review: "Sarah stayed at our house with our three yellow labs (one puppy) for the long weekend...",
    },
    {
        customerName: "Matthew G.",
        imgUrl: catReview,
        review: "Great cat sitter, spends time with each cat and makes sure they get everything they need.",
    },
    {
        customerName: "Nicole R.",
        imgUrl: doodleReview,
        review: "My furbaby was well taken care of! Lots of pics and videos to reassure me my baby was good while we were away.",
    },
    {
        customerName: "Audrey V.",
        imgUrl: yorkieReview,
        review: "Sarah took wonderful care of my 2 small dogs so that they were relaxed and happy when I got home. She provided regular...",
    },
];

