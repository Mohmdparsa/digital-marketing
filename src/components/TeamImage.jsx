
import teamimagedesk from '../assets/teamimage/team-image-desk.png';
import teamimagemobile from "../assets/teamimage/team-image-mobile.png";

const TeamImage = () => {
    return (
        <div className="flex justify-center items-center mt-[10rem] lg:mt-2">
           <img src={teamimagedesk} alt="teamimagedesk" className="hidden md:hidden lg:block max-w-full h-auto"/>
           <img src={teamimagemobile} alt=""  className='block lg:hidden max-w-full h-auto'/>
        </div>
    );
};

export default TeamImage;