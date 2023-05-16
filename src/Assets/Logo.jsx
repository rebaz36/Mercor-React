import * as React from 'react';

const Logo = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={46}
    height={46}
    style={{
      transform: 'translate3d(0,0,0)',
      contentVisibility: 'visible',
    }}
  >
    <defs>
      <linearGradient
        id="b"
        x1={-21.01}
        x2={0.289}
        y1={-21.134}
        y2={0.365}
        gradientUnits="userSpaceOnUse"
        spreadMethod="pad"
      >
        <stop offset="0%" stopColor="#2C2C2C" />
        <stop offset="0%" stopColor="#1E1E1E" />
        <stop offset="100%" stopColor="#101010" />
      </linearGradient>
      <clipPath id="a">
        <path d="M0 0h145v46H0z" />
      </clipPath>
    </defs>
    <g clipPath="url(#a)">
      <path
        fill="url(#b)"
        d="M21 0c0 11.59-9.41 21-21 21s-21-9.41-21-21 9.41-21 21-21 21 9.41 21 21z"
        style={{
          display: 'block',
        }}
        transform="matrix(1.09 0 0 1.09 23.082 23.038)"
      />
      <g
        style={{
          display: 'block',
        }}
      >
        <path
          fill="#F1F1EF"
          d="M24.065 18.876a16.638 16.638 0 0 0 1.936-4.286c1.779 3.816 5.648 6.467 10.123 6.467v3.886h-.037c-6.156 0-11.165 5.016-11.165 11.181H21.04v-.002c0-5.63 3.099-10.548 7.679-13.133a15.169 15.169 0 0 1-4.655-4.113zM19.981 31.352c-1.718-3.65-5.352-6.225-9.594-6.417-.17.005-.34.008-.511.008v-3.906c.171 0 .342.003.512.008a11.088 11.088 0 0 0 7.383-3.263 11.108 11.108 0 0 0 3.267-7.906h3.881c0 4.025-1.564 7.807-4.407 10.654a15.134 15.134 0 0 1-3.225 2.464 15.166 15.166 0 0 1 4.639 4.096 16.754 16.754 0 0 0-1.945 4.262z"
        />
      </g>
    </g>
  </svg>
);
export default Logo;
