import Text from "../Text";
import { InPageMenuUIComponent } from "./interfaces";

const InPageMenuUI: InPageMenuUIComponent = (props) => {
  const { primary, items } = props;
  const { text } = primary;

  return (
    <section className="container py-10">
      <div className="p-4 space-y-6 bg-white md:grid md:grid-cols-4">
        <Text className="w-3/4 leading-tight md:w-full md:col-span-1 md:p-6">
          {text}
        </Text>
        <ul className="block md:col-span-3">
          {items.map((item) => (
            <li className="flex" key={item.target_id}>
              <div className="self-center w-6 h-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <a
                className="flex justify-between flex-grow py-4 ml-6 no-underline border-b"
                href={`#${item.target_id}`}
              >
                <Text>{item.text}</Text>
                <div className="self-center w-6 h-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 17l-4 4m0 0l-4-4m4 4V3"
                    />
                  </svg>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default InPageMenuUI;
