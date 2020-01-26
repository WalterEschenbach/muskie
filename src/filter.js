import React from 'react';


const Filter = props => (
        <nav className="filterNav">
            <div className="filterContainer">
                <ul>
                    <li><button>Reels</button></li>
                    <li><button>Rods</button></li>
                    <li><button>Lures</button></li>
                    <li><button>Gear</button></li>
                </ul>
            </div>
        </nav>
   
);

export class DesktopFilter extends React.Component {

    render() {
        return(
            <Filter />
        )
    }
}

export default DesktopFilter;