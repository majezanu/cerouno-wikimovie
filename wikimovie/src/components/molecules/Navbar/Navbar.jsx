import React from 'react'
import Icon from '../../atoms/Icon/Icon'
import Image from '../../atoms/Image/Image'
import './Navbar.css';
import Input from '../../atoms/Input/Input';
import Button from '../../atoms/Button/Button';
const Navbar = (props) => (
    <nav className="navbar navbar-expand-lg fixed-top bg-light justify-content-between">
        <span className="navbar-brand">
            <h1>
                <Icon icon='video' /> MovieWiki
            </h1>
        </span>
        <form className="form-inline">
            <Input 
                style='form-control mr-sm-2'
                name="search" 
                type="search"
                // value={this.state.contact.phone}
                placeholder="Buscar..."
                // handleChange={this.handleInput}
                />
            <Button 
                style='btn btn-outline-success my-2 my-sm-0 search-button'
                type='submit'>Buscar</Button>
            <Image style={`moviedb-logo`}/>
        </form>
    </nav>
);

export default Navbar;