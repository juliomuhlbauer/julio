import { db } from "@/lib/firebase";
import type { NextApiRequest, NextApiResponse } from "next";

const metrics = async (req: NextApiRequest, res: NextApiResponse) => {
  const metricsData = await db.collection("metrics").get();

  const metrics = Object.assign(
    {},
    ...metricsData.docs.map((doc) => ({ [doc.id]: doc.data() }))
  );

  res.status(200).json(metricsData.docs.map((doc) => doc.data()));
};

export default metrics;
