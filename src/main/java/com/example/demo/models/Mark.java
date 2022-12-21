package com.example.demo.models;

import javax.persistence.*;

@Entity
@Table(name = "marks")
public class Mark {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private int mark;

    @Column
    private Long center_profile;

    @Column
    private Long user_id;

    public Mark(){}

    public Mark(int mark, Long centerProfile, Long user) {
        this.mark = mark;
        this.center_profile = centerProfile;
        this.user_id = user;
    }

    public Mark(Long id, int mark, Long center_profile, Long user_id) {
        this.id = id;
        this.mark = mark;
        this.center_profile = center_profile;
        this.user_id = user_id;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getMark() {
        return mark;
    }

    public void setMark(int mark) {
        this.mark = mark;
    }

    public Long getCenterProfile() {
        return center_profile;
    }

    public void setCenterProfile(Long centerProfile) {
        this.center_profile = centerProfile;
    }

    public Long getUser() {
        return user_id;
    }

    public void setUser(Long user) {
        this.user_id = user;
    }
}