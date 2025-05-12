import prisma from "../prisma"; // Adjust the path to your Prisma instance
import getSubscription from "./getSubscription";

export default async function getOneSubscription(req, res) {
  const { id } = req.query;

  try {
    const allSubscription = await getSubscription();

    const findUser = await prisma.user.findUnique({
      where: {
        id: id,
      },
    });

    //   call subscription API and find the user email
    const findSubscription = allSubscription.find(
      (sub) => sub.supporter_email === findUser.email
    );

    if (!findSubscription) {
      return res.status(404).json({ message: "Subscription not found" });
    }

    // return findSubscription data as an array of objects
    const subscriptionData = {
      supporter_name: findSubscription.supporter_name,
      supporter_message: findSubscription.supporter_message,
      quantity: findSubscription.quantity,
      amount: findSubscription.amount,
      amount: findSubscription.amount,
      unit_name: findSubscription.unit_name,
      date: findSubscription.updated_at,
      order_id: findSubscription.order_id,
      supporter_email: findSubscription.supporter_email,
    };
    // Convert the subscriptionData object to an object
    const subscriptionArray = [subscriptionData];

    return JSON.parse(JSON.stringify(subscriptionArray));
  } catch (error) {
    console.error("Error fetching subscription:", error);
  }
}
