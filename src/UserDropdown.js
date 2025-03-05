import React, {useState} from 'react';
import './Form.css';
// import Name from './Name.js';


function UserDropdown({updateUser, formActive}) {
    const [isOpen, setIsOpen] = useState(false);
    var [userSelected, setUserSelected] = useState(false)

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleItemClick = (user) => {
        setIsOpen(false); // Close the dropdown on item click
        setUserSelected(true)
        updateUser(user)
    };

    return (
        <>
            <div className={userSelected ? "userDisapear userSelectBackground": "userSelectBackground"}>

            </div>

            <div className={userSelected ? "userDisapear dropdown": "dropdown"}>
                
                <p className='helpInstruction'>On the next page, click the <span className="purpleQ">? </span>in the top-right corner for help or to read the rules</p>
                <button onClick={toggleDropdown} >
                    Who Are You?
                </button>
                {true && (
                    <ul className="dropdown-menu">
                    <li onClick={() => handleItemClick('PLAYER1')}>PLAYER 1</li>
                    <li onClick={() => handleItemClick('PLAYER2')}>PLAYER 2</li>
                    <li onClick={() => handleItemClick('PLAYER3')}>PLAYER 3</li>
                    <li onClick={() => handleItemClick('PLAYER4')}>PLAYER 4</li>
                    <li onClick={() => handleItemClick('PLAYER5')}>PLAYER 5</li>
                    <li onClick={() => handleItemClick('PLAYER6')}>PLAYER 6</li>
                    </ul>
                )}
            </div>
        </>
    );
}
  
export default UserDropdown;