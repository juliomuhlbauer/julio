import { Box, chakra, ChakraProps, SystemStyleObject } from "@chakra-ui/react";

const animation: SystemStyleObject = {
  animationName: "Gradient",
  animationDuration: "2s",
  animationTimingFunction: "ease-in-out",
  animationDirection: "alternate",
  animationIterationCount: "infinite",
  "@keyframes Gradient": {
    from: { transform: "translateY(0) translateX(0)" },
    to: { transform: "translateY(100px) translateX(50px)" },
  },
};

const BackgroundBlob = (props: ChakraProps) => (
  <>
    <chakra.path
      sx={
        {
          // ...animation,
        }
      }
      fill="#E96B10"
      filter="url(#bg-blob)"
      d="M1268.02 1626.32C1328.83 1723.55 1408.12 1741.72 1408.82 1815.57C1409.69 1907.1 1380.41 2099.23 1343.51 2256.45C1299.02 2446.07 1251.08 2241.58 1163.19 2128.24C1075.29 2014.9 1119.68 2069.72 973.568 1939.31C827.461 1808.9 923.06 1840.6 841.948 1670.79C760.836 1500.97 830.014 1575.27 818.54 1540.38C807.067 1505.48 819.222 1453.68 859.315 1450.4C899.408 1447.12 1045.22 1452.54 1095 1470.57C1144.78 1488.59 1207.2 1529.1 1268.02 1626.32Z"
    />
    <chakra.path
      sx={
        {
          // ...animation,
        }
      }
      fill="#E96B10"
      filter="url(#bg-blob)"
      d="M183.26 1782.21C91.9223 1910.2 -35.1219 2303.86 -87.2269 2484.69C-134.169 2484.6 -228.738 2482.12 -231.483 2472.89C-234.915 2461.37 -239.348 2420.07 -246.857 2316.79C-254.365 2213.51 -250.194 2236.25 -236.536 2134.07C-222.879 2031.88 -228.765 2023.12 -209.62 1943.97C-190.475 1864.82 -115.153 1859.42 -44.5146 1731.75C26.1233 1604.09 14.4081 1546.82 66.7147 1297.18C119.021 1047.55 101.908 1241.19 206.761 1157.56C311.615 1073.92 351.585 1146.01 483.604 1164.21C615.623 1182.41 599.767 1200.99 615.149 1233.39C630.532 1265.79 552.273 1373.82 513.727 1425.2C475.181 1476.58 297.431 1622.22 183.26 1782.21Z"
    />

    <chakra.path
      sx={
        {
          // ...animation,
        }
      }
      fill="#E96B10"
      filter="url(#bg-blob)"
      d="M31.4158 188.018C105.332 113.504 104.951 39.0504 170.6 22.9884C251.982 3.07742 429.301 -11 577.108 -11C755.364 -11 583.178 74.4735 500.565 176.486C417.953 278.499 457.52 227.493 371.865 384.947C286.209 542.402 294.47 450.59 160.117 558.369C25.7634 666.147 77.5046 588.973 48.8078 606.492C20.1109 624.012 -28.5867 624.012 -39.8915 588.973C-51.1963 553.933 -76.8496 422.869 -71.1971 374.746C-65.5447 326.622 -42.5003 262.532 31.4158 188.018Z"
    />

    <chakra.path
      sx={
        {
          // ...animation,
        }
      }
      fill="#E96B10"
      filter="url(#bg-blob)"
      d="M1167.2 430.211C1228.69 285.491 1267.59 -126.327 1279.35 -314.146C1325.2 -324.211 1418.07 -342.238 1422.74 -333.827C1428.59 -323.313 1441.85 -283.952 1471.52 -184.74C1501.18 -85.5283 1492.19 -106.826 1500.96 -4.11002C1509.72 98.6064 1517.37 105.886 1515.79 187.304C1514.22 268.722 1441.85 290.29 1400.49 430.211C1359.14 570.131 1382.96 623.512 1385.88 878.55C1388.81 1133.59 1363.63 940.827 1279.35 1045.16C1195.07 1149.5 1140.45 1087.76 1007.62 1098.54C874.791 1109.33 886.254 1087.76 864.228 1059.45C842.202 1031.14 895.244 908.745 921.765 850.243C948.286 791.74 1090.33 611.11 1167.2 430.211Z"
    />
  </>
);

export const Background = () => {
  return (
    <Box
      inset={0}
      position="absolute"
      overflow="hidden"
      zIndex={-500}
      w="100%"
      h="100%"
      sx={{
        filter: "contrast(300%) brightness(60%)",
        opacity: 0.6,
      }}
    >
      <chakra.svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        width="100%"
        height="100%"
      >
        <chakra.g>
          <rect width="100%" height="100%" fill="#1F1312" />

          <BackgroundBlob />

          <rect
            width="100%"
            height="100%"
            fill="transparent"
            filter="url(#noise)"
            opacity="0.5"
            style={{
              mixBlendMode: "soft-light",
            }}
          ></rect>
        </chakra.g>

        <defs>
          <filter
            id="noise"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
            filterUnits="objectBoundingBox"
            primitiveUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.55"
              numOctaves="2"
              seed="231"
              stitchTiles="stitch"
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              result="turbulence"
            ></feTurbulence>
            <feColorMatrix
              type="saturate"
              values="0"
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              in="turbulence"
              result="colormatrix"
            ></feColorMatrix>
            <feComponentTransfer
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              in="colormatrix"
              result="componentTransfer"
            >
              <feFuncR type="linear" slope="3"></feFuncR>
              <feFuncG type="linear" slope="3"></feFuncG>
              <feFuncB type="linear" slope="3"></feFuncB>
            </feComponentTransfer>
            <feColorMatrix
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              in="componentTransfer"
              result="colormatrix2"
              type="matrix"
              values="1 0 0 0 0
          0 1 0 0 0
          0 0 1 0 0
          0 0 0 19 -11"
            ></feColorMatrix>
          </filter>
          <filter
            id="noise"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
            filterUnits="objectBoundingBox"
            primitiveUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feColorMatrix
              type="saturate"
              values="3"
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              in="SourceGraphic"
              result="colormatrix"
            ></feColorMatrix>
          </filter>

          <filter
            id="bg-blob"
            x="-382.5"
            y="-655.417"
            width="2399.53"
            height="5000.34"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="232"
              result="effect1_foregroundBlur_3_67"
            />
          </filter>
        </defs>
      </chakra.svg>
    </Box>
  );
};
