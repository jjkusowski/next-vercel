import { RichTextBlock } from "prismic-reactjs";
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
    <div className="py-8 space-y-3 signup">
      <input
        autoCapitalize="off"
        autoCorrect="off"
        className="w-2/3 h-10 px-4 border border-gray-500 rounded-full text-input focus:outline-none focus:border-blue"
        name="PRIMARY_EMAIL_ADDR"
        placeholder={placeholder as string}
        type="email"
      />
      <button
        type="submit"
        onClick={onSubmit}
        className="w-1/3 h-10 mr-2 text-white rounded-full bg-blue disabled:bg-gray-500"
        disabled
      >
        {ctaText}
      </button>
      <Text className="text-xs text-gray-600">
        {legalText as RichTextBlock[]}
      </Text>
    </div>
  );
};

export default SignupForm;
