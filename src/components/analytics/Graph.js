import React from 'react';

// Custom Components
import { SubHeading } from '../other/Heading';
import { Graphtext } from '../other/Text';
import { Graphh, Graphh2, Graphh3 } from './graphh';

export const Patientsgraph = () => {
  return (
    <div
      className='patients-graph'
      style={{ paddingRight: '30px', paddingTop: '10px' }}
    >
      <div className='graph-header'>
        <div className='left'>
          <SubHeading subHeading='Hospital Survey' />
        </div>
        <div className='right'>
          <Graphtext text='Patients 2019' color='yellow' />
          <Graphtext text='Patients 2020' color='blue' />
        </div>
      </div>
      <div className='graph container'>
        <Graphh />
      </div>
    </div>
  );
};

export const Earninggraphs = () => {
  return (
    <div className='earning-graphs'>
      <div className='row'>
        <div className='col-sm-12 col-md-12 col-lg-6'>
          <div className='earning-graph-1'>
            <div className='graph-header'>
              <div className='left'>
                <SubHeading subHeading='$ 100,000' />
              </div>
              <div className='right'>
                <Graphtext text='Income in current month' />
              </div>
            </div>
            <div className='graph-container'>
              <Graphh2 />
            </div>
          </div>
        </div>
        <div className='col-sm-12 col-md-12 col-lg-6'>
          <div className='earning-graph-2'>
            <div className='graph-header'>
              <div className='left'>
                <SubHeading subHeading='$ 25,000' />
              </div>
              <div className='right'>
                <Graphtext text='Income in current week' />
              </div>
            </div>
            <div className='graph-container'>
              <Graphh3 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
