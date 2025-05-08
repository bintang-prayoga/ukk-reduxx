import prisma from "../../../prisma"; // Adjust the path to your Prisma instance
import crypto from "crypto";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      // Verify the webhook signature (optional but recommended)
      const signature = req.headers["x-trakteer-signature"];
      const payload = JSON.stringify(req.body);
      const secret = process.env.TRAKTEER_WEBHOOK_TOKEN;

      const hash = crypto
        .createHmac("sha256", secret)
        .update(payload)
        .digest("hex");

      if (signature !== hash) {
        return res.status(401).json({ error: "Invalid webhook signature" });
      }

      // Extract data from the webhook payload
      const {
        supporter_name,
        quantity,
        price,
        net_amount,
        transaction_id,
        supporter_message,
      } = req.body;

      console.log("Webhook received:", req.body);

      // Check if the user exists in your database
      const user = await prisma.user.findUnique({
        where: { username: supporter_name }, // Match Trakteer supporter_name with your username field
      });

      if (user) {
        // Upgrade the user's role if they are currently "free" and contributed
        // if (user.role === "free" && quantity > 0) {
        //   await prisma.user.update({
        //     where: { id: user.id },
        //     data: { role: "paid" },
        //   });
        //   console.log(`User ${supporter_name} upgraded to paid.`);
        // } else {
        //   console.log(`User ${supporter_name} already has a paid role.`);
        // }
      } else {
        // console.log(`User ${supporter_name} not found in the database.`);
      }

      res.status(200).json({ message: "Webhook processed successfully" });
    } catch (error) {
      console.error("Error processing webhook:", error);
      res.status(500).json({ error: "Failed to process webhook" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).json({ error: `Method ${req.method} not allowed` });
  }
}
