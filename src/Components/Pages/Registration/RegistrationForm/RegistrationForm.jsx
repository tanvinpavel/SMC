import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";

const RegistrationForm = () => {
    const navigate = useNavigate();
    const [error, setError] = useState(false);

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
        setError(false);
        const payload = JSON.stringify(data);
        const database = localStorage.getItem('database');
        const user = JSON.parse(database);
        if(user?.email === data.email){
            setError(true);
        }else{
            localStorage.setItem("database", payload);
            navigate('/login');
        }
    }

    return (
        <div className='container my-5'>
            <div className="row justify-content-center align-items-center">
                {
                    error &&
                    <div className="alert alert-danger alert-dismissible fade show w-75" role="alert">
                        <div className="d-flex">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
                                <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                            </svg>
                            <div>
                                <strong>Email</strong> All Ready Exists.
                            </div>
                        </div>
                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                }
                <div className="col-sm-12 col-md-12 col-lg-10">
                    <div className="card my-5 my-sm-0">
                        <h5 className="card-header">Registration</h5>
                        <div className="card-body mt-4 mx-lg-4 mx-xl-4 mx-xxl-4">
                            <form method="post" onSubmit={handleSubmit(formDataHandler)} noValidate>
                                <div className="row mb-3">
                                    <label
                                        htmlFor="inputName1"
                                        className="col-sm-3 col-form-label text-sm-end"
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
                                        errors?.firstName && <span className="d-block invalid-feedback offset-sm-3 offset-md-2">{errors.firstName?.message}</span>
                                    }
                                </div>
                                <div className="row mb-3">
                                    <label
                                        htmlFor="inputRoll2"
                                        className="col-sm-3 col-form-label text-sm-end"
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
                                        errors?.lastName && <span className="d-block invalid-feedback offset-sm-3 offset-md-2">{errors.lastName?.message}</span>
                                    }
                                </div>
                                <div className="row mb-3">
                                    <label htmlFor="input3" className="col-sm-3 col-form-label text-sm-end">
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
                                        errors?.email && <span className="d-block invalid-feedback offset-sm-3 offset-md-2">{errors.email?.message}</span>
                                    }
                                </div>
                                <div className="row mb-3">
                                    <label htmlFor="input4" className="col-sm-3 col-form-label text-sm-end">
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
                                        errors?.password && <span className="d-block invalid-feedback offset-sm-3 offset-md-2">{errors.password?.message}</span>
                                    }
                                </div>
                                <div className="row align-items-center mb-3">
                                    <label htmlFor="input5" className="col-sm-3 col-form-label text-sm-end">
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
                                        errors?.confirmPassword && <span className="d-block invalid-feedback offset-sm-3 offset-md-2">{errors.confirmPassword?.message}</span>
                                    }
                                </div>
                                <div className='ms-sm-2'>
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