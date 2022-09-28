import { db } from "@/lib/firebase";
import { Stack, Stat, StatLabel, StatNumber } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import { FC } from "react";

const MetricsPage: FC<{
  metrics: {
    label: number;
    value: string;
  }[];
}> = ({ metrics }) => {
  return (
    <>
      <NextSeo title="Metrics" />
      <Stack as="section" spacing={8}>
        {metrics.map((metric, index) => (
          <Stat key={index}>
            <StatLabel>{metric.label}</StatLabel>
            <StatNumber>{metric.value}</StatNumber>
          </Stat>
        ))}
      </Stack>
    </>
  );
};

export default MetricsPage;

export const getStaticProps: GetStaticProps = async () => {
  const metricsData = await db.collection("metrics").get();

  const metrics = metricsData.docs.map((doc) => {
    return {
      label: doc.id,
      value: doc.data().number,
    };
  });

  return {
    props: {
      metrics,
    },
  };
};
