import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Layout from "../components/Layout";
import usePageData from "../hooks/usePageData";
import {
  getProductCatalog,
  getRatePlansByPlanType,
  getSanitizedRatePlans,
  PlanName,
  PlanType,
  sortPlansByPrice,
  UIRatePlan,
} from "../lib/subscriptions";
import PageContext from "../state/PageContext";

interface IPricingPageProps {
  plans: {
    monthly: UIRatePlan[];
    annually: UIRatePlan[];
  };
}
type NextPricingPage = NextPage<IPricingPageProps>;

const uiKeyNameMap = {
  [PlanName.FREE]: "Free",
  [PlanName.STARTER]: "Starter",
  [PlanName.BUSINESS]: "Business",
  [PlanName.ENTERPRISE]: "Enterprise",
};

const planTypeStringMap = {
  [PlanType.Annual]: "Annually",
  [PlanType.Monthly]: "Monthly",
};

const ctaStringMap = {
  [PlanName.FREE]: "Get Started",
  [PlanName.ENTERPRISE]: "Contact Sales",
  DEFAULT: "Buy Now",
};

export const getServerSideProps: GetServerSideProps = async () => {
  const catalog = await getProductCatalog();

  const allPlans = getSanitizedRatePlans(catalog);

  const freePlan = getRatePlansByPlanType(allPlans, PlanType.Free);

  const monthlyPlans = [
    ...freePlan,
    ...getRatePlansByPlanType(allPlans, PlanType.Monthly),
  ];

  const annualPlans = [
    ...freePlan,
    ...getRatePlansByPlanType(allPlans, PlanType.Annual),
  ];

  const plans = {
    monthly: sortPlansByPrice(monthlyPlans),
    annually: sortPlansByPrice(annualPlans),
  };

  return {
    props: {
      plans,
    },
  };
};

const getPricePretty = (price) => {
  if (price === 0) return price;

  return price.toFixed(2);
};

const Body = () => {
  const pageData = usePageData<IPricingPageProps>();
  const { plans } = pageData;
  const [planType, setPlanType] = useState(PlanType.Annual);

  const togglePlanType = () => {
    setPlanType((curr) => {
      if (curr === PlanType.Annual) return PlanType.Monthly;
      return PlanType.Annual;
    });
  };

  return (
    <div className="container flex flex-col items-center justify-center w-full">
      <div className="flex flex-col items-center justify-center py-32">
        <h1>Choose a plan that empowers your life and business</h1>
        <div>
          <input
            type="checkbox"
            name="plantype"
            id=""
            onChange={togglePlanType}
          />
          <label htmlFor="plantype" className="ml-2">
            Bill {planTypeStringMap.monthly}
          </label>
        </div>
      </div>
      <div className="grid w-full grid-cols-4">
        {plans[planType].map((plan) => {
          const price =
            planType === PlanType.Annual ? plan.price / 12 : plan.price;

          const prettyPrice = getPricePretty(price);

          return (
            <div
              key={plan.sku}
              className="flex flex-col items-center justify-center"
            >
              <div>{uiKeyNameMap[plan.uiKey]}</div>
              <div>${prettyPrice}</div>
              {/* mocked buttons */}
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a href="#" className="btn-blue">
                {ctaStringMap[plan.uiKey] || ctaStringMap.DEFAULT}
              </a>
            </div>
          );
        })}
        <div className="flex flex-col items-center justify-center">
          <div>{uiKeyNameMap.enterprise}</div>
          <div>Plans for businesses that need a custom Webex experience.</div>
          {/* mocked buttons */}
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#" className="btn-blue">
            {ctaStringMap.enterprise}
          </a>
        </div>
      </div>
      <div className="grid w-full grid-rows-6 gap-4">
        <div className="h-20">Plan Details...</div>
        <div className="h-20">Plan Details...</div>
        <div className="h-20">Plan Details...</div>
        <div className="h-20">Plan Details...</div>
        <div className="h-20">Plan Details...</div>
        <div className="h-20">Plan Details...</div>
      </div>
    </div>
  );
};

const Pricing: NextPricingPage = ({ plans }) => {
  return (
    <PageContext.Provider value={{ plans }}>
      <Head>
        <meta
          name="description"
          content="Check out our new pricing for Webex Meetings and Teams. Select the right plan for your budget and buy Webex today! Pay a low monthly price or get a discount on an annual subscription."
        />
        <meta name="title" content="Cisco Webex Plans and Pricing" />
        <title>Cisco Webex Plans and Pricing</title>
      </Head>
      <Layout>
        <Body />
      </Layout>
    </PageContext.Provider>
  );
};

export default Pricing;
