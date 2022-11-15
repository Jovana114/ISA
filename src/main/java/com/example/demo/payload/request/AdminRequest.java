package com.example.demo.payload.request;

import javax.validation.constraints.NotBlank;
import java.util.List;

public class AdminRequest {

    @NotBlank
    private Long staffadmin;

    private Long center;

    public Long getCenter() {
        return center;
    }

    public void setCenter(Long center) {
        this.center = center;
    }

    public Long getStaffadmin() {
        return staffadmin;
    }

    public void setStaffadmin(Long staffadmin) {
        this.staffadmin = staffadmin;
    }


}
