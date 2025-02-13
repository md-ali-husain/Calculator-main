import React from 'react';

const Ball = (props) => {
    return <div className={"absolute ml-3 w-switcher-ball h-switcher-ball bg-skin-accent rounded-full transition-all " + props.pos}></div>
}

export default Ball;