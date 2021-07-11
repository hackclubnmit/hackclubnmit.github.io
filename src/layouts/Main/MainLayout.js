import React from "react";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import PerfectScrollbar from "perfect-scrollbar";
import Sidebar from "../../components/Sidebar/Sidebar.js";

import routes from "../../routes";

import logo from "../../assets/logo/logo.png"

import MainNavbar from "../../components/Navbars/Navbars"
import Footer from "../../components/Footer/Footer"
var ps;

function MainLayout(props) {
    const location = useLocation();
    const mainPanelRef = React.useRef(null);
    const [sidebarOpened, setsidebarOpened] = React.useState(
      document.documentElement.className.indexOf("nav-open") !== -1
    );
    React.useEffect(() => {
      if (navigator.platform.indexOf("Win") > -1) {
        document.documentElement.className += " perfect-scrollbar-on";
        document.documentElement.classList.remove("perfect-scrollbar-off");
        ps = new PerfectScrollbar(mainPanelRef.current, {
          suppressScrollX: true,
        });
        let tables = document.querySelectorAll(".table-responsive");
        for (let i = 0; i < tables.length; i++) {
          ps = new PerfectScrollbar(tables[i]);
        }
      }
      // Specify how to clean up after this effect:
      return function cleanup() {
        if (navigator.platform.indexOf("Win") > -1) {
          ps.destroy();
          document.documentElement.classList.add("perfect-scrollbar-off");
          document.documentElement.classList.remove("perfect-scrollbar-on");
        }
      };
    });
    React.useEffect(() => {
      if (navigator.platform.indexOf("Win") > -1) {
          // finding class to add perfect scrollbar ; example
        let tables = document.querySelectorAll(".table-responsive");
        for (let i = 0; i < tables.length; i++) {
          ps = new PerfectScrollbar(tables[i]);
        }
      }
      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
      if (mainPanelRef.current) {
        mainPanelRef.current.scrollTop = 0;
      }
    }, [location]);
    // this function opens and closes the sidebar on small devices
    const toggleSidebar = () => {
      document.documentElement.classList.toggle("nav-open");
      setsidebarOpened(!sidebarOpened);
    };
    const getRoutes = (routes) => {
      return routes.map((prop, key) => {
        // if (prop.layout === "/Main") {
          return (
            <Route
              path={ prop.path}
              component={prop.component}
              key={key}
            />
          );
        // } else {
        //   return null;
        // }
      });
    };
    const getBrandText = (path) => {
      for (let i = 0; i < routes.length; i++) {
        if (location.pathname.indexOf( routes[i].path) !== -1) {
          return routes[i].name;
        }
      }
      return "Brand";
    };
    return (
      
          <React.Fragment>
            <div className="wrapper">
              <Sidebar
                routes={routes}
                logo={{
                  outterLink: "#",
                  text: "Call It Out",
                  imgSrc: logo,
                }}
                toggleSidebar={toggleSidebar}
              />
              <div className="main-panel" ref={mainPanelRef} >
                <MainNavbar
                  brandText={getBrandText(location.pathname)}
                  toggleSidebar={toggleSidebar}
                  sidebarOpened={sidebarOpened}
                />
                {/* Auth logic here */}
                <Switch>
                  {getRoutes(routes)}
                  {/* <Redirect from="*" to="/" /> */}
                </Switch>
                {
                  // we don't want the Footer to be rendered on map page
                  location.pathname === "/maps" ? null : <Footer fluid />
                }
              </div>
            </div>
            {/* <FixedPlugin bgColor={color} handleBgClick={changeColor} /> */}
          </React.Fragment>
    );
  }
  
  export default MainLayout;
