package com.example.demo.controllers;

import com.example.demo.models.BloodReport;
import com.example.demo.payload.request.CenterRequest;
import com.example.demo.payload.request.UpdateReportAdminCenterRequest;
import com.example.demo.payload.request.UpdateReportUserRequest;
import com.example.demo.payload.response.MessageResponse;
import com.example.demo.repository.BloodReportRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import java.util.Optional;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("api/bloodReport")
public class BloodReportController {

    @Autowired
    BloodReportRepository bloodReportRepository;

    @PostMapping("/createBloodReport/")
    @PreAuthorize("hasAuthority('ROLE_USER')")
    public ResponseEntity<?> createBloodReport(@RequestBody BloodReport bloodReport)
    {

        BloodReport bloodReport1 = new BloodReport(bloodReport.getNum(), bloodReport.getDate(), bloodReport.getName(),
                bloodReport.getJmbg(), bloodReport.getBirth(), bloodReport.getGender(), bloodReport.getAddress(),
                bloodReport.getTownship(), bloodReport.getLocation(), bloodReport.getPhone_home(), bloodReport.getPhone_job(),
                bloodReport.getPhone_mobile(), bloodReport.getCompany_or_school(), bloodReport.getProfession(),
                bloodReport.getNumber_of_previous_blood_donations(),
                "", "", "", 0,
                0, "", "", "","",
                "", "", "", "",
                "", false, "", 0,
                "", "", "",
                0, "", bloodReport.getQ1(), bloodReport.getQ2(), bloodReport.getQ3(),
                bloodReport.getQ4(),bloodReport.getQ5(),
                bloodReport.getQ6(), bloodReport.getQ7(), bloodReport.getQ8(), bloodReport.getQ9(),
                bloodReport.getQ10(), bloodReport.getQ11(), bloodReport.getQ12(), bloodReport.getQ13(), bloodReport.getQ14(),
                bloodReport.getQ15(),bloodReport.getQ16(), bloodReport.getQ17(), bloodReport.getQ18(), bloodReport.getQ19(),
                bloodReport.getQ20a(), bloodReport.getQ20b(), bloodReport.getQ20b(), bloodReport.getQ21(),
                bloodReport.getQ22a(), bloodReport.getQ22b(),bloodReport.getQ22c(), bloodReport.getQ22d(),
                bloodReport.getQ22e(), bloodReport.getQ22f(), bloodReport.getQ22g(), bloodReport.getQ23a(),
                bloodReport.getQ23b(),
                bloodReport.getQ23d(), bloodReport.getQ23d(), bloodReport.getQ23e(),bloodReport.getQ23f(),
                bloodReport.getQ23g(), bloodReport.getQ24(), bloodReport.getQ25(), bloodReport.getQ26());

        bloodReportRepository.save(bloodReport1);

        return ResponseEntity.ok(new MessageResponse("Blood report registered successfully!"));
    }

    @PutMapping("/updateBloodReport/{id}")
    @PreAuthorize("hasAuthority('ROLE_STAFF')")
    public ResponseEntity<?> updateBloodReportByStaff(@PathVariable("id") Long id, @RequestBody UpdateReportAdminCenterRequest updateReportAdminCenterRequest) {
        Optional<BloodReport> BloodReport = bloodReportRepository.findById(id);

        if (BloodReport.isPresent()) {
            BloodReport _BloodReport = BloodReport.get();

            try {
                _BloodReport.setBlood_type(updateReportAdminCenterRequest.getBlood_type());
                _BloodReport.setNote_to_md(updateReportAdminCenterRequest.getNote_to_md());
                _BloodReport.setCopper_sulfate(updateReportAdminCenterRequest.getCopper_sulfate());
                _BloodReport.setNormal_level(updateReportAdminCenterRequest.getNormal_level());
                _BloodReport.setLow_level(updateReportAdminCenterRequest.getLow_level());
                _BloodReport.setHemoglobinometer(updateReportAdminCenterRequest.getHemoglobinometer());
                _BloodReport.setRead_value(updateReportAdminCenterRequest.getRead_value());
                _BloodReport.setLungs(updateReportAdminCenterRequest.getLungs());
                _BloodReport.setHeart(updateReportAdminCenterRequest.getHeart());
                _BloodReport.setTA(updateReportAdminCenterRequest.getTA());
                _BloodReport.setTT(updateReportAdminCenterRequest.getTT());
                _BloodReport.setTB(updateReportAdminCenterRequest.getTB());
                _BloodReport.setBag_type(updateReportAdminCenterRequest.getBag_type());
                _BloodReport.setNote(updateReportAdminCenterRequest.getNote());
                _BloodReport.setAccepted(updateReportAdminCenterRequest.getAccepted());
                _BloodReport.setReason_for_rejection(updateReportAdminCenterRequest.getReason_for_rejection());
                _BloodReport.setBag_lot_number(updateReportAdminCenterRequest.getBag_lot_number());
                _BloodReport.setPuncture_site(updateReportAdminCenterRequest.getPuncture_site());
                _BloodReport.setBegining_of_donation(updateReportAdminCenterRequest.getBegining_of_donation());
                _BloodReport.setEnd_of_donation(updateReportAdminCenterRequest.getEnd_of_donation());
                _BloodReport.setAmount_of_blood_taken(updateReportAdminCenterRequest.getAmount_of_blood_taken());
                _BloodReport.setReason_for_suspension(updateReportAdminCenterRequest.getReason_for_suspension());
                bloodReportRepository.save(_BloodReport);
                return new ResponseEntity<>(HttpStatus.OK);
            } catch (Exception e) {
                return ResponseEntity
                        .badRequest()
                        .body(new MessageResponse("Error exception: " + e));
            }
        }else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }


    @PutMapping("/updateBloodReportByUser/{id}")
    @PreAuthorize("hasAuthority('ROLE_USER')")
    public ResponseEntity<?> updateBloodReportByUser(@PathVariable("id") Long id, @RequestBody UpdateReportUserRequest updateReportUserRequest) {
        Optional<BloodReport> BloodReport = bloodReportRepository.findById(id);

        if (BloodReport.isPresent()) {
            BloodReport _BloodReport = BloodReport.get();

            try {
                _BloodReport.setNum(updateReportUserRequest.getNum());
                _BloodReport.setDate(updateReportUserRequest.getDate());
                _BloodReport.setName(updateReportUserRequest.getName());
                _BloodReport.setJmbg(updateReportUserRequest.getJmbg());
                _BloodReport.setBirth(updateReportUserRequest.getBirth());
                _BloodReport.setGender(updateReportUserRequest.getGender());
                _BloodReport.setAddress(updateReportUserRequest.getAddress());
                _BloodReport.setTownship(updateReportUserRequest.getTownship());
                _BloodReport.setLocation(updateReportUserRequest.getLocation());
                _BloodReport.setPhone_home(updateReportUserRequest.getPhone_home());
                _BloodReport.setPhone_job(updateReportUserRequest.getPhone_job());
                _BloodReport.setPhone_mobile(updateReportUserRequest.getPhone_mobile());
                _BloodReport.setCompany_or_school(updateReportUserRequest.getCompany_or_school());
                _BloodReport.setProfession(updateReportUserRequest.getProfession());
                _BloodReport.setNumber_of_previous_blood_donations(updateReportUserRequest.getNumber_of_previous_blood_donations());
                _BloodReport.setQ1(updateReportUserRequest.getQ1());
                _BloodReport.setQ2(updateReportUserRequest.getQ2());
                _BloodReport.setQ3(updateReportUserRequest.getQ3());
                _BloodReport.setQ4(updateReportUserRequest.getQ4());
                _BloodReport.setQ5(updateReportUserRequest.getQ5());
                _BloodReport.setQ6(updateReportUserRequest.getQ6());
                _BloodReport.setQ7(updateReportUserRequest.getQ7());
                _BloodReport.setQ8(updateReportUserRequest.getQ1());
                _BloodReport.setQ9(updateReportUserRequest.getQ2());
                _BloodReport.setQ10(updateReportUserRequest.getQ10());
                _BloodReport.setQ11(updateReportUserRequest.getQ11());
                _BloodReport.setQ12(updateReportUserRequest.getQ12());
                _BloodReport.setQ13(updateReportUserRequest.getQ13());
                _BloodReport.setQ14(updateReportUserRequest.getQ14());
                _BloodReport.setQ15(updateReportUserRequest.getQ15());
                _BloodReport.setQ16(updateReportUserRequest.getQ16());
                _BloodReport.setQ17(updateReportUserRequest.getQ17());
                _BloodReport.setQ18(updateReportUserRequest.getQ18());
                _BloodReport.setQ19(updateReportUserRequest.getQ19());
                _BloodReport.setQ20a(updateReportUserRequest.getQ20a());
                _BloodReport.setQ20b(updateReportUserRequest.getQ20b());
                _BloodReport.setQ20c(updateReportUserRequest.getQ20b());
                _BloodReport.setQ21(updateReportUserRequest.getQ21());
                _BloodReport.setQ22a(updateReportUserRequest.getQ22a());
                _BloodReport.setQ22b(updateReportUserRequest.getQ22b());
                _BloodReport.setQ22c(updateReportUserRequest.getQ22c());
                _BloodReport.setQ22d(updateReportUserRequest.getQ22d());
                _BloodReport.setQ22e(updateReportUserRequest.getQ22e());
                _BloodReport.setQ22f(updateReportUserRequest.getQ22f());
                _BloodReport.setQ22g(updateReportUserRequest.getQ22g());
                _BloodReport.setQ23a(updateReportUserRequest.getQ23a());
                _BloodReport.setQ23b(updateReportUserRequest.getQ23b());
                _BloodReport.setQ23c(updateReportUserRequest.getQ23c());
                _BloodReport.setQ23d(updateReportUserRequest.getQ23d());
                _BloodReport.setQ23e(updateReportUserRequest.getQ23e());
                _BloodReport.setQ23f(updateReportUserRequest.getQ23f());
                _BloodReport.setQ23g(updateReportUserRequest.getQ23g());
                _BloodReport.setQ24(updateReportUserRequest.getQ24());
                _BloodReport.setQ25(updateReportUserRequest.getQ25());
                _BloodReport.setQ26(updateReportUserRequest.getQ26());
                bloodReportRepository.save(_BloodReport);
                return new ResponseEntity<>(HttpStatus.OK);
            } catch (Exception e) {
                return ResponseEntity
                        .badRequest()
                        .body(new MessageResponse("Error exception: " + e));
            }
        }else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

}
