import React from 'react'
import {ChartComponent,SeriesCollectionDirective,SeriesDirective,Tooltip,Category,DataLabel,ColumnSeries,Legend,Inject} from '@syncfusion/ej2-react-charts'
import { barCustomSeries,barPrimaryYAxis ,barPrimaryXAxis} from '../../data/dummy'
import { useStateContext } from '../../contexts/ContextProvider'
import { Header } from '../../components'
const Area = () => {
  const {currentMode}=useStateContext()
  return (
    <div className='m-4  md:m-4 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
    <Header category='Bar' title='Olympic Medal Counts -RIO'/>
    <div className='w-full'><ChartComponent
    id='chart'
    height='420px'
    primaryXAxis={barPrimaryXAxis}
    primaryYAxis={barPrimaryYAxis}
    chartArea={{border:{width:0}}}
    tooltip={{enable:true}}
    background={currentMode === 'Dark' ? '#33373e' :'#fff'}
    >

      <Inject services={[ColumnSeries,Tooltip,Category,DataLabel,Legend]}/>
      <SeriesCollectionDirective> { barCustomSeries.map((item,index)=><SeriesDirective key={index} {...item}/>)}
      </SeriesCollectionDirective>
    </ChartComponent></div>
    </div>
  )
}

export default Area