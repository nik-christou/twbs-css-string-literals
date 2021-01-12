export const NavbarCss = `

.navbar {
    position: relative;
    display: flexbox;
    display: flex;
    flex-align: center;
    flex-wrap: wrap;
    flex-wrap: wrap;
    flex-pack: justify;
    align-items: center;
    justify-content: space-between;
    padding: .5rem 1rem;
}

.navbar .container,
.navbar .container-fluid,
.navbar>.container-sm,
.navbar>.container-md,
.navbar>.container-lg,
.navbar>.container-xl {
    display: flexbox;
    display: flex;
    flex-align: center;
    flex-wrap: wrap;
    flex-wrap: wrap;
    flex-pack: justify;
    align-items: center;
    justify-content: space-between;
}

.navbar-brand {
    display: inline-block;
    padding-top: .3125rem;
    padding-bottom: .3125rem;
    margin-right: 1rem;
    font-size: 1.25rem;
    line-height: inherit;
    white-space: nowrap;
}

.navbar-brand:hover,
.navbar-brand:focus {
    text-decoration: none;
}

.navbar-nav {
    display: flexbox;
    display: flex;
    flex-direction: column;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
}

.navbar-nav .nav-link {
    padding-right: 0;
    padding-left: 0;
}

.navbar-nav .dropdown-menu {
    position: static;
    float: none;
}

.navbar-text {
    display: inline-block;
    padding-top: .5rem;
    padding-bottom: .5rem;
}

.navbar-collapse {
    flex-align: center;
    flex-basis: 100%;
    flex-grow: 1;
    align-items: center;
    flex-preferred-size: 100%;
    flex-positive: 1;
}

.navbar-toggler {
    padding: .25rem .75rem;
    font-size: 1.25rem;
    line-height: 1;
    background-color: transparent;
    border: 1px solid transparent;
    border-radius: .25rem;
}

.navbar-toggler:hover,
.navbar-toggler:focus {
    text-decoration: none;
}

.navbar-toggler-icon {
    display: inline-block;
    width: 1.5em;
    height: 1.5em;
    vertical-align: middle;
    content: "";
    background: no-repeat center center;
    background-size: 100% 100%;
}

@media (max-width: 575.98px) {
    .navbar-expand-sm>.container,
    .navbar-expand-sm>.container-fluid,
    .navbar-expand-sm>.container-sm,
    .navbar-expand-sm>.container-md,
    .navbar-expand-sm>.container-lg,
    .navbar-expand-sm>.container-xl {
        padding-right: 0;
        padding-left: 0;
    }
}

@media (min-width: 576px) {
    .navbar-expand-sm {
        flex-flow: row nowrap;
        flex-flow: row nowrap;
        flex-pack: start;
        justify-content: flex-start;
    }
    .navbar-expand-sm .navbar-nav {
        flex-direction: row;
        flex-direction: row;
    }
    .navbar-expand-sm .navbar-nav .dropdown-menu {
        position: absolute;
    }
    .navbar-expand-sm .navbar-nav .nav-link {
        padding-right: .5rem;
        padding-left: .5rem;
    }
    .navbar-expand-sm>.container,
    .navbar-expand-sm>.container-fluid,
    .navbar-expand-sm>.container-sm,
    .navbar-expand-sm>.container-md,
    .navbar-expand-sm>.container-lg,
    .navbar-expand-sm>.container-xl {
        flex-wrap: nowrap;
        flex-wrap: nowrap;
    }
    .navbar-expand-sm .navbar-collapse {
        display: flexbox !important;
        display: flex !important;
        flex-preferred-size: auto;
        flex-basis: auto;
    }
    .navbar-expand-sm .navbar-toggler {
        display: none;
    }
}

@media (max-width: 767.98px) {
    .navbar-expand-md>.container,
    .navbar-expand-md>.container-fluid,
    .navbar-expand-md>.container-sm,
    .navbar-expand-md>.container-md,
    .navbar-expand-md>.container-lg,
    .navbar-expand-md>.container-xl {
        padding-right: 0;
        padding-left: 0;
    }
}

@media (min-width: 768px) {
    .navbar-expand-md {
        flex-flow: row nowrap;
        flex-flow: row nowrap;
        flex-pack: start;
        justify-content: flex-start;
    }
    .navbar-expand-md .navbar-nav {
        flex-direction: row;
        flex-direction: row;
    }
    .navbar-expand-md .navbar-nav .dropdown-menu {
        position: absolute;
    }
    .navbar-expand-md .navbar-nav .nav-link {
        padding-right: .5rem;
        padding-left: .5rem;
    }
    .navbar-expand-md>.container,
    .navbar-expand-md>.container-fluid,
    .navbar-expand-md>.container-sm,
    .navbar-expand-md>.container-md,
    .navbar-expand-md>.container-lg,
    .navbar-expand-md>.container-xl {
        flex-wrap: nowrap;
        flex-wrap: nowrap;
    }
    .navbar-expand-md .navbar-collapse {
        display: flexbox !important;
        display: flex !important;
        flex-preferred-size: auto;
        flex-basis: auto;
    }
    .navbar-expand-md .navbar-toggler {
        display: none;
    }
}

@media (max-width: 991.98px) {
    .navbar-expand-lg>.container,
    .navbar-expand-lg>.container-fluid,
    .navbar-expand-lg>.container-sm,
    .navbar-expand-lg>.container-md,
    .navbar-expand-lg>.container-lg,
    .navbar-expand-lg>.container-xl {
        padding-right: 0;
        padding-left: 0;
    }
}

@media (min-width: 992px) {
    .navbar-expand-lg {
        flex-flow: row nowrap;
        flex-flow: row nowrap;
        flex-pack: start;
        justify-content: flex-start;
    }
    .navbar-expand-lg .navbar-nav {
        flex-direction: row;
        flex-direction: row;
    }
    .navbar-expand-lg .navbar-nav .dropdown-menu {
        position: absolute;
    }
    .navbar-expand-lg .navbar-nav .nav-link {
        padding-right: .5rem;
        padding-left: .5rem;
    }
    .navbar-expand-lg>.container,
    .navbar-expand-lg>.container-fluid,
    .navbar-expand-lg>.container-sm,
    .navbar-expand-lg>.container-md,
    .navbar-expand-lg>.container-lg,
    .navbar-expand-lg>.container-xl {
        flex-wrap: nowrap;
        flex-wrap: nowrap;
    }
    .navbar-expand-lg .navbar-collapse {
        display: flexbox !important;
        display: flex !important;
        flex-preferred-size: auto;
        flex-basis: auto;
    }
    .navbar-expand-lg .navbar-toggler {
        display: none;
    }
}

@media (max-width: 1199.98px) {
    .navbar-expand-xl>.container,
    .navbar-expand-xl>.container-fluid,
    .navbar-expand-xl>.container-sm,
    .navbar-expand-xl>.container-md,
    .navbar-expand-xl>.container-lg,
    .navbar-expand-xl>.container-xl {
        padding-right: 0;
        padding-left: 0;
    }
}

@media (min-width: 1200px) {
    .navbar-expand-xl {
        flex-flow: row nowrap;
        flex-flow: row nowrap;
        flex-pack: start;
        justify-content: flex-start;
    }
    .navbar-expand-xl .navbar-nav {
        flex-direction: row;
        flex-direction: row;
    }
    .navbar-expand-xl .navbar-nav .dropdown-menu {
        position: absolute;
    }
    .navbar-expand-xl .navbar-nav .nav-link {
        padding-right: .5rem;
        padding-left: .5rem;
    }
    .navbar-expand-xl>.container,
    .navbar-expand-xl>.container-fluid,
    .navbar-expand-xl>.container-sm,
    .navbar-expand-xl>.container-md,
    .navbar-expand-xl>.container-lg,
    .navbar-expand-xl>.container-xl {
        flex-wrap: nowrap;
        flex-wrap: nowrap;
    }
    .navbar-expand-xl .navbar-collapse {
        display: flexbox !important;
        display: flex !important;
        flex-preferred-size: auto;
        flex-basis: auto;
    }
    .navbar-expand-xl .navbar-toggler {
        display: none;
    }
}

.navbar-expand {
    flex-flow: row nowrap;
    flex-flow: row nowrap;
    flex-pack: start;
    justify-content: flex-start;
}

.navbar-expand>.container,
.navbar-expand>.container-fluid,
.navbar-expand>.container-sm,
.navbar-expand>.container-md,
.navbar-expand>.container-lg,
.navbar-expand>.container-xl {
    padding-right: 0;
    padding-left: 0;
}

.navbar-expand .navbar-nav {
    flex-direction: row;
    flex-direction: row;
}

.navbar-expand .navbar-nav .dropdown-menu {
    position: absolute;
}

.navbar-expand .navbar-nav .nav-link {
    padding-right: .5rem;
    padding-left: .5rem;
}

.navbar-expand>.container,
.navbar-expand>.container-fluid,
.navbar-expand>.container-sm,
.navbar-expand>.container-md,
.navbar-expand>.container-lg,
.navbar-expand>.container-xl {
    flex-wrap: nowrap;
    flex-wrap: nowrap;
}

.navbar-expand .navbar-collapse {
    display: flexbox !important;
    display: flex !important;
    flex-preferred-size: auto;
    flex-basis: auto;
}

.navbar-expand .navbar-toggler {
    display: none;
}

.navbar-light .navbar-brand {
    color: rgba(0, 0, 0, .9);
}

.navbar-light .navbar-brand:hover,
.navbar-light .navbar-brand:focus {
    color: rgba(0, 0, 0, .9);
}

.navbar-light .navbar-nav .nav-link {
    color: rgba(0, 0, 0, .5);
}

.navbar-light .navbar-nav .nav-link:hover,
.navbar-light .navbar-nav .nav-link:focus {
    color: rgba(0, 0, 0, .7);
}

.navbar-light .navbar-nav .nav-link.disabled {
    color: rgba(0, 0, 0, .3);
}

.navbar-light .navbar-nav .show>.nav-link,
.navbar-light .navbar-nav .active>.nav-link,
.navbar-light .navbar-nav .nav-link.show,
.navbar-light .navbar-nav .nav-link.active {
    color: rgba(0, 0, 0, .9);
}

.navbar-light .navbar-toggler {
    color: rgba(0, 0, 0, .5);
    border-color: rgba(0, 0, 0, .1);
}

.navbar-light .navbar-toggler-icon {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.5%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}

.navbar-light .navbar-text {
    color: rgba(0, 0, 0, .5);
}

.navbar-light .navbar-text a {
    color: rgba(0, 0, 0, .9);
}

.navbar-light .navbar-text a:hover,
.navbar-light .navbar-text a:focus {
    color: rgba(0, 0, 0, .9);
}

.navbar-dark .navbar-brand {
    color: #fff;
}

.navbar-dark .navbar-brand:hover,
.navbar-dark .navbar-brand:focus {
    color: #fff;
}

.navbar-dark .navbar-nav .nav-link {
    color: rgba(255, 255, 255, .5);
}

.navbar-dark .navbar-nav .nav-link:hover,
.navbar-dark .navbar-nav .nav-link:focus {
    color: rgba(255, 255, 255, .75);
}

.navbar-dark .navbar-nav .nav-link.disabled {
    color: rgba(255, 255, 255, .25);
}

.navbar-dark .navbar-nav .show>.nav-link,
.navbar-dark .navbar-nav .active>.nav-link,
.navbar-dark .navbar-nav .nav-link.show,
.navbar-dark .navbar-nav .nav-link.active {
    color: #fff;
}

.navbar-dark .navbar-toggler {
    color: rgba(255, 255, 255, .5);
    border-color: rgba(255, 255, 255, .1);
}

.navbar-dark .navbar-toggler-icon {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.5%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
}

.navbar-dark .navbar-text {
    color: rgba(255, 255, 255, .5);
}

.navbar-dark .navbar-text a {
    color: #fff;
}

.navbar-dark .navbar-text a:hover,
.navbar-dark .navbar-text a:focus {
    color: #fff;
}
`;