export const TransitionCss = `

.fade {
    transition: opacity .15s linear;
}

@media (prefers-reduced-motion: reduce) {
    .fade {
        transition: none;
    }
}

.fade:not(.show) {
    opacity: 0;
}

.collapse:not(.show) {
    display: none;
}

.collapsing {
    position: relative;
    height: 0;
    overflow: hidden;
    transition: height .35s ease;
}

@media (prefers-reduced-motion: reduce) {
    .collapsing {
        transition: none;
    }
}
`;