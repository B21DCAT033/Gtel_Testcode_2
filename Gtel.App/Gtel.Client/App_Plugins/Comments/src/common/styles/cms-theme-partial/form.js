import { css } from "@umbraco-cms/backoffice/external/lit";
const Form = css`
  .form-label {
    margin-bottom: 0.5rem;
    font-size: 1.05rem;
    font-weight: 500;
    color: #3F4254;
  }

  .col-form-label {
    padding-top: calc(0.775rem + 1px);
    padding-bottom: calc(0.775rem + 1px);
    margin-bottom: 0;
    font-size: inherit;
    font-weight: 500;
    line-height: 1.5;
    color: #3F4254;
  }

  .col-form-label-lg {
    padding-top: calc(0.825rem + 1px);
    padding-bottom: calc(0.825rem + 1px);
    font-size: 1.15rem;
  }

  .col-form-label-sm {
    padding-top: calc(0.55rem + 1px);
    padding-bottom: calc(0.55rem + 1px);
    font-size: 0.925rem;
  }

  .form-group {
    margin-bottom: 1rem;
  }

  .form-group>label {
    margin-bottom: 0.25rem;
  }

  .form-text {
    margin-top: 0.5rem;
    font-size: 0.925rem;
    color: #A1A5B7;
  }

  .form-control {
    display: block;
    width: 100%;
    padding: 0.775rem 1rem;
    font-size: 1.1rem;
    /* line-height: 1.5; */
    color: #5E6278;
    background-color: #ffffff;
    background-clip: padding-box;
    border: 1px solid #E4E6EF;
    border-radius: 0.475rem;
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.075);
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }

  @-moz-document url-prefix() {
    .form-control {
      caret-color: #5E6277;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .form-control {
      transition: none;
    }
  }

  .form-control[type=file] {
    overflow: hidden;
  }

  .form-control[type=file]:not(:disabled):not([readonly]) {
    cursor: pointer;
  }

  .form-control:focus {
    color: #5E6278;
    background-color: #ffffff;
    border-color: #B5B5C3;
    outline: 0;
  }

  .form-control::-webkit-date-and-time-value {
    height: 1.5em;
  }

  .form-control::placeholder {
    color: #A1A5B7;
    opacity: 1;
  }

  .form-control:disabled {
    background-color: #eff2f5;
    border-color: #E4E6EF;
    opacity: 1;
  }

  .form-control::file-selector-button {
    padding: 0.775rem 1rem;
    margin: -0.775rem -1rem;
    margin-inline-end: 1rem;
    color: #5E6278;
    background-color: #f5f8fa;
    pointer-events: none;
    border-color: inherit;
    border-style: solid;
    border-width: 0;
    border-inline-end-width: 1px;
    border-radius: 0;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }

  @media (prefers-reduced-motion: reduce) {
    .form-control::file-selector-button {
      transition: none;
    }
  }

  .form-control:hover:not(:disabled):not([readonly])::file-selector-button {
    background-color: shade-color(#f5f8fa, 5%);
  }

  .form-control-plaintext {
    display: block;
    width: 100%;
    padding: 0.775rem 0;
    margin-bottom: 0;
    line-height: 1.5;
    color: #5E6278;
    background-color: transparent;
    border: solid transparent;
    border-width: 1px 0;
  }

  .form-control-plaintext:focus {
    outline: 0;
  }

  .form-control-plaintext.form-control-sm,
  .form-control-plaintext.form-control-lg {
    padding-right: 0;
    padding-left: 0;
  }

  .form-control-sm {
    /* min-height: calc(1.5em + 1.1rem + 2px); */
    padding: 0.55rem 0.75rem;
    font-size: 0.925rem;
    border-radius: 0.425rem;
  }

  .form-control-sm::file-selector-button {
    padding: 0.55rem 0.75rem;
    margin: -0.55rem -0.75rem;
    margin-inline-end: 0.75rem;
  }

  .form-control-lg {
    /* min-height: calc(1.5em + 1.65rem + 2px); */
    padding: 0.825rem 1.5rem;
    font-size: 1.15rem;
    border-radius: 0.625rem;
  }

  .form-control-lg::file-selector-button {
    padding: 0.825rem 1.5rem;
    margin: -0.825rem -1.5rem;
    margin-inline-end: 1.5rem;
  }

  textarea.form-control {
    min-height: 2.5rem;
  }

  textarea.form-control-sm {
    min-height: 2rem;
  }

  textarea.form-control-lg {
    min-height: 3rem;
  }

  .form-control-color {
    width: 3rem;
    height: calc(1.5em + 1.55rem + 2px);
    padding: 0.775rem;
  }

  .form-control-color:not(:disabled):not([readonly]) {
    cursor: pointer;
  }

  .form-control-color::-moz-color-swatch {
    border: 0 !important;
    border-radius: 0.475rem;
  }

  .form-control-color::-webkit-color-swatch {
    border-radius: 0.475rem;
  }

  .form-control-color.form-control-sm {
    height: calc(1.5em + 1.1rem + 2px);
  }

  .form-control-color.form-control-lg {
    height: calc(1.5em + 1.65rem + 2px);
  }

  .form-select {
    display: block;
    width: 100%;
    padding: 0.775rem 3rem 0.775rem 1rem;
    -moz-padding-start: calc(1rem - 3px);
    font-size: 1.1rem;
    font-weight: 500;
    line-height: 1.5;
    color: #5E6278;
    background-color: #ffffff;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%237E8299' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right 1rem center;
    background-size: 16px 12px;
    border: 1px solid #E4E6EF;
    border-radius: 0.475rem;
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.075);
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    appearance: none;
  }

  @media (prefers-reduced-motion: reduce) {
    .form-select {
      transition: none;
    }
  }

  .form-select:focus {
    border-color: #B5B5C3;
    outline: 0;
  }

  .form-select[multiple],
  .form-select[size]:not([size="1"]) {
    padding-right: 1rem;
    background-image: none;
  }

  .form-select:disabled {
    background-color: #eff2f5;
    border-color: #E4E6EF;
  }

  .form-select:-moz-focusring {
    color: transparent;
    text-shadow: 0 0 0 #5E6278;
  }

  .form-select-sm {
    padding-top: 0.55rem;
    padding-bottom: 0.55rem;
    padding-left: 0.75rem;
    font-size: 0.925rem;
    border-radius: 0.425rem;
  }

  .form-select-lg {
    padding-top: 0.825rem;
    padding-bottom: 0.825rem;
    padding-left: 1.5rem;
    font-size: 1.15rem;
    border-radius: 0.625rem;
  }

  .form-check {
    display: block;
    min-height: 1.5rem;
    padding-left: 2.25rem;
    margin-bottom: 0.125rem;
  }

  .form-check .form-check-input {
    float: left;
    margin-left: -2.25rem;
  }

  .form-check-reverse {
    padding-right: 2.25rem;
    padding-left: 0;
    text-align: right;
  }

  .form-check-reverse .form-check-input {
    float: right;
    margin-right: -2.25rem;
    margin-left: 0;
  }

  .form-check-input {
    width: 1.75rem;
    height: 1.75rem;
    margin-top: -0.125rem;
    vertical-align: top;
    background-color: transparent;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    border: 1px solid #E4E6EF;
    appearance: none;
    print-color-adjust: exact;
  }

  .form-check-input[type=checkbox] {
    border-radius: 0.45em;
  }

  .form-check-input[type=radio] {
    border-radius: 50%;
  }

  .form-check-input:active {
    filter: brightness(90%);
  }

  .form-check-input:focus {
    border-color: #B5B5C3;
    outline: 0;
    box-shadow: none;
  }

  .form-check-input:checked {
    background-color: #009ef7;
    border-color: #009ef7;
  }

  .form-check-input:checked[type=checkbox] {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 13 11' width='13' height='11' fill='none'%3e%3cpath d='M11.0426 1.02893C11.3258 0.695792 11.8254 0.655283 12.1585 0.938451C12.4917 1.22162 12.5322 1.72124 12.249 2.05437L5.51985 9.97104C5.23224 10.3094 4.72261 10.3451 4.3907 10.05L0.828197 6.88335C0.50141 6.59288 0.471975 6.09249 0.762452 5.7657C1.05293 5.43891 1.55332 5.40948 1.88011 5.69995L4.83765 8.32889L11.0426 1.02893Z' fill='%23ffffff'/%3e%3c/svg%3e");
  }

  .form-check-input:checked[type=radio] {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='2' fill='%23ffffff'/%3e%3c/svg%3e");
  }

  .form-check-input[type=checkbox]:indeterminate {
    background-color: #009ef7;
    border-color: #009ef7;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23ffffff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10h8'/%3e%3c/svg%3e");
  }

  .form-check-input:disabled {
    pointer-events: none;
    filter: none;
    opacity: 0.5;
  }

  .form-check-input[disabled]~.form-check-label,
  .form-check-input:disabled~.form-check-label {
    cursor: default;
    opacity: 0.5;
  }

  .form-switch {
    padding-left: 3.75rem;
  }

  .form-switch .form-check-input {
    width: 3.25rem;
    margin-left: -3.75rem;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='rgba%280, 0, 0, 0.25%29'/%3e%3c/svg%3e");
    background-position: left center;
    border-radius: 3.25rem;
    transition: background-position 0.15s ease-in-out;
  }

  @media (prefers-reduced-motion: reduce) {
    .form-switch .form-check-input {
      transition: none;
    }
  }

  .form-switch .form-check-input:focus {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23B5B5C3'/%3e%3c/svg%3e");
  }

  .form-switch .form-check-input:checked {
    background-position: right center;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23ffffff'/%3e%3c/svg%3e");
  }

  .form-switch.form-check-reverse {
    padding-right: 3.75rem;
    padding-left: 0;
  }

  .form-switch.form-check-reverse .form-check-input {
    margin-right: -3.75rem;
    margin-left: 0;
  }

  .form-check-inline {
    display: inline-block;
    margin-right: 1rem;
  }



  .form-range {
    width: 100%;
    height: 1.5rem;
    padding: 0;
    background-color: transparent;
    appearance: none;
  }

  .form-range:focus {
    outline: 0;
  }

  .form-range:focus::-webkit-slider-thumb {
    box-shadow: 0 0 0 1px #ffffff, 0 0 0 0.25rem rgba(0, 158, 247, 0.25);
  }

  .form-range:focus::-moz-range-thumb {
    box-shadow: 0 0 0 1px #ffffff, 0 0 0 0.25rem rgba(0, 158, 247, 0.25);
  }

  .form-range::-moz-focus-outer {
    border: 0;
  }

  .form-range::-webkit-slider-thumb {
    width: 1rem;
    height: 1rem;
    margin-top: -0.25rem;
    background-color: #009ef7;
    border: 0;
    border-radius: 1rem;
    box-shadow: 0 0.1rem 0.25rem rgba(0, 0, 0, 0.1);
    transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    appearance: none;
  }

  @media (prefers-reduced-motion: reduce) {
    .form-range::-webkit-slider-thumb {
      transition: none;
    }
  }

  .form-range::-webkit-slider-thumb:active {
    background-color: #b3e2fd;
  }

  .form-range::-webkit-slider-runnable-track {
    width: 100%;
    height: 0.5rem;
    color: transparent;
    cursor: pointer;
    background-color: var(--kt-gray-300);
    border-color: transparent;
    border-radius: 0.475rem;
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.075);
  }

  .form-range::-moz-range-thumb {
    width: 1rem;
    height: 1rem;
    background-color: #009ef7;
    border: 0;
    border-radius: 1rem;
    box-shadow: 0 0.1rem 0.25rem rgba(0, 0, 0, 0.1);
    transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    appearance: none;
  }

  @media (prefers-reduced-motion: reduce) {
    .form-range::-moz-range-thumb {
      transition: none;
    }
  }

  .form-range::-moz-range-thumb:active {
    background-color: #b3e2fd;
  }

  .form-range::-moz-range-track {
    width: 100%;
    height: 0.5rem;
    color: transparent;
    cursor: pointer;
    background-color: var(--kt-gray-300);
    border-color: transparent;
    border-radius: 0.475rem;
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.075);
  }

  .form-range:disabled {
    pointer-events: none;
  }

  .form-range:disabled::-webkit-slider-thumb {
    background-color: var(--kt-gray-500);
  }

  .form-range:disabled::-moz-range-thumb {
    background-color: var(--kt-gray-500);
  }

  .form-floating {
    position: relative;
  }

  .form-floating>.form-control,
  .form-floating>.form-control-plaintext,
  .form-floating>.form-select {
    height: calc(3.75rem + 2px);
    line-height: 1.25;
  }

  .form-floating>label {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 1rem 1rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    pointer-events: none;
    border: 1px solid transparent;
    transform-origin: 0 0;
    transition: opacity 0.1s ease-in-out, transform 0.1s ease-in-out;
  }

  @media (prefers-reduced-motion: reduce) {
    .form-floating>label {
      transition: none;
    }
  }

  .form-floating>.form-control,
  .form-floating>.form-control-plaintext {
    padding: 1rem 1rem;
  }

  .form-floating>.form-control::placeholder,
  .form-floating>.form-control-plaintext::placeholder {
    color: transparent;
  }

  .form-floating>.form-control:focus,
  .form-floating>.form-control:not(:placeholder-shown),
  .form-floating>.form-control-plaintext:focus,
  .form-floating>.form-control-plaintext:not(:placeholder-shown) {
    padding-top: 2.15rem;
    padding-bottom: 0.625rem;
  }

  .form-floating>.form-control:-webkit-autofill,
  .form-floating>.form-control-plaintext:-webkit-autofill {
    padding-top: 2.15rem;
    padding-bottom: 0.625rem;
  }

  .form-floating>.form-select {
    padding-top: 2.15rem;
    padding-bottom: 0.625rem;
  }

  .form-floating>.form-control:focus~label,
  .form-floating>.form-control:not(:placeholder-shown)~label,
  .form-floating>.form-control-plaintext~label,
  .form-floating>.form-select~label {
    opacity: 0.65;
    transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);
  }

  .form-floating>.form-control:-webkit-autofill~label {
    opacity: 0.65;
    transform: scale(0.85) translateY(-0.5rem) translateX(0.15rem);
  }

  .form-floating>.form-control-plaintext~label {
    border-width: 1px 0;
  }

  .input-group {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    width: 100%;
  }

  .input-group>.form-control,
  .input-group>.form-select,
  .input-group>.form-floating {
    position: relative;
    flex: 1 1 auto;
    width: 1%;
    min-width: 0;
  }

  .input-group>.form-control:focus,
  .input-group>.form-select:focus,
  .input-group>.form-floating:focus-within {
    z-index: 3;
  }

  .input-group .btn {
    position: relative;
    z-index: 2;
  }

  .input-group .btn:focus {
    z-index: 3;
  }

  .input-group-text {
    display: flex;
    align-items: center;
    padding: 0.775rem 1rem;
    font-size: 1.1rem;
    font-weight: 500;
    line-height: 1.5;
    color: #5E6278;
    text-align: center;
    white-space: nowrap;
    background-color: #f5f8fa;
    border: 1px solid #E4E6EF;
    border-radius: 0.475rem;
  }

  .input-group-lg>.form-control,
  .input-group-lg>.form-select,
  .input-group-lg>.input-group-text,
  .input-group-lg>.btn {
    padding: 0.825rem 1.5rem;
    font-size: 1.15rem;
    border-radius: 0.625rem;
  }

  .input-group-sm>.form-control,
  .input-group-sm>.form-select,
  .input-group-sm>.input-group-text,
  .input-group-sm>.btn {
    padding: 0.55rem 0.75rem;
    font-size: 0.925rem;
    border-radius: 0.425rem;
  }

  .input-group-lg>.form-select,
  .input-group-sm>.form-select {
    padding-right: 4rem;
  }

  .input-group:not(.has-validation)> :not(:last-child):not(.dropdown-toggle):not(.dropdown-menu):not(.form-floating),
  .input-group:not(.has-validation)>.dropdown-toggle:nth-last-child(n+3),
  .input-group:not(.has-validation)>.form-floating:not(:last-child)>.form-control,
  .input-group:not(.has-validation)>.form-floating:not(:last-child)>.form-select {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  .input-group.has-validation> :nth-last-child(n+3):not(.dropdown-toggle):not(.dropdown-menu):not(.form-floating),
  .input-group.has-validation>.dropdown-toggle:nth-last-child(n+4),
  .input-group.has-validation>.form-floating:nth-last-child(n+3)>.form-control,
  .input-group.has-validation>.form-floating:nth-last-child(n+3)>.form-select {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  .input-group> :not(:first-child):not(.dropdown-menu):not(.form-floating):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback),
  .input-group>.form-floating:not(:first-child)>.form-control,
  .input-group>.form-floating:not(:first-child)>.form-select {
    margin-left: -1px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  .valid-feedback {
    display: none;
    width: 100%;
    margin-top: 0.5rem;
    font-size: 0.925rem;
    color: #50cd89;
  }

  .valid-tooltip {
    position: absolute;
    top: 100%;
    z-index: 5;
    display: none;
    max-width: 100%;
    padding: 0.75rem 1rem;
    margin-top: 0.1rem;
    font-size: 0.925rem;
    color: #000000;
    background-color: #50cd89;
    border-radius: 0.475rem;
  }

  .was-validated :valid~.valid-feedback,
  .was-validated :valid~.valid-tooltip,
  .is-valid~.valid-feedback,
  .is-valid~.valid-tooltip {
    display: block;
  }

  .was-validated .form-control:valid,
  .form-control.is-valid {
    border-color: #50cd89;
    padding-right: calc(1.5em + 1.55rem);
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%2350cd89' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right calc(0.375em + 0.3875rem) center;
    background-size: calc(0.75em + 0.775rem) calc(0.75em + 0.775rem);
  }

  .was-validated .form-control:valid:focus,
  .form-control.is-valid:focus {
    border-color: #50cd89;
    box-shadow: 0 0 0 0.25rem rgba(80, 205, 137, 0.25);
  }

  .was-validated textarea.form-control:valid,
  textarea.form-control.is-valid {
    padding-right: calc(1.5em + 1.55rem);
    background-position: top calc(0.375em + 0.3875rem) right calc(0.375em + 0.3875rem);
  }

  .was-validated .form-select:valid,
  .form-select.is-valid {
    border-color: #50cd89;
  }

  .was-validated .form-select:valid:not([multiple]):not([size]),
  .was-validated .form-select:valid:not([multiple])[size="1"],
  .form-select.is-valid:not([multiple]):not([size]),
  .form-select.is-valid:not([multiple])[size="1"] {
    padding-right: 5.5rem;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%237E8299' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e"), url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%2350cd89' d='M2.3 6.73.6 4.53c-.4-1.04.46-1.4 1.1-.8l1.1 1.4 3.4-3.8c.6-.63 1.6-.27 1.2.7l-4 4.6c-.43.5-.8.4-1.1.1z'/%3e%3c/svg%3e");
    background-position: right 1rem center, center right 3rem;
    background-size: 16px 12px, calc(0.75em + 0.775rem) calc(0.75em + 0.775rem);
  }

  .was-validated .form-select:valid:focus,
  .form-select.is-valid:focus {
    border-color: #50cd89;
    box-shadow: 0 0 0 0.25rem rgba(80, 205, 137, 0.25);
  }

  .was-validated .form-control-color:valid,
  .form-control-color.is-valid {
    width: calc(3rem + calc(1.5em + 1.55rem));
  }

  .was-validated .form-check-input:valid,
  .form-check-input.is-valid {
    border-color: #50cd89;
  }

  .was-validated .form-check-input:valid:checked,
  .form-check-input.is-valid:checked {
    background-color: #50cd89;
  }

  .was-validated .form-check-input:valid:focus,
  .form-check-input.is-valid:focus {
    box-shadow: 0 0 0 0.25rem rgba(80, 205, 137, 0.25);
  }

  .was-validated .form-check-input:valid~.form-check-label,
  .form-check-input.is-valid~.form-check-label {
    color: #50cd89;
  }

  .form-check-inline .form-check-input~.valid-feedback {
    margin-left: 0.5em;
  }

  .was-validated .input-group .form-control:valid,
  .input-group .form-control.is-valid,
  .was-validated .input-group .form-select:valid,
  .input-group .form-select.is-valid {
    z-index: 1;
  }

  .was-validated .input-group .form-control:valid:focus,
  .input-group .form-control.is-valid:focus,
  .was-validated .input-group .form-select:valid:focus,
  .input-group .form-select.is-valid:focus {
    z-index: 3;
  }

  .invalid-feedback {
    display: none;
    width: 100%;
    margin-top: 0.5rem;
    font-size: 0.925rem;
    color: #f1416c;
  }

  .invalid-tooltip {
    position: absolute;
    top: 100%;
    z-index: 5;
    display: none;
    max-width: 100%;
    padding: 0.75rem 1rem;
    margin-top: 0.1rem;
    font-size: 0.925rem;
    color: #000000;
    background-color: #f1416c;
    border-radius: 0.475rem;
  }

  .was-validated :invalid~.invalid-feedback,
  .was-validated :invalid~.invalid-tooltip,
  .is-invalid~.invalid-feedback,
  .is-invalid~.invalid-tooltip {
    display: block;
  }

  .was-validated .form-control:invalid,
  .form-control.is-invalid {
    border-color: #f1416c;
    padding-right: calc(1.5em + 1.55rem);
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23f1416c'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23f1416c' stroke='none'/%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right calc(0.375em + 0.3875rem) center;
    background-size: calc(0.75em + 0.775rem) calc(0.75em + 0.775rem);
  }

  .was-validated .form-control:invalid:focus,
  .form-control.is-invalid:focus {
    border-color: #f1416c;
    box-shadow: 0 0 0 0.25rem rgba(241, 65, 108, 0.25);
  }

  .was-validated textarea.form-control:invalid,
  textarea.form-control.is-invalid {
    padding-right: calc(1.5em + 1.55rem);
    background-position: top calc(0.375em + 0.3875rem) right calc(0.375em + 0.3875rem);
  }

  .was-validated .form-select:invalid,
  .form-select.is-invalid {
    border-color: #f1416c;
  }

  .was-validated .form-select:invalid:not([multiple]):not([size]),
  .was-validated .form-select:invalid:not([multiple])[size="1"],
  .form-select.is-invalid:not([multiple]):not([size]),
  .form-select.is-invalid:not([multiple])[size="1"] {
    padding-right: 5.5rem;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%237E8299' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e"), url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23f1416c'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23f1416c' stroke='none'/%3e%3c/svg%3e");
    background-position: right 1rem center, center right 3rem;
    background-size: 16px 12px, calc(0.75em + 0.775rem) calc(0.75em + 0.775rem);
  }

  .was-validated .form-select:invalid:focus,
  .form-select.is-invalid:focus {
    border-color: #f1416c;
    box-shadow: 0 0 0 0.25rem rgba(241, 65, 108, 0.25);
  }

  .was-validated .form-control-color:invalid,
  .form-control-color.is-invalid {
    width: calc(3rem + calc(1.5em + 1.55rem));
  }

  .was-validated .form-check-input:invalid,
  .form-check-input.is-invalid {
    border-color: #f1416c;
  }

  .was-validated .form-check-input:invalid:checked,
  .form-check-input.is-invalid:checked {
    background-color: #f1416c;
  }

  .was-validated .form-check-input:invalid:focus,
  .form-check-input.is-invalid:focus {
    box-shadow: 0 0 0 0.25rem rgba(241, 65, 108, 0.25);
  }

  .was-validated .form-check-input:invalid~.form-check-label,
  .form-check-input.is-invalid~.form-check-label {
    color: #f1416c;
  }

  .form-check-inline .form-check-input~.invalid-feedback {
    margin-left: 0.5em;
  }

  .was-validated .input-group .form-control:invalid,
  .input-group .form-control.is-invalid,
  .was-validated .input-group .form-select:invalid,
  .input-group .form-select.is-invalid {
    z-index: 2;
  }

  .was-validated .input-group .form-control:invalid:focus,
  .input-group .form-control.is-invalid:focus,
  .was-validated .input-group .form-select:invalid:focus,
  .input-group .form-select.is-invalid:focus {
    z-index: 3;
  }

  .form-label {
    color: var(--kt-form-label-color);
  }

  .col-form-label {
    color: var(--kt-form-label-color);
  }

  .form-text {
    color: var(--kt-form-text-color);
  }

  .form-control {
    color: var(--kt-input-color);
    background-color: var(--kt-input-bg);
    border: 1px solid var(--mdc-gray-500);
    box-shadow: none !important;
  }

  .form-control:focus {
    color: var(--kt-input-focus-color);
    background-color: var(--kt-input-focus-bg);
    border-color: var(--mdc-blue-400);
  }

  .form-control::placeholder {
    color: var(--kt-input-placeholder-color);
  }

  .form-control:disabled,
  .form-control[readonly] {
    color: var(--kt-input-disabled-color);
    background-color: var(--kt-input-disabled-bg);
    border-color: var(--kt-input-disabled-border-color);
  }

  .form-control::file-selector-button {
    color: var(--kt-form-file-button-color);
    background-color: var(--kt-form-file-button-bg);
  }

  .form-control:hover:not(:disabled):not([readonly])::file-selector-button {
    background-color: var(--kt-form-file-button-hover-bg);
  }

  .form-control-plaintext {
    color: var(--kt-input-plaintext-color);
  }

  .form-select {
    color: var(--kt-form-select-color);
    background-color: var(--kt-form-select-bg);
    background-image: var(--kt-form-select-indicator);
    border: 1px solid var(--kt-form-select-border-color);
    box-shadow: var(--kt-form-select-box-shadow);
    appearance: none;
  }

  .form-select:focus {
    border-color: var(--kt-form-select-focus-border-color);
    box-shadow: var(--kt-form-select-box-shadow), var(--kt-form-select-focus-box-shadow);
  }

  .form-select:disabled {
    color: var(--kt-form-select-disabled-color);
    background-color: var(--kt-form-select-disabled-bg);
    border-color: var(--kt-form-select-disabled-border-color);
  }

  .form-select:-moz-focusring {
    text-shadow: 0 0 0 var(--kt-form-select-color);
  }

  .form-check-input {
    background-color: var(--kt-form-check-input-bg);
    border: var(--kt-form-check-input-border);
  }

  .form-check-input:active {
    filter: var(--kt-form-check-input-active-filter);
  }

  .form-check-input:focus {
    border-color: var(--kt-form-check-input-focus-border);
    box-shadow: var(--kt-form-check-input-focus-box-shadow);
  }

  .form-check-input:checked {
    background-color: var(--kt-form-check-input-checked-bg-color);
    border-color: var(--kt-form-check-input-checked-border-color);
  }

  .form-check-input:checked[type=checkbox] {
    background-image: var(--kt-form-check-input-checked-bg-image);
  }

  .form-check-input:checked[type=radio] {
    background-image: var(--kt-form-check-radio-checked-bg-image);
  }

  .form-check-input[type=checkbox]:indeterminate {
    background-color: var(--kt-form-check-input-indeterminate-bg-color);
    border-color: var(--kt-form-check-input-indeterminate-border-color);
    background-image: var(--kt-form-check-input-indeterminate-bg-image);
  }

  .form-check-input:disabled {
    opacity: var(--kt-form-check-input-disabled-opacity);
  }

  .form-check-input[disabled]~.form-check-label,
  .form-check-input:disabled~.form-check-label {
    opacity: var(--kt-form-check-label-disabled-opacity);
  }

  .form-check-label {
    color: var(--kt-orm-check-label-color);
  }

  .form-switch .form-check-input {
    background-image: var(--kt-form-switch-bg-image);
  }

  .form-switch .form-check-input:focus {
    background-image: var(--kt-form-switch-focus-bg-image);
  }

  .form-switch .form-check-input:checked {
    background-image: var(--kt-form-switch-checked-bg-image);
  }

  .form-floating .form-control.form-control-solid::placeholder {
    color: transparent;
  }

  .input-group-text {
    color: var(--kt-input-group-addon-color);
    background-color: var(--kt-input-group-addon-bg);
    border: 1px solid var(--kt-input-group-addon-border-color);
  }

  .dropdown.show>.form-control {
    color: var(--kt-input-focus-color);
    background-color: var(--kt-input-focus-bg);
    border-color: var(--kt-input-focus-border-color);
  }

  .form-control[readonly] {
    background-color: var(--kt-input-readonly-bg);
  }

  .form-control.form-control-solid {
    background-color: var(--kt-input-solid-bg);
    border-color: var(--kt-input-solid-bg);
    color: var(--kt-input-solid-color);
    transition: color 0.2s ease;
  }

  .form-control.form-control-solid::placeholder {
    color: var(--kt-input-solid-placeholder-color);
  }

  .form-control.form-control-solid::-moz-placeholder {
    color: var(--kt-input-solid-placeholder-color);
    opacity: 1;
  }

  .dropdown.show>.form-control.form-control-solid,
  .form-control.form-control-solid:active,
  .form-control.form-control-solid.active,
  .form-control.form-control-solid:focus,
  .form-control.form-control-solid.focus {
    background-color: var(--kt-input-solid-bg-focus);
    border-color: var(--kt-input-solid-bg-focus);
    color: var(--kt-input-solid-color);
    transition: color 0.2s ease;
  }

  .form-control.form-control-transparent {
    background-color: transparent;
    border-color: transparent;
  }

  .dropdown.show>.form-control.form-control-transparent,
  .form-control.form-control-transparent:active,
  .form-control.form-control-transparent.active,
  .form-control.form-control-transparent:focus,
  .form-control.form-control-transparent.focus {
    background-color: transparent;
    border-color: transparent;
  }

  .form-control.form-control-flush {
    border: 0;
    background-color: transparent;
    outline: none !important;
    box-shadow: none;
    border-radius: 0;
  }

  .placeholder-gray-500::placeholder {
    color: var(--kt-gray-500);
  }

  .placeholder-gray-500::-moz-placeholder {
    color: var(--kt-gray-500);
    opacity: 1;
  }

  .placeholder-white::placeholder {
    color: #ffffff;
  }

  .placeholder-white::-moz-placeholder {
    color: #ffffff;
    opacity: 1;
  }

  .resize-none {
    resize: none;
  }

  .form-control-solid-bg {
    background-color: var(--kt-input-solid-bg);
  }

  .form-select {
    box-shadow: none !important;
  }

  .form-select.form-select-solid {
    background-color: var(--kt-input-solid-bg);
    border-color: var(--kt-input-solid-bg);
    color: var(--kt-input-solid-color);
    transition: color 0.2s ease;
  }

  .form-select.form-select-solid::placeholder {
    color: var(--kt-input-solid-placeholder-color);
  }

  .form-select.form-select-solid::-moz-placeholder {
    color: var(--kt-input-solid-placeholder-color);
    opacity: 1;
  }

  .dropdown.show>.form-select.form-select-solid,
  .form-select.form-select-solid:active,
  .form-select.form-select-solid.active,
  .form-select.form-select-solid:focus,
  .form-select.form-select-solid.focus {
    background-color: var(--kt-input-solid-bg-focus);
    border-color: var(--kt-input-solid-bg-focus) !important;
    color: var(--kt-input-solid-color);
    transition: color 0.2s ease;
  }

  .form-select.form-select-transparent {
    background-color: transparent;
    border-color: transparent;
    color: #5E6278;
  }

  .form-select.form-select-transparent::placeholder {
    color: var(--kt-input-placeholder-color);
  }

  .form-select.form-select-transparent::-moz-placeholder {
    color: var(--kt-input-placeholder-color);
    opacity: 1;
  }

  .dropdown.show>.form-select.form-select-transparent,
  .form-select.form-select-transparent:active,
  .form-select.form-select-transparent.active,
  .form-select.form-select-transparent:focus,
  .form-select.form-select-transparent.focus {
    background-color: transparent;
    border-color: transparent !important;
    color: #5E6278;
  }

  .form-check:not(.form-switch) .form-check-input[type=checkbox] {
    background-size: 60% 60%;
  }

  .form-check-custom {
    display: flex;
    align-items: center;
    padding-left: 0;
    margin: 0;
  }

  .form-check-custom .form-check-input {
    margin: 0;
    float: none;
    flex-shrink: 0;
  }

  .form-check-custom .form-check-label {
    margin-left: 0.55rem;
  }

  .form-check-custom.form-check-sm .form-check-input {
    height: 1.55rem;
    width: 1.55rem;
  }

  .form-check-custom.form-check-lg .form-check-input {
    height: 2.25rem;
    width: 2.25rem;
  }

  .form-check-custom.form-check-solid .form-check-input {
    border: 0;
    background-color: var(--kt-form-check-input-bg-solid);
  }

  .form-check-custom.form-check-solid .form-check-input:active,
  .form-check-custom.form-check-solid .form-check-input:focus {
    filter: none;
    background-color: var(--kt-form-check-input-bg-solid);
  }

  .form-check-custom.form-check-solid .form-check-input:checked {
    background-color: var(--kt-form-check-input-checked-bg-color-solid);
  }

  .form-check-custom.form-check-success .form-check-input:checked {
    background-color: var(--kt-success);
  }

  .form-check-custom.form-check-danger .form-check-input:checked {
    background-color: var(--kt-danger);
  }

  .form-check-custom.form-check-warning .form-check-input:checked {
    background-color: var(--kt-warning);
  }

  .form-switch.form-check-solid .form-check-input {
    height: 2.25rem;
    background-image: var(--kt-form-switch-bg-image-solid);
    border-radius: 3.25rem;
  }

  .form-switch.form-check-solid .form-check-input:checked {
    filter: none;
    background-image: var(--kt-form-switch-checked-bg-image);
  }

  .form-switch.form-check-solid.form-switch-sm .form-check-input {
    height: 1.5rem;
    width: 2.5rem;
  }

  .form-switch.form-check-solid.form-switch-lg .form-check-input {
    height: 2.75rem;
    width: 3.75rem;
  }

  .form-check-clip {
    position: relative;
    overflow: hidden;
  }

  .form-check-clip .form-check-label {
    padding-top: 0.5rem;
    font-size: 1.05rem;
    color: var(--kt-form-label-color);
    font-weight: 500;
  }

  .form-check-clip .form-check-wrapper {
    border-radius: 0.625rem;
    border: 2px solid transparent;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    overflow: hidden;
  }

  .form-check-clip .form-check-indicator {
    transition: all 0.2s ease-in-out;
    position: absolute;
    top: 0;
    right: 0;
    opacity: 0;
    width: 1.75rem;
    height: 1.75rem;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    background-size: 50%;
    background-image: var(--kt-form-check-input-checked-bg-image);
    background-color: var(--kt-component-checked-bg);
    border-bottom-left-radius: 0.625rem;
    border-top-right-radius: 0.625rem;
  }

  .form-check-clip .form-check-indicator.form-check-indicator-sm {
    width: 1.55rem;
    height: 1.55rem;
  }

  .form-check-clip .form-check-indicator.form-check-indicator-lg {
    width: 2.25rem;
    height: 2.25rem;
  }

  .form-check-clip .form-check-content {
    width: 100%;
  }

  .form-check-clip .btn-check:checked+div {
    border: 2px solid var(--kt-component-checked-bg);
    transition: all 0.2s ease-in-out;
  }

  .form-check-clip .btn-check:checked+div .form-check-indicator {
    transition: all 0.2s ease-in-out;
    opacity: 1;
  }

  .form-check-clip .btn-check:disabled+div {
    transition: all 0.2s ease-in-out;
    opacity: var(--kt-form-check-btn-check-disabled-opacity);
  }

  .form-check-image {
    position: relative;
    overflow: hidden;
  }

  .form-check-image img {
    max-width: 100%;
  }

  .form-check-image .form-check-wrapper {
    border-radius: 0.625rem;
    border: 2px solid transparent;
    transition: all 0.2s ease-in-out;
    cursor: pointer;
    overflow: hidden;
    margin-bottom: 0.75rem;
  }

  .form-check-image .form-check-rounded {
    border-radius: 0.625rem;
  }

  .form-check-image .form-check-label {
    font-weight: 600;
    margin-left: 0.5rem;
  }

  .form-check-image.active .form-check-wrapper {
    border-color: var(--kt-primary);
  }

  .form-check-image.form-check-success.active .form-check-wrapper {
    border-color: var(--kt-success);
  }

  .form-check-image.form-check-danger.active .form-check-wrapper {
    border-color: var(--kt-danger);
  }

  .form-check-image.disabled {
    opacity: var(--kt-form-check-btn-check-disabled-opacity);
  }

  .input-group.input-group-solid {
    border-radius: 0.475rem;
  }

  .input-group.input-group-solid.input-group-sm {
    border-radius: 0.425rem;
  }

  .input-group.input-group-solid.input-group-lg {
    border-radius: 0.625rem;
  }

  .input-group.input-group-solid .input-group-text {
    background-color: var(--kt-input-solid-bg);
    border-color: var(--kt-input-solid-bg);
  }

  .input-group.input-group-solid .input-group-text+.form-control {
    border-left-color: var(--kt-input-border-color);
  }

  .input-group.input-group-solid .form-control {
    background-color: var(--kt-input-solid-bg);
    border-color: var(--kt-input-solid-bg);
  }

  .input-group.input-group-solid .form-control+.input-group-text {
    border-left-color: var(--kt-input-border-color);
  }

  .form-floating .form-control.form-control-solid::placeholder {
    color: transparent;
  }

  .required:after {
    content: "*";
    position: relative;
    font-size: inherit;
    color: var(--kt-danger);
    padding-left: 0.25rem;
    font-weight: 600;
  }
`;
export {
  Form
};
//# sourceMappingURL=form.js.map
