import React from "react";

function Picks() {
    return (
        <>
            <div className="container" id="leaders">
                <div className="section">

                    <div className="row">
                        <div className="col s12 center">
                            <a id="leagueLeadersClick" className="btn-large waves-effect waves-light teal lighten-1">Leaders</a>
                            <a id="leagueSleeperClick" className="btn-large waves-effect waves-light teal lighten-1">Sleepers</a>
                            <a id="leagueTrendingClick" className="btn-large waves-effect waves-light teal lighten-1">Trending</a>
                            <div id="leagueLeadersDiv"></div>
                            <div id="leagueSleeperDiv"></div>
                            <div id="leagueTrendingDiv"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Picks