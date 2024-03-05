import { IoLogoBitcoin } from "react-icons/io";
import { IoLogoPlaystation } from "react-icons/io5";
import { IoLogoStencil } from "react-icons/io5";
import { BiLogoDigitalocean } from "react-icons/bi";
import { BiLogoBlender } from "react-icons/bi";
import { BiLogoMeta } from "react-icons/bi";

const Support = () => {
    const logos = [
        {
            id: 1,
            icon: <IoLogoBitcoin />,
            title: 'Bitcoin',
        },
        {
            id: 2,
            icon: <IoLogoPlaystation />,
            title: 'Playstation',   
        },
        {
            id: 3,
            icon: <IoLogoStencil />,
            title: 'Stencil',
        },
        {
            id: 4,
            icon: <BiLogoDigitalocean />,
            title: 'Digital Ocean',
        },
        {
            id: 5,
            icon: <BiLogoBlender />,
            title: 'Blender',
        },
        {
            id: 6,
            icon: <BiLogoMeta />,
            title: 'Meta',
        }
    ]
  return (
    <div>
        {logos.map((logo, key) => {
            return (
                <div key={id}>
                    {logo.icon} {logo.title}
                </div>
            )
        })}

    </div>
  )
}

export default Support