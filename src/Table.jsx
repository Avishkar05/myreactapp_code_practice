import React from 'react'

export default function Table() {
  return (
    <div>
        <table className='table table-warning bg-warning table-bordered border-primary table-hover  '>
            <tbody>
            {/* <thead> */}
                <tr>
                    <th>Roll_no</th>
                    <th>Name</th>
                    <th>Course</th>
                </tr>
            
                <tr>
                    <td>1</td>
                    <td>Ketan</td>
                    <td>Java</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Avishkar</td>
                    <td>Spring boot</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Onkar</td>
                    <td>React</td>
                </tr>
            {/* </thead> */}
            </tbody>
        </table>

        <img src="https://imgs.search.brave.com/BnLpNdKMX51stTgvR1WfDaPoF2JaZ6ydq5ynB7ApFdM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdk/LmFlcGxjZG4uY29t/LzM3MHgyMDgvbi9j/dy9lYy8xOTg1Njcv/My1zZXJpZXMtZXh0/ZXJpb3ItcmlnaHQt/ZnJvbnQtdGhyZWUt/cXVhcnRlci0xMC5w/bmc_aXNpZz0wJnE9/ODA" alt="" 
        style={{"height":"200px","width":"200px"}} className='img-fluid rounded-circle'></img>
       
        <button className='btn btn-danger'>click here</button>

    </div>
  )
}
