import React from 'react';

const Filter = props => (
    <header className="filter">
        <nav className="filterNav">
            <div></div>
            <div className="filterContainer">
                <ul>
                    <li><a href='#'>Reels</a></li>
                    <li><a href='#'>Rods</a></li>
                    <li><a href='#'>Lures</a></li>
                    <li><a href='#'>Gear</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export class DesktopFilter extends React.Component {

    render() {
        return(
            <Filter />
        )
    }
}

export default DesktopFilter;