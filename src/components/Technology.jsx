import React from "react";
import devicesImg from "../assets/images/png/treatment1.png";
import tratmentImg from "../assets/images/png/treatment2.png";
import topLeaf from "../assets/images/png/top-leaf.png";
import bottomleaf from "../assets/images/png/bootom-leaf.png";

function Technology() {
  return (
    <div className="min-vh-100 d-flex position-relative">
      <div className="position-absolute pos_topLeaf d-lg-block d-none">
        <img className="max_w_348" src={topLeaf} alt="topLeaf" />
      </div>
      <div className="position-absolute pos_bottmLeaf d-lg-block d-none">
        <img className="max_w_387 w-100" src={bottomleaf} alt="bottomleaf" />
      </div>
      <div className="grow-1 d-flex align-items-center">
        <div className="container">
          <div className="position-relative">
            <div className="outerBox">
              <h1 className="font_Kaushan fw-normal text-lg color_lightGreen leading_sm_46 leading_32 text-center underline position-relative">
                Cutting Edge Technology
              </h1>
              <h2 className="font_Archivo fw-semibold text-xl  leading_lg_62 leading_sm_40 leading_36 color_lightBlack text-center pb_lg_60 pb_30 mb-0">
                Devices and Treatments to meet
                <span className="d-lg-block"> your needs</span>
              </h2>
              <div className="d-flex flex_wrap gap_40 justify-content-center">
                <div className="device_card">
                  <img
                    className="w-100 max_w_510"
                    src={devicesImg}
                    alt={devicesImg}
                  />
                  <div className="p_30">
                    <p className="font_Archivo fw-semibold text-2md leading_32 color_lightBlack mb-lg-3 mb-1">
                      Devices
                    </p>
                    <p className="font_Archivo font-normal text-sm leading_24 pb-lg-4 pb-sm-3 pb-2 lg-mb-1 color_lightBlack70">
                      Our state-of-the-art devices are designed to target a
                      variety of{" "}
                      <span className="d-lg-block">
                        skin concerns with precision and efficacy.
                      </span>
                    </p>
                    <button className="font_Archivo font-semibold text-md leading_19 bg_lightGreen btn_property color_white">
                      Our Devices
                    </button>
                  </div>
                </div>
                <div className="device_card">
                  <img
                    className="w-100 max_w_510"
                    src={tratmentImg}
                    alt={tratmentImg}
                  />
                  <div className="p_30">
                    <p className="font_Archivo fw-semibold text-2md leading_32 color_lightBlack mb-lg-3 mb-1">
                      Treatments
                    </p>
                    <p className="font_Archivo font-normal text-sm leading_24 pb-lg-4 pb-sm-3 pb-2 lg-mb-1 mb-0 color_lightBlack70">
                      At Halsey Dermatology, we offer a comprehensive range of
                      <span className="d-lg-block">
                        treatments to address your unique skin care needs.
                      </span>
                    </p>
                    <button className="font_Archivo font-semibold text-md leading_19 bg_lightGreen btn_property color_white">
                      Our Treatments
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technology;
