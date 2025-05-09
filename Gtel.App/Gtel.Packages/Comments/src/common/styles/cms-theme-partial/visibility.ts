import { css, CSSResult } from '@umbraco-cms/backoffice/external/lit';

export const Visibility: CSSResult = css`
  .text-white {
    --bs-text-opacity: 1;
    color: rgba(var(--bs-white-rgb), var(--bs-text-opacity)) !important;
  }

  .text-light {
    --bs-text-opacity: 1;
    color: rgba(var(--bs-light-rgb), var(--bs-text-opacity)) !important;
  }

  .text-primary {
    --bs-text-opacity: 1;
    color: rgba(var(--bs-primary-rgb), var(--bs-text-opacity)) !important;
  }

  .text-secondary {
    --bs-text-opacity: 1;
    color: rgba(var(--bs-secondary-rgb), var(--bs-text-opacity)) !important;
  }

  .text-success {
    --bs-text-opacity: 1;
    color: rgba(var(--bs-success-rgb), var(--bs-text-opacity)) !important;
  }

  .text-info {
    --bs-text-opacity: 1;
    color: rgba(var(--bs-info-rgb), var(--bs-text-opacity)) !important;
  }

  .text-warning {
    --bs-text-opacity: 1;
    color: rgba(var(--bs-warning-rgb), var(--bs-text-opacity)) !important;
  }

  .text-danger {
    --bs-text-opacity: 1;
    color: rgba(var(--bs-danger-rgb), var(--bs-text-opacity)) !important;
  }

  .text-dark {
    --bs-text-opacity: 1;
    color: rgba(var(--bs-dark-rgb), var(--bs-text-opacity)) !important;
  }

  .text-black {
    --bs-text-opacity: 1;
    color: rgba(var(--bs-black-rgb), var(--bs-text-opacity)) !important;
  }

  .text-body {
    --bs-text-opacity: 1;
    color: rgba(var(--bs-body-color-rgb), var(--bs-text-opacity)) !important;
  }

  .text-muted {
    --bs-text-opacity: 1;
    color: #A1A5B7 !important;
  }

  .text-black-50 {
    --bs-text-opacity: 1;
    color: rgba(0, 0, 0, 0.5) !important;
  }

  .text-white-50 {
    --bs-text-opacity: 1;
    color: rgba(255, 255, 255, 0.5) !important;
  }

  .text-reset {
    --bs-text-opacity: 1;
    color: inherit !important;
  }

  .text-opacity-25 {
    --bs-text-opacity: 0.25;
  }

  .text-opacity-50 {
    --bs-text-opacity: 0.5;
  }

  .text-opacity-75 {
    --bs-text-opacity: 0.75;
  }

  .text-opacity-100 {
    --bs-text-opacity: 1;
  }

  .bg-white {
    --bs-bg-opacity: 1;
    background-color: rgba(var(--bs-white-rgb), var(--bs-bg-opacity)) !important;
  }

  .bg-light {
    --bs-bg-opacity: 1;
    background-color: rgba(var(--bs-light-rgb), var(--bs-bg-opacity)) !important;
  }

  .bg-primary {
    --bs-bg-opacity: 1;
    background-color: rgba(var(--bs-primary-rgb), var(--bs-bg-opacity)) !important;
  }

  .bg-secondary {
    --bs-bg-opacity: 1;
    background-color: rgba(var(--bs-secondary-rgb), var(--bs-bg-opacity)) !important;
  }

  .bg-success {
    --bs-bg-opacity: 1;
    background-color: rgba(var(--bs-success-rgb), var(--bs-bg-opacity)) !important;
  }

  .bg-info {
    --bs-bg-opacity: 1;
    background-color: rgba(var(--bs-info-rgb), var(--bs-bg-opacity)) !important;
  }

  .bg-warning {
    --bs-bg-opacity: 1;
    background-color: rgba(var(--bs-warning-rgb), var(--bs-bg-opacity)) !important;
  }

  .bg-danger {
    --bs-bg-opacity: 1;
    background-color: rgba(var(--bs-danger-rgb), var(--bs-bg-opacity)) !important;
  }

  .bg-dark {
    --bs-bg-opacity: 1;
    background-color: rgba(var(--bs-dark-rgb), var(--bs-bg-opacity)) !important;
  }

  .bg-black {
    --bs-bg-opacity: 1;
    background-color: rgba(var(--bs-black-rgb), var(--bs-bg-opacity)) !important;
  }

  .bg-body {
    --bs-bg-opacity: 1;
    background-color: rgba(var(--bs-body-bg-rgb), var(--bs-bg-opacity)) !important;
  }

  .bg-transparent {
    --bs-bg-opacity: 1;
    background-color: transparent !important;
  }

  .bg-opacity-10 {
    --bs-bg-opacity: 0.1;
  }

  .bg-opacity-25 {
    --bs-bg-opacity: 0.25;
  }

  .bg-opacity-50 {
    --bs-bg-opacity: 0.5;
  }

  .bg-opacity-75 {
    --bs-bg-opacity: 0.75;
  }

  .bg-opacity-100 {
    --bs-bg-opacity: 1;
  }

  .bg-gradient {
    background-image: var(--bs-gradient) !important;
  }

  .user-select-all {
    user-select: all !important;
  }

  .user-select-auto {
    user-select: auto !important;
  }

  .user-select-none {
    user-select: none !important;
  }

  .pe-none {
    pointer-events: none !important;
  }

  .pe-auto {
    pointer-events: auto !important;
  }

  .rounded {
    border-radius: 0.475rem !important;
  }

  .rounded-0 {
    border-radius: 0 !important;
  }

  .rounded-1 {
    border-radius: 0.425rem !important;
  }

  .rounded-2 {
    border-radius: 0.475rem !important;
  }

  .rounded-3 {
    border-radius: 0.625rem !important;
  }

  .rounded-4 {
    border-radius: 1rem !important;
  }

  .rounded-circle {
    border-radius: 50% !important;
  }

  .rounded-pill {
    border-radius: 50rem !important;
  }

  .rounded-top {
    border-top-left-radius: var(--bs-border-radius) !important;
    border-top-right-radius: var(--bs-border-radius) !important;
  }

  .rounded-end {
    border-top-right-radius: var(--bs-border-radius) !important;
    border-bottom-right-radius: var(--bs-border-radius) !important;
  }

  .rounded-bottom {
    border-bottom-right-radius: var(--bs-border-radius) !important;
    border-bottom-left-radius: var(--bs-border-radius) !important;
  }

  .rounded-start {
    border-bottom-left-radius: var(--bs-border-radius) !important;
    border-top-left-radius: var(--bs-border-radius) !important;
  }

  .visible {
    visibility: visible !important;
  }

  .invisible {
    visibility: hidden !important;
  }

  .opacity-0 {
    opacity: 0 !important;
  }

  .opacity-0-hover:hover {
    opacity: 0 !important;
  }

  .opacity-5 {
    opacity: 0.05 !important;
  }

  .opacity-5-hover:hover {
    opacity: 0.05 !important;
  }

  .opacity-10 {
    opacity: 0.1 !important;
  }

  .opacity-10-hover:hover {
    opacity: 0.1 !important;
  }

  .opacity-15 {
    opacity: 0.15 !important;
  }

  .opacity-15-hover:hover {
    opacity: 0.15 !important;
  }

  .opacity-20 {
    opacity: 0.2 !important;
  }

  .opacity-20-hover:hover {
    opacity: 0.2 !important;
  }

  .opacity-25 {
    opacity: 0.25 !important;
  }

  .opacity-25-hover:hover {
    opacity: 0.25 !important;
  }

  .opacity-50 {
    opacity: 0.5 !important;
  }

  .opacity-50-hover:hover {
    opacity: 0.5 !important;
  }

  .opacity-75 {
    opacity: 0.75 !important;
  }

  .opacity-75-hover:hover {
    opacity: 0.75 !important;
  }

  .opacity-100 {
    opacity: 1 !important;
  }

  .opacity-100-hover:hover {
    opacity: 1 !important;
  }

  .z-index-n1 {
    z-index: -1 !important;
  }

  .z-index-n2 {
    z-index: -2 !important;
  }

  .z-index-0 {
    z-index: 0 !important;
  }

  .z-index-1 {
    z-index: 1 !important;
  }

  .z-index-2 {
    z-index: 2 !important;
  }

  .z-index-3 {
    z-index: 3 !important;
  }

  .border-top-0 {
    border-top-width: 0 !important;
  }

  .border-top-1 {
    border-top-width: 1px !important;
  }

  .border-top-2 {
    border-top-width: 2px !important;
  }

  .border-top-3 {
    border-top-width: 3px !important;
  }

  .border-top-4 {
    border-top-width: 4px !important;
  }

  .border-top-5 {
    border-top-width: 5px !important;
  }

  .border-bottom-0 {
    border-bottom-width: 0 !important;
  }

  .border-bottom-1 {
    border-bottom-width: 1px !important;
  }

  .border-bottom-2 {
    border-bottom-width: 2px !important;
  }

  .border-bottom-3 {
    border-bottom-width: 3px !important;
  }

  .border-bottom-4 {
    border-bottom-width: 4px !important;
  }

  .border-bottom-5 {
    border-bottom-width: 5px !important;
  }

  .border-right-0 {
    border-right-width: 0 !important;
  }

  .border-right-1 {
    border-right-width: 1px !important;
  }

  .border-right-2 {
    border-right-width: 2px !important;
  }

  .border-right-3 {
    border-right-width: 3px !important;
  }

  .border-right-4 {
    border-right-width: 4px !important;
  }

  .border-right-5 {
    border-right-width: 5px !important;
  }

  .border-left-0 {
    border-left-width: 0 !important;
  }

  .border-left-1 {
    border-left-width: 1px !important;
  }

  .border-left-2 {
    border-left-width: 2px !important;
  }

  .border-left-3 {
    border-left-width: 3px !important;
  }

  .border-left-4 {
    border-left-width: 4px !important;
  }

  .border-left-5 {
    border-left-width: 5px !important;
  }
`;