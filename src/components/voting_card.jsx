import React, { useState, useEffect } from "react";
import langs_json from "../data/data.json";

function VotingCard(props) {
    let { lang } = props;
    let [langs, setLangs] = useState([]);



    function incrementVoteCount(langId) {
        langs = langs.map((lang_voted) => {
            if (lang_voted._id === langId) {
                lang_voted.votes = lang_voted.votes + 1;
            }
            return lang_voted;
        });
        setLangs(langs);
    }
    useEffect(() => {
        setLangs(langs_json);
    }, []);

    return (
        <div class="circle">

            <div className="cards">
                <div className="card">
                    <img src={`/assets/${lang.logo}`} alt={"Programming Language"} style={{ width: "100%" }} />
                    <div className="card__info">
                        <span className="card__category">{lang.name}</span>
                        <button variant="success" onClick={() => incrementVoteCount(lang._id)}>
                            Vote
        </button>
                        <h3 className="card__title">Vote count: {lang.votes}</h3>

                    </div>
                </div>
            </div>
        </div>
    );
}
export default VotingCard;