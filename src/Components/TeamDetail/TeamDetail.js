import React from 'react';
import './TeamDetail.css';
import {useParams} from 'react-router-dom';
import {useState,useEffect} from 'react';
import {Card,Button} from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook,faInstagram,faYoutube} from '@fortawesome/free-brands-svg-icons';
import  {faCoffee} from '@fortawesome/free-solid-svg-icons';


const TeamDetail = () => {
    let {teamId} = useParams();

    const [team,setTeam] = useState([]);

    useEffect(() => {
        const url =`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setTeam(data.teams))
        
    },[teamId])

    console.log(team);
    return (
        <>
           {
               team.map(detailTeam => 
                <div className="bg">
                <div className="container">               
                
                 <div className="row team-data">
                   <div className="team-detail col-md-6">
                   <h4>League: {detailTeam.strLeague}</h4>
                   <p>Country: {detailTeam.strCountry}</p>
                   <p>Founded Date: {detailTeam.intFormedYear}</p>
                    <p>Gender: {detailTeam.strGender}</p>
                   </div>
                    <div className="team-image col-md-6">
                        <h1>
                            <img src={detailTeam.strTeamFanart1} alt=""/>
                        </h1>
                    </div> 
                    </div>   
                
                     <div className="row">
                    <p>{detailTeam.strDescriptionEN}</p>
                     </div>

                    <div className="row social-fonts">

                    <a href="#"
                        className="facebook social">
                 <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>

                   <a href="#"
                    className="youtube social">
                     <FontAwesomeIcon icon={faYoutube} size="2x" />
                    </a>
                    

                    <a href="#"
                    className="instagram social">
                     <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                    </div>
                </div>
               </div>)
               
           }

       
        </>
    );
};

export default TeamDetail;