export const DropdownCss = `

.dropup,
.dropright,
.dropdown,
.dropleft {
    position: relative;
}

.dropdown-toggle {
    white-space: nowrap;
}

.dropdown-toggle::after {
    display: inline-block;
    margin-left: .255em;
    vertical-align: .255em;
    content: "";
    border-top: .3em solid;
    border-right: .3em solid transparent;
    border-bottom: 0;
    border-left: .3em solid transparent;
}

.dropdown-toggle:empty::after {
    margin-left: 0;
}

.dropdown-menu {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1000;
    display: none;
    float: left;
    min-width: 10rem;
    padding: .5rem 0;
    margin: .125rem 0 0;
    font-size: 1rem;
    color: #212529;
    text-align: left;
    list-style: none;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, .15);
    border-radius: .25rem;
}

.dropdown-menu-left {
    right: auto;
    left: 0;
}

.dropdown-menu-right {
    right: 0;
    left: auto;
}

@media (min-width: 576px) {
    .dropdown-menu-sm-left {
        right: auto;
        left: 0;
    }
    .dropdown-menu-sm-right {
        right: 0;
        left: auto;
    }
}

@media (min-width: 768px) {
    .dropdown-menu-md-left {
        right: auto;
        left: 0;
    }
    .dropdown-menu-md-right {
        right: 0;
        left: auto;
    }
}

@media (min-width: 992px) {
    .dropdown-menu-lg-left {
        right: auto;
        left: 0;
    }
    .dropdown-menu-lg-right {
        right: 0;
        left: auto;
    }
}

@media (min-width: 1200px) {
    .dropdown-menu-xl-left {
        right: auto;
        left: 0;
    }
    .dropdown-menu-xl-right {
        right: 0;
        left: auto;
    }
}

.dropup .dropdown-menu {
    top: auto;
    bottom: 100%;
    margin-top: 0;
    margin-bottom: .125rem;
}

.dropup .dropdown-toggle::after {
    display: inline-block;
    margin-left: .255em;
    vertical-align: .255em;
    content: "";
    border-top: 0;
    border-right: .3em solid transparent;
    border-bottom: .3em solid;
    border-left: .3em solid transparent;
}

.dropup .dropdown-toggle:empty::after {
    margin-left: 0;
}

.dropright .dropdown-menu {
    top: 0;
    right: auto;
    left: 100%;
    margin-top: 0;
    margin-left: .125rem;
}

.dropright .dropdown-toggle::after {
    display: inline-block;
    margin-left: .255em;
    vertical-align: .255em;
    content: "";
    border-top: .3em solid transparent;
    border-right: 0;
    border-bottom: .3em solid transparent;
    border-left: .3em solid;
}

.dropright .dropdown-toggle:empty::after {
    margin-left: 0;
}

.dropright .dropdown-toggle::after {
    vertical-align: 0;
}

.dropleft .dropdown-menu {
    top: 0;
    right: 100%;
    left: auto;
    margin-top: 0;
    margin-right: .125rem;
}

.dropleft .dropdown-toggle::after {
    display: inline-block;
    margin-left: .255em;
    vertical-align: .255em;
    content: "";
}

.dropleft .dropdown-toggle::after {
    display: none;
}

.dropleft .dropdown-toggle::before {
    display: inline-block;
    margin-right: .255em;
    vertical-align: .255em;
    content: "";
    border-top: .3em solid transparent;
    border-right: .3em solid;
    border-bottom: .3em solid transparent;
}

.dropleft .dropdown-toggle:empty::after {
    margin-left: 0;
}

.dropleft .dropdown-toggle::before {
    vertical-align: 0;
}

.dropdown-menu[x-placement^="top"],
.dropdown-menu[x-placement^="right"],
.dropdown-menu[x-placement^="bottom"],
.dropdown-menu[x-placement^="left"] {
    right: auto;
    bottom: auto;
}

.dropdown-divider {
    height: 0;
    margin: .5rem 0;
    overflow: hidden;
    border-top: 1px solid #e9ecef;
}

.dropdown-item {
    display: block;
    width: 100%;
    padding: .25rem 1.5rem;
    clear: both;
    font-weight: 400;
    color: #212529;
    text-align: inherit;
    white-space: nowrap;
    background-color: transparent;
    border: 0;
}

.dropdown-item:hover,
.dropdown-item:focus {
    color: #16181b;
    text-decoration: none;
    background-color: #f8f9fa;
}

.dropdown-item.active,
.dropdown-item:active {
    color: #fff;
    text-decoration: none;
    background-color: #007bff;
}

.dropdown-item.disabled,
.dropdown-item:disabled {
    color: #6c757d;
    pointer-events: none;
    background-color: transparent;
}

.dropdown-menu.show {
    display: block;
}

.dropdown-header {
    display: block;
    padding: .5rem 1.5rem;
    margin-bottom: 0;
    font-size: .875rem;
    color: #6c757d;
    white-space: nowrap;
}

.dropdown-item-text {
    display: block;
    padding: .25rem 1.5rem;
    color: #212529;
}
`;