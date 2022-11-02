import Image from "next/image";
import React from "react";

function index() {
  return (
    <div className="md:mb-[3rem] mt-5 place-content-center flex flex-col">
      <div className="mx-auto my-auto flex">
        <div className="mx-auto flex flex-col">
          <div className="max-w-[1100px] p-6 text-black flex flex-col mx-auto place-content-between">
            <h1 className="text-5xl font-bold md:mb-[8rem] mb-10">COUNSEL</h1>
            {/* <div className="h-[2px] bg-black w-[6rem] my-4 mb-[10rem]" /> */}
            <div className="flex md:flex-row flex-col">
              <div className="flex flex-col md:w-2/3">
                <div className="flex flex-col w-full ">
                  <div className="space-y-4">
                    <h1 className="text-xl font-bold font-serif">
                      Alan J. Droste, Experienced Business Litigation Attorney
                    </h1>
                    <div className="space-y-1">
                      <p className="font-serif indent-5 tracking-wide">
                        Mr. Droste&apos;s litigation practice over 40 years
                        encompasses a wide range of complex commercial and real
                        estate matters.
                      </p>
                      <p className="font-serif indent-5 tracking-wide">
                        Mr. Droste represents businesses, developers, borrowers,
                        investors, lenders, manufacturers and public entities in
                        all types of civil litigation. His cases have involved
                        joint venture and partnership disputes, real estate
                        matters including multi-tract and mixed-use
                        developments, real property security, land use, ground
                        lease arbitrations, contract disputes, unfair
                        competition and other business torts. He has represented
                        wireless telephone carriers on an array of matters,
                        including disputes involving partners, competing
                        carriers, consumer class actions, equipment
                        manufacturers and transmission site lessors. He is
                        experienced in class actions and unfair business
                        practice litigation.
                      </p>
                      <p className="font-serif indent-5 tracking-wide">
                        {" "}
                        Mr. Droste&apos;s clients have included Fortune 100
                        companies such as Verizon Wireless, Vodafone, Boeing,
                        Wells Fargo, Home Depot and Amerisource Bergen. Besides
                        civil trials in state and federal courts, he is
                        experienced with arbitration, mediation and other forms
                        of dispute resolution, and he frequently advises
                        businesses with regard to avoiding liability and
                        minimizing litigation risk.
                      </p>
                      <p className="font-serif indent-5 tracking-wide">
                        After eight years with Drummy Garrett King & Harrison,
                        in 1990 Mr. Droste became a founding partner of the
                        Orange County office of Pillsbury Madison & Sutro LLP
                        (now Pillsbury Winthrop Shaw Pittman LLP). For several
                        years he was the head of Pillsbury&apos;s Orange County
                        Litigation Department.
                      </p>
                      <p className="font-serif indent-5 tracking-wide">
                        After twelve years as a partner with the Pillsbury firm,
                        Mr. Droste brings his expertise to complex matters
                        without the large-firm overhead and expense.
                      </p>
                      <p className="font-serif indent-5 tracking-wide">
                        Mr. Droste has lectured as a Continuing Education of the
                        Bar panelist and as a guest speaker before the Orange
                        County Bar Association on topics involving real property
                        security and issues in real estate litigation.
                      </p>
                    </div>
                    <h1 className="text-xl font-bold font-serif">
                      Published Decisions
                    </h1>
                    <div>
                      <p className="font-serif indent-5 tracking-wide">
                        United States Cellular Investment Company of Los
                        Angeles, Inc. v. GTE Mobilnet, Inc., et al., 281 F.3d
                        929 (9th Cir. 2002), upholding summary judgment in favor
                        of AirTouch Cellular and other wireless
                        telecommunications companies against claims of breach of
                        limited partnership agreement.
                      </p>
                      <p className="font-serif indent-5 tracking-wide">
                        Golden West Baseball Company v. Talley, 232 Cal. App. 3d
                        1294 (1991), upholding summary judgment in favor of the
                        city manager of the City of Anaheim in a lawsuit brought
                        by the California Angels over a dispute regarding the
                        leasing of the Anaheim Stadium parking lot to the Los
                        Angeles Rams.
                      </p>
                    </div>
                    <h1 className="text-xl font-bold font-serif">Education</h1>
                    <p className="font-serif tracking-wide leading-10">
                      J.D., University of California at Berkeley, Boalt Hall
                      School of Law, 1982
                      <br />
                      B.S., Psychology, University of Illinois (Phi Beta Kappa),
                      1978
                      <br />
                    </p>
                    <h1 className="text-xl font-bold font-serif">Awards</h1>
                    <p className="font-serif tracking-wide leading-10">
                      Martindale peer-rated A/V Preeminent
                      <br />
                      Super Lawyers (recognizing top 5 percent of attorneys per
                      state)
                      <br />
                    </p>
                    <h1 className="text-xl font-bold font-serif">
                      Admitted to practice in 1982
                    </h1>
                    <p className="font-serif tracking-wide leading-10">
                      State of California, SBN 105616
                      <br />
                      All state and federal courts in California
                      <br />
                      Ninth Circuit Court of Appeals
                    </p>
                    <div className="space-y-3 font-serif ">
                      <h1 className="font-bold text-xl">Contact Information</h1>
                      <p className="font-serif tracking-wide">
                        Phone: (949) 939-3484
                      </p>
                      <p className="font-serif tracking-wide">
                        E-mail: alan@ajdlex.com
                      </p>
                      <p className="font-serif tracking-wide">
                        Business and Commercial Litigation
                      </p>
                      <p className="font-serif tracking-wide">
                        Real Property/Real Property Security Litigation
                      </p>
                      <p className="font-serif tracking-wide">
                        Partnership Disputes
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="place-content-center space-y-10 my-auto place-items-center md:mt-0 mt-10">
                <div className="relative place-content-center flex md:w-[300px] w-2/3 my-auto md:my-auto mx-auto md:ml-10">
                  <Image
                    src={"/images/martindale.png"}
                    alt={"placeholder"}
                    width={"577"}
                    height={"169"}
                    className="flex"
                  />
                </div>
                <div className="relative place-content-center flex md:w-[300px] w-2/3 my-auto md:my-auto mx-auto md:ml-10">
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
