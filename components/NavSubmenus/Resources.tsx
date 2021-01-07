import data from "./submenu.json";
import styles from "./navbar.module.css";
        
const Resources = () => {
  return (
    <div className="w-auto h-auto lg:fixed left-0 right-0 top-20 pl-0 pt-0 mt-6 bg-white text-left">
      <div
        className={`px-8 lg:px-32 w-full ${styles["border-top"]} relative left-0 mx-auto`}
      >
        <div className="px-0 py-8 md:py-12 list-none flex flex-wrap -mx-12 md:-mx-8">
          <ul className="w-full flex flex-wrap list-none m-0 p-0 font-normal antialiased">
            {data.resources.map((s) => (
              <li
                className="text-sm font-normal px-4 mb-0 w-full md:w-1/2 lg:w-1/3 md:h-40 py-2 md:py-0"
                key={s.id}
              >
                <a
                  className=" text-base lg:text-lg text-black font-light leading-loose"
                  target="_blank"
                  rel="noreferrer"
                  href={s.href}
                  key={s.id}
                  data-click-id={s["data-id"]}
                >
                  {s.name}
                </a>
                <div
                  className={`w-auto font-light max-w-xs	whitespace-pre-line hidden md:block ${styles["devices-tablet"]} ${styles["max-width-devices"]}`}
                  key={s.id}
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
