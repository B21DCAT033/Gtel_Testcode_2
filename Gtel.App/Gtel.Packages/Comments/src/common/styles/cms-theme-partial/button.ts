import { css, CSSResult } from '@umbraco-cms/backoffice/external/lit';

export const Button: CSSResult = css`
  .btn-check {
    position: absolute;
    clip: rect(0, 0, 0, 0);
    pointer-events: none;
  }

  .btn-check[disabled]+.btn,
  .btn-check:disabled+.btn {
    pointer-events: none;
    filter: none;
    opacity: 0.65;
  }

  .btn {
    --bs-btn-padding-x: 1rem;
    --bs-btn-padding-y: 0.65rem;
    --bs-btn-font-family: ;
    --bs-btn-font-size: 1rem;
    --bs-btn-font-weight: 500;
    --bs-btn-line-height: 1.5;
    --bs-btn-color: #181C32;
    --bs-btn-bg: transparent;
    --bs-btn-border-width: 1px;
    --bs-btn-border-color: transparent;
    --bs-btn-border-radius: 0.475rem;
    --bs-btn-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075);
    --bs-btn-disabled-opacity: 0.65;
    --bs-btn-focus-box-shadow: 0 0 0 0.25rem rgba(var(--bs-btn-focus-shadow-rgb), .5);
    display: inline-block;
    padding: var(--bs-btn-padding-y) var(--bs-btn-padding-x);
    font-family: var(--bs-btn-font-family);
    font-size: var(--bs-btn-font-size);
    font-weight: var(--bs-btn-font-weight);
    line-height: var(--bs-btn-line-height);
    color: var(--bs-btn-color);
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    user-select: none;
    border: var(--bs-btn-border-width) solid var(--bs-btn-border-color);
    border-radius: var(--bs-btn-border-radius);
    background-color: var(--bs-btn-bg);
    box-shadow: var(--bs-btn-box-shadow);
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }

  @media (prefers-reduced-motion: reduce) {
    .btn {
      transition: none;
    }
  }

  .btn:hover {
    color: var(--bs-btn-hover-color);
    background-color: var(--bs-btn-hover-bg);
    border-color: var(--bs-btn-hover-border-color);
  }

  .btn-check:focus+.btn,
  .btn:focus {
    color: var(--bs-btn-hover-color);
    background-color: var(--bs-btn-hover-bg);
    border-color: var(--bs-btn-hover-border-color);
    outline: 0;
    box-shadow: var(--bs-btn-box-shadow), var(--bs-btn-focus-box-shadow);
  }

  .btn-check:checked+.btn,
  .btn-check:active+.btn,
  .btn:active,
  .btn.active,
  .btn.show {
    color: var(--bs-btn-active-color);
    background-color: var(--bs-btn-active-bg);
    border-color: var(--bs-btn-active-border-color);
    box-shadow: var(--bs-btn-active-shadow);
  }

  .btn-check:checked+.btn:focus,
  .btn-check:active+.btn:focus,
  .btn:active:focus,
  .btn.active:focus,
  .btn.show:focus {
    box-shadow: var(--bs-btn-active-shadow), var(--bs-btn-focus-box-shadow);
  }

  .btn:disabled,
  .btn.disabled,
  fieldset:disabled .btn {
    color: var(--bs-btn-disabled-color);
    pointer-events: none;
    background-color: var(--bs-btn-disabled-bg);
    border-color: var(--bs-btn-disabled-border-color);
    opacity: var(--bs-btn-disabled-opacity);
    box-shadow: none;
  }

  .btn-white {
    --bs-btn-color: #000000;
    --bs-btn-bg: #ffffff;
    --bs-btn-border-color: #ffffff;
    --bs-btn-hover-color: #000000;
    --bs-btn-hover-bg: white;
    --bs-btn-hover-border-color: white;
    --bs-btn-focus-shadow-rgb: 217, 217, 217;
    --bs-btn-active-color: #000000;
    --bs-btn-active-bg: white;
    --bs-btn-active-border-color: white;
    --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    --bs-btn-disabled-color: #000000;
    --bs-btn-disabled-bg: #ffffff;
    --bs-btn-disabled-border-color: #ffffff;
  }

  .btn-light {
    --bs-btn-color: #000000;
    --bs-btn-bg: #f5f8fa;
    --bs-btn-border-color: #f5f8fa;
    --bs-btn-hover-color: #000000;
    --bs-btn-hover-bg: #d0d3d5;
    --bs-btn-hover-border-color: #c4c6c8;
    --bs-btn-focus-shadow-rgb: 208, 211, 213;
    --bs-btn-active-color: #000000;
    --bs-btn-active-bg: #c4c6c8;
    --bs-btn-active-border-color: #b8babc;
    --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    --bs-btn-disabled-color: #000000;
    --bs-btn-disabled-bg: #f5f8fa;
    --bs-btn-disabled-border-color: #f5f8fa;
  }

  .btn-primary {
    --bs-btn-color: #000000;
    --bs-btn-bg: #009ef7;
    --bs-btn-border-color: #009ef7;
    --bs-btn-hover-color: #000000;
    --bs-btn-hover-bg: #26adf8;
    --bs-btn-hover-border-color: #1aa8f8;
    --bs-btn-focus-shadow-rgb: 0, 134, 210;
    --bs-btn-active-color: #000000;
    --bs-btn-active-bg: #33b1f9;
    --bs-btn-active-border-color: #1aa8f8;
    --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    --bs-btn-disabled-color: #000000;
    --bs-btn-disabled-bg: #009ef7;
    --bs-btn-disabled-border-color: #009ef7;
  }

  .btn-secondary {
    --bs-btn-color: #000000;
    --bs-btn-bg: #E4E6EF;
    --bs-btn-border-color: #E4E6EF;
    --bs-btn-hover-color: #000000;
    --bs-btn-hover-bg: #e8eaf1;
    --bs-btn-hover-border-color: #e7e9f1;
    --bs-btn-focus-shadow-rgb: 194, 196, 203;
    --bs-btn-active-color: #000000;
    --bs-btn-active-bg: #e9ebf2;
    --bs-btn-active-border-color: #e7e9f1;
    --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    --bs-btn-disabled-color: #000000;
    --bs-btn-disabled-bg: #E4E6EF;
    --bs-btn-disabled-border-color: #E4E6EF;
  }

  .btn-success {
    --bs-btn-color: #000000;
    --bs-btn-bg: #50cd89;
    --bs-btn-border-color: #50cd89;
    --bs-btn-hover-color: #000000;
    --bs-btn-hover-bg: #6ad59b;
    --bs-btn-hover-border-color: #62d295;
    --bs-btn-focus-shadow-rgb: 68, 174, 116;
    --bs-btn-active-color: #000000;
    --bs-btn-active-bg: #73d7a1;
    --bs-btn-active-border-color: #62d295;
    --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    --bs-btn-disabled-color: #000000;
    --bs-btn-disabled-bg: #50cd89;
    --bs-btn-disabled-border-color: #50cd89;
  }

  .btn-info {
    --bs-btn-color: #ffffff;
    --bs-btn-bg: #7239ea;
    --bs-btn-border-color: #7239ea;
    --bs-btn-hover-color: #ffffff;
    --bs-btn-hover-bg: #6130c7;
    --bs-btn-hover-border-color: #5b2ebb;
    --bs-btn-focus-shadow-rgb: 135, 87, 237;
    --bs-btn-active-color: #ffffff;
    --bs-btn-active-bg: #5b2ebb;
    --bs-btn-active-border-color: #562bb0;
    --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    --bs-btn-disabled-color: #ffffff;
    --bs-btn-disabled-bg: #7239ea;
    --bs-btn-disabled-border-color: #7239ea;
  }

  .btn-warning {
    --bs-btn-color: #000000;
    --bs-btn-bg: #ffc700;
    --bs-btn-border-color: #ffc700;
    --bs-btn-hover-color: #000000;
    --bs-btn-hover-bg: #ffcf26;
    --bs-btn-hover-border-color: #ffcd1a;
    --bs-btn-focus-shadow-rgb: 217, 169, 0;
    --bs-btn-active-color: #000000;
    --bs-btn-active-bg: #ffd233;
    --bs-btn-active-border-color: #ffcd1a;
    --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    --bs-btn-disabled-color: #000000;
    --bs-btn-disabled-bg: #ffc700;
    --bs-btn-disabled-border-color: #ffc700;
  }

  .btn-danger {
    --bs-btn-color: #000000;
    --bs-btn-bg: #f1416c;
    --bs-btn-border-color: #f1416c;
    --bs-btn-hover-color: #000000;
    --bs-btn-hover-bg: #f35e82;
    --bs-btn-hover-border-color: #f2547b;
    --bs-btn-focus-shadow-rgb: 205, 55, 92;
    --bs-btn-active-color: #000000;
    --bs-btn-active-bg: #f46789;
    --bs-btn-active-border-color: #f2547b;
    --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    --bs-btn-disabled-color: #000000;
    --bs-btn-disabled-bg: #f1416c;
    --bs-btn-disabled-border-color: #f1416c;
  }

  .btn-dark {
    --bs-btn-color: #ffffff;
    --bs-btn-bg: #181C32;
    --bs-btn-border-color: #181C32;
    --bs-btn-hover-color: #ffffff;
    --bs-btn-hover-bg: #3b3e51;
    --bs-btn-hover-border-color: #2f3347;
    --bs-btn-focus-shadow-rgb: 59, 62, 81;
    --bs-btn-active-color: #ffffff;
    --bs-btn-active-bg: #46495b;
    --bs-btn-active-border-color: #2f3347;
    --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    --bs-btn-disabled-color: #ffffff;
    --bs-btn-disabled-bg: #181C32;
    --bs-btn-disabled-border-color: #181C32;
  }

  .btn-outline-white {
    --bs-btn-color: #ffffff;
    --bs-btn-border-color: #ffffff;
    --bs-btn-hover-color: #000000;
    --bs-btn-hover-bg: #ffffff;
    --bs-btn-hover-border-color: #ffffff;
    --bs-btn-focus-shadow-rgb: 255, 255, 255;
    --bs-btn-active-color: #000000;
    --bs-btn-active-bg: #ffffff;
    --bs-btn-active-border-color: #ffffff;
    --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    --bs-btn-disabled-color: #ffffff;
    --bs-btn-disabled-bg: transparent;
    --bs-btn-disabled-border-color: #ffffff;
    --bs-gradient: none;
  }

  .btn-outline-light {
    --bs-btn-color: #f5f8fa;
    --bs-btn-border-color: #f5f8fa;
    --bs-btn-hover-color: #000000;
    --bs-btn-hover-bg: #f5f8fa;
    --bs-btn-hover-border-color: #f5f8fa;
    --bs-btn-focus-shadow-rgb: 245, 248, 250;
    --bs-btn-active-color: #000000;
    --bs-btn-active-bg: #f5f8fa;
    --bs-btn-active-border-color: #f5f8fa;
    --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    --bs-btn-disabled-color: #f5f8fa;
    --bs-btn-disabled-bg: transparent;
    --bs-btn-disabled-border-color: #f5f8fa;
    --bs-gradient: none;
  }

  .btn-outline-primary {
    --bs-btn-color: #009ef7;
    --bs-btn-border-color: #009ef7;
    --bs-btn-hover-color: #000000;
    --bs-btn-hover-bg: #009ef7;
    --bs-btn-hover-border-color: #009ef7;
    --bs-btn-focus-shadow-rgb: 0, 158, 247;
    --bs-btn-active-color: #000000;
    --bs-btn-active-bg: #009ef7;
    --bs-btn-active-border-color: #009ef7;
    --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    --bs-btn-disabled-color: #009ef7;
    --bs-btn-disabled-bg: transparent;
    --bs-btn-disabled-border-color: #009ef7;
    --bs-gradient: none;
  }

  .btn-outline-secondary {
    --bs-btn-color: #E4E6EF;
    --bs-btn-border-color: #E4E6EF;
    --bs-btn-hover-color: #000000;
    --bs-btn-hover-bg: #E4E6EF;
    --bs-btn-hover-border-color: #E4E6EF;
    --bs-btn-focus-shadow-rgb: 228, 230, 239;
    --bs-btn-active-color: #000000;
    --bs-btn-active-bg: #E4E6EF;
    --bs-btn-active-border-color: #E4E6EF;
    --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    --bs-btn-disabled-color: #E4E6EF;
    --bs-btn-disabled-bg: transparent;
    --bs-btn-disabled-border-color: #E4E6EF;
    --bs-gradient: none;
  }

  .btn-outline-success {
    --bs-btn-color: #50cd89;
    --bs-btn-border-color: #50cd89;
    --bs-btn-hover-color: #000000;
    --bs-btn-hover-bg: #50cd89;
    --bs-btn-hover-border-color: #50cd89;
    --bs-btn-focus-shadow-rgb: 80, 205, 137;
    --bs-btn-active-color: #000000;
    --bs-btn-active-bg: #50cd89;
    --bs-btn-active-border-color: #50cd89;
    --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    --bs-btn-disabled-color: #50cd89;
    --bs-btn-disabled-bg: transparent;
    --bs-btn-disabled-border-color: #50cd89;
    --bs-gradient: none;
  }

  .btn-outline-info {
    --bs-btn-color: #7239ea;
    --bs-btn-border-color: #7239ea;
    --bs-btn-hover-color: #ffffff;
    --bs-btn-hover-bg: #7239ea;
    --bs-btn-hover-border-color: #7239ea;
    --bs-btn-focus-shadow-rgb: 114, 57, 234;
    --bs-btn-active-color: #ffffff;
    --bs-btn-active-bg: #7239ea;
    --bs-btn-active-border-color: #7239ea;
    --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    --bs-btn-disabled-color: #7239ea;
    --bs-btn-disabled-bg: transparent;
    --bs-btn-disabled-border-color: #7239ea;
    --bs-gradient: none;
  }

  .btn-outline-warning {
    --bs-btn-color: #ffc700;
    --bs-btn-border-color: #ffc700;
    --bs-btn-hover-color: #000000;
    --bs-btn-hover-bg: #ffc700;
    --bs-btn-hover-border-color: #ffc700;
    --bs-btn-focus-shadow-rgb: 255, 199, 0;
    --bs-btn-active-color: #000000;
    --bs-btn-active-bg: #ffc700;
    --bs-btn-active-border-color: #ffc700;
    --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    --bs-btn-disabled-color: #ffc700;
    --bs-btn-disabled-bg: transparent;
    --bs-btn-disabled-border-color: #ffc700;
    --bs-gradient: none;
  }

  .btn-outline-danger {
    --bs-btn-color: #f1416c;
    --bs-btn-border-color: #f1416c;
    --bs-btn-hover-color: #000000;
    --bs-btn-hover-bg: #f1416c;
    --bs-btn-hover-border-color: #f1416c;
    --bs-btn-focus-shadow-rgb: 241, 65, 108;
    --bs-btn-active-color: #000000;
    --bs-btn-active-bg: #f1416c;
    --bs-btn-active-border-color: #f1416c;
    --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    --bs-btn-disabled-color: #f1416c;
    --bs-btn-disabled-bg: transparent;
    --bs-btn-disabled-border-color: #f1416c;
    --bs-gradient: none;
  }

  .btn-outline-dark {
    --bs-btn-color: #181C32;
    --bs-btn-border-color: #181C32;
    --bs-btn-hover-color: #ffffff;
    --bs-btn-hover-bg: #181C32;
    --bs-btn-hover-border-color: #181C32;
    --bs-btn-focus-shadow-rgb: 24, 28, 50;
    --bs-btn-active-color: #ffffff;
    --bs-btn-active-bg: #181C32;
    --bs-btn-active-border-color: #181C32;
    --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    --bs-btn-disabled-color: #181C32;
    --bs-btn-disabled-bg: transparent;
    --bs-btn-disabled-border-color: #181C32;
    --bs-gradient: none;
  }

  .btn-link {
    --bs-btn-font-weight: 400;
    --bs-btn-color: #009ef7;
    --bs-btn-bg: transparent;
    --bs-btn-border-color: transparent;
    --bs-btn-hover-color: shift-color(#009ef7, 20%);
    --bs-btn-hover-border-color: transparent;
    --bs-btn-active-color: shift-color(#009ef7, 20%);
    --bs-btn-active-border-color: transparent;
    --bs-btn-disabled-color: #7E8299;
    --bs-btn-disabled-border-color: transparent;
    --bs-btn-box-shadow: none;
    --bs-btn-focus-shadow-rgb: 0, 134, 210;
    text-decoration: none;
  }

  .btn-link:hover,
  .btn-link:focus {
    text-decoration: none;
  }

  .btn-link:focus {
    color: var(--bs-btn-color);
  }

  .btn-link:hover {
    color: var(--bs-btn-hover-color);
  }

  .btn-lg,
  .btn-group-lg>.btn {
    --bs-btn-padding-y: 0.825rem;
    --bs-btn-padding-x: 1.42rem;
    --bs-btn-line-height: 1.5;
    --bs-btn-font-size: 1.15rem;
  }

  .btn-sm,
  .btn-group-sm>.btn {
    --bs-btn-padding-y: 0.55rem;
    --bs-btn-padding-x: 0.75rem;
    --bs-btn-line-height: 1.25;
    --bs-btn-font-size: 0.875rem;
  }

  .btn-xs,
  .btn-group-xs>.btn {
    --bs-btn-padding-y: 0.25rem;
    --bs-btn-padding-x: 0.5rem;
    --bs-btn-line-height: 1.25;
    --bs-btn-font-size: 0.875rem;
  }

  .btn-group,
  .btn-group-vertical {
    position: relative;
    display: inline-flex;
    vertical-align: middle;
  }

  .btn-group>.btn,
  .btn-group-vertical>.btn {
    position: relative;
    flex: 1 1 auto;
  }

  .btn-group>.btn-check:checked+.btn,
  .btn-group>.btn-check:focus+.btn,
  .btn-group>.btn:hover,
  .btn-group>.btn:focus,
  .btn-group>.btn:active,
  .btn-group>.btn.active,
  .btn-group-vertical>.btn-check:checked+.btn,
  .btn-group-vertical>.btn-check:focus+.btn,
  .btn-group-vertical>.btn:hover,
  .btn-group-vertical>.btn:focus,
  .btn-group-vertical>.btn:active,
  .btn-group-vertical>.btn.active {
    z-index: 1;
  }

  .btn-toolbar {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
  }

  .btn-toolbar .input-group {
    width: auto;
  }

  .btn-group {
    border-radius: 0.475rem;
  }

  .btn-group>.btn:not(:first-child),
  .btn-group>.btn-group:not(:first-child) {
    margin-left: -1px;
  }

  .btn-group>.btn:not(:last-child):not(.dropdown-toggle),
  .btn-group>.btn.dropdown-toggle-split:first-child,
  .btn-group>.btn-group:not(:last-child)>.btn {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  .btn-group>.btn:nth-child(n+3),
  .btn-group> :not(.btn-check)+.btn,
  .btn-group>.btn-group:not(:first-child)>.btn {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }

  .btn-sm+.dropdown-toggle-split,
  .btn-group-sm>.btn+.dropdown-toggle-split {
    padding-right: 0.9375rem;
    padding-left: 0.9375rem;
  }

  .btn-lg+.dropdown-toggle-split,
  .btn-group-lg>.btn+.dropdown-toggle-split {
    padding-right: 1.3125rem;
    padding-left: 1.3125rem;
  }

  .btn-group.show .dropdown-toggle {
    box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  }

  .btn-group.show .dropdown-toggle.btn-link {
    box-shadow: none;
  }

  .btn-group-vertical {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }

  .btn-group-vertical>.btn,
  .btn-group-vertical>.btn-group {
    width: 100%;
  }

  .btn-group-vertical>.btn:not(:first-child),
  .btn-group-vertical>.btn-group:not(:first-child) {
    margin-top: -1px;
  }

  .btn-group-vertical>.btn:not(:last-child):not(.dropdown-toggle),
  .btn-group-vertical>.btn-group:not(:last-child)>.btn {
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }

  .btn-group-vertical>.btn~.btn,
  .btn-group-vertical>.btn-group:not(:first-child)>.btn {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  .btn-close {
    box-sizing: content-box;
    width: 0.75rem;
    height: 0.75rem;
    padding: 0.25em 0.25em;
    color: #000000;
    background: transparent url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23000000'%3e%3cpath d='M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414z'/%3e%3c/svg%3e") center/0.75rem auto no-repeat;
    border: 0;
    border-radius: 0.475rem;
    opacity: 0.5;
  }

  .btn-close:hover {
    color: #000000;
    text-decoration: none;
    opacity: 0.75;
  }

  .btn-close:focus {
    outline: 0;
    box-shadow: none;
    opacity: 1;
  }

  .btn-close:disabled,
  .btn-close.disabled {
    pointer-events: none;
    user-select: none;
    opacity: 0.25;
  }

  .btn-close-white {
    filter: invert(1) grayscale(100%) brightness(200%);
  }

  .btn-close {
    color: var(--kt-btn-close-color);
    background-image: var(--kt-btn-close-bg);
    background-position: center;
  }

  .btn-close:hover {
    color: var(--kt-btn-close-color);
  }

  .btn {
    --bs-btn-color: var(--kt-body-color);
    --bs-btn-bg: transparent;
    --bs-btn-border-color: transparent;
    outline: none !important;
  }

  .btn:not(.btn-shadow):not(.shadow):not(.shadow-sm):not(.shadow-lg) {
    box-shadow: none !important;
  }

  .btn:not(.btn-outline):not(.btn-dashed):not(.border-hover):not(.border-active):not(.btn-flush):not(.btn-icon) {
    border: 0;
  }

  .btn.btn-link {
    border: 0;
    border-radius: 0;
    padding-left: 0 !important;
    padding-right: 0 !important;
    text-decoration: none;
    font-weight: 500;
  }

  .btn.btn-outline:not(.btn-outline-dashed) {
    border: 1px solid var(--kt-input-border-color);
  }

  .btn.btn-outline-dashed {
    border: 1px dashed var(--kt-input-border-color);
  }

  .btn.btn-flush {
    appearance: none;
    box-shadow: none;
    border-radius: 0;
    border: none;
    cursor: pointer;
    background-color: transparent;
    outline: none !important;
    margin: 0;
    padding: 0;
  }

  .btn.btn-flex {
    display: inline-flex;
    align-items: center;
  }

  .btn.btn-trim-start {
    justify-content: flex-start !important;
    padding-left: 0 !important;
  }

  .btn.btn-trim-end {
    justify-content: flex-end !important;
    padding-right: 0 !important;
  }

  .btn i,
  .btn uui-icon {
    display: inline-flex;
    font-size: 1.3rem;
    padding-right: 0.5rem;
    vertical-align: middle;
    line-height: 0.5;
  }

  .btn .svg-icon {
    flex-shrink: 0;
    line-height: 0;
    margin-right: 0.5rem;
  }

  .btn .svg-icon svg {
    height: 18px;
    width: 18px;
  }

  .btn.btn-xs i {
    font-size: 1rem;
    padding-right: 0.3rem;
  }

  .btn.btn-xs .svg-icon {
    margin-right: 0.3rem;
  }

  .btn.btn-xs .svg-icon svg {
    height: 16px;
    width: 16px;
  }

  .btn.btn-sm i,
  .btn.btn-sm uui-icon,
  .btn-group-sm>.btn i,
  .btn-group-sm>.btn uui-icon {
    font-size: 1rem;
    padding-right: 0.35rem;
  }

  .btn.btn-sm .svg-icon,
  .btn-group-sm>.btn .svg-icon {
    margin-right: 0.35rem;
  }

  .btn.btn-sm .svg-icon svg,
  .btn-group-sm>.btn .svg-icon svg {
    height: 16px;
    width: 16px;
  }

  .btn.btn-lg i,
  .btn.btn-lg uui-icon,
  .btn-group-lg>.btn i,
  .btn-group-lg>.btn uui-icon {
    font-size: 1.5rem;
    padding-right: 0.75rem;
  }

  .btn.btn-lg .svg-icon,
  .btn-group-lg>.btn .svg-icon {
    margin-right: 0.75rem;
  }

  .btn.btn-lg .svg-icon svg,
  .btn-group-lg>.btn .svg-icon svg {
    height: 20px;
    width: 20px;
  }

  .btn.btn-icon {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    height: calc(1.5em + 1.55rem + 2px);
    width: calc(1.5em + 1.55rem + 2px);
  }

  .btn.btn-icon:not(.btn-outline):not(.btn-dashed):not(.border-hover):not(.border-active):not(.btn-flush) {
    border: 0;
  }

  .btn.btn-icon.btn-xs,
  .btn-group-xs>.btn.btn-icon {
    height: calc(1.5em + 0.666rem + 2px);
    width: calc(1.5em + 0.666rem + 2px);
  }

  .btn.btn-icon.btn-sm,
  .btn-group-sm>.btn.btn-icon {
    height: calc(1.5em + 1.1rem + 2px);
    width: calc(1.5em + 1.1rem + 2px);
  }

  .btn.btn-icon.btn-lg,
  .btn-group-lg>.btn.btn-icon {
    height: calc(1.5em + 1.65rem + 2px);
    width: calc(1.5em + 1.65rem + 2px);
  }

  .btn.btn-icon.btn-circle {
    border-radius: 50%;
  }

  .btn.btn-icon i,
  .btn.btn-icon .svg-icon {
    padding: 0;
    margin: 0;
    line-height: 1;
  }

  .btn.btn-hover-rise {
    transition: transform 0.3s ease;
  }

  .btn.btn-hover-rise:hover {
    transform: translateY(-10%);
    transition: transform 0.3s ease;
  }

  .btn.btn-hover-scale {
    transition: transform 0.3s ease;
  }

  .btn.btn-hover-scale:hover {
    transform: scale(1.1);
    transition: transform 0.3s ease;
  }

  .btn.btn-hover-rotate-end {
    transition: transform 0.3s ease;
  }

  .btn.btn-hover-rotate-end:hover {
    transform: rotate(4deg);
    transition: transform 0.3s ease;
  }

  .btn.btn-hover-rotate-start {
    transition: transform 0.3s ease;
  }

  .btn.btn-hover-rotate-start:hover {
    transform: rotate(-4deg);
    transition: transform 0.3s ease;
  }

  .btn.btn-outline.btn-outline-dashed {
    border-width: 1px;
    border-style: dashed;
  }

  .btn-check:checked+.btn.btn-outline.btn-outline-dashed,
  .btn-check:active+.btn.btn-outline.btn-outline-dashed,
  .btn.btn-outline.btn-outline-dashed:focus:not(.btn-active),
  .btn.btn-outline.btn-outline-dashed:hover:not(.btn-active),
  .btn.btn-outline.btn-outline-dashed:active:not(.btn-active),
  .btn.btn-outline.btn-outline-dashed.active,
  .btn.btn-outline.btn-outline-dashed.show,
  .show>.btn.btn-outline.btn-outline-dashed {
    border-color: var(--kt-primary);
  }

  .btn.btn-white {
    color: var(--kt-white-inverse);
    border-color: var(--kt-white);
    background-color: var(--kt-white);
  }

  .btn.btn-white i,
  .btn.btn-white .svg-icon {
    color: var(--kt-white-inverse);
  }

  .btn.btn-white.dropdown-toggle:after {
    color: var(--kt-white-inverse);
  }

  .btn-check:checked+.btn.btn-white,
  .btn-check:active+.btn.btn-white,
  .btn.btn-white:focus:not(.btn-active),
  .btn.btn-white:hover:not(.btn-active),
  .btn.btn-white:active:not(.btn-active),
  .btn.btn-white.active,
  .btn.btn-white.show,
  .show>.btn.btn-white {
    color: var(--kt-white-inverse);
    border-color: var(--kt-white-active);
    background-color: var(--kt-white-active) !important;
  }

  .btn-check:checked+.btn.btn-white i,
  .btn-check:checked+.btn.btn-white .svg-icon,
  .btn-check:active+.btn.btn-white i,
  .btn-check:active+.btn.btn-white .svg-icon,
  .btn.btn-white:focus:not(.btn-active) i,
  .btn.btn-white:focus:not(.btn-active) .svg-icon,
  .btn.btn-white:hover:not(.btn-active) i,
  .btn.btn-white:hover:not(.btn-active) .svg-icon,
  .btn.btn-white:active:not(.btn-active) i,
  .btn.btn-white:active:not(.btn-active) .svg-icon,
  .btn.btn-white.active i,
  .btn.btn-white.active .svg-icon,
  .btn.btn-white.show i,
  .btn.btn-white.show .svg-icon,
  .show>.btn.btn-white i,
  .show>.btn.btn-white .svg-icon {
    color: var(--kt-white-inverse);
  }

  .btn-check:checked+.btn.btn-white.dropdown-toggle:after,
  .btn-check:active+.btn.btn-white.dropdown-toggle:after,
  .btn.btn-white:focus:not(.btn-active).dropdown-toggle:after,
  .btn.btn-white:hover:not(.btn-active).dropdown-toggle:after,
  .btn.btn-white:active:not(.btn-active).dropdown-toggle:after,
  .btn.btn-white.active.dropdown-toggle:after,
  .btn.btn-white.show.dropdown-toggle:after,
  .show>.btn.btn-white.dropdown-toggle:after {
    color: var(--kt-white-inverse);
  }

  .btn.btn-bg-white {
    border-color: var(--kt-white);
    background-color: var(--kt-white);
  }

  .btn-check:checked+.btn.btn-active-white,
  .btn-check:active+.btn.btn-active-white,
  .btn.btn-active-white:focus:not(.btn-active),
  .btn.btn-active-white:hover:not(.btn-active),
  .btn.btn-active-white:active:not(.btn-active),
  .btn.btn-active-white.active,
  .btn.btn-active-white.show,
  .show>.btn.btn-active-white {
    color: var(--kt-white-inverse);
    border-color: var(--kt-white);
    background-color: var(--kt-white) !important;
  }

  .btn-check:checked+.btn.btn-active-white i,
  .btn-check:checked+.btn.btn-active-white .svg-icon,
  .btn-check:active+.btn.btn-active-white i,
  .btn-check:active+.btn.btn-active-white .svg-icon,
  .btn.btn-active-white:focus:not(.btn-active) i,
  .btn.btn-active-white:focus:not(.btn-active) .svg-icon,
  .btn.btn-active-white:hover:not(.btn-active) i,
  .btn.btn-active-white:hover:not(.btn-active) .svg-icon,
  .btn.btn-active-white:active:not(.btn-active) i,
  .btn.btn-active-white:active:not(.btn-active) .svg-icon,
  .btn.btn-active-white.active i,
  .btn.btn-active-white.active .svg-icon,
  .btn.btn-active-white.show i,
  .btn.btn-active-white.show .svg-icon,
  .show>.btn.btn-active-white i,
  .show>.btn.btn-active-white .svg-icon {
    color: var(--kt-white-inverse);
  }

  .btn-check:checked+.btn.btn-active-white.dropdown-toggle:after,
  .btn-check:active+.btn.btn-active-white.dropdown-toggle:after,
  .btn.btn-active-white:focus:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-white:hover:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-white:active:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-white.active.dropdown-toggle:after,
  .btn.btn-active-white.show.dropdown-toggle:after,
  .show>.btn.btn-active-white.dropdown-toggle:after {
    color: var(--kt-white-inverse);
  }

  .btn.btn-outline.btn-outline-white {
    color: var(--kt-white);
    border-color: var(--kt-white);
    background-color: transparent;
  }

  .btn.btn-outline.btn-outline-white i,
  .btn.btn-outline.btn-outline-white .svg-icon {
    color: var(--kt-white);
  }

  .btn.btn-outline.btn-outline-white.dropdown-toggle:after {
    color: var(--kt-white);
  }

  .btn-check:checked+.btn.btn-outline.btn-outline-white,
  .btn-check:active+.btn.btn-outline.btn-outline-white,
  .btn.btn-outline.btn-outline-white:focus:not(.btn-active),
  .btn.btn-outline.btn-outline-white:hover:not(.btn-active),
  .btn.btn-outline.btn-outline-white:active:not(.btn-active),
  .btn.btn-outline.btn-outline-white.active,
  .btn.btn-outline.btn-outline-white.show,
  .show>.btn.btn-outline.btn-outline-white {
    color: var(--kt-white-active);
    border-color: var(--kt-white);
    background-color: var(--kt-white-light) !important;
  }

  .btn-check:checked+.btn.btn-outline.btn-outline-white i,
  .btn-check:checked+.btn.btn-outline.btn-outline-white .svg-icon,
  .btn-check:active+.btn.btn-outline.btn-outline-white i,
  .btn-check:active+.btn.btn-outline.btn-outline-white .svg-icon,
  .btn.btn-outline.btn-outline-white:focus:not(.btn-active) i,
  .btn.btn-outline.btn-outline-white:focus:not(.btn-active) .svg-icon,
  .btn.btn-outline.btn-outline-white:hover:not(.btn-active) i,
  .btn.btn-outline.btn-outline-white:hover:not(.btn-active) .svg-icon,
  .btn.btn-outline.btn-outline-white:active:not(.btn-active) i,
  .btn.btn-outline.btn-outline-white:active:not(.btn-active) .svg-icon,
  .btn.btn-outline.btn-outline-white.active i,
  .btn.btn-outline.btn-outline-white.active .svg-icon,
  .btn.btn-outline.btn-outline-white.show i,
  .btn.btn-outline.btn-outline-white.show .svg-icon,
  .show>.btn.btn-outline.btn-outline-white i,
  .show>.btn.btn-outline.btn-outline-white .svg-icon {
    color: var(--kt-white-active);
  }

  .btn-check:checked+.btn.btn-outline.btn-outline-white.dropdown-toggle:after,
  .btn-check:active+.btn.btn-outline.btn-outline-white.dropdown-toggle:after,
  .btn.btn-outline.btn-outline-white:focus:not(.btn-active).dropdown-toggle:after,
  .btn.btn-outline.btn-outline-white:hover:not(.btn-active).dropdown-toggle:after,
  .btn.btn-outline.btn-outline-white:active:not(.btn-active).dropdown-toggle:after,
  .btn.btn-outline.btn-outline-white.active.dropdown-toggle:after,
  .btn.btn-outline.btn-outline-white.show.dropdown-toggle:after,
  .show>.btn.btn-outline.btn-outline-white.dropdown-toggle:after {
    color: var(--kt-white-active);
  }

  .btn.btn-light {
    color: var(--kt-light-inverse);
    border-color: var(--kt-light);
    background-color: var(--kt-light);
  }

  .btn.btn-light i,
  .btn.btn-light .svg-icon {
    color: var(--kt-light-inverse);
  }

  .btn.btn-light.dropdown-toggle:after {
    color: var(--kt-light-inverse);
  }

  .btn-check:checked+.btn.btn-light,
  .btn-check:active+.btn.btn-light,
  .btn.btn-light:focus:not(.btn-active),
  .btn.btn-light:hover:not(.btn-active),
  .btn.btn-light:active:not(.btn-active),
  .btn.btn-light.active,
  .btn.btn-light.show,
  .show>.btn.btn-light {
    color: var(--kt-light-inverse);
    border-color: var(--kt-light-active);
    background-color: var(--kt-light-active) !important;
  }

  .btn-check:checked+.btn.btn-light i,
  .btn-check:checked+.btn.btn-light .svg-icon,
  .btn-check:active+.btn.btn-light i,
  .btn-check:active+.btn.btn-light .svg-icon,
  .btn.btn-light:focus:not(.btn-active) i,
  .btn.btn-light:focus:not(.btn-active) .svg-icon,
  .btn.btn-light:hover:not(.btn-active) i,
  .btn.btn-light:hover:not(.btn-active) .svg-icon,
  .btn.btn-light:active:not(.btn-active) i,
  .btn.btn-light:active:not(.btn-active) .svg-icon,
  .btn.btn-light.active i,
  .btn.btn-light.active .svg-icon,
  .btn.btn-light.show i,
  .btn.btn-light.show .svg-icon,
  .show>.btn.btn-light i,
  .show>.btn.btn-light .svg-icon {
    color: var(--kt-light-inverse);
  }

  .btn-check:checked+.btn.btn-light.dropdown-toggle:after,
  .btn-check:active+.btn.btn-light.dropdown-toggle:after,
  .btn.btn-light:focus:not(.btn-active).dropdown-toggle:after,
  .btn.btn-light:hover:not(.btn-active).dropdown-toggle:after,
  .btn.btn-light:active:not(.btn-active).dropdown-toggle:after,
  .btn.btn-light.active.dropdown-toggle:after,
  .btn.btn-light.show.dropdown-toggle:after,
  .show>.btn.btn-light.dropdown-toggle:after {
    color: var(--kt-light-inverse);
  }

  .btn.btn-bg-light {
    border-color: var(--kt-light);
    background-color: var(--kt-light);
  }

  .btn-check:checked+.btn.btn-active-light,
  .btn-check:active+.btn.btn-active-light,
  .btn.btn-active-light:focus:not(.btn-active),
  .btn.btn-active-light:hover:not(.btn-active),
  .btn.btn-active-light:active:not(.btn-active),
  .btn.btn-active-light.active,
  .btn.btn-active-light.show,
  .show>.btn.btn-active-light {
    color: var(--kt-light-inverse);
    border-color: var(--kt-light);
    background-color: var(--kt-light) !important;
  }

  .btn-check:checked+.btn.btn-active-light i,
  .btn-check:checked+.btn.btn-active-light .svg-icon,
  .btn-check:active+.btn.btn-active-light i,
  .btn-check:active+.btn.btn-active-light .svg-icon,
  .btn.btn-active-light:focus:not(.btn-active) i,
  .btn.btn-active-light:focus:not(.btn-active) .svg-icon,
  .btn.btn-active-light:hover:not(.btn-active) i,
  .btn.btn-active-light:hover:not(.btn-active) .svg-icon,
  .btn.btn-active-light:active:not(.btn-active) i,
  .btn.btn-active-light:active:not(.btn-active) .svg-icon,
  .btn.btn-active-light.active i,
  .btn.btn-active-light.active .svg-icon,
  .btn.btn-active-light.show i,
  .btn.btn-active-light.show .svg-icon,
  .show>.btn.btn-active-light i,
  .show>.btn.btn-active-light .svg-icon {
    color: var(--kt-light-inverse);
  }

  .btn-check:checked+.btn.btn-active-light.dropdown-toggle:after,
  .btn-check:active+.btn.btn-active-light.dropdown-toggle:after,
  .btn.btn-active-light:focus:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-light:hover:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-light:active:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-light.active.dropdown-toggle:after,
  .btn.btn-active-light.show.dropdown-toggle:after,
  .show>.btn.btn-active-light.dropdown-toggle:after {
    color: var(--kt-light-inverse);
  }

  .btn.btn-outline.btn-outline-light {
    color: var(--kt-light);
    border-color: var(--kt-light);
    background-color: transparent;
  }

  .btn.btn-outline.btn-outline-light i,
  .btn.btn-outline.btn-outline-light .svg-icon {
    color: var(--kt-light);
  }

  .btn.btn-outline.btn-outline-light.dropdown-toggle:after {
    color: var(--kt-light);
  }

  .btn-check:checked+.btn.btn-outline.btn-outline-light,
  .btn-check:active+.btn.btn-outline.btn-outline-light,
  .btn.btn-outline.btn-outline-light:focus:not(.btn-active),
  .btn.btn-outline.btn-outline-light:hover:not(.btn-active),
  .btn.btn-outline.btn-outline-light:active:not(.btn-active),
  .btn.btn-outline.btn-outline-light.active,
  .btn.btn-outline.btn-outline-light.show,
  .show>.btn.btn-outline.btn-outline-light {
    color: var(--kt-light-active);
    border-color: var(--kt-light);
    background-color: var(--kt-light-light) !important;
  }

  .btn-check:checked+.btn.btn-outline.btn-outline-light i,
  .btn-check:checked+.btn.btn-outline.btn-outline-light .svg-icon,
  .btn-check:active+.btn.btn-outline.btn-outline-light i,
  .btn-check:active+.btn.btn-outline.btn-outline-light .svg-icon,
  .btn.btn-outline.btn-outline-light:focus:not(.btn-active) i,
  .btn.btn-outline.btn-outline-light:focus:not(.btn-active) .svg-icon,
  .btn.btn-outline.btn-outline-light:hover:not(.btn-active) i,
  .btn.btn-outline.btn-outline-light:hover:not(.btn-active) .svg-icon,
  .btn.btn-outline.btn-outline-light:active:not(.btn-active) i,
  .btn.btn-outline.btn-outline-light:active:not(.btn-active) .svg-icon,
  .btn.btn-outline.btn-outline-light.active i,
  .btn.btn-outline.btn-outline-light.active .svg-icon,
  .btn.btn-outline.btn-outline-light.show i,
  .btn.btn-outline.btn-outline-light.show .svg-icon,
  .show>.btn.btn-outline.btn-outline-light i,
  .show>.btn.btn-outline.btn-outline-light .svg-icon {
    color: var(--kt-light-active);
  }

  .btn-check:checked+.btn.btn-outline.btn-outline-light.dropdown-toggle:after,
  .btn-check:active+.btn.btn-outline.btn-outline-light.dropdown-toggle:after,
  .btn.btn-outline.btn-outline-light:focus:not(.btn-active).dropdown-toggle:after,
  .btn.btn-outline.btn-outline-light:hover:not(.btn-active).dropdown-toggle:after,
  .btn.btn-outline.btn-outline-light:active:not(.btn-active).dropdown-toggle:after,
  .btn.btn-outline.btn-outline-light.active.dropdown-toggle:after,
  .btn.btn-outline.btn-outline-light.show.dropdown-toggle:after,
  .show>.btn.btn-outline.btn-outline-light.dropdown-toggle:after {
    color: var(--kt-light-active);
  }

  .btn.btn-primary {
    color: var(--kt-primary-inverse);
    border-color: var(--mdc-blue-800);
    background-color: var(--mdc-blue-800);
  }

  .btn.btn-primary i,
  .btn.btn-primary .svg-icon {
    color: var(--kt-primary-inverse);
  }

  .btn.btn-primary.dropdown-toggle:after {
    color: var(--kt-primary-inverse);
  }

  .btn-check:checked+.btn.btn-primary,
  .btn-check:active+.btn.btn-primary,
  .btn.btn-primary:focus:not(.btn-active),
  .btn.btn-primary:hover:not(.btn-active),
  .btn.btn-primary:active:not(.btn-active),
  .btn.btn-primary.active,
  .btn.btn-primary.show,
  .show>.btn.btn-primary {
    color: var(--kt-primary-inverse);
    border-color: var(--mdc-blue-900);
    background-color: var(--mdc-blue-900) !important;
  }

  .btn-check:checked+.btn.btn-primary i,
  .btn-check:checked+.btn.btn-primary .svg-icon,
  .btn-check:active+.btn.btn-primary i,
  .btn-check:active+.btn.btn-primary .svg-icon,
  .btn.btn-primary:focus:not(.btn-active) i,
  .btn.btn-primary:focus:not(.btn-active) .svg-icon,
  .btn.btn-primary:hover:not(.btn-active) i,
  .btn.btn-primary:hover:not(.btn-active) .svg-icon,
  .btn.btn-primary:active:not(.btn-active) i,
  .btn.btn-primary:active:not(.btn-active) .svg-icon,
  .btn.btn-primary.active i,
  .btn.btn-primary.active .svg-icon,
  .btn.btn-primary.show i,
  .btn.btn-primary.show .svg-icon,
  .show>.btn.btn-primary i,
  .show>.btn.btn-primary .svg-icon {
    color: var(--kt-primary-inverse);
  }

  .btn-check:checked+.btn.btn-primary.dropdown-toggle:after,
  .btn-check:active+.btn.btn-primary.dropdown-toggle:after,
  .btn.btn-primary:focus:not(.btn-active).dropdown-toggle:after,
  .btn.btn-primary:hover:not(.btn-active).dropdown-toggle:after,
  .btn.btn-primary:active:not(.btn-active).dropdown-toggle:after,
  .btn.btn-primary.active.dropdown-toggle:after,
  .btn.btn-primary.show.dropdown-toggle:after,
  .show>.btn.btn-primary.dropdown-toggle:after {
    color: var(--kt-primary-inverse);
  }

  .btn.btn-light-primary {
    color: var(--kt-primary);
    border-color: var(--kt-primary-light);
    background-color: var(--kt-primary-light);
  }

  .btn.btn-light-primary i,
  .btn.btn-light-primary .svg-icon {
    color: var(--kt-primary);
  }

  .btn.btn-light-primary.dropdown-toggle:after {
    color: var(--kt-primary);
  }

  .btn-check:checked+.btn.btn-light-primary,
  .btn-check:active+.btn.btn-light-primary,
  .btn.btn-light-primary:focus:not(.btn-active),
  .btn.btn-light-primary:hover:not(.btn-active),
  .btn.btn-light-primary:active:not(.btn-active),
  .btn.btn-light-primary.active,
  .btn.btn-light-primary.show,
  .show>.btn.btn-light-primary {
    color: var(--kt-primary-inverse);
    border-color: var(--kt-primary);
    background-color: var(--kt-primary) !important;
  }

  .btn-check:checked+.btn.btn-light-primary i,
  .btn-check:checked+.btn.btn-light-primary .svg-icon,
  .btn-check:active+.btn.btn-light-primary i,
  .btn-check:active+.btn.btn-light-primary .svg-icon,
  .btn.btn-light-primary:focus:not(.btn-active) i,
  .btn.btn-light-primary:focus:not(.btn-active) .svg-icon,
  .btn.btn-light-primary:hover:not(.btn-active) i,
  .btn.btn-light-primary:hover:not(.btn-active) .svg-icon,
  .btn.btn-light-primary:active:not(.btn-active) i,
  .btn.btn-light-primary:active:not(.btn-active) .svg-icon,
  .btn.btn-light-primary.active i,
  .btn.btn-light-primary.active .svg-icon,
  .btn.btn-light-primary.show i,
  .btn.btn-light-primary.show .svg-icon,
  .show>.btn.btn-light-primary i,
  .show>.btn.btn-light-primary .svg-icon {
    color: var(--kt-primary-inverse);
  }

  .btn-check:checked+.btn.btn-light-primary.dropdown-toggle:after,
  .btn-check:active+.btn.btn-light-primary.dropdown-toggle:after,
  .btn.btn-light-primary:focus:not(.btn-active).dropdown-toggle:after,
  .btn.btn-light-primary:hover:not(.btn-active).dropdown-toggle:after,
  .btn.btn-light-primary:active:not(.btn-active).dropdown-toggle:after,
  .btn.btn-light-primary.active.dropdown-toggle:after,
  .btn.btn-light-primary.show.dropdown-toggle:after,
  .show>.btn.btn-light-primary.dropdown-toggle:after {
    color: var(--kt-primary-inverse);
  }

  .btn.btn-bg-primary {
    border-color: var(--kt-primary);
    background-color: var(--kt-primary);
  }

  .btn-check:checked+.btn.btn-active-primary,
  .btn-check:active+.btn.btn-active-primary,
  .btn.btn-active-primary:focus:not(.btn-active),
  .btn.btn-active-primary:hover:not(.btn-active),
  .btn.btn-active-primary:active:not(.btn-active),
  .btn.btn-active-primary.active,
  .btn.btn-active-primary.show,
  .show>.btn.btn-active-primary {
    color: var(--kt-primary-inverse);
    border-color: var(--mdc-blue-900);
    background-color: var(--mdc-blue-900) !important;
  }

  .btn-check:checked+.btn.btn-active-primary i,
  .btn-check:checked+.btn.btn-active-primary .svg-icon,
  .btn-check:active+.btn.btn-active-primary i,
  .btn-check:active+.btn.btn-active-primary .svg-icon,
  .btn.btn-active-primary:focus:not(.btn-active) i,
  .btn.btn-active-primary:focus:not(.btn-active) .svg-icon,
  .btn.btn-active-primary:hover:not(.btn-active) i,
  .btn.btn-active-primary:hover:not(.btn-active) .svg-icon,
  .btn.btn-active-primary:active:not(.btn-active) i,
  .btn.btn-active-primary:active:not(.btn-active) .svg-icon,
  .btn.btn-active-primary.active i,
  .btn.btn-active-primary.active .svg-icon,
  .btn.btn-active-primary.show i,
  .btn.btn-active-primary.show .svg-icon,
  .show>.btn.btn-active-primary i,
  .show>.btn.btn-active-primary .svg-icon {
    color: var(--kt-primary-inverse);
  }

  .btn-check:checked+.btn.btn-active-primary.dropdown-toggle:after,
  .btn-check:active+.btn.btn-active-primary.dropdown-toggle:after,
  .btn.btn-active-primary:focus:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-primary:hover:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-primary:active:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-primary.active.dropdown-toggle:after,
  .btn.btn-active-primary.show.dropdown-toggle:after,
  .show>.btn.btn-active-primary.dropdown-toggle:after {
    color: var(--kt-primary-inverse);
  }

  .btn-check:checked+.btn.btn-active-light-primary,
  .btn-check:active+.btn.btn-active-light-primary,
  .btn.btn-active-light-primary:focus:not(.btn-active),
  .btn.btn-active-light-primary:hover:not(.btn-active),
  .btn.btn-active-light-primary:active:not(.btn-active),
  .btn.btn-active-light-primary.active,
  .btn.btn-active-light-primary.show,
  .show>.btn.btn-active-light-primary {
    color: var(--kt-primary);
    border-color: var(--kt-primary-light);
    background-color: var(--kt-primary-light) !important;
  }

  .btn-check:checked+.btn.btn-active-light-primary i,
  .btn-check:checked+.btn.btn-active-light-primary .svg-icon,
  .btn-check:active+.btn.btn-active-light-primary i,
  .btn-check:active+.btn.btn-active-light-primary .svg-icon,
  .btn.btn-active-light-primary:focus:not(.btn-active) i,
  .btn.btn-active-light-primary:focus:not(.btn-active) .svg-icon,
  .btn.btn-active-light-primary:hover:not(.btn-active) i,
  .btn.btn-active-light-primary:hover:not(.btn-active) .svg-icon,
  .btn.btn-active-light-primary:active:not(.btn-active) i,
  .btn.btn-active-light-primary:active:not(.btn-active) .svg-icon,
  .btn.btn-active-light-primary.active i,
  .btn.btn-active-light-primary.active .svg-icon,
  .btn.btn-active-light-primary.show i,
  .btn.btn-active-light-primary.show .svg-icon,
  .show>.btn.btn-active-light-primary i,
  .show>.btn.btn-active-light-primary .svg-icon {
    color: var(--kt-primary);
  }

  .btn-check:checked+.btn.btn-active-light-primary.dropdown-toggle:after,
  .btn-check:active+.btn.btn-active-light-primary.dropdown-toggle:after,
  .btn.btn-active-light-primary:focus:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-light-primary:hover:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-light-primary:active:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-light-primary.active.dropdown-toggle:after,
  .btn.btn-active-light-primary.show.dropdown-toggle:after,
  .show>.btn.btn-active-light-primary.dropdown-toggle:after {
    color: var(--kt-primary);
  }

  .btn.btn-outline.btn-outline-primary {
    color: var(--kt-primary);
    border-color: var(--kt-primary);
    background-color: transparent;
  }

  .btn.btn-outline.btn-outline-primary i,
  .btn.btn-outline.btn-outline-primary .svg-icon {
    color: var(--kt-primary);
  }

  .btn.btn-outline.btn-outline-primary.dropdown-toggle:after {
    color: var(--kt-primary);
  }

  .btn-check:checked+.btn.btn-outline.btn-outline-primary,
  .btn-check:active+.btn.btn-outline.btn-outline-primary,
  .btn.btn-outline.btn-outline-primary:focus:not(.btn-active),
  .btn.btn-outline.btn-outline-primary:hover:not(.btn-active),
  .btn.btn-outline.btn-outline-primary:active:not(.btn-active),
  .btn.btn-outline.btn-outline-primary.active,
  .btn.btn-outline.btn-outline-primary.show,
  .show>.btn.btn-outline.btn-outline-primary {
    color: var(--kt-primary-active);
    border-color: var(--kt-primary);
    background-color: var(--kt-primary-light) !important;
  }

  .btn-check:checked+.btn.btn-outline.btn-outline-primary i,
  .btn-check:checked+.btn.btn-outline.btn-outline-primary .svg-icon,
  .btn-check:active+.btn.btn-outline.btn-outline-primary i,
  .btn-check:active+.btn.btn-outline.btn-outline-primary .svg-icon,
  .btn.btn-outline.btn-outline-primary:focus:not(.btn-active) i,
  .btn.btn-outline.btn-outline-primary:focus:not(.btn-active) .svg-icon,
  .btn.btn-outline.btn-outline-primary:hover:not(.btn-active) i,
  .btn.btn-outline.btn-outline-primary:hover:not(.btn-active) .svg-icon,
  .btn.btn-outline.btn-outline-primary:active:not(.btn-active) i,
  .btn.btn-outline.btn-outline-primary:active:not(.btn-active) .svg-icon,
  .btn.btn-outline.btn-outline-primary.active i,
  .btn.btn-outline.btn-outline-primary.active .svg-icon,
  .btn.btn-outline.btn-outline-primary.show i,
  .btn.btn-outline.btn-outline-primary.show .svg-icon,
  .show>.btn.btn-outline.btn-outline-primary i,
  .show>.btn.btn-outline.btn-outline-primary .svg-icon {
    color: var(--kt-primary-active);
  }

  .btn-check:checked+.btn.btn-outline.btn-outline-primary.dropdown-toggle:after,
  .btn-check:active+.btn.btn-outline.btn-outline-primary.dropdown-toggle:after,
  .btn.btn-outline.btn-outline-primary:focus:not(.btn-active).dropdown-toggle:after,
  .btn.btn-outline.btn-outline-primary:hover:not(.btn-active).dropdown-toggle:after,
  .btn.btn-outline.btn-outline-primary:active:not(.btn-active).dropdown-toggle:after,
  .btn.btn-outline.btn-outline-primary.active.dropdown-toggle:after,
  .btn.btn-outline.btn-outline-primary.show.dropdown-toggle:after,
  .show>.btn.btn-outline.btn-outline-primary.dropdown-toggle:after {
    color: var(--kt-primary-active);
  }

  .btn.btn-secondary {
    color: var(--kt-secondary-inverse);
    border-color: var(--kt-secondary);
    background-color: var(--kt-secondary);
  }

  .btn.btn-secondary i,
  .btn.btn-secondary .svg-icon {
    color: var(--kt-secondary-inverse);
  }

  .btn.btn-secondary.dropdown-toggle:after {
    color: var(--kt-secondary-inverse);
  }

  .btn-check:checked+.btn.btn-secondary,
  .btn-check:active+.btn.btn-secondary,
  .btn.btn-secondary:focus:not(.btn-active),
  .btn.btn-secondary:hover:not(.btn-active),
  .btn.btn-secondary:active:not(.btn-active),
  .btn.btn-secondary.active,
  .btn.btn-secondary.show,
  .show>.btn.btn-secondary {
    color: var(--kt-secondary-inverse);
    border-color: var(--kt-secondary-active);
    background-color: var(--kt-secondary-active) !important;
  }

  .btn-check:checked+.btn.btn-secondary i,
  .btn-check:checked+.btn.btn-secondary .svg-icon,
  .btn-check:active+.btn.btn-secondary i,
  .btn-check:active+.btn.btn-secondary .svg-icon,
  .btn.btn-secondary:focus:not(.btn-active) i,
  .btn.btn-secondary:focus:not(.btn-active) .svg-icon,
  .btn.btn-secondary:hover:not(.btn-active) i,
  .btn.btn-secondary:hover:not(.btn-active) .svg-icon,
  .btn.btn-secondary:active:not(.btn-active) i,
  .btn.btn-secondary:active:not(.btn-active) .svg-icon,
  .btn.btn-secondary.active i,
  .btn.btn-secondary.active .svg-icon,
  .btn.btn-secondary.show i,
  .btn.btn-secondary.show .svg-icon,
  .show>.btn.btn-secondary i,
  .show>.btn.btn-secondary .svg-icon {
    color: var(--kt-secondary-inverse);
  }

  .btn-check:checked+.btn.btn-secondary.dropdown-toggle:after,
  .btn-check:active+.btn.btn-secondary.dropdown-toggle:after,
  .btn.btn-secondary:focus:not(.btn-active).dropdown-toggle:after,
  .btn.btn-secondary:hover:not(.btn-active).dropdown-toggle:after,
  .btn.btn-secondary:active:not(.btn-active).dropdown-toggle:after,
  .btn.btn-secondary.active.dropdown-toggle:after,
  .btn.btn-secondary.show.dropdown-toggle:after,
  .show>.btn.btn-secondary.dropdown-toggle:after {
    color: var(--kt-secondary-inverse);
  }

  .btn.btn-light-secondary {
    color: var(--kt-secondary);
    border-color: var(--kt-secondary-light);
    background-color: var(--kt-secondary-light);
  }

  .btn.btn-light-secondary i,
  .btn.btn-light-secondary .svg-icon {
    color: var(--kt-secondary);
  }

  .btn.btn-light-secondary.dropdown-toggle:after {
    color: var(--kt-secondary);
  }

  .btn-check:checked+.btn.btn-light-secondary,
  .btn-check:active+.btn.btn-light-secondary,
  .btn.btn-light-secondary:focus:not(.btn-active),
  .btn.btn-light-secondary:hover:not(.btn-active),
  .btn.btn-light-secondary:active:not(.btn-active),
  .btn.btn-light-secondary.active,
  .btn.btn-light-secondary.show,
  .show>.btn.btn-light-secondary {
    color: var(--kt-secondary-inverse);
    border-color: var(--kt-secondary);
    background-color: var(--kt-secondary) !important;
  }

  .btn-check:checked+.btn.btn-light-secondary i,
  .btn-check:checked+.btn.btn-light-secondary .svg-icon,
  .btn-check:active+.btn.btn-light-secondary i,
  .btn-check:active+.btn.btn-light-secondary .svg-icon,
  .btn.btn-light-secondary:focus:not(.btn-active) i,
  .btn.btn-light-secondary:focus:not(.btn-active) .svg-icon,
  .btn.btn-light-secondary:hover:not(.btn-active) i,
  .btn.btn-light-secondary:hover:not(.btn-active) .svg-icon,
  .btn.btn-light-secondary:active:not(.btn-active) i,
  .btn.btn-light-secondary:active:not(.btn-active) .svg-icon,
  .btn.btn-light-secondary.active i,
  .btn.btn-light-secondary.active .svg-icon,
  .btn.btn-light-secondary.show i,
  .btn.btn-light-secondary.show .svg-icon,
  .show>.btn.btn-light-secondary i,
  .show>.btn.btn-light-secondary .svg-icon {
    color: var(--kt-secondary-inverse);
  }

  .btn-check:checked+.btn.btn-light-secondary.dropdown-toggle:after,
  .btn-check:active+.btn.btn-light-secondary.dropdown-toggle:after,
  .btn.btn-light-secondary:focus:not(.btn-active).dropdown-toggle:after,
  .btn.btn-light-secondary:hover:not(.btn-active).dropdown-toggle:after,
  .btn.btn-light-secondary:active:not(.btn-active).dropdown-toggle:after,
  .btn.btn-light-secondary.active.dropdown-toggle:after,
  .btn.btn-light-secondary.show.dropdown-toggle:after,
  .show>.btn.btn-light-secondary.dropdown-toggle:after {
    color: var(--kt-secondary-inverse);
  }

  .btn.btn-bg-secondary {
    border-color: var(--kt-secondary);
    background-color: var(--kt-secondary);
  }

  .btn-check:checked+.btn.btn-active-secondary,
  .btn-check:active+.btn.btn-active-secondary,
  .btn.btn-active-secondary:focus:not(.btn-active),
  .btn.btn-active-secondary:hover:not(.btn-active),
  .btn.btn-active-secondary:active:not(.btn-active),
  .btn.btn-active-secondary.active,
  .btn.btn-active-secondary.show,
  .show>.btn.btn-active-secondary {
    color: var(--kt-secondary-inverse);
    border-color: var(--kt-secondary);
    background-color: var(--kt-secondary) !important;
  }

  .btn-check:checked+.btn.btn-active-secondary i,
  .btn-check:checked+.btn.btn-active-secondary .svg-icon,
  .btn-check:active+.btn.btn-active-secondary i,
  .btn-check:active+.btn.btn-active-secondary .svg-icon,
  .btn.btn-active-secondary:focus:not(.btn-active) i,
  .btn.btn-active-secondary:focus:not(.btn-active) .svg-icon,
  .btn.btn-active-secondary:hover:not(.btn-active) i,
  .btn.btn-active-secondary:hover:not(.btn-active) .svg-icon,
  .btn.btn-active-secondary:active:not(.btn-active) i,
  .btn.btn-active-secondary:active:not(.btn-active) .svg-icon,
  .btn.btn-active-secondary.active i,
  .btn.btn-active-secondary.active .svg-icon,
  .btn.btn-active-secondary.show i,
  .btn.btn-active-secondary.show .svg-icon,
  .show>.btn.btn-active-secondary i,
  .show>.btn.btn-active-secondary .svg-icon {
    color: var(--kt-secondary-inverse);
  }

  .btn-check:checked+.btn.btn-active-secondary.dropdown-toggle:after,
  .btn-check:active+.btn.btn-active-secondary.dropdown-toggle:after,
  .btn.btn-active-secondary:focus:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-secondary:hover:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-secondary:active:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-secondary.active.dropdown-toggle:after,
  .btn.btn-active-secondary.show.dropdown-toggle:after,
  .show>.btn.btn-active-secondary.dropdown-toggle:after {
    color: var(--kt-secondary-inverse);
  }

  .btn-check:checked+.btn.btn-active-light-secondary,
  .btn-check:active+.btn.btn-active-light-secondary,
  .btn.btn-active-light-secondary:focus:not(.btn-active),
  .btn.btn-active-light-secondary:hover:not(.btn-active),
  .btn.btn-active-light-secondary:active:not(.btn-active),
  .btn.btn-active-light-secondary.active,
  .btn.btn-active-light-secondary.show,
  .show>.btn.btn-active-light-secondary {
    color: var(--kt-secondary);
    border-color: var(--kt-secondary-light);
    background-color: var(--kt-secondary-light) !important;
  }

  .btn-check:checked+.btn.btn-active-light-secondary i,
  .btn-check:checked+.btn.btn-active-light-secondary .svg-icon,
  .btn-check:active+.btn.btn-active-light-secondary i,
  .btn-check:active+.btn.btn-active-light-secondary .svg-icon,
  .btn.btn-active-light-secondary:focus:not(.btn-active) i,
  .btn.btn-active-light-secondary:focus:not(.btn-active) .svg-icon,
  .btn.btn-active-light-secondary:hover:not(.btn-active) i,
  .btn.btn-active-light-secondary:hover:not(.btn-active) .svg-icon,
  .btn.btn-active-light-secondary:active:not(.btn-active) i,
  .btn.btn-active-light-secondary:active:not(.btn-active) .svg-icon,
  .btn.btn-active-light-secondary.active i,
  .btn.btn-active-light-secondary.active .svg-icon,
  .btn.btn-active-light-secondary.show i,
  .btn.btn-active-light-secondary.show .svg-icon,
  .show>.btn.btn-active-light-secondary i,
  .show>.btn.btn-active-light-secondary .svg-icon {
    color: var(--kt-secondary);
  }

  .btn-check:checked+.btn.btn-active-light-secondary.dropdown-toggle:after,
  .btn-check:active+.btn.btn-active-light-secondary.dropdown-toggle:after,
  .btn.btn-active-light-secondary:focus:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-light-secondary:hover:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-light-secondary:active:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-light-secondary.active.dropdown-toggle:after,
  .btn.btn-active-light-secondary.show.dropdown-toggle:after,
  .show>.btn.btn-active-light-secondary.dropdown-toggle:after {
    color: var(--kt-secondary);
  }

  .btn.btn-outline.btn-outline-secondary {
    color: var(--kt-secondary);
    border-color: var(--kt-border-secondary-color);
    background-color: transparent;
  }

  .btn.btn-outline.btn-outline-secondary i,
  .btn.btn-outline.btn-outline-secondary .svg-icon {
    color: var(--kt-secondary);
  }

  .btn.btn-outline.btn-outline-secondary.dropdown-toggle:after {
    color: var(--kt-secondary);
  }

  .btn-check:checked+.btn.btn-outline.btn-outline-secondary,
  .btn-check:active+.btn.btn-outline.btn-outline-secondary,
  .btn.btn-outline.btn-outline-secondary:focus:not(.btn-active),
  .btn.btn-outline.btn-outline-secondary:hover:not(.btn-active),
  .btn.btn-outline.btn-outline-secondary:active:not(.btn-active),
  .btn.btn-outline.btn-outline-secondary.active,
  .btn.btn-outline.btn-outline-secondary.show,
  .show>.btn.btn-outline.btn-outline-secondary {
    color: var(--kt-secondary-active);
    border-color: var(--kt-border-secondary-color);
    background-color: var(--kt-secondary-light) !important;
  }

  .btn-check:checked+.btn.btn-outline.btn-outline-secondary i,
  .btn-check:checked+.btn.btn-outline.btn-outline-secondary .svg-icon,
  .btn-check:active+.btn.btn-outline.btn-outline-secondary i,
  .btn-check:active+.btn.btn-outline.btn-outline-secondary .svg-icon,
  .btn.btn-outline.btn-outline-secondary:focus:not(.btn-active) i,
  .btn.btn-outline.btn-outline-secondary:focus:not(.btn-active) .svg-icon,
  .btn.btn-outline.btn-outline-secondary:hover:not(.btn-active) i,
  .btn.btn-outline.btn-outline-secondary:hover:not(.btn-active) .svg-icon,
  .btn.btn-outline.btn-outline-secondary:active:not(.btn-active) i,
  .btn.btn-outline.btn-outline-secondary:active:not(.btn-active) .svg-icon,
  .btn.btn-outline.btn-outline-secondary.active i,
  .btn.btn-outline.btn-outline-secondary.active .svg-icon,
  .btn.btn-outline.btn-outline-secondary.show i,
  .btn.btn-outline.btn-outline-secondary.show .svg-icon,
  .show>.btn.btn-outline.btn-outline-secondary i,
  .show>.btn.btn-outline.btn-outline-secondary .svg-icon {
    color: var(--kt-secondary-active);
  }

  .btn-check:checked+.btn.btn-outline.btn-outline-secondary.dropdown-toggle:after,
  .btn-check:active+.btn.btn-outline.btn-outline-secondary.dropdown-toggle:after,
  .btn.btn-outline.btn-outline-secondary:focus:not(.btn-active).dropdown-toggle:after,
  .btn.btn-outline.btn-outline-secondary:hover:not(.btn-active).dropdown-toggle:after,
  .btn.btn-outline.btn-outline-secondary:active:not(.btn-active).dropdown-toggle:after,
  .btn.btn-outline.btn-outline-secondary.active.dropdown-toggle:after,
  .btn.btn-outline.btn-outline-secondary.show.dropdown-toggle:after,
  .show>.btn.btn-outline.btn-outline-secondary.dropdown-toggle:after {
    color: var(--kt-secondary-active);
  }

  .btn.btn-success {
    color: var(--kt-success-inverse);
    border-color: var(--kt-success);
    background-color: var(--kt-success);
  }

  .btn.btn-success i,
  .btn.btn-success .svg-icon {
    color: var(--kt-success-inverse);
  }

  .btn.btn-success.dropdown-toggle:after {
    color: var(--kt-success-inverse);
  }

  .btn-check:checked+.btn.btn-success,
  .btn-check:active+.btn.btn-success,
  .btn.btn-success:focus:not(.btn-active),
  .btn.btn-success:hover:not(.btn-active),
  .btn.btn-success:active:not(.btn-active),
  .btn.btn-success.active,
  .btn.btn-success.show,
  .show>.btn.btn-success {
    color: var(--kt-success-inverse);
    border-color: var(--kt-success-active);
    background-color: var(--kt-success-active) !important;
  }

  .btn-check:checked+.btn.btn-success i,
  .btn-check:checked+.btn.btn-success .svg-icon,
  .btn-check:active+.btn.btn-success i,
  .btn-check:active+.btn.btn-success .svg-icon,
  .btn.btn-success:focus:not(.btn-active) i,
  .btn.btn-success:focus:not(.btn-active) .svg-icon,
  .btn.btn-success:hover:not(.btn-active) i,
  .btn.btn-success:hover:not(.btn-active) .svg-icon,
  .btn.btn-success:active:not(.btn-active) i,
  .btn.btn-success:active:not(.btn-active) .svg-icon,
  .btn.btn-success.active i,
  .btn.btn-success.active .svg-icon,
  .btn.btn-success.show i,
  .btn.btn-success.show .svg-icon,
  .show>.btn.btn-success i,
  .show>.btn.btn-success .svg-icon {
    color: var(--kt-success-inverse);
  }

  .btn-check:checked+.btn.btn-success.dropdown-toggle:after,
  .btn-check:active+.btn.btn-success.dropdown-toggle:after,
  .btn.btn-success:focus:not(.btn-active).dropdown-toggle:after,
  .btn.btn-success:hover:not(.btn-active).dropdown-toggle:after,
  .btn.btn-success:active:not(.btn-active).dropdown-toggle:after,
  .btn.btn-success.active.dropdown-toggle:after,
  .btn.btn-success.show.dropdown-toggle:after,
  .show>.btn.btn-success.dropdown-toggle:after {
    color: var(--kt-success-inverse);
  }

  .btn.btn-light-success {
    color: var(--kt-success);
    border-color: var(--kt-success-light);
    background-color: var(--kt-success-light);
  }

  .btn.btn-light-success i,
  .btn.btn-light-success .svg-icon {
    color: var(--kt-success);
  }

  .btn.btn-light-success.dropdown-toggle:after {
    color: var(--kt-success);
  }

  .btn-check:checked+.btn.btn-light-success,
  .btn-check:active+.btn.btn-light-success,
  .btn.btn-light-success:focus:not(.btn-active),
  .btn.btn-light-success:hover:not(.btn-active),
  .btn.btn-light-success:active:not(.btn-active),
  .btn.btn-light-success.active,
  .btn.btn-light-success.show,
  .show>.btn.btn-light-success {
    color: var(--kt-success-inverse);
    border-color: var(--kt-success);
    background-color: var(--kt-success) !important;
  }

  .btn-check:checked+.btn.btn-light-success i,
  .btn-check:checked+.btn.btn-light-success .svg-icon,
  .btn-check:active+.btn.btn-light-success i,
  .btn-check:active+.btn.btn-light-success .svg-icon,
  .btn.btn-light-success:focus:not(.btn-active) i,
  .btn.btn-light-success:focus:not(.btn-active) .svg-icon,
  .btn.btn-light-success:hover:not(.btn-active) i,
  .btn.btn-light-success:hover:not(.btn-active) .svg-icon,
  .btn.btn-light-success:active:not(.btn-active) i,
  .btn.btn-light-success:active:not(.btn-active) .svg-icon,
  .btn.btn-light-success.active i,
  .btn.btn-light-success.active .svg-icon,
  .btn.btn-light-success.show i,
  .btn.btn-light-success.show .svg-icon,
  .show>.btn.btn-light-success i,
  .show>.btn.btn-light-success .svg-icon {
    color: var(--kt-success-inverse);
  }

  .btn-check:checked+.btn.btn-light-success.dropdown-toggle:after,
  .btn-check:active+.btn.btn-light-success.dropdown-toggle:after,
  .btn.btn-light-success:focus:not(.btn-active).dropdown-toggle:after,
  .btn.btn-light-success:hover:not(.btn-active).dropdown-toggle:after,
  .btn.btn-light-success:active:not(.btn-active).dropdown-toggle:after,
  .btn.btn-light-success.active.dropdown-toggle:after,
  .btn.btn-light-success.show.dropdown-toggle:after,
  .show>.btn.btn-light-success.dropdown-toggle:after {
    color: var(--kt-success-inverse);
  }

  .btn.btn-bg-success {
    border-color: var(--kt-success);
    background-color: var(--kt-success);
  }

  .btn-check:checked+.btn.btn-active-success,
  .btn-check:active+.btn.btn-active-success,
  .btn.btn-active-success:focus:not(.btn-active),
  .btn.btn-active-success:hover:not(.btn-active),
  .btn.btn-active-success:active:not(.btn-active),
  .btn.btn-active-success.active,
  .btn.btn-active-success.show,
  .show>.btn.btn-active-success {
    color: var(--kt-success-inverse);
    border-color: var(--kt-success);
    background-color: var(--kt-success) !important;
  }

  .btn-check:checked+.btn.btn-active-success i,
  .btn-check:checked+.btn.btn-active-success .svg-icon,
  .btn-check:active+.btn.btn-active-success i,
  .btn-check:active+.btn.btn-active-success .svg-icon,
  .btn.btn-active-success:focus:not(.btn-active) i,
  .btn.btn-active-success:focus:not(.btn-active) .svg-icon,
  .btn.btn-active-success:hover:not(.btn-active) i,
  .btn.btn-active-success:hover:not(.btn-active) .svg-icon,
  .btn.btn-active-success:active:not(.btn-active) i,
  .btn.btn-active-success:active:not(.btn-active) .svg-icon,
  .btn.btn-active-success.active i,
  .btn.btn-active-success.active .svg-icon,
  .btn.btn-active-success.show i,
  .btn.btn-active-success.show .svg-icon,
  .show>.btn.btn-active-success i,
  .show>.btn.btn-active-success .svg-icon {
    color: var(--kt-success-inverse);
  }

  .btn-check:checked+.btn.btn-active-success.dropdown-toggle:after,
  .btn-check:active+.btn.btn-active-success.dropdown-toggle:after,
  .btn.btn-active-success:focus:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-success:hover:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-success:active:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-success.active.dropdown-toggle:after,
  .btn.btn-active-success.show.dropdown-toggle:after,
  .show>.btn.btn-active-success.dropdown-toggle:after {
    color: var(--kt-success-inverse);
  }

  .btn-check:checked+.btn.btn-active-light-success,
  .btn-check:active+.btn.btn-active-light-success,
  .btn.btn-active-light-success:focus:not(.btn-active),
  .btn.btn-active-light-success:hover:not(.btn-active),
  .btn.btn-active-light-success:active:not(.btn-active),
  .btn.btn-active-light-success.active,
  .btn.btn-active-light-success.show,
  .show>.btn.btn-active-light-success {
    color: var(--kt-success);
    border-color: var(--kt-success-light);
    background-color: var(--kt-success-light) !important;
  }

  .btn-check:checked+.btn.btn-active-light-success i,
  .btn-check:checked+.btn.btn-active-light-success .svg-icon,
  .btn-check:active+.btn.btn-active-light-success i,
  .btn-check:active+.btn.btn-active-light-success .svg-icon,
  .btn.btn-active-light-success:focus:not(.btn-active) i,
  .btn.btn-active-light-success:focus:not(.btn-active) .svg-icon,
  .btn.btn-active-light-success:hover:not(.btn-active) i,
  .btn.btn-active-light-success:hover:not(.btn-active) .svg-icon,
  .btn.btn-active-light-success:active:not(.btn-active) i,
  .btn.btn-active-light-success:active:not(.btn-active) .svg-icon,
  .btn.btn-active-light-success.active i,
  .btn.btn-active-light-success.active .svg-icon,
  .btn.btn-active-light-success.show i,
  .btn.btn-active-light-success.show .svg-icon,
  .show>.btn.btn-active-light-success i,
  .show>.btn.btn-active-light-success .svg-icon {
    color: var(--kt-success);
  }

  .btn-check:checked+.btn.btn-active-light-success.dropdown-toggle:after,
  .btn-check:active+.btn.btn-active-light-success.dropdown-toggle:after,
  .btn.btn-active-light-success:focus:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-light-success:hover:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-light-success:active:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-light-success.active.dropdown-toggle:after,
  .btn.btn-active-light-success.show.dropdown-toggle:after,
  .show>.btn.btn-active-light-success.dropdown-toggle:after {
    color: var(--kt-success);
  }

  .btn.btn-outline.btn-outline-success {
    color: var(--kt-success);
    border-color: var(--kt-success);
    background-color: transparent;
  }

  .btn.btn-outline.btn-outline-success i,
  .btn.btn-outline.btn-outline-success .svg-icon {
    color: var(--kt-success);
  }

  .btn.btn-outline.btn-outline-success.dropdown-toggle:after {
    color: var(--kt-success);
  }

  .btn-check:checked+.btn.btn-outline.btn-outline-success,
  .btn-check:active+.btn.btn-outline.btn-outline-success,
  .btn.btn-outline.btn-outline-success:focus:not(.btn-active),
  .btn.btn-outline.btn-outline-success:hover:not(.btn-active),
  .btn.btn-outline.btn-outline-success:active:not(.btn-active),
  .btn.btn-outline.btn-outline-success.active,
  .btn.btn-outline.btn-outline-success.show,
  .show>.btn.btn-outline.btn-outline-success {
    color: var(--kt-success-active);
    border-color: var(--kt-success);
    background-color: var(--kt-success-light) !important;
  }

  .btn-check:checked+.btn.btn-outline.btn-outline-success i,
  .btn-check:checked+.btn.btn-outline.btn-outline-success .svg-icon,
  .btn-check:active+.btn.btn-outline.btn-outline-success i,
  .btn-check:active+.btn.btn-outline.btn-outline-success .svg-icon,
  .btn.btn-outline.btn-outline-success:focus:not(.btn-active) i,
  .btn.btn-outline.btn-outline-success:focus:not(.btn-active) .svg-icon,
  .btn.btn-outline.btn-outline-success:hover:not(.btn-active) i,
  .btn.btn-outline.btn-outline-success:hover:not(.btn-active) .svg-icon,
  .btn.btn-outline.btn-outline-success:active:not(.btn-active) i,
  .btn.btn-outline.btn-outline-success:active:not(.btn-active) .svg-icon,
  .btn.btn-outline.btn-outline-success.active i,
  .btn.btn-outline.btn-outline-success.active .svg-icon,
  .btn.btn-outline.btn-outline-success.show i,
  .btn.btn-outline.btn-outline-success.show .svg-icon,
  .show>.btn.btn-outline.btn-outline-success i,
  .show>.btn.btn-outline.btn-outline-success .svg-icon {
    color: var(--kt-success-active);
  }

  .btn-check:checked+.btn.btn-outline.btn-outline-success.dropdown-toggle:after,
  .btn-check:active+.btn.btn-outline.btn-outline-success.dropdown-toggle:after,
  .btn.btn-outline.btn-outline-success:focus:not(.btn-active).dropdown-toggle:after,
  .btn.btn-outline.btn-outline-success:hover:not(.btn-active).dropdown-toggle:after,
  .btn.btn-outline.btn-outline-success:active:not(.btn-active).dropdown-toggle:after,
  .btn.btn-outline.btn-outline-success.active.dropdown-toggle:after,
  .btn.btn-outline.btn-outline-success.show.dropdown-toggle:after,
  .show>.btn.btn-outline.btn-outline-success.dropdown-toggle:after {
    color: var(--kt-success-active);
  }

  .btn.btn-info {
    color: var(--kt-info-inverse);
    border-color: var(--kt-info);
    background-color: var(--kt-info);
  }

  .btn.btn-info i,
  .btn.btn-info .svg-icon {
    color: var(--kt-info-inverse);
  }

  .btn.btn-info.dropdown-toggle:after {
    color: var(--kt-info-inverse);
  }

  .btn-check:checked+.btn.btn-info,
  .btn-check:active+.btn.btn-info,
  .btn.btn-info:focus:not(.btn-active),
  .btn.btn-info:hover:not(.btn-active),
  .btn.btn-info:active:not(.btn-active),
  .btn.btn-info.active,
  .btn.btn-info.show,
  .show>.btn.btn-info {
    color: var(--kt-info-inverse);
    border-color: var(--kt-info-active);
    background-color: var(--kt-info-active) !important;
  }

  .btn-check:checked+.btn.btn-info i,
  .btn-check:checked+.btn.btn-info .svg-icon,
  .btn-check:active+.btn.btn-info i,
  .btn-check:active+.btn.btn-info .svg-icon,
  .btn.btn-info:focus:not(.btn-active) i,
  .btn.btn-info:focus:not(.btn-active) .svg-icon,
  .btn.btn-info:hover:not(.btn-active) i,
  .btn.btn-info:hover:not(.btn-active) .svg-icon,
  .btn.btn-info:active:not(.btn-active) i,
  .btn.btn-info:active:not(.btn-active) .svg-icon,
  .btn.btn-info.active i,
  .btn.btn-info.active .svg-icon,
  .btn.btn-info.show i,
  .btn.btn-info.show .svg-icon,
  .show>.btn.btn-info i,
  .show>.btn.btn-info .svg-icon {
    color: var(--kt-info-inverse);
  }

  .btn-check:checked+.btn.btn-info.dropdown-toggle:after,
  .btn-check:active+.btn.btn-info.dropdown-toggle:after,
  .btn.btn-info:focus:not(.btn-active).dropdown-toggle:after,
  .btn.btn-info:hover:not(.btn-active).dropdown-toggle:after,
  .btn.btn-info:active:not(.btn-active).dropdown-toggle:after,
  .btn.btn-info.active.dropdown-toggle:after,
  .btn.btn-info.show.dropdown-toggle:after,
  .show>.btn.btn-info.dropdown-toggle:after {
    color: var(--kt-info-inverse);
  }

  .btn.btn-light-info {
    color: var(--kt-info);
    border-color: var(--kt-info-light);
    background-color: var(--kt-info-light);
  }

  .btn.btn-light-info i,
  .btn.btn-light-info .svg-icon {
    color: var(--kt-info);
  }

  .btn.btn-light-info.dropdown-toggle:after {
    color: var(--kt-info);
  }

  .btn-check:checked+.btn.btn-light-info,
  .btn-check:active+.btn.btn-light-info,
  .btn.btn-light-info:focus:not(.btn-active),
  .btn.btn-light-info:hover:not(.btn-active),
  .btn.btn-light-info:active:not(.btn-active),
  .btn.btn-light-info.active,
  .btn.btn-light-info.show,
  .show>.btn.btn-light-info {
    color: var(--kt-info-inverse);
    border-color: var(--kt-info);
    background-color: var(--kt-info) !important;
  }

  .btn-check:checked+.btn.btn-light-info i,
  .btn-check:checked+.btn.btn-light-info .svg-icon,
  .btn-check:active+.btn.btn-light-info i,
  .btn-check:active+.btn.btn-light-info .svg-icon,
  .btn.btn-light-info:focus:not(.btn-active) i,
  .btn.btn-light-info:focus:not(.btn-active) .svg-icon,
  .btn.btn-light-info:hover:not(.btn-active) i,
  .btn.btn-light-info:hover:not(.btn-active) .svg-icon,
  .btn.btn-light-info:active:not(.btn-active) i,
  .btn.btn-light-info:active:not(.btn-active) .svg-icon,
  .btn.btn-light-info.active i,
  .btn.btn-light-info.active .svg-icon,
  .btn.btn-light-info.show i,
  .btn.btn-light-info.show .svg-icon,
  .show>.btn.btn-light-info i,
  .show>.btn.btn-light-info .svg-icon {
    color: var(--kt-info-inverse);
  }

  .btn-check:checked+.btn.btn-light-info.dropdown-toggle:after,
  .btn-check:active+.btn.btn-light-info.dropdown-toggle:after,
  .btn.btn-light-info:focus:not(.btn-active).dropdown-toggle:after,
  .btn.btn-light-info:hover:not(.btn-active).dropdown-toggle:after,
  .btn.btn-light-info:active:not(.btn-active).dropdown-toggle:after,
  .btn.btn-light-info.active.dropdown-toggle:after,
  .btn.btn-light-info.show.dropdown-toggle:after,
  .show>.btn.btn-light-info.dropdown-toggle:after {
    color: var(--kt-info-inverse);
  }

  .btn.btn-bg-info {
    border-color: var(--kt-info);
    background-color: var(--kt-info);
  }

  .btn-check:checked+.btn.btn-active-info,
  .btn-check:active+.btn.btn-active-info,
  .btn.btn-active-info:focus:not(.btn-active),
  .btn.btn-active-info:hover:not(.btn-active),
  .btn.btn-active-info:active:not(.btn-active),
  .btn.btn-active-info.active,
  .btn.btn-active-info.show,
  .show>.btn.btn-active-info {
    color: var(--kt-info-inverse);
    border-color: var(--kt-info);
    background-color: var(--kt-info) !important;
  }

  .btn-check:checked+.btn.btn-active-info i,
  .btn-check:checked+.btn.btn-active-info .svg-icon,
  .btn-check:active+.btn.btn-active-info i,
  .btn-check:active+.btn.btn-active-info .svg-icon,
  .btn.btn-active-info:focus:not(.btn-active) i,
  .btn.btn-active-info:focus:not(.btn-active) .svg-icon,
  .btn.btn-active-info:hover:not(.btn-active) i,
  .btn.btn-active-info:hover:not(.btn-active) .svg-icon,
  .btn.btn-active-info:active:not(.btn-active) i,
  .btn.btn-active-info:active:not(.btn-active) .svg-icon,
  .btn.btn-active-info.active i,
  .btn.btn-active-info.active .svg-icon,
  .btn.btn-active-info.show i,
  .btn.btn-active-info.show .svg-icon,
  .show>.btn.btn-active-info i,
  .show>.btn.btn-active-info .svg-icon {
    color: var(--kt-info-inverse);
  }

  .btn-check:checked+.btn.btn-active-info.dropdown-toggle:after,
  .btn-check:active+.btn.btn-active-info.dropdown-toggle:after,
  .btn.btn-active-info:focus:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-info:hover:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-info:active:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-info.active.dropdown-toggle:after,
  .btn.btn-active-info.show.dropdown-toggle:after,
  .show>.btn.btn-active-info.dropdown-toggle:after {
    color: var(--kt-info-inverse);
  }

  .btn-check:checked+.btn.btn-active-light-info,
  .btn-check:active+.btn.btn-active-light-info,
  .btn.btn-active-light-info:focus:not(.btn-active),
  .btn.btn-active-light-info:hover:not(.btn-active),
  .btn.btn-active-light-info:active:not(.btn-active),
  .btn.btn-active-light-info.active,
  .btn.btn-active-light-info.show,
  .show>.btn.btn-active-light-info {
    color: var(--kt-info);
    border-color: var(--kt-info-light);
    background-color: var(--kt-info-light) !important;
  }

  .btn-check:checked+.btn.btn-active-light-info i,
  .btn-check:checked+.btn.btn-active-light-info .svg-icon,
  .btn-check:active+.btn.btn-active-light-info i,
  .btn-check:active+.btn.btn-active-light-info .svg-icon,
  .btn.btn-active-light-info:focus:not(.btn-active) i,
  .btn.btn-active-light-info:focus:not(.btn-active) .svg-icon,
  .btn.btn-active-light-info:hover:not(.btn-active) i,
  .btn.btn-active-light-info:hover:not(.btn-active) .svg-icon,
  .btn.btn-active-light-info:active:not(.btn-active) i,
  .btn.btn-active-light-info:active:not(.btn-active) .svg-icon,
  .btn.btn-active-light-info.active i,
  .btn.btn-active-light-info.active .svg-icon,
  .btn.btn-active-light-info.show i,
  .btn.btn-active-light-info.show .svg-icon,
  .show>.btn.btn-active-light-info i,
  .show>.btn.btn-active-light-info .svg-icon {
    color: var(--kt-info);
  }

  .btn-check:checked+.btn.btn-active-light-info.dropdown-toggle:after,
  .btn-check:active+.btn.btn-active-light-info.dropdown-toggle:after,
  .btn.btn-active-light-info:focus:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-light-info:hover:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-light-info:active:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-light-info.active.dropdown-toggle:after,
  .btn.btn-active-light-info.show.dropdown-toggle:after,
  .show>.btn.btn-active-light-info.dropdown-toggle:after {
    color: var(--kt-info);
  }

  .btn.btn-outline.btn-outline-info {
    color: var(--kt-info);
    border-color: var(--kt-info);
    background-color: transparent;
  }

  .btn.btn-outline.btn-outline-info i,
  .btn.btn-outline.btn-outline-info .svg-icon {
    color: var(--kt-info);
  }

  .btn.btn-outline.btn-outline-info.dropdown-toggle:after {
    color: var(--kt-info);
  }

  .btn-check:checked+.btn.btn-outline.btn-outline-info,
  .btn-check:active+.btn.btn-outline.btn-outline-info,
  .btn.btn-outline.btn-outline-info:focus:not(.btn-active),
  .btn.btn-outline.btn-outline-info:hover:not(.btn-active),
  .btn.btn-outline.btn-outline-info:active:not(.btn-active),
  .btn.btn-outline.btn-outline-info.active,
  .btn.btn-outline.btn-outline-info.show,
  .show>.btn.btn-outline.btn-outline-info {
    color: var(--kt-info-active);
    border-color: var(--kt-info);
    background-color: var(--kt-info-light) !important;
  }

  .btn-check:checked+.btn.btn-outline.btn-outline-info i,
  .btn-check:checked+.btn.btn-outline.btn-outline-info .svg-icon,
  .btn-check:active+.btn.btn-outline.btn-outline-info i,
  .btn-check:active+.btn.btn-outline.btn-outline-info .svg-icon,
  .btn.btn-outline.btn-outline-info:focus:not(.btn-active) i,
  .btn.btn-outline.btn-outline-info:focus:not(.btn-active) .svg-icon,
  .btn.btn-outline.btn-outline-info:hover:not(.btn-active) i,
  .btn.btn-outline.btn-outline-info:hover:not(.btn-active) .svg-icon,
  .btn.btn-outline.btn-outline-info:active:not(.btn-active) i,
  .btn.btn-outline.btn-outline-info:active:not(.btn-active) .svg-icon,
  .btn.btn-outline.btn-outline-info.active i,
  .btn.btn-outline.btn-outline-info.active .svg-icon,
  .btn.btn-outline.btn-outline-info.show i,
  .btn.btn-outline.btn-outline-info.show .svg-icon,
  .show>.btn.btn-outline.btn-outline-info i,
  .show>.btn.btn-outline.btn-outline-info .svg-icon {
    color: var(--kt-info-active);
  }

  .btn-check:checked+.btn.btn-outline.btn-outline-info.dropdown-toggle:after,
  .btn-check:active+.btn.btn-outline.btn-outline-info.dropdown-toggle:after,
  .btn.btn-outline.btn-outline-info:focus:not(.btn-active).dropdown-toggle:after,
  .btn.btn-outline.btn-outline-info:hover:not(.btn-active).dropdown-toggle:after,
  .btn.btn-outline.btn-outline-info:active:not(.btn-active).dropdown-toggle:after,
  .btn.btn-outline.btn-outline-info.active.dropdown-toggle:after,
  .btn.btn-outline.btn-outline-info.show.dropdown-toggle:after,
  .show>.btn.btn-outline.btn-outline-info.dropdown-toggle:after {
    color: var(--kt-info-active);
  }

  .btn.btn-warning {
    color: var(--kt-warning-inverse);
    border-color: var(--kt-warning);
    background-color: var(--kt-warning);
  }

  .btn.btn-warning i,
  .btn.btn-warning .svg-icon {
    color: var(--kt-warning-inverse);
  }

  .btn.btn-warning.dropdown-toggle:after {
    color: var(--kt-warning-inverse);
  }

  .btn-check:checked+.btn.btn-warning,
  .btn-check:active+.btn.btn-warning,
  .btn.btn-warning:focus:not(.btn-active),
  .btn.btn-warning:hover:not(.btn-active),
  .btn.btn-warning:active:not(.btn-active),
  .btn.btn-warning.active,
  .btn.btn-warning.show,
  .show>.btn.btn-warning {
    color: var(--kt-warning-inverse);
    border-color: var(--kt-warning-active);
    background-color: var(--kt-warning-active) !important;
  }

  .btn-check:checked+.btn.btn-warning i,
  .btn-check:checked+.btn.btn-warning .svg-icon,
  .btn-check:active+.btn.btn-warning i,
  .btn-check:active+.btn.btn-warning .svg-icon,
  .btn.btn-warning:focus:not(.btn-active) i,
  .btn.btn-warning:focus:not(.btn-active) .svg-icon,
  .btn.btn-warning:hover:not(.btn-active) i,
  .btn.btn-warning:hover:not(.btn-active) .svg-icon,
  .btn.btn-warning:active:not(.btn-active) i,
  .btn.btn-warning:active:not(.btn-active) .svg-icon,
  .btn.btn-warning.active i,
  .btn.btn-warning.active .svg-icon,
  .btn.btn-warning.show i,
  .btn.btn-warning.show .svg-icon,
  .show>.btn.btn-warning i,
  .show>.btn.btn-warning .svg-icon {
    color: var(--kt-warning-inverse);
  }

  .btn-check:checked+.btn.btn-warning.dropdown-toggle:after,
  .btn-check:active+.btn.btn-warning.dropdown-toggle:after,
  .btn.btn-warning:focus:not(.btn-active).dropdown-toggle:after,
  .btn.btn-warning:hover:not(.btn-active).dropdown-toggle:after,
  .btn.btn-warning:active:not(.btn-active).dropdown-toggle:after,
  .btn.btn-warning.active.dropdown-toggle:after,
  .btn.btn-warning.show.dropdown-toggle:after,
  .show>.btn.btn-warning.dropdown-toggle:after {
    color: var(--kt-warning-inverse);
  }

  .btn.btn-light-warning {
    color: var(--kt-warning);
    border-color: var(--kt-warning-light);
    background-color: var(--kt-warning-light);
  }

  .btn.btn-light-warning i,
  .btn.btn-light-warning .svg-icon {
    color: var(--kt-warning);
  }

  .btn.btn-light-warning.dropdown-toggle:after {
    color: var(--kt-warning);
  }

  .btn-check:checked+.btn.btn-light-warning,
  .btn-check:active+.btn.btn-light-warning,
  .btn.btn-light-warning:focus:not(.btn-active),
  .btn.btn-light-warning:hover:not(.btn-active),
  .btn.btn-light-warning:active:not(.btn-active),
  .btn.btn-light-warning.active,
  .btn.btn-light-warning.show,
  .show>.btn.btn-light-warning {
    color: var(--kt-warning-inverse);
    border-color: var(--kt-warning);
    background-color: var(--kt-warning) !important;
  }

  .btn-check:checked+.btn.btn-light-warning i,
  .btn-check:checked+.btn.btn-light-warning .svg-icon,
  .btn-check:active+.btn.btn-light-warning i,
  .btn-check:active+.btn.btn-light-warning .svg-icon,
  .btn.btn-light-warning:focus:not(.btn-active) i,
  .btn.btn-light-warning:focus:not(.btn-active) .svg-icon,
  .btn.btn-light-warning:hover:not(.btn-active) i,
  .btn.btn-light-warning:hover:not(.btn-active) .svg-icon,
  .btn.btn-light-warning:active:not(.btn-active) i,
  .btn.btn-light-warning:active:not(.btn-active) .svg-icon,
  .btn.btn-light-warning.active i,
  .btn.btn-light-warning.active .svg-icon,
  .btn.btn-light-warning.show i,
  .btn.btn-light-warning.show .svg-icon,
  .show>.btn.btn-light-warning i,
  .show>.btn.btn-light-warning .svg-icon {
    color: var(--kt-warning-inverse);
  }

  .btn-check:checked+.btn.btn-light-warning.dropdown-toggle:after,
  .btn-check:active+.btn.btn-light-warning.dropdown-toggle:after,
  .btn.btn-light-warning:focus:not(.btn-active).dropdown-toggle:after,
  .btn.btn-light-warning:hover:not(.btn-active).dropdown-toggle:after,
  .btn.btn-light-warning:active:not(.btn-active).dropdown-toggle:after,
  .btn.btn-light-warning.active.dropdown-toggle:after,
  .btn.btn-light-warning.show.dropdown-toggle:after,
  .show>.btn.btn-light-warning.dropdown-toggle:after {
    color: var(--kt-warning-inverse);
  }

  .btn.btn-bg-warning {
    border-color: var(--kt-warning);
    background-color: var(--kt-warning);
  }

  .btn-check:checked+.btn.btn-active-warning,
  .btn-check:active+.btn.btn-active-warning,
  .btn.btn-active-warning:focus:not(.btn-active),
  .btn.btn-active-warning:hover:not(.btn-active),
  .btn.btn-active-warning:active:not(.btn-active),
  .btn.btn-active-warning.active,
  .btn.btn-active-warning.show,
  .show>.btn.btn-active-warning {
    color: var(--kt-warning-inverse);
    border-color: var(--kt-warning);
    background-color: var(--kt-warning) !important;
  }

  .btn-check:checked+.btn.btn-active-warning i,
  .btn-check:checked+.btn.btn-active-warning .svg-icon,
  .btn-check:active+.btn.btn-active-warning i,
  .btn-check:active+.btn.btn-active-warning .svg-icon,
  .btn.btn-active-warning:focus:not(.btn-active) i,
  .btn.btn-active-warning:focus:not(.btn-active) .svg-icon,
  .btn.btn-active-warning:hover:not(.btn-active) i,
  .btn.btn-active-warning:hover:not(.btn-active) .svg-icon,
  .btn.btn-active-warning:active:not(.btn-active) i,
  .btn.btn-active-warning:active:not(.btn-active) .svg-icon,
  .btn.btn-active-warning.active i,
  .btn.btn-active-warning.active .svg-icon,
  .btn.btn-active-warning.show i,
  .btn.btn-active-warning.show .svg-icon,
  .show>.btn.btn-active-warning i,
  .show>.btn.btn-active-warning .svg-icon {
    color: var(--kt-warning-inverse);
  }

  .btn-check:checked+.btn.btn-active-warning.dropdown-toggle:after,
  .btn-check:active+.btn.btn-active-warning.dropdown-toggle:after,
  .btn.btn-active-warning:focus:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-warning:hover:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-warning:active:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-warning.active.dropdown-toggle:after,
  .btn.btn-active-warning.show.dropdown-toggle:after,
  .show>.btn.btn-active-warning.dropdown-toggle:after {
    color: var(--kt-warning-inverse);
  }

  .btn-check:checked+.btn.btn-active-light-warning,
  .btn-check:active+.btn.btn-active-light-warning,
  .btn.btn-active-light-warning:focus:not(.btn-active),
  .btn.btn-active-light-warning:hover:not(.btn-active),
  .btn.btn-active-light-warning:active:not(.btn-active),
  .btn.btn-active-light-warning.active,
  .btn.btn-active-light-warning.show,
  .show>.btn.btn-active-light-warning {
    color: var(--kt-warning);
    border-color: var(--kt-warning-light);
    background-color: var(--kt-warning-light) !important;
  }

  .btn-check:checked+.btn.btn-active-light-warning i,
  .btn-check:checked+.btn.btn-active-light-warning .svg-icon,
  .btn-check:active+.btn.btn-active-light-warning i,
  .btn-check:active+.btn.btn-active-light-warning .svg-icon,
  .btn.btn-active-light-warning:focus:not(.btn-active) i,
  .btn.btn-active-light-warning:focus:not(.btn-active) .svg-icon,
  .btn.btn-active-light-warning:hover:not(.btn-active) i,
  .btn.btn-active-light-warning:hover:not(.btn-active) .svg-icon,
  .btn.btn-active-light-warning:active:not(.btn-active) i,
  .btn.btn-active-light-warning:active:not(.btn-active) .svg-icon,
  .btn.btn-active-light-warning.active i,
  .btn.btn-active-light-warning.active .svg-icon,
  .btn.btn-active-light-warning.show i,
  .btn.btn-active-light-warning.show .svg-icon,
  .show>.btn.btn-active-light-warning i,
  .show>.btn.btn-active-light-warning .svg-icon {
    color: var(--kt-warning);
  }

  .btn-check:checked+.btn.btn-active-light-warning.dropdown-toggle:after,
  .btn-check:active+.btn.btn-active-light-warning.dropdown-toggle:after,
  .btn.btn-active-light-warning:focus:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-light-warning:hover:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-light-warning:active:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-light-warning.active.dropdown-toggle:after,
  .btn.btn-active-light-warning.show.dropdown-toggle:after,
  .show>.btn.btn-active-light-warning.dropdown-toggle:after {
    color: var(--kt-warning);
  }

  .btn.btn-outline.btn-outline-warning {
    color: var(--kt-warning);
    border-color: var(--kt-warning);
    background-color: transparent;
  }

  .btn.btn-outline.btn-outline-warning i,
  .btn.btn-outline.btn-outline-warning .svg-icon {
    color: var(--kt-warning);
  }

  .btn.btn-outline.btn-outline-warning.dropdown-toggle:after {
    color: var(--kt-warning);
  }

  .btn-check:checked+.btn.btn-outline.btn-outline-warning,
  .btn-check:active+.btn.btn-outline.btn-outline-warning,
  .btn.btn-outline.btn-outline-warning:focus:not(.btn-active),
  .btn.btn-outline.btn-outline-warning:hover:not(.btn-active),
  .btn.btn-outline.btn-outline-warning:active:not(.btn-active),
  .btn.btn-outline.btn-outline-warning.active,
  .btn.btn-outline.btn-outline-warning.show,
  .show>.btn.btn-outline.btn-outline-warning {
    color: var(--kt-warning-active);
    border-color: var(--kt-warning);
    background-color: var(--kt-warning-light) !important;
  }

  .btn-check:checked+.btn.btn-outline.btn-outline-warning i,
  .btn-check:checked+.btn.btn-outline.btn-outline-warning .svg-icon,
  .btn-check:active+.btn.btn-outline.btn-outline-warning i,
  .btn-check:active+.btn.btn-outline.btn-outline-warning .svg-icon,
  .btn.btn-outline.btn-outline-warning:focus:not(.btn-active) i,
  .btn.btn-outline.btn-outline-warning:focus:not(.btn-active) .svg-icon,
  .btn.btn-outline.btn-outline-warning:hover:not(.btn-active) i,
  .btn.btn-outline.btn-outline-warning:hover:not(.btn-active) .svg-icon,
  .btn.btn-outline.btn-outline-warning:active:not(.btn-active) i,
  .btn.btn-outline.btn-outline-warning:active:not(.btn-active) .svg-icon,
  .btn.btn-outline.btn-outline-warning.active i,
  .btn.btn-outline.btn-outline-warning.active .svg-icon,
  .btn.btn-outline.btn-outline-warning.show i,
  .btn.btn-outline.btn-outline-warning.show .svg-icon,
  .show>.btn.btn-outline.btn-outline-warning i,
  .show>.btn.btn-outline.btn-outline-warning .svg-icon {
    color: var(--kt-warning-active);
  }

  .btn-check:checked+.btn.btn-outline.btn-outline-warning.dropdown-toggle:after,
  .btn-check:active+.btn.btn-outline.btn-outline-warning.dropdown-toggle:after,
  .btn.btn-outline.btn-outline-warning:focus:not(.btn-active).dropdown-toggle:after,
  .btn.btn-outline.btn-outline-warning:hover:not(.btn-active).dropdown-toggle:after,
  .btn.btn-outline.btn-outline-warning:active:not(.btn-active).dropdown-toggle:after,
  .btn.btn-outline.btn-outline-warning.active.dropdown-toggle:after,
  .btn.btn-outline.btn-outline-warning.show.dropdown-toggle:after,
  .show>.btn.btn-outline.btn-outline-warning.dropdown-toggle:after {
    color: var(--kt-warning-active);
  }

  .btn.btn-danger {
    color: var(--kt-danger-inverse);
    border-color: var(--kt-danger);
    background-color: var(--kt-danger);
  }

  .btn.btn-danger i,
  .btn.btn-danger .svg-icon {
    color: var(--kt-danger-inverse);
  }

  .btn.btn-danger.dropdown-toggle:after {
    color: var(--kt-danger-inverse);
  }

  .btn-check:checked+.btn.btn-danger,
  .btn-check:active+.btn.btn-danger,
  .btn.btn-danger:focus:not(.btn-active),
  .btn.btn-danger:hover:not(.btn-active),
  .btn.btn-danger:active:not(.btn-active),
  .btn.btn-danger.active,
  .btn.btn-danger.show,
  .show>.btn.btn-danger {
    color: var(--kt-danger-inverse);
    border-color: var(--kt-danger-active);
    background-color: var(--kt-danger-active) !important;
  }

  .btn-check:checked+.btn.btn-danger i,
  .btn-check:checked+.btn.btn-danger .svg-icon,
  .btn-check:active+.btn.btn-danger i,
  .btn-check:active+.btn.btn-danger .svg-icon,
  .btn.btn-danger:focus:not(.btn-active) i,
  .btn.btn-danger:focus:not(.btn-active) .svg-icon,
  .btn.btn-danger:hover:not(.btn-active) i,
  .btn.btn-danger:hover:not(.btn-active) .svg-icon,
  .btn.btn-danger:active:not(.btn-active) i,
  .btn.btn-danger:active:not(.btn-active) .svg-icon,
  .btn.btn-danger.active i,
  .btn.btn-danger.active .svg-icon,
  .btn.btn-danger.show i,
  .btn.btn-danger.show .svg-icon,
  .show>.btn.btn-danger i,
  .show>.btn.btn-danger .svg-icon {
    color: var(--kt-danger-inverse);
  }

  .btn-check:checked+.btn.btn-danger.dropdown-toggle:after,
  .btn-check:active+.btn.btn-danger.dropdown-toggle:after,
  .btn.btn-danger:focus:not(.btn-active).dropdown-toggle:after,
  .btn.btn-danger:hover:not(.btn-active).dropdown-toggle:after,
  .btn.btn-danger:active:not(.btn-active).dropdown-toggle:after,
  .btn.btn-danger.active.dropdown-toggle:after,
  .btn.btn-danger.show.dropdown-toggle:after,
  .show>.btn.btn-danger.dropdown-toggle:after {
    color: var(--kt-danger-inverse);
  }

  .btn.btn-light-danger {
    color: var(--kt-danger);
    border-color: var(--kt-danger-light);
    background-color: var(--kt-danger-light);
  }

  .btn.btn-light-danger i,
  .btn.btn-light-danger .svg-icon {
    color: var(--kt-danger);
  }

  .btn.btn-light-danger.dropdown-toggle:after {
    color: var(--kt-danger);
  }

  .btn-check:checked+.btn.btn-light-danger,
  .btn-check:active+.btn.btn-light-danger,
  .btn.btn-light-danger:focus:not(.btn-active),
  .btn.btn-light-danger:hover:not(.btn-active),
  .btn.btn-light-danger:active:not(.btn-active),
  .btn.btn-light-danger.active,
  .btn.btn-light-danger.show,
  .show>.btn.btn-light-danger {
    color: var(--kt-danger-inverse);
    border-color: var(--kt-danger);
    background-color: var(--kt-danger) !important;
  }

  .btn-check:checked+.btn.btn-light-danger i,
  .btn-check:checked+.btn.btn-light-danger .svg-icon,
  .btn-check:active+.btn.btn-light-danger i,
  .btn-check:active+.btn.btn-light-danger .svg-icon,
  .btn.btn-light-danger:focus:not(.btn-active) i,
  .btn.btn-light-danger:focus:not(.btn-active) .svg-icon,
  .btn.btn-light-danger:hover:not(.btn-active) i,
  .btn.btn-light-danger:hover:not(.btn-active) .svg-icon,
  .btn.btn-light-danger:active:not(.btn-active) i,
  .btn.btn-light-danger:active:not(.btn-active) .svg-icon,
  .btn.btn-light-danger.active i,
  .btn.btn-light-danger.active .svg-icon,
  .btn.btn-light-danger.show i,
  .btn.btn-light-danger.show .svg-icon,
  .show>.btn.btn-light-danger i,
  .show>.btn.btn-light-danger .svg-icon {
    color: var(--kt-danger-inverse);
  }

  .btn-check:checked+.btn.btn-light-danger.dropdown-toggle:after,
  .btn-check:active+.btn.btn-light-danger.dropdown-toggle:after,
  .btn.btn-light-danger:focus:not(.btn-active).dropdown-toggle:after,
  .btn.btn-light-danger:hover:not(.btn-active).dropdown-toggle:after,
  .btn.btn-light-danger:active:not(.btn-active).dropdown-toggle:after,
  .btn.btn-light-danger.active.dropdown-toggle:after,
  .btn.btn-light-danger.show.dropdown-toggle:after,
  .show>.btn.btn-light-danger.dropdown-toggle:after {
    color: var(--kt-danger-inverse);
  }

  .btn.btn-bg-danger {
    border-color: var(--kt-danger);
    background-color: var(--kt-danger);
  }

  .btn-check:checked+.btn.btn-active-danger,
  .btn-check:active+.btn.btn-active-danger,
  .btn.btn-active-danger:focus:not(.btn-active),
  .btn.btn-active-danger:hover:not(.btn-active),
  .btn.btn-active-danger:active:not(.btn-active),
  .btn.btn-active-danger.active,
  .btn.btn-active-danger.show,
  .show>.btn.btn-active-danger {
    color: var(--kt-danger-inverse);
    border-color: var(--kt-danger);
    background-color: var(--kt-danger) !important;
  }

  .btn-check:checked+.btn.btn-active-danger i,
  .btn-check:checked+.btn.btn-active-danger .svg-icon,
  .btn-check:active+.btn.btn-active-danger i,
  .btn-check:active+.btn.btn-active-danger .svg-icon,
  .btn.btn-active-danger:focus:not(.btn-active) i,
  .btn.btn-active-danger:focus:not(.btn-active) .svg-icon,
  .btn.btn-active-danger:hover:not(.btn-active) i,
  .btn.btn-active-danger:hover:not(.btn-active) .svg-icon,
  .btn.btn-active-danger:active:not(.btn-active) i,
  .btn.btn-active-danger:active:not(.btn-active) .svg-icon,
  .btn.btn-active-danger.active i,
  .btn.btn-active-danger.active .svg-icon,
  .btn.btn-active-danger.show i,
  .btn.btn-active-danger.show .svg-icon,
  .show>.btn.btn-active-danger i,
  .show>.btn.btn-active-danger .svg-icon {
    color: var(--kt-danger-inverse);
  }

  .btn-check:checked+.btn.btn-active-danger.dropdown-toggle:after,
  .btn-check:active+.btn.btn-active-danger.dropdown-toggle:after,
  .btn.btn-active-danger:focus:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-danger:hover:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-danger:active:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-danger.active.dropdown-toggle:after,
  .btn.btn-active-danger.show.dropdown-toggle:after,
  .show>.btn.btn-active-danger.dropdown-toggle:after {
    color: var(--kt-danger-inverse);
  }

  .btn-check:checked+.btn.btn-active-light-danger,
  .btn-check:active+.btn.btn-active-light-danger,
  .btn.btn-active-light-danger:focus:not(.btn-active),
  .btn.btn-active-light-danger:hover:not(.btn-active),
  .btn.btn-active-light-danger:active:not(.btn-active),
  .btn.btn-active-light-danger.active,
  .btn.btn-active-light-danger.show,
  .show>.btn.btn-active-light-danger {
    color: var(--kt-danger);
    border-color: var(--kt-danger-light);
    background-color: var(--kt-danger-light) !important;
  }

  .btn-check:checked+.btn.btn-active-light-danger i,
  .btn-check:checked+.btn.btn-active-light-danger .svg-icon,
  .btn-check:active+.btn.btn-active-light-danger i,
  .btn-check:active+.btn.btn-active-light-danger .svg-icon,
  .btn.btn-active-light-danger:focus:not(.btn-active) i,
  .btn.btn-active-light-danger:focus:not(.btn-active) .svg-icon,
  .btn.btn-active-light-danger:hover:not(.btn-active) i,
  .btn.btn-active-light-danger:hover:not(.btn-active) .svg-icon,
  .btn.btn-active-light-danger:active:not(.btn-active) i,
  .btn.btn-active-light-danger:active:not(.btn-active) .svg-icon,
  .btn.btn-active-light-danger.active i,
  .btn.btn-active-light-danger.active .svg-icon,
  .btn.btn-active-light-danger.show i,
  .btn.btn-active-light-danger.show .svg-icon,
  .show>.btn.btn-active-light-danger i,
  .show>.btn.btn-active-light-danger .svg-icon {
    color: var(--kt-danger);
  }

  .btn-check:checked+.btn.btn-active-light-danger.dropdown-toggle:after,
  .btn-check:active+.btn.btn-active-light-danger.dropdown-toggle:after,
  .btn.btn-active-light-danger:focus:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-light-danger:hover:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-light-danger:active:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-light-danger.active.dropdown-toggle:after,
  .btn.btn-active-light-danger.show.dropdown-toggle:after,
  .show>.btn.btn-active-light-danger.dropdown-toggle:after {
    color: var(--kt-danger);
  }

  .btn.btn-outline.btn-outline-danger {
    color: var(--kt-danger);
    border-color: var(--kt-danger);
    background-color: transparent;
  }

  .btn.btn-outline.btn-outline-danger i,
  .btn.btn-outline.btn-outline-danger .svg-icon {
    color: var(--kt-danger);
  }

  .btn.btn-outline.btn-outline-danger.dropdown-toggle:after {
    color: var(--kt-danger);
  }

  .btn-check:checked+.btn.btn-outline.btn-outline-danger,
  .btn-check:active+.btn.btn-outline.btn-outline-danger,
  .btn.btn-outline.btn-outline-danger:focus:not(.btn-active),
  .btn.btn-outline.btn-outline-danger:hover:not(.btn-active),
  .btn.btn-outline.btn-outline-danger:active:not(.btn-active),
  .btn.btn-outline.btn-outline-danger.active,
  .btn.btn-outline.btn-outline-danger.show,
  .show>.btn.btn-outline.btn-outline-danger {
    color: var(--kt-danger-active);
    border-color: var(--kt-danger);
    background-color: var(--kt-danger-light) !important;
  }

  .btn-check:checked+.btn.btn-outline.btn-outline-danger i,
  .btn-check:checked+.btn.btn-outline.btn-outline-danger .svg-icon,
  .btn-check:active+.btn.btn-outline.btn-outline-danger i,
  .btn-check:active+.btn.btn-outline.btn-outline-danger .svg-icon,
  .btn.btn-outline.btn-outline-danger:focus:not(.btn-active) i,
  .btn.btn-outline.btn-outline-danger:focus:not(.btn-active) .svg-icon,
  .btn.btn-outline.btn-outline-danger:hover:not(.btn-active) i,
  .btn.btn-outline.btn-outline-danger:hover:not(.btn-active) .svg-icon,
  .btn.btn-outline.btn-outline-danger:active:not(.btn-active) i,
  .btn.btn-outline.btn-outline-danger:active:not(.btn-active) .svg-icon,
  .btn.btn-outline.btn-outline-danger.active i,
  .btn.btn-outline.btn-outline-danger.active .svg-icon,
  .btn.btn-outline.btn-outline-danger.show i,
  .btn.btn-outline.btn-outline-danger.show .svg-icon,
  .show>.btn.btn-outline.btn-outline-danger i,
  .show>.btn.btn-outline.btn-outline-danger .svg-icon {
    color: var(--kt-danger-active);
  }

  .btn-check:checked+.btn.btn-outline.btn-outline-danger.dropdown-toggle:after,
  .btn-check:active+.btn.btn-outline.btn-outline-danger.dropdown-toggle:after,
  .btn.btn-outline.btn-outline-danger:focus:not(.btn-active).dropdown-toggle:after,
  .btn.btn-outline.btn-outline-danger:hover:not(.btn-active).dropdown-toggle:after,
  .btn.btn-outline.btn-outline-danger:active:not(.btn-active).dropdown-toggle:after,
  .btn.btn-outline.btn-outline-danger.active.dropdown-toggle:after,
  .btn.btn-outline.btn-outline-danger.show.dropdown-toggle:after,
  .show>.btn.btn-outline.btn-outline-danger.dropdown-toggle:after {
    color: var(--kt-danger-active);
  }

  .btn.btn-dark {
    color: var(--kt-dark-inverse);
    border-color: var(--kt-dark);
    background-color: var(--kt-dark);
  }

  .btn.btn-dark i,
  .btn.btn-dark .svg-icon {
    color: var(--kt-dark-inverse);
  }

  .btn.btn-dark.dropdown-toggle:after {
    color: var(--kt-dark-inverse);
  }

  .btn-check:checked+.btn.btn-dark,
  .btn-check:active+.btn.btn-dark,
  .btn.btn-dark:focus:not(.btn-active),
  .btn.btn-dark:hover:not(.btn-active),
  .btn.btn-dark:active:not(.btn-active),
  .btn.btn-dark.active,
  .btn.btn-dark.show,
  .show>.btn.btn-dark {
    color: var(--kt-dark-inverse);
    border-color: var(--kt-dark-active);
    background-color: var(--kt-dark-active) !important;
  }

  .btn-check:checked+.btn.btn-dark i,
  .btn-check:checked+.btn.btn-dark .svg-icon,
  .btn-check:active+.btn.btn-dark i,
  .btn-check:active+.btn.btn-dark .svg-icon,
  .btn.btn-dark:focus:not(.btn-active) i,
  .btn.btn-dark:focus:not(.btn-active) .svg-icon,
  .btn.btn-dark:hover:not(.btn-active) i,
  .btn.btn-dark:hover:not(.btn-active) .svg-icon,
  .btn.btn-dark:active:not(.btn-active) i,
  .btn.btn-dark:active:not(.btn-active) .svg-icon,
  .btn.btn-dark.active i,
  .btn.btn-dark.active .svg-icon,
  .btn.btn-dark.show i,
  .btn.btn-dark.show .svg-icon,
  .show>.btn.btn-dark i,
  .show>.btn.btn-dark .svg-icon {
    color: var(--kt-dark-inverse);
  }

  .btn-check:checked+.btn.btn-dark.dropdown-toggle:after,
  .btn-check:active+.btn.btn-dark.dropdown-toggle:after,
  .btn.btn-dark:focus:not(.btn-active).dropdown-toggle:after,
  .btn.btn-dark:hover:not(.btn-active).dropdown-toggle:after,
  .btn.btn-dark:active:not(.btn-active).dropdown-toggle:after,
  .btn.btn-dark.active.dropdown-toggle:after,
  .btn.btn-dark.show.dropdown-toggle:after,
  .show>.btn.btn-dark.dropdown-toggle:after {
    color: var(--kt-dark-inverse);
  }

  .btn.btn-light-dark {
    color: var(--kt-dark);
    border-color: var(--kt-dark-light);
    background-color: var(--kt-dark-light);
  }

  .btn.btn-light-dark i,
  .btn.btn-light-dark .svg-icon {
    color: var(--kt-dark);
  }

  .btn.btn-light-dark.dropdown-toggle:after {
    color: var(--kt-dark);
  }

  .btn-check:checked+.btn.btn-light-dark,
  .btn-check:active+.btn.btn-light-dark,
  .btn.btn-light-dark:focus:not(.btn-active),
  .btn.btn-light-dark:hover:not(.btn-active),
  .btn.btn-light-dark:active:not(.btn-active),
  .btn.btn-light-dark.active,
  .btn.btn-light-dark.show,
  .show>.btn.btn-light-dark {
    color: var(--kt-dark-inverse);
    border-color: var(--kt-dark);
    background-color: var(--kt-dark) !important;
  }

  .btn-check:checked+.btn.btn-light-dark i,
  .btn-check:checked+.btn.btn-light-dark .svg-icon,
  .btn-check:active+.btn.btn-light-dark i,
  .btn-check:active+.btn.btn-light-dark .svg-icon,
  .btn.btn-light-dark:focus:not(.btn-active) i,
  .btn.btn-light-dark:focus:not(.btn-active) .svg-icon,
  .btn.btn-light-dark:hover:not(.btn-active) i,
  .btn.btn-light-dark:hover:not(.btn-active) .svg-icon,
  .btn.btn-light-dark:active:not(.btn-active) i,
  .btn.btn-light-dark:active:not(.btn-active) .svg-icon,
  .btn.btn-light-dark.active i,
  .btn.btn-light-dark.active .svg-icon,
  .btn.btn-light-dark.show i,
  .btn.btn-light-dark.show .svg-icon,
  .show>.btn.btn-light-dark i,
  .show>.btn.btn-light-dark .svg-icon {
    color: var(--kt-dark-inverse);
  }

  .btn-check:checked+.btn.btn-light-dark.dropdown-toggle:after,
  .btn-check:active+.btn.btn-light-dark.dropdown-toggle:after,
  .btn.btn-light-dark:focus:not(.btn-active).dropdown-toggle:after,
  .btn.btn-light-dark:hover:not(.btn-active).dropdown-toggle:after,
  .btn.btn-light-dark:active:not(.btn-active).dropdown-toggle:after,
  .btn.btn-light-dark.active.dropdown-toggle:after,
  .btn.btn-light-dark.show.dropdown-toggle:after,
  .show>.btn.btn-light-dark.dropdown-toggle:after {
    color: var(--kt-dark-inverse);
  }

  .btn.btn-bg-dark {
    border-color: var(--kt-dark);
    background-color: var(--kt-dark);
  }

  .btn-check:checked+.btn.btn-active-dark,
  .btn-check:active+.btn.btn-active-dark,
  .btn.btn-active-dark:focus:not(.btn-active),
  .btn.btn-active-dark:hover:not(.btn-active),
  .btn.btn-active-dark:active:not(.btn-active),
  .btn.btn-active-dark.active,
  .btn.btn-active-dark.show,
  .show>.btn.btn-active-dark {
    color: var(--kt-dark-inverse);
    border-color: var(--kt-dark);
    background-color: var(--kt-dark) !important;
  }

  .btn-check:checked+.btn.btn-active-dark i,
  .btn-check:checked+.btn.btn-active-dark .svg-icon,
  .btn-check:active+.btn.btn-active-dark i,
  .btn-check:active+.btn.btn-active-dark .svg-icon,
  .btn.btn-active-dark:focus:not(.btn-active) i,
  .btn.btn-active-dark:focus:not(.btn-active) .svg-icon,
  .btn.btn-active-dark:hover:not(.btn-active) i,
  .btn.btn-active-dark:hover:not(.btn-active) .svg-icon,
  .btn.btn-active-dark:active:not(.btn-active) i,
  .btn.btn-active-dark:active:not(.btn-active) .svg-icon,
  .btn.btn-active-dark.active i,
  .btn.btn-active-dark.active .svg-icon,
  .btn.btn-active-dark.show i,
  .btn.btn-active-dark.show .svg-icon,
  .show>.btn.btn-active-dark i,
  .show>.btn.btn-active-dark .svg-icon {
    color: var(--kt-dark-inverse);
  }

  .btn-check:checked+.btn.btn-active-dark.dropdown-toggle:after,
  .btn-check:active+.btn.btn-active-dark.dropdown-toggle:after,
  .btn.btn-active-dark:focus:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-dark:hover:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-dark:active:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-dark.active.dropdown-toggle:after,
  .btn.btn-active-dark.show.dropdown-toggle:after,
  .show>.btn.btn-active-dark.dropdown-toggle:after {
    color: var(--kt-dark-inverse);
  }

  .btn-check:checked+.btn.btn-active-light-dark,
  .btn-check:active+.btn.btn-active-light-dark,
  .btn.btn-active-light-dark:focus:not(.btn-active),
  .btn.btn-active-light-dark:hover:not(.btn-active),
  .btn.btn-active-light-dark:active:not(.btn-active),
  .btn.btn-active-light-dark.active,
  .btn.btn-active-light-dark.show,
  .show>.btn.btn-active-light-dark {
    color: var(--kt-dark);
    border-color: var(--kt-dark-light);
    background-color: var(--kt-dark-light) !important;
  }

  .btn-check:checked+.btn.btn-active-light-dark i,
  .btn-check:checked+.btn.btn-active-light-dark .svg-icon,
  .btn-check:active+.btn.btn-active-light-dark i,
  .btn-check:active+.btn.btn-active-light-dark .svg-icon,
  .btn.btn-active-light-dark:focus:not(.btn-active) i,
  .btn.btn-active-light-dark:focus:not(.btn-active) .svg-icon,
  .btn.btn-active-light-dark:hover:not(.btn-active) i,
  .btn.btn-active-light-dark:hover:not(.btn-active) .svg-icon,
  .btn.btn-active-light-dark:active:not(.btn-active) i,
  .btn.btn-active-light-dark:active:not(.btn-active) .svg-icon,
  .btn.btn-active-light-dark.active i,
  .btn.btn-active-light-dark.active .svg-icon,
  .btn.btn-active-light-dark.show i,
  .btn.btn-active-light-dark.show .svg-icon,
  .show>.btn.btn-active-light-dark i,
  .show>.btn.btn-active-light-dark .svg-icon {
    color: var(--kt-dark);
  }

  .btn-check:checked+.btn.btn-active-light-dark.dropdown-toggle:after,
  .btn-check:active+.btn.btn-active-light-dark.dropdown-toggle:after,
  .btn.btn-active-light-dark:focus:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-light-dark:hover:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-light-dark:active:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-light-dark.active.dropdown-toggle:after,
  .btn.btn-active-light-dark.show.dropdown-toggle:after,
  .show>.btn.btn-active-light-dark.dropdown-toggle:after {
    color: var(--kt-dark);
  }

  .btn.btn-outline.btn-outline-dark {
    color: var(--kt-dark);
    border-color: var(--kt-dark);
    background-color: transparent;
  }

  .btn.btn-outline.btn-outline-dark i,
  .btn.btn-outline.btn-outline-dark .svg-icon {
    color: var(--kt-dark);
  }

  .btn.btn-outline.btn-outline-dark.dropdown-toggle:after {
    color: var(--kt-dark);
  }

  .btn-check:checked+.btn.btn-outline.btn-outline-dark,
  .btn-check:active+.btn.btn-outline.btn-outline-dark,
  .btn.btn-outline.btn-outline-dark:focus:not(.btn-active),
  .btn.btn-outline.btn-outline-dark:hover:not(.btn-active),
  .btn.btn-outline.btn-outline-dark:active:not(.btn-active),
  .btn.btn-outline.btn-outline-dark.active,
  .btn.btn-outline.btn-outline-dark.show,
  .show>.btn.btn-outline.btn-outline-dark {
    color: var(--kt-dark-active);
    border-color: var(--kt-dark);
    background-color: var(--kt-dark-light) !important;
  }

  .btn-check:checked+.btn.btn-outline.btn-outline-dark i,
  .btn-check:checked+.btn.btn-outline.btn-outline-dark .svg-icon,
  .btn-check:active+.btn.btn-outline.btn-outline-dark i,
  .btn-check:active+.btn.btn-outline.btn-outline-dark .svg-icon,
  .btn.btn-outline.btn-outline-dark:focus:not(.btn-active) i,
  .btn.btn-outline.btn-outline-dark:focus:not(.btn-active) .svg-icon,
  .btn.btn-outline.btn-outline-dark:hover:not(.btn-active) i,
  .btn.btn-outline.btn-outline-dark:hover:not(.btn-active) .svg-icon,
  .btn.btn-outline.btn-outline-dark:active:not(.btn-active) i,
  .btn.btn-outline.btn-outline-dark:active:not(.btn-active) .svg-icon,
  .btn.btn-outline.btn-outline-dark.active i,
  .btn.btn-outline.btn-outline-dark.active .svg-icon,
  .btn.btn-outline.btn-outline-dark.show i,
  .btn.btn-outline.btn-outline-dark.show .svg-icon,
  .show>.btn.btn-outline.btn-outline-dark i,
  .show>.btn.btn-outline.btn-outline-dark .svg-icon {
    color: var(--kt-dark-active);
  }

  .btn-check:checked+.btn.btn-outline.btn-outline-dark.dropdown-toggle:after,
  .btn-check:active+.btn.btn-outline.btn-outline-dark.dropdown-toggle:after,
  .btn.btn-outline.btn-outline-dark:focus:not(.btn-active).dropdown-toggle:after,
  .btn.btn-outline.btn-outline-dark:hover:not(.btn-active).dropdown-toggle:after,
  .btn.btn-outline.btn-outline-dark:active:not(.btn-active).dropdown-toggle:after,
  .btn.btn-outline.btn-outline-dark.active.dropdown-toggle:after,
  .btn.btn-outline.btn-outline-dark.show.dropdown-toggle:after,
  .show>.btn.btn-outline.btn-outline-dark.dropdown-toggle:after {
    color: var(--kt-dark-active);
  }

  .btn.btn-color-white {
    color: var(--kt-text-white);
  }

  .btn.btn-color-white i,
  .btn.btn-color-white .svg-icon {
    color: var(--kt-text-white);
  }

  .btn.btn-color-white.dropdown-toggle:after {
    color: var(--kt-text-white);
  }

  .btn-check:checked+.btn.btn-active-color-white,
  .btn-check:active+.btn.btn-active-color-white,
  .btn.btn-active-color-white:focus:not(.btn-active),
  .btn.btn-active-color-white:hover:not(.btn-active),
  .btn.btn-active-color-white:active:not(.btn-active),
  .btn.btn-active-color-white.active,
  .btn.btn-active-color-white.show,
  .show>.btn.btn-active-color-white {
    color: var(--kt-text-white);
  }

  .btn-check:checked+.btn.btn-active-color-white i,
  .btn-check:checked+.btn.btn-active-color-white .svg-icon,
  .btn-check:active+.btn.btn-active-color-white i,
  .btn-check:active+.btn.btn-active-color-white .svg-icon,
  .btn.btn-active-color-white:focus:not(.btn-active) i,
  .btn.btn-active-color-white:focus:not(.btn-active) .svg-icon,
  .btn.btn-active-color-white:hover:not(.btn-active) i,
  .btn.btn-active-color-white:hover:not(.btn-active) .svg-icon,
  .btn.btn-active-color-white:active:not(.btn-active) i,
  .btn.btn-active-color-white:active:not(.btn-active) .svg-icon,
  .btn.btn-active-color-white.active i,
  .btn.btn-active-color-white.active .svg-icon,
  .btn.btn-active-color-white.show i,
  .btn.btn-active-color-white.show .svg-icon,
  .show>.btn.btn-active-color-white i,
  .show>.btn.btn-active-color-white .svg-icon {
    color: var(--kt-text-white);
  }

  .btn-check:checked+.btn.btn-active-color-white.dropdown-toggle:after,
  .btn-check:active+.btn.btn-active-color-white.dropdown-toggle:after,
  .btn.btn-active-color-white:focus:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-color-white:hover:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-color-white:active:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-color-white.active.dropdown-toggle:after,
  .btn.btn-active-color-white.show.dropdown-toggle:after,
  .show>.btn.btn-active-color-white.dropdown-toggle:after {
    color: var(--kt-text-white);
  }

  .btn.btn-icon-white i,
  .btn.btn-icon-white .svg-icon {
    color: var(--kt-text-white);
  }

  .btn.btn-icon-white.dropdown-toggle:after {
    color: var(--kt-text-white);
  }

  .btn-check:checked+.btn.btn-active-icon-white i,
  .btn-check:checked+.btn.btn-active-icon-white .svg-icon,
  .btn-check:active+.btn.btn-active-icon-white i,
  .btn-check:active+.btn.btn-active-icon-white .svg-icon,
  .btn.btn-active-icon-white:focus:not(.btn-active) i,
  .btn.btn-active-icon-white:focus:not(.btn-active) .svg-icon,
  .btn.btn-active-icon-white:hover:not(.btn-active) i,
  .btn.btn-active-icon-white:hover:not(.btn-active) .svg-icon,
  .btn.btn-active-icon-white:active:not(.btn-active) i,
  .btn.btn-active-icon-white:active:not(.btn-active) .svg-icon,
  .btn.btn-active-icon-white.active i,
  .btn.btn-active-icon-white.active .svg-icon,
  .btn.btn-active-icon-white.show i,
  .btn.btn-active-icon-white.show .svg-icon,
  .show>.btn.btn-active-icon-white i,
  .show>.btn.btn-active-icon-white .svg-icon {
    color: var(--kt-text-white);
  }

  .btn-check:checked+.btn.btn-active-icon-white.dropdown-toggle:after,
  .btn-check:active+.btn.btn-active-icon-white.dropdown-toggle:after,
  .btn.btn-active-icon-white:focus:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-icon-white:hover:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-icon-white:active:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-icon-white.active.dropdown-toggle:after,
  .btn.btn-active-icon-white.show.dropdown-toggle:after,
  .show>.btn.btn-active-icon-white.dropdown-toggle:after {
    color: var(--kt-text-white);
  }

  .btn.btn-text-white {
    color: var(--kt-text-white);
  }

  .btn-check:checked+.btn.btn-active-text-white,
  .btn-check:active+.btn.btn-active-text-white,
  .btn.btn-active-text-white:focus:not(.btn-active),
  .btn.btn-active-text-white:hover:not(.btn-active),
  .btn.btn-active-text-white:active:not(.btn-active),
  .btn.btn-active-text-white.active,
  .btn.btn-active-text-white.show,
  .show>.btn.btn-active-text-white {
    color: var(--kt-text-white);
  }

  .btn.btn-color-primary {
    color: var(--kt-text-primary);
  }

  .btn.btn-color-primary i,
  .btn.btn-color-primary .svg-icon {
    color: var(--kt-text-primary);
  }

  .btn.btn-color-primary.dropdown-toggle:after {
    color: var(--kt-text-primary);
  }

  .btn-check:checked+.btn.btn-active-color-primary,
  .btn-check:active+.btn.btn-active-color-primary,
  .btn.btn-active-color-primary:focus:not(.btn-active),
  .btn.btn-active-color-primary:hover:not(.btn-active),
  .btn.btn-active-color-primary:active:not(.btn-active),
  .btn.btn-active-color-primary.active,
  .btn.btn-active-color-primary.show,
  .show>.btn.btn-active-color-primary {
    color: var(--kt-text-primary);
  }

  .btn-check:checked+.btn.btn-active-color-primary i,
  .btn-check:checked+.btn.btn-active-color-primary .svg-icon,
  .btn-check:active+.btn.btn-active-color-primary i,
  .btn-check:active+.btn.btn-active-color-primary .svg-icon,
  .btn.btn-active-color-primary:focus:not(.btn-active) i,
  .btn.btn-active-color-primary:focus:not(.btn-active) .svg-icon,
  .btn.btn-active-color-primary:hover:not(.btn-active) i,
  .btn.btn-active-color-primary:hover:not(.btn-active) .svg-icon,
  .btn.btn-active-color-primary:active:not(.btn-active) i,
  .btn.btn-active-color-primary:active:not(.btn-active) .svg-icon,
  .btn.btn-active-color-primary.active i,
  .btn.btn-active-color-primary.active .svg-icon,
  .btn.btn-active-color-primary.show i,
  .btn.btn-active-color-primary.show .svg-icon,
  .show>.btn.btn-active-color-primary i,
  .show>.btn.btn-active-color-primary .svg-icon {
    color: var(--kt-text-primary);
  }

  .btn-check:checked+.btn.btn-active-color-primary.dropdown-toggle:after,
  .btn-check:active+.btn.btn-active-color-primary.dropdown-toggle:after,
  .btn.btn-active-color-primary:focus:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-color-primary:hover:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-color-primary:active:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-color-primary.active.dropdown-toggle:after,
  .btn.btn-active-color-primary.show.dropdown-toggle:after,
  .show>.btn.btn-active-color-primary.dropdown-toggle:after {
    color: var(--kt-text-primary);
  }

  .btn.btn-icon-primary i,
  .btn.btn-icon-primary .svg-icon {
    color: var(--kt-text-primary);
  }

  .btn.btn-icon-primary.dropdown-toggle:after {
    color: var(--kt-text-primary);
  }

  .btn-check:checked+.btn.btn-active-icon-primary i,
  .btn-check:checked+.btn.btn-active-icon-primary .svg-icon,
  .btn-check:active+.btn.btn-active-icon-primary i,
  .btn-check:active+.btn.btn-active-icon-primary .svg-icon,
  .btn.btn-active-icon-primary:focus:not(.btn-active) i,
  .btn.btn-active-icon-primary:focus:not(.btn-active) .svg-icon,
  .btn.btn-active-icon-primary:hover:not(.btn-active) i,
  .btn.btn-active-icon-primary:hover:not(.btn-active) .svg-icon,
  .btn.btn-active-icon-primary:active:not(.btn-active) i,
  .btn.btn-active-icon-primary:active:not(.btn-active) .svg-icon,
  .btn.btn-active-icon-primary.active i,
  .btn.btn-active-icon-primary.active .svg-icon,
  .btn.btn-active-icon-primary.show i,
  .btn.btn-active-icon-primary.show .svg-icon,
  .show>.btn.btn-active-icon-primary i,
  .show>.btn.btn-active-icon-primary .svg-icon {
    color: var(--kt-text-primary);
  }

  .btn-check:checked+.btn.btn-active-icon-primary.dropdown-toggle:after,
  .btn-check:active+.btn.btn-active-icon-primary.dropdown-toggle:after,
  .btn.btn-active-icon-primary:focus:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-icon-primary:hover:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-icon-primary:active:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-icon-primary.active.dropdown-toggle:after,
  .btn.btn-active-icon-primary.show.dropdown-toggle:after,
  .show>.btn.btn-active-icon-primary.dropdown-toggle:after {
    color: var(--kt-text-primary);
  }

  .btn.btn-text-primary {
    color: var(--kt-text-primary);
  }

  .btn-check:checked+.btn.btn-active-text-primary,
  .btn-check:active+.btn.btn-active-text-primary,
  .btn.btn-active-text-primary:focus:not(.btn-active),
  .btn.btn-active-text-primary:hover:not(.btn-active),
  .btn.btn-active-text-primary:active:not(.btn-active),
  .btn.btn-active-text-primary.active,
  .btn.btn-active-text-primary.show,
  .show>.btn.btn-active-text-primary {
    color: var(--kt-text-primary);
  }

  .btn.btn-color-secondary {
    color: var(--kt-text-secondary);
  }

  .btn.btn-color-secondary i,
  .btn.btn-color-secondary .svg-icon {
    color: var(--kt-text-secondary);
  }

  .btn.btn-color-secondary.dropdown-toggle:after {
    color: var(--kt-text-secondary);
  }

  .btn-check:checked+.btn.btn-active-color-secondary,
  .btn-check:active+.btn.btn-active-color-secondary,
  .btn.btn-active-color-secondary:focus:not(.btn-active),
  .btn.btn-active-color-secondary:hover:not(.btn-active),
  .btn.btn-active-color-secondary:active:not(.btn-active),
  .btn.btn-active-color-secondary.active,
  .btn.btn-active-color-secondary.show,
  .show>.btn.btn-active-color-secondary {
    color: var(--kt-text-secondary);
  }

  .btn-check:checked+.btn.btn-active-color-secondary i,
  .btn-check:checked+.btn.btn-active-color-secondary .svg-icon,
  .btn-check:active+.btn.btn-active-color-secondary i,
  .btn-check:active+.btn.btn-active-color-secondary .svg-icon,
  .btn.btn-active-color-secondary:focus:not(.btn-active) i,
  .btn.btn-active-color-secondary:focus:not(.btn-active) .svg-icon,
  .btn.btn-active-color-secondary:hover:not(.btn-active) i,
  .btn.btn-active-color-secondary:hover:not(.btn-active) .svg-icon,
  .btn.btn-active-color-secondary:active:not(.btn-active) i,
  .btn.btn-active-color-secondary:active:not(.btn-active) .svg-icon,
  .btn.btn-active-color-secondary.active i,
  .btn.btn-active-color-secondary.active .svg-icon,
  .btn.btn-active-color-secondary.show i,
  .btn.btn-active-color-secondary.show .svg-icon,
  .show>.btn.btn-active-color-secondary i,
  .show>.btn.btn-active-color-secondary .svg-icon {
    color: var(--kt-text-secondary);
  }

  .btn-check:checked+.btn.btn-active-color-secondary.dropdown-toggle:after,
  .btn-check:active+.btn.btn-active-color-secondary.dropdown-toggle:after,
  .btn.btn-active-color-secondary:focus:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-color-secondary:hover:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-color-secondary:active:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-color-secondary.active.dropdown-toggle:after,
  .btn.btn-active-color-secondary.show.dropdown-toggle:after,
  .show>.btn.btn-active-color-secondary.dropdown-toggle:after {
    color: var(--kt-text-secondary);
  }

  .btn.btn-icon-secondary i,
  .btn.btn-icon-secondary .svg-icon {
    color: var(--kt-text-secondary);
  }

  .btn.btn-icon-secondary.dropdown-toggle:after {
    color: var(--kt-text-secondary);
  }

  .btn-check:checked+.btn.btn-active-icon-secondary i,
  .btn-check:checked+.btn.btn-active-icon-secondary .svg-icon,
  .btn-check:active+.btn.btn-active-icon-secondary i,
  .btn-check:active+.btn.btn-active-icon-secondary .svg-icon,
  .btn.btn-active-icon-secondary:focus:not(.btn-active) i,
  .btn.btn-active-icon-secondary:focus:not(.btn-active) .svg-icon,
  .btn.btn-active-icon-secondary:hover:not(.btn-active) i,
  .btn.btn-active-icon-secondary:hover:not(.btn-active) .svg-icon,
  .btn.btn-active-icon-secondary:active:not(.btn-active) i,
  .btn.btn-active-icon-secondary:active:not(.btn-active) .svg-icon,
  .btn.btn-active-icon-secondary.active i,
  .btn.btn-active-icon-secondary.active .svg-icon,
  .btn.btn-active-icon-secondary.show i,
  .btn.btn-active-icon-secondary.show .svg-icon,
  .show>.btn.btn-active-icon-secondary i,
  .show>.btn.btn-active-icon-secondary .svg-icon {
    color: var(--kt-text-secondary);
  }

  .btn-check:checked+.btn.btn-active-icon-secondary.dropdown-toggle:after,
  .btn-check:active+.btn.btn-active-icon-secondary.dropdown-toggle:after,
  .btn.btn-active-icon-secondary:focus:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-icon-secondary:hover:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-icon-secondary:active:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-icon-secondary.active.dropdown-toggle:after,
  .btn.btn-active-icon-secondary.show.dropdown-toggle:after,
  .show>.btn.btn-active-icon-secondary.dropdown-toggle:after {
    color: var(--kt-text-secondary);
  }

  .btn.btn-text-secondary {
    color: var(--kt-text-secondary);
  }

  .btn-check:checked+.btn.btn-active-text-secondary,
  .btn-check:active+.btn.btn-active-text-secondary,
  .btn.btn-active-text-secondary:focus:not(.btn-active),
  .btn.btn-active-text-secondary:hover:not(.btn-active),
  .btn.btn-active-text-secondary:active:not(.btn-active),
  .btn.btn-active-text-secondary.active,
  .btn.btn-active-text-secondary.show,
  .show>.btn.btn-active-text-secondary {
    color: var(--kt-text-secondary);
  }

  .btn.btn-color-light {
    color: var(--kt-text-light);
  }

  .btn.btn-color-light i,
  .btn.btn-color-light .svg-icon {
    color: var(--kt-text-light);
  }

  .btn.btn-color-light.dropdown-toggle:after {
    color: var(--kt-text-light);
  }

  .btn-check:checked+.btn.btn-active-color-light,
  .btn-check:active+.btn.btn-active-color-light,
  .btn.btn-active-color-light:focus:not(.btn-active),
  .btn.btn-active-color-light:hover:not(.btn-active),
  .btn.btn-active-color-light:active:not(.btn-active),
  .btn.btn-active-color-light.active,
  .btn.btn-active-color-light.show,
  .show>.btn.btn-active-color-light {
    color: var(--kt-text-light);
  }

  .btn-check:checked+.btn.btn-active-color-light i,
  .btn-check:checked+.btn.btn-active-color-light .svg-icon,
  .btn-check:active+.btn.btn-active-color-light i,
  .btn-check:active+.btn.btn-active-color-light .svg-icon,
  .btn.btn-active-color-light:focus:not(.btn-active) i,
  .btn.btn-active-color-light:focus:not(.btn-active) .svg-icon,
  .btn.btn-active-color-light:hover:not(.btn-active) i,
  .btn.btn-active-color-light:hover:not(.btn-active) .svg-icon,
  .btn.btn-active-color-light:active:not(.btn-active) i,
  .btn.btn-active-color-light:active:not(.btn-active) .svg-icon,
  .btn.btn-active-color-light.active i,
  .btn.btn-active-color-light.active .svg-icon,
  .btn.btn-active-color-light.show i,
  .btn.btn-active-color-light.show .svg-icon,
  .show>.btn.btn-active-color-light i,
  .show>.btn.btn-active-color-light .svg-icon {
    color: var(--kt-text-light);
  }

  .btn-check:checked+.btn.btn-active-color-light.dropdown-toggle:after,
  .btn-check:active+.btn.btn-active-color-light.dropdown-toggle:after,
  .btn.btn-active-color-light:focus:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-color-light:hover:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-color-light:active:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-color-light.active.dropdown-toggle:after,
  .btn.btn-active-color-light.show.dropdown-toggle:after,
  .show>.btn.btn-active-color-light.dropdown-toggle:after {
    color: var(--kt-text-light);
  }

  .btn.btn-icon-light i,
  .btn.btn-icon-light .svg-icon {
    color: var(--kt-text-light);
  }

  .btn.btn-icon-light.dropdown-toggle:after {
    color: var(--kt-text-light);
  }

  .btn-check:checked+.btn.btn-active-icon-light i,
  .btn-check:checked+.btn.btn-active-icon-light .svg-icon,
  .btn-check:active+.btn.btn-active-icon-light i,
  .btn-check:active+.btn.btn-active-icon-light .svg-icon,
  .btn.btn-active-icon-light:focus:not(.btn-active) i,
  .btn.btn-active-icon-light:focus:not(.btn-active) .svg-icon,
  .btn.btn-active-icon-light:hover:not(.btn-active) i,
  .btn.btn-active-icon-light:hover:not(.btn-active) .svg-icon,
  .btn.btn-active-icon-light:active:not(.btn-active) i,
  .btn.btn-active-icon-light:active:not(.btn-active) .svg-icon,
  .btn.btn-active-icon-light.active i,
  .btn.btn-active-icon-light.active .svg-icon,
  .btn.btn-active-icon-light.show i,
  .btn.btn-active-icon-light.show .svg-icon,
  .show>.btn.btn-active-icon-light i,
  .show>.btn.btn-active-icon-light .svg-icon {
    color: var(--kt-text-light);
  }

  .btn-check:checked+.btn.btn-active-icon-light.dropdown-toggle:after,
  .btn-check:active+.btn.btn-active-icon-light.dropdown-toggle:after,
  .btn.btn-active-icon-light:focus:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-icon-light:hover:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-icon-light:active:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-icon-light.active.dropdown-toggle:after,
  .btn.btn-active-icon-light.show.dropdown-toggle:after,
  .show>.btn.btn-active-icon-light.dropdown-toggle:after {
    color: var(--kt-text-light);
  }

  .btn.btn-text-light {
    color: var(--kt-text-light);
  }

  .btn-check:checked+.btn.btn-active-text-light,
  .btn-check:active+.btn.btn-active-text-light,
  .btn.btn-active-text-light:focus:not(.btn-active),
  .btn.btn-active-text-light:hover:not(.btn-active),
  .btn.btn-active-text-light:active:not(.btn-active),
  .btn.btn-active-text-light.active,
  .btn.btn-active-text-light.show,
  .show>.btn.btn-active-text-light {
    color: var(--kt-text-light);
  }

  .btn.btn-color-success {
    color: var(--kt-text-success);
  }

  .btn.btn-color-success i,
  .btn.btn-color-success .svg-icon {
    color: var(--kt-text-success);
  }

  .btn.btn-color-success.dropdown-toggle:after {
    color: var(--kt-text-success);
  }

  .btn-check:checked+.btn.btn-active-color-success,
  .btn-check:active+.btn.btn-active-color-success,
  .btn.btn-active-color-success:focus:not(.btn-active),
  .btn.btn-active-color-success:hover:not(.btn-active),
  .btn.btn-active-color-success:active:not(.btn-active),
  .btn.btn-active-color-success.active,
  .btn.btn-active-color-success.show,
  .show>.btn.btn-active-color-success {
    color: var(--kt-text-success);
  }

  .btn-check:checked+.btn.btn-active-color-success i,
  .btn-check:checked+.btn.btn-active-color-success .svg-icon,
  .btn-check:active+.btn.btn-active-color-success i,
  .btn-check:active+.btn.btn-active-color-success .svg-icon,
  .btn.btn-active-color-success:focus:not(.btn-active) i,
  .btn.btn-active-color-success:focus:not(.btn-active) .svg-icon,
  .btn.btn-active-color-success:hover:not(.btn-active) i,
  .btn.btn-active-color-success:hover:not(.btn-active) .svg-icon,
  .btn.btn-active-color-success:active:not(.btn-active) i,
  .btn.btn-active-color-success:active:not(.btn-active) .svg-icon,
  .btn.btn-active-color-success.active i,
  .btn.btn-active-color-success.active .svg-icon,
  .btn.btn-active-color-success.show i,
  .btn.btn-active-color-success.show .svg-icon,
  .show>.btn.btn-active-color-success i,
  .show>.btn.btn-active-color-success .svg-icon {
    color: var(--kt-text-success);
  }

  .btn-check:checked+.btn.btn-active-color-success.dropdown-toggle:after,
  .btn-check:active+.btn.btn-active-color-success.dropdown-toggle:after,
  .btn.btn-active-color-success:focus:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-color-success:hover:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-color-success:active:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-color-success.active.dropdown-toggle:after,
  .btn.btn-active-color-success.show.dropdown-toggle:after,
  .show>.btn.btn-active-color-success.dropdown-toggle:after {
    color: var(--kt-text-success);
  }

  .btn.btn-icon-success i,
  .btn.btn-icon-success .svg-icon {
    color: var(--kt-text-success);
  }

  .btn.btn-icon-success.dropdown-toggle:after {
    color: var(--kt-text-success);
  }

  .btn-check:checked+.btn.btn-active-icon-success i,
  .btn-check:checked+.btn.btn-active-icon-success .svg-icon,
  .btn-check:active+.btn.btn-active-icon-success i,
  .btn-check:active+.btn.btn-active-icon-success .svg-icon,
  .btn.btn-active-icon-success:focus:not(.btn-active) i,
  .btn.btn-active-icon-success:focus:not(.btn-active) .svg-icon,
  .btn.btn-active-icon-success:hover:not(.btn-active) i,
  .btn.btn-active-icon-success:hover:not(.btn-active) .svg-icon,
  .btn.btn-active-icon-success:active:not(.btn-active) i,
  .btn.btn-active-icon-success:active:not(.btn-active) .svg-icon,
  .btn.btn-active-icon-success.active i,
  .btn.btn-active-icon-success.active .svg-icon,
  .btn.btn-active-icon-success.show i,
  .btn.btn-active-icon-success.show .svg-icon,
  .show>.btn.btn-active-icon-success i,
  .show>.btn.btn-active-icon-success .svg-icon {
    color: var(--kt-text-success);
  }

  .btn-check:checked+.btn.btn-active-icon-success.dropdown-toggle:after,
  .btn-check:active+.btn.btn-active-icon-success.dropdown-toggle:after,
  .btn.btn-active-icon-success:focus:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-icon-success:hover:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-icon-success:active:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-icon-success.active.dropdown-toggle:after,
  .btn.btn-active-icon-success.show.dropdown-toggle:after,
  .show>.btn.btn-active-icon-success.dropdown-toggle:after {
    color: var(--kt-text-success);
  }

  .btn.btn-text-success {
    color: var(--kt-text-success);
  }

  .btn-check:checked+.btn.btn-active-text-success,
  .btn-check:active+.btn.btn-active-text-success,
  .btn.btn-active-text-success:focus:not(.btn-active),
  .btn.btn-active-text-success:hover:not(.btn-active),
  .btn.btn-active-text-success:active:not(.btn-active),
  .btn.btn-active-text-success.active,
  .btn.btn-active-text-success.show,
  .show>.btn.btn-active-text-success {
    color: var(--kt-text-success);
  }

  .btn.btn-color-info {
    color: var(--kt-text-info);
  }

  .btn.btn-color-info i,
  .btn.btn-color-info .svg-icon {
    color: var(--kt-text-info);
  }

  .btn.btn-color-info.dropdown-toggle:after {
    color: var(--kt-text-info);
  }

  .btn-check:checked+.btn.btn-active-color-info,
  .btn-check:active+.btn.btn-active-color-info,
  .btn.btn-active-color-info:focus:not(.btn-active),
  .btn.btn-active-color-info:hover:not(.btn-active),
  .btn.btn-active-color-info:active:not(.btn-active),
  .btn.btn-active-color-info.active,
  .btn.btn-active-color-info.show,
  .show>.btn.btn-active-color-info {
    color: var(--kt-text-info);
  }

  .btn-check:checked+.btn.btn-active-color-info i,
  .btn-check:checked+.btn.btn-active-color-info .svg-icon,
  .btn-check:active+.btn.btn-active-color-info i,
  .btn-check:active+.btn.btn-active-color-info .svg-icon,
  .btn.btn-active-color-info:focus:not(.btn-active) i,
  .btn.btn-active-color-info:focus:not(.btn-active) .svg-icon,
  .btn.btn-active-color-info:hover:not(.btn-active) i,
  .btn.btn-active-color-info:hover:not(.btn-active) .svg-icon,
  .btn.btn-active-color-info:active:not(.btn-active) i,
  .btn.btn-active-color-info:active:not(.btn-active) .svg-icon,
  .btn.btn-active-color-info.active i,
  .btn.btn-active-color-info.active .svg-icon,
  .btn.btn-active-color-info.show i,
  .btn.btn-active-color-info.show .svg-icon,
  .show>.btn.btn-active-color-info i,
  .show>.btn.btn-active-color-info .svg-icon {
    color: var(--kt-text-info);
  }

  .btn-check:checked+.btn.btn-active-color-info.dropdown-toggle:after,
  .btn-check:active+.btn.btn-active-color-info.dropdown-toggle:after,
  .btn.btn-active-color-info:focus:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-color-info:hover:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-color-info:active:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-color-info.active.dropdown-toggle:after,
  .btn.btn-active-color-info.show.dropdown-toggle:after,
  .show>.btn.btn-active-color-info.dropdown-toggle:after {
    color: var(--kt-text-info);
  }

  .btn.btn-icon-info i,
  .btn.btn-icon-info .svg-icon {
    color: var(--kt-text-info);
  }

  .btn.btn-icon-info.dropdown-toggle:after {
    color: var(--kt-text-info);
  }

  .btn-check:checked+.btn.btn-active-icon-info i,
  .btn-check:checked+.btn.btn-active-icon-info .svg-icon,
  .btn-check:active+.btn.btn-active-icon-info i,
  .btn-check:active+.btn.btn-active-icon-info .svg-icon,
  .btn.btn-active-icon-info:focus:not(.btn-active) i,
  .btn.btn-active-icon-info:focus:not(.btn-active) .svg-icon,
  .btn.btn-active-icon-info:hover:not(.btn-active) i,
  .btn.btn-active-icon-info:hover:not(.btn-active) .svg-icon,
  .btn.btn-active-icon-info:active:not(.btn-active) i,
  .btn.btn-active-icon-info:active:not(.btn-active) .svg-icon,
  .btn.btn-active-icon-info.active i,
  .btn.btn-active-icon-info.active .svg-icon,
  .btn.btn-active-icon-info.show i,
  .btn.btn-active-icon-info.show .svg-icon,
  .show>.btn.btn-active-icon-info i,
  .show>.btn.btn-active-icon-info .svg-icon {
    color: var(--kt-text-info);
  }

  .btn-check:checked+.btn.btn-active-icon-info.dropdown-toggle:after,
  .btn-check:active+.btn.btn-active-icon-info.dropdown-toggle:after,
  .btn.btn-active-icon-info:focus:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-icon-info:hover:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-icon-info:active:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-icon-info.active.dropdown-toggle:after,
  .btn.btn-active-icon-info.show.dropdown-toggle:after,
  .show>.btn.btn-active-icon-info.dropdown-toggle:after {
    color: var(--kt-text-info);
  }

  .btn.btn-text-info {
    color: var(--kt-text-info);
  }

  .btn-check:checked+.btn.btn-active-text-info,
  .btn-check:active+.btn.btn-active-text-info,
  .btn.btn-active-text-info:focus:not(.btn-active),
  .btn.btn-active-text-info:hover:not(.btn-active),
  .btn.btn-active-text-info:active:not(.btn-active),
  .btn.btn-active-text-info.active,
  .btn.btn-active-text-info.show,
  .show>.btn.btn-active-text-info {
    color: var(--kt-text-info);
  }

  .btn.btn-color-warning {
    color: var(--kt-text-warning);
  }

  .btn.btn-color-warning i,
  .btn.btn-color-warning .svg-icon {
    color: var(--kt-text-warning);
  }

  .btn.btn-color-warning.dropdown-toggle:after {
    color: var(--kt-text-warning);
  }

  .btn-check:checked+.btn.btn-active-color-warning,
  .btn-check:active+.btn.btn-active-color-warning,
  .btn.btn-active-color-warning:focus:not(.btn-active),
  .btn.btn-active-color-warning:hover:not(.btn-active),
  .btn.btn-active-color-warning:active:not(.btn-active),
  .btn.btn-active-color-warning.active,
  .btn.btn-active-color-warning.show,
  .show>.btn.btn-active-color-warning {
    color: var(--kt-text-warning);
  }

  .btn-check:checked+.btn.btn-active-color-warning i,
  .btn-check:checked+.btn.btn-active-color-warning .svg-icon,
  .btn-check:active+.btn.btn-active-color-warning i,
  .btn-check:active+.btn.btn-active-color-warning .svg-icon,
  .btn.btn-active-color-warning:focus:not(.btn-active) i,
  .btn.btn-active-color-warning:focus:not(.btn-active) .svg-icon,
  .btn.btn-active-color-warning:hover:not(.btn-active) i,
  .btn.btn-active-color-warning:hover:not(.btn-active) .svg-icon,
  .btn.btn-active-color-warning:active:not(.btn-active) i,
  .btn.btn-active-color-warning:active:not(.btn-active) .svg-icon,
  .btn.btn-active-color-warning.active i,
  .btn.btn-active-color-warning.active .svg-icon,
  .btn.btn-active-color-warning.show i,
  .btn.btn-active-color-warning.show .svg-icon,
  .show>.btn.btn-active-color-warning i,
  .show>.btn.btn-active-color-warning .svg-icon {
    color: var(--kt-text-warning);
  }

  .btn-check:checked+.btn.btn-active-color-warning.dropdown-toggle:after,
  .btn-check:active+.btn.btn-active-color-warning.dropdown-toggle:after,
  .btn.btn-active-color-warning:focus:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-color-warning:hover:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-color-warning:active:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-color-warning.active.dropdown-toggle:after,
  .btn.btn-active-color-warning.show.dropdown-toggle:after,
  .show>.btn.btn-active-color-warning.dropdown-toggle:after {
    color: var(--kt-text-warning);
  }

  .btn.btn-icon-warning i,
  .btn.btn-icon-warning .svg-icon {
    color: var(--kt-text-warning);
  }

  .btn.btn-icon-warning.dropdown-toggle:after {
    color: var(--kt-text-warning);
  }

  .btn-check:checked+.btn.btn-active-icon-warning i,
  .btn-check:checked+.btn.btn-active-icon-warning .svg-icon,
  .btn-check:active+.btn.btn-active-icon-warning i,
  .btn-check:active+.btn.btn-active-icon-warning .svg-icon,
  .btn.btn-active-icon-warning:focus:not(.btn-active) i,
  .btn.btn-active-icon-warning:focus:not(.btn-active) .svg-icon,
  .btn.btn-active-icon-warning:hover:not(.btn-active) i,
  .btn.btn-active-icon-warning:hover:not(.btn-active) .svg-icon,
  .btn.btn-active-icon-warning:active:not(.btn-active) i,
  .btn.btn-active-icon-warning:active:not(.btn-active) .svg-icon,
  .btn.btn-active-icon-warning.active i,
  .btn.btn-active-icon-warning.active .svg-icon,
  .btn.btn-active-icon-warning.show i,
  .btn.btn-active-icon-warning.show .svg-icon,
  .show>.btn.btn-active-icon-warning i,
  .show>.btn.btn-active-icon-warning .svg-icon {
    color: var(--kt-text-warning);
  }

  .btn-check:checked+.btn.btn-active-icon-warning.dropdown-toggle:after,
  .btn-check:active+.btn.btn-active-icon-warning.dropdown-toggle:after,
  .btn.btn-active-icon-warning:focus:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-icon-warning:hover:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-icon-warning:active:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-icon-warning.active.dropdown-toggle:after,
  .btn.btn-active-icon-warning.show.dropdown-toggle:after,
  .show>.btn.btn-active-icon-warning.dropdown-toggle:after {
    color: var(--kt-text-warning);
  }

  .btn.btn-text-warning {
    color: var(--kt-text-warning);
  }

  .btn-check:checked+.btn.btn-active-text-warning,
  .btn-check:active+.btn.btn-active-text-warning,
  .btn.btn-active-text-warning:focus:not(.btn-active),
  .btn.btn-active-text-warning:hover:not(.btn-active),
  .btn.btn-active-text-warning:active:not(.btn-active),
  .btn.btn-active-text-warning.active,
  .btn.btn-active-text-warning.show,
  .show>.btn.btn-active-text-warning {
    color: var(--kt-text-warning);
  }

  .btn.btn-color-danger {
    color: var(--kt-text-danger);
  }

  .btn.btn-color-danger i,
  .btn.btn-color-danger .svg-icon {
    color: var(--kt-text-danger);
  }

  .btn.btn-color-danger.dropdown-toggle:after {
    color: var(--kt-text-danger);
  }

  .btn-check:checked+.btn.btn-active-color-danger,
  .btn-check:active+.btn.btn-active-color-danger,
  .btn.btn-active-color-danger:focus:not(.btn-active),
  .btn.btn-active-color-danger:hover:not(.btn-active),
  .btn.btn-active-color-danger:active:not(.btn-active),
  .btn.btn-active-color-danger.active,
  .btn.btn-active-color-danger.show,
  .show>.btn.btn-active-color-danger {
    color: var(--kt-text-danger);
  }

  .btn-check:checked+.btn.btn-active-color-danger i,
  .btn-check:checked+.btn.btn-active-color-danger .svg-icon,
  .btn-check:active+.btn.btn-active-color-danger i,
  .btn-check:active+.btn.btn-active-color-danger .svg-icon,
  .btn.btn-active-color-danger:focus:not(.btn-active) i,
  .btn.btn-active-color-danger:focus:not(.btn-active) .svg-icon,
  .btn.btn-active-color-danger:hover:not(.btn-active) i,
  .btn.btn-active-color-danger:hover:not(.btn-active) .svg-icon,
  .btn.btn-active-color-danger:active:not(.btn-active) i,
  .btn.btn-active-color-danger:active:not(.btn-active) .svg-icon,
  .btn.btn-active-color-danger.active i,
  .btn.btn-active-color-danger.active .svg-icon,
  .btn.btn-active-color-danger.show i,
  .btn.btn-active-color-danger.show .svg-icon,
  .show>.btn.btn-active-color-danger i,
  .show>.btn.btn-active-color-danger .svg-icon {
    color: var(--kt-text-danger);
  }

  .btn-check:checked+.btn.btn-active-color-danger.dropdown-toggle:after,
  .btn-check:active+.btn.btn-active-color-danger.dropdown-toggle:after,
  .btn.btn-active-color-danger:focus:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-color-danger:hover:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-color-danger:active:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-color-danger.active.dropdown-toggle:after,
  .btn.btn-active-color-danger.show.dropdown-toggle:after,
  .show>.btn.btn-active-color-danger.dropdown-toggle:after {
    color: var(--kt-text-danger);
  }

  .btn.btn-icon-danger i,
  .btn.btn-icon-danger .svg-icon {
    color: var(--kt-text-danger);
  }

  .btn.btn-icon-danger.dropdown-toggle:after {
    color: var(--kt-text-danger);
  }

  .btn-check:checked+.btn.btn-active-icon-danger i,
  .btn-check:checked+.btn.btn-active-icon-danger .svg-icon,
  .btn-check:active+.btn.btn-active-icon-danger i,
  .btn-check:active+.btn.btn-active-icon-danger .svg-icon,
  .btn.btn-active-icon-danger:focus:not(.btn-active) i,
  .btn.btn-active-icon-danger:focus:not(.btn-active) .svg-icon,
  .btn.btn-active-icon-danger:hover:not(.btn-active) i,
  .btn.btn-active-icon-danger:hover:not(.btn-active) .svg-icon,
  .btn.btn-active-icon-danger:active:not(.btn-active) i,
  .btn.btn-active-icon-danger:active:not(.btn-active) .svg-icon,
  .btn.btn-active-icon-danger.active i,
  .btn.btn-active-icon-danger.active .svg-icon,
  .btn.btn-active-icon-danger.show i,
  .btn.btn-active-icon-danger.show .svg-icon,
  .show>.btn.btn-active-icon-danger i,
  .show>.btn.btn-active-icon-danger .svg-icon {
    color: var(--kt-text-danger);
  }

  .btn-check:checked+.btn.btn-active-icon-danger.dropdown-toggle:after,
  .btn-check:active+.btn.btn-active-icon-danger.dropdown-toggle:after,
  .btn.btn-active-icon-danger:focus:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-icon-danger:hover:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-icon-danger:active:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-icon-danger.active.dropdown-toggle:after,
  .btn.btn-active-icon-danger.show.dropdown-toggle:after,
  .show>.btn.btn-active-icon-danger.dropdown-toggle:after {
    color: var(--kt-text-danger);
  }

  .btn.btn-text-danger {
    color: var(--kt-text-danger);
  }

  .btn-check:checked+.btn.btn-active-text-danger,
  .btn-check:active+.btn.btn-active-text-danger,
  .btn.btn-active-text-danger:focus:not(.btn-active),
  .btn.btn-active-text-danger:hover:not(.btn-active),
  .btn.btn-active-text-danger:active:not(.btn-active),
  .btn.btn-active-text-danger.active,
  .btn.btn-active-text-danger.show,
  .show>.btn.btn-active-text-danger {
    color: var(--kt-text-danger);
  }

  .btn.btn-color-dark {
    color: var(--kt-text-dark);
  }

  .btn.btn-color-dark i,
  .btn.btn-color-dark .svg-icon {
    color: var(--kt-text-dark);
  }

  .btn.btn-color-dark.dropdown-toggle:after {
    color: var(--kt-text-dark);
  }

  .btn-check:checked+.btn.btn-active-color-dark,
  .btn-check:active+.btn.btn-active-color-dark,
  .btn.btn-active-color-dark:focus:not(.btn-active),
  .btn.btn-active-color-dark:hover:not(.btn-active),
  .btn.btn-active-color-dark:active:not(.btn-active),
  .btn.btn-active-color-dark.active,
  .btn.btn-active-color-dark.show,
  .show>.btn.btn-active-color-dark {
    color: var(--kt-text-dark);
  }

  .btn-check:checked+.btn.btn-active-color-dark i,
  .btn-check:checked+.btn.btn-active-color-dark .svg-icon,
  .btn-check:active+.btn.btn-active-color-dark i,
  .btn-check:active+.btn.btn-active-color-dark .svg-icon,
  .btn.btn-active-color-dark:focus:not(.btn-active) i,
  .btn.btn-active-color-dark:focus:not(.btn-active) .svg-icon,
  .btn.btn-active-color-dark:hover:not(.btn-active) i,
  .btn.btn-active-color-dark:hover:not(.btn-active) .svg-icon,
  .btn.btn-active-color-dark:active:not(.btn-active) i,
  .btn.btn-active-color-dark:active:not(.btn-active) .svg-icon,
  .btn.btn-active-color-dark.active i,
  .btn.btn-active-color-dark.active .svg-icon,
  .btn.btn-active-color-dark.show i,
  .btn.btn-active-color-dark.show .svg-icon,
  .show>.btn.btn-active-color-dark i,
  .show>.btn.btn-active-color-dark .svg-icon {
    color: var(--kt-text-dark);
  }

  .btn-check:checked+.btn.btn-active-color-dark.dropdown-toggle:after,
  .btn-check:active+.btn.btn-active-color-dark.dropdown-toggle:after,
  .btn.btn-active-color-dark:focus:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-color-dark:hover:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-color-dark:active:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-color-dark.active.dropdown-toggle:after,
  .btn.btn-active-color-dark.show.dropdown-toggle:after,
  .show>.btn.btn-active-color-dark.dropdown-toggle:after {
    color: var(--kt-text-dark);
  }

  .btn.btn-icon-dark i,
  .btn.btn-icon-dark .svg-icon {
    color: var(--kt-text-dark);
  }

  .btn.btn-icon-dark.dropdown-toggle:after {
    color: var(--kt-text-dark);
  }

  .btn-check:checked+.btn.btn-active-icon-dark i,
  .btn-check:checked+.btn.btn-active-icon-dark .svg-icon,
  .btn-check:active+.btn.btn-active-icon-dark i,
  .btn-check:active+.btn.btn-active-icon-dark .svg-icon,
  .btn.btn-active-icon-dark:focus:not(.btn-active) i,
  .btn.btn-active-icon-dark:focus:not(.btn-active) .svg-icon,
  .btn.btn-active-icon-dark:hover:not(.btn-active) i,
  .btn.btn-active-icon-dark:hover:not(.btn-active) .svg-icon,
  .btn.btn-active-icon-dark:active:not(.btn-active) i,
  .btn.btn-active-icon-dark:active:not(.btn-active) .svg-icon,
  .btn.btn-active-icon-dark.active i,
  .btn.btn-active-icon-dark.active .svg-icon,
  .btn.btn-active-icon-dark.show i,
  .btn.btn-active-icon-dark.show .svg-icon,
  .show>.btn.btn-active-icon-dark i,
  .show>.btn.btn-active-icon-dark .svg-icon {
    color: var(--kt-text-dark);
  }

  .btn-check:checked+.btn.btn-active-icon-dark.dropdown-toggle:after,
  .btn-check:active+.btn.btn-active-icon-dark.dropdown-toggle:after,
  .btn.btn-active-icon-dark:focus:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-icon-dark:hover:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-icon-dark:active:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-icon-dark.active.dropdown-toggle:after,
  .btn.btn-active-icon-dark.show.dropdown-toggle:after,
  .show>.btn.btn-active-icon-dark.dropdown-toggle:after {
    color: var(--kt-text-dark);
  }

  .btn.btn-text-dark {
    color: var(--kt-text-dark);
  }

  .btn-check:checked+.btn.btn-active-text-dark,
  .btn-check:active+.btn.btn-active-text-dark,
  .btn.btn-active-text-dark:focus:not(.btn-active),
  .btn.btn-active-text-dark:hover:not(.btn-active),
  .btn.btn-active-text-dark:active:not(.btn-active),
  .btn.btn-active-text-dark.active,
  .btn.btn-active-text-dark.show,
  .show>.btn.btn-active-text-dark {
    color: var(--kt-text-dark);
  }

  .btn.btn-color-muted {
    color: var(--kt-text-muted);
  }

  .btn.btn-color-muted i,
  .btn.btn-color-muted .svg-icon {
    color: var(--kt-text-muted);
  }

  .btn.btn-color-muted.dropdown-toggle:after {
    color: var(--kt-text-muted);
  }

  .btn-check:checked+.btn.btn-active-color-muted,
  .btn-check:active+.btn.btn-active-color-muted,
  .btn.btn-active-color-muted:focus:not(.btn-active),
  .btn.btn-active-color-muted:hover:not(.btn-active),
  .btn.btn-active-color-muted:active:not(.btn-active),
  .btn.btn-active-color-muted.active,
  .btn.btn-active-color-muted.show,
  .show>.btn.btn-active-color-muted {
    color: var(--kt-text-muted);
  }

  .btn-check:checked+.btn.btn-active-color-muted i,
  .btn-check:checked+.btn.btn-active-color-muted .svg-icon,
  .btn-check:active+.btn.btn-active-color-muted i,
  .btn-check:active+.btn.btn-active-color-muted .svg-icon,
  .btn.btn-active-color-muted:focus:not(.btn-active) i,
  .btn.btn-active-color-muted:focus:not(.btn-active) .svg-icon,
  .btn.btn-active-color-muted:hover:not(.btn-active) i,
  .btn.btn-active-color-muted:hover:not(.btn-active) .svg-icon,
  .btn.btn-active-color-muted:active:not(.btn-active) i,
  .btn.btn-active-color-muted:active:not(.btn-active) .svg-icon,
  .btn.btn-active-color-muted.active i,
  .btn.btn-active-color-muted.active .svg-icon,
  .btn.btn-active-color-muted.show i,
  .btn.btn-active-color-muted.show .svg-icon,
  .show>.btn.btn-active-color-muted i,
  .show>.btn.btn-active-color-muted .svg-icon {
    color: var(--kt-text-muted);
  }

  .btn-check:checked+.btn.btn-active-color-muted.dropdown-toggle:after,
  .btn-check:active+.btn.btn-active-color-muted.dropdown-toggle:after,
  .btn.btn-active-color-muted:focus:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-color-muted:hover:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-color-muted:active:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-color-muted.active.dropdown-toggle:after,
  .btn.btn-active-color-muted.show.dropdown-toggle:after,
  .show>.btn.btn-active-color-muted.dropdown-toggle:after {
    color: var(--kt-text-muted);
  }

  .btn.btn-icon-muted i,
  .btn.btn-icon-muted .svg-icon {
    color: var(--kt-text-muted);
  }

  .btn.btn-icon-muted.dropdown-toggle:after {
    color: var(--kt-text-muted);
  }

  .btn-check:checked+.btn.btn-active-icon-muted i,
  .btn-check:checked+.btn.btn-active-icon-muted .svg-icon,
  .btn-check:active+.btn.btn-active-icon-muted i,
  .btn-check:active+.btn.btn-active-icon-muted .svg-icon,
  .btn.btn-active-icon-muted:focus:not(.btn-active) i,
  .btn.btn-active-icon-muted:focus:not(.btn-active) .svg-icon,
  .btn.btn-active-icon-muted:hover:not(.btn-active) i,
  .btn.btn-active-icon-muted:hover:not(.btn-active) .svg-icon,
  .btn.btn-active-icon-muted:active:not(.btn-active) i,
  .btn.btn-active-icon-muted:active:not(.btn-active) .svg-icon,
  .btn.btn-active-icon-muted.active i,
  .btn.btn-active-icon-muted.active .svg-icon,
  .btn.btn-active-icon-muted.show i,
  .btn.btn-active-icon-muted.show .svg-icon,
  .show>.btn.btn-active-icon-muted i,
  .show>.btn.btn-active-icon-muted .svg-icon {
    color: var(--kt-text-muted);
  }

  .btn-check:checked+.btn.btn-active-icon-muted.dropdown-toggle:after,
  .btn-check:active+.btn.btn-active-icon-muted.dropdown-toggle:after,
  .btn.btn-active-icon-muted:focus:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-icon-muted:hover:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-icon-muted:active:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-icon-muted.active.dropdown-toggle:after,
  .btn.btn-active-icon-muted.show.dropdown-toggle:after,
  .show>.btn.btn-active-icon-muted.dropdown-toggle:after {
    color: var(--kt-text-muted);
  }

  .btn.btn-text-muted {
    color: var(--kt-text-muted);
  }

  .btn-check:checked+.btn.btn-active-text-muted,
  .btn-check:active+.btn.btn-active-text-muted,
  .btn.btn-active-text-muted:focus:not(.btn-active),
  .btn.btn-active-text-muted:hover:not(.btn-active),
  .btn.btn-active-text-muted:active:not(.btn-active),
  .btn.btn-active-text-muted.active,
  .btn.btn-active-text-muted.show,
  .show>.btn.btn-active-text-muted {
    color: var(--kt-text-muted);
  }

  .btn.btn-color-gray-100 {
    color: var(--kt-text-gray-100);
  }

  .btn.btn-color-gray-100 i,
  .btn.btn-color-gray-100 .svg-icon {
    color: var(--kt-text-gray-100);
  }

  .btn.btn-color-gray-100.dropdown-toggle:after {
    color: var(--kt-text-gray-100);
  }

  .btn-check:checked+.btn.btn-active-color-gray-100,
  .btn-check:active+.btn.btn-active-color-gray-100,
  .btn.btn-active-color-gray-100:focus:not(.btn-active),
  .btn.btn-active-color-gray-100:hover:not(.btn-active),
  .btn.btn-active-color-gray-100:active:not(.btn-active),
  .btn.btn-active-color-gray-100.active,
  .btn.btn-active-color-gray-100.show,
  .show>.btn.btn-active-color-gray-100 {
    color: var(--kt-text-gray-100);
  }

  .btn-check:checked+.btn.btn-active-color-gray-100 i,
  .btn-check:checked+.btn.btn-active-color-gray-100 .svg-icon,
  .btn-check:active+.btn.btn-active-color-gray-100 i,
  .btn-check:active+.btn.btn-active-color-gray-100 .svg-icon,
  .btn.btn-active-color-gray-100:focus:not(.btn-active) i,
  .btn.btn-active-color-gray-100:focus:not(.btn-active) .svg-icon,
  .btn.btn-active-color-gray-100:hover:not(.btn-active) i,
  .btn.btn-active-color-gray-100:hover:not(.btn-active) .svg-icon,
  .btn.btn-active-color-gray-100:active:not(.btn-active) i,
  .btn.btn-active-color-gray-100:active:not(.btn-active) .svg-icon,
  .btn.btn-active-color-gray-100.active i,
  .btn.btn-active-color-gray-100.active .svg-icon,
  .btn.btn-active-color-gray-100.show i,
  .btn.btn-active-color-gray-100.show .svg-icon,
  .show>.btn.btn-active-color-gray-100 i,
  .show>.btn.btn-active-color-gray-100 .svg-icon {
    color: var(--kt-text-gray-100);
  }

  .btn-check:checked+.btn.btn-active-color-gray-100.dropdown-toggle:after,
  .btn-check:active+.btn.btn-active-color-gray-100.dropdown-toggle:after,
  .btn.btn-active-color-gray-100:focus:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-color-gray-100:hover:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-color-gray-100:active:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-color-gray-100.active.dropdown-toggle:after,
  .btn.btn-active-color-gray-100.show.dropdown-toggle:after,
  .show>.btn.btn-active-color-gray-100.dropdown-toggle:after {
    color: var(--kt-text-gray-100);
  }

  .btn.btn-icon-gray-100 i,
  .btn.btn-icon-gray-100 .svg-icon {
    color: var(--kt-text-gray-100);
  }

  .btn.btn-icon-gray-100.dropdown-toggle:after {
    color: var(--kt-text-gray-100);
  }

  .btn-check:checked+.btn.btn-active-icon-gray-100 i,
  .btn-check:checked+.btn.btn-active-icon-gray-100 .svg-icon,
  .btn-check:active+.btn.btn-active-icon-gray-100 i,
  .btn-check:active+.btn.btn-active-icon-gray-100 .svg-icon,
  .btn.btn-active-icon-gray-100:focus:not(.btn-active) i,
  .btn.btn-active-icon-gray-100:focus:not(.btn-active) .svg-icon,
  .btn.btn-active-icon-gray-100:hover:not(.btn-active) i,
  .btn.btn-active-icon-gray-100:hover:not(.btn-active) .svg-icon,
  .btn.btn-active-icon-gray-100:active:not(.btn-active) i,
  .btn.btn-active-icon-gray-100:active:not(.btn-active) .svg-icon,
  .btn.btn-active-icon-gray-100.active i,
  .btn.btn-active-icon-gray-100.active .svg-icon,
  .btn.btn-active-icon-gray-100.show i,
  .btn.btn-active-icon-gray-100.show .svg-icon,
  .show>.btn.btn-active-icon-gray-100 i,
  .show>.btn.btn-active-icon-gray-100 .svg-icon {
    color: var(--kt-text-gray-100);
  }

  .btn-check:checked+.btn.btn-active-icon-gray-100.dropdown-toggle:after,
  .btn-check:active+.btn.btn-active-icon-gray-100.dropdown-toggle:after,
  .btn.btn-active-icon-gray-100:focus:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-icon-gray-100:hover:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-icon-gray-100:active:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-icon-gray-100.active.dropdown-toggle:after,
  .btn.btn-active-icon-gray-100.show.dropdown-toggle:after,
  .show>.btn.btn-active-icon-gray-100.dropdown-toggle:after {
    color: var(--kt-text-gray-100);
  }

  .btn.btn-text-gray-100 {
    color: var(--kt-text-gray-100);
  }

  .btn-check:checked+.btn.btn-active-text-gray-100,
  .btn-check:active+.btn.btn-active-text-gray-100,
  .btn.btn-active-text-gray-100:focus:not(.btn-active),
  .btn.btn-active-text-gray-100:hover:not(.btn-active),
  .btn.btn-active-text-gray-100:active:not(.btn-active),
  .btn.btn-active-text-gray-100.active,
  .btn.btn-active-text-gray-100.show,
  .show>.btn.btn-active-text-gray-100 {
    color: var(--kt-text-gray-100);
  }

  .btn.btn-color-gray-200 {
    color: var(--kt-text-gray-200);
  }

  .btn.btn-color-gray-200 i,
  .btn.btn-color-gray-200 .svg-icon {
    color: var(--kt-text-gray-200);
  }

  .btn.btn-color-gray-200.dropdown-toggle:after {
    color: var(--kt-text-gray-200);
  }

  .btn-check:checked+.btn.btn-active-color-gray-200,
  .btn-check:active+.btn.btn-active-color-gray-200,
  .btn.btn-active-color-gray-200:focus:not(.btn-active),
  .btn.btn-active-color-gray-200:hover:not(.btn-active),
  .btn.btn-active-color-gray-200:active:not(.btn-active),
  .btn.btn-active-color-gray-200.active,
  .btn.btn-active-color-gray-200.show,
  .show>.btn.btn-active-color-gray-200 {
    color: var(--kt-text-gray-200);
  }

  .btn-check:checked+.btn.btn-active-color-gray-200 i,
  .btn-check:checked+.btn.btn-active-color-gray-200 .svg-icon,
  .btn-check:active+.btn.btn-active-color-gray-200 i,
  .btn-check:active+.btn.btn-active-color-gray-200 .svg-icon,
  .btn.btn-active-color-gray-200:focus:not(.btn-active) i,
  .btn.btn-active-color-gray-200:focus:not(.btn-active) .svg-icon,
  .btn.btn-active-color-gray-200:hover:not(.btn-active) i,
  .btn.btn-active-color-gray-200:hover:not(.btn-active) .svg-icon,
  .btn.btn-active-color-gray-200:active:not(.btn-active) i,
  .btn.btn-active-color-gray-200:active:not(.btn-active) .svg-icon,
  .btn.btn-active-color-gray-200.active i,
  .btn.btn-active-color-gray-200.active .svg-icon,
  .btn.btn-active-color-gray-200.show i,
  .btn.btn-active-color-gray-200.show .svg-icon,
  .show>.btn.btn-active-color-gray-200 i,
  .show>.btn.btn-active-color-gray-200 .svg-icon {
    color: var(--kt-text-gray-200);
  }

  .btn-check:checked+.btn.btn-active-color-gray-200.dropdown-toggle:after,
  .btn-check:active+.btn.btn-active-color-gray-200.dropdown-toggle:after,
  .btn.btn-active-color-gray-200:focus:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-color-gray-200:hover:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-color-gray-200:active:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-color-gray-200.active.dropdown-toggle:after,
  .btn.btn-active-color-gray-200.show.dropdown-toggle:after,
  .show>.btn.btn-active-color-gray-200.dropdown-toggle:after {
    color: var(--kt-text-gray-200);
  }

  .btn.btn-icon-gray-200 i,
  .btn.btn-icon-gray-200 .svg-icon {
    color: var(--kt-text-gray-200);
  }

  .btn.btn-icon-gray-200.dropdown-toggle:after {
    color: var(--kt-text-gray-200);
  }

  .btn-check:checked+.btn.btn-active-icon-gray-200 i,
  .btn-check:checked+.btn.btn-active-icon-gray-200 .svg-icon,
  .btn-check:active+.btn.btn-active-icon-gray-200 i,
  .btn-check:active+.btn.btn-active-icon-gray-200 .svg-icon,
  .btn.btn-active-icon-gray-200:focus:not(.btn-active) i,
  .btn.btn-active-icon-gray-200:focus:not(.btn-active) .svg-icon,
  .btn.btn-active-icon-gray-200:hover:not(.btn-active) i,
  .btn.btn-active-icon-gray-200:hover:not(.btn-active) .svg-icon,
  .btn.btn-active-icon-gray-200:active:not(.btn-active) i,
  .btn.btn-active-icon-gray-200:active:not(.btn-active) .svg-icon,
  .btn.btn-active-icon-gray-200.active i,
  .btn.btn-active-icon-gray-200.active .svg-icon,
  .btn.btn-active-icon-gray-200.show i,
  .btn.btn-active-icon-gray-200.show .svg-icon,
  .show>.btn.btn-active-icon-gray-200 i,
  .show>.btn.btn-active-icon-gray-200 .svg-icon {
    color: var(--kt-text-gray-200);
  }

  .btn-check:checked+.btn.btn-active-icon-gray-200.dropdown-toggle:after,
  .btn-check:active+.btn.btn-active-icon-gray-200.dropdown-toggle:after,
  .btn.btn-active-icon-gray-200:focus:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-icon-gray-200:hover:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-icon-gray-200:active:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-icon-gray-200.active.dropdown-toggle:after,
  .btn.btn-active-icon-gray-200.show.dropdown-toggle:after,
  .show>.btn.btn-active-icon-gray-200.dropdown-toggle:after {
    color: var(--kt-text-gray-200);
  }

  .btn.btn-text-gray-200 {
    color: var(--kt-text-gray-200);
  }

  .btn-check:checked+.btn.btn-active-text-gray-200,
  .btn-check:active+.btn.btn-active-text-gray-200,
  .btn.btn-active-text-gray-200:focus:not(.btn-active),
  .btn.btn-active-text-gray-200:hover:not(.btn-active),
  .btn.btn-active-text-gray-200:active:not(.btn-active),
  .btn.btn-active-text-gray-200.active,
  .btn.btn-active-text-gray-200.show,
  .show>.btn.btn-active-text-gray-200 {
    color: var(--kt-text-gray-200);
  }

  .btn.btn-color-gray-300 {
    color: var(--kt-text-gray-300);
  }

  .btn.btn-color-gray-300 i,
  .btn.btn-color-gray-300 .svg-icon {
    color: var(--kt-text-gray-300);
  }

  .btn.btn-color-gray-300.dropdown-toggle:after {
    color: var(--kt-text-gray-300);
  }

  .btn-check:checked+.btn.btn-active-color-gray-300,
  .btn-check:active+.btn.btn-active-color-gray-300,
  .btn.btn-active-color-gray-300:focus:not(.btn-active),
  .btn.btn-active-color-gray-300:hover:not(.btn-active),
  .btn.btn-active-color-gray-300:active:not(.btn-active),
  .btn.btn-active-color-gray-300.active,
  .btn.btn-active-color-gray-300.show,
  .show>.btn.btn-active-color-gray-300 {
    color: var(--kt-text-gray-300);
  }

  .btn-check:checked+.btn.btn-active-color-gray-300 i,
  .btn-check:checked+.btn.btn-active-color-gray-300 .svg-icon,
  .btn-check:active+.btn.btn-active-color-gray-300 i,
  .btn-check:active+.btn.btn-active-color-gray-300 .svg-icon,
  .btn.btn-active-color-gray-300:focus:not(.btn-active) i,
  .btn.btn-active-color-gray-300:focus:not(.btn-active) .svg-icon,
  .btn.btn-active-color-gray-300:hover:not(.btn-active) i,
  .btn.btn-active-color-gray-300:hover:not(.btn-active) .svg-icon,
  .btn.btn-active-color-gray-300:active:not(.btn-active) i,
  .btn.btn-active-color-gray-300:active:not(.btn-active) .svg-icon,
  .btn.btn-active-color-gray-300.active i,
  .btn.btn-active-color-gray-300.active .svg-icon,
  .btn.btn-active-color-gray-300.show i,
  .btn.btn-active-color-gray-300.show .svg-icon,
  .show>.btn.btn-active-color-gray-300 i,
  .show>.btn.btn-active-color-gray-300 .svg-icon {
    color: var(--kt-text-gray-300);
  }

  .btn-check:checked+.btn.btn-active-color-gray-300.dropdown-toggle:after,
  .btn-check:active+.btn.btn-active-color-gray-300.dropdown-toggle:after,
  .btn.btn-active-color-gray-300:focus:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-color-gray-300:hover:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-color-gray-300:active:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-color-gray-300.active.dropdown-toggle:after,
  .btn.btn-active-color-gray-300.show.dropdown-toggle:after,
  .show>.btn.btn-active-color-gray-300.dropdown-toggle:after {
    color: var(--kt-text-gray-300);
  }

  .btn.btn-icon-gray-300 i,
  .btn.btn-icon-gray-300 .svg-icon {
    color: var(--kt-text-gray-300);
  }

  .btn.btn-icon-gray-300.dropdown-toggle:after {
    color: var(--kt-text-gray-300);
  }

  .btn-check:checked+.btn.btn-active-icon-gray-300 i,
  .btn-check:checked+.btn.btn-active-icon-gray-300 .svg-icon,
  .btn-check:active+.btn.btn-active-icon-gray-300 i,
  .btn-check:active+.btn.btn-active-icon-gray-300 .svg-icon,
  .btn.btn-active-icon-gray-300:focus:not(.btn-active) i,
  .btn.btn-active-icon-gray-300:focus:not(.btn-active) .svg-icon,
  .btn.btn-active-icon-gray-300:hover:not(.btn-active) i,
  .btn.btn-active-icon-gray-300:hover:not(.btn-active) .svg-icon,
  .btn.btn-active-icon-gray-300:active:not(.btn-active) i,
  .btn.btn-active-icon-gray-300:active:not(.btn-active) .svg-icon,
  .btn.btn-active-icon-gray-300.active i,
  .btn.btn-active-icon-gray-300.active .svg-icon,
  .btn.btn-active-icon-gray-300.show i,
  .btn.btn-active-icon-gray-300.show .svg-icon,
  .show>.btn.btn-active-icon-gray-300 i,
  .show>.btn.btn-active-icon-gray-300 .svg-icon {
    color: var(--kt-text-gray-300);
  }

  .btn-check:checked+.btn.btn-active-icon-gray-300.dropdown-toggle:after,
  .btn-check:active+.btn.btn-active-icon-gray-300.dropdown-toggle:after,
  .btn.btn-active-icon-gray-300:focus:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-icon-gray-300:hover:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-icon-gray-300:active:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-icon-gray-300.active.dropdown-toggle:after,
  .btn.btn-active-icon-gray-300.show.dropdown-toggle:after,
  .show>.btn.btn-active-icon-gray-300.dropdown-toggle:after {
    color: var(--kt-text-gray-300);
  }

  .btn.btn-text-gray-300 {
    color: var(--kt-text-gray-300);
  }

  .btn-check:checked+.btn.btn-active-text-gray-300,
  .btn-check:active+.btn.btn-active-text-gray-300,
  .btn.btn-active-text-gray-300:focus:not(.btn-active),
  .btn.btn-active-text-gray-300:hover:not(.btn-active),
  .btn.btn-active-text-gray-300:active:not(.btn-active),
  .btn.btn-active-text-gray-300.active,
  .btn.btn-active-text-gray-300.show,
  .show>.btn.btn-active-text-gray-300 {
    color: var(--kt-text-gray-300);
  }

  .btn.btn-color-gray-400 {
    color: var(--kt-text-gray-400);
  }

  .btn.btn-color-gray-400 i,
  .btn.btn-color-gray-400 .svg-icon {
    color: var(--kt-text-gray-400);
  }

  .btn.btn-color-gray-400.dropdown-toggle:after {
    color: var(--kt-text-gray-400);
  }

  .btn-check:checked+.btn.btn-active-color-gray-400,
  .btn-check:active+.btn.btn-active-color-gray-400,
  .btn.btn-active-color-gray-400:focus:not(.btn-active),
  .btn.btn-active-color-gray-400:hover:not(.btn-active),
  .btn.btn-active-color-gray-400:active:not(.btn-active),
  .btn.btn-active-color-gray-400.active,
  .btn.btn-active-color-gray-400.show,
  .show>.btn.btn-active-color-gray-400 {
    color: var(--kt-text-gray-400);
  }

  .btn-check:checked+.btn.btn-active-color-gray-400 i,
  .btn-check:checked+.btn.btn-active-color-gray-400 .svg-icon,
  .btn-check:active+.btn.btn-active-color-gray-400 i,
  .btn-check:active+.btn.btn-active-color-gray-400 .svg-icon,
  .btn.btn-active-color-gray-400:focus:not(.btn-active) i,
  .btn.btn-active-color-gray-400:focus:not(.btn-active) .svg-icon,
  .btn.btn-active-color-gray-400:hover:not(.btn-active) i,
  .btn.btn-active-color-gray-400:hover:not(.btn-active) .svg-icon,
  .btn.btn-active-color-gray-400:active:not(.btn-active) i,
  .btn.btn-active-color-gray-400:active:not(.btn-active) .svg-icon,
  .btn.btn-active-color-gray-400.active i,
  .btn.btn-active-color-gray-400.active .svg-icon,
  .btn.btn-active-color-gray-400.show i,
  .btn.btn-active-color-gray-400.show .svg-icon,
  .show>.btn.btn-active-color-gray-400 i,
  .show>.btn.btn-active-color-gray-400 .svg-icon {
    color: var(--kt-text-gray-400);
  }

  .btn-check:checked+.btn.btn-active-color-gray-400.dropdown-toggle:after,
  .btn-check:active+.btn.btn-active-color-gray-400.dropdown-toggle:after,
  .btn.btn-active-color-gray-400:focus:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-color-gray-400:hover:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-color-gray-400:active:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-color-gray-400.active.dropdown-toggle:after,
  .btn.btn-active-color-gray-400.show.dropdown-toggle:after,
  .show>.btn.btn-active-color-gray-400.dropdown-toggle:after {
    color: var(--kt-text-gray-400);
  }

  .btn.btn-icon-gray-400 i,
  .btn.btn-icon-gray-400 .svg-icon {
    color: var(--kt-text-gray-400);
  }

  .btn.btn-icon-gray-400.dropdown-toggle:after {
    color: var(--kt-text-gray-400);
  }

  .btn-check:checked+.btn.btn-active-icon-gray-400 i,
  .btn-check:checked+.btn.btn-active-icon-gray-400 .svg-icon,
  .btn-check:active+.btn.btn-active-icon-gray-400 i,
  .btn-check:active+.btn.btn-active-icon-gray-400 .svg-icon,
  .btn.btn-active-icon-gray-400:focus:not(.btn-active) i,
  .btn.btn-active-icon-gray-400:focus:not(.btn-active) .svg-icon,
  .btn.btn-active-icon-gray-400:hover:not(.btn-active) i,
  .btn.btn-active-icon-gray-400:hover:not(.btn-active) .svg-icon,
  .btn.btn-active-icon-gray-400:active:not(.btn-active) i,
  .btn.btn-active-icon-gray-400:active:not(.btn-active) .svg-icon,
  .btn.btn-active-icon-gray-400.active i,
  .btn.btn-active-icon-gray-400.active .svg-icon,
  .btn.btn-active-icon-gray-400.show i,
  .btn.btn-active-icon-gray-400.show .svg-icon,
  .show>.btn.btn-active-icon-gray-400 i,
  .show>.btn.btn-active-icon-gray-400 .svg-icon {
    color: var(--kt-text-gray-400);
  }

  .btn-check:checked+.btn.btn-active-icon-gray-400.dropdown-toggle:after,
  .btn-check:active+.btn.btn-active-icon-gray-400.dropdown-toggle:after,
  .btn.btn-active-icon-gray-400:focus:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-icon-gray-400:hover:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-icon-gray-400:active:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-icon-gray-400.active.dropdown-toggle:after,
  .btn.btn-active-icon-gray-400.show.dropdown-toggle:after,
  .show>.btn.btn-active-icon-gray-400.dropdown-toggle:after {
    color: var(--kt-text-gray-400);
  }

  .btn.btn-text-gray-400 {
    color: var(--kt-text-gray-400);
  }

  .btn-check:checked+.btn.btn-active-text-gray-400,
  .btn-check:active+.btn.btn-active-text-gray-400,
  .btn.btn-active-text-gray-400:focus:not(.btn-active),
  .btn.btn-active-text-gray-400:hover:not(.btn-active),
  .btn.btn-active-text-gray-400:active:not(.btn-active),
  .btn.btn-active-text-gray-400.active,
  .btn.btn-active-text-gray-400.show,
  .show>.btn.btn-active-text-gray-400 {
    color: var(--kt-text-gray-400);
  }

  .btn.btn-color-gray-500 {
    color: var(--kt-text-gray-500);
  }

  .btn.btn-color-gray-500 i,
  .btn.btn-color-gray-500 .svg-icon {
    color: var(--kt-text-gray-500);
  }

  .btn.btn-color-gray-500.dropdown-toggle:after {
    color: var(--kt-text-gray-500);
  }

  .btn-check:checked+.btn.btn-active-color-gray-500,
  .btn-check:active+.btn.btn-active-color-gray-500,
  .btn.btn-active-color-gray-500:focus:not(.btn-active),
  .btn.btn-active-color-gray-500:hover:not(.btn-active),
  .btn.btn-active-color-gray-500:active:not(.btn-active),
  .btn.btn-active-color-gray-500.active,
  .btn.btn-active-color-gray-500.show,
  .show>.btn.btn-active-color-gray-500 {
    color: var(--kt-text-gray-500);
  }

  .btn-check:checked+.btn.btn-active-color-gray-500 i,
  .btn-check:checked+.btn.btn-active-color-gray-500 .svg-icon,
  .btn-check:active+.btn.btn-active-color-gray-500 i,
  .btn-check:active+.btn.btn-active-color-gray-500 .svg-icon,
  .btn.btn-active-color-gray-500:focus:not(.btn-active) i,
  .btn.btn-active-color-gray-500:focus:not(.btn-active) .svg-icon,
  .btn.btn-active-color-gray-500:hover:not(.btn-active) i,
  .btn.btn-active-color-gray-500:hover:not(.btn-active) .svg-icon,
  .btn.btn-active-color-gray-500:active:not(.btn-active) i,
  .btn.btn-active-color-gray-500:active:not(.btn-active) .svg-icon,
  .btn.btn-active-color-gray-500.active i,
  .btn.btn-active-color-gray-500.active .svg-icon,
  .btn.btn-active-color-gray-500.show i,
  .btn.btn-active-color-gray-500.show .svg-icon,
  .show>.btn.btn-active-color-gray-500 i,
  .show>.btn.btn-active-color-gray-500 .svg-icon {
    color: var(--kt-text-gray-500);
  }

  .btn-check:checked+.btn.btn-active-color-gray-500.dropdown-toggle:after,
  .btn-check:active+.btn.btn-active-color-gray-500.dropdown-toggle:after,
  .btn.btn-active-color-gray-500:focus:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-color-gray-500:hover:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-color-gray-500:active:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-color-gray-500.active.dropdown-toggle:after,
  .btn.btn-active-color-gray-500.show.dropdown-toggle:after,
  .show>.btn.btn-active-color-gray-500.dropdown-toggle:after {
    color: var(--kt-text-gray-500);
  }

  .btn.btn-icon-gray-500 i,
  .btn.btn-icon-gray-500 .svg-icon {
    color: var(--kt-text-gray-500);
  }

  .btn.btn-icon-gray-500.dropdown-toggle:after {
    color: var(--kt-text-gray-500);
  }

  .btn-check:checked+.btn.btn-active-icon-gray-500 i,
  .btn-check:checked+.btn.btn-active-icon-gray-500 .svg-icon,
  .btn-check:active+.btn.btn-active-icon-gray-500 i,
  .btn-check:active+.btn.btn-active-icon-gray-500 .svg-icon,
  .btn.btn-active-icon-gray-500:focus:not(.btn-active) i,
  .btn.btn-active-icon-gray-500:focus:not(.btn-active) .svg-icon,
  .btn.btn-active-icon-gray-500:hover:not(.btn-active) i,
  .btn.btn-active-icon-gray-500:hover:not(.btn-active) .svg-icon,
  .btn.btn-active-icon-gray-500:active:not(.btn-active) i,
  .btn.btn-active-icon-gray-500:active:not(.btn-active) .svg-icon,
  .btn.btn-active-icon-gray-500.active i,
  .btn.btn-active-icon-gray-500.active .svg-icon,
  .btn.btn-active-icon-gray-500.show i,
  .btn.btn-active-icon-gray-500.show .svg-icon,
  .show>.btn.btn-active-icon-gray-500 i,
  .show>.btn.btn-active-icon-gray-500 .svg-icon {
    color: var(--kt-text-gray-500);
  }

  .btn-check:checked+.btn.btn-active-icon-gray-500.dropdown-toggle:after,
  .btn-check:active+.btn.btn-active-icon-gray-500.dropdown-toggle:after,
  .btn.btn-active-icon-gray-500:focus:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-icon-gray-500:hover:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-icon-gray-500:active:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-icon-gray-500.active.dropdown-toggle:after,
  .btn.btn-active-icon-gray-500.show.dropdown-toggle:after,
  .show>.btn.btn-active-icon-gray-500.dropdown-toggle:after {
    color: var(--kt-text-gray-500);
  }

  .btn.btn-text-gray-500 {
    color: var(--kt-text-gray-500);
  }

  .btn-check:checked+.btn.btn-active-text-gray-500,
  .btn-check:active+.btn.btn-active-text-gray-500,
  .btn.btn-active-text-gray-500:focus:not(.btn-active),
  .btn.btn-active-text-gray-500:hover:not(.btn-active),
  .btn.btn-active-text-gray-500:active:not(.btn-active),
  .btn.btn-active-text-gray-500.active,
  .btn.btn-active-text-gray-500.show,
  .show>.btn.btn-active-text-gray-500 {
    color: var(--kt-text-gray-500);
  }

  .btn.btn-color-gray-600 {
    color: var(--kt-text-gray-600);
  }

  .btn.btn-color-gray-600 i,
  .btn.btn-color-gray-600 .svg-icon {
    color: var(--kt-text-gray-600);
  }

  .btn.btn-color-gray-600.dropdown-toggle:after {
    color: var(--kt-text-gray-600);
  }

  .btn-check:checked+.btn.btn-active-color-gray-600,
  .btn-check:active+.btn.btn-active-color-gray-600,
  .btn.btn-active-color-gray-600:focus:not(.btn-active),
  .btn.btn-active-color-gray-600:hover:not(.btn-active),
  .btn.btn-active-color-gray-600:active:not(.btn-active),
  .btn.btn-active-color-gray-600.active,
  .btn.btn-active-color-gray-600.show,
  .show>.btn.btn-active-color-gray-600 {
    color: var(--kt-text-gray-600);
  }

  .btn-check:checked+.btn.btn-active-color-gray-600 i,
  .btn-check:checked+.btn.btn-active-color-gray-600 .svg-icon,
  .btn-check:active+.btn.btn-active-color-gray-600 i,
  .btn-check:active+.btn.btn-active-color-gray-600 .svg-icon,
  .btn.btn-active-color-gray-600:focus:not(.btn-active) i,
  .btn.btn-active-color-gray-600:focus:not(.btn-active) .svg-icon,
  .btn.btn-active-color-gray-600:hover:not(.btn-active) i,
  .btn.btn-active-color-gray-600:hover:not(.btn-active) .svg-icon,
  .btn.btn-active-color-gray-600:active:not(.btn-active) i,
  .btn.btn-active-color-gray-600:active:not(.btn-active) .svg-icon,
  .btn.btn-active-color-gray-600.active i,
  .btn.btn-active-color-gray-600.active .svg-icon,
  .btn.btn-active-color-gray-600.show i,
  .btn.btn-active-color-gray-600.show .svg-icon,
  .show>.btn.btn-active-color-gray-600 i,
  .show>.btn.btn-active-color-gray-600 .svg-icon {
    color: var(--kt-text-gray-600);
  }

  .btn-check:checked+.btn.btn-active-color-gray-600.dropdown-toggle:after,
  .btn-check:active+.btn.btn-active-color-gray-600.dropdown-toggle:after,
  .btn.btn-active-color-gray-600:focus:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-color-gray-600:hover:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-color-gray-600:active:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-color-gray-600.active.dropdown-toggle:after,
  .btn.btn-active-color-gray-600.show.dropdown-toggle:after,
  .show>.btn.btn-active-color-gray-600.dropdown-toggle:after {
    color: var(--kt-text-gray-600);
  }

  .btn.btn-icon-gray-600 i,
  .btn.btn-icon-gray-600 .svg-icon {
    color: var(--kt-text-gray-600);
  }

  .btn.btn-icon-gray-600.dropdown-toggle:after {
    color: var(--kt-text-gray-600);
  }

  .btn-check:checked+.btn.btn-active-icon-gray-600 i,
  .btn-check:checked+.btn.btn-active-icon-gray-600 .svg-icon,
  .btn-check:active+.btn.btn-active-icon-gray-600 i,
  .btn-check:active+.btn.btn-active-icon-gray-600 .svg-icon,
  .btn.btn-active-icon-gray-600:focus:not(.btn-active) i,
  .btn.btn-active-icon-gray-600:focus:not(.btn-active) .svg-icon,
  .btn.btn-active-icon-gray-600:hover:not(.btn-active) i,
  .btn.btn-active-icon-gray-600:hover:not(.btn-active) .svg-icon,
  .btn.btn-active-icon-gray-600:active:not(.btn-active) i,
  .btn.btn-active-icon-gray-600:active:not(.btn-active) .svg-icon,
  .btn.btn-active-icon-gray-600.active i,
  .btn.btn-active-icon-gray-600.active .svg-icon,
  .btn.btn-active-icon-gray-600.show i,
  .btn.btn-active-icon-gray-600.show .svg-icon,
  .show>.btn.btn-active-icon-gray-600 i,
  .show>.btn.btn-active-icon-gray-600 .svg-icon {
    color: var(--kt-text-gray-600);
  }

  .btn-check:checked+.btn.btn-active-icon-gray-600.dropdown-toggle:after,
  .btn-check:active+.btn.btn-active-icon-gray-600.dropdown-toggle:after,
  .btn.btn-active-icon-gray-600:focus:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-icon-gray-600:hover:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-icon-gray-600:active:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-icon-gray-600.active.dropdown-toggle:after,
  .btn.btn-active-icon-gray-600.show.dropdown-toggle:after,
  .show>.btn.btn-active-icon-gray-600.dropdown-toggle:after {
    color: var(--kt-text-gray-600);
  }

  .btn.btn-text-gray-600 {
    color: var(--kt-text-gray-600);
  }

  .btn-check:checked+.btn.btn-active-text-gray-600,
  .btn-check:active+.btn.btn-active-text-gray-600,
  .btn.btn-active-text-gray-600:focus:not(.btn-active),
  .btn.btn-active-text-gray-600:hover:not(.btn-active),
  .btn.btn-active-text-gray-600:active:not(.btn-active),
  .btn.btn-active-text-gray-600.active,
  .btn.btn-active-text-gray-600.show,
  .show>.btn.btn-active-text-gray-600 {
    color: var(--kt-text-gray-600);
  }

  .btn.btn-color-gray-700 {
    color: var(--kt-text-gray-700);
  }

  .btn.btn-color-gray-700 i,
  .btn.btn-color-gray-700 .svg-icon {
    color: var(--kt-text-gray-700);
  }

  .btn.btn-color-gray-700.dropdown-toggle:after {
    color: var(--kt-text-gray-700);
  }

  .btn-check:checked+.btn.btn-active-color-gray-700,
  .btn-check:active+.btn.btn-active-color-gray-700,
  .btn.btn-active-color-gray-700:focus:not(.btn-active),
  .btn.btn-active-color-gray-700:hover:not(.btn-active),
  .btn.btn-active-color-gray-700:active:not(.btn-active),
  .btn.btn-active-color-gray-700.active,
  .btn.btn-active-color-gray-700.show,
  .show>.btn.btn-active-color-gray-700 {
    color: var(--kt-text-gray-700);
  }

  .btn-check:checked+.btn.btn-active-color-gray-700 i,
  .btn-check:checked+.btn.btn-active-color-gray-700 .svg-icon,
  .btn-check:active+.btn.btn-active-color-gray-700 i,
  .btn-check:active+.btn.btn-active-color-gray-700 .svg-icon,
  .btn.btn-active-color-gray-700:focus:not(.btn-active) i,
  .btn.btn-active-color-gray-700:focus:not(.btn-active) .svg-icon,
  .btn.btn-active-color-gray-700:hover:not(.btn-active) i,
  .btn.btn-active-color-gray-700:hover:not(.btn-active) .svg-icon,
  .btn.btn-active-color-gray-700:active:not(.btn-active) i,
  .btn.btn-active-color-gray-700:active:not(.btn-active) .svg-icon,
  .btn.btn-active-color-gray-700.active i,
  .btn.btn-active-color-gray-700.active .svg-icon,
  .btn.btn-active-color-gray-700.show i,
  .btn.btn-active-color-gray-700.show .svg-icon,
  .show>.btn.btn-active-color-gray-700 i,
  .show>.btn.btn-active-color-gray-700 .svg-icon {
    color: var(--kt-text-gray-700);
  }

  .btn-check:checked+.btn.btn-active-color-gray-700.dropdown-toggle:after,
  .btn-check:active+.btn.btn-active-color-gray-700.dropdown-toggle:after,
  .btn.btn-active-color-gray-700:focus:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-color-gray-700:hover:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-color-gray-700:active:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-color-gray-700.active.dropdown-toggle:after,
  .btn.btn-active-color-gray-700.show.dropdown-toggle:after,
  .show>.btn.btn-active-color-gray-700.dropdown-toggle:after {
    color: var(--kt-text-gray-700);
  }

  .btn.btn-icon-gray-700 i,
  .btn.btn-icon-gray-700 .svg-icon {
    color: var(--kt-text-gray-700);
  }

  .btn.btn-icon-gray-700.dropdown-toggle:after {
    color: var(--kt-text-gray-700);
  }

  .btn-check:checked+.btn.btn-active-icon-gray-700 i,
  .btn-check:checked+.btn.btn-active-icon-gray-700 .svg-icon,
  .btn-check:active+.btn.btn-active-icon-gray-700 i,
  .btn-check:active+.btn.btn-active-icon-gray-700 .svg-icon,
  .btn.btn-active-icon-gray-700:focus:not(.btn-active) i,
  .btn.btn-active-icon-gray-700:focus:not(.btn-active) .svg-icon,
  .btn.btn-active-icon-gray-700:hover:not(.btn-active) i,
  .btn.btn-active-icon-gray-700:hover:not(.btn-active) .svg-icon,
  .btn.btn-active-icon-gray-700:active:not(.btn-active) i,
  .btn.btn-active-icon-gray-700:active:not(.btn-active) .svg-icon,
  .btn.btn-active-icon-gray-700.active i,
  .btn.btn-active-icon-gray-700.active .svg-icon,
  .btn.btn-active-icon-gray-700.show i,
  .btn.btn-active-icon-gray-700.show .svg-icon,
  .show>.btn.btn-active-icon-gray-700 i,
  .show>.btn.btn-active-icon-gray-700 .svg-icon {
    color: var(--kt-text-gray-700);
  }

  .btn-check:checked+.btn.btn-active-icon-gray-700.dropdown-toggle:after,
  .btn-check:active+.btn.btn-active-icon-gray-700.dropdown-toggle:after,
  .btn.btn-active-icon-gray-700:focus:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-icon-gray-700:hover:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-icon-gray-700:active:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-icon-gray-700.active.dropdown-toggle:after,
  .btn.btn-active-icon-gray-700.show.dropdown-toggle:after,
  .show>.btn.btn-active-icon-gray-700.dropdown-toggle:after {
    color: var(--kt-text-gray-700);
  }

  .btn.btn-text-gray-700 {
    color: var(--kt-text-gray-700);
  }

  .btn-check:checked+.btn.btn-active-text-gray-700,
  .btn-check:active+.btn.btn-active-text-gray-700,
  .btn.btn-active-text-gray-700:focus:not(.btn-active),
  .btn.btn-active-text-gray-700:hover:not(.btn-active),
  .btn.btn-active-text-gray-700:active:not(.btn-active),
  .btn.btn-active-text-gray-700.active,
  .btn.btn-active-text-gray-700.show,
  .show>.btn.btn-active-text-gray-700 {
    color: var(--kt-text-gray-700);
  }

  .btn.btn-color-gray-800 {
    color: var(--kt-text-gray-800);
  }

  .btn.btn-color-gray-800 i,
  .btn.btn-color-gray-800 .svg-icon {
    color: var(--kt-text-gray-800);
  }

  .btn.btn-color-gray-800.dropdown-toggle:after {
    color: var(--kt-text-gray-800);
  }

  .btn-check:checked+.btn.btn-active-color-gray-800,
  .btn-check:active+.btn.btn-active-color-gray-800,
  .btn.btn-active-color-gray-800:focus:not(.btn-active),
  .btn.btn-active-color-gray-800:hover:not(.btn-active),
  .btn.btn-active-color-gray-800:active:not(.btn-active),
  .btn.btn-active-color-gray-800.active,
  .btn.btn-active-color-gray-800.show,
  .show>.btn.btn-active-color-gray-800 {
    color: var(--kt-text-gray-800);
  }

  .btn-check:checked+.btn.btn-active-color-gray-800 i,
  .btn-check:checked+.btn.btn-active-color-gray-800 .svg-icon,
  .btn-check:active+.btn.btn-active-color-gray-800 i,
  .btn-check:active+.btn.btn-active-color-gray-800 .svg-icon,
  .btn.btn-active-color-gray-800:focus:not(.btn-active) i,
  .btn.btn-active-color-gray-800:focus:not(.btn-active) .svg-icon,
  .btn.btn-active-color-gray-800:hover:not(.btn-active) i,
  .btn.btn-active-color-gray-800:hover:not(.btn-active) .svg-icon,
  .btn.btn-active-color-gray-800:active:not(.btn-active) i,
  .btn.btn-active-color-gray-800:active:not(.btn-active) .svg-icon,
  .btn.btn-active-color-gray-800.active i,
  .btn.btn-active-color-gray-800.active .svg-icon,
  .btn.btn-active-color-gray-800.show i,
  .btn.btn-active-color-gray-800.show .svg-icon,
  .show>.btn.btn-active-color-gray-800 i,
  .show>.btn.btn-active-color-gray-800 .svg-icon {
    color: var(--kt-text-gray-800);
  }

  .btn-check:checked+.btn.btn-active-color-gray-800.dropdown-toggle:after,
  .btn-check:active+.btn.btn-active-color-gray-800.dropdown-toggle:after,
  .btn.btn-active-color-gray-800:focus:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-color-gray-800:hover:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-color-gray-800:active:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-color-gray-800.active.dropdown-toggle:after,
  .btn.btn-active-color-gray-800.show.dropdown-toggle:after,
  .show>.btn.btn-active-color-gray-800.dropdown-toggle:after {
    color: var(--kt-text-gray-800);
  }

  .btn.btn-icon-gray-800 i,
  .btn.btn-icon-gray-800 .svg-icon {
    color: var(--kt-text-gray-800);
  }

  .btn.btn-icon-gray-800.dropdown-toggle:after {
    color: var(--kt-text-gray-800);
  }

  .btn-check:checked+.btn.btn-active-icon-gray-800 i,
  .btn-check:checked+.btn.btn-active-icon-gray-800 .svg-icon,
  .btn-check:active+.btn.btn-active-icon-gray-800 i,
  .btn-check:active+.btn.btn-active-icon-gray-800 .svg-icon,
  .btn.btn-active-icon-gray-800:focus:not(.btn-active) i,
  .btn.btn-active-icon-gray-800:focus:not(.btn-active) .svg-icon,
  .btn.btn-active-icon-gray-800:hover:not(.btn-active) i,
  .btn.btn-active-icon-gray-800:hover:not(.btn-active) .svg-icon,
  .btn.btn-active-icon-gray-800:active:not(.btn-active) i,
  .btn.btn-active-icon-gray-800:active:not(.btn-active) .svg-icon,
  .btn.btn-active-icon-gray-800.active i,
  .btn.btn-active-icon-gray-800.active .svg-icon,
  .btn.btn-active-icon-gray-800.show i,
  .btn.btn-active-icon-gray-800.show .svg-icon,
  .show>.btn.btn-active-icon-gray-800 i,
  .show>.btn.btn-active-icon-gray-800 .svg-icon {
    color: var(--kt-text-gray-800);
  }

  .btn-check:checked+.btn.btn-active-icon-gray-800.dropdown-toggle:after,
  .btn-check:active+.btn.btn-active-icon-gray-800.dropdown-toggle:after,
  .btn.btn-active-icon-gray-800:focus:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-icon-gray-800:hover:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-icon-gray-800:active:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-icon-gray-800.active.dropdown-toggle:after,
  .btn.btn-active-icon-gray-800.show.dropdown-toggle:after,
  .show>.btn.btn-active-icon-gray-800.dropdown-toggle:after {
    color: var(--kt-text-gray-800);
  }

  .btn.btn-text-gray-800 {
    color: var(--kt-text-gray-800);
  }

  .btn-check:checked+.btn.btn-active-text-gray-800,
  .btn-check:active+.btn.btn-active-text-gray-800,
  .btn.btn-active-text-gray-800:focus:not(.btn-active),
  .btn.btn-active-text-gray-800:hover:not(.btn-active),
  .btn.btn-active-text-gray-800:active:not(.btn-active),
  .btn.btn-active-text-gray-800.active,
  .btn.btn-active-text-gray-800.show,
  .show>.btn.btn-active-text-gray-800 {
    color: var(--kt-text-gray-800);
  }

  .btn.btn-color-gray-900 {
    color: var(--kt-text-gray-900);
  }

  .btn.btn-color-gray-900 i,
  .btn.btn-color-gray-900 .svg-icon {
    color: var(--kt-text-gray-900);
  }

  .btn.btn-color-gray-900.dropdown-toggle:after {
    color: var(--kt-text-gray-900);
  }

  .btn-check:checked+.btn.btn-active-color-gray-900,
  .btn-check:active+.btn.btn-active-color-gray-900,
  .btn.btn-active-color-gray-900:focus:not(.btn-active),
  .btn.btn-active-color-gray-900:hover:not(.btn-active),
  .btn.btn-active-color-gray-900:active:not(.btn-active),
  .btn.btn-active-color-gray-900.active,
  .btn.btn-active-color-gray-900.show,
  .show>.btn.btn-active-color-gray-900 {
    color: var(--kt-text-gray-900);
  }

  .btn-check:checked+.btn.btn-active-color-gray-900 i,
  .btn-check:checked+.btn.btn-active-color-gray-900 .svg-icon,
  .btn-check:active+.btn.btn-active-color-gray-900 i,
  .btn-check:active+.btn.btn-active-color-gray-900 .svg-icon,
  .btn.btn-active-color-gray-900:focus:not(.btn-active) i,
  .btn.btn-active-color-gray-900:focus:not(.btn-active) .svg-icon,
  .btn.btn-active-color-gray-900:hover:not(.btn-active) i,
  .btn.btn-active-color-gray-900:hover:not(.btn-active) .svg-icon,
  .btn.btn-active-color-gray-900:active:not(.btn-active) i,
  .btn.btn-active-color-gray-900:active:not(.btn-active) .svg-icon,
  .btn.btn-active-color-gray-900.active i,
  .btn.btn-active-color-gray-900.active .svg-icon,
  .btn.btn-active-color-gray-900.show i,
  .btn.btn-active-color-gray-900.show .svg-icon,
  .show>.btn.btn-active-color-gray-900 i,
  .show>.btn.btn-active-color-gray-900 .svg-icon {
    color: var(--kt-text-gray-900);
  }

  .btn-check:checked+.btn.btn-active-color-gray-900.dropdown-toggle:after,
  .btn-check:active+.btn.btn-active-color-gray-900.dropdown-toggle:after,
  .btn.btn-active-color-gray-900:focus:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-color-gray-900:hover:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-color-gray-900:active:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-color-gray-900.active.dropdown-toggle:after,
  .btn.btn-active-color-gray-900.show.dropdown-toggle:after,
  .show>.btn.btn-active-color-gray-900.dropdown-toggle:after {
    color: var(--kt-text-gray-900);
  }

  .btn.btn-icon-gray-900 i,
  .btn.btn-icon-gray-900 .svg-icon {
    color: var(--kt-text-gray-900);
  }

  .btn.btn-icon-gray-900.dropdown-toggle:after {
    color: var(--kt-text-gray-900);
  }

  .btn-check:checked+.btn.btn-active-icon-gray-900 i,
  .btn-check:checked+.btn.btn-active-icon-gray-900 .svg-icon,
  .btn-check:active+.btn.btn-active-icon-gray-900 i,
  .btn-check:active+.btn.btn-active-icon-gray-900 .svg-icon,
  .btn.btn-active-icon-gray-900:focus:not(.btn-active) i,
  .btn.btn-active-icon-gray-900:focus:not(.btn-active) .svg-icon,
  .btn.btn-active-icon-gray-900:hover:not(.btn-active) i,
  .btn.btn-active-icon-gray-900:hover:not(.btn-active) .svg-icon,
  .btn.btn-active-icon-gray-900:active:not(.btn-active) i,
  .btn.btn-active-icon-gray-900:active:not(.btn-active) .svg-icon,
  .btn.btn-active-icon-gray-900.active i,
  .btn.btn-active-icon-gray-900.active .svg-icon,
  .btn.btn-active-icon-gray-900.show i,
  .btn.btn-active-icon-gray-900.show .svg-icon,
  .show>.btn.btn-active-icon-gray-900 i,
  .show>.btn.btn-active-icon-gray-900 .svg-icon {
    color: var(--kt-text-gray-900);
  }

  .btn-check:checked+.btn.btn-active-icon-gray-900.dropdown-toggle:after,
  .btn-check:active+.btn.btn-active-icon-gray-900.dropdown-toggle:after,
  .btn.btn-active-icon-gray-900:focus:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-icon-gray-900:hover:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-icon-gray-900:active:not(.btn-active).dropdown-toggle:after,
  .btn.btn-active-icon-gray-900.active.dropdown-toggle:after,
  .btn.btn-active-icon-gray-900.show.dropdown-toggle:after,
  .show>.btn.btn-active-icon-gray-900.dropdown-toggle:after {
    color: var(--kt-text-gray-900);
  }

  .btn.btn-text-gray-900 {
    color: var(--kt-text-gray-900);
  }

  .btn-check:checked+.btn.btn-active-text-gray-900,
  .btn-check:active+.btn.btn-active-text-gray-900,
  .btn.btn-active-text-gray-900:focus:not(.btn-active),
  .btn.btn-active-text-gray-900:hover:not(.btn-active),
  .btn.btn-active-text-gray-900:active:not(.btn-active),
  .btn.btn-active-text-gray-900.active,
  .btn.btn-active-text-gray-900.show,
  .show>.btn.btn-active-text-gray-900 {
    color: var(--kt-text-gray-900);
  }

  .btn.btn-facebook {
    color: #ffffff;
    border-color: #3b5998;
    background-color: #3b5998;
  }

  .btn.btn-facebook i,
  .btn.btn-facebook .svg-icon {
    color: #ffffff;
  }

  .btn.btn-facebook.dropdown-toggle:after {
    color: #ffffff;
  }

  .btn-check:checked+.btn.btn-facebook,
  .btn-check:active+.btn.btn-facebook,
  .btn.btn-facebook:focus:not(.btn-active),
  .btn.btn-facebook:hover:not(.btn-active),
  .btn.btn-facebook:active:not(.btn-active),
  .btn.btn-facebook.active,
  .btn.btn-facebook.show,
  .show>.btn.btn-facebook {
    border-color: #30497c;
    background-color: #30497c !important;
  }

  .btn.btn-light-facebook {
    color: #3b5998;
    border-color: rgba(59, 89, 152, 0.1);
    background-color: rgba(59, 89, 152, 0.1);
  }

  .btn.btn-light-facebook i,
  .btn.btn-light-facebook .svg-icon {
    color: #3b5998;
  }

  .btn.btn-light-facebook.dropdown-toggle:after {
    color: #3b5998;
  }

  .btn-check:checked+.btn.btn-light-facebook,
  .btn-check:active+.btn.btn-light-facebook,
  .btn.btn-light-facebook:focus:not(.btn-active),
  .btn.btn-light-facebook:hover:not(.btn-active),
  .btn.btn-light-facebook:active:not(.btn-active),
  .btn.btn-light-facebook.active,
  .btn.btn-light-facebook.show,
  .show>.btn.btn-light-facebook {
    color: #ffffff;
    border-color: #3b5998;
    background-color: #3b5998 !important;
  }

  .btn-check:checked+.btn.btn-light-facebook i,
  .btn-check:checked+.btn.btn-light-facebook .svg-icon,
  .btn-check:active+.btn.btn-light-facebook i,
  .btn-check:active+.btn.btn-light-facebook .svg-icon,
  .btn.btn-light-facebook:focus:not(.btn-active) i,
  .btn.btn-light-facebook:focus:not(.btn-active) .svg-icon,
  .btn.btn-light-facebook:hover:not(.btn-active) i,
  .btn.btn-light-facebook:hover:not(.btn-active) .svg-icon,
  .btn.btn-light-facebook:active:not(.btn-active) i,
  .btn.btn-light-facebook:active:not(.btn-active) .svg-icon,
  .btn.btn-light-facebook.active i,
  .btn.btn-light-facebook.active .svg-icon,
  .btn.btn-light-facebook.show i,
  .btn.btn-light-facebook.show .svg-icon,
  .show>.btn.btn-light-facebook i,
  .show>.btn.btn-light-facebook .svg-icon {
    color: #ffffff;
  }

  .btn-check:checked+.btn.btn-light-facebook.dropdown-toggle:after,
  .btn-check:active+.btn.btn-light-facebook.dropdown-toggle:after,
  .btn.btn-light-facebook:focus:not(.btn-active).dropdown-toggle:after,
  .btn.btn-light-facebook:hover:not(.btn-active).dropdown-toggle:after,
  .btn.btn-light-facebook:active:not(.btn-active).dropdown-toggle:after,
  .btn.btn-light-facebook.active.dropdown-toggle:after,
  .btn.btn-light-facebook.show.dropdown-toggle:after,
  .show>.btn.btn-light-facebook.dropdown-toggle:after {
    color: #ffffff;
  }

  .btn.btn-google {
    color: #ffffff;
    border-color: #dd4b39;
    background-color: #dd4b39;
  }

  .btn.btn-google i,
  .btn.btn-google .svg-icon {
    color: #ffffff;
  }

  .btn.btn-google.dropdown-toggle:after {
    color: #ffffff;
  }

  .btn-check:checked+.btn.btn-google,
  .btn-check:active+.btn.btn-google,
  .btn.btn-google:focus:not(.btn-active),
  .btn.btn-google:hover:not(.btn-active),
  .btn.btn-google:active:not(.btn-active),
  .btn.btn-google.active,
  .btn.btn-google.show,
  .show>.btn.btn-google {
    border-color: #cd3623;
    background-color: #cd3623 !important;
  }

  .btn.btn-light-google {
    color: #dd4b39;
    border-color: rgba(221, 75, 57, 0.1);
    background-color: rgba(221, 75, 57, 0.1);
  }

  .btn.btn-light-google i,
  .btn.btn-light-google .svg-icon {
    color: #dd4b39;
  }

  .btn.btn-light-google.dropdown-toggle:after {
    color: #dd4b39;
  }

  .btn-check:checked+.btn.btn-light-google,
  .btn-check:active+.btn.btn-light-google,
  .btn.btn-light-google:focus:not(.btn-active),
  .btn.btn-light-google:hover:not(.btn-active),
  .btn.btn-light-google:active:not(.btn-active),
  .btn.btn-light-google.active,
  .btn.btn-light-google.show,
  .show>.btn.btn-light-google {
    color: #ffffff;
    border-color: #dd4b39;
    background-color: #dd4b39 !important;
  }

  .btn-check:checked+.btn.btn-light-google i,
  .btn-check:checked+.btn.btn-light-google .svg-icon,
  .btn-check:active+.btn.btn-light-google i,
  .btn-check:active+.btn.btn-light-google .svg-icon,
  .btn.btn-light-google:focus:not(.btn-active) i,
  .btn.btn-light-google:focus:not(.btn-active) .svg-icon,
  .btn.btn-light-google:hover:not(.btn-active) i,
  .btn.btn-light-google:hover:not(.btn-active) .svg-icon,
  .btn.btn-light-google:active:not(.btn-active) i,
  .btn.btn-light-google:active:not(.btn-active) .svg-icon,
  .btn.btn-light-google.active i,
  .btn.btn-light-google.active .svg-icon,
  .btn.btn-light-google.show i,
  .btn.btn-light-google.show .svg-icon,
  .show>.btn.btn-light-google i,
  .show>.btn.btn-light-google .svg-icon {
    color: #ffffff;
  }

  .btn-check:checked+.btn.btn-light-google.dropdown-toggle:after,
  .btn-check:active+.btn.btn-light-google.dropdown-toggle:after,
  .btn.btn-light-google:focus:not(.btn-active).dropdown-toggle:after,
  .btn.btn-light-google:hover:not(.btn-active).dropdown-toggle:after,
  .btn.btn-light-google:active:not(.btn-active).dropdown-toggle:after,
  .btn.btn-light-google.active.dropdown-toggle:after,
  .btn.btn-light-google.show.dropdown-toggle:after,
  .show>.btn.btn-light-google.dropdown-toggle:after {
    color: #ffffff;
  }

  .btn.btn-twitter {
    color: #ffffff;
    border-color: #1da1f2;
    background-color: #1da1f2;
  }

  .btn.btn-twitter i,
  .btn.btn-twitter .svg-icon {
    color: #ffffff;
  }

  .btn.btn-twitter.dropdown-toggle:after {
    color: #ffffff;
  }

  .btn-check:checked+.btn.btn-twitter,
  .btn-check:active+.btn.btn-twitter,
  .btn.btn-twitter:focus:not(.btn-active),
  .btn.btn-twitter:hover:not(.btn-active),
  .btn.btn-twitter:active:not(.btn-active),
  .btn.btn-twitter.active,
  .btn.btn-twitter.show,
  .show>.btn.btn-twitter {
    border-color: #0d8ddc;
    background-color: #0d8ddc !important;
  }

  .btn.btn-light-twitter {
    color: #1da1f2;
    border-color: rgba(29, 161, 242, 0.1);
    background-color: rgba(29, 161, 242, 0.1);
  }

  .btn.btn-light-twitter i,
  .btn.btn-light-twitter .svg-icon {
    color: #1da1f2;
  }

  .btn.btn-light-twitter.dropdown-toggle:after {
    color: #1da1f2;
  }

  .btn-check:checked+.btn.btn-light-twitter,
  .btn-check:active+.btn.btn-light-twitter,
  .btn.btn-light-twitter:focus:not(.btn-active),
  .btn.btn-light-twitter:hover:not(.btn-active),
  .btn.btn-light-twitter:active:not(.btn-active),
  .btn.btn-light-twitter.active,
  .btn.btn-light-twitter.show,
  .show>.btn.btn-light-twitter {
    color: #ffffff;
    border-color: #1da1f2;
    background-color: #1da1f2 !important;
  }

  .btn-check:checked+.btn.btn-light-twitter i,
  .btn-check:checked+.btn.btn-light-twitter .svg-icon,
  .btn-check:active+.btn.btn-light-twitter i,
  .btn-check:active+.btn.btn-light-twitter .svg-icon,
  .btn.btn-light-twitter:focus:not(.btn-active) i,
  .btn.btn-light-twitter:focus:not(.btn-active) .svg-icon,
  .btn.btn-light-twitter:hover:not(.btn-active) i,
  .btn.btn-light-twitter:hover:not(.btn-active) .svg-icon,
  .btn.btn-light-twitter:active:not(.btn-active) i,
  .btn.btn-light-twitter:active:not(.btn-active) .svg-icon,
  .btn.btn-light-twitter.active i,
  .btn.btn-light-twitter.active .svg-icon,
  .btn.btn-light-twitter.show i,
  .btn.btn-light-twitter.show .svg-icon,
  .show>.btn.btn-light-twitter i,
  .show>.btn.btn-light-twitter .svg-icon {
    color: #ffffff;
  }

  .btn-check:checked+.btn.btn-light-twitter.dropdown-toggle:after,
  .btn-check:active+.btn.btn-light-twitter.dropdown-toggle:after,
  .btn.btn-light-twitter:focus:not(.btn-active).dropdown-toggle:after,
  .btn.btn-light-twitter:hover:not(.btn-active).dropdown-toggle:after,
  .btn.btn-light-twitter:active:not(.btn-active).dropdown-toggle:after,
  .btn.btn-light-twitter.active.dropdown-toggle:after,
  .btn.btn-light-twitter.show.dropdown-toggle:after,
  .show>.btn.btn-light-twitter.dropdown-toggle:after {
    color: #ffffff;
  }

  .btn.btn-instagram {
    color: #ffffff;
    border-color: #e1306c;
    background-color: #e1306c;
  }

  .btn.btn-instagram i,
  .btn.btn-instagram .svg-icon {
    color: #ffffff;
  }

  .btn.btn-instagram.dropdown-toggle:after {
    color: #ffffff;
  }

  .btn-check:checked+.btn.btn-instagram,
  .btn-check:active+.btn.btn-instagram,
  .btn.btn-instagram:focus:not(.btn-active),
  .btn.btn-instagram:hover:not(.btn-active),
  .btn.btn-instagram:active:not(.btn-active),
  .btn.btn-instagram.active,
  .btn.btn-instagram.show,
  .show>.btn.btn-instagram {
    border-color: #cd1e59;
    background-color: #cd1e59 !important;
  }

  .btn.btn-light-instagram {
    color: #e1306c;
    border-color: rgba(225, 48, 108, 0.1);
    background-color: rgba(225, 48, 108, 0.1);
  }

  .btn.btn-light-instagram i,
  .btn.btn-light-instagram .svg-icon {
    color: #e1306c;
  }

  .btn.btn-light-instagram.dropdown-toggle:after {
    color: #e1306c;
  }

  .btn-check:checked+.btn.btn-light-instagram,
  .btn-check:active+.btn.btn-light-instagram,
  .btn.btn-light-instagram:focus:not(.btn-active),
  .btn.btn-light-instagram:hover:not(.btn-active),
  .btn.btn-light-instagram:active:not(.btn-active),
  .btn.btn-light-instagram.active,
  .btn.btn-light-instagram.show,
  .show>.btn.btn-light-instagram {
    color: #ffffff;
    border-color: #e1306c;
    background-color: #e1306c !important;
  }

  .btn-check:checked+.btn.btn-light-instagram i,
  .btn-check:checked+.btn.btn-light-instagram .svg-icon,
  .btn-check:active+.btn.btn-light-instagram i,
  .btn-check:active+.btn.btn-light-instagram .svg-icon,
  .btn.btn-light-instagram:focus:not(.btn-active) i,
  .btn.btn-light-instagram:focus:not(.btn-active) .svg-icon,
  .btn.btn-light-instagram:hover:not(.btn-active) i,
  .btn.btn-light-instagram:hover:not(.btn-active) .svg-icon,
  .btn.btn-light-instagram:active:not(.btn-active) i,
  .btn.btn-light-instagram:active:not(.btn-active) .svg-icon,
  .btn.btn-light-instagram.active i,
  .btn.btn-light-instagram.active .svg-icon,
  .btn.btn-light-instagram.show i,
  .btn.btn-light-instagram.show .svg-icon,
  .show>.btn.btn-light-instagram i,
  .show>.btn.btn-light-instagram .svg-icon {
    color: #ffffff;
  }

  .btn-check:checked+.btn.btn-light-instagram.dropdown-toggle:after,
  .btn-check:active+.btn.btn-light-instagram.dropdown-toggle:after,
  .btn.btn-light-instagram:focus:not(.btn-active).dropdown-toggle:after,
  .btn.btn-light-instagram:hover:not(.btn-active).dropdown-toggle:after,
  .btn.btn-light-instagram:active:not(.btn-active).dropdown-toggle:after,
  .btn.btn-light-instagram.active.dropdown-toggle:after,
  .btn.btn-light-instagram.show.dropdown-toggle:after,
  .show>.btn.btn-light-instagram.dropdown-toggle:after {
    color: #ffffff;
  }

  .btn.btn-youtube {
    color: #ffffff;
    border-color: #ff0000;
    background-color: #ff0000;
  }

  .btn.btn-youtube i,
  .btn.btn-youtube .svg-icon {
    color: #ffffff;
  }

  .btn.btn-youtube.dropdown-toggle:after {
    color: #ffffff;
  }

  .btn-check:checked+.btn.btn-youtube,
  .btn-check:active+.btn.btn-youtube,
  .btn.btn-youtube:focus:not(.btn-active),
  .btn.btn-youtube:hover:not(.btn-active),
  .btn.btn-youtube:active:not(.btn-active),
  .btn.btn-youtube.active,
  .btn.btn-youtube.show,
  .show>.btn.btn-youtube {
    border-color: #d90000;
    background-color: #d90000 !important;
  }

  .btn.btn-light-youtube {
    color: #ff0000;
    border-color: rgba(255, 0, 0, 0.1);
    background-color: rgba(255, 0, 0, 0.1);
  }

  .btn.btn-light-youtube i,
  .btn.btn-light-youtube .svg-icon {
    color: #ff0000;
  }

  .btn.btn-light-youtube.dropdown-toggle:after {
    color: #ff0000;
  }

  .btn-check:checked+.btn.btn-light-youtube,
  .btn-check:active+.btn.btn-light-youtube,
  .btn.btn-light-youtube:focus:not(.btn-active),
  .btn.btn-light-youtube:hover:not(.btn-active),
  .btn.btn-light-youtube:active:not(.btn-active),
  .btn.btn-light-youtube.active,
  .btn.btn-light-youtube.show,
  .show>.btn.btn-light-youtube {
    color: #ffffff;
    border-color: #ff0000;
    background-color: #ff0000 !important;
  }

  .btn-check:checked+.btn.btn-light-youtube i,
  .btn-check:checked+.btn.btn-light-youtube .svg-icon,
  .btn-check:active+.btn.btn-light-youtube i,
  .btn-check:active+.btn.btn-light-youtube .svg-icon,
  .btn.btn-light-youtube:focus:not(.btn-active) i,
  .btn.btn-light-youtube:focus:not(.btn-active) .svg-icon,
  .btn.btn-light-youtube:hover:not(.btn-active) i,
  .btn.btn-light-youtube:hover:not(.btn-active) .svg-icon,
  .btn.btn-light-youtube:active:not(.btn-active) i,
  .btn.btn-light-youtube:active:not(.btn-active) .svg-icon,
  .btn.btn-light-youtube.active i,
  .btn.btn-light-youtube.active .svg-icon,
  .btn.btn-light-youtube.show i,
  .btn.btn-light-youtube.show .svg-icon,
  .show>.btn.btn-light-youtube i,
  .show>.btn.btn-light-youtube .svg-icon {
    color: #ffffff;
  }

  .btn-check:checked+.btn.btn-light-youtube.dropdown-toggle:after,
  .btn-check:active+.btn.btn-light-youtube.dropdown-toggle:after,
  .btn.btn-light-youtube:focus:not(.btn-active).dropdown-toggle:after,
  .btn.btn-light-youtube:hover:not(.btn-active).dropdown-toggle:after,
  .btn.btn-light-youtube:active:not(.btn-active).dropdown-toggle:after,
  .btn.btn-light-youtube.active.dropdown-toggle:after,
  .btn.btn-light-youtube.show.dropdown-toggle:after,
  .show>.btn.btn-light-youtube.dropdown-toggle:after {
    color: #ffffff;
  }

  .btn.btn-linkedin {
    color: #ffffff;
    border-color: #0077b5;
    background-color: #0077b5;
  }

  .btn.btn-linkedin i,
  .btn.btn-linkedin .svg-icon {
    color: #ffffff;
  }

  .btn.btn-linkedin.dropdown-toggle:after {
    color: #ffffff;
  }

  .btn-check:checked+.btn.btn-linkedin,
  .btn-check:active+.btn.btn-linkedin,
  .btn.btn-linkedin:focus:not(.btn-active),
  .btn.btn-linkedin:hover:not(.btn-active),
  .btn.btn-linkedin:active:not(.btn-active),
  .btn.btn-linkedin.active,
  .btn.btn-linkedin.show,
  .show>.btn.btn-linkedin {
    border-color: #005e8f;
    background-color: #005e8f !important;
  }

  .btn.btn-light-linkedin {
    color: #0077b5;
    border-color: rgba(0, 119, 181, 0.1);
    background-color: rgba(0, 119, 181, 0.1);
  }

  .btn.btn-light-linkedin i,
  .btn.btn-light-linkedin .svg-icon {
    color: #0077b5;
  }

  .btn.btn-light-linkedin.dropdown-toggle:after {
    color: #0077b5;
  }

  .btn-check:checked+.btn.btn-light-linkedin,
  .btn-check:active+.btn.btn-light-linkedin,
  .btn.btn-light-linkedin:focus:not(.btn-active),
  .btn.btn-light-linkedin:hover:not(.btn-active),
  .btn.btn-light-linkedin:active:not(.btn-active),
  .btn.btn-light-linkedin.active,
  .btn.btn-light-linkedin.show,
  .show>.btn.btn-light-linkedin {
    color: #ffffff;
    border-color: #0077b5;
    background-color: #0077b5 !important;
  }

  .btn-check:checked+.btn.btn-light-linkedin i,
  .btn-check:checked+.btn.btn-light-linkedin .svg-icon,
  .btn-check:active+.btn.btn-light-linkedin i,
  .btn-check:active+.btn.btn-light-linkedin .svg-icon,
  .btn.btn-light-linkedin:focus:not(.btn-active) i,
  .btn.btn-light-linkedin:focus:not(.btn-active) .svg-icon,
  .btn.btn-light-linkedin:hover:not(.btn-active) i,
  .btn.btn-light-linkedin:hover:not(.btn-active) .svg-icon,
  .btn.btn-light-linkedin:active:not(.btn-active) i,
  .btn.btn-light-linkedin:active:not(.btn-active) .svg-icon,
  .btn.btn-light-linkedin.active i,
  .btn.btn-light-linkedin.active .svg-icon,
  .btn.btn-light-linkedin.show i,
  .btn.btn-light-linkedin.show .svg-icon,
  .show>.btn.btn-light-linkedin i,
  .show>.btn.btn-light-linkedin .svg-icon {
    color: #ffffff;
  }

  .btn-check:checked+.btn.btn-light-linkedin.dropdown-toggle:after,
  .btn-check:active+.btn.btn-light-linkedin.dropdown-toggle:after,
  .btn.btn-light-linkedin:focus:not(.btn-active).dropdown-toggle:after,
  .btn.btn-light-linkedin:hover:not(.btn-active).dropdown-toggle:after,
  .btn.btn-light-linkedin:active:not(.btn-active).dropdown-toggle:after,
  .btn.btn-light-linkedin.active.dropdown-toggle:after,
  .btn.btn-light-linkedin.show.dropdown-toggle:after,
  .show>.btn.btn-light-linkedin.dropdown-toggle:after {
    color: #ffffff;
  }

  .btn-check[disabled]+.btn,
  .btn-check:disabled+.btn {
    opacity: var(--kt-form-check-btn-check-disabled-opacity);
  }
`;