import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const ResetPasswordForm = () => {
    const navigate = useNavigate();

    const schema = yup.object({
        email: yup.string()
            .email("Please Enter A Valid Email Address.")
            .max(100, "This field must be at most 100 characters long.")
            .required("This field must not be empty.")
    }).required();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const formDataHandler = (data) => {
        console.log(data);
        navigate('/');
    }

    return (
        <div className='container my-5'>
            <div className="row justify-content-center align-items-center">
                <div className="col-sm-10 col-md-8 col-lg-8">
                    <div className="card my-5">
                        <h5 className="card-header">Reset Password</h5>
                        <div className="card-body mt-4 mx-4">
                            <form method="post" onSubmit={handleSubmit(formDataHandler)} noValidate>
                                <div className="row mb-3">
                                    <label htmlFor="input3" className="col-sm-3 col-form-label">
                                        Email Address:
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
                                        errors?.email && <span className="offset-sm-3 d-block invalid-feedback">{errors.email?.message}</span>
                                    }
                                </div>
                                <div className="ms-2">
                                    <button type="submit" className="btn btn-primary offset-sm-3">
                                        Send Password Reset Link
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResetPasswordForm;