import "dotenv/config";
import { AdyenBillingService, Invoice } from "./services/adyenBillingService";

const main = async () => {
  const now = new Date(Date.now());
  const invoices: Invoice[] = await AdyenBillingService.calculateInvoices(
    now.getMonth(),
    now.getFullYear()
  );

  invoices.forEach((invoice) =>
    console.log({ amount: invoice.amount, uid: invoice.userId })
  );

  await Promise.all(
    invoices.map(async (invoice) => {
      await AdyenBillingService.takePaymentFromUser(invoice);
    })
  );
};

main();
