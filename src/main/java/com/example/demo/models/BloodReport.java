package com.example.demo.models;


import javax.persistence.*;

@Entity
@Table(name = "blood_report")
public class BloodReport {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Popunjava davalac

    private int no;
    private String date;
    private String lastName_nameOfTheParent_firstName;
    private String jmbg;
    private String dateOfBirth;
    private String gender;
    private String address;
    private String township;
    private String location;
    private String phoneHome;
    private String phoneJob;
    private String phoneMobile;
    private String companyOrSchool;
    private String profession;
    private int numberOfPreviousBloodDonations;

    // Popunjava sluzbeno lice

    private String bloodType;
    private String noteToMD;

    private String copperSulfate;
    private int normalLevel;
    private int lowLevel;
    private String hemoglobinometer;
    private String readValue;

    private String lungs;
    private String heart;
    private String TA;
    private String TT;
    private String TB;
    private String bagType;
    private String note;
    private Boolean accepted;
    private String reasonForRejection;

    private int bagLotNumber;

    private String punctureSite;
    private String beginingOfDonation;
    private String endOfDonation;
    private int amountOfBloodTaken;
    private String reasonForSuspension;


    // Pitanja - popunjava davalac
    private Boolean q1;
    private Boolean q2;
    private Boolean q3;
    private Boolean q4;
    private Boolean q5;
    private Boolean q6;
    private Boolean q7;
    private Boolean q8;
    private Boolean q9;
    private Boolean q10;
    private Boolean q11;
    private Boolean q12;
    private Boolean q13;
    private Boolean q14;
    private Boolean q15;
    private Boolean q16;
    private Boolean q17;
    private Boolean q18;
    private Boolean q19;
    private Boolean q20a;
    private Boolean q20b;
    private Boolean q20c;
    private Boolean q21;
    private Boolean q22a;
    private Boolean q22b;
    private Boolean q22c;
    private Boolean q22d;
    private Boolean q22e;
    private Boolean q22f;
    private Boolean q22g;
    private Boolean q23a;
    private Boolean q23b;
    private Boolean q23c;
    private Boolean q23d;
    private Boolean q23e;
    private Boolean q23f;
    private Boolean q23g;
    private Boolean q24;
    private Boolean q25;
    private Boolean q26;

    public BloodReport(Long id, int no, String date, String lastName_nameOfTheParent_firstName, String jmbg, String dateOfBirth, String gender, String address, String township, String location, String phoneHome, String phoneJob, String phoneMobile, String companyOrSchool, String profession, int numberOfPreviousBloodDonations, String bloodType, String noteToMD, String copperSulfate, int normalLevel, int lowLevel, String hemoglobinometer, String readValue, String lungs, String heart, String TA, String TT, String TB, String bagType, String note, Boolean accepted, String reasonForRejection, int bagLotNumber, String punctureSite, String beginingOfDonation, String endOfDonation, int amountOfBloodTaken, String reasonForSuspension, Boolean q1, Boolean q2, Boolean q3, Boolean q4, Boolean q5, Boolean q6, Boolean q7, Boolean q8, Boolean q9, Boolean q10, Boolean q11, Boolean q12, Boolean q13, Boolean q14, Boolean q15, Boolean q16, Boolean q17, Boolean q18, Boolean q19, Boolean q20a, Boolean q20b, Boolean q20c, Boolean q21, Boolean q22a, Boolean q22b, Boolean q22c, Boolean q22d, Boolean q22e, Boolean q22f, Boolean q22g, Boolean q23a, Boolean q23b, Boolean q23c, Boolean q23d, Boolean q23e, Boolean q23f, Boolean q23g, Boolean q24, Boolean q25, Boolean q26) {
        this.id = id;
        this.no = no;
        this.date = date;
        this.lastName_nameOfTheParent_firstName = lastName_nameOfTheParent_firstName;
        this.jmbg = jmbg;
        this.dateOfBirth = dateOfBirth;
        this.gender = gender;
        this.address = address;
        this.township = township;
        this.location = location;
        this.phoneHome = phoneHome;
        this.phoneJob = phoneJob;
        this.phoneMobile = phoneMobile;
        this.companyOrSchool = companyOrSchool;
        this.profession = profession;
        this.numberOfPreviousBloodDonations = numberOfPreviousBloodDonations;
        this.bloodType = bloodType;
        this.noteToMD = noteToMD;
        this.copperSulfate = copperSulfate;
        this.normalLevel = normalLevel;
        this.lowLevel = lowLevel;
        this.hemoglobinometer = hemoglobinometer;
        this.readValue = readValue;
        this.lungs = lungs;
        this.heart = heart;
        this.TA = TA;
        this.TT = TT;
        this.TB = TB;
        this.bagType = bagType;
        this.note = note;
        this.accepted = accepted;
        this.reasonForRejection = reasonForRejection;
        this.bagLotNumber = bagLotNumber;
        this.punctureSite = punctureSite;
        this.beginingOfDonation = beginingOfDonation;
        this.endOfDonation = endOfDonation;
        this.amountOfBloodTaken = amountOfBloodTaken;
        this.reasonForSuspension = reasonForSuspension;
        this.q1 = q1;
        this.q2 = q2;
        this.q3 = q3;
        this.q4 = q4;
        this.q5 = q5;
        this.q6 = q6;
        this.q7 = q7;
        this.q8 = q8;
        this.q9 = q9;
        this.q10 = q10;
        this.q11 = q11;
        this.q12 = q12;
        this.q13 = q13;
        this.q14 = q14;
        this.q15 = q15;
        this.q16 = q16;
        this.q17 = q17;
        this.q18 = q18;
        this.q19 = q19;
        this.q20a = q20a;
        this.q20b = q20b;
        this.q20c = q20c;
        this.q21 = q21;
        this.q22a = q22a;
        this.q22b = q22b;
        this.q22c = q22c;
        this.q22d = q22d;
        this.q22e = q22e;
        this.q22f = q22f;
        this.q22g = q22g;
        this.q23a = q23a;
        this.q23b = q23b;
        this.q23c = q23c;
        this.q23d = q23d;
        this.q23e = q23e;
        this.q23f = q23f;
        this.q23g = q23g;
        this.q24 = q24;
        this.q25 = q25;
        this.q26 = q26;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getNo() {
        return no;
    }

    public void setNo(int no) {
        this.no = no;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getLastName_nameOfTheParent_firstName() {
        return lastName_nameOfTheParent_firstName;
    }

    public void setLastName_nameOfTheParent_firstName(String lastName_nameOfTheParent_firstName) {
        this.lastName_nameOfTheParent_firstName = lastName_nameOfTheParent_firstName;
    }

    public String getJmbg() {
        return jmbg;
    }

    public void setJmbg(String jmbg) {
        this.jmbg = jmbg;
    }

    public String getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(String dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getTownship() {
        return township;
    }

    public void setTownship(String township) {
        this.township = township;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getPhoneHome() {
        return phoneHome;
    }

    public void setPhoneHome(String phoneHome) {
        this.phoneHome = phoneHome;
    }

    public String getPhoneJob() {
        return phoneJob;
    }

    public void setPhoneJob(String phoneJob) {
        this.phoneJob = phoneJob;
    }

    public String getPhoneMobile() {
        return phoneMobile;
    }

    public void setPhoneMobile(String phoneMobile) {
        this.phoneMobile = phoneMobile;
    }

    public String getCompanyOrSchool() {
        return companyOrSchool;
    }

    public void setCompanyOrSchool(String companyOrSchool) {
        this.companyOrSchool = companyOrSchool;
    }

    public String getProfession() {
        return profession;
    }

    public void setProfession(String profession) {
        this.profession = profession;
    }

    public int getNumberOfPreviousBloodDonations() {
        return numberOfPreviousBloodDonations;
    }

    public void setNumberOfPreviousBloodDonations(int numberOfPreviousBloodDonations) {
        this.numberOfPreviousBloodDonations = numberOfPreviousBloodDonations;
    }

    public String getBloodType() {
        return bloodType;
    }

    public void setBloodType(String bloodType) {
        this.bloodType = bloodType;
    }

    public String getNoteToMD() {
        return noteToMD;
    }

    public void setNoteToMD(String noteToMD) {
        this.noteToMD = noteToMD;
    }

    public String getCopperSulfate() {
        return copperSulfate;
    }

    public void setCopperSulfate(String copperSulfate) {
        this.copperSulfate = copperSulfate;
    }

    public int getNormalLevel() {
        return normalLevel;
    }

    public void setNormalLevel(int normalLevel) {
        this.normalLevel = normalLevel;
    }

    public int getLowLevel() {
        return lowLevel;
    }

    public void setLowLevel(int lowLevel) {
        this.lowLevel = lowLevel;
    }

    public String getHemoglobinometer() {
        return hemoglobinometer;
    }

    public void setHemoglobinometer(String hemoglobinometer) {
        this.hemoglobinometer = hemoglobinometer;
    }

    public String getReadValue() {
        return readValue;
    }

    public void setReadValue(String readValue) {
        this.readValue = readValue;
    }

    public String getLungs() {
        return lungs;
    }

    public void setLungs(String lungs) {
        this.lungs = lungs;
    }

    public String getHeart() {
        return heart;
    }

    public void setHeart(String heart) {
        this.heart = heart;
    }

    public String getTA() {
        return TA;
    }

    public void setTA(String TA) {
        this.TA = TA;
    }

    public String getTT() {
        return TT;
    }

    public void setTT(String TT) {
        this.TT = TT;
    }

    public String getTB() {
        return TB;
    }

    public void setTB(String TB) {
        this.TB = TB;
    }

    public String getBagType() {
        return bagType;
    }

    public void setBagType(String bagType) {
        this.bagType = bagType;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    public Boolean getAccepted() {
        return accepted;
    }

    public void setAccepted(Boolean accepted) {
        this.accepted = accepted;
    }

    public String getReasonForRejection() {
        return reasonForRejection;
    }

    public void setReasonForRejection(String reasonForRejection) {
        this.reasonForRejection = reasonForRejection;
    }

    public int getBagLotNumber() {
        return bagLotNumber;
    }

    public void setBagLotNumber(int bagLotNumber) {
        this.bagLotNumber = bagLotNumber;
    }

    public String getPunctureSite() {
        return punctureSite;
    }

    public void setPunctureSite(String punctureSite) {
        this.punctureSite = punctureSite;
    }

    public String getBeginingOfDonation() {
        return beginingOfDonation;
    }

    public void setBeginingOfDonation(String beginingOfDonation) {
        this.beginingOfDonation = beginingOfDonation;
    }

    public String getEndOfDonation() {
        return endOfDonation;
    }

    public void setEndOfDonation(String endOfDonation) {
        this.endOfDonation = endOfDonation;
    }

    public int getAmountOfBloodTaken() {
        return amountOfBloodTaken;
    }

    public void setAmountOfBloodTaken(int amountOfBloodTaken) {
        this.amountOfBloodTaken = amountOfBloodTaken;
    }

    public String getReasonForSuspension() {
        return reasonForSuspension;
    }

    public void setReasonForSuspension(String reasonForSuspension) {
        this.reasonForSuspension = reasonForSuspension;
    }

    public Boolean isQ1() {
        return q1;
    }

    public void setQ1(Boolean q1) {
        this.q1 = q1;
    }

    public Boolean isQ2() {
        return q2;
    }

    public void setQ2(Boolean q2) {
        this.q2 = q2;
    }

    public Boolean isQ3() {
        return q3;
    }

    public void setQ3(Boolean q3) {
        this.q3 = q3;
    }

    public Boolean isQ4() {
        return q4;
    }

    public void setQ4(Boolean q4) {
        this.q4 = q4;
    }

    public Boolean isQ5() {
        return q5;
    }

    public void setQ5(Boolean q5) {
        this.q5 = q5;
    }

    public Boolean isQ6() {
        return q6;
    }

    public void setQ6(Boolean q6) {
        this.q6 = q6;
    }

    public Boolean isQ7() {
        return q7;
    }

    public void setQ7(Boolean q7) {
        this.q7 = q7;
    }

    public Boolean isQ8() {
        return q8;
    }

    public void setQ8(Boolean q8) {
        this.q8 = q8;
    }

    public Boolean isQ9() {
        return q9;
    }

    public void setQ9(Boolean q9) {
        this.q9 = q9;
    }

    public Boolean isQ10() {
        return q10;
    }

    public void setQ10(Boolean q10) {
        this.q10 = q10;
    }

    public Boolean isQ11() {
        return q11;
    }

    public void setQ11(Boolean q11) {
        this.q11 = q11;
    }

    public Boolean isQ12() {
        return q12;
    }

    public void setQ12(Boolean q12) {
        this.q12 = q12;
    }

    public Boolean isQ13() {
        return q13;
    }

    public void setQ13(Boolean q13) {
        this.q13 = q13;
    }

    public Boolean isQ14() {
        return q14;
    }

    public void setQ14(Boolean q14) {
        this.q14 = q14;
    }

    public Boolean isQ15() {
        return q15;
    }

    public void setQ15(Boolean q15) {
        this.q15 = q15;
    }

    public Boolean isQ16() {
        return q16;
    }

    public void setQ16(Boolean q16) {
        this.q16 = q16;
    }

    public Boolean isQ17() {
        return q17;
    }

    public void setQ17(Boolean q17) {
        this.q17 = q17;
    }

    public Boolean isQ18() {
        return q18;
    }

    public void setQ18(Boolean q18) {
        this.q18 = q18;
    }

    public Boolean isQ19() {
        return q19;
    }

    public void setQ19(Boolean q19) {
        this.q19 = q19;
    }

    public Boolean isQ20a() {
        return q20a;
    }

    public void setQ20a(Boolean q20a) {
        this.q20a = q20a;
    }

    public Boolean isQ20b() {
        return q20b;
    }

    public void setQ20b(Boolean q20b) {
        this.q20b = q20b;
    }

    public Boolean isQ20c() {
        return q20c;
    }

    public void setQ20c(Boolean q20c) {
        this.q20c = q20c;
    }

    public Boolean isQ21() {
        return q21;
    }

    public void setQ21(Boolean q21) {
        this.q21 = q21;
    }

    public Boolean isQ22a() {
        return q22a;
    }

    public void setQ22a(Boolean q22a) {
        this.q22a = q22a;
    }

    public Boolean isQ22b() {
        return q22b;
    }

    public void setQ22b(Boolean q22b) {
        this.q22b = q22b;
    }

    public Boolean isQ22c() {
        return q22c;
    }

    public void setQ22c(Boolean q22c) {
        this.q22c = q22c;
    }

    public Boolean isQ22d() {
        return q22d;
    }

    public void setQ22d(Boolean q22d) {
        this.q22d = q22d;
    }

    public Boolean isQ22e() {
        return q22e;
    }

    public void setQ22e(Boolean q22e) {
        this.q22e = q22e;
    }

    public Boolean isQ22f() {
        return q22f;
    }

    public void setQ22f(Boolean q22f) {
        this.q22f = q22f;
    }

    public Boolean isQ22g() {
        return q22g;
    }

    public void setQ22g(Boolean q22g) {
        this.q22g = q22g;
    }

    public Boolean isQ23a() {
        return q23a;
    }

    public void setQ23a(Boolean q23a) {
        this.q23a = q23a;
    }

    public Boolean isQ23b() {
        return q23b;
    }

    public void setQ23b(Boolean q23b) {
        this.q23b = q23b;
    }

    public Boolean isQ23c() {
        return q23c;
    }

    public void setQ23c(Boolean q23c) {
        this.q23c = q23c;
    }

    public Boolean isQ23d() {
        return q23d;
    }

    public void setQ23d(Boolean q23d) {
        this.q23d = q23d;
    }

    public Boolean isQ23e() {
        return q23e;
    }

    public void setQ23e(Boolean q23e) {
        this.q23e = q23e;
    }

    public Boolean isQ23f() {
        return q23f;
    }

    public void setQ23f(Boolean q23f) {
        this.q23f = q23f;
    }

    public Boolean isQ23g() {
        return q23g;
    }

    public void setQ23g(Boolean q23g) {
        this.q23g = q23g;
    }

    public Boolean isQ24() {
        return q24;
    }

    public void setQ24(Boolean q24) {
        this.q24 = q24;
    }

    public Boolean isQ25() {
        return q25;
    }

    public void setQ25(Boolean q25) {
        this.q25 = q25;
    }

    public Boolean isQ26() {
        return q26;
    }

    public void setQ26(Boolean q26) {
        this.q26 = q26;
    }
}