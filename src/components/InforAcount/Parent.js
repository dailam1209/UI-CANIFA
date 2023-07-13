import React from "react";
import Profile from "./Profile";
import Header from "../../commons/Header/Header";
import SliderDown from "../Slide/SliderDown";
import DefaultLayout from "../../Layout/Defaulayout/DefaultLayout";



function ProfileParent () {

    return  (
        <div>
            <SliderDown/>
            <Profile/>
        </div>
    )
};

export default ProfileParent;
