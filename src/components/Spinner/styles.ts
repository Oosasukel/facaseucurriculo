import styled from 'styled-components';

export const Loading = styled.div`
  display: flex;
  min-height: 150px;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

interface SpinnerProps {
  fontSize: number;
}

export const SpinnerContent = styled.div`
  font-size: ${({fontSize}: SpinnerProps) => `${fontSize}px`};
  width: 1em;
  height: 1em;
  border-radius: 50%;
  position: relative;
  text-indent: -9999em;
  -webkit-animation: load5 1.1s infinite ease;
  animation: load5 1.1s infinite ease;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);

  @-webkit-keyframes load5 {
    0%,
    100% {
      box-shadow: 0em -2.6em 0em 0em var(--color-loading), 1.8em -1.8em 0 0em rgba(var(--color-loading), 0.2), 2.5em 0em 0 0em rgba(var(--color-loading), 0.2), 1.75em 1.75em 0 0em rgba(var(--color-loading), 0.2), 0em 2.5em 0 0em rgba(var(--color-loading), 0.2), -1.8em 1.8em 0 0em rgba(var(--color-loading), 0.2), -2.6em 0em 0 0em rgba(var(--color-loading), 0.5), -1.8em -1.8em 0 0em rgba(var(--color-loading), 0.7);
    }
    12.5% {
      box-shadow: 0em -2.6em 0em 0em rgba(var(--color-loading), 0.7), 1.8em -1.8em 0 0em rgb(var(--color-loading)), 2.5em 0em 0 0em rgba(var(--color-loading), 0.2), 1.75em 1.75em 0 0em rgba(var(--color-loading), 0.2), 0em 2.5em 0 0em rgba(var(--color-loading), 0.2), -1.8em 1.8em 0 0em rgba(var(--color-loading), 0.2), -2.6em 0em 0 0em rgba(var(--color-loading), 0.2), -1.8em -1.8em 0 0em rgba(var(--color-loading), 0.5);
    }
    25% {
      box-shadow: 0em -2.6em 0em 0em rgba(var(--color-loading), 0.5), 1.8em -1.8em 0 0em rgba(var(--color-loading), 0.7), 2.5em 0em 0 0em rgb(var(--color-loading)), 1.75em 1.75em 0 0em rgba(var(--color-loading), 0.2), 0em 2.5em 0 0em rgba(var(--color-loading), 0.2), -1.8em 1.8em 0 0em rgba(var(--color-loading), 0.2), -2.6em 0em 0 0em rgba(var(--color-loading), 0.2), -1.8em -1.8em 0 0em rgba(var(--color-loading), 0.2);
    }
    37.5% {
      box-shadow: 0em -2.6em 0em 0em rgba(var(--color-loading), 0.2), 1.8em -1.8em 0 0em rgba(var(--color-loading), 0.5), 2.5em 0em 0 0em rgba(var(--color-loading), 0.7), 1.75em 1.75em 0 0em rgb(var(--color-loading)), 0em 2.5em 0 0em rgba(var(--color-loading), 0.2), -1.8em 1.8em 0 0em rgba(var(--color-loading), 0.2), -2.6em 0em 0 0em rgba(var(--color-loading), 0.2), -1.8em -1.8em 0 0em rgba(var(--color-loading), 0.2);
    }
    50% {
      box-shadow: 0em -2.6em 0em 0em rgba(var(--color-loading), 0.2), 1.8em -1.8em 0 0em rgba(var(--color-loading), 0.2), 2.5em 0em 0 0em rgba(var(--color-loading), 0.5), 1.75em 1.75em 0 0em rgba(var(--color-loading), 0.7), 0em 2.5em 0 0em rgb(var(--color-loading)), -1.8em 1.8em 0 0em rgba(var(--color-loading), 0.2), -2.6em 0em 0 0em rgba(var(--color-loading), 0.2), -1.8em -1.8em 0 0em rgba(var(--color-loading), 0.2);
    }
    62.5% {
      box-shadow: 0em -2.6em 0em 0em rgba(var(--color-loading), 0.2), 1.8em -1.8em 0 0em rgba(var(--color-loading), 0.2), 2.5em 0em 0 0em rgba(var(--color-loading), 0.2), 1.75em 1.75em 0 0em rgba(var(--color-loading), 0.5), 0em 2.5em 0 0em rgba(var(--color-loading), 0.7), -1.8em 1.8em 0 0em rgb(var(--color-loading)), -2.6em 0em 0 0em rgba(var(--color-loading), 0.2), -1.8em -1.8em 0 0em rgba(var(--color-loading), 0.2);
    }
    75% {
      box-shadow: 0em -2.6em 0em 0em rgba(var(--color-loading), 0.2), 1.8em -1.8em 0 0em rgba(var(--color-loading), 0.2), 2.5em 0em 0 0em rgba(var(--color-loading), 0.2), 1.75em 1.75em 0 0em rgba(var(--color-loading), 0.2), 0em 2.5em 0 0em rgba(var(--color-loading), 0.5), -1.8em 1.8em 0 0em rgba(var(--color-loading), 0.7), -2.6em 0em 0 0em rgb(var(--color-loading)), -1.8em -1.8em 0 0em rgba(var(--color-loading), 0.2);
    }
    87.5% {
      box-shadow: 0em -2.6em 0em 0em rgba(var(--color-loading), 0.2), 1.8em -1.8em 0 0em rgba(var(--color-loading), 0.2), 2.5em 0em 0 0em rgba(var(--color-loading), 0.2), 1.75em 1.75em 0 0em rgba(var(--color-loading), 0.2), 0em 2.5em 0 0em rgba(var(--color-loading), 0.2), -1.8em 1.8em 0 0em rgba(var(--color-loading), 0.5), -2.6em 0em 0 0em rgba(var(--color-loading), 0.7), -1.8em -1.8em 0 0em rgb(var(--color-loading));
    }
  }

  @keyframes load5 {
    0%,
    100% {
      box-shadow: 0em -2.6em 0em 0em rgb(var(--color-loading)), 1.8em -1.8em 0 0em rgba(var(--color-loading), 0.2), 2.5em 0em 0 0em rgba(var(--color-loading), 0.2), 1.75em 1.75em 0 0em rgba(var(--color-loading), 0.2), 0em 2.5em 0 0em rgba(var(--color-loading), 0.2), -1.8em 1.8em 0 0em rgba(var(--color-loading), 0.2), -2.6em 0em 0 0em rgba(var(--color-loading), 0.5), -1.8em -1.8em 0 0em rgba(var(--color-loading), 0.7);
    }
    12.5% {
      box-shadow: 0em -2.6em 0em 0em rgba(var(--color-loading), 0.7), 1.8em -1.8em 0 0em rgb(var(--color-loading)), 2.5em 0em 0 0em rgba(var(--color-loading), 0.2), 1.75em 1.75em 0 0em rgba(var(--color-loading), 0.2), 0em 2.5em 0 0em rgba(var(--color-loading), 0.2), -1.8em 1.8em 0 0em rgba(var(--color-loading), 0.2), -2.6em 0em 0 0em rgba(var(--color-loading), 0.2), -1.8em -1.8em 0 0em rgba(var(--color-loading), 0.5);
    }
    25% {
      box-shadow: 0em -2.6em 0em 0em rgba(var(--color-loading), 0.5), 1.8em -1.8em 0 0em rgba(var(--color-loading), 0.7), 2.5em 0em 0 0em rgb(var(--color-loading)), 1.75em 1.75em 0 0em rgba(var(--color-loading), 0.2), 0em 2.5em 0 0em rgba(var(--color-loading), 0.2), -1.8em 1.8em 0 0em rgba(var(--color-loading), 0.2), -2.6em 0em 0 0em rgba(var(--color-loading), 0.2), -1.8em -1.8em 0 0em rgba(var(--color-loading), 0.2);
    }
    37.5% {
      box-shadow: 0em -2.6em 0em 0em rgba(var(--color-loading), 0.2), 1.8em -1.8em 0 0em rgba(var(--color-loading), 0.5), 2.5em 0em 0 0em rgba(var(--color-loading), 0.7), 1.75em 1.75em 0 0em rgb(var(--color-loading)), 0em 2.5em 0 0em rgba(var(--color-loading), 0.2), -1.8em 1.8em 0 0em rgba(var(--color-loading), 0.2), -2.6em 0em 0 0em rgba(var(--color-loading), 0.2), -1.8em -1.8em 0 0em rgba(var(--color-loading), 0.2);
    }
    50% {
      box-shadow: 0em -2.6em 0em 0em rgba(var(--color-loading), 0.2), 1.8em -1.8em 0 0em rgba(var(--color-loading), 0.2), 2.5em 0em 0 0em rgba(var(--color-loading), 0.5), 1.75em 1.75em 0 0em rgba(var(--color-loading), 0.7), 0em 2.5em 0 0em rgb(var(--color-loading)), -1.8em 1.8em 0 0em rgba(var(--color-loading), 0.2), -2.6em 0em 0 0em rgba(var(--color-loading), 0.2), -1.8em -1.8em 0 0em rgba(var(--color-loading), 0.2);
    }
    62.5% {
      box-shadow: 0em -2.6em 0em 0em rgba(var(--color-loading), 0.2), 1.8em -1.8em 0 0em rgba(var(--color-loading), 0.2), 2.5em 0em 0 0em rgba(var(--color-loading), 0.2), 1.75em 1.75em 0 0em rgba(var(--color-loading), 0.5), 0em 2.5em 0 0em rgba(var(--color-loading), 0.7), -1.8em 1.8em 0 0em rgb(var(--color-loading)), -2.6em 0em 0 0em rgba(var(--color-loading), 0.2), -1.8em -1.8em 0 0em rgba(var(--color-loading), 0.2);
    }
    75% {
      box-shadow: 0em -2.6em 0em 0em rgba(var(--color-loading), 0.2), 1.8em -1.8em 0 0em rgba(var(--color-loading), 0.2), 2.5em 0em 0 0em rgba(var(--color-loading), 0.2), 1.75em 1.75em 0 0em rgba(var(--color-loading), 0.2), 0em 2.5em 0 0em rgba(var(--color-loading), 0.5), -1.8em 1.8em 0 0em rgba(var(--color-loading), 0.7), -2.6em 0em 0 0em rgb(var(--color-loading)), -1.8em -1.8em 0 0em rgba(var(--color-loading), 0.2);
    }
    87.5% {
      box-shadow: 0em -2.6em 0em 0em rgba(var(--color-loading), 0.2), 1.8em -1.8em 0 0em rgba(var(--color-loading), 0.2), 2.5em 0em 0 0em rgba(var(--color-loading), 0.2), 1.75em 1.75em 0 0em rgba(var(--color-loading), 0.2), 0em 2.5em 0 0em rgba(var(--color-loading), 0.2), -1.8em 1.8em 0 0em rgba(var(--color-loading), 0.5), -2.6em 0em 0 0em rgba(var(--color-loading), 0.7), -1.8em -1.8em 0 0em rgb(var(--color-loading));
    }
  }
`;