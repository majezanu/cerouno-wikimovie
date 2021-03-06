import React, {useState } from 'react'
import Icon from '../../atoms/Icon/Icon'
import Image from '../../atoms/Image/Image'
import './Navbar.css';
import Input from '../../atoms/Input/Input';
import Button from '../../atoms/Button/Button';
const Navbar = (props) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (e) => {
        e.preventDefault();
        setSearchTerm(e.target.value);
    }
    return (
        <nav className="navbar navbar-expand-lg fixed-top bg-light justify-content-between">
        <span className="navbar-brand text-dark">
            <h1>
                <Icon icon='video' /> MovieWiki
            </h1>
        </span>
        
            <form className="form-inline">
                {
                props.searchAction ?
                <React.Fragment>
                    <Input 
                        style={`form-control mr-sm-2`}
                        name="search" 
                        type="search"
                        value={searchTerm}
                        placeholder="Buscar..."
                        handleChange={handleInputChange}
                        />
                    <Button 
                        style={`btn btn-outline-success my-2 my-sm-0 search-button`}
                        type='submit'
                        action={e => props.searchAction(e, searchTerm)}>Buscar</Button>
                    <Image style={`moviedb-logo`}/>
                </React.Fragment>
                :
                <Button 
                        style={`btn btn-outline-success my-2 my-sm-0 search-button`}
                        type='submit'
                        action={e => props.openPageAction(e)}>Home</Button>
                }
            </form>

        
    </nav>
    );
};

export default Navbar;