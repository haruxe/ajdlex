import Image from "next/image";
import React from "react";

function index() {
  return (
    <div className="md:mb-[14rem] mt-5 place-content-center flex flex-col">
      <div className="mx-auto my-auto flex">
        <div className="mx-auto flex flex-col">
          <div className="max-w-[1100px] p-6 text-black flex flex-col mx-auto place-content-between">
            <h1 className="text-5xl font-bold md:mb-[8rem] mb-10">
              CASE STUDIES
            </h1>
            {/* <div className="h-[2px] bg-black w-[6rem] my-4 mb-[10rem]" /> */}
            <div className="flex md:flex-row flex-col">
              <div className="flex flex-col md:w-2/3">
                <div className="flex flex-col w-full">
                  <div className="space-y-4">
                    <h1 className="text-xl font-bold font-serif">
                      Cases handled have included the following matters:
                    </h1>
                    <p className="font-serif tracking-wide">
                      ►Representing wireless telephone carriers in large-scale
                      antitrust class action and partnership dispute litigation
                      in both federal and state courts
                      <br /> <br /> ►Representing three public entity plaintiffs
                      against KPMG Peat Marwick for losses arising out of the
                      Orange County bankruptcy <br />
                      <br />
                      ►Obtaining a writ of mandate against the City of Dana
                      Point with regard to land use planning for the Dana Point
                      Headlands
                      <br />
                      <br /> ►Obtaining a $34 million judgment for a large
                      commercial bank against a major shopping center developer
                      and its individual general partners
                      <br />
                      <br /> ►Obtaining judgment in favor of the Orange County
                      Water District against claims for inverse condemnation of
                      oil reserves behind Prado Dam, as well as successfully
                      arguing the appeal (petition for review denied by
                      California Supreme Court, Prado Petroleum Co. v. Orange
                      County Water Dist., 2001 Cal. LEXIS 4890)
                      <br />
                      <br />
                      ►Representing a California Superior Court judge with
                      regard to his private investments in obtaining a
                      settlement in excess of $1 million against a national
                      title insurance company
                      <br />
                      <br /> ►Obtaining a $16.5 million settlement of a class
                      action on behalf of minority shareholders against the
                      controlling shareholders
                      <br />
                      <br />
                      ►Successfully concluding litigation defending a dietary
                      supplement manufacturer against claims of unfair
                      competition by a prominent soft drink company
                      <br />
                      <br />
                      ►Successfully defending against numerous consumer class
                      action claims
                    </p>
                  </div>
                </div>
              </div>
              <div className="place-content-center space-y-10 my-auto place-items-center md:mt-0 mt-10 md:ml-10">
                <div className="relative place-content-center flex md:w-[300px] w-2/3 my-auto md:my-auto mx-auto">
                  <Image
                    src={"/images/martindale.png"}
                    alt={"placeholder"}
                    width={"577"}
                    height={"169"}
                    className="flex"
                  />
                </div>
                <div className="relative place-content-center flex md:w-[300px] w-2/3 my-auto md:my-auto mx-auto">
                  <Image
                    src={"/images/lawyers.png"}
                    alt={"placeholder"}
                    width={"395"}
                    height={"95"}
                    className="flex"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
