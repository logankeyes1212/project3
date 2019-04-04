import React from "react";

function Picks() {
    return (
        <>
            <div className="container" id="leaders">
                <div className="section">


                    <div class="row">
                        <div class="col s12 center">
                            <a id="leagueLeadersClick" class="btn-large waves-effect waves-light teal lighten-1">Leaders</a>
                            <a id="leagueSleeperClick" class="btn-large waves-effect waves-light teal lighten-1">Sleepers</a>
                            <a id="leagueTrendingClick" class="btn-large waves-effect waves-light teal lighten-1">Treading<
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