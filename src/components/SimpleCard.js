import React, { Component } from 'react';
import Image from './Image';
import Title from './Title';
import Description from './Description';

class SimpleCard extends Component {
  render() {
    return (
      <div className='simple-card'>
        <Image img={'./6x6.jpg'} />
        <Title title={'G 63 6x6 AMG'} />
        <Description
          desc={
            'The G63 6x6 is one of the most insane vehicles ever produced by Mercedes-Benz, and with some used examples fetching over $1 million.'
          }
        />
      </div>
    );
  }
}

export default SimpleCard;
