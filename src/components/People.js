import React, { Component } from 'react';
import Film from './Film';
import Species from './Species';

export default class People extends Component{
    constructor(props){
        super(props);
        this.state = {
            url: this.props.url,
            people : []
        }
    }

    componentDidMount(){
        fetch(this.state.url)
        .then(response=>response.json())
        .then(data=>{this.setState({people: [data]})})
    }

    render(){
        return (
            <div className="row">
                <p>Name: {this.state.people.map((item)=>{return item.name})}</p>
                <p>Height: {this.state.people.map((item)=>{return item.height})}</p>
                <p>Mass: {this.state.people.map((item)=>{return item.mass})}</p>
                <p>Hair color: {this.state.people.map((item)=>{return item.hair_color})}</p>
                <p>Skin color: {this.state.people.map((item)=>{return item.skin_color})}</p>
                <p>Birth year: {this.state.people.map((item)=>{return item.birth_year})}</p>
                <p>Gender: {this.state.people.map((item)=>{return item.gender})}</p>
                <ul>Homeworld: 
                    <li>Title: {this.state.people.map((item)=>{return item.homeworld.title})}, Terrain: {this.state.people.map((item)=>{return item.homeworld.terrain})}, Population: {this.state.people.map((item)=>{return item.homeworld.population})}</li>
                </ul>
                <ul>Films
                    {this.state.people.map((item)=>item.films.map((film)=><Film key = {film.title} newitem={film}/>))}
                </ul>  
                <ul>Species
                    {this.state.people.map((item)=>item.species.map((singlespecies)=><Species key = {singlespecies.name} newitem={singlespecies}/>))}
                </ul>              
            </div>
        )
    }
}