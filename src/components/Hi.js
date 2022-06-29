import React from 'react';

const Hi = (props) => <div> Hi,
    {props.numbers.map((e, i) => <p key={i}>{e}</p> )}
</div>

export default Hi;
