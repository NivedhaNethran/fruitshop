import React from 'react'

const handleSubmit=(e)=>{
    e.preventDefault();
    const form = e.target;
    const image=form.image.value;
    const title=form.title.value;
    const price=form.price.value;
    const quantity=1;

    if(image ==="" || title ==="" || price ===""){
      alert("Fill all the fields");
    }
    const prodObj = {image,title,price,quantity};
    console.log(prodObj);
    fetch("http://localhost:7080/fruits",{
      method:"POST",
      headers:{
       "Content-Type":"application/json",
      },
      body:JSON.stringify(prodObj)
    })
    .then((res)=>res.json())
    .then((data)=>{
      alert("Product Added Successfully")
      form.reset();
      window.location.href= "/update";
    });
  }

const Upload = () => {
  return (
    <>

<div className='up1'>
      <h3>Upload Products</h3>
      <form onSubmit={handleSubmit}>
        <label value="image">Image</label><br/>
        <input type="text" name="image" id="image"/><br/>
        <label value="title">Title</label><br/>
        <input type="text" name="title" id="title"/><br/>
        <label value="price">Price</label><br/>
        <input type="number" name="price" id="price"/><br/><br/>
        <button type="submit" className='btn btn-success'>Upload</button>
      </form>
    </div>
    </>
  )
}

export default Upload