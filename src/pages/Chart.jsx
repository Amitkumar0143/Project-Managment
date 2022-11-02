import React from 'react'
import "./SCSS/common/common.css";
import {AreaChart} from "../chart/Area";
import {LINE_COLUMN_AREA} from "../chart/Line_Column_Area";
import { Timeline } from '../chart/Timeline_Charts';
import { Stacked } from '../chart/Stacked';
import { LineChart } from '../chart/LineChart';
import { Donut } from '../chart/Donut';




const Chart = () => {
  return (
    <section className='form_Element'>
      <div className='row'>
        <div className='col-sm-6 col-lg-6'>
          <div className='card'>
          <h4 className="card-title">Line Chart</h4>
            <AreaChart/>
          </div>
        </div>
        <div className='col-sm-6 col-lg-6'>
          <div className='card'>
          <h4 className="card-title">Line Column Area</h4>
            <LINE_COLUMN_AREA/>
          </div>
        </div>
        <div className='col-sm-6 col-lg-6'>
          <div className='card'>
          <h4 className="card-title">Timeline Charts</h4>
        <Timeline />
          </div>
        </div>
        <div className='col-sm-6 col-lg-6'>
          <div className='card'>
            <h4 className='card-title'>Stacked Chart </h4>
            <Stacked />
          </div>
        </div>
        <div className='col-sm-6 col-lg-6'>
          <div className='card'>
            <h4 className='card-title'>Line Chart</h4>
            <LineChart/>
          </div>
        </div>
        <div className='col-sm-6 col-lg-6'>
          <div className='card'>
            <h4 className='card-title'>Pai Chart</h4>
            <Donut />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Chart