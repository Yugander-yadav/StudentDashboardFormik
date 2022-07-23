import { selectUnstyledClasses } from '@mui/base'
import React from 'react'
import { useState, useRef } from 'react'
import { useFormik } from 'formik'

function Form(props) {


  const [error, setError] = useState(false)
  const [data, setData] = useState({
    name: " ",
    subone: " ",
    subtwo: " ",
    subthree: " "
  })

  const formik = useFormik({
    initialValues: {
      name: " ",
      subone: " ",
      subtwo: " ",
      subthree: " "
    },
    onSubmit: () => {
      if ((formik.values.name.trim()).length === 0 || formik.values.subone === " " || formik.values.subone === "Select" || formik.values.subtwo === " " | formik.values.subtwo === "Select" || formik.values.subthree === " " | formik.values.subthree === "Select") {

        setError(true)

      } else {
        setError(false)

        props.enter(formik.values)



      }
    
    }
  })






  // const sendData = () => {

  //   if ((data.name.trim()).length === 0 || data.subone === " " || data.subone === "Select" || data.subtwo === " " | data.subtwo === "Select" || data.subthree === " " | data.subthree === "Select") {

  //     setError(true)

  //   } else {
  //     setError(false)

  //     // props.enter(formik.values)
  //     console.log(formik.values)



  //   }

  // }
  return (
    <div>
      <form onSubmit={formik.handleSubmit} style={{ display: "flex", "flexDirection": "column", "maxWidth": "600px", "margin": "auto", "border": "1px solid gray", "padding": "10px", "borderRadius": "10px" }}>
        <div style={{ width: "300px", margin: 'auto' }}>
          <label style={{ fontSize: "0.7em" }} htmlFor="name">Student Name:</label>
          <input value={formik.values.name} onChange={formik.handleChange} id="name" type="text"
            name="name">

          </input>

        </div>
        <hr></hr>
        <div style={{ width: "400px", margin: "auto", display: "flex", margingTop: "15px", justifyContent: "space-between" }}>
          <div>
            <label style={{ margin: "auto", fontSize: "0.7em" }} htmlFor="subone">SUBJECT 1</label>
            <select id='subone' value={formik.values.subone} onChange={ formik.handleChange} name="subone">
              <option default value={null}>Select</option>
              <option value="Teacher 1">Teacher 1</option>
              <option value="Teacher 2">Teacher 2</option>
              <option value="Teacher 3">Teacher 3</option>
            </select>
          </div>
          <div>
            <label style={{ margin: "auto", fontSize: "0.7em" }} htmlFor="subtwo">SUBJECT 2</label>
            <select id='subtwo'  value={formik.values.subtwo} onChange={ formik.handleChange}  name="subtwo">
              <option default value={null}>Select</option>
              <option value="Teacher 1">Teacher 1</option>
              <option value="Teacher 2">Teacher 2</option>
              <option value="Teacher 3">Teacher 3</option>
            </select>
          </div>
          <div>
            <label style={{ margin: "auto", fontSize: "0.7em" }} label="subthree">SUBJECT 3</label>
            <select value={formik.values.subthree} id='subthree'  onChange={ formik.handleChange}  name="subthree">
              <option default value={null}>Select</option>
              <option value="Teacher 1">Teacher 1</option>
              <option value="Teacher 2">Teacher 2</option>
              <option value="Teacher 3">Teacher 3</option>
            </select>
          </div>
        </div>
        {error ? <h5 style={{ margin: "auto", padding: "10px", color: "red" }}>Data not filled Properly</h5> : ""}
        <div style={{ margin: "auto" }}>
          <button type="submit" style={{ marginTop: "5px" }}>Submit</button>
        </div>
      </form>

    </div>
  )
}

export default Form