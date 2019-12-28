import React from 'react';
import Foo from 'components/Foo';

const PrimaryButton = props =>{
    return(
        <button>{props.children}<Foo/></button>
    )
}

export default PrimaryButton;