import { createIcon } from "@chakra-ui/react";

export const TwinsterIcon = createIcon({
  displayName: "TwinsterIcon",
  viewBox: "0 0 512 512",
  path: (
    <svg
      width={512}
      height={512}
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M379.333 206.667V243.667C379.333 282.919 363.741 320.563 335.985 348.319C308.23 376.074 270.585 391.667 231.333 391.667H71L219 206.667V175.833C219.033 156.359 226.153 137.562 239.032 122.953C251.911 108.345 269.667 98.9241 288.984 96.4504C308.301 93.9768 327.858 98.6195 344.002 109.511C360.146 120.403 371.774 136.799 376.713 155.638L416.333 182L379.333 206.667Z"
        stroke="url(#paint0_linear_3_12)"
        strokeWidth={32}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M311.5 182C321.717 182 330 173.717 330 163.5C330 153.283 321.717 145 311.5 145C301.283 145 293 153.283 293 163.5C293 173.717 301.283 182 311.5 182Z"
        fill="url(#paint1_linear_3_12)"
      />
      <path
        d="M243.667 268.333L182 342.333"
        stroke="url(#paint2_linear_3_12)"
        strokeWidth={32}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="paint0_linear_3_12"
          x1="416.333"
          y1="95.6667"
          x2={71}
          y2="391.667"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#76E4F7" />
          <stop offset={1} stopColor="#00A3C4" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_3_12"
          x1={293}
          y1={182}
          x2={330}
          y2={145}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0BC5EA" />
          <stop offset={1} stopColor="#76E4F7" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_3_12"
          x1="172.75"
          y1="351.583"
          x2="251.889"
          y2="258.056"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#00A3C4" />
          <stop offset={1} stopColor="#0BC5EA" />
        </linearGradient>
      </defs>
    </svg>
  ),
});
