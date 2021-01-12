export const BreadcrumbCss = `

.breadcrumb {
    display: flexbox;
    display: flex;
    flex-wrap: wrap;
    flex-wrap: wrap;
    padding: .75rem 1rem;
    margin-bottom: 1rem;
    list-style: none;
    background-color: #e9ecef;
    border-radius: .25rem;
}

.breadcrumb-item {
    display: flexbox;
    display: flex;
}

.breadcrumb-item+.breadcrumb-item {
    padding-left: .5rem;
}

.breadcrumb-item+.breadcrumb-item::before {
    display: inline-block;
    padding-right: .5rem;
    color: #6c757d;
    content: "/";
}

.breadcrumb-item+.breadcrumb-item:hover::before {
    text-decoration: underline;
}

.breadcrumb-item+.breadcrumb-item:hover::before {
    text-decoration: none;
}

.breadcrumb-item.active {
    color: #6c757d;
}
`;