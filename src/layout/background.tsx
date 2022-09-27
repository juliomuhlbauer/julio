import { Box, chakra, SystemStyleObject } from "@chakra-ui/react";
import NextImage from "next/future/image";
import NoiseImg from "public/noise.png";

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

export const Background = () => {
  return (
    <Box
      inset={0}
      position="absolute"
      overflow="hidden"
      zIndex={-500}
      style={{
        filter: "contrast(200%)",
        opacity: 0.75,
      }}
    >
      <Box w="100%" h="100%">
        <chakra.svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="100%"
          height="100%"
          sx={{
            position: "absolute",
          }}
        >
          <chakra.g>
            <chakra.rect width="100%" height="100%" fill="bg" />
            <chakra.path
              sx={{
                ...animation,
              }}
              d="M843.744 29.5302C858.938 15.2693 873.57 0.431793 889.149 -13.4156C914.992 -18.5843 933.537 -17.0042 957.036 -29.2238C982.047 -42.2294 1003.43 -60.2509 1024.75 -78.4052C1056.1 -105.103 1087.82 -132.361 1122.32 -154.9C1177.37 -190.863 1253.43 -206.486 1312.99 -172.728C1347.39 -153.226 1369.02 -122.63 1393.61 -92.9839C1427.11 -52.5938 1459.64 -11.6552 1485.82 34.0092C1503.65 65.0976 1519.7 98.1808 1534.48 130.791C1544.61 153.148 1551.85 174.937 1552.83 199.557C1554.66 245.497 1543.73 288.895 1529.21 332.171C1513.33 379.496 1487.68 416.822 1455.61 454.509C1442.61 469.789 1428.61 484.596 1411.7 495.611C1383.44 514.022 1352.4 526.072 1321.59 539.347C1289.89 553.009 1263.69 569.114 1242.38 596.784C1226.88 616.899 1217.11 640.707 1207.69 664.057C1188.32 712.029 1163.72 756.742 1131.98 797.812C1104.42 833.485 1071.7 862.96 1038.54 893.189C992.215 935.412 953.884 985.412 914.881 1034.23C867.974 1092.95 822.575 1148.72 757.062 1187.66C700.502 1221.28 635.607 1222.56 571.929 1215.41C543.869 1212.27 516.004 1206.21 489.99 1195.04C476.183 1189.11 459.305 1181.18 450.205 1168.52C439.942 1154.23 455.905 1134.71 466.014 1125.48C497.633 1096.63 534.327 1074.05 565.869 1044.86C606.207 1007.53 643.855 968.978 679.425 927.089C714.368 885.939 745.433 842.467 775.153 797.461C796.866 764.583 821.714 732.051 837.772 695.849C850.397 667.385 855.683 638.887 852.087 607.85C847.972 572.328 837.81 538.616 829.428 504.042C816.433 450.438 795.342 398.594 785.165 344.203C774.132 285.234 775.855 225.481 780.071 165.745C782.274 134.544 783.567 98.8215 802.027 72.3004C813.43 55.9189 829.308 43.0798 843.744 29.5302Z"
              fill="#E96B10"
              filter="url(#background)"
            />
            <chakra.path
              sx={{
                ...animation,
              }}
              d="M219 802.5C130.6 744.5 90.5 535.667 81.5 438.5C99.8333 411.167 136.9 354.9 138.5 348.5C140.5 340.5 306 76.5 310.5 65.5C315 54.5 524 -37 530.5 -31C537 -25 449.5 168.5 407 186C364.5 203.5 364.5 242.5 342 337.5C319.5 432.5 374 527 421 696.5C468 866 476.5 838.5 467 883C457.5 927.5 329.5 875 219 802.5Z"
              fill="#E96B10"
              filter="url(#background)"
            />

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
              id="background"
              x="-382.5"
              y="-655.417"
              width="2399.53"
              height="2338.34"
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
    </Box>
  );
};
