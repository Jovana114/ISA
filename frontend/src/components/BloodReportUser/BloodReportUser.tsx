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
  const handleUserReport = async (e: any) => {
    e.preventDefault();
  };

  const [checked, setChecked] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  return (
    <div
      style={{
        position: "absolute",
        width: "680px",
        height: "710px",
        background: "white",
        zIndex: "100",
        display: `${showReport ? "block" : "none"}`,
        borderRadius: "20px",
      }}
    >
      <div
        style={{
          position: "relative",
        }}
      >
        <Button
          onClick={close}
          style={{
            right: "10px",
            top: "10px",
            float: "right",
            minWidth: "unset",
            padding: "5px",
          }}
        >
          <CloseIcon />
        </Button>
      </div>
      <div
        style={{
          position: "relative",
          width: "100%",
          display: "block",
          maxHeight: '660px',
          height: "100%",
          margin: "0 auto",
          marginTop: "50px",
          padding: "20px auto",
          overflow: 'hidden',
          overflowY: 'scroll'
        }}
      >
        {/* Ovde pises */}
        <div className="Auth-form-container dialog">
          <form className="Auth-form" onSubmit={handleUserReport}>
            <div className="Auth-form-content">
              <div className="form-group mt-3 divSize50R">
                <label style={{ textTransform: "capitalize" }}>No</label>
                <input
                  required
                  type="text"
                  className="form-control mt-1"
                  placeholder={""}
                />
              </div>
              <div className="form-group mt-3 divSize50L">
                <label style={{ textTransform: "capitalize" }}>Date</label>
                <input
                  required
                  type="text"
                  className="form-control mt-1"
                  placeholder={"Placeholder"}
                  defaultValue={"yyyy-mm-dd"}
                />
              </div>
              <div className="form-group mt-3 divSize50R">
                <label style={{}}>Last name, parent's name, first name</label>
                <input required type="text" className="form-control mt-1" />
              </div>
              <div className="form-group mt-3 divSize50L">
                <label style={{ textTransform: "capitalize" }}>Jmbg</label>
                <input required type="text" className="form-control mt-1" />
              </div><div className="form-group mt-3">
                <label style={{ textTransform: "capitalize" }}>Gender</label>
                <input
                  required
                  type="text"
                  className="form-control mt-1"
                  placeholder={"Placeholder"}
                  defaultValue={"F/M"}
                />
                <label style={{ textTransform: "capitalize" }}>Address</label>
                <input required type="text" className="form-control mt-1" />
              </div>
              <div className="form-group mt-3">
                <label style={{ textTransform: "capitalize" }}>
                  Date of birth
                </label>
                <input
                  required
                  type="text"
                  className="form-control mt-1"
                  placeholder={"Placeholder"}
                  defaultValue={"yyyy-mm-dd"}
                />
              </div>
              
              <div className="form-group mt-3 divSize50R">
                <label style={{ textTransform: "capitalize" }}>Township</label>
                <input required type="text" className="form-control mt-1" />
              </div>
              <div className="form-group mt-3 divSize50L">
                <label style={{ textTransform: "capitalize" }}>Location</label>
                <input required type="text" className="form-control mt-1" />
              </div>
              <div className="form-group mt-3 divSize50R">
                <label style={{ textTransform: "capitalize" }}>
                  Phone-home
                </label>
                <input required type="text" className="form-control mt-1" />
              </div>
              <div className="form-group mt-3 divSize50L">
                <label style={{ textTransform: "capitalize" }}>Phone-job</label>
                <input required type="text" className="form-control mt-1" />
              </div>
              <div className="form-group mt-3">
                <label style={{ textTransform: "capitalize" }}>
                  Phone-mobile
                </label>
                <input required type="text" className="form-control mt-1" />
              </div>
              <div className="form-group mt-3">
                <label style={{ }}>
                  Company, school or college
                </label>
                </div>
              <div className="form-group mt-3">
                <input required type="text" className="form-control mt-1" />
                <label style={{ textTransform: "capitalize" }}>
                  Profession
                </label>
                <input required type="text" className="form-control mt-1" />
              </div>
              <div className="form-group mt-3">
                <label style={{  }}>
                  Number of previous blood donations
                </label>
                <input required type="text" className="form-control mt-1" />
              </div>
              <div className="form-group mt-3">
                <label style={{  }}>
                  1) Da li ste do sada dobrovoljno davali krv ili komponente
                  krvi?
                </label>
                <Switch
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
              <div className="form-group mt-3">
                <label style={{ }}>
                  2) Da li ste ikada bili odbijeni kao davalac krvi ili
                  komponente krvi?
                </label>
                <Switch
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
              <div className="form-group mt-3">
                <label style={{  }}>
                  3) Da li se trenutno osećate zdravim, sposobnim i odmornim da
                  date krv ili komponente krvi?
                </label>
                <Switch
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
              <div className="form-group mt-3">
                <label style={{ }}>
                  4) Da li ste nešto jeli pre dolaska na davanje krvi ili
                  komponente krvi?
                </label>
                <Switch
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
              <div className="form-group mt-3">
                <label style={{  }}>
                  5) Da li se bavite opasnim zanimanjem ili hobijem?
                </label>
                <Switch
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
              <div className="form-group mt-3">
                <label style={{ }}>
                  6) Da li redovno (svakodnevno) uzimate bilo kakve lekove?
                </label>
                <Switch
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
              <div className="form-group mt-3">
                <label style={{  }}>
                  7) Da li ste poslednja 2-3 dana uzimali bilo kakve lekove
                  (npr. Brufen, Kafetin, Analgin...)?
                </label>
                <Switch
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
              <div className="form-group mt-3">
                <label style={{ }}>
                  8) Da li stalno uzimate Aspirin (Cardiopirin)? Da li ste ga
                  uzimali u poslednjih 5 dana?
                </label>
                <Switch
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
              <div className="form-group mt-3">
                <label style={{  }}>
                  9) Da li ste do sada ispitivani ili lečeni u bolnici ili ste
                  trenutno na ispitivanju ili bolovanju?
                </label>
                <Switch
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
              <div className="form-group mt-3">
                <label style={{  }}>
                  10) Da li ste vadili zub u proteklih 7 dana?
                </label>
                <Switch
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
              <div className="form-group mt-3">
                <label style={{  }}>
                  11) Da li ste u poslednjih 7 do 10 dana imali temperaturu
                  preko 38 C, kijavicu, prehladu ili uzimali antibiotike?
                </label>
                <Switch
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
              <div className="form-group mt-3">
                <label style={{  }}>
                  12) Da li ste primili bilo koju vakcinu ili serum u proteklih
                  12 meseci?
                </label>
                <Switch
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
              <div className="form-group mt-3">
                <label style={{  }}>
                  13) Da li ste u poslednjih 6 meseci naglo izgubili na težini?
                </label>
                <Switch
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
              <div className="form-group mt-3">
                <label style={{  }}>
                  14) Da li ste imali ubode krpelja u proteklih 12 meseci i da
                  li ste se zbog toga javljali lekaru?
                </label>
                <Switch
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
              <div className="form-group mt-3">
                <label style={{  }}>
                  15) Da li ste ikada lečeni od epilepsije (padavice), šećerne
                  bolesti, astme, tuberkuloze, infarkta, moždanog udara,
                  malignih oboljenja, mentalnih bolesti ili malarije?
                </label>
                <Switch
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
              <div className="form-group mt-3">
                <label style={{  }}>
                  16) Da li bolujete od neke druge hronične bolesti: srca,
                  pluća, bubrega, jetre, želuca i creva, kostiju i zglobova,
                  nervnog sistema, krvi i krvnih sudova?
                </label>
                <Switch
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
              <div className="form-group mt-3">
                <label style={{  }}>
                  17) Da li ste ikada imali problema sa štitastom žlezdom,
                  hipofizom i/ili primali hormone?
                </label>
                <Switch
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
              <div className="form-group mt-3">
                <label style={{ }}>
                  18) Da li imate neke promene na koži ili bolujete od alergije?
                </label>
                <Switch
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
              <div className="form-group mt-3">
                <label style={{  }}>
                  19) Da li dugo krvarite posle povrede ili spontano dobijate
                  modrice?
                </label>
                <Switch
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
              <div className="form-group mt-3">
                <label style={{  }}>
                  20) Da li ste u proteklih 6 meseci:
                </label>
                <label style={{  }}>
                  {" "}
                  a) imali neku operaciju ili primili krv?
                </label>
                <Switch
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
              <div className="form-group mt-3">
                <label style={{  }}>
                  {" "}
                  b) putovali ili živeli u inostranstvu?
                </label>
                <Switch
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
              <div className="form-group mt-3">
                <label style={{  }}>
                  {" "}
                  c) imali akupunkturu, pirsing ili tetovažu?
                </label>
                <Switch
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
              <div className="form-group mt-3">
                <label style={{ textTransform: "capitalize" }}>
                  21) Da li ste pili alkohol u poslednjih 6 sati?
                </label>
                <Switch
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
              <div className="form-group mt-3">
                <label style={{  }}>
                  22) Oblici rizičnih stanja i ponašanja::
                </label>
                <label style={{ }}>
                  {" "}
                  a) Da li ste bolovali ili bolujete od hepatitisa (žutice) A, B
                  ili C?
                </label>
                <Switch
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
              <div className="form-group mt-3">
                <label style={{  }}>
                  {" "}
                  b) Da li ste bili u kontaktu ili živite sa osobom obolelom od
                  hepatitisa (žutice)?
                </label>
                <Switch
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
              <div className="form-group mt-3">
                <label style={{  }}>
                  {" "}
                  c) Da li mislite da je postojala mogućnost da se zarazite
                  HIV-om?
                </label>
                <Switch
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
              <div className="form-group mt-3">
                <label style={{  }}>
                  {" "}
                  d) Da li ste ikada koristili bilo koju vrstu droge?
                </label>
                <Switch
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
              <div className="form-group mt-3">
                <label style={{  }}>
                  {" "}
                  e) Da li ste ikada koristili preparate koji se zvanično ne
                  izdaju na recept i/ili preparate za bodi bilding (steroide)?
                </label>
                <Switch
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
              <div className="form-group mt-3">
                <label style={{  }}>
                  {" "}
                  f) Da li ste ikada za pružanje seksualnih usluga uzimali novac
                  ili drogu?
                </label>
                <Switch
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
              <div className="form-group mt-3">
                <label style={{  }}>
                  {" "}
                  g) Da li znate na koje sve načine ste mogli izložiti sebe
                  riziku od zaraznih, krvlju prenosivih bolesti?
                </label>
                <Switch
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
              <div className="form-group mt-3">
                <label style={{ textTransform: "capitalize" }}>
                  {" "}
                  e) Da li znate na koje sve načine ste mogli izložiti sebe
                  riziku od zaraznih, krvlju prenosivih bolesti?
                </label>
                <Switch
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
              <div className="form-group mt-3">
                <label style={{  }}>
                  23) Da li ste imali seksualne odnose tokom proteklih 6 meseci
                  bez zaštite:
                </label>
                <label style={{  }}>
                  {" "}
                  a) sa osobom koja je HIV pozitivna?
                </label>
                <Switch
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
              <div className="form-group mt-3">
                <label style={{  }}>
                  {" "}
                  b) sa osobom koja ima ili je imala hepatitis (žuticu) B ili C?
                </label>
                <Switch
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
              <div className="form-group mt-3">
                <label style={{  }}>
                  {" "}
                  c) sa osobom koja je ikada za pružanje seksualnih usluga
                  uzimala novac ili drogu?
                </label>
                <Switch
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
              <div className="form-group mt-3">
                <label style={{ }}>
                  {" "}
                  d) sa osobom koja je ikada koristila bilo koju vrstu droge na
                  bilo koji način?
                </label>
                <Switch
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
              <div className="form-group mt-3">
                <label style={{  }}>
                  {" "}
                  e) sa osobom čije Vas je dotadašnje seksualno ponašanje moglo
                  dovesti u rizik dobijanja seksualno prenosive bolesti?
                </label>
                <Switch
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
              <div className="form-group mt-3">
                <label style={{  }}>
                  {" "}
                  f) da li ste Vi imali analne seksualne odnose tokom proteklih
                  6 meseci?
                </label>
                <Switch
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
              <div className="form-group mt-3">
                <label style={{  }}>For women</label>
                <label style={{  }}>
                  24) Da li ste u drugom stanju?
                </label>
                <Switch
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
              <div className="form-group mt-3">
                <label style={{  }}>
                  25) Da li trenutno imate menstruaciju?
                </label>
                <Switch
                  checked={checked}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </div>
              <div className="form-group mt-3">
                <label style={{  }}>
                  26) Da li ste u poslednjih 6 meseci imali porođaj ili prekid
                  trudnoće?
                </label>
                <Switch
                  checked={checked}
                  onChange={handleChange}
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
