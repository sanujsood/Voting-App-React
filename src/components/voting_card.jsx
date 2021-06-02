import React from "react";

function VotingCard(props) {
    let { lang, incrementVoteCount } = props;

    return (
        <div class="circle">

            <div className="cards">
                <div className="card">
                    <img src={`/assets/${lang.logo}`} style={{ width: "100%" }} />
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