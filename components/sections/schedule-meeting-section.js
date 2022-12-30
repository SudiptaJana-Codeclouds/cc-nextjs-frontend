import { useState } from "react";
import { useForm } from "react-hook-form";

export default function ScheduleMeetingSection() {

	const [formSubmitted, setFormSubmitted] = useState(false)

    const {
		register,
		handleSubmit,
		watch,
		setError,
		reset,
		formState: { errors },
	} = useForm();

    const onSubmit = (contact_details) => {
		try {
			fetch(`http://localhost:1337/api/contact-form`, {
				method: "POST",
				headers: {
					"Accept": "application/json",
					"Content-Type": "application/json",
				},  
				body: JSON.stringify(contact_details),
			})
			.then((response) => response.json())
			.then((response)=> {
				if (response.name == "ValidationError") {
					response.details.errors.map((data) => {
						setError(data.path[0], { type: 'custom', message: data.path.message });
					})
				} else if(response.id){
					setFormSubmitted(true)
					reset();

					setTimeout(() => {
						setFormSubmitted(false)
					}, 3000);
				}
			});
		} catch (err) {
			console.log(err);
		}
	};


	return (
		<div className="first-form mt-3 pt-5">
			<div className="container">
				<div className="form_box">
					<p className="sub">Curious to about your development costs?</p>
					<h2 className="form-head">Schedule a free consultation</h2>

                    <form
							method="post"
							className="wpcf7-form init salesBtn theme_1"
							onSubmit={handleSubmit(onSubmit)}
						>
							<div className="row">
								<div className="col-sm-5">
									<div className="inner-fld-block">
										<div className="form-group">
											<label>Name</label>
											<span className="wpcf7-form-control-wrap Name">
												<input
													type="text"
													size="40"
													defaultValue=""
													{...register("name", {
														required: true,
													})}
													className={
														"form-control " +
														(errors.name && "error")
													}
												/>
											</span>
										</div>
									</div>

									<div className="inner-fld-block">
										<div className="form-group">
											<label>Email</label>
											<input
												type="email"
												{...register("email", {
													required: true,
													pattern: {
														value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
														message:
															"invalid email address",
													},
												})}
												className={
													"form-control " +
													(errors.email && "error")
												}
											/>
										</div>
									</div>
									<div className="inner-fld-block">
										<div className="form-group">
											<label>Phone</label>
											<span className="wpcf7-form-control-wrap Phone">
												<input
													type="tel"
													{...register("phone", {
														required: true,
													})}
													className={
														"form-control " +
														(errors.phone &&
															"error")
													}
												/>
											</span>
										</div>
									</div>
								</div>
								<div className="col-sm-7">
									<div className="inner-fld-block">
										<div className="form-group">
											<label>Message</label>
											<span className="wpcf7-form-control-wrap">
												<textarea
													placeholder="How can we help?"
													className="form-control"
													{...register("enquiry", {
														required: true,
													})}
												></textarea>
											</span>
										</div>
									</div>
								</div>
							</div>

							<div className="row">
								<div className="d-flex justify-content-between flex-lg-row flex-column">
									<div>
										<div className="form-check">
											<input
												className="form-check-input"
												type="checkbox"
											/>
											<label className="form-check-label">
												I have read and agree to the
												Privacy Policy
											</label>
										</div>
										<div className="form-check">
											<input
												className="form-check-input"
												type="checkbox"
											/>
											<label className="form-check-label">
												I’d like to receive newsletters
												about CodeClouds’ products and
												services
											</label>
										</div>
									</div>
									<button
										className="btn blue-btn"
										type="submit"
									>
										Submit Message
									</button>
								</div>
							</div>

							{
								formSubmitted ? 
								<div className="alert alert-success" role="alert">
									<strong>Thank you for getting in touch! We appreciate you contacting us.</strong>
								</div> : null
							}

						</form>
				</div>
			</div>
		</div>
	);
}
