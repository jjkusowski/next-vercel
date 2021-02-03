import { useIntl } from "react-intl";
import { resources } from "./data";
import links from "../../common/layouts/links";
import { navMessages } from "../../common/layouts/translations";
import Grid from "../Grid";
import NavDropdownItem from "../NavDropdownItem";
import { NavSubmenu } from "./interfaces";

const Resources: NavSubmenu = ({ colorClass }) => {
  const { formatMessage } = useIntl();

  return (
    <div className="pt-6 pb-16 md:pt-12 lg:nav-container xl:w-3/4">
      <Grid
        cols={{ xs: 1, md: 2, lg: 3 }}
        rows={{ lg: 0 }}
        component="ul"
        className="gap-6 lg:gap-12"
      >
        {resources.map((resource) => {
          return (
            <li key={resource.nameKey}>
              <NavDropdownItem
                hoverClass={colorClass}
                label={formatMessage(navMessages[resource.nameKey])}
                href={formatMessage(links[resource.hrefKey])}
                description={formatMessage(
                  navMessages[resource.descriptionKey]
                )}
              />
            </li>
          );
        })}
      </Grid>
    </div>
  );
};

export default Resources;
