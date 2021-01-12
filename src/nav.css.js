export const NavCss = `

.nav {
    display: flexbox;
    display: flex;
    flex-wrap: wrap;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
}

.nav-link {
    display: block;
    padding: .5rem 1rem;
}

.nav-link:hover,
.nav-link:focus {
    text-decoration: none;
}

.nav-link.disabled {
    color: #6c757d;
    pointer-events: none;
    cursor: default;
}

.nav-tabs {
    border-bottom: 1px solid #dee2e6;
}

.nav-tabs .nav-item {
    margin-bottom: -1px;
}

.nav-tabs .nav-link {
    border: 1px solid transparent;
    border-top-left-radius: .25rem;
    border-top-right-radius: .25rem;
}

.nav-tabs .nav-link:hover,
.nav-tabs .nav-link:focus {
    border-color: #e9ecef #e9ecef #dee2e6;
}

.nav-tabs .nav-link.disabled {
    color: #6c757d;
    background-color: transparent;
    border-color: transparent;
}

.nav-tabs .nav-link.active,
.nav-tabs .nav-item.show .nav-link {
    color: #495057;
    background-color: #fff;
    border-color: #dee2e6 #dee2e6 #fff;
}

.nav-tabs .dropdown-menu {
    margin-top: -1px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
}

.nav-pills .nav-link {
    border-radius: .25rem;
}

.nav-pills .nav-link.active,
.nav-pills .show>.nav-link {
    color: #fff;
    background-color: #007bff;
}

.nav-fill>.nav-link,
.nav-fill .nav-item {
    flex: 1 1 auto;
    flex: 1 1 auto;
    text-align: center;
}

.nav-justified>.nav-link,
.nav-justified .nav-item {
    flex-preferred-size: 0;
    flex-basis: 0;
    flex-positive: 1;
    flex-grow: 1;
    text-align: center;
}

.tab-content>.tab-pane {
    display: none;
}

.tab-content>.active {
    display: block;
}
`;