import React from 'react';

class Profile extends React.Component {

	constructor(props) {
		super(props);
		this.characterStats = {
            str: {
                name: 'Strength',
                value: 5,
            },
            int: {
                name: 'Intelligence',
                value: 5,
            },
            dex: {
                name: 'Dexterity',
                value: 5,
            },
            pow: {
                name: 'Power',
                value: 5,
            },
            agi: {
                name: 'Agility',
                value: 5,
            },
            wp: {
                name: 'WillPower',
                value: 5,
            },
            con: {
                name: 'Constitution',
                value: 5,
            },
            per: {
                name: 'Perception',
                value: 5,
            },
        };
	}

	Avatar() {
		return <div><p>Avatar</p></div>;
	}

	render() {
		return (
			<Avatar />
			{props.stats.map((stat, i) => {
	           console.log("Entered");
	           // Return the element. Also pass key
	           return (<Answer key={i} answer={answer} />)
	        })}
		);
	}
}

export default Profile;