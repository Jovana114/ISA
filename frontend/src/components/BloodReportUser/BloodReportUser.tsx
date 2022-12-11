import React, { useState } from "react";
import { Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Switch from "@mui/material/Switch";
import "./BloodReportUser.css";

interface props {
  showReport: boolean;
  id: any;
  close: any;
}

export default function BloodReportUser({ showReport, id, close }: props) {
  const [checked, setChecked] = useState(false);

  const [num, setNum] = useState(0);
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [jmbg, setJmbg] = useState("");
  const [birth, setBirth] = useState("");
  const [gender, setGender] = useState("");
  const [address, setAddress] = useState("");
  const [township, setTownship] = useState("");
  const [location, setLocation] = useState("");
  const [phoneHome, setPhoneHome] = useState("");
  const [phoneJob, setPhoneJob] = useState("");
  const [phoneMobile, setPhoneMobile] = useState("");
  const [companyOrSchool, setCompanyOrSchool] = useState("");
  const [profession, setProfession] = useState("");
  const [
    numberOfPreviousBloodDonations,
    setNumberOfPreviousBloodDonations,
  ] = useState(0);
  const [weigh, setWeigh] = useState(0);
  const [low_pressure, setLow_pressure] = useState(false);
  const [high_pressure, setHigh_pressure] = useState(false);
  const [q1, setQ1] = useState(false);
  const [q2, setQ2] = useState(false);
  const [q3, setQ3] = useState(false);
  const [q4, setQ4] = useState(false);
  const [q5, setQ5] = useState(false);
  const [q6, setQ6] = useState(false);
  const [q7, setQ7] = useState(false);
  const [q8, setQ8] = useState(false);
  const [q9, setQ9] = useState(false);
  const [q10, setQ10] = useState(false);
  const [q11, setQ11] = useState(false);
  const [q12, setQ12] = useState(false);
  const [q13, setQ13] = useState(false);
  const [q14, setQ14] = useState(false);
  const [q15, setQ15] = useState(false);
  const [q16, setQ16] = useState(false);
  const [q17, setQ17] = useState(false);
  const [q18, setQ18] = useState(false);
  const [q19, setQ19] = useState(false);
  const [q20a, setQ20a] = useState(false);
  const [q20b, setQ20b] = useState(false);
  const [q20c, setQ20c] = useState(false);
  const [q21, setQ21] = useState(false);
  const [q22a, setQ22a] = useState(false);
  const [q22b, setQ22b] = useState(false);
  const [q22c, setQ22c] = useState(false);
  const [q22d, setQ22d] = useState(false);
  const [q22e, setQ22e] = useState(false);
  const [q22f, setQ22f] = useState(false);
  const [q22g, setQ22g] = useState(false);
  const [q23a, setQ23a] = useState(false);
  const [q23b, setQ23b] = useState(false);
  const [q23c, setQ23c] = useState(false);
  const [q23d, setQ23d] = useState(false);
  const [q23e, setQ23e] = useState(false);
  const [q23f, setQ23f] = useState(false);
  const [q24, setQ24] = useState(false);
  const [q25, setQ25] = useState(false);
  const [q26, setQ26] = useState(false);

  var jsonData = {
    center_profile_id: id,
    num: num,
    date: date,
    name: name,
    jmbg: jmbg,
    birth: birth,
    gender: gender,
    address: address,
    township: township,
    location: location,
    phone_home: phoneHome,
    phone_job: phoneJob,
    phone_mobile: phoneMobile,
    company_or_school: companyOrSchool,
    profession: profession,
    number_of_previous_blood_donations: numberOfPreviousBloodDonations,
    weigh: weigh,
    low_pressure: low_pressure,
    high_pressure: high_pressure,
    q1: q1,
    q2: q2,
    q3: q3,
    q4: q4,
    q5: q5,
    q6: q6,
    q7: q7,
    q8: q8,
    q9: q9,
    q10: q10,
    q11: q11,
    q12: q12,
    q13: q13,
    q14: q14,
    q15: q15,
    q16: q16,
    q17: q17,
    q18: q18,
    q19: q19,
    q20a: q20a,
    q20b: q20b,
    q20c: q20c,
    q21: q21,
    q22a: q22a,
    q22b: q22b,
    q22c: q22c,
    q22d: q22d,
    q22e: q22e,
    q22g: q22g,
    q23a: q23a,
    q23b: q23b,
    q23c: q23c,
    q23d: q23d,
    q23e: q23e,
    q23f: q23f,
    q24: q24,
    q25: q25,
    q26: q26,
  };

  // const config = {
  //   headers: {
  //     "Content-type": "application/json",
  //     Authorization: `Bearer ${JSON.parse(sessionStorage.getItem("token")!)}`,
  //   },
  // };

  let userId = JSON.parse(sessionStorage.getItem("id")!);

  const handleUserReport = async (e: any) => {
    e.preventDefault();

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JSON.parse(sessionStorage.getItem("token")!)}`,
      },

      body: JSON.stringify(jsonData),
    };
    fetch(
      process.env.REACT_APP_API_URL +
        `/bloodReport/createBloodReport/${id}/${userId}`,
      requestOptions
    ).then((response) => {
      if (response.ok) close();
    });
  };

  return (
    <div
      className="report-wrapper"
      style={{
        display: `${showReport ? "block" : "none"}`,
      }}
    >
      <div>
        <Button onClick={close} className="report-exit">
          <CloseIcon />
        </Button>
      </div>
      <div className="report-form-wrapper">
        <div className="Auth-form-container dialog">
          <form className="Auth-form" onSubmit={handleUserReport}>
            <div className="Auth-form-content">
              <div className="form-group mt-3 divSize50R">
                <label style={{ textTransform: "capitalize" }}>Broj</label>
                <input
                  value={num}
                  onChange={(e) => setNum(Number(e.target.value))}
                  required
                  type="number"
                  className="form-control mt-1"
                  placeholder={""}
                />
              </div>
              <div className="form-group mt-3 divSize50L">
                <label style={{ textTransform: "capitalize" }}>Datum</label>
                <input
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                  type="text"
                  className="form-control mt-1"
                  placeholder={""}
                />
              </div>
              <div className="form-group mt-3 divSize50R">
                <label style={{}}>Prezime, ime roditelja, ime</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  type="text"
                  className="form-control mt-1"
                />
              </div>
              <div className="form-group mt-3 divSize50L">
                <label style={{ textTransform: "capitalize" }}>Jmbg</label>
                <input
                  value={jmbg}
                  onChange={(e) => setJmbg(e.target.value)}
                  required
                  type="text"
                  className="form-control mt-1"
                />
              </div>
              <div className="form-group mt-3">
                <label style={{ textTransform: "capitalize" }}>
                  Datum rodjenja
                </label>
                <input
                  value={birth}
                  onChange={(e) => setBirth(e.target.value)}
                  required
                  type="date"
                  className="form-control mt-1"
                />
              </div>
              <div className="form-group mt-3">
                <label style={{ textTransform: "capitalize" }}>Pol</label>
                <input
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  required
                  type="text"
                  className="form-control mt-1"
                  placeholder={"F/M"}
                />
              </div>
              <div className="form-group mt-3">
                <label style={{ textTransform: "capitalize" }}>Adresa</label>
                <input
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  required
                  type="text"
                  className="form-control mt-1"
                />
              </div>
              <div className="form-group mt-3 divSize50R">
                <label style={{ textTransform: "capitalize" }}>Opstina</label>
                <input
                  value={township}
                  onChange={(e) => setTownship(e.target.value)}
                  required
                  type="text"
                  className="form-control mt-1"
                />
              </div>
              <div className="form-group mt-3 divSize50L">
                <label style={{ textTransform: "capitalize" }}>Lokacija</label>
                <input
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  required
                  type="text"
                  className="form-control mt-1"
                />
              </div>
              <div className="form-group mt-3 divSize50R">
                <label style={{ textTransform: "capitalize" }}>
                  Kucni telefon
                </label>
                <input
                  value={phoneHome}
                  onChange={(e) => setPhoneHome(e.target.value)}
                  required
                  type="text"
                  className="form-control mt-1"
                />
              </div>
              <div className="form-group mt-3 divSize50L">
                <label style={{ textTransform: "capitalize" }}>
                  Poslovni telefon
                </label>
                <input
                  value={phoneJob}
                  onChange={(e) => setPhoneJob(e.target.value)}
                  required
                  type="text"
                  className="form-control mt-1"
                />
              </div>
              <div className="form-group mt-3">
                <label style={{ textTransform: "capitalize" }}>
                  Mobilni telefon
                </label>
                <input
                  value={phoneMobile}
                  onChange={(e) => setPhoneMobile(e.target.value)}
                  required
                  type="text"
                  className="form-control mt-1"
                />
              </div>
              <div className="form-group mt-3">
                <label style={{ textTransform: "capitalize" }}>
                  Kompanija, skola ili fakultet
                </label>
                <input
                  value={companyOrSchool}
                  onChange={(e) => setCompanyOrSchool(e.target.value)}
                  required
                  type="text"
                  className="form-control mt-1"
                />
              </div>
              <div className="form-group mt-3">
                <label style={{ textTransform: "capitalize" }}>Profesija</label>
                <input
                  value={profession}
                  onChange={(e) => setProfession(e.target.value)}
                  required
                  type="text"
                  className="form-control mt-1"
                />
              </div>
              <div className="form-group mt-3">
                <label style={{ textTransform: "capitalize" }}>
                  Broj prethodnih davanja krvi
                </label>
                <input
                  value={numberOfPreviousBloodDonations}
                  onChange={(e) =>
                    setNumberOfPreviousBloodDonations(Number(e.target.value))
                  }
                  required
                  type="number"
                  className="form-control mt-1"
                />
              </div>
              <div className="form-group mt-3">
                <label style={{ textTransform: "capitalize" }}>Tezina:</label>
                <input
                  value={weigh}
                  onChange={(e) => setWeigh(Number(e.target.value))}
                  required
                  type="number"
                  className="form-control mt-1"
                />
              </div>
              <div className="form-group mt-3">
                <label style={{}}>
                  Da li imate problem s niskim pritiskom?
                </label>
                <Switch
                  checked={low_pressure}
                  onChange={() => setLow_pressure(!low_pressure)}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
              <div className="form-group mt-3">
                <label style={{}}>
                  Da li imate problem s visokim pritiskom?
                </label>
                <Switch
                  checked={high_pressure}
                  onChange={() => setHigh_pressure(!high_pressure)}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
              <div className="form-group mt-3">
                <label style={{}}>
                  1) Da li ste do sada dobrovoljno davali krv ili komponente
                  krvi?
                </label>
                <Switch
                  checked={q1}
                  onChange={() => setQ1(!q1)}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
              <div className="form-group mt-3">
                <label style={{}}>
                  2) Da li ste ikada bili odbijeni kao davalac krvi ili
                  komponente krvi?
                </label>
                <Switch
                  checked={q2}
                  onChange={() => setQ2(!q2)}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
              <div className="form-group mt-3">
                <label style={{}}>
                  3) Da li se trenutno osećate zdravim, sposobnim i odmornim da
                  date krv ili komponente krvi?
                </label>
                <Switch
                  checked={q3}
                  onChange={() => setQ3(!q3)}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
              <div className="form-group mt-3">
                <label style={{}}>
                  4) Da li ste nešto jeli pre dolaska na davanje krvi ili
                  komponente krvi?
                </label>
                <Switch
                  checked={q4}
                  onChange={() => setQ4(!q4)}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
              <div className="form-group mt-3">
                <label style={{}}>
                  5) Da li se bavite opasnim zanimanjem ili hobijem?
                </label>
                <Switch
                  checked={q5}
                  onChange={() => setQ5(!q5)}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
              <div className="form-group mt-3">
                <label style={{}}>
                  6) Da li redovno (svakodnevno) uzimate bilo kakve lekove?
                </label>
                <Switch
                  checked={q6}
                  onChange={() => setQ6(!q6)}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
              <div className="form-group mt-3">
                <label style={{}}>
                  7) Da li ste poslednja 2-3 dana uzimali bilo kakve lekove
                  (npr. Brufen, Kafetin, Analgin...)?
                </label>
                <Switch
                  checked={q7}
                  onChange={() => setQ7(!q7)}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
              <div className="form-group mt-3">
                <label style={{}}>
                  8) Da li stalno uzimate Aspirin (Cardiopirin)? Da li ste ga
                  uzimali u poslednjih 5 dana?
                </label>
                <Switch
                  checked={q8}
                  onChange={() => setQ8(!q8)}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
              <div className="form-group mt-3">
                <label style={{}}>
                  9) Da li ste do sada ispitivani ili lečeni u bolnici ili ste
                  trenutno na ispitivanju ili bolovanju?
                </label>
                <Switch
                  checked={q9}
                  onChange={() => setQ9(!q9)}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
              <div className="form-group mt-3">
                <label style={{}}>
                  10) Da li ste vadili zub u proteklih 7 dana?
                </label>
                <Switch
                  checked={q10}
                  onChange={() => setQ10(!q10)}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
              <div className="form-group mt-3">
                <label style={{}}>
                  11) Da li ste u poslednjih 7 do 10 dana imali temperaturu
                  preko 38 C, kijavicu, prehladu ili uzimali antibiotike?
                </label>
                <Switch
                  checked={q11}
                  onChange={() => setQ11(!q11)}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
              <div className="form-group mt-3">
                <label style={{}}>
                  12) Da li ste primili bilo koju vakcinu ili serum u proteklih
                  12 meseci?
                </label>
                <Switch
                  checked={q12}
                  onChange={() => setQ12(!q12)}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
              <div className="form-group mt-3">
                <label style={{}}>
                  13) Da li ste u poslednjih 6 meseci naglo izgubili na težini?
                </label>
                <Switch
                  checked={q13}
                  onChange={() => setQ13(!q13)}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
              <div className="form-group mt-3">
                <label style={{}}>
                  14) Da li ste imali ubode krpelja u proteklih 12 meseci i da
                  li ste se zbog toga javljali lekaru?
                </label>
                <Switch
                  checked={q14}
                  onChange={() => setQ14(!q14)}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
              <div className="form-group mt-3">
                <label style={{}}>
                  15) Da li ste ikada lečeni od epilepsije (padavice), šećerne
                  bolesti, astme, tuberkuloze, infarkta, moždanog udara,
                  malignih oboljenja, mentalnih bolesti ili malarije?
                </label>
                <Switch
                  checked={q15}
                  onChange={() => setQ15(!q15)}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
              <div className="form-group mt-3">
                <label style={{}}>
                  16) Da li bolujete od neke druge hronične bolesti: srca,
                  pluća, bubrega, jetre, želuca i creva, kostiju i zglobova,
                  nervnog sistema, krvi i krvnih sudova?
                </label>
                <Switch
                  checked={q16}
                  onChange={() => setQ16(!q16)}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
              <div className="form-group mt-3">
                <label style={{}}>
                  17) Da li ste ikada imali problema sa štitastom žlezdom,
                  hipofizom i/ili primali hormone?
                </label>
                <Switch
                  checked={q17}
                  onChange={() => setQ17(!q17)}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
              <div className="form-group mt-3">
                <label style={{}}>
                  18) Da li imate neke promene na koži ili bolujete od alergije?
                </label>
                <Switch
                  checked={q18}
                  onChange={() => setQ18(!q18)}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
              <div className="form-group mt-3">
                <label style={{}}>
                  19) Da li dugo krvarite posle povrede ili spontano dobijate
                  modrice?
                </label>
                <Switch
                  checked={q19}
                  onChange={() => setQ19(!q19)}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
              <div className="form-group mt-3">
                <label style={{}}>20) Da li ste u proteklih 6 meseci:</label>
                <label style={{}}>
                  {" "}
                  a) imali neku operaciju ili primili krv?
                </label>
                <Switch
                  checked={q20a}
                  onChange={() => setQ20a(!q20a)}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
              <div className="form-group mt-3">
                <label style={{}}>
                  {" "}
                  b) putovali ili živeli u inostranstvu?
                </label>
                <Switch
                  checked={q20b}
                  onChange={() => setQ20b(!q20b)}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
              <div className="form-group mt-3">
                <label style={{}}>
                  {" "}
                  c) imali akupunkturu, pirsing ili tetovažu?
                </label>
                <Switch
                  checked={q20c}
                  onChange={() => setQ20c(!q20c)}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
              <div className="form-group mt-3">
                <label style={{ textTransform: "capitalize" }}>
                  21) Da li ste pili alkohol u poslednjih 6 sati?
                </label>
                <Switch
                  checked={q21}
                  onChange={() => setQ21(!q21)}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
              <div className="form-group mt-3">
                <label style={{}}>
                  22) Oblici rizičnih stanja i ponašanja::
                </label>
                <label style={{}}>
                  {" "}
                  a) Da li ste bolovali ili bolujete od hepatitisa (žutice) A, B
                  ili C?
                </label>
                <Switch
                  checked={q22a}
                  onChange={() => setQ22a(!q22a)}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
              <div className="form-group mt-3">
                <label style={{}}>
                  {" "}
                  b) Da li ste bili u kontaktu ili živite sa osobom obolelom od
                  hepatitisa (žutice)?
                </label>
                <Switch
                  checked={q22b}
                  onChange={() => setQ22b(!q22b)}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
              <div className="form-group mt-3">
                <label style={{}}>
                  {" "}
                  c) Da li mislite da je postojala mogućnost da se zarazite
                  HIV-om?
                </label>
                <Switch
                  checked={q22c}
                  onChange={() => setQ22c(!q22c)}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
              <div className="form-group mt-3">
                <label style={{}}>
                  {" "}
                  d) Da li ste ikada koristili bilo koju vrstu droge?
                </label>
                <Switch
                  checked={q22d}
                  onChange={() => setQ22d(!q22d)}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
              <div className="form-group mt-3">
                <label style={{}}>
                  {" "}
                  e) Da li ste ikada koristili preparate koji se zvanično ne
                  izdaju na recept i/ili preparate za bodi bilding (steroide)?
                </label>
                <Switch
                  checked={q22e}
                  onChange={() => setQ22e(!q22e)}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
              <div className="form-group mt-3">
                <label style={{}}>
                  {" "}
                  f) Da li ste ikada za pružanje seksualnih usluga uzimali novac
                  ili drogu?
                </label>
                <Switch
                  checked={q22f}
                  onChange={() => setQ22f(!q22f)}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
              <div className="form-group mt-3">
                <label style={{}}>
                  {" "}
                  g) Da li znate na koje sve načine ste mogli izložiti sebe
                  riziku od zaraznih, krvlju prenosivih bolesti?
                </label>
                <Switch
                  checked={q22g}
                  onChange={() => setQ22g(!q22g)}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
              <div className="form-group mt-3">
                <label style={{}}>
                  23) Da li ste imali seksualne odnose tokom proteklih 6 meseci
                  bez zaštite:
                </label>
                <label style={{}}> a) sa osobom koja je HIV pozitivna?</label>
                <Switch
                  checked={q23a}
                  onChange={() => setQ23a(!q23a)}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
              <div className="form-group mt-3">
                <label style={{}}>
                  {" "}
                  b) sa osobom koja ima ili je imala hepatitis (žuticu) B ili C?
                </label>
                <Switch
                  checked={q23b}
                  onChange={() => setQ23b(!q23b)}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
              <div className="form-group mt-3">
                <label style={{}}>
                  {" "}
                  c) sa osobom koja je ikada za pružanje seksualnih usluga
                  uzimala novac ili drogu?
                </label>
                <Switch
                  checked={q23c}
                  onChange={() => setQ23c(!q23c)}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
              <div className="form-group mt-3">
                <label style={{}}>
                  {" "}
                  d) sa osobom koja je ikada koristila bilo koju vrstu droge na
                  bilo koji način?
                </label>
                <Switch
                  checked={q23d}
                  onChange={() => setQ23d(!q23d)}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
              <div className="form-group mt-3">
                <label style={{}}>
                  {" "}
                  e) sa osobom čije Vas je dotadašnje seksualno ponašanje moglo
                  dovesti u rizik dobijanja seksualno prenosive bolesti?
                </label>
                <Switch
                  checked={q23e}
                  onChange={() => setQ23e(!q23e)}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
              <div className="form-group mt-3">
                <label style={{}}>
                  {" "}
                  f) da li ste Vi imali analne seksualne odnose tokom proteklih
                  6 meseci?
                </label>
                <Switch
                  checked={q23f}
                  onChange={() => setQ23f(!q23f)}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
              <div className="form-group mt-3">
                <label style={{}}>For women</label>
                <label style={{}}>24) Da li ste u drugom stanju?</label>
                <Switch
                  checked={q24}
                  onChange={() => setQ24(!q24)}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
              <div className="form-group mt-3">
                <label style={{}}>25) Da li trenutno imate menstruaciju?</label>
                <Switch
                  checked={q25}
                  onChange={() => setQ25(!q25)}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
              <div className="form-group mt-3">
                <label style={{}}>
                  26) Da li ste u poslednjih 6 meseci imali porođaj ili prekid
                  trudnoće?
                </label>
                <Switch
                  checked={q26}
                  onChange={() => setQ26(!q26)}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
              <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
