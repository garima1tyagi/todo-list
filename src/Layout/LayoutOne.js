import React, { Component } from 'react'
import './LayoutOne.css'

 const ColumnSize = () => {
    return (
        <div>
            <div className="bootstrap-responsive mb-2">
            <h4>Simple Bootstrap Responsive Grid System</h4>
            <div className="row">
    <div class="col-xs-12 col-sm-8 col-md-4 col-lg-2">
        <div className="box" />
    </div>
    <div class="col-xs-12 col-sm-2 col-md-4 col-lg-8">
        <div className="box" />
    </div>
    <div class="col-xs-12 col-sm-2 col-md-4 col-lg-2">
        <div className="box" />
    </div>
    </div>
</div>
<div className="flex-wrapper-container">
 <h4>Basic Flexbox Container</h4>
 <div className="d-flex flex-row">
 <div className="col-xs-12 col-sm-8 col-md-4 col-lg-2 p-2">
 <div className="box mr-3" />
 </div>
 <div className="col-xs-12 col-sm-2 col-md-4 col-lg-8 p-2">
 <div className="box mr-3" />
 </div>
 <div className="col-xs-12 col-sm-2 col-md-4 col-lg-2 p-2">
 <div className="box" />
 </div>
 </div>
-----------------------------------------
<h4>Basic Flexbox Reverse Container</h4>
<div className="d-flex flex-row-reverse">
 <div className="p-2 box mr-3" />
 <div className="p-2 box mr-3" />
 <div className="p-2 box mr-3" />
     </div>
     <h4>Basic Flexbox Vertical Container</h4>
<div className="d-flex flex-column-reverse">
 <div className="p-2 box mb-3" />
 <div className="p-2 box mb-3" />
 <div className="p-2 box mb-3" />
     </div>
     <h4>Basic Flexbox Content Between</h4>
<div className="d-flex flex-row-reverse justify-content-between">
 <div className="p-2 box mb-3" />
 <div className="p-2 box mb-3" />
 <div className="p-2 box mb-3" />
     </div>
     <h4>Flexbox Order</h4>
<div className="d-flex flex-row">
 <div className="p-2 box mr-3 order-6 ">Order-1</div>
 <div className="p-2 box mr-3 order-5">Order-2</div>
 <div className="p-2 box mr-3 order-4">Order-3</div>
 <div className="p-2 box mr-3 order-3">Order-4</div>
 <div className="p-2 box mr-3 order-2">Order-5</div>
 <div className="p-2 box mr-3 order-1">Order-6</div>
     </div>
     <h4>Fluid Width</h4>
<div className="fluid-container">
 <div className="p-2 box-fluid mb-2 ">1</div>
 <div className="p-2 box-fluid mb-2">2</div>
 <div className="p-2 box-fluid mb-2">3</div>
 <div className="p-2 box-fluid mb-2">4</div>
 <div className="p-2 box-fluid mb-2">5</div>
 <div className="p-2 box-fluid">6</div>
     </div>
         </div>   
        </div>
    )
}   

export default ColumnSize