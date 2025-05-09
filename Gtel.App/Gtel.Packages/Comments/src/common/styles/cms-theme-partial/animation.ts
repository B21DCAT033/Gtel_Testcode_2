import { css, CSSResult } from '@umbraco-cms/backoffice/external/lit';

export const Animation: CSSResult = css`
  .animation {
    animation-duration: 1s;
    animation-fill-mode: both;
  }

  @keyframes animationSlideInDown {
    from {
      transform: translate3d(0, -100%, 0);
      visibility: visible;
    }

    to {
      transform: translate3d(0, 0, 0);
    }
  }

  .animation-slide-in-down {
    animation-name: animationSlideInDown;
  }

  @keyframes animationSlideInUp {
    from {
      transform: translate3d(0, 100%, 0);
      visibility: visible;
    }

    to {
      transform: translate3d(0, 0, 0);
    }
  }

  .animation-slide-in-up {
    animation-name: animationSlideInUp;
  }

  @keyframes animationFadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  .animation-fade-in {
    animation-name: animationFadeIn;
  }

  @keyframes animationFadeOut {
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
    }
  }

  .animation-fade-out {
    animation-name: animationFadeOut;
  }

  .animation-blink {
    animation: animationBlink 1s steps(5, start) infinite;
  }

  @keyframes animationBlink {
    to {
      visibility: hidden;
    }
  }
`;