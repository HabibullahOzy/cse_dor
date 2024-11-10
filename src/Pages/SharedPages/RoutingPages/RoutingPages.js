import { createBrowserRouter } from "react-router-dom";
import Main from "../../../Outlet/PageOutlet/Main";
import Home from "../../FixedPages/Home/Home";
import Mission from "../../FixedPages/About/Mission/Mission";
import Team from "../../FixedPages/About/OurTeam/Team";
import Resources from "../../FixedPages/About/Resourches/Resources";
import Collaborating from "../../FixedPages/RNetworking/CollaboratingR/Collaborating";
import SouceOfPublication from "../../FixedPages/RNetworking/SOP/SouceOfPublication";
import CseSLab from "../../FixedPages/CseSLab/CseSLab";
import Volumeone from "../../FixedPages/ResearchUpdate/Volumeone/Volumeone";
import Rankings from "../../FixedPages/Rankings/Rankings";
import Publications from "../../FixedPages/Publication/Publications/Publications";
import Conference from "../../FixedPages/PublishingAgreements/Conference/Conference";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [{
            path: "/",
            element: <Home></Home>,
        },
        {
            path: "/mission",
            element: <Mission></Mission>
        },
        {
            path: "/ourteam",
            element: <Team></Team>
        },
        {
            path: "/resouces",
            element: <Resources></Resources>
        },
        {
            path: "/collaborating",
            element: <Collaborating></Collaborating>
        },
        {
            path: "/sourceofpublication",
            element: <SouceOfPublication></SouceOfPublication>
        },
        {
            path: "/csespecializedlab",
            element: <CseSLab></CseSLab>
        },
        {
            path: "/volumone",
            element: <Volumeone></Volumeone>
        },
        {
            path: "/ranking",
            element: <Rankings></Rankings>
        },
        {
            path: "/publications",
            element: <Publications></Publications>
        },
        {
            path: "/conference",
            element: <Conference></Conference>
        }
        
        ]
    }
])

export default router;