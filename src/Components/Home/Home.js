import React from 'react';
import {useState,useEffect} from 'react';
import './Home.css';
import TeamDetail from '../TeamDetail/TeamDetail';
import {Card,Button,Jumbotron} from 'react-bootstrap';



import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const Home = () => {
    
    const [teams,setTeams] = useState([]);

    useEffect(() => {
   const url=`https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League`;
    fetch(url)
    .then(res=>res.json())
    .then(data=> {
        setTeams(data.teams)
        console.log("first",data.teams)  
    }
        
    );
   
  },[])
 

    return (
        <div className="bg"> 
        
        <div className="container">
        <div className="site-title">
            <h1>Football Mania</h1>
          </div> 
          
        <div className="team-design row col-md-12">
           {
           teams.slice(0,10).map(team=>
        <Card  key={team.idTeam} style={{ width: '15rem',height: '28rem'}}>
         <Card.Img variant="top" src={team.strTeamBadge} />
            <Card.Body>
             <Card.Title>{team.strAlternate}</Card.Title>
             <Card.Text>
                Country:{team.strCountry}
               Sports type: {team.strSport}
            </Card.Text>
            <Link to={`/team/${team.idTeam}`}>
            <Button variant="primary">Explore</Button>
            </Link>
            </Card.Body>
        </Card>
           )
}
        </div>
        </div>
        </div>
    );
};

export default Home;