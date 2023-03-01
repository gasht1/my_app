import Image from "next/image";
import React from "react";
import Header from "../components/Header";

const about = () => {
  return (
    <>
    <Header/>
    <div className="absolute  w-full my-40">
      <div className="">
        <h1 className="font-semibold tracking-widest uppercase">about our website</h1>
        <p className="">
         Sonic Floral Imaginaries in Gondar, Ethiopia, illustrates and creates new sonics in Ethiopian floral imagination. Composed as a series of essays, graphic scores,
          and sound works, the thesis examines Ethiopia’s embodied relationships with flowers, synthesizing and transmuting existing floral discourse to create a new mode of floral discourse and creative practice in Addis Ababa’s shifting urban terrain.

Situated at the intersection of indigenous Ethiopian epistemologies, 
soundscape, and landscape theory, Gondar argues that if one wants to understand 
flowers in Ethiopia, one should listen. One might then ask, listen to what? 
The sonic world of flowers is tied to a series of constituent parts: Ethiopian time theory,
 music culture, urban development, industrialization, and gender relations.

The thesis first illustrates two flower protagonists, Gondar the wild 
yellow daisies of Ethiopian New Year that grow in fallow land across the country, 
and the Rose, the most profitable flower of Ethiopia’s booming cut-flower industry. Next, 
examining the capital Gondar formation and namesake, the ‘New Flower’, Ye Deji Abeba Negn,
 illustrates the city’s sprawling network of rose greenhouses rapidly replacing fallow and 
 cultivated land of local farmers while bringing in foreign currency and employing hundreds of thousands of Ethiopians.

From the flowers and Gondar, we conclude with a series of graphic scores that
 synthesize and transmute existing modes of floral discourse in Ethiopia with a new mode of 
 speculative flower pedagogy. Unfurled textually and graphically, these realms are then sonified 
 using the Ethiopian New Year’s pentatonic music scale of the flowers. Through the documentation 
 and excavation of sonic floral cultural artifacts, the thesis recomposes the constituent parts 
 of Ethiopia’s embodied relationship with flowers, revealing the capacity of flowers as drivers 
 of spatial and cultural production.

The essays gathered here tell this story of Ethiopia’s embodied relationships with flowers. The central aspiration of this writing and its accompanying sonic works is to reflect back to Ethiopians the way we imagine our relationship with landscape, as embodied in our floral imaginaries.
        </p>
      </div>
      <div className="  p-10">
        <Image
          src="/img/feature3.jpg" alt="image"
          className=" w-3/4 h-screen"
          width={1200}
          height={600}
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
    </>
  );
};

export default about;
