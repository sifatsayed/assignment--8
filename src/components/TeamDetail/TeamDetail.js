import React from 'react';
import { useParams } from 'react-router-dom';
import  {useEffect, useState} from 'react';
import './TeamDetail.css'
const TeamDetail = () => {
    const {idTeam} = useParams();
    const [teamDetail ,setTeamDetail] = useState([])
    useEffect(() =>{
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${idTeam}`)
        .then(res => res.json())
        .then(data => setTeamDetail(data.teams[0]))
    } ,[])

    return (
        <div>
            <div className="banner-img">
                <img src={teamDetail.strTeamBanner} alt="" />
            </div>
            <br />
            <div className="team-info">
            <div>
            <h2>{teamDetail.strLeague}</h2>
            <p>Founded : {teamDetail.intFormedYear}</p>
            <p> Country : {teamDetail.strCountry}</p>
            <p> Sports Type : {teamDetail.strSport}</p>
            <p> Gender : {teamDetail.strGender}</p>
            </div>
            <div>
            <img src={teamDetail.strTeamFanart1} alt="" />
            </div>
            </div>
            <br />
            <div className="team-description">
                <p><small>{teamDetail.strDescriptionDE}</small></p>
                <br />
                <p><small>{teamDetail.strDescriptionEN}</small></p>
            </div>
        </div>
    );
};

export default TeamDetail;