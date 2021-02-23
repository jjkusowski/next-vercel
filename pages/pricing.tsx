import Head from "next/head";
import { useState } from "react";
import Layout from "../components/Layout";
import usePageData from "../hooks/usePageData";
import PageContext from "../state/PageContext";

enum PlanType {
  Annual = "annually",
  Monthly = "monthly",
}

const uiKeyNameMap = {
  free: "Free",
  starter: "Starter",
  business: "Business",
  enterprise: "Enterprise",
};

const planTypeStringMap = {
  [PlanType.Annual]: "Annually",
  [PlanType.Monthly]: "Monthly",
};

const ctaStringMap = {
  free: "Get Started",
  enterprise: "Contact Sales",
  DEFAULT: "Buy Now",
};

export const getServerSideProps = async (context) => {
  const res = await fetch(`http://localhost:3000/api/pricing`);
  const plans = await res.json();

  return {
    props: {
      plans,
    },
  };
};

const Body = () => {
  const pageData = usePageData();
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
            Bill {planTypeStringMap[planType]}
          </label>
        </div>
      </div>
      <div className="grid w-full grid-cols-4">
        {plans[planType].map((plan) => {
          return (
            <div
              key={plan.sku}
              className="flex flex-col items-center justify-center"
            >
              <div>{uiKeyNameMap[plan.uiKey]}</div>
              <div>${plan.price}</div>
              {/* mocked buttons */}
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a href="#" className="btn-blue">
                {ctaStringMap[plan.uiKey] || ctaStringMap.DEFAULT}
              </a>
            </div>
          );
        })}
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

const Pricing = ({ plans }) => {
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
