export const SpinnersCss = `

@keyframes spinner-border {
    to {
        transform: rotate(360deg);
        transform: rotate(360deg);
    }
}

@keyframes spinner-border {
    to {
        transform: rotate(360deg);
        transform: rotate(360deg);
    }
}

.spinner-border {
    display: inline-block;
    width: 2rem;
    height: 2rem;
    vertical-align: text-bottom;
    border: .25em solid currentColor;
    border-right-color: transparent;
    border-radius: 50%;
    animation: spinner-border .75s linear infinite;
    animation: spinner-border .75s linear infinite;
}

.spinner-border-sm {
    width: 1rem;
    height: 1rem;
    border-width: .2em;
}

@keyframes spinner-grow {
    0% {
        transform: scale(0);
        transform: scale(0);
    }
    50% {
        opacity: 1;
        transform: none;
        transform: none;
    }
}

@keyframes spinner-grow {
    0% {
        transform: scale(0);
        transform: scale(0);
    }
    50% {
        opacity: 1;
        transform: none;
        transform: none;
    }
}

.spinner-grow {
    display: inline-block;
    width: 2rem;
    height: 2rem;
    vertical-align: text-bottom;
    background-color: currentColor;
    border-radius: 50%;
    opacity: 0;
    animation: spinner-grow .75s linear infinite;
    animation: spinner-grow .75s linear infinite;
}

.spinner-grow-sm {
    width: 1rem;
    height: 1rem;
}
`;