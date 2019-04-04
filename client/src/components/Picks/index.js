import React from "react";

function Picks() {
    return (
        <>
            <div class="container" id="leaders">
                <div class="section">

                    <div class="row">
                        <div class="col s12 center">
                            <a id="leagueLeadersClick" class="btn-large waves-effect waves-light teal lighten-1">Leaders</a>
                            <a id="leagueSleeperClick" class="btn-large waves-effect waves-light teal lighten-1">Sleepers</a>
                            <a id="leagueTrendingClick" class="btn-large waves-effect waves-light teal lighten-1">Treading</a>
                            <div id="leagueLeadersDiv"></div>
                            <div id="leagueSleeperDiv"></div>
                            <div id="leagueTreadingDiv"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Picks