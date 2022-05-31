import React from "react";
import { contactInfoData } from './ContactInfoData'

const Footer = () => {

  const contactinfosa = contactInfoData.map((contactinfo, index)=>{
    const contacts1 =  index === 0 ? contactinfo.map((contact, index)=><h2 key={index} className={`font-bold hover:cursor-pointer text-${index === 0 ? '[white]' : 'black'}`}>{contact.name}</h2>) : null
    const contacts2 =  index === 1 ? contactinfo.map((contact, index)=><h2 key={index} className={`font-bold hover:cursor-pointer text-${index === 0 ? '[white]' : 'black'}`}>{contact.name}</h2>) : null
    const contacts3 =  index === 2 ? contactinfo.map((contact, index)=><h2 key={index} className={`font-bold hover:cursor-pointer text-${index === 0 ? '[white]' : 'black'}`}>{contact.name}</h2>) : null

    return [contacts1, contacts2, contacts3]

  })

  return (
    <div className="footer h-[300px] mt-30 pt-[10.5rem] w-screen flex justify-evenly">
      <div className="ml-[50px]">
        {contactinfosa.map((contact, index)=>index === 0 ? contact : null)}
      </div>
      <div>
        {contactinfosa.map((contact, index)=>index === 1 ? contact : null)}
      </div>
      <div className="">
        {contactinfosa.map((contact, index)=>index === 2 ? contact : null)}
      </div>
    </div>
  );
}; 

export default Footer;
