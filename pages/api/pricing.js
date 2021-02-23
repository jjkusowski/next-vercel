const plans = {
  monthly: [
    {
      sku: "free",
      price: "0",
      uiKey: "free",
    },
    {
      sku: "starter",
      price: "14.95",
      uiKey: "starter",
    },
    {
      sku: "business",
      price: "29.95",
      uiKey: "business",
    },
    {
      sku: "enterprise",
      price: null,
      uiKey: "enterprise",
    },
  ],
  annually: [
    {
      sku: "annual-free",
      price: "0",
      uiKey: "free",
    },
    {
      sku: "annual-starter",
      price: "13.50",
      uiKey: "starter",
    },
    {
      sku: "annual-business",
      price: "26.95",
      uiKey: "business",
    },
    {
      sku: "enterprise",
      price: null,
      uiKey: "enterprise",
    },
  ],
};

export default (req, res) => {
  res.statusCode = 200;
  res.json(plans);
};
