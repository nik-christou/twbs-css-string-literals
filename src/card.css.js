export const CardCss = `

.card {
    position: relative;
    display: flexbox;
    display: flex;
    flex-direction: column;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, .125);
    border-radius: .25rem;
}

.card>hr {
    margin-right: 0;
    margin-left: 0;
}

.card>.list-group {
    border-top: inherit;
    border-bottom: inherit;
}

.card>.list-group:first-child {
    border-top-width: 0;
    border-top-left-radius: calc(.25rem - 1px);
    border-top-right-radius: calc(.25rem - 1px);
}

.card>.list-group:last-child {
    border-bottom-width: 0;
    border-bottom-right-radius: calc(.25rem - 1px);
    border-bottom-left-radius: calc(.25rem - 1px);
}

.card>.card-header+.list-group,
.card>.list-group+.card-footer {
    border-top: 0;
}

.card-body {
    flex: 1 1 auto;
    flex: 1 1 auto;
    min-height: 1px;
    padding: 1.25rem;
}

.card-title {
    margin-bottom: .75rem;
}

.card-subtitle {
    margin-top: -.375rem;
    margin-bottom: 0;
}

.card-text:last-child {
    margin-bottom: 0;
}

.card-link:hover {
    text-decoration: none;
}

.card-link+.card-link {
    margin-left: 1.25rem;
}

.card-header {
    padding: .75rem 1.25rem;
    margin-bottom: 0;
    background-color: rgba(0, 0, 0, .03);
    border-bottom: 1px solid rgba(0, 0, 0, .125);
}

.card-header:first-child {
    border-radius: calc(.25rem - 1px) calc(.25rem - 1px) 0 0;
}

.card-footer {
    padding: .75rem 1.25rem;
    background-color: rgba(0, 0, 0, .03);
    border-top: 1px solid rgba(0, 0, 0, .125);
}

.card-footer:last-child {
    border-radius: 0 0 calc(.25rem - 1px) calc(.25rem - 1px);
}

.card-header-tabs {
    margin-right: -.625rem;
    margin-bottom: -.75rem;
    margin-left: -.625rem;
    border-bottom: 0;
}

.card-header-pills {
    margin-right: -.625rem;
    margin-left: -.625rem;
}

.card-img-overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 1.25rem;
    border-radius: calc(.25rem - 1px);
}

.card-img,
.card-img-top,
.card-img-bottom {
    flex-negative: 0;
    flex-shrink: 0;
    width: 100%;
}

.card-img,
.card-img-top {
    border-top-left-radius: calc(.25rem - 1px);
    border-top-right-radius: calc(.25rem - 1px);
}

.card-img,
.card-img-bottom {
    border-bottom-right-radius: calc(.25rem - 1px);
    border-bottom-left-radius: calc(.25rem - 1px);
}

.card-deck .card {
    margin-bottom: 15px;
}

@media (min-width: 576px) {
    .card-deck {
        display: flexbox;
        display: flex;
        flex-flow: row wrap;
        flex-flow: row wrap;
        margin-right: -15px;
        margin-left: -15px;
    }
    .card-deck .card {
        flex: 1 0 0%;
        flex: 1 0 0%;
        margin-right: 15px;
        margin-bottom: 0;
        margin-left: 15px;
    }
}

.card-group>.card {
    margin-bottom: 15px;
}

@media (min-width: 576px) {
    .card-group {
        display: flexbox;
        display: flex;
        flex-flow: row wrap;
        flex-flow: row wrap;
    }
    .card-group>.card {
        flex: 1 0 0%;
        flex: 1 0 0%;
        margin-bottom: 0;
    }
    .card-group>.card+.card {
        margin-left: 0;
        border-left: 0;
    }
    .card-group>.card:not(:last-child) {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }
    .card-group>.card:not(:last-child) .card-img-top,
    .card-group>.card:not(:last-child) .card-header {
        border-top-right-radius: 0;
    }
    .card-group>.card:not(:last-child) .card-img-bottom,
    .card-group>.card:not(:last-child) .card-footer {
        border-bottom-right-radius: 0;
    }
    .card-group>.card:not(:first-child) {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
    .card-group>.card:not(:first-child) .card-img-top,
    .card-group>.card:not(:first-child) .card-header {
        border-top-left-radius: 0;
    }
    .card-group>.card:not(:first-child) .card-img-bottom,
    .card-group>.card:not(:first-child) .card-footer {
        border-bottom-left-radius: 0;
    }
}

.card-columns .card {
    margin-bottom: .75rem;
}

@media (min-width: 576px) {
    .card-columns {
        column-count: 3;
        column-count: 3;
        column-count: 3;
        column-gap: 1.25rem;
        column-gap: 1.25rem;
        column-gap: 1.25rem;
        orphans: 1;
        widows: 1;
    }
    .card-columns .card {
        display: inline-block;
        width: 100%;
    }
}

.accordion {
    overflow-anchor: none;
}

.accordion>.card {
    overflow: hidden;
}

.accordion>.card:not(:last-of-type) {
    border-bottom: 0;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
}

.accordion>.card:not(:first-of-type) {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
}

.accordion>.card>.card-header {
    margin-bottom: -1px;
    border-radius: 0;
}  
`;