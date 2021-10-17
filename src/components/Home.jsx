import { Redirect } from "react-router";
import { useEffect } from "react";


const Home = ({ loggedIn }) => {

    return <div>

        {loggedIn ? <Redirect to="/countries" /> : <Redirect to="/onlyPagination" />}

    </div>

}

export default Home;