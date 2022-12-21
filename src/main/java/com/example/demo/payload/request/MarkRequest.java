package com.example.demo.payload.request;

public class MarkRequest {

    private int mark;
    private String center_profile_name;

    public MarkRequest(){}

    public MarkRequest(int mark, String center_profile_name) {
        this.mark = mark;
        this.center_profile_name = center_profile_name;
    }

    public String getCenter_profile_name() {
        return center_profile_name;
    }

    public void setCenter_profile_name(String center_profile_name) {
        this.center_profile_name = center_profile_name;
    }

    public int getMark() {
        return mark;
    }

    public void setMark(int mark) {
        this.mark = mark;
    }
}
