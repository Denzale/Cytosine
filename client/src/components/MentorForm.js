import React, { useState } from "react";
function Mentor() {
    return (
        <div className="container">
            <div className="col-md-8">
                <div className=" shadow  bg-white rounded">
                    <div className="row">
                        <div className="col-md-12">
                            <form>
                                {/* <!-- Name input --> */}
                                <div className="form-group">
                                    <label>Name:</label>
                                    <input type="name" className="form-control" id="name" placeholder="Name" />
                                </div>
                                {/* <!-- Email --> */}
                                <div className="mb-3">
                                    <label>Emai Address:</label>
                                    <input type="email" className="form-control" id="email" placeholder="Email" />
                                </div>
                                {/* <!-- experience area --> */}
                                <div>
                                    <label>Experience:</label>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox1"
                                            value="option1" />
                                        <label className="form-check-label" for="inlineCheckbox1">CSS</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox2"
                                            value="option2" />
                                        <label className="form-check-label" for="inlineCheckbox2">HTML</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox3"
                                            value="option3" />
                                        <label className="form-check-label" for="inlineCheckbox3">JavaScript
                                        </label>
                                    </div>
                                </div>
                                {/* <!-- Age input --> */}
                                <div className="form-group">
                                    <label>Age:</label>
                                    <input type="Age" className="form-control" id="Age" />
                                </div>
                                {/* <!-- Gender --> */}
                                <div className="form-group">
                                    <label>Gender:</label>
                                    <select className="form-control" id="gender">
                                        <option>-----</option>
                                        <option>Male</option>
                                        <option>Female</option>
                                        <option>other</option>
                                    </select>
                                </div>
                                {/* <!-- Payment options --> */}
                                <div>
                                    <label>Payment Options:</label>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox1"
                                            value="option1" />
                                        <label className="form-check-label" for="inlineCheckbox1">Pay Pal</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox2"
                                            value="option2" />
                                        <label className="form-check-label" for="inlineCheckbox2">Venmo</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox3"
                                            value="option3" />
                                        <label className="form-check-label" for="inlineCheckbox3">Cash App</label>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Mentor;