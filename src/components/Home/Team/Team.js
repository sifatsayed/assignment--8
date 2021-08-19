import React from 'react';
import { useHistory } from 'react-router-dom';
import './Team.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'

const Team = (props) => {
    const {strTeamBadge,strTeam,strStadiumLocation,idTeam} = props.team
    const history = useHistory();
    const handleClick = (id) =>{
        const url = `/team/${id}`
        history.push(url)
    }
    return (
        <div>
            
            <div className="teams">
            <div className="team-container">
            <img src={strTeamBadge} alt="" />
            <h4>{strTeam}</h4>
            <p><small>{strStadiumLocation}</small></p>
            <button onClick={()=> handleClick(idTeam)} className ="main-button">
             Explore  <FontAwesomeIcon icon={faLongArrowAltRight} />
                </button>
            </div>
            </div>
        </div>
    );
};

export default Team;