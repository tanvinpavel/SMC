import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";

const RegistrationForm = () => {
    const navigate = useNavigate();

    const schema = yup.object({
        firstName: yup.string()
            .required("This  Field Must Not Be Empty."),
        lastName: yup.string()
            .required("This  Field Must Not Be Empty."),
        email: yup.string()
            .email("Please Enter A Valid Email Address.")
            .max(100, "This field must be at most 100 characters long.")
            .required("This field must not be empty."),
        password: yup.string()
            .min(8, "This field must be at least 8 characters long.")
            .max(50, "This field must be at most 50 characters long.")
            .required("This  field must not be empty."),
        confirmPassword: yup.string()
            .oneOf([yup.ref("password"), null], "Password must match.")
            .required("This  field must not be empty."),
    }).required();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const formDataHandler = (data) => {
        console.log(data);
        const payload = JSON.stringify(data);
        console.log(payload);
        localStorage.setItem("database", payload);
        navigate('/login');
    }

    return (
        <div className='container my-5'>
            <div className="row justify-content-center align-items-center">
                <div className="col-sm-9 col-md-8 col-lg-8">
                    <div className="card my-5">
                        <h5 className="card-header">Registration</h5>
                        <div className="card-body mt-4 mx-4">
                            <form method="post" onSubmit={handleSubmit(formDataHandler)} noValidate>
                                <div className="row mb-3">
                                    <label
                                        htmlFor="inputName1"
                                        className="col-sm-3 col-form-label"
                                    >
                                        First Name:
                                    </label>
                                    <div className="col-sm-9">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="inputName1"
                                            {...register("firstName")}
                                            placeholder="First Name"
                                        />
                                    </div>
                                    {
                                        errors?.firstName && <span className=" d-block invalid-feedback">{errors.firstName?.message}</span>
                                    }
                                </div>
                                <div className="row mb-3">
                                    <label
                                        htmlFor="inputRoll2"
                                        className="col-sm-3 col-form-label"
                                    >
                                        Last Name:
                                    </label>
                                    <div className="col-sm-9">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="inputRoll2"
                                            {...register("lastName")}
                                            placeholder="Last Name"
                                        />
                                    </div>
                                    {
                                        errors?.lastName && <span className=" d-block invalid-feedback">{errors.lastName?.message}</span>
                                    }
                                </div>
                                <div className="row mb-3">
                                    <label htmlFor="input3" className="col-sm-3 col-form-label">
                                        Email:
                                    </label>
                                    <div className="col-sm-9">
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="input3"
                                            {...register("email")}
                                            placeholder="Email"
                                        />
                                    </div>
                                    {
                                        errors?.email && <span className=" d-block invalid-feedback">{errors.email?.message}</span>
                                    }
                                </div>
                                <div className="row mb-3">
                                    <label htmlFor="input4" className="col-sm-3 col-form-label">
                                        Password:
                                    </label>
                                    <div className="col-sm-9">
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="input4"
                                            {...register("password")}
                                            placeholder="Password"
                                        />
                                    </div>
                                    {
                                        errors?.password && <span className=" d-block invalid-feedback">{errors.password?.message}</span>
                                    }
                                </div>
                                <div className="row mb-3">
                                    <label htmlFor="input5" className="col-sm-3 col-form-label">
                                        Confirm Password:
                                    </label>
                                    <div className="col-sm-9">
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="input5"
                                            {...register("confirmPassword")}
                                            placeholder="Confirm Password"
                                        />
                                    </div>
                                    {
                                        errors?.confirmPassword && <span className=" d-block invalid-feedback">{errors.confirmPassword?.message}</span>
                                    }
                                </div>
                                <div className='ms-2'>
                                    <button type="submit" className="btn btn-sm btn-primary offset-sm-3 me-2">
                                        Registration
                                    </button>
                                    <span>Have an account? <Link to="/login">Log in now</Link></span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default RegistrationForm;