import React from 'react'

export default function Breakpoint() {
  return (
    <div>
        {/* this is BreakPoint Example */}
        <h1 className='text-center'> Breakpoint Example </h1>
        <p className='text-center text-md-start text-lg-end'>This is Breakpoint Example</p>

        {/* Padding Example */}
        <h1 className='text-center'> Padding Example </h1>
        <p className='pt-0 bg-primary'>This is Padding 0</p>
        <p className='pb-1 bg-secondary'>This is Padding 1</p>
        <p className='ps-2 bg-success'>This is Padding 2</p>
        <p className='pe-3 bg-danger'>This is Padding 3</p>
        <p className='py-4 bg-warning'>This is Padding 4</p>
        <p className='px-5 bg-info'>This is Padding 5</p>

        {/* Padding-Breakpoint Example */}
        <h1 className='text-center'>Padding-Breakpoint Example </h1>
        <p className='ps-2 ps-md-5'>This is padding Breakpoint example</p>

        {/* Margin example */}
        <h1 className='text-center'>Margin Example</h1>
        <p className='m-0 bg-primary'>This is Margin 0</p>
        <p className='m-1 bg-secondary'>This is Margin 1</p>
        <p className='m-2 bg-success'>This is Margin 2</p>
        <p className='m-3 bg-danger'>This is Margin 3</p>
        <p className='m-4 bg-warning'>This is Margin 4</p>
        <p className='m-5 bg-info'>This is Margin 5</p>

        {/* margin-Breakpoint example */}
        <h1 className='text-center'>margin-Breakpoint example</h1>
        <p className='ms-2 me-md-5'>this is margin Breakpoint example</p>

        {/* Grip Example*/}
        <h1 className='text-center'>Grip Example</h1>
        <div className='Container-fluid'>
            {/* row */}
            <div className='row'>
                {/* column's */}
                <div className='col-12 col-md-6 col-lg-4 bg-primary'>column 1</div>
                <div className='col-12 col-md-6 col-lg-4 bg-secondary'>column 2</div>
                <div className='col-12 col-md-6 col-lg-4 bg-info'>column 3</div>
            </div>
            <br /><br /><br />
        </div>
    </div>
  )
}
