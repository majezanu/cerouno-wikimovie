import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Icon = (props) => (
    <React.Fragment>
        {
            props.icon && <FontAwesomeIcon icon={props.icon} />
        }
    </React.Fragment>
    
)
export default Icon;