export const FormCss = `

.form-control {
    display: block;
    width: 100%;
    height: calc(1.5em + .75rem + 2px);
    padding: .375rem .75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
}

@media (prefers-reduced-motion: reduce) {
    .form-control {
        transition: none;
    }
}

.form-control::-ms-expand {
    background-color: transparent;
    border: 0;
}

.form-control:-moz-focusring {
    color: transparent;
    text-shadow: 0 0 0 #495057;
}

.form-control:focus {
    color: #495057;
    background-color: #fff;
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 .2rem rgba(0, 123, 255, .25);
}

.form-control::input-placeholder {
    color: #6c757d;
    opacity: 1;
}

.form-control::placeholder {
    color: #6c757d;
    opacity: 1;
}

.form-control:input-placeholder {
    color: #6c757d;
    opacity: 1;
}

.form-control::input-placeholder {
    color: #6c757d;
    opacity: 1;
}

.form-control::placeholder {
    color: #6c757d;
    opacity: 1;
}

.form-control:disabled,
.form-control[readonly] {
    background-color: #e9ecef;
    opacity: 1;
}

input[type="date"].form-control,
input[type="time"].form-control,
input[type="datetime-local"].form-control,
input[type="month"].form-control {
    appearance: none;
    appearance: none;
    appearance: none;
}

select.form-control:focus::-ms-value {
    color: #495057;
    background-color: #fff;
}

.form-control-file,
.form-control-range {
    display: block;
    width: 100%;
}

.col-form-label {
    padding-top: calc(.375rem + 1px);
    padding-bottom: calc(.375rem + 1px);
    margin-bottom: 0;
    font-size: inherit;
    line-height: 1.5;
}

.col-form-label-lg {
    padding-top: calc(.5rem + 1px);
    padding-bottom: calc(.5rem + 1px);
    font-size: 1.25rem;
    line-height: 1.5;
}

.col-form-label-sm {
    padding-top: calc(.25rem + 1px);
    padding-bottom: calc(.25rem + 1px);
    font-size: .875rem;
    line-height: 1.5;
}

.form-control-plaintext {
    display: block;
    width: 100%;
    padding: .375rem 0;
    margin-bottom: 0;
    font-size: 1rem;
    line-height: 1.5;
    color: #212529;
    background-color: transparent;
    border: solid transparent;
    border-width: 1px 0;
}

.form-control-plaintext.form-control-sm,
.form-control-plaintext.form-control-lg {
    padding-right: 0;
    padding-left: 0;
}

.form-control-sm {
    height: calc(1.5em + .5rem + 2px);
    padding: .25rem .5rem;
    font-size: .875rem;
    line-height: 1.5;
    border-radius: .2rem;
}

.form-control-lg {
    height: calc(1.5em + 1rem + 2px);
    padding: .5rem 1rem;
    font-size: 1.25rem;
    line-height: 1.5;
    border-radius: .3rem;
}

select.form-control[size],
select.form-control[multiple] {
    height: auto;
}

textarea.form-control {
    height: auto;
}

.form-group {
    margin-bottom: 1rem;
}

.form-text {
    display: block;
    margin-top: .25rem;
}

.form-row {
    display: flexbox;
    display: flex;
    flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -5px;
    margin-left: -5px;
}

.form-row>.col,
.form-row>[class*="col-"] {
    padding-right: 5px;
    padding-left: 5px;
}

.form-check {
    position: relative;
    display: block;
    padding-left: 1.25rem;
}

.form-check-input {
    position: absolute;
    margin-top: .3rem;
    margin-left: -1.25rem;
}

.form-check-input[disabled]~.form-check-label,
.form-check-input:disabled~.form-check-label {
    color: #6c757d;
}

.form-check-label {
    margin-bottom: 0;
}

.form-check-inline {
    display: inline-flexbox;
    display: inline-flex;
    flex-align: center;
    align-items: center;
    padding-left: 0;
    margin-right: .75rem;
}

.form-check-inline .form-check-input {
    position: static;
    margin-top: 0;
    margin-right: .3125rem;
    margin-left: 0;
}

.valid-feedback {
    display: none;
    width: 100%;
    margin-top: .25rem;
    font-size: 80%;
    color: #28a745;
}

.valid-tooltip {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 5;
    display: none;
    max-width: 100%;
    padding: .25rem .5rem;
    margin-top: .1rem;
    font-size: .875rem;
    line-height: 1.5;
    color: #fff;
    background-color: rgba(40, 167, 69, .9);
    border-radius: .25rem;
}

.was-validated :valid~.valid-feedback,
.was-validated :valid~.valid-tooltip,
.is-valid~.valid-feedback,
.is-valid~.valid-tooltip {
    display: block;
}

.was-validated .form-control:valid,
.form-control.is-valid {
    padding-right: calc(1.5em + .75rem);
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%2328a745' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right calc(.375em + .1875rem) center;
    background-size: calc(.75em + .375rem) calc(.75em + .375rem);
    border-color: #28a745;
}

.was-validated .form-control:valid:focus,
.form-control.is-valid:focus {
    border-color: #28a745;
    box-shadow: 0 0 0 .2rem rgba(40, 167, 69, .25);
}

.was-validated textarea.form-control:valid,
textarea.form-control.is-valid {
    padding-right: calc(1.5em + .75rem);
    background-position: top calc(.375em + .1875rem) right calc(.375em + .1875rem);
}

.was-validated .custom-select:valid,
.custom-select.is-valid {
    padding-right: calc(.75em + 2.3125rem);
    background: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e") no-repeat right .75rem center/8px 10px, url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8' viewBox='0 0 8 8'%3e%3cpath fill='%2328a745' d='M2.3 6.73L.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e") #fff no-repeat center right 1.75rem/calc(.75em + .375rem) calc(.75em + .375rem);
    border-color: #28a745;
}

.was-validated .custom-select:valid:focus,
.custom-select.is-valid:focus {
    border-color: #28a745;
    box-shadow: 0 0 0 .2rem rgba(40, 167, 69, .25);
}

.was-validated .form-check-input:valid~.form-check-label,
.form-check-input.is-valid~.form-check-label {
    color: #28a745;
}

.was-validated .form-check-input:valid~.valid-feedback,
.was-validated .form-check-input:valid~.valid-tooltip,
.form-check-input.is-valid~.valid-feedback,
.form-check-input.is-valid~.valid-tooltip {
    display: block;
}

.was-validated .custom-control-input:valid~.custom-control-label,
.custom-control-input.is-valid~.custom-control-label {
    color: #28a745;
}

.was-validated .custom-control-input:valid~.custom-control-label::before,
.custom-control-input.is-valid~.custom-control-label::before {
    border-color: #28a745;
}

.was-validated .custom-control-input:valid:checked~.custom-control-label::before,
.custom-control-input.is-valid:checked~.custom-control-label::before {
    background-color: #34ce57;
    border-color: #34ce57;
}

.was-validated .custom-control-input:valid:focus~.custom-control-label::before,
.custom-control-input.is-valid:focus~.custom-control-label::before {
    box-shadow: 0 0 0 .2rem rgba(40, 167, 69, .25);
}

.was-validated .custom-control-input:valid:focus:not(:checked)~.custom-control-label::before,
.custom-control-input.is-valid:focus:not(:checked)~.custom-control-label::before {
    border-color: #28a745;
}

.was-validated .custom-file-input:valid~.custom-file-label,
.custom-file-input.is-valid~.custom-file-label {
    border-color: #28a745;
}

.was-validated .custom-file-input:valid:focus~.custom-file-label,
.custom-file-input.is-valid:focus~.custom-file-label {
    border-color: #28a745;
    box-shadow: 0 0 0 .2rem rgba(40, 167, 69, .25);
}

.invalid-feedback {
    display: none;
    width: 100%;
    margin-top: .25rem;
    font-size: 80%;
    color: #dc3545;
}

.invalid-tooltip {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 5;
    display: none;
    max-width: 100%;
    padding: .25rem .5rem;
    margin-top: .1rem;
    font-size: .875rem;
    line-height: 1.5;
    color: #fff;
    background-color: rgba(220, 53, 69, .9);
    border-radius: .25rem;
}

.was-validated :invalid~.invalid-feedback,
.was-validated :invalid~.invalid-tooltip,
.is-invalid~.invalid-feedback,
.is-invalid~.invalid-tooltip {
    display: block;
}

.was-validated .form-control:invalid,
.form-control.is-invalid {
    padding-right: calc(1.5em + .75rem);
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right calc(.375em + .1875rem) center;
    background-size: calc(.75em + .375rem) calc(.75em + .375rem);
    border-color: #dc3545;
}

.was-validated .form-control:invalid:focus,
.form-control.is-invalid:focus {
    border-color: #dc3545;
    box-shadow: 0 0 0 .2rem rgba(220, 53, 69, .25);
}

.was-validated textarea.form-control:invalid,
textarea.form-control.is-invalid {
    padding-right: calc(1.5em + .75rem);
    background-position: top calc(.375em + .1875rem) right calc(.375em + .1875rem);
}

.was-validated .custom-select:invalid,
.custom-select.is-invalid {
    padding-right: calc(.75em + 2.3125rem);
    background: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='4' height='5' viewBox='0 0 4 5'%3e%3cpath fill='%23343a40' d='M2 0L0 2h4zm0 5L0 3h4z'/%3e%3c/svg%3e") no-repeat right .75rem center/8px 10px, url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='none' stroke='%23dc3545' viewBox='0 0 12 12'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e") #fff no-repeat center right 1.75rem/calc(.75em + .375rem) calc(.75em + .375rem);
    border-color: #dc3545;
}

.was-validated .custom-select:invalid:focus,
.custom-select.is-invalid:focus {
    border-color: #dc3545;
    box-shadow: 0 0 0 .2rem rgba(220, 53, 69, .25);
}

.was-validated .form-check-input:invalid~.form-check-label,
.form-check-input.is-invalid~.form-check-label {
    color: #dc3545;
}

.was-validated .form-check-input:invalid~.invalid-feedback,
.was-validated .form-check-input:invalid~.invalid-tooltip,
.form-check-input.is-invalid~.invalid-feedback,
.form-check-input.is-invalid~.invalid-tooltip {
    display: block;
}

.was-validated .custom-control-input:invalid~.custom-control-label,
.custom-control-input.is-invalid~.custom-control-label {
    color: #dc3545;
}

.was-validated .custom-control-input:invalid~.custom-control-label::before,
.custom-control-input.is-invalid~.custom-control-label::before {
    border-color: #dc3545;
}

.was-validated .custom-control-input:invalid:checked~.custom-control-label::before,
.custom-control-input.is-invalid:checked~.custom-control-label::before {
    background-color: #e4606d;
    border-color: #e4606d;
}

.was-validated .custom-control-input:invalid:focus~.custom-control-label::before,
.custom-control-input.is-invalid:focus~.custom-control-label::before {
    box-shadow: 0 0 0 .2rem rgba(220, 53, 69, .25);
}

.was-validated .custom-control-input:invalid:focus:not(:checked)~.custom-control-label::before,
.custom-control-input.is-invalid:focus:not(:checked)~.custom-control-label::before {
    border-color: #dc3545;
}

.was-validated .custom-file-input:invalid~.custom-file-label,
.custom-file-input.is-invalid~.custom-file-label {
    border-color: #dc3545;
}

.was-validated .custom-file-input:invalid:focus~.custom-file-label,
.custom-file-input.is-invalid:focus~.custom-file-label {
    border-color: #dc3545;
    box-shadow: 0 0 0 .2rem rgba(220, 53, 69, .25);
}

.form-inline {
    display: flexbox;
    display: flex;
    flex-align: center;
    flex-flow: row wrap;
    flex-flow: row wrap;
    align-items: center;
}

.form-inline .form-check {
    width: 100%;
}

@media (min-width: 576px) {
    .form-inline label {
        display: flexbox;
        display: flex;
        flex-align: center;
        flex-pack: center;
        align-items: center;
        justify-content: center;
        margin-bottom: 0;
    }
    .form-inline .form-group {
        display: flexbox;
        display: flex;
        flex: 0 0 auto;
        flex: 0 0 auto;
        flex-align: center;
        flex-flow: row wrap;
        flex-flow: row wrap;
        align-items: center;
        margin-bottom: 0;
    }
    .form-inline .form-control {
        display: inline-block;
        width: auto;
        vertical-align: middle;
    }
    .form-inline .form-control-plaintext {
        display: inline-block;
    }
    .form-inline .input-group,
    .form-inline .custom-select {
        width: auto;
    }
    .form-inline .form-check {
        display: flexbox;
        display: flex;
        flex-align: center;
        flex-pack: center;
        align-items: center;
        justify-content: center;
        width: auto;
        padding-left: 0;
    }
    .form-inline .form-check-input {
        position: relative;
        flex-negative: 0;
        flex-shrink: 0;
        margin-top: 0;
        margin-right: .25rem;
        margin-left: 0;
    }
    .form-inline .custom-control {
        flex-align: center;
        flex-pack: center;
        align-items: center;
        justify-content: center;
    }
    .form-inline .custom-control-label {
        margin-bottom: 0;
    }
}
`;