import React from "react";

function CreateResume(){
    return (
        <div>
            <form className="resume">
                {/* Information about myself */}
                <div className="about">
                    <label htmlFor="about">About Myself</label>
                    <input type="text" name="about"/>
                </div>

                {/* Contact details: official name, githubUsername, phone, email */}
                <div className="contact">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name"/>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" />
                    <label htmlFor="github">GitHub Profile</label>
                    <input type="text" name="github" />
                </div>

                {/* Education */}
                <div className="education">
                    <label htmlFor="education">Academic Qualifications</label>
                    <input type="text" name="education" />
                </div>

                {/* Work Experience */}
                <div>
                    <label htmlFor="experience"></label>
                    <input type="text" name="experience" id="experience" />
                </div>
            </form>
        </div>
    )
}

export default CreateResume;