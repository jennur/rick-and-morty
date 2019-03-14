import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
class Layout extends React.Component {

  static propTypes = {
    className: PropTypes.string,
  };

  render() {
    return (
      <div className="[ container ]">
          <div className="[ row ]">
            <div className="[ col-sm-12 ]">
              <nav className="[ header ]">
              <Link to="/">
                <img className="[ header__image ]" src="https://www.freeiconspng.com/uploads/rick-and-morty-beige-folder-icon-1.png" alt="Rick and Morty Beige Folder Icon" />
              </Link>
              </nav>
            </div>
          </div>
          <div className="[ row ]">
            <div className="[ col-sm-12 ]">
              {this.props.children}
            </div>
          </div>
      </div>
    );
  }
}

export default Layout;
