const STARTER_MONTHLY = "ONL-STARTER-M";
const STARTER_ANNUAL = "ONL-STARTER-A";
const BUSINESS_MONTHLY = "ONL-BUSINESS-M";
const BUSINESS_ANNUAL = "ONL-BUSINESS-A";
const FREE_SKU = "A-MC3-SPK-ONL-FREE";
// const ACTIVE_PRODUCT_CATEGORY_IDS = ["SKU-WBX-UNIFIED"];
// const NON_UNIFIED_PRODUCT_CATEGORY_IDS = ["SKU-ONL-CISCO-WEBEX"];
// const ADDON_RATEPLANS = [
//   "ONL-TNU+I-M",
//   "ONL-CMD-M",
//   "ONL-TNU+I-A",
//   "ONL-CMD-A",
//   "ONL-WXA-M",
//   "ONL-WXA-A",
// ];

const supportedRatePlanSkus = [
  STARTER_MONTHLY,
  STARTER_ANNUAL,
  BUSINESS_ANNUAL,
  BUSINESS_MONTHLY,
  FREE_SKU,
];

/* eslint-disable no-await-in-loop */
const fetchFromCatalog = async (page = null) => {
  const headers = new Headers({
    Authorization: `Bearer ${process.env.WEB_AUTH_TOKEN}`,
  });
  const url = "https://web-authentication-a.wbx2.com/commerce/catalog";
  const resolvedURL = page ? `${url}?page=${page}` : url;

  console.log("fetching from", resolvedURL);

  return fetch(resolvedURL, {
    method: "POST",
    headers,
  });
};

export const getProductCatalog = async () => {
  const catalogRes = await fetchFromCatalog();

  const catalog = await catalogRes.json();

  const { products } = catalog;

  return products;
};

export enum PlanType {
  Annual = "annually",
  Monthly = "monthly",
  Free = "free",
  Enterprise = "enterprise",
}

export enum PlanName {
  FREE = "free",
  STARTER = "starter",
  BUSINESS = "business",
  ENTERPRISE = "enterprise",
}

const ratePlanSuffixMap = {
  [PlanType.Annual]: "-A",
  [PlanType.Monthly]: "-M",
  [PlanType.Free]: "FREE",
};

const ratePlanSuffixReverseMap = {
  [ratePlanSuffixMap[PlanType.Annual]]: PlanType.Annual,
  [ratePlanSuffixMap[PlanType.Monthly]]: PlanType.Monthly,
  [ratePlanSuffixMap[PlanType.Free]]: PlanType.Free,
};

export interface UIRatePlan {
  sku: string;
  price: string;
  planType: PlanType;
  uiKey: PlanName | string;
}

const getSKU = (ratePlan) => {
  return ratePlan.productId__c || "";
};

const getPrice = (ratePlan) => {
  return ratePlan.productRatePlanCharges[0].pricing[0].price;
};

const getPlanType = (ratePlanSku: string) => {
  const ratePlanSuffixes = Object.keys(ratePlanSuffixReverseMap);

  const ratePlanSuffix = ratePlanSuffixes.find((suffix) =>
    ratePlanSku.endsWith(suffix)
  );

  return ratePlanSuffixReverseMap[ratePlanSuffix];
};

const getUIKey = (sku) => {
  switch (sku) {
    case BUSINESS_ANNUAL:
    case BUSINESS_MONTHLY: {
      return PlanName.BUSINESS;
    }
    case STARTER_ANNUAL:
    case STARTER_MONTHLY: {
      return PlanName.STARTER;
    }
    case FREE_SKU: {
      return PlanName.FREE;
    }
    default:
      return "";
  }
};

const sanitizeRatePlan = (ratePlan): UIRatePlan => {
  const sku = getSKU(ratePlan);
  const price = getPrice(ratePlan);
  const planType = getPlanType(sku);
  const uiKey = getUIKey(sku);

  return {
    sku,
    uiKey,
    price,
    planType,
  };
};

export const sortPlansByPrice = (plans) =>
  plans.sort((planA, planB) => planA.price - planB.price);

export const getSanitizedRatePlans = (catalog): UIRatePlan[] => {
  const basePlans = catalog.find((prod) => prod.sku === "ONL-CISCO-WEBEX");

  const supportedRatePlans = basePlans.productRatePlans.filter((ratePlan) =>
    supportedRatePlanSkus.includes(ratePlan.productId__c)
  );

  return supportedRatePlans.map(sanitizeRatePlan);
};

export const getRatePlansByPlanType = (
  allPlans: UIRatePlan[],
  planType: PlanType
): UIRatePlan[] => {
  return allPlans.filter((plan) => plan.planType === planType);
};
