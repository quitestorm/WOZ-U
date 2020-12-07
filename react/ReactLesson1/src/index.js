import React from 'react';
import ReactDOM from 'react-dom';


const FavoriteColor = React.createElement(
    'ul',
    {},
    React.createElement('li', {}, 'blue'),
    React.createElement('li', {}, 'green'),
    React.createElement('li', {}, 'purpel')
  );
  const favoriteMusic = React.createElement(
    'ul',
    {},
    React.createElement('li', {}, 'Clapton'),
    React.createElement('li', {}, 'B.B King'),
    React.createElement('li', {}, 'Santana'),
  );
  const website1 = React.createElement(
    'li',
    {},
    React.createElement('a', { href: 'https://www.google.com' }, 'www.google.com')
  );
  const website2 = React.createElement(
    'li',
    {},
    React.createElement(
      'a',
      { href: 'https://www.facebook.com' },
      'www.facebook.com'
    )
  );
  const website3 = React.createElement(
    'li',
    {},
    React.createElement(
      'a',
      { href: 'https://www.instagram.com' },
      'www.instagram.com'
    )
  );
  
  ReactDOM.render(
    React.createElement(
      'ul',
      {},
      React.createElement('li', {}, 'Favorite Color', FavoriteColor),
      React.createElement('li', {}, 'music', favoriteMusic),
      React.createElement('li', {},'Favorite Websites',  website1, website2, website3)
    ),
    document.getElementById('root')
  );