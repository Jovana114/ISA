package com.example.demo.models;


import javax.persistence.*;

@Entity
@Table(name = "blood_report")
public class BloodReport {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Popunjava davalac

    private int num;
    private String date;
    private String name;
    private String jmbg;
    private String birth;
    private String gender;
    private String address;
    private String township;
    private String location;
    private String phone_home;
    private String phone_job;
    private String phone_mobile;
    private String company_or_school;
    private String profession;
    private int number_of_previous_blood_donations;

    // Popunjava sluzbeno lice

    private String blood_type;
    private String note_to_md;

    private String copper_sulfate;
    private int normal_level;
    private int low_level;
    private String hemoglobinometer;
    private String read_value;

    private String lungs;
    private String heart;
    private String TA;
    private String TT;
    private String TB;
    private String bag_type;
    private String note;
    private Boolean accepted;
    private String reason_for_rejection;

    private int bag_lot_number;

    private String puncture_site;
    private String begining_of_donation;
    private String end_of_donation;
    private int amount_of_blood_taken;
    private String reason_for_suspension;


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

    public BloodReport(){}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getNum() {
        return num;
    }

    public void setNum(int num) {
        this.num = num;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getJmbg() {
        return jmbg;
    }

    public void setJmbg(String jmbg) {
        this.jmbg = jmbg;
    }

    public String getBirth() {
        return birth;
    }

    public void setBirth(String birth) {
        this.birth = birth;
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

    public String getPhone_home() {
        return phone_home;
    }

    public void setPhone_home(String phone_home) {
        this.phone_home = phone_home;
    }

    public String getPhone_job() {
        return phone_job;
    }

    public void setPhone_job(String phone_job) {
        this.phone_job = phone_job;
    }

    public String getPhone_mobile() {
        return phone_mobile;
    }

    public void setPhone_mobile(String phone_mobile) {
        this.phone_mobile = phone_mobile;
    }

    public String getCompany_or_school() {
        return company_or_school;
    }

    public void setCompany_or_school(String company_or_school) {
        this.company_or_school = company_or_school;
    }

    public String getProfession() {
        return profession;
    }

    public void setProfession(String profession) {
        this.profession = profession;
    }

    public int getNumber_of_previous_blood_donations() {
        return number_of_previous_blood_donations;
    }

    public void setNumber_of_previous_blood_donations(int number_of_previous_blood_donations) {
        this.number_of_previous_blood_donations = number_of_previous_blood_donations;
    }

    public String getBlood_type() {
        return blood_type;
    }

    public void setBlood_type(String blood_type) {
        this.blood_type = blood_type;
    }

    public String getNote_to_md() {
        return note_to_md;
    }

    public void setNote_to_md(String note_to_md) {
        this.note_to_md = note_to_md;
    }

    public String getCopper_sulfate() {
        return copper_sulfate;
    }

    public void setCopper_sulfate(String copper_sulfate) {
        this.copper_sulfate = copper_sulfate;
    }

    public int getNormal_level() {
        return normal_level;
    }

    public void setNormal_level(int normal_level) {
        this.normal_level = normal_level;
    }

    public int getLow_level() {
        return low_level;
    }

    public void setLow_level(int low_level) {
        this.low_level = low_level;
    }

    public String getHemoglobinometer() {
        return hemoglobinometer;
    }

    public void setHemoglobinometer(String hemoglobinometer) {
        this.hemoglobinometer = hemoglobinometer;
    }

    public String getRead_value() {
        return read_value;
    }

    public void setRead_value(String read_value) {
        this.read_value = read_value;
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

    public String getBag_type() {
        return bag_type;
    }

    public void setBag_type(String bag_type) {
        this.bag_type = bag_type;
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

    public String getReason_for_rejection() {
        return reason_for_rejection;
    }

    public void setReason_for_rejection(String reason_for_rejection) {
        this.reason_for_rejection = reason_for_rejection;
    }

    public int getBag_lot_number() {
        return bag_lot_number;
    }

    public void setBag_lot_number(int bag_lot_number) {
        this.bag_lot_number = bag_lot_number;
    }

    public String getPuncture_site() {
        return puncture_site;
    }

    public void setPuncture_site(String puncture_site) {
        this.puncture_site = puncture_site;
    }

    public String getBegining_of_donation() {
        return begining_of_donation;
    }

    public void setBegining_of_donation(String begining_of_donation) {
        this.begining_of_donation = begining_of_donation;
    }

    public String getEnd_of_donation() {
        return end_of_donation;
    }

    public void setEnd_of_donation(String end_of_donation) {
        this.end_of_donation = end_of_donation;
    }

    public int getAmount_of_blood_taken() {
        return amount_of_blood_taken;
    }

    public void setAmount_of_blood_taken(int amount_of_blood_taken) {
        this.amount_of_blood_taken = amount_of_blood_taken;
    }

    public String getReason_for_suspension() {
        return reason_for_suspension;
    }

    public void setReason_for_suspension(String reason_for_suspension) {
        this.reason_for_suspension = reason_for_suspension;
    }

    public Boolean getQ1() {
        return q1;
    }

    public void setQ1(Boolean q1) {
        this.q1 = q1;
    }

    public Boolean getQ2() {
        return q2;
    }

    public void setQ2(Boolean q2) {
        this.q2 = q2;
    }

    public Boolean getQ3() {
        return q3;
    }

    public void setQ3(Boolean q3) {
        this.q3 = q3;
    }

    public Boolean getQ4() {
        return q4;
    }

    public void setQ4(Boolean q4) {
        this.q4 = q4;
    }

    public Boolean getQ5() {
        return q5;
    }

    public void setQ5(Boolean q5) {
        this.q5 = q5;
    }

    public Boolean getQ6() {
        return q6;
    }

    public void setQ6(Boolean q6) {
        this.q6 = q6;
    }

    public Boolean getQ7() {
        return q7;
    }

    public void setQ7(Boolean q7) {
        this.q7 = q7;
    }

    public Boolean getQ8() {
        return q8;
    }

    public void setQ8(Boolean q8) {
        this.q8 = q8;
    }

    public Boolean getQ9() {
        return q9;
    }

    public void setQ9(Boolean q9) {
        this.q9 = q9;
    }

    public Boolean getQ10() {
        return q10;
    }

    public void setQ10(Boolean q10) {
        this.q10 = q10;
    }

    public Boolean getQ11() {
        return q11;
    }

    public void setQ11(Boolean q11) {
        this.q11 = q11;
    }

    public Boolean getQ12() {
        return q12;
    }

    public void setQ12(Boolean q12) {
        this.q12 = q12;
    }

    public Boolean getQ13() {
        return q13;
    }

    public void setQ13(Boolean q13) {
        this.q13 = q13;
    }

    public Boolean getQ14() {
        return q14;
    }

    public void setQ14(Boolean q14) {
        this.q14 = q14;
    }

    public Boolean getQ15() {
        return q15;
    }

    public void setQ15(Boolean q15) {
        this.q15 = q15;
    }

    public Boolean getQ16() {
        return q16;
    }

    public void setQ16(Boolean q16) {
        this.q16 = q16;
    }

    public Boolean getQ17() {
        return q17;
    }

    public void setQ17(Boolean q17) {
        this.q17 = q17;
    }

    public Boolean getQ18() {
        return q18;
    }

    public void setQ18(Boolean q18) {
        this.q18 = q18;
    }

    public Boolean getQ19() {
        return q19;
    }

    public void setQ19(Boolean q19) {
        this.q19 = q19;
    }

    public Boolean getQ20a() {
        return q20a;
    }

    public void setQ20a(Boolean q20a) {
        this.q20a = q20a;
    }

    public Boolean getQ20b() {
        return q20b;
    }

    public void setQ20b(Boolean q20b) {
        this.q20b = q20b;
    }

    public Boolean getQ20c() {
        return q20c;
    }

    public void setQ20c(Boolean q20c) {
        this.q20c = q20c;
    }

    public Boolean getQ21() {
        return q21;
    }

    public void setQ21(Boolean q21) {
        this.q21 = q21;
    }

    public Boolean getQ22a() {
        return q22a;
    }

    public void setQ22a(Boolean q22a) {
        this.q22a = q22a;
    }

    public Boolean getQ22b() {
        return q22b;
    }

    public void setQ22b(Boolean q22b) {
        this.q22b = q22b;
    }

    public Boolean getQ22c() {
        return q22c;
    }

    public void setQ22c(Boolean q22c) {
        this.q22c = q22c;
    }

    public Boolean getQ22d() {
        return q22d;
    }

    public void setQ22d(Boolean q22d) {
        this.q22d = q22d;
    }

    public Boolean getQ22e() {
        return q22e;
    }

    public void setQ22e(Boolean q22e) {
        this.q22e = q22e;
    }

    public Boolean getQ22f() {
        return q22f;
    }

    public void setQ22f(Boolean q22f) {
        this.q22f = q22f;
    }

    public Boolean getQ22g() {
        return q22g;
    }

    public void setQ22g(Boolean q22g) {
        this.q22g = q22g;
    }

    public Boolean getQ23a() {
        return q23a;
    }

    public void setQ23a(Boolean q23a) {
        this.q23a = q23a;
    }

    public Boolean getQ23b() {
        return q23b;
    }

    public void setQ23b(Boolean q23b) {
        this.q23b = q23b;
    }

    public Boolean getQ23c() {
        return q23c;
    }

    public void setQ23c(Boolean q23c) {
        this.q23c = q23c;
    }

    public Boolean getQ23d() {
        return q23d;
    }

    public void setQ23d(Boolean q23d) {
        this.q23d = q23d;
    }

    public Boolean getQ23e() {
        return q23e;
    }

    public void setQ23e(Boolean q23e) {
        this.q23e = q23e;
    }

    public Boolean getQ23f() {
        return q23f;
    }

    public void setQ23f(Boolean q23f) {
        this.q23f = q23f;
    }

    public Boolean getQ23g() {
        return q23g;
    }

    public void setQ23g(Boolean q23g) {
        this.q23g = q23g;
    }

    public Boolean getQ24() {
        return q24;
    }

    public void setQ24(Boolean q24) {
        this.q24 = q24;
    }

    public Boolean getQ25() {
        return q25;
    }

    public void setQ25(Boolean q25) {
        this.q25 = q25;
    }

    public Boolean getQ26() {
        return q26;
    }

    public void setQ26(Boolean q26) {
        this.q26 = q26;
    }

    public BloodReport(int num, String date, String name, String jmbg, String birth, String gender, String address, String township, String location, String phone_home, String phone_job, String phone_mobile, String company_or_school, String profession, int number_of_previous_blood_donations, String blood_type, String note_to_md, String copper_sulfate, int normal_level, int low_level, String hemoglobinometer, String read_value, String lungs, String heart, String TA, String TT, String TB, String bag_type, String note, Boolean accepted, String reason_for_rejection, int bag_lot_number, String puncture_site, String begining_of_donation, String end_of_donation, int amount_of_blood_taken, String reason_for_suspension, Boolean q1, Boolean q2, Boolean q3, Boolean q4, Boolean q5, Boolean q6, Boolean q7, Boolean q8, Boolean q9, Boolean q10, Boolean q11, Boolean q12, Boolean q13, Boolean q14, Boolean q15, Boolean q16, Boolean q17, Boolean q18, Boolean q19, Boolean q20a, Boolean q20b, Boolean q20c, Boolean q21, Boolean q22a, Boolean q22b, Boolean q22c, Boolean q22d, Boolean q22e, Boolean q22f, Boolean q22g, Boolean q23a, Boolean q23b, Boolean q23c, Boolean q23d, Boolean q23e, Boolean q23f, Boolean q23g, Boolean q24, Boolean q25, Boolean q26) {
        this.num = num;
        this.date = date;
        this.name = name;
        this.jmbg = jmbg;
        this.birth = birth;
        this.gender = gender;
        this.address = address;
        this.township = township;
        this.location = location;
        this.phone_home = phone_home;
        this.phone_job = phone_job;
        this.phone_mobile = phone_mobile;
        this.company_or_school = company_or_school;
        this.profession = profession;
        this.number_of_previous_blood_donations = number_of_previous_blood_donations;
        this.blood_type = blood_type;
        this.note_to_md = note_to_md;
        this.copper_sulfate = copper_sulfate;
        this.normal_level = normal_level;
        this.low_level = low_level;
        this.hemoglobinometer = hemoglobinometer;
        this.read_value = read_value;
        this.lungs = lungs;
        this.heart = heart;
        this.TA = TA;
        this.TT = TT;
        this.TB = TB;
        this.bag_type = bag_type;
        this.note = note;
        this.accepted = accepted;
        this.reason_for_rejection = reason_for_rejection;
        this.bag_lot_number = bag_lot_number;
        this.puncture_site = puncture_site;
        this.begining_of_donation = begining_of_donation;
        this.end_of_donation = end_of_donation;
        this.amount_of_blood_taken = amount_of_blood_taken;
        this.reason_for_suspension = reason_for_suspension;
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

    public BloodReport(Long id, int num, String date, String name, String jmbg, String birth, String gender, String address, String township, String location, String phone_home, String phone_job, String phone_mobile, String company_or_school, String profession, int number_of_previous_blood_donations, String blood_type, String note_to_md, String copper_sulfate, int normal_level, int low_level, String hemoglobinometer, String read_value, String lungs, String heart, String TA, String TT, String TB, String bag_type, String note, Boolean accepted, String reason_for_rejection, int bag_lot_number, String puncture_site, String begining_of_donation, String end_of_donation, int amount_of_blood_taken, String reason_for_suspension, Boolean q1, Boolean q2, Boolean q3, Boolean q4, Boolean q5, Boolean q6, Boolean q7, Boolean q8, Boolean q9, Boolean q10, Boolean q11, Boolean q12, Boolean q13, Boolean q14, Boolean q15, Boolean q16, Boolean q17, Boolean q18, Boolean q19, Boolean q20a, Boolean q20b, Boolean q20c, Boolean q21, Boolean q22a, Boolean q22b, Boolean q22c, Boolean q22d, Boolean q22e, Boolean q22f, Boolean q22g, Boolean q23a, Boolean q23b, Boolean q23c, Boolean q23d, Boolean q23e, Boolean q23f, Boolean q23g, Boolean q24, Boolean q25, Boolean q26) {
        this.id = id;
        this.num = num;
        this.date = date;
        this.name = name;
        this.jmbg = jmbg;
        this.birth = birth;
        this.gender = gender;
        this.address = address;
        this.township = township;
        this.location = location;
        this.phone_home = phone_home;
        this.phone_job = phone_job;
        this.phone_mobile = phone_mobile;
        this.company_or_school = company_or_school;
        this.profession = profession;
        this.number_of_previous_blood_donations = number_of_previous_blood_donations;
        this.blood_type = blood_type;
        this.note_to_md = note_to_md;
        this.copper_sulfate = copper_sulfate;
        this.normal_level = normal_level;
        this.low_level = low_level;
        this.hemoglobinometer = hemoglobinometer;
        this.read_value = read_value;
        this.lungs = lungs;
        this.heart = heart;
        this.TA = TA;
        this.TT = TT;
        this.TB = TB;
        this.bag_type = bag_type;
        this.note = note;
        this.accepted = accepted;
        this.reason_for_rejection = reason_for_rejection;
        this.bag_lot_number = bag_lot_number;
        this.puncture_site = puncture_site;
        this.begining_of_donation = begining_of_donation;
        this.end_of_donation = end_of_donation;
        this.amount_of_blood_taken = amount_of_blood_taken;
        this.reason_for_suspension = reason_for_suspension;
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

    public BloodReport(int num, String date, String name, String jmbg, String birth, String gender, String address, String township, String location, String phone_home, String phone_job, String phone_mobile, String company_or_school, String profession, int number_of_previous_blood_donations, Boolean q1, Boolean q2, Boolean q3, Boolean q4, Boolean q5, Boolean q6, Boolean q7, Boolean q8, Boolean q9, Boolean q10, Boolean q11, Boolean q12, Boolean q13, Boolean q14, Boolean q15, Boolean q16, Boolean q17, Boolean q18, Boolean q19, Boolean q20a, Boolean q20b, Boolean q20c, Boolean q21, Boolean q22a, Boolean q22b, Boolean q22c, Boolean q22d, Boolean q22e, Boolean q22f, Boolean q22g, Boolean q23a, Boolean q23b, Boolean q23c, Boolean q23d, Boolean q23e, Boolean q23f, Boolean q23g, Boolean q24, Boolean q25, Boolean q26) {
        this.num = num;
        this.date = date;
        this.name = name;
        this.jmbg = jmbg;
        this.birth = birth;
        this.gender = gender;
        this.address = address;
        this.township = township;
        this.location = location;
        this.phone_home = phone_home;
        this.phone_job = phone_job;
        this.phone_mobile = phone_mobile;
        this.company_or_school = company_or_school;
        this.profession = profession;
        this.number_of_previous_blood_donations = number_of_previous_blood_donations;
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

    public BloodReport(Long id, String blood_type, String note_to_md, String copper_sulfate, int normal_level, int low_level, String hemoglobinometer, String read_value, String lungs, String heart, String TA, String TT, String TB, String bag_type, String note, Boolean accepted, String reason_for_rejection, int bag_lot_number, String puncture_site, String begining_of_donation, String end_of_donation, int amount_of_blood_taken, String reason_for_suspension) {
        this.id = id;
        this.blood_type = blood_type;
        this.note_to_md = note_to_md;
        this.copper_sulfate = copper_sulfate;
        this.normal_level = normal_level;
        this.low_level = low_level;
        this.hemoglobinometer = hemoglobinometer;
        this.read_value = read_value;
        this.lungs = lungs;
        this.heart = heart;
        this.TA = TA;
        this.TT = TT;
        this.TB = TB;
        this.bag_type = bag_type;
        this.note = note;
        this.accepted = accepted;
        this.reason_for_rejection = reason_for_rejection;
        this.bag_lot_number = bag_lot_number;
        this.puncture_site = puncture_site;
        this.begining_of_donation = begining_of_donation;
        this.end_of_donation = end_of_donation;
        this.amount_of_blood_taken = amount_of_blood_taken;
        this.reason_for_suspension = reason_for_suspension;
    }

    public BloodReport(String blood_type, String note_to_md, String copper_sulfate, int normal_level, int low_level, String hemoglobinometer, String read_value, String lungs, String heart, String TA, String TT, String TB, String bag_type, String note, Boolean accepted, String reason_for_rejection, int bag_lot_number, String puncture_site, String begining_of_donation, String end_of_donation, int amount_of_blood_taken, String reason_for_suspension) {
        this.blood_type = blood_type;
        this.note_to_md = note_to_md;
        this.copper_sulfate = copper_sulfate;
        this.normal_level = normal_level;
        this.low_level = low_level;
        this.hemoglobinometer = hemoglobinometer;
        this.read_value = read_value;
        this.lungs = lungs;
        this.heart = heart;
        this.TA = TA;
        this.TT = TT;
        this.TB = TB;
        this.bag_type = bag_type;
        this.note = note;
        this.accepted = accepted;
        this.reason_for_rejection = reason_for_rejection;
        this.bag_lot_number = bag_lot_number;
        this.puncture_site = puncture_site;
        this.begining_of_donation = begining_of_donation;
        this.end_of_donation = end_of_donation;
        this.amount_of_blood_taken = amount_of_blood_taken;
        this.reason_for_suspension = reason_for_suspension;
    }
}