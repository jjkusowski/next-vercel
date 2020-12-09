import { RichTextBlock } from "prismic-reactjs";
import React from "react";
import usePageData from "../../hooks/usePageData";
import resolverFactory from "../../utils/resolverFactory";
import Text from "../Text";

const formDataFields = [
  ["placeholder_text", "placeholder"],
  ["cta_text", "ctaText"],
  ["destination"],
  ["legal_consent_text", "legalText"],
];

const resolver = resolverFactory(formDataFields, "signup_form");

const formActions = {
  "try teams free": (e) => {
    console.log(e);
  },
};

const SignupForm = () => {
  const formData = usePageData(resolver);
  const { placeholder, ctaText, destination, legalText } = formData;

  const onSubmit = formActions[destination as string];

  return (
    <div className="signup space-y-3 py-8">
      <input
        autoCapitalize="off"
        autoCorrect="off"
        className="text-input w-2/3 border rounded-full	px-4 border-gray-500 h-10 focus:outline-none focus:border-blue"
        name="PRIMARY_EMAIL_ADDR"
        placeholder={placeholder as string}
        type="email"
      />
      <button
        type="submit"
        onClick={onSubmit}
        className="w-1/3 mr-2 h-10 rounded-full bg-blue disabled:bg-gray-500 text-white"
        disabled
      >
        {ctaText}
      </button>
      <Text className="text-gray-600 text-xs">
        {legalText as RichTextBlock[]}
      </Text>
    </div>
  );
};

export default SignupForm;
