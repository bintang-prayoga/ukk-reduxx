import prisma from "../prisma"; // Adjust the path to your Prisma instance
import getSubscription from "./getSubscription";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      // Fetch the subscription data from Trakteer API
      const subscriptionData = await getSubscription();

      // Check if the subscription data is empty
      if (subscriptionData.length === 0) {
        return res.status(404).json({ error: "No subscription data found" });
      }

      // Find the subscription with the matching transaction ID
      const subscription = subscriptionData.find(
        (sub) => sub.order_id === req.body.transaction_id
      );

      console.log(
        "Subscription data:",
        subscriptionData.find((sub) => sub.order_id === req.body.transaction_id)
      );

      // Update the user role in the database using Prisma
      await prisma.user.update({
        where: { email: subscription.supporter_email },
        data: {
          role: "paid",
        },
      });

      return res
        .status(200)
        .json({ message: "User role updated successfully" });
    } catch (error) {
      console.error("Error updating user role:", error);
      return res.status(500).json({ error: "Failed to update user role" });
    }
  } else {
    // Handle unsupported methods
    return res.status(405).json({ error: "Method not allowed" });
  }
}
