import React from 'react';
import './Club.css';

// function handleClick(club, clubType, id) {
//   console.log('here', club, clubType, id)
// };

// function formatClub(club, clubType, id, props) {
//   return (
//     <div className="club">
//       <h3>{clubType}</h3>
//       <p>{club}</p>
//       <button onClick={ () => handleClick(club, clubType, id) }>Remove Club</button>
//     </div>
//   )
// };

// function formatClubsArray(props) {
//   return (
//     <div className="club">
//       <h3>{props.clubType}</h3>
//       {
//         props.club.map((club, key) => {
//           return (
//             <p key={key}>{club.type} {club.brand}</p>
//           )
//         })
//       }
//     </div>
//   )
// };

// function Club(props) {
//   if (typeof props.club === 'string') {
//     return (
//       formatClub(props.club, props.clubType, props.i, props)
//     )
//   } else {
//     return (
//       formatClubsArray(props)
//     )
//   }
// };

class Club extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.formatClub = this.formatClub.bind(this);
    this.formatClubsArray = this.formatClubsArray.bind(this);
  }

  handleClick(club, clubType, id) {
    console.log('here', club, clubType, id)
  };

  formatClub(club, clubType, id, props) {
    return (
      <div className="club">
        <h3>{clubType}</h3>
        <p>{club}</p>
        <button onClick={ () => this.handleClick(club, clubType, id) }>Remove Club</button>
      </div>
    )
  };

  formatClubsArray(props) {
    return (
      <div className="club">
        <h3>{props.clubType}</h3>
        {
          props.club.map((club, key) => {
            return (
              <p key={key}>{club.type} {club.brand}</p>
            )
          })
        }
      </div>
    )
  };

  render() {
    if (typeof this.props.club === 'string') {
      return (
        this.formatClub(this.props.club, this.props.clubType, this.props.i, this.props)
      )
    } else {
      return (
        this.formatClubsArray(this.props)
      )
    }
  }
}

export default Club;