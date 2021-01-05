/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import data from "./footer.json";
import styles from "./footer.module.css";

interface IProps {}
interface IState {
  showList?: string;
  showListPrev?: string;
}
class FooterLinks extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      showList: "",
      showListPrev: "",
    };
    this.hiddenlist = this.hiddenlist.bind(this);
  }

  hiddenchange = () => {
    this.setState({
      showListPrev: this.state.showList,
    });
    if (this.state.showListPrev === this.state.showList) {
      this.setState({ showList: "" });
      this.setState({ showListPrev: "" });
    }
  };

  hiddenlist(name) {
    this.setState({ showList: name }, () => {
      this.hiddenchange();
    });
  }

  render() {
    return (
      <div className="text-center lg:text-left">
        <a
          className="lg:hidden"
          href="https://www.webex.com/"
          aria-label="Cisco Webex logo"
        >
          <span className={`${styles["wf-logo-icon"]}`} />
        </a>
        <div className="flex justify-between flex-wrap mt-8">
          <div
            className={`${styles["width-footer"]} text-white ${styles["wbx-links-wrapper"]}`}
          >
            <div>
              <div
                className={`${styles["footer-category"]} text-base font-normal mb-8 uppercase`}
                onClick={() => this.hiddenlist("solutions")}
              >
                Solutions
              </div>
              {data.solutions.map((s) => (
                <ul
                  className={
                    this.state.showList === "solutions"
                      ? `list-none ${styles["wbx-list"]} block lg:block -mt-4 mb-6 lg:mt-0 lg:mb-0`
                      : `list-none ${styles["wbx-list"]} hidden lg:block -mt-4 mb-6 lg:mt-0 lg:mb-0`
                  }
                  key={s.id}
                >
                  <li className="py-2 text-sm " key={s.id}>
                    <a
                      className="text-sm no-underline font-light"
                      href={s.href}
                      key={s.id}
                    >
                      {s.name}
                    </a>
                  </li>
                </ul>
              ))}
            </div>
          </div>
          <div
            className={`${styles["width-footer"]} text-white ${styles["wbx-links-wrapper"]}`}
          >
            <div>
              <div
                className={`${styles["footer-category"]} text-base font-normal mb-8 uppercase`}
                onClick={() => this.hiddenlist("features")}
              >
                Features
              </div>
              {data.features.map((s) => (
                <ul
                  className={
                    this.state.showList === "features"
                      ? `list-none ${styles["wbx-list"]} block lg:block -mt-4 mb-6 lg:mt-0 lg:mb-0`
                      : `list-none ${styles["wbx-list"]} hidden lg:block -mt-4 mb-6 lg:mt-0 lg:mb-0`
                  }
                  key={s.id}
                >
                  <li className="py-2 text-sm " key={s.id}>
                    <a
                      className="text-sm no-underline font-light"
                      href={s.href}
                      key={s.id}
                    >
                      {s.name}
                    </a>
                  </li>
                </ul>
              ))}
            </div>
          </div>
          <div
            className={`${styles["width-footer"]} text-white ${styles["wbx-links-wrapper"]}`}
          >
            <div>
              <div
                className={`${styles["footer-category"]} text-base font-normal mb-8 uppercase`}
                onClick={() => this.hiddenlist("webexFor")}
              >
                Webex For
              </div>
              {data.webexFor.map((s) => (
                <ul
                  className={
                    this.state.showList === "webexFor"
                      ? `list-none ${styles["wbx-list"]} block lg:block -mt-4 mb-6 lg:mt-0 lg:mb-0`
                      : `list-none ${styles["wbx-list"]} hidden lg:block -mt-4 mb-6 lg:mt-0 lg:mb-0`
                  }
                  key={s.id}
                >
                  <li className="py-2 text-sm " key={s.id}>
                    <a
                      className="text-sm no-underline font-light hover:bg-purple-700"
                      href={s.href}
                      key={s.id}
                    >
                      {s.name}
                    </a>
                  </li>
                </ul>
              ))}
            </div>
          </div>
          <div
            className={`${styles["width-footer"]} text-white ${styles["wbx-links-wrapper"]}`}
          >
            <div>
              <div
                className={`${styles["footer-category"]} text-base font-normal mb-8 uppercase`}
                onClick={() => this.hiddenlist("help")}
              >
                Help/Learning
              </div>
              {data.help.map((s) => (
                <ul
                  className={
                    this.state.showList === "help"
                      ? `list-none ${styles["wbx-list"]} block lg:block -mt-4 mb-6 lg:mt-0 lg:mb-0`
                      : `list-none ${styles["wbx-list"]} hidden lg:block -mt-4 mb-6 lg:mt-0 lg:mb-0`
                  }
                  key={s.id}
                >
                  <li className="py-2 text-sm " key={s.id}>
                    <a
                      className="text-sm no-underline font-light"
                      href={s.href}
                      key={s.id}
                    >
                      {s.name}
                    </a>
                  </li>
                </ul>
              ))}
            </div>
          </div>
          <div
            className={`${styles["width-footer"]} text-white ${styles["wbx-links-wrapper"]}`}
          >
            <div>
              <div
                className={`${styles["footer-category"]} text-base font-normal mb-8 uppercase`}
                onClick={() => this.hiddenlist("company")}
              >
                Company
              </div>
              {data.company.map((s) => (
                <ul
                  className={
                    this.state.showList === "company"
                      ? `list-none ${styles["wbx-list"]} block lg:block -mt-4 mb-6 lg:mt-0 lg:mb-0`
                      : `list-none ${styles["wbx-list"]} hidden lg:block -mt-4 mb-6 lg:mt-0 lg:mb-0`
                  }
                  key={s.id}
                >
                  <li className="py-2 text-sm " key={s.id}>
                    <a
                      className="text-sm no-underline font-light"
                      href={s.href}
                      key={s.id}
                    >
                      {s.name}
                    </a>
                  </li>
                </ul>
              ))}
            </div>
          </div>
        </div>
        <div className={`${styles["wbx-region"]} relative lg:h-8 lg:mt-8`}>
          <div
            className={
              this.state.showList === "region"
                ? `${styles["wbx-region-container"]} lg:absolute right-8 lg:right-12`
                : `${styles["wbx-region-container"]} lg:absolute right-8 ${styles.collapsed} lg:right-12`
            }
            data-wbx-toggle=""
            data-wbx-outside-click=""
            data-wbx-toggle-group="main-menu"
          >
            <a
              className={`${styles["wf-region-name"]} text-sm pr-5 pl-10 relative text-white`}
              data-wbx-toggle-trigger=""
              aria-expanded="false"
              onClick={() => this.hiddenlist("region")}
            >
              India
            </a>

            <ul
              className={
                this.state.showList === "region"
                  ? `${styles["wf-region-list"]} ${styles["region-select-list"]} show`
                  : `${styles["wf-region-list"]} ${styles["region-select-list"]} hidden`
              }
              data-wbx-toggle-popup=""
              aria-hidden="true"
            >
              {data.countries.map((s) => (
                <li data-id={s.dataId} key={s.id}>
                  <a
                    className="lg:text-black text-sm font-normal leading-8"
                    href={s.href}
                    key={s.id}
                  >
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default FooterLinks;
