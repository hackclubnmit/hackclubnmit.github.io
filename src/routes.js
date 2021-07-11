import Home from "./views/Home"
import Events from "./views/Events"
import Gallery from "./views/Gallery"

var routes = [
    {
        path: "/home",
        name: "Home",
        icon: "",
        component: Home,
        layout: "/main"
    },
    {
        path: "/events",
        name: "Events",
        icon: "",
        component: Events,
        layout: "/main" 
    },
    {
        path: "/gallery",
        name: "Gallery",
        icon: "",
        component: Gallery,
        layout: "/main" 
    }
];
export default routes;
