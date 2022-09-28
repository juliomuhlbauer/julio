import { quotes } from "@/data/quotes";
import type { NextApiRequest, NextApiResponse } from "next";

const quote = async (req: NextApiRequest, res: NextApiResponse) => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  res.status(200).json(randomQuote);
};

export default quote;
