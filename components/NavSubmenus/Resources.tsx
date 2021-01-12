import data from "./submenu.json";
import styles from "./navbar.module.css";

const Resources = () => {
  return (
    <div className="left-0 right-0 w-auto h-auto pt-0 pl-0 mt-6 text-left bg-white lg:fixed top-20">
      <div
        className={`px-8 lg:px-32 w-full ${styles["border-top"]} relative left-0 mx-auto`}
      >
        <div className="flex flex-wrap px-0 py-8 -mx-12 list-none md:py-12 md:-mx-8">
          <ul className="flex flex-wrap w-full p-0 m-0 antialiased font-normal list-none">
            {data.resources.map((s) => (
              <li
                className="w-full px-4 py-2 mb-0 text-sm font-normal md:w-1/2 lg:w-1/3 md:h-40 md:py-0"
                key={s.id}
              >
                <a
                  className="text-base font-light leading-loose text-black lg:text-lg"
                  target="_blank"
                  rel="noreferrer"
                  href={s.href}
                  data-click-id={s["data-id"]}
                >
                  {s.name}
                </a>
                <div
                  className={`w-auto font-light max-w-xs	whitespace-pre-line hidden md:block ${styles["devices-tablet"]} ${styles["max-width-devices"]}`}
                >
                  {s.description}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resources;
