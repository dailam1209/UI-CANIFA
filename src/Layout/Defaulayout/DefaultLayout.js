import Header from "../../commons/Header/Header";
import Sidebar from "../../commons/SideBar/Sidebar";
import SliderDown from "../../components/Slide/SliderDown";
import TopSildeDown from "../../components/Slide/TopSildeDown";


function DefaultLayout () {

    return (
        <>
        <Header/>
        <SliderDown/>
        <Sidebar/>
        </>
    )
}

export default DefaultLayout;