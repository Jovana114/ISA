package com.example.demo.payload.request;

public class UpdateReportAdminCenterRequest {

    private Boolean bloodA;
    private Boolean bloodB;
    private Boolean bloodAB;
    private Boolean bloodO;

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

    // equipment
    private int syringes_number;
    private int gloves_number;
    private int bag_lot_number;

    private String puncture_site;
    private String begining_of_donation;
    private String end_of_donation;
    private int amount_of_blood_taken;
    private String reason_for_suspension;

    public Boolean getBloodA() {
        return bloodA;
    }

    public void setBloodA(Boolean bloodA) {
        this.bloodA = bloodA;
    }

    public Boolean getBloodB() {
        return bloodB;
    }

    public void setBloodB(Boolean bloodB) {
        this.bloodB = bloodB;
    }

    public Boolean getBloodAB() {
        return bloodAB;
    }

    public void setBloodAB(Boolean bloodAB) {
        this.bloodAB = bloodAB;
    }

    public Boolean getBloodO() {
        return bloodO;
    }

    public void setBloodO(Boolean bloodO) {
        this.bloodO = bloodO;
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

    public int getSyringes_number() {
        return syringes_number;
    }

    public void setSyringes_number(int syringes_number) {
        this.syringes_number = syringes_number;
    }

    public int getGloves_number() {
        return gloves_number;
    }

    public void setGloves_number(int gloves_number) {
        this.gloves_number = gloves_number;
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

    public UpdateReportAdminCenterRequest(Boolean bloodA, Boolean bloodB, Boolean bloodAB, Boolean bloodO, String note_to_md, String copper_sulfate, int normal_level, int low_level, String hemoglobinometer, String read_value, String lungs, String heart, String TA, String TT, String TB, String bag_type, String note, Boolean accepted, String reason_for_rejection, int syringes_number, int gloves_number, int bag_lot_number, String puncture_site, String begining_of_donation, String end_of_donation, int amount_of_blood_taken, String reason_for_suspension) {
        this.bloodA = bloodA;
        this.bloodB = bloodB;
        this.bloodAB = bloodAB;
        this.bloodO = bloodO;
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
        this.syringes_number = syringes_number;
        this.gloves_number = gloves_number;
        this.bag_lot_number = bag_lot_number;
        this.puncture_site = puncture_site;
        this.begining_of_donation = begining_of_donation;
        this.end_of_donation = end_of_donation;
        this.amount_of_blood_taken = amount_of_blood_taken;
        this.reason_for_suspension = reason_for_suspension;
    }
}
