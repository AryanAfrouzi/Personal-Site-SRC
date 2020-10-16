
import { Col } from "react-bootstrap";
import { Title } from "../components";
import Garment from "../assets/others/garment.svg";
import styled from "styled-components";
import React, { useRef, useState } from "react"
// import { ProfileType } from "../../types"
import "./contact-form.css"

const StayTuned = ({ email, budget }) => {

  const [isInquiry, setIsInquiry] = useState(false)
  //const [selectedBudget, setSelectedBudget] = useState(budget.default)
  const inquiryDetails = useRef(null)

  return (
    <>
      <h5
        className="font-header font-semibold text-front text-sm uppercase mt-12 mb-3"
        id="contact"
      >
        Contact
    </h5>

      <form
        action={`https://formspree.io/${email}`}
        className="flex flex-wrap"
        method="post"
      >
        <div className="flex flex-wrap w-full">
          <div className="w-full lg:w-1/3 py-px lg:px-px">
            <input
              aria-label="Name"
              autoComplete="name"
              className="form-input"
              name="name"
              placeholder="NAME"
              required
              type="text"
            />
          </div>
          <div className="w-full lg:w-1/3 py-px lg:px-px">
            <input
              aria-label="E-mail"
              autoComplete="email"
              className="form-input"
              name="email"
              placeholder="EMAIL ADDRESS"
              required
              type="email"
            />
          </div>
          {/* <div className="w-full lg:w-1/3 py-px lg:px-px">
            <div className="form-control bg-back-light">
              <label className="cursor-pointer select-none">
                <input
                  className="hidden"
                  name="inquiry"
                  onChange={() => setIsInquiry(!isInquiry)}
                  type="checkbox"
                />
                <span className="relative inline-block border-2 align-middle mr-2 -mt-1 border-back w-5 h-5">
                  {isInquiry && (
                    <span className="absolute inline-block bg-lead inset-0 m-1"></span>
                  )}
                </span>
                <span className="text-front opacity-50 uppercase">Inquiry</span>
              </label>
            </div>
          </div> */}
        </div>

        <div
          className="w-full overflow-hidden transition-all duration-300 ease-linear"
          style={{
            height: isInquiry ? inquiryDetails.current?.clientHeight : 0,
            opacity: isInquiry ? 100 : 0.3,
          }}
        >
          {/* <div ref={inquiryDetails}>
            <div className="flex flex-wrap w-full py-px lg:p-px">
              <div className="w-1/4 lg:w-1/5 bg-back-light">
                <label
                  htmlFor="budget"
                  className="block opacity-50 text-front px-4 py-3 h-full font-header text-sm uppercase font-semibold leading-tight"
                >
                  Budget
              </label>
              </div>
              <div className="w-3/4 lg:w-4/5 p-4 bg-back-light">
                <input
                  className="input-range"
                  defaultValue={budget.default}
                  max={budget.max}
                  min={budget.min}
                  name="budget"
                  onChange={e => setSelectedBudget(e.currentTarget.value)}
                  step="1"
                  type="range"
                />
                <div className="font-header font-semibold leading-none text-front opacity-50">
                  {budget.currency} {selectedBudget}K
              </div>
              </div>
            </div>

            <div className="flex flex-wrap w-full py-px lg:p-px">
              <input
                aria-label="Project Type"
                autoComplete="new-password"
                className="form-input"
                name="project_type"
                placeholder="PROJECT TYPE (E.G. WEBSITE, MOBILE APP)"
                type="text"
              />
            </div>

            <div className="w-full py-px lg:p-px">
              <input
                aria-label="Phone number"
                autoComplete="tel"
                className="form-input"
                name="phone"
                placeholder="PHONE NUMBER"
                type="tel"
              />
            </div>
          </div> */}
        </div>

        <div className="w-full text-right py-px lg:p-px">
          <textarea
            aria-label="Message"
            className="block form-input bg-back-light resize-none border-b-0 pb-4"
            name="message"
            placeholder="MESSAGE"
            required
            rows="6"
          ></textarea>
          <div className="bg-back-light">
            <input
              className="font-header inline-block font-semibold px-6 py-2 leading-tight cursor-pointer outline-none bg-front text-back-light uppercase mr-4 my-4 transition-opacity duration-150 hover:opacity-75"
              type="submit"
              value="Send"
            />
          </div>
        </div>
      </form>
    </>
    // <Container>
    //   <Col className="m-0 p-0">
    //     <Title title="Contact" icon={Garment} />
    //     <Panel>
    //       <p
    //         className="col-md-5 col-8 mb-5"
    //         style={{ textAlign: "center", fontWeight: 600 }}
    //       >
    //         Although not looking for a job at the moment, I am open to any new
    //         opportunities.
    //       </p>
    //       <form className="col-lg-6">
    //         <div className="form-row">
    //           <div className="form-group col-md-6">
    //             <label style={{ color: "#73737d", fontWeight: 600 }}>
    //               EMail
    //             </label>
    //             <input
    //               type="email"
    //               className="form-control"
    //               id="inputEmail4"
    //               placeholder="Adresse Email"
    //             />
    //           </div>
    //           <div className="form-group col-md-6">
    //             <label style={{ color: "#73737d", fontWeight: 600 }}>Nom</label>
    //             <input
    //               type="text"
    //               className="form-control"
    //               placeholder="Nom complet"
    //             ></input>
    //           </div>
    //         </div>
    //         <div className="form-group">
    //           <label style={{ color: "#73737d", fontWeight: 600 }}>
    //             Laisser un message
    //           </label>
    //           <textarea
    //             className="form-control"
    //             id="exampleFormControlTextarea1"
    //             rows="3"
    //           ></textarea>
    //         </div>
    //         <button
    //           style={{ background: "#00D1B2", color: "#fff" }}
    //           type="button"
    //           className="btn mt-4 mt-sm-0"
    //         >
    //           Envoyer
    //         </button>
    //       </form>
    //     </Panel>
    //   </Col>
    // </Container>
  );
};

export default StayTuned;

const Container = styled.div`
  @media (max-width: 992px) {
    margin-top: 12.5rem;
  }
`;

const Panel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
